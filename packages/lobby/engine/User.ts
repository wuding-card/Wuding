import { PlayerSignal } from "../regulates/interfaces";
import { logger } from "../tools/Logger";
import { Room } from "./Room";
import { RoomManager } from "./RoomManager";

export class User {
  socket: any; // The handle got by socket.io.
  userName: string | null = null;
  room: Room | null = null;
  emit(type: string, para: any) {
    this.socket.emit(type, para);
  }
  joinRoom(name: string) {
      const roomManager = RoomManager.getInstance();
      const socket = this.socket;
      if(this.userName == null) {
        socket.emit("alert-message", "请先登录");
        logger.warn('User with socket id %s tried to create room with name %s without login.', socket.id, name);
        return;
      }else{
        // Leave old room if the new room is not the old room.
        if(roomManager.getRoom(name) !== this.room) {
          if(this.room != null) {
            this.room.removeUser(this);
          }
        }
        // Create new room if no room with specified room exists.
        if(roomManager.getRoom(name) == undefined) { 
          logger.info('User %s CREATED a new room with name: %s.', this.userName, name);
          roomManager.createRoom(name);
        }
        
        this.room = roomManager.getRoom(name);

        if(this.room.hasUser(this)) {
          logger.info('User %s HAS ALREADY IN room with name %s', this.userName, name);
        }else{
          if(this.room.addUser(this)) {
            logger.info('User %s joined room with name: %s successfully.', this.userName, name);
          }else{
            logger.warn('User %s join room with name %s failed: room is full.', this.userName, name);
            return;
          }
        }
        // Sync the new info to all users in the room.
        this.room.renew();
      }
  }
  constructor(socket: any) {
    this.socket = socket;
    // Function Binding.
    this.joinRoom = this.joinRoom.bind(this);

    // Confirm Connect.
    socket.emit("confirm-connect");
    logger.info('User with socket id %s connected!', socket.id);
    // Register user login event:
    // Now temporarily login without check.
    socket.on("user-login", (name: string) => {
      logger.info('User with socket id %s has logined with name %s', socket.id, name);
      this.userName = name;
    });
    // Register join room event:
    // If room not exist it will create a new one.
    socket.on("join-room", this.joinRoom);
    // Start the game.
    socket.on("room-start-game", () => {
      if(this.userName == null) {
        socket.emit("alert-message", "请先登录");
        logger.warn('User with socket id %s try to start game without login.', socket.id);
        return;
      }
      if(this.room == null) {
        socket.emit("alert-message", "请先进入房间");
        logger.warn('User %s try to start game but never in any room.', this.userName);
        return;
      }
      this.room.startGame();
    });
    // Swap user place.
    socket.on("swap-room-user", () => {
      logger.verbose("Received swap place request from user with socket id %s", socket.id);
      if(this.userName == null) {
        logger.warn('User with socket id %s try sawp users in a room but never login.', socket.id);
        return;
      }
      if(this.room == null) {
        logger.warn('User %s try to sawp users in a room but never in any room.', this.userName);
        return;
      }
      this.room.swapUser();
    });
    // Leave the room.
    socket.on("leave-room", () => {
      if(this.userName == null) {
        logger.warn('User with socket id %s try leave a room but never login.', socket.id);
        return;
      }
      if(this.room == null) {
        logger.warn('User %s try to leave a room but never in any room.', this.userName);
        return;
      }
      this.room.removeUser(this);
      socket.emit("leave-room-successful");
    });
    // Transport ingame signals.
    socket.on("player-signal-ingame",  (val: PlayerSignal) => {
      if(this.userName == null) {
        logger.warn('User with socket id %s try send a ingame signal but never login.', socket.id);
        return;
      }
      if(this.room == null) {
        logger.warn('User %s try to sent a ingame signal but never in any room.', this.userName);
        return;
      }
      this.room.iterate(this, val);
    });
  }
}
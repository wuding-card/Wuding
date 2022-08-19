const arr = [["4","即时","","通用","剑七十二","练气","1","","","对目标造成1点伤害，将此牌洗入己方灵犀瓶。","","",""],["3","即时","","通用","屠鸡剑法","练气","2","","","对目标造成1点伤害，若使用者装备了名称中带有“剑”的法器，则最终的伤害值×2","","",""],["2","即时","","通用","传经阁","练气","2","","","抽取灵犀瓶第一张心法牌，洗牌","","",""],["1","即时","","通用","基础拳法","练气","2","","","造成3点伤害","","",""],["1","即时","","通用","接受教育","练气","2","","","抽一张牌","","",""],["1","即时","","通用","基础剑法","金丹","4","","","造成4点伤害","","",""],["2","即时","","通用","查阅文献","炼虚","3","","","抽一张牌，如果该牌是法术牌，展示之，再抽一张牌","","",""],["3","触发","","通用","问心关","练气","2","","敌方修士达到金丹修为时","查看敌方修士手牌","","",""],["2","持续","","通用","求知欲","金丹","2","2","","你的抽牌阶段额外抽一张牌","","",""],["6","法器","","通用","天剑-松柏","练气","2","","","横置，3灵：造成等同于敌方已损失的命火数的伤害，横置你的全部修为，结束回合。","","","2"],["3","法器","","通用","钛极甲","练气","2","","","抵抗力学伤害时视为防御3；无法抵抗电磁伤害，电磁伤害对你造成双倍伤害。","","5","2"],["1","法器","","通用","制式法衣","练气","","","","","","1","2"],["1","法器","","通用","制式长剑","练气","","","","","1","","2"],["4","法器","","通用","天一灵玉","金丹","3","","","装备后，本回合你消耗的灵力总数将成为下一回合的灵力回复总数。","","","1"],["3","法器","","通用","坤山剑","金丹","4","","","横置，3灵：使此剑的攻击+1，耐久+1","2","","4"],["5","法器","","通用","无定牌","金丹","","","","装备上场后，你使用的下一张法术牌生效后会重新回到自己的手牌中，效果发动后此牌进入墓地。","","","1"],["3","法器","","通用","绝灵玉盒","金丹","","","","装备后，你的手牌上限+2。","","","1"],["6","法器","热力","通用","泛用天剑","炼虚","3","1","","横置：回复2灵","2","","3"],["7","法器","","通用","天剑-东风","逍遥","2","2","","攻击时对敌方法阵造成等量伤害。","2","","3"],["7","法器","","通用","天剑-无双","逍遥","2","","","攻击后跳过你的行动阶段","4","","1"],["3","法阵","","通用","恒灵阵","练气","1","","","上场后，场上双方灵力回复速率固定为3。","","","3"],["3","法阵","","通用","稳灵阵","金丹","1","","","上场后，稳定自己的灵力回复速度与环境牌一致。","","","3"],["4","法阵","","通用","绝灵阵","金丹","1","","","为场上一个的一个法阵提供+2的防御值。","","","3"],["6","法阵","","通用","天剑炉","逍遥","2","","","横置，3灵：抽取第一张名字带有“天剑”的法器，装备该法器。洗牌","","","4"],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["","","","通用","","","","","","","","",""],["5","即时","","万法","道元零","练气","1","","","造成1点力学伤害。这只能被防御法器阻挡","","",""],["5","即时","","万法","无常手","练气","2","","","使你本回合下次攻击获得破甲5或未被成功阻挡时额外造成3点伤害","","",""],["3","即时","","万法","万物有解","练气","1","","","消灭一个触发法术。这不会触发之","","",""],["3","即时","","万法","天全散手","练气","2","","","造成3点力学伤害，或消灭一个法器","","",""],["2","即时","","万法","雷音和弦刀法","练气","1","","","造成2点力学伤害，或抽一张牌","","",""],["2","即时","","万法","薄氏大数剑","练气","","","","本回合你的下一张法术的灵力消耗-2。你可以将此牌作为计算单元打出","","",""],["5","即时","","万法","锥三式","练气","","","","选择：消灭双方各一个法器/消灭双方各一个法阵/双方各弃两张牌","","",""],["4","即时","","万法","欧门天元","练气","","","","造成1点力学伤害。若成功造成伤害，则敌方修士弃一张牌。","","",""],["4","即时","","万法","函术","练气","","","消耗你的全部灵力","对一个法阵造成等同于你消耗灵力的伤害","","",""],["3","即时","","万法","逆元","练气","","","","洗墓地，从墓地抽一张牌加入你的手牌","","",""],["2","即时","","万法","立业展法","金丹","1","","","消灭一个持续法术","","",""],["7","即时","","万法","正之布","金丹","5","","","抽三张牌，将其中的法器、法阵直接置入战场，将其余牌正面朝外作为“计算单元”加入你的手牌","","",""],["6","即时","","万法","高维剑法","金丹","","","","打出X张计算单元，你的下一次攻击需要额外的X点防御抵挡","","",""],["4","即时","","万法","积分剑法","炼虚","3","","","你的下一张基本牌的灵力消耗-3。","","",""],["8","即时","","万法","殆素剑法","炼虚","5","","","抽三张牌，展示之。造成等同于其中法术牌数量的力学伤害","","",""],["7","即时","","万法","徒验","炼虚","","","","抽若干张牌，直到你的手牌数量不小于敌方手牌","","",""],["8","触发","","万法","封闭率","金丹","","","当你灵犀瓶、手牌、场上、墓地中的牌进入敌方灵犀瓶、手牌、场上或墓地时","将那张牌置入你的手牌","","",""],["5","触发","","万法","微分剑法","金丹","","","当己方法阵无法抵挡攻击时","其可抵挡等同于其防御值的部分","","",""],["4","触发","","万法","穿游相宇","炼虚","","","当你受到伤害时","投掷一枚硬币，若为正，则免除此伤害，","","",""],["3","持续","","万法","交换律","练气","2","2","","你抽牌时，可以改为洗墓地，从墓地中抽取等量的牌","","",""],["2","持续","","万法","神行术","练气","","","","受到伤害时横置：抵挡一点伤害","","",""],["3","持续","","万法","宇宙算","金丹","1","1","","你可以无视境界使用基础牌","","",""],["5","持续","","万法","涂色术","金丹","2","2","","涂色术入场时，将涂色术横置占用一法器槽，其视为两个法器槽。涂色术进入战场时，其上的法器槽无视法器槽限制如常存在。你无法装备一个以上的涂色术。","","",""],["8","持续","","万法","均步","金丹","3","3","","你的法术、法器、法阵的上场法力值消耗为3","","",""],["9","持续","","万法","无常步","炼虚","2","2","","你无法成为敌方攻击法器的攻击目标","","",""],["6","持续","","万法","操矢术","炼虚","2","2","","对你造成攻击的目标受到等量伤害","","",""],["2","持续","","万法","万想侣","逍遥","3","3","","在你的回合开始时你恢复2命火。你可以牺牲万想侣来抵挡一次伤害","","",""],["3","法器","","万法","结合律","练气","2","1","","指定一个防御法器，它的防御值+3。该法器破坏时，破坏结合律","","","1"],["2","法器","","万法","单位元","金丹","3","","","横置：造成1点力学伤害。无法成为基本牌的目标","","","4"],["7","法器","","万法","天剑-解析","炼虚","2","","","造成力学伤害。受到其伤害的目标每回合额外消耗1灵","1","","4"],["7","法器","","万法","天剑-展开","炼虚","3","","","横置，打出一张计算单元：造成力学伤害。将此计算单元作为“横置，造成两点伤害”的命火为3的法阵","3","","3"],["1","法阵","","万法","一非一","练气","1","","","你免疫伤害为1的攻击","","","1"],["3","法阵","","万法","公理化","金丹","2","","","横置，弃一张牌：视为打出一张计算单元，或摸一张牌","","","3"],["1","法阵","","万法","白泽真阵斩","金丹","3","","","横置：对目标法阵造成4点力学伤害","","","4"],["3","法阵","","万法","鸿蒙一气阵","逍遥","7","","","双方修士免疫由基本牌造成的伤害","","","10"],["1","万物","","万法","算玉","练气","","","","天妒，这是一个计算单元","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["","","","万法","","","","","","","","",""],["2","即时","力学","元力","坍天掌","练气","1","","","造成3点伤害，结束你的出牌阶段","","",""],["4","即时","生物","元力","血液潮汐","练气","2","","","敌方修士每有一点剩余灵力，对其造成一点生物伤害","","",""],["2","即时","力学","元力","天引之矢","练气","2","","","造成一点力学伤害，无法阻挡","","",""],["7","即时","","元力","伽利略的铁球","金丹","2","","","摸若干张牌，使你的手牌数量等于敌方手牌数量","","",""],["6","即时","","元力","洞天相形尺","金丹","4","","","直到你的回合开始，双方修士免疫力学、热力伤害","","",""],["1","即时","","元力","社稷化生产","金丹","","","","你的下一张法器牌灵力消耗减少3点","","",""],["1","即时","","元力","剪切力","炼虚","2","","","将此牌翻面洗入对方牌库。对方摸到翻面的此牌时，对该修士造成等同于其灵气和手牌数量差的力学伤害","","",""],["3","即时","","元力","元力上人烈焰激光剑","炼虚","2","","","消灭场上所有具有“无法成为基本牌的目标”效果的基本牌","","",""],["2","即时","","元力","应力","炼虚","3","","","弃置四张牌，将这些牌“收缩”指示物洗入某一方牌库。收缩，2灵，无效果。“收缩”无法被弃置，除非额外支付2灵","","",""],["4","即时","","元力","合力","逍遥","2","","","从你的墓地抽两张牌，从敌方修士（不包括）逆时针计算，对第X个敌方法阵或修士造成Y点伤害，X等同于第一张牌灵力消耗（若为0则指定敌方修士为目标），Y等同于第二张牌灵力消耗","","",""],["6","即时","","元力","力甲律","逍遥","9","","","本回合你的法术消耗为1","","",""],["3","触发","力学","元力","引力绵掌","练气","2","","","受到伤害时，回合结束前视为你拥有一个防御为5，耐久为1的法器（无视法器位），若成功阻挡，对所有法阵造成1点伤害。","","",""],["5","触发","","元力","曲天尺","金丹","1","","","目标法术改为指向原目标逆时针第一个目标。（若为拥有法器／法阵的修士，则指向其拥有的最左侧法器／法阵）","","",""],["4","触发","力学","元力","力丙律","金丹","4","","","你受到伤害时，对敌方修士造成等量的伤害","","",""],["5","持续","","元力","增速之极","金丹","1","1","","双方修士无法在一回合内获得大于3张修为","","",""],["3","法器","","元力","牛顿的苹果","练气","2","","","横置，弃一张牌：增加一点横置修为","1","","3"],["8","法器","","元力","归墟星","逍遥","7","","","你的力学伤害+1。若你控制三个归墟星，你不会输掉比赛，你的对手也不会赢。","","","1"],["5","法器","","元力","季弥德的杠杆","逍遥","8","","","横置：弃等同于目标法阵上场法力值消耗的手牌，获得其控制权","","","4"],["6","法阵","力学","元力","力乙律","金丹","","","装备后将两张手牌作为速度覆盖于其上。","X为速度数量。1灵，横置：将一张手牌作为速度或抽一张速度入手牌。回合开始时，对敌方修士造成X点伤害。力乙律离开战场时，弃置全部速度。","","","5"],["8","法阵","","元力","元灵法阵","炼虚","4","","","从你的第一个回合结束开始，双方出牌阶段仅能出一张牌","","","10"],["5","法阵","","元力","地引悬环","炼虚","5","2","","造成X点伤害，X等于双方手牌数量之和","","","6"],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["","","","元力","","","","","","","","",""],["3","即时","","天灵","古灵寻真（考古挖掘）","练气","2","","","洗墓地，从墓地抽一张牌","","",""],["7","即时","","天灵","返祖之胞","练气","","","将三张牌洗入灵犀瓶","获得一张修为","","",""],["6","即时","","天灵","青素抗生","练气","","","弃一张手牌","从灵犀瓶中抽一张牌","","",""],["6","即时","","天灵","出芽术","金丹","2","","弃置X张牌","每弃置一张牌，将弃置的牌视为“防御为1，横置：造成1点力学伤害”的法阵。","","",""],["4","即时","","天灵","溶酶手","金丹","2","","破坏己方场上一个法器","从灵犀瓶中摸两张牌。","","",""],["8","即时","","天灵","辛一指","金丹","4","","","直到你的下回合开始沉默敌方的心法技能，敌方修士摸一张牌。","","",""],["9","即时","","天灵","循证","金丹","7","","","造成3点生物伤害。本回合你每抽一张牌，便可少支付1灵","","",""],["2","即时","","天灵","破先天","金丹","","","","从手牌使一张加权值不大于4的法阵进入战场","","",""],["6","即时","","天灵","负选之劫","金丹","3","","","弃置你的灵犀瓶，将归墟洗入灵犀瓶","","",""],["8","即时","","天灵","大灭绝","炼虚","5","","弃置等同于场上非法术牌数量的手牌。若你的手牌不足，则你弃置所有手牌，并消灭等量的非法术牌作为中毒1指示物覆盖于你心法上你可以消耗1灵弃置1指示物。","消灭这些非法术牌。","","",""],["6","即时","","天灵","异生","炼虚","5","","","将敌方修士的两张手牌放入你的灵犀瓶中，洗牌库。","","",""],["5","即时","","天灵","吞胞","炼虚","","","选择一个场上的一张法器／法阵，将三张手牌覆盖于其上。","在你的下一回合准备阶段将这张法器／法阵放入你的手牌。你可以选择弃置此三张手牌或消耗3灵力将此三张牌移回你的手牌","","",""],["7","即时","","天灵","反馈失调","炼虚","","","","直到己方回合结束，己方修士造成的命火恢复视为等量生物伤害","","",""],["2","即时","","天灵","应无差","炼虚","","","","复原你的心法技能","","",""],["4","即时","","天灵","选择培养","逍遥","3","","","将你灵犀瓶中的第一张加权值不大于4的基本牌上场。将其余加权值不大于4的基本牌置入弃牌堆，洗牌堆。","","",""],["5","触发","","天灵","肝之化物","练气","1","","敌方法器进入战场时","消灭该法器。直到你的回合开始，敌方法器消耗-1（最低为0）","","",""],["2","触发","","天灵","生物修复","练气","1","","己方法阵受到超过其防御值的伤害时","视为其防御值翻倍","","",""],["4","触发","","天灵","控制序列","练气","","","敌方修士使用即时法术时","从你的手牌施放一个即时法术，该法术灵力消耗－1（最少为0）","","",""],["1","触发","","天灵","气血之光","练气","","","己方修士受到伤害时","恢复3命火，跳过下个准备阶段。","","",""],["3","触发","","天灵","搬运之灵","金丹","3","","敌方修士已经按顺序施放过即时法术，触发法术，延时法术后","从牌库搜寻即时法术、触发法术、延时法术各一张，洗牌。","","",""],["2","触发","","天灵","心理防御","金丹","","","己方修士受到不小于3点伤害时","摸一张牌","","",""],["8","触发","","天灵","源质之焰","炼虚","3","","己方修士受到致命伤害前","将你的全部手牌作为中毒1、失能的指示物覆盖于己方心法牌上，你可以消耗1灵弃置1张指示物","","",""],["6","持续","","天灵","协同搬运手（协同运输）","练气","1","1","","敌方修士每抽两张牌：己方修士抽一张牌。依据此法每回合最多抽3张牌","","",""],["2","持续","","天灵","万禽戏","练气","1","1","","你的回合结束时：恢复1命火","","",""],["6","持续","","天灵","接触之触","金丹","2","2","","双方不能上场已存在的法阵","","",""],["9","持续","","天灵","命之炎","金丹","","","","你可以在行动阶段横置/取消横置。回合结束时，若为横置，则消耗全部灵力，回复等量命火。","","",""],["5","持续","","天灵","淋巴之障","炼虚","3","3","","你获得双方进入墓地的法器牌","","",""],["7","持续","","天灵","血脑屏障","逍遥","2","2","","你无法成为即时法术的目标","","",""],["1","法器","力学","天灵","尖牙利爪","练气","1","","","","2","","2"],["3","法器","","天灵","三酸轮转","练气","2","","","横置：产生4灵，三酸轮转每有一点耐久便少获得1灵","","","4"],["3","法器","","天灵","石皮厚肤","练气","2","","","若你在一回合使用三张以上即时法术，破坏石皮厚肤","","5","2"],["2","法器","","天灵","钢筋铁骨","练气","","","","你单次受到的伤害不得大于敌方手牌数量","","","1"],["5","法器","","天灵","胞之筋骨","金丹","2","1","","X等于你的手牌数量","","X","1"],["7","法器","","天灵","天剑—异变","炼虚","2","","","受到该法器伤害的修士获得：直到你的回合开始，沉默心法技能","2","","2"],["7","法器","","天灵","天剑—普照","炼虚","2","","","横置，1灵：抽一张牌","1","","4"],["1","法阵","力学","天灵","果蝇饲养阵","练气","1","","","横置，1灵：回复2命火","","","1"],["3","法阵","","天灵","裸鼠饲养阵","练气","1","","","横置，1灵：抽一张牌","","","1"],["1","法阵","","天灵","拟南芥种植阵","金丹","1","","","横置：拟南芥种植阵需横置进战场。产生1灵","","","2"],["7","法阵","","天灵","电传索阵","金丹","3","","","每个回合开始时，若双方手牌数差距不小于2，手牌数较少的修士从另一修士手牌中抽一张牌。重复该过程直到双方手牌数量差距小于2。修士每因此法失去一张手牌，恢复两点命火。","","","4"],["5","法阵","","天灵","叶绿阵","金丹","3","","","若你没有法器：每回合恢复双倍灵力（不能使灵力超过修为上限）","","","4"],["2","法阵","","天灵","他山石","金丹","3","","","你可以使用敌方修士的练气技","","","4"],["9","法阵","","天灵","蒸腾阵","金丹","4","","","你每弃两张牌：抽一张牌","","","6"],["3","法阵","","天灵","恐悾阵","炼虚","2","","","选择一个基本牌类别（即时、防御、延时、法器、法阵），敌方修士需要额外消耗1灵力来使用这类牌","","","3"],["8","法阵","","天灵","乳酸轮回阵","炼虚","5","","","你可以将一张手牌作为中毒1指示物置于乳酸轮回阵上来产生1灵，或以消耗1灵抽取一张此法产生的指示物进入手牌。","","","7"],["8","万物","","天灵","解糖酵","练气","","","","弃置此牌时：视为额外弃置两张牌；或恢复3命火。","","",""],["6","万物","","天灵","列信","金丹","","","","抽到此牌时：抽两张牌，弃掉此牌。","","",""],["7","万物","","天灵","补之天罚","炼虚","","","","补之天罚于回合结束时对己方修士造成3点伤害；若你拥有不少于7张手牌，或敌方修士不少于一个心法技能处于沉默状态，将补之天罚洗入敌方修士的牌库","","",""],["","","","天灵","","","","","","","","",""],["","","","天灵","","","","","","","","",""],["","","","天灵","","","","","","","","",""],["","","","天灵","","","","","","","","",""],["","","","天灵","","","","","","","","",""],["","","","天灵","","","","","","","","",""],["","","","天灵","","","","","","","","",""],["","","","天灵","","","","","","","","",""],["","","","天灵","","","","","","","","",""],["","","","天灵","","","","","","","","",""],["","","","天灵","","","","","","","","",""],["","","","天灵","","","","","","","","",""],["","","","天灵","","","","","","","","",""],["3","即时","","焚天","麦氏招魂术","练气","","","","消耗2灵，抽两张牌，每有一张法术牌便对你造成1点热力学伤害，装备其中全部法阵/法器牌，弃置其余牌","","",""],["5","即时","","焚天","能恒掌","练气","","","","从敌方修士手牌抽一张牌，受到一点热力学伤害，敌方修士恢复一点命火","","",""],["2","即时","","焚天","凝宁腿","练气","","","","抽一张牌，敌方修士可立即将凝宁腿视为防御为1，耐久为1的法器装备","","",""],["2","即时","","焚天","浑山拳","练气","","","","消灭一张法器/法阵，受到一点热力学伤害","","",""],["1","即时","","焚天","熔融手","练气","","","","弃置X张牌，对目标法阵造成2X点伤害","","",""],["3","即时","","焚天","恒动之妄","练气","","","","弃置灵犀瓶中的三张牌，造成2点伤害","","",""],["3","即时","","焚天","卡氏无往剑","练气","","","","封印墓地中的三张牌，造成2点伤害","","",""],["4","即时","","焚天","练血为灵","练气","","","","增加一张修为，受到3点热力学伤害","","",""],["4","即时","","焚天","传炎拳","练气","","","","对双方修士造成3点伤害。","","",""],["5","即时","","焚天","风火神剑","金丹","","","","消耗3灵，造成4点热力学伤害。若被抵挡，则对双方修士造成不可抵挡的2点热力学伤害","","",""],["3","即时","","焚天","量炽尺","金丹","5","","","若你的命火小于5，则获得两张修为；否则获得一张修为","","",""],["6","即时","","焚天","液业掌","金丹","","","","将若干修为作为“命火为1。横置：造成1点伤害”的法阵置入战场","","",""],["1","即时","","焚天","吉氏引器术","金丹","","","","若你的修为低于敌方修士，获得目标法器控制权","","",""],["2","即时","","焚天","灵湮之光","金丹","","","","破坏你的一张修为，造成3点伤害","","",""],["2","即时","","焚天","腾藤步","金丹","","","","消灭一张己方法器，获得一张修为","","",""],["4","即时","","焚天","寂灭焚天掌","炼虚","","","","消耗3点灵力，造成3点伤害。双方修士各弃三张牌","","",""],["3","即时","","焚天","升生指","炼虚","","","","消耗4灵，破坏目标法器，破坏一张敌方修为","","",""],["2","即时","","焚天","结截印","炼虚","","","","消耗5灵，搜寻两张法阵/法器进入战场","","",""],["1","即时","","焚天","汲炎掌","炼虚","","","","消耗3灵，造成2点伤害，恢复2命火","","",""],["4","即时","","焚天","熵伤掌","炼虚","","","","失去你的一点命火上限，造成4点伤害","","",""],["5","即时","","焚天","热之终焉","逍遥","","","若你在本回合的行动阶段没有打出过无定牌","横置全部修为，消灭全部法器","","",""],["9","触发","","焚天","庞氏巡游手","逍遥","","","在你的准备阶段开始时","将双方命火回复到你的上个回合结束时的状态","","",""],["2","持续","","焚天","疾炎身法","练气","1","1","","你的攻击需要额外的1防御来抵挡","","",""],["6","持续","","焚天","气脉根","金丹","1","1","","你的法器、法阵横置需要额外支付的灵力-1，最低为0","","",""],["3","持续","","焚天","伪动之妄","金丹","2","2","","敌方修士打出每一张基本牌需要额外支付1灵","","",""],["7","持续","","焚天","炎焱变天式","炼虚","3","3","","你的造成热力学伤害的法器/法阵法力值消耗为0","","",""],["3","法器","","焚天","热势之垒","练气","","","","若己方手牌多于敌方手牌，你需要额外弃置2张牌来装备热势之垒。","","3","2"],["1","法器","","焚天","焚天刀","金丹","3","","","造成热力学伤害","4","","1"],["7","法器","","焚天","天剑-恒衡","炼虚","3","","","造成力学伤害。造成伤害时，你回复等同于伤害量的命火","2","","4"],["7","法器","","焚天","天剑-无序","炼虚","4","2","","造成热力学伤害。受到其伤害的修士弃一张牌","3","","3"],["5","法阵","","焚天","炎焱升腾阵","练气","1","","","每回合开始时对你造成1点热力学伤害。横置：抽一张牌","","","1"],["3","法阵","","焚天","炽炎恒衡阵","练气","1","","","横置，弃一张牌：获得2灵","","","1"],["8","法阵","","焚天","冰晶续命阵","金丹","3","","","回合结束时横置，2灵：若本回合你受到伤害，你恢复4命火","","","4"],["7","法阵","","焚天","凝源阵","金丹","","","","横置：你需要为你的每点命火额外支付1灵来装备凝源阵。造成2点伤害","","","4"],["8","法阵","","焚天","深渊寒翰阵","炼虚","5","","","在你的每个回合，你免疫前三次伤害","","","7"],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["","","","焚天","","","","","","","","",""],["2","即时","","光华","激光引（激光制导）","练气","","","","抽取牌库中第一张法术牌，洗牌","","",""],["5","即时","","光华","荧光标记","金丹","","1","","敌方修士需要说出自己手牌中即时、延时、触发、法器、法阵牌的数量","","",""],["5","即时","热力","光华","万象衍伤（衍射）","金丹","","","","指定不多于两个目标，分别造成2点伤害。每指定一个目标则需要消耗1灵力。","","",""],["6","即时","热力","光华","聚光（电磁性）","金丹","","","","4灵，直到你的下回合开始，你的的所有法器防御值+2，法阵防御值+2。","","",""],["6","即时","热力","光华","湮灭之光","金丹","","","","消灭一个友方法阵，造成3点伤害","","",""],["7","即时","热力","光华","裂波炼器","炼虚","","","","消灭己方场上任意一个法器，对任意目标造成等同于此法器攻击、防御较高者的伤害。","","",""],["10","即时","热力","光华","烈阳波气（光电效应）","逍遥","2","","","引爆一个法器及法器槽，对任意目标造成3点伤害。","","",""],["8","即时","","光华","红外夜视","逍遥","","","","消灭战场上全部覆盖的基本牌","","",""],["3","触发","无","光华","干涉象限（干涉）","练气","","","","当你受到伤害时，消耗1灵力，为你转移一点伤害到任意目标上。","","",""],["7","触发","热力","光华","幻影分形（粒子）","金丹","","","","3灵，为你抵消一次致命的攻击。或在你的战斗阶段触发，使一件攻击法器可以使用两次。","","",""],["8","触发","热力","光华","天极神光（光速）","炼虚","4","","","翻面入场，为你抵挡一次伤害。或6灵，正面入场，直到你的回合开始，你获得免疫。","","",""],["5","触发","热力","光华","盲点","炼虚","","3","","你每有一张未触发的触发法术，对敌方修士造成1点伤害","","",""],["5","触发","","光华","镜中镜","炼虚","","","","当敌方修士释放法术后，你可以弃一张牌来反制该法术，敌方修士亦可弃一张牌来无视反制。重复该过程，直到一方修士放弃弃牌。","","",""],["7","触发","","光华","光定时（秒的定义）","逍遥","","","","当敌方修士释放本回合第五个法术后，消耗5点灵力，结束回合","","",""],["7","持续","热力","光华","天光化物决（粒子）","炼虚","2","2","","视为一个额外法器槽，玩家可以将法器装备在该法阵上。此法术进入墓地时，上面的法器也会一同进入墓地。","","",""],["3","法器","","光华","激光剑（激光）","练气","1","","","玩家对法器、法阵造成伤害+1。","","","1"],["2","法器","","光华","制式光华甲","练气","","","","","","3","1"],["2","法器","","光华","制式光梭","练气","","","","","1","","3"],["5","法器","","光华","折光甲（反射）","金丹","2","","","阻挡伤害时，可消耗等于伤害值的灵力，反弹此伤害。","","","1"],["5","法器","","光华","七彩分虹甲（光谱）","金丹","","","","为装备者抵消下一次伤害，发动后归入墓地；玩家亦可消耗2灵力，若如此做，则玩家承受此伤害，该法器不发动留在场上。","","","1"],["6","法器","","光华","光子重构仪（光量子）","金丹","","","","当己方其他法器进入墓地，可以将此牌归入墓地来代替。此牌进入墓地时，消耗4灵力使其重新入场。","","","1"],["4","法器","","光华","集光烈梭（电磁性）","金丹","","","","横置，2灵：对敌人造成相当于已装备法器数量的法术伤害。","","","4"],["8","法器","","光华","海市蜃楼","金丹","","","","若任意修士失去最后一张手牌：消灭海市蜃楼","","5","4"],["4","法器","","光华","出阳剑","金丹","","","","","2","","1"],["7","法器","","光华","漫反光膜（漫反射）","炼虚","5","","","你受到伤害时：对伤害来源造成等量伤害","","4","2"],["6","法器","","光华","化物自反剑（全内反射）","炼虚","","","","战斗阶段，你对任意目标造成伤害时，需要选择对自己造成等量伤害或消耗等量灵力。","4","","2"],["10","法器","","光华","透光探理镜（超透镜）","逍遥","","","","横置，3灵：查看敌方手牌","","","4"],["9","法阵","","光华","存息光圈（光盘）","金丹","2","","","该法阵上场后，被视为一个法器槽，玩家可以将法器装备在该法阵上。失去法阵后，上面的法器也会一同进入墓地。","","","8"],["5","法阵","","光华","光栅缺级","金丹","3","","","光栅缺级覆盖入法术区。反制光栅缺级进入战场后敌方释放的第3、6、9个法术，随后消灭光栅缺级。被消灭的法术可作为计数指示物覆盖于光栅缺级上。","","","0"],["6","法阵","","光华","炼阳阵（清洁能源）","金丹","3","","","回合结束阶段，恢复4点灵力。","","","5"],["6","法阵","","光华","化源入器阵（光源）","金丹","4","","","每个法器槽可装备两张法器牌。失去法阵后，拥有两张法器牌的法器槽中的法器全部进入墓地。","","","5"],["5","法阵","","光华","灵光化物阵（光子）","炼虚","3","","","回合结束阶段，你摸两张牌。","","","4"],["10","法阵","","光华","击甲生灵阵（光电效应）","逍遥","9","","","己方场上所有法器无视消耗。","","","7"],["2","法阵","","光华","七彩幻灵阵（光谱）","炼气","1","","","你的准备阶段，若选择摸牌，额外摸一张牌","","","3"],["2","法阵","","光华","光华剑阵","炼气","1","","","横置，1灵：造成1点伤害","","","2"],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["","","","光华","","","","","","","","",""],["2","即时","力学","缥缈","相波拳剑","练气","1","","","对指定目标造成一点力学伤害，对防御法器额外造成2点伤害。亦可选择不造成伤害，若如此做，则你摸一张修为牌。","","",""],["7","即时","力学","缥缈","不容电剑","练气","2","","","对指定目标造成2点伤害。将不容电剑翻面洗入你的牌库，抽到翻面的不容电剑时，立刻将这张牌放入墓地并对指定目标造成4点伤害","","",""],["6","即时","","缥缈","大象毁器","练气","2","","","消灭目标法器","","",""],["1","即时","","缥缈","中子","练气","","","","造成伤害时额外打出中子：若伤害小于5，伤害无法阻挡；若大于5，则5点伤害无法阻挡","","",""],["1","即时","","缥缈","光子","练气","","","","打出光子：产生2灵","","",""],["3","即时","","缥缈","对撞实验","金丹","2","","","将你灵犀瓶最上方的两张万物-粒子置入手牌，洗牌堆。若没有足够的万物-粒子，则此牌无效，洗牌堆。","","",""],["4","即时","力学","缥缈","大相波手","金丹","2","","","造成3点伤害。消灭阻挡该攻击的法器","","",""],["5","即时","","缥缈","观察轨迹","金丹","4","","","展示你手牌中的x张万物-粒子，并获得x张修为牌。x的数量最大不超过3","","",""],["2","即时","","缥缈","阳电子","金丹","","","","打出阳电子：弃一张牌，消灭一个法器/法阵","","",""],["2","即时","","缥缈","中微子","金丹","","","","打出中微子：查看对手的3张手牌","","",""],["2","即时","","缥缈","渺子/陶子","金丹","","","","打出渺子/陶子：摸一张牌","","",""],["2","即时","","缥缈","奈子","金丹","","","","打出奈子：恢复2点命火","","",""],["4","即时","","缥缈","缠微术","炼虚","","","","选择两个法器，其一横置/取消横置时，另一取消横置/横置；其一被消灭时，另一移回其控制者的手牌；其一增减耐久时，另一减增相同耐久。","","",""],["8","即时","","缥缈","真空无量","炼虚","","","","回复3灵力。使用后，你可以选择将这张卡置入墓地，或消耗2灵力将其洗入不少于五张牌的灵犀瓶","","",""],["3","即时","","缥缈","引力子","逍遥","","","","造成伤害时额外打出引力子：伤害具有力学属性且无法被阻挡","","",""],["10","触发","力学","缥缈","飘渺无定云剑","金丹","","","","当场上任意一个单位触发基本牌的效果时，消耗3灵力，并对其造成6点伤害。若你无法支付对应的灵力，依次用手牌、两倍的命火支付","","",""],["7","持续","","缥缈","叵测身法","金丹","5","5","","上场后对手无法将基本牌效果的目标指定为你。","","",""],["10","持续","","缥缈","双旋奇劲","炼虚","","","","维持3。你造成的大小为1、3、5的伤害不可抵挡","","",""],["6","法器","","缥缈","薛定恶灵猫","金丹","","","","装备后，你可以在被摧毁时投掷一枚硬币，若为正，则将此法器重新置入战场","","1","1"],["3","法器","","缥缈","御流三机关蝶","金丹","","","","准备阶段，你额外回复1灵力","","1","1"],["7","法器","","缥缈","天剑—一统","炼虚","","","","横置：产生1灵","3","","4"],["6","法器","","缥缈","大矩天图","逍遥","4","","","横置，2灵：反制对手的下一个法术效果","","","4"],["4","法阵","","缥缈","大型粒子对撞阵","炼虚","4","","","此牌上场需要弃三张手牌。在准备阶段，将你灵犀瓶最上方的两张万物-粒子置入手牌，洗牌堆。若没有足够的万物-粒子，不触发效果，洗牌堆。","","","6"],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["","","","缥缈","","","","","","","","",""],["3","即时","","奔雷","电弩磁弦","练气","1","","","造成2点力学伤害","","",""],["4","即时","","奔雷","焦氏焚天手","练气","2","","","消灭一个法器，对敌方修士造成等同于其耐久值的伤害","","",""],["5","即时","","奔雷","奔雷破器决","练气","2","","","将敌方所有法器置入敌方手牌","","",""],["1","即时","","奔雷","剑廿三","练气","2","","","造成3点电磁伤害","","",""],["2","即时","","奔雷","电波探物","练气","","","","直到你的下个回合开始，敌方防御法器防御值-1","","",""],["2","即时","","奔雷","交闪剑","金丹","2","","","造成2点不可避免的电磁伤害。直到你的回合结束，你的基本牌需要额外消耗1灵打出","","",""],["2","即时","","奔雷","奔雷点爆","金丹","3","","","对目标法阵造成等同于你修为的伤害","","",""],["3","即时","","奔雷","电波传灵","金丹","3","","","将三张牌洗回灵犀瓶，抽三张牌","","",""],["2","即时","","奔雷","元磁生雷术","炼虚","","","","消灭一张法器，它的拥有者抽取等同于其耐久的手牌","","",""],["4","触发","","奔雷","欧氏阻灵腿","金丹","","","当敌方修士回复灵力时","你可以横置防御不小于敌方灵力回复数的防御法器，阻止此次回复，并对其造成等量伤害","","",""],["4","触发","","奔雷","霹雳元磁手","金丹","","","当你受到来自法阵/法器的电磁伤害时","消灭该法阵/法器","","",""],["6","触发","","奔雷","顺灵步法","炼虚","","","若你受到伤害时没有可用的灵力及产生灵力的手段","抵挡该伤害","","",""],["5","触发","","奔雷","微波炎焱指","炼虚","","","当敌方修士于结束阶段弃牌时","对其造成等同于弃牌量的伤害","","",""],["5","触发","","奔雷","光不开","炼虚","","","当敌方修士于一回合内抽取第八张牌后","结束其回合","","",""],["3","持续","","奔雷","疾炎身法","练气","1","","","当你受到不大于2的伤害时，你可以支付等量的灵力来阻挡此伤害","","",""],["1","持续","","奔雷","雷霆战体","练气","1","","","任意时候横置，造成一点电磁伤害或抵挡一点伤害","","",""],["2","持续","","奔雷","列缺霹雳亘古存","金丹","2","","","每回合一次，你可以为电磁攻击额外支付1灵使其伤害翻倍。此翻倍发生在一切加值之前。","","",""],["5","持续","","奔雷","和光同尘","金丹","2","","","你受到电磁伤害时，获得等同于你受到伤害的灵力，免疫此伤害","","",""],["4","持续","","奔雷","元磁和合步","金丹","2","","","每有两张基本牌进入墓地，你挖掘（从墓地中抽取）一张牌","","",""],["6","持续","","奔雷","洛氏斜掌","金丹","3","","","你可以将法器或法阵装备在法器或法阵槽里","","",""],["4","持续","","奔雷","安氏定手","炼虚","3","","","你造成的伤害可以指定任意目标","","",""],["3","法器","","奔雷","闪直剑","练气","2","","","你的法器灵力值消耗-1","1","","4"],["1","法器","","奔雷","奔雷斧","练气","2","","","造成电磁伤害","3","","2"],["2","法器","","奔雷","雷阻罡","练气","","","","无法抵挡的电磁伤害造成双倍伤害","","2","2"],["5","法器","","奔雷","热敏盾","金丹","2","","","X等同于你的命火","","X","1"],["7","法器","","奔雷","天剑-雷霆","炼虚","3","","","每当有法器进入墓地时可以再次攻击","2","","4"],["7","法器","","奔雷","天剑-元磁","炼虚","5","","","横置目标法器耐久-2","4","","2"],["6","法阵","","奔雷","元磁合抱阵","练气","1","","","横置：获得一张法阵的控制权。目标法阵拥有者获得元磁合抱阵的控制权","","","3"],["3","法阵","","奔雷","摩挲霹雳阵","练气","1","","","敌方修士每于行动阶段抽一张牌，你获得1灵","","","1"],["7","法阵","","奔雷","变压阵","金丹","3","","","横置，消耗X灵：直到你的下个回合行动阶段开始，指定一个法器的攻击+X","","","4"],["5","法阵","","奔雷","库氏排风掌","金丹","3","","","双方场上每有一个法阵，法阵需要额外的1灵来打出","","","4"],["8","法阵","","奔雷","生雷阵","金丹","3","","","你于行动阶段抽牌时，可以改为获得2灵","","","4"],["6","法阵","","奔雷","雷霆万钧阵","金丹","3","","","你每回合造成的第一次伤害不可抵挡","","","4"],["7","法阵","","奔雷","莱氏蓄电阵","炼虚","5","","","莱氏蓄电阵需横置进战场。消耗3灵取消横置，当回合无法横置。横置：自你取消横置后，敌方修士每摸一张牌，你获得1灵","","","7"],["4","法阵","","奔雷","霹雳等平阵","炼虚","5","","","对你造成伤害的修士需弃置等量的手牌","","","7"],["8","法阵","","奔雷","元磁流转阵","逍遥","7","","","你的行动阶段，你每产生两灵便抽一张牌，你每抽两张牌便产生一灵","","","10"],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["","","","奔雷","","","","","","","","",""],["4","即时","","焚金","衡常术","练气","1","","","将置换术置入敌方手牌，敌方弃一张牌，你摸一张牌","","",""],["1","即时","","焚金","焚金破器决","练气","1","","","消灭目标法器","","",""],["2","即时","","焚金","解离术","练气","2","","","选择手牌中两张法器/法阵牌，由敌方修士从中抽取一张置入你的场上，弃置另一张","","",""],["1","即时","","焚金","皮之坚韧","练气","2","","","将皮之坚韧置于目标法器上，目标法器耐久+2","","",""],["6","即时","","焚金","萃体术","练气","","","","选择一个基本牌类别（即时、触发、持续、法器、法阵、万物），命敌方修士将该类别的手牌置入你的手牌，你将其他类别手牌置入敌方修士手牌","","",""],["3","即时","","焚金","归元术","练气","","","","选择你控制的一个法器，其每有一点耐久，便使另一法器耐久+1；若前者拥有“攻击”或“防御”，则同样增加到后者上，且可叠加。","","",""],["1","即时","","焚金","万用符箓","练气","","","","选择：造成一点伤害/恢复1点命火/产生1点灵力/抵挡下一次伤害中的1点伤害","","",""],["2","即时","","焚金","乾坤寰环引","练气","","","","从墓地中挖掘两张加权值最小的牌，弃置两张加权值最大的手牌","","",""],["4","即时","","焚金","离子剑","练气","","","将一张手牌置入敌方手牌","对敌方修士造成3点伤害","","",""],["1","即时","","焚金","氧之蚀物","练气","","","","造成2点伤害，使其拥有者获得1灵","","",""],["3","即时","","焚金","玄金电光决","金丹","1","","","造成一点电磁伤害，敌方修士每装备一张法器，则额外造成一点伤害","","",""],["2","即时","","焚金","申之强毒","金丹","1","","","消灭一张法器，法器的拥有者抽一张牌","","",""],["2","即时","","焚金","镍之强磁","金丹","2","","","从敌方修士手牌抽一张牌置入你的手牌","","",""],["1","即时","","焚金","孟之催萃","金丹","2","","","取消横置你的法器","","",""],["5","即时","","焚金","粦之生灭","金丹","3","","","造成2点伤害。若成功造成伤害，将手牌中一张练气/金丹法阵置入战场","","",""],["6","即时","","焚金","亚之耀明","金丹","5","","","造成3点光学伤害。你在本回合每从修为以外的途径获得1灵，便可少支付一灵","","",""],["5","即时","","焚金","旋风离引","金丹","","","","抽一张牌，挖掘一张牌，并取出一张手牌。将这三张牌加权值最高者洗入灵犀瓶，弃置加权值最低者，另一张置入手牌","","",""],["6","即时","","焚金","纳之易取","金丹","","","","己方装备法阵时，从灵犀瓶中搜寻纳之易取，并置入手牌。将纳之易取至于法阵上来使其防御值+1","","",""],["5","即时","","焚金","西之印墨","金丹","","","","西之印墨的描述等同于你在本回合打出的上一张牌","","",""],["4","即时","","焚金","碌之蚀物","金丹","","","","将碌之蚀物置于目标法阵上，目标法阵防御-2","","",""],["1","即时","","焚金","凡之入青","金丹","","","","搜寻一张练气牌","","",""],["6","即时","","焚金","逐分术","炼虚","","","","从灵犀瓶抽牌，直到你抽到练气、金丹、炼虚、逍遥境界的基本牌各至少一张。将练气、金丹、炼虚、逍遥境界的你所抽到的第一张牌置入你的手牌，弃置其余牌","","",""],["5","即时","","焚金","管鲍术","炼虚","","","支付等同于场上法阵数量的灵力","将双方修士场上的法阵洗入各自灵犀瓶","","",""],["4","即时","","焚金","铂之万灵","炼虚","","","","你的下一张基础牌境界需求-1，灵力消耗-1","","",""],["6","触发","","焚金","弗之孟猛","练气","1","","当敌方修士打出法阵/法器时","对其造成4点伤害","","",""],["7","触发","","焚金","晶凝之地","练气","","","你的回合结束时，若你需要弃牌且你的手牌中有至少一张法器牌","你可以立即装备一张法器，该法器灵力值消耗-3（最低为0）","","",""],["3","触发","","焚金","缕滤阵","练气","","","敌方装备法力消耗值不小于3的法器时","消灭该法器","","",""],["4","触发","","焚金","配位剑","练气","","","敌方装备法阵时","你共享该法阵的控制权","","",""],["3","触发","","焚金","美之闪耀","金丹","","","当己方修士受到法术造成的不小于3点伤害时","抵挡这次伤害，将造成伤害的法术置入敌方手牌","","",""],["6","触发","","焚金","流化术","金丹","","","你的回合开始时","弃置手牌数量较少修士的全部手牌，将流化术洗入你的灵犀瓶","","",""],["2","触发","","焚金","铜之坚韧","金丹","","","当己方法阵、法器被破坏时","使其回到战场，防御/耐久为1","","",""],["3","触发","","焚金","析虹","金丹","","","敌方回合结束时，若敌方修士使用超过3灵力","查看对手手牌","","",""],["8","触发","","焚金","超临之萃","逍遥","","","若敌方修士没有空余的法器位","你获得其全部法器的控制权","","",""],["2","持续","","焚金","圭之逻辑","金丹","","1","","若你在准备阶段选择获得修为，摸一张牌","","",""],["4","持续","","焚金","吕之轻盈","金丹","","","","你的法阵消耗-1，防御+2","","",""],["7","持续","","焚金","电子云匀步","逍遥","","","","你的修为可以视为命火为5，“横置：消灭一个法阵”的法阵","","",""],["2","法器","","焚金","亥之惰堕","练气","1","","","你的法术需要额外1灵打出","","3","3"],["3","法器","","焚金","钢铁风暴","金丹","2","","","你每有一张其它法器，攻击+1；你每有一个空置的法器槽，耐久+1，此法获得的耐久上限不会因装备法器而消失。","1","","1"],["3","法器","","焚金","钛极甲","金丹","2","","","抵抗力学伤害时视为防御3；无法抵抗电磁伤害，电磁伤害对你造成双倍伤害。","","5","2"],["4","法器","","焚金","铬之肤","金丹","3","1","","你无视不大于2的伤害","","4","3"],["1","法器","","焚金","铅之甘露","炼虚","1","","","横置：产生1灵，你受到1点伤害","","","5"],["2","法器","","焚金","衣刃","炼虚","2","","","不可被维持造成的行为阻挡。","1","","4"],["3","法器","","焚金","锡之嬗变","炼虚","3","","","每阻挡两点伤害会对你造成一点力学伤害","","4","4"],["6","法阵","","焚金","馏留阵","练气","1","","","横置，1灵：从灵犀瓶寻找3张法器/法阵牌，将加权最高的法器/法阵置入战场，弃置其余的牌","","","3"],["1","法阵","","焚金","共价剑阵","练气","1","","","横置：双方修士获得1灵，恢复1命火","","","3"],["2","法阵","","焚金","青之轻灵","练气","1","","","横置：你的下一次攻击伤害+1","","","1"],["5","法阵","","焚金","炭之多变","练气","2","","","横置，打出一张攻击/防御法器，置于场上一攻击/防御法器上：后者攻击/防御/耐久值增加等同于前者攻击/防御/耐久值。","","","3"],["3","法阵","","焚金","锂之蓄能","练气","2","","","横置，1灵：你的下一张基本牌灵力值消耗-1","","","3"],["3","法阵","","焚金","练血如浆","金丹","1","","","上场时消灭一张修为。横置：产生2灵，受到1点生物伤害。练血如浆被破坏时，造成2点伤害。","","","1"],["5","法阵","","焚金","臭之影印","金丹","3","","","臭之影印上场时，指定一个法阵，成为其复制","","","4"],["5","法阵","","焚金","硫之毒雾","金丹","3","","","双方修士每获得4灵便受到1点生物伤害","","","4"],["1","法阵","","焚金","银之传导","炼虚","1","","","你在准备阶段额外恢复2灵","","","3"],["6","法阵","","焚金","汞齐阵","炼虚","3","","","汞齐阵上场时，消灭目标法器，目标法器覆盖于汞齐阵下。汞齐阵被破坏时，若可能，目标法器重新于原位置上场，否则进入法器拥有者手牌","","","5"],["1","法阵","","焚金","乌之火炼","炼虚","3","","","横置：产生1灵","","","15"],["4","法阵","","焚金","蒸缩阵","炼虚","5","","","横置，弃两张牌：将一张法器/法阵牌置入战场","","","7"],["7","万物","","焚金","由之临界","逍遥","","","","抽到由之临界时展示之，将其正面朝外置入手牌。由之临界被搜寻进入手牌时，立即封印之。手牌中的由之临界具有中毒2。消耗2灵，将由之临界洗入灵犀瓶，若你本回合依此洗入两张由之临界，你获得游戏胜利。"]]

let ans = {}

for(const x of arr){
	if(x[4] != ""&&x[4]!=null){
		ans[x[4]]={
			rarity: x[0],
			type: x[1],
			sect: x[3],
			level: x[5],
			castCost: x[6],
			maintainCost: x[7],
			power: x[10],
			defense: x[11],
			durablity: x[12]
		}
	}
	
}

JSON.stringify(ans);
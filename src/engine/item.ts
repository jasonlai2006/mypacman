import Stage from './Stage';
import ItemOptions from './item-options';

class Item extends ItemOptions{
    params: object;
    id: number = 0;             //标志符
    stage: Stage = null;        //与所属布景绑定
    settings: object = {
        x: 0,					//位置坐标:横坐标
        y: 0,					//位置坐标:纵坐标
        width: 20,				//宽
        height: 20,				//高
        type: 0,				//对象类型,0表示普通对象(不与地图绑定),1表示玩家控制对象,2表示程序控制对象
        color: '#F00',			//标识颜色
        status: 1,				//对象状态,0表示未激活/结束,1表示正常,2表示暂停,3表示临时,4表示异常
        orientation: 0,			//当前定位方向,0表示右,1表示下,2表示左,3表示上
        speed: 0,				//移动速度
        //地图相关
        location: null,			//定位地图,Map对象
        coord: null,			//如果对象与地图绑定,需设置地图坐标;若不绑定,则设置位置坐标
        path: [],				//NPC自动行走的路径
        vector: null,			//目标坐标
        //布局相关
        frames: 1,				//速度等级,内部计算器times多少帧变化一次
        times: 0,				//刷新画布计数(用于循环动画状态判断)
        timeout: 0,				//倒计时(用于过程动画状态判断)
        control: {},			//控制缓存,到达定位点时处理
        update: function(){}, 	//更新参数信息
        draw: function(){}		//绘制
    };
    
    constructor(params?: object) {
        super();
        this.params = params||{};
        Object.assign(this, this.settings, this.params);
    }

}

export default Item;
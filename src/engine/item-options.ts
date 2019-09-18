class ItemOptions {
    x?: number;					//位置坐标:横坐标
    y?: number;					//位置坐标:纵坐标
    width?: number;				//宽
    height?: number;			//高
    type?: number;				//对象类型,0表示普通对象(不与地图绑定),1表示玩家控制对象,2表示程序控制对象
    color?: string;			    //标识颜色
    status?: number;			//对象状态,0表示未激活/结束,1表示正常,2表示暂停,3表示临时,4表示异常
    orientation?: number;		//当前定位方向,0表示右,1表示下,2表示左,3表示上
    speed?: number;				//移动速度
    //地图相关
    location?: any;			    //定位地图,Map对象
    coord?: any;			    //如果对象与地图绑定,需设置地图坐标;若不绑定,则设置位置坐标
    path?: Array<any>;			//NPC自动行走的路径
    vector?: any;			    //目标坐标
    //布局相关
    frames?: number;			//速度等级,内部计算器times多少帧变化一次
    times?: number;				//刷新画布计数(用于循环动画状态判断)
    timeout?: number;			//倒计时(用于过程动画状态判断)
    control?: any;			//控制缓存,到达定位点时处理
    update?: Function; 	        //更新参数信息
    draw?: Function;		    //绘制
}

export default ItemOptions;
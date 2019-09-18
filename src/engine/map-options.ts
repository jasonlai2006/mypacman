class MapOptions {
    x?: number;                  //地图起点x坐标
    y?: number;                  //地图起点y坐标  
    size?: number;               //地图单元的宽度
    data?: Array<Array<number>>;        //地图数据
    x_length?: number;           //二维数组x轴长度
    y_length?: number;           //二维数组y轴长度
    frames?: number;             //速度等级,内部计算器times多少帧变化一次
    times?: number;              //刷新画布计数(用于循环动画状态判断)
    cache?: boolean;             //是否静态（如静态则设置缓存）
    update?: Function;           //更新地图数据
    draw?: Function;             //绘制地图

    imageData?:any;
}

export default MapOptions;
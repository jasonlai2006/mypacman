import Stage from './Stage';

class Game {
    width: number;
    height: number;
    $canvas: HTMLCanvasElement;
    _context: CanvasRenderingContext2D;     //画布上下文环境
    _stages: Array<Stage>;                  //布景对象队列
    _events: object;                        //事件集合
    _index: number;                         //当前布景索引
    _hander: any;                           //帧动画控制

    constructor(id: string, params?: object) {
        let settings = {
            width:960,						//画布宽度
            height:640						//画布高度
        };
        Object.assign(this, settings, params);
        (<HTMLElement>this.$canvas) = document.getElementById(id);
        this.$canvas.width = this.width;
        this.$canvas.height = this.height;
        this._context = this.$canvas.getContext('2d');
        this._stages = [];					
        this._events = {};					
        this._index=0;						
        this._hander;  						
    }

    start = () => {
        let f = 0;		//帧数计算
        let fn = () => {
            var stage = this._stages[this._index];
            this._context.clearRect(0, 0, this.width, this.height);		//清除画布
            this._context.fillStyle = '#000000';
            this._context.fillRect(0, 0, this.width, this.height);
            f++;
            if (stage.timeout) {
                stage.timeout--;
            }
            if (stage.update(stage) != false) {		            //update返回false,则不绘制
                stage.maps.forEach((map) => {
                    if(!(f % map.frames)){
                        map.times = f / map.frames;		//计数器
                    }
                    if(map.cache){
                        if(!map.imageData){
                            this._context.save();
                            map.draw(this._context, map);
                            map.imageData = this._context.getImageData(0, 0, this.width, this.height);
                            this._context.restore();
                        }else{
                            this._context.putImageData(map.imageData,0,0);
                        }
                    }else{
                    	map.update();
                        map.draw(this._context, map);
                    }
                });
                stage.items.forEach((item) => {
                    if(!(f % item.frames)){
                        item.times = f / item.frames;		   //计数器
                    }
                    if(stage.status == 1 && item.status != 2){  	//对象及布景状态都不处于暂停状态
                        if(item.location){
                            item.coord = item.location.position2coord(item.x, item.y);
                        }
                        if(item.timeout){
                            item.timeout--;
                        }
                        item.update(item);
                    }
                    item.draw(this._context, item);
                });
            }
            this._hander = requestAnimationFrame(fn);
        };
        this._hander = requestAnimationFrame(fn);
    }
    //动画结束
    stop = () => {
        this._hander && cancelAnimationFrame(this._hander);
    };
    //事件坐标
    getPosition = (e:any) => {
        var box = this.$canvas.getBoundingClientRect();
        return {
            x:e.clientX - box.left * (this.width / box.width),
            y:e.clientY - box.top * (this.height / box.height)
        };
    }
    //创建布景
    createStage = (options?:object) => {
        var stage = new Stage(options, this);
        stage.index = this._stages.length;
        this._stages.push(stage);
        return stage;
    };
    //指定布景
    setStage = (index) => {
        this._stages[this._index].status = 0;
        this._index = index;
        this._stages[this._index].status = 1;
        this._stages[this._index].reset(); //重置
        return this._stages[this._index];
    };
    //下个布景
    nextStage = function(){
        if(this._index < this._stages.length - 1){
            return this.setStage(++this._index);
        }else{
            throw new Error('unfound new stage.');
        }
    };
    //获取布景列表
    getStages = () => {
        return this._stages;
    };
    //初始化游戏引擎
    init = () => {
        this._index = 0;
        this.start();
    };
}

export default Game;
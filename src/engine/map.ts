import Stage from './Stage';
import MapOptions from './map-options';

interface Position {
    x?: number;
    y?: number;
    change?: number;
}

interface Options {
    map: Array<Array<number>>,
    start: Position,
    end: Position,
    type: String
}

class Map extends MapOptions{
    params: MapOptions;
    id: number = 0;             //标志符
    stage: Stage = null;        //与所属布景绑定
    
    settings: MapOptions = {
        x: 0,					
        y: 0,
        size: 20,				
        data: [],				
        x_length: 0,			
        y_length: 0,			
        frames: 1,				
        times: 0,				
        cache: false,    		
        update: function(){},	
        draw: function(){},		
    };

    constructor(params?: object) {
        super();
        this.params = params||{};
        Object.assign(this, this.settings, this.params);
    }

    //获取地图上某点的值
    get = (x: number, y: number) => {
        if(this.data[y] && typeof this.data[y][x] != 'undefined') {
            return this.data[y][x];
        }
        return -1;
    }

    //设置地图上某点的值
    set = (x: number, y: number, value: number) => {
        if(this.data[y]){
            this.data[y][x] = value;
        }
    }

    //地图坐标转画布坐标
    coord2position = (cx: number, cy: number) => {
        return {
            x:this.x + cx * this.size + this.size/2,
            y:this.y + cy * this.size + this.size/2
        };
    }

    //画布坐标转地图坐标
    position2coord = (x: number, y: number) => {
        const fx = Math.abs(x - this.x) % this.size - this.size/2;
        const fy = Math.abs(y - this.y) % this.size - this.size/2;
        return {
            x: Math.floor((x - this.x) / this.size),
            y: Math.floor((y - this.y) / this.size),
            offset:Math.sqrt(fx * fx + fy * fy)
        };
    }

    //寻址算法
    finder = (params: object) => {
        const defaults = {
            map:null,
            start:{},
            end:{},
            type:'path'
        };
        const options:Options = Object.assign({}, defaults, params);
        if(options.map[options.start.y][options.start.x] || 
            options.map[options.end.y][options.end.x]){ //当起点或终点设置在墙上
            return [];
        }
        let finded = false;
        let result = [];
        let y_length  = options.map.length;
        let x_length = options.map[0].length;
        let steps = [];     //步骤的映射
        for(let y = y_length;y--; ){
            steps[y] = new Array(x_length).fill(0);
        }
        let _getValue = (x: number, y: number) => {  //获取地图上的值
            if(options.map[y] && typeof options.map[y][x]!='undefined'){
                return options.map[y][x];
            }
            return -1;
        };

        let _next = (to:Position) => { //判定是否可走,可走放入列表
            let value = _getValue(to.x, to.y);
            if(value < 1){
                if(value == -1){
                    to.x = (to.x + x_length) % x_length;
                    to.y = (to.y + y_length) % y_length;
                    to.change = 1;
                }
                if(!steps[to.y][to.x]){
                    result.push(to);
                }
            }
        };

        let _render = (list:Array<Position>) => {//找线路
            let new_list = [];
            let next = (from: Position,to: Position) => {
                let value = _getValue(to.x,to.y);
                if (value < 1){	//当前点是否可以走
                    if(value == -1){
                        to.x = (to.x + x_length) % x_length;
                        to.y = (to.y + y_length) % y_length;
                        to.change = 1;
                    }
                    if (to.x == options.end.x && to.y == options.end.y) {
                        steps[to.y][to.x] = from;
                        finded = true;
                    } else if (!steps[to.y][to.x]) {
                        steps[to.y][to.x] = from;
                        new_list.push(to);
                    }
                }
            };
            list.forEach((current) => {
				next(current, {y: current.y+1, x: current.x});
                next(current, {y: current.y, x: current.x+1});
                next(current, {y: current.y-1, x: current.x});
                next(current, {y: current.y, x: current.x-1});
            });
            if(!finded && new_list.length) {
                _render(new_list);
            }
        };
        _render([options.start]);
        if(finded) {
            let current = options.end;
            if (options.type == 'path') {
                while (current.x != options.start.x || 
                        current.y != options.start.y) {
                    result.unshift(current);
                    current = steps[current.y][current.x];
                }
            } else if(options.type=='next') {
                _next({x:current.x+1,y:current.y});
                _next({x:current.x,y:current.y+1});
                _next({x:current.x-1,y:current.y});
                _next({x:current.x,y:current.y-1});
            }
        }
        return result;
    }
}

export default Map;
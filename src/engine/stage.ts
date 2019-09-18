import Map from './map';
import Item from './item';
import Game from './game';

class Stage {
    params: object;

    index: number;                      //布景索引
    status: number;						//布景状态,0表示未激活/结束,1表示正常,2表示暂停,3表示临时状态
    maps: Array<Map>;				    //地图队列
    audio: Array<object>;				//音频资源
    images: Array<object>;				//图片资源
    items: Array<Item>;					//对象队列
    timeout: number;					//倒计时(用于过程动画状态判断)
    update: Function;			        //嗅探,处理布局下不同对象的相对关系

    game: Game;

    settings = {
        index:0,                        
        status:0,						
        maps:[],						
        audio:[],						
        images:[],						
        items:[],						
        timeout:0,						
        update:function(){}		
    };

    constructor(params?:object, game?:Game) {
        this.params = params || {};
        this.game = game;
        Object.assign(this, this.settings, this.params);
    }
    //添加对象
    createItem = (options: object) => {
        var item = new Item(options);
        //动态属性
        if (item.location) {
            var position = item.location.coord2position(item.coord.x, item.coord.y);
            item.x = position.x;
            item.y = position.y;
        }
        //关系绑定
        item.stage = this;
        item.id = this.items.length;
        this.items.push(item);
        return item;
    }
    //重置物体位置
    resetItems = () => {
        this.status = 1;
        this.items.forEach((item, index) => {
            Object.assign(item,item.settings,item.params);
            if (item.location) {
                var position = item.location.coord2position(item.coord.x, item.coord.y);
                item.x = position.x;
                item.y = position.y;
            }
        });
    }
    //获取对象列表
    getItemsByType = (type: number) => {
        return this.items.filter((item) => {
            if(item.type==type){
                return item;
            }
        });
    }

    //添加地图
    createMap = (options: object) => {
        var map = new Map(options);
        //动态属性
        map.data = JSON.parse(JSON.stringify(map.params.data));
        map.y_length = map.data.length;
        map.x_length = map.data[0].length;
        map.imageData = null;
        //关系绑定
        map.stage = this;
        map.id = this.maps.length;
        this.maps.push(map);
        return map;
    }

    //重置地图
    resetMaps = () => {
        this.status = 1;
        this.maps.forEach(function(map){
            Object.assign(map,map.settings,map.params);
            map.data = JSON.parse(JSON.stringify(map.params.data));
            map.y_length = map.data.length;
            map.x_length = map.data[0].length;
            map.imageData = null;
        });
    }
    //重置
    reset = () => {
        Object.assign(this,this.settings,this.params);
        this.resetItems();
        this.resetMaps();
    }

    setGame = (game: Game) => {
        this.game = game;
    }

    bind = (eventType:any, callback:Function) => {
        if(!this.game._events[eventType]){
            this.game._events[eventType] = {};
            window.addEventListener(eventType,(e) => {
                var key = 's' + this.game._index;
                if(this.game._events[eventType][key]){
                    this.game._events[eventType][key](e);
                }
                e.preventDefault();
            });
        }
        this.game._events[eventType]['s'+this.index] = callback.bind(this);	//绑定事件作用域
    }
}

export default Stage;
import {COIGIG, COLOR, COS, SIN} from './config';
import Game from './game';
import Item from './item';
import Stage from './stage';
import Map from './map';

class Play {
    _LIFE: number;
    _SCORE: number;
    
    constructor() {
        this._LIFE = 100;			//玩家生命值
        this._SCORE = 0;			//玩家得分
    }

    run = () => {
        let game = new Game('canvas');
        this.preload(game);
        this.load(game);
        this.gameOver(game);

        game.init();
    }

    //启动页
    preload = (game: Game) => {
        let stage = game.createStage();
        //logo
        stage.createItem({
            x: game.width / 2,
            y: game.height * .45,
            width: 100,
            height: 100,
            frames: 3,
            draw: (context: CanvasRenderingContext2D, i_this: Item) => {
                let t = Math.abs(5 - i_this.times % 10);
                context.fillStyle = '#FFE600';
                context.beginPath();
                context.arc(i_this.x, i_this.y, i_this.width/2, t * .04 * Math.PI, (2-t*.04) * Math.PI, false);
                context.lineTo(i_this.x,i_this.y);
                context.closePath();
                context.fill();
                context.fillStyle = '#000';
                context.beginPath();
                context.arc(i_this.x + 5, i_this.y - 27, 7, 0, 2 * Math.PI, false);
                context.closePath();
                context.fill();
            }
        });
        //游戏名
        stage.createItem({
            x:game.width / 2,
            y:game.height * .6,
            draw: (context: CanvasRenderingContext2D, i_this: Item) => {
                context.font = 'bold 42px Helvetica';
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillStyle = '#FFF';
                context.fillText('Pac-Man', i_this.x, i_this.y);
            }
        });
        //版权信息
        stage.createItem({
            x:game.width-12,
            y:game.height-5,
            draw: (context: CanvasRenderingContext2D, i_this: Item) => {
                context.font = '14px Helvetica';
                context.textAlign = 'right';
                context.textBaseline = 'bottom';
                context.fillStyle = '#AAA';
            }
        });
        //事件绑定
        stage.bind('keydown',(e) => {
            switch(e.keyCode){
                case 13:
                case 32:
                game.nextStage();
                break;
            }
        });
    }
    //游戏主程序
    load = (game: Game) => {
        COIGIG.forEach((config,index) => {
            let stage: Stage;
            let map: Map;
            let beans: Map;
            let items: Array<Item>;
            let player: Item;
            stage = game.createStage({
                update: (s_this: Stage) => {
                    if (s_this.status == 1) {								//场景正常运行
                        items.forEach((item) => {
                            if(map && !map.get(item.coord.x,item.coord.y) 
                                    &&!map.get(player.coord.x,player.coord.y)) {
                                const dx = item.x - player.x;
                                const dy = item.y - player.y;
                                if(dx * dx + dy * dy < 750 
                                    && item.status != 4) {		//物体检测
                                    if (item.status == 3) {
                                        item.status = 4;
                                        this._SCORE += 10;
                                    }else{
                                        s_this.status = 3;
                                        s_this.timeout = 30;
                                    }
                                }
                            }
                        });
                        if (JSON.stringify(beans.data).indexOf('0') < 0) {	//当没有物品的时候，进入下一关
                            game.nextStage();
                        }
                    }else if (s_this.status == 3) {		//场景临时状态
                        if (!s_this.timeout) {
                            this._LIFE--;
                            if(this._LIFE){
                                s_this.resetItems();
                            } else {
                                let stages = game.getStages();
                                game.setStage(stages.length - 1);
                                return false;
                            }
                        }
                    }
                }
            });
            //绘制地图
            map = stage.createMap({
                x: 60,
                y: 10,
                data: config['map'],
                cache:true,
                draw: (context: CanvasRenderingContext2D, m_this: Map) => {
                    context.lineWidth = 2;
                    for(var j=0; j<m_this.y_length; j++){
                        for(var i=0; i<m_this.x_length; i++){
                            var value = m_this.get(i,j);
                            if(value){
                                var code = [0,0,0,0];
                                if (m_this.get(i+1,j) && !(m_this.get(i+1,j-1) && m_this.get(i+1,j+1) && m_this.get(i,j-1) && m_this.get(i,j+1))) {
                                    code[0]=1;
                                }
                                if (m_this.get(i,j+1) && !(m_this.get(i-1,j+1) && m_this.get(i+1,j+1) && m_this.get(i-1,j) && m_this.get(i+1,j))) {
                                    code[1]=1;
                                }
                                if (m_this.get(i-1,j) && !(m_this.get(i-1,j-1) && m_this.get(i-1,j+1) && m_this.get(i,j-1) && m_this.get(i,j+1))) {
                                    code[2]=1;
                                }
                                if (m_this.get(i,j-1) && !(m_this.get(i-1,j-1) && m_this.get(i+1,j-1) && m_this.get(i-1,j) && m_this.get(i+1,j))) {
                                    code[3]=1;
                                }
                                if (code.indexOf(1) > -1) {
                                    context.strokeStyle = value == 2 ? "#FFF" : config['wall_color'];
                                    var pos = m_this.coord2position(i, j);
                                    switch(code.join('')){
                                        case '1100':
                                            context.beginPath();
                                            context.arc(pos.x+m_this.size/2,pos.y+m_this.size/2,m_this.size/2,Math.PI,1.5*Math.PI,false);
                                            context.stroke();
                                            context.closePath();
                                            break;
                                        case '0110':
                                            context.beginPath();
                                            context.arc(pos.x-m_this.size/2,pos.y+m_this.size/2,m_this.size/2,1.5*Math.PI,2*Math.PI,false);
                                            context.stroke();
                                            context.closePath();
                                            break;
                                        case '0011':
                                            context.beginPath();
                                            context.arc(pos.x-m_this.size/2,pos.y-m_this.size/2,m_this.size/2,0,.5*Math.PI,false);
                                            context.stroke();
                                            context.closePath();
                                            break;
                                        case '1001':
                                            context.beginPath();
                                            context.arc(pos.x+m_this.size/2,pos.y-m_this.size/2,m_this.size/2,.5*Math.PI,1*Math.PI,false);
                                            context.stroke();
                                            context.closePath();
                                            break;
                                        default:
                                            var dist = m_this.size/2;
                                            code.forEach((v,index) => {
                                                if(v){
                                                    context.beginPath();
                                                    context.moveTo(pos.x,pos.y);
                                                    context.lineTo(pos.x - COS[index] * dist, pos.y - SIN[index] * dist);
                                                    context.stroke();
                                                    context.closePath();							
                                                }
                                            });
                                    }
                                }
                            }
                        }
                    }
                }
            });
            //物品地图
            beans = stage.createMap({
                x:60,
                y:10,
                data:config['map'],
                frames:8,
                draw: (context: CanvasRenderingContext2D, m_this: Map) => {
                    for(var j=0; j<m_this.y_length; j++){
                        for(var i=0; i<m_this.x_length; i++){
                            if(!m_this.get(i,j)){
                                var pos = m_this.coord2position(i,j);
                                context.fillStyle = "#F5F5DC";
                                if(config['goods'][i+','+j]){
                                    context.beginPath();
                                    context.arc(pos.x,pos.y,3+m_this.times%2,0,2*Math.PI,true);
                                    context.fill();
                                    context.closePath();
                                }else{
                                    context.fillRect(pos.x-2,pos.y-2,4,4);
                                }
                            }
                        }
                    }
                }
            });
            //关卡得分
            stage.createItem({
                x:690,
                y:80,
                draw: (context: CanvasRenderingContext2D, i_this: Item) => {
                    context.font = 'bold 26px Helvetica';
                    context.textAlign = 'left';
                    context.textBaseline = 'bottom';
                    context.fillStyle = '#C33';
                    context.fillText('SCORE',i_this.x,i_this.y);
                    context.font = '26px Helvetica';
                    context.textAlign = 'left';
                    context.textBaseline = 'top';
                    context.fillStyle = '#FFF';
                    context.fillText(this._SCORE + '',i_this.x+12,i_this.y);
                    context.font = 'bold 26px Helvetica';
                    context.textAlign = 'left';
                    context.textBaseline = 'bottom';
                    context.fillStyle = '#C33';
                    context.fillText('LEVEL',i_this.x,i_this.y+72);
                    context.font = '26px Helvetica';
                    context.textAlign = 'left';
                    context.textBaseline = 'top';
                    context.fillStyle = '#FFF';
                    context.fillText((index+1) + '', i_this.x+12, i_this.y+72);
                }
            });
            //状态文字
            stage.createItem({
                x:690,
                y:285,
                frames:25,
                draw: (context: CanvasRenderingContext2D, i_this: Item) => {
                    if(stage.status==2&&i_this.times%2){
                        context.font = '24px Helvetica';
                        context.textAlign = 'left';
                        context.textBaseline = 'middle';
                        context.fillStyle = '#FFF';
                        context.fillText('PAUSE',i_this.x,i_this.y);
                    }
                }
            });
            //生命值
            stage.createItem({
                x:705,
                y:510,
                width:30,
                height:30,
                draw: (context: CanvasRenderingContext2D, i_this: Item) => {
                    var max = Math.min(this._LIFE-1,5);
                    for(var i=0;i<max;i++){
                        var x=i_this.x+40*i,y=i_this.y;
                        context.fillStyle = '#FFE600';
                        context.beginPath();
                        context.arc(x,y,i_this.width/2,.15*Math.PI,-.15*Math.PI,false);
                        context.lineTo(x,y);
                        context.closePath();
                        context.fill();
                    }
                    context.font = '26px Helvetica';
                    context.textAlign = 'left';
                    context.textBaseline = 'middle';
                    context.fillStyle = '#FFF';
                    context.fillText('X '+(this._LIFE-1),i_this.x-15,i_this.y+30);
                }
            });
            //NPC
            for(var i=0;i<4;i++){
                stage.createItem({
                    width:30,
                    height:30,
                    orientation:3,
                    color:COLOR[i],
                    location:map,
                    coord:{x:12+i,y:14},
                    vector:{x:12+i,y:14},
                    type:2,
                    frames:10,
                    speed:1,
                    timeout:Math.floor(Math.random()*120),
                    update:(i_this: Item) => {
                        var new_map;
                        if(i_this.status==3&&!i_this.timeout){
                            i_this.status = 1;
                        }
                        if(!i_this.coord.offset){			//到达坐标中心时计算
                            if(i_this.status==1){
                                if(!i_this.timeout){		//定时器
                                    new_map = JSON.parse(JSON.stringify(map.data).replace(/2/g, '0'));
                                    var id = i_this.id;
                                    items.forEach((item) => {
                                        if(item.id!=id&&item.status==1){	//NPC将其它所有还处于正常状态的NPC当成一堵墙
                                            new_map[item.coord.y][item.coord.x]=1;
                                        }
                                    });
                                    i_this.path = map.finder({
                                        map:new_map,
                                        start:i_this.coord,
                                        end:player.coord
                                    });
                                    if(i_this.path.length){
                                        i_this.vector = i_this.path[0];
                                    }
                                }
                            }else if(i_this.status==3){
                                new_map = JSON.parse(JSON.stringify(map.data).replace(/2/g, '0'));
                                var id = i_this.id;
                                items.forEach(function(item){
                                    if(item.id!=id){
                                        new_map[item.coord.y][item.coord.x]=1;
                                    }
                                });
                                i_this.path = map.finder({
                                    map:new_map,
                                    start:player.coord,
                                    end:i_this.coord,
                                    type:'next'
                                });
                                if(i_this.path.length){
                                    i_this.vector = i_this.path[Math.floor(Math.random()*i_this.path.length)];
                                }
                            }else if(i_this.status==4){
                                new_map = JSON.parse(JSON.stringify(map.data).replace(/2/g, '0'));
                                i_this.path = map.finder({
                                    map:new_map,
                                    start:i_this.coord,
                                    end:i_this.params.coord
                                });
                                if(i_this.path.length){
                                    i_this.vector = i_this.path[0];
                                }else{
                                    i_this.status = 1;
                                }
                            }
                            //是否转变方向
                            if(i_this.vector.change){
                                i_this.coord.x = i_this.vector.x;
                                i_this.coord.y = i_this.vector.y;
                                var pos = map.coord2position(i_this.coord.x,i_this.coord.y);
                                i_this.x = pos.x;
                                i_this.y = pos.y;
                            }
                            //方向判定
                            if(i_this.vector.x>i_this.coord.x){
                                i_this.orientation = 0;
                            }else if(i_this.vector.x<i_this.coord.x){
                                i_this.orientation = 2;
                            }else if(i_this.vector.y>i_this.coord.y){
                                i_this.orientation = 1;
                            }else if(i_this.vector.y<i_this.coord.y){
                                i_this.orientation = 3;
                            }
                        }
                        i_this.x += i_this.speed*COS[i_this.orientation];
                        i_this.y += i_this.speed*SIN[i_this.orientation];
                    },
                    draw: (context: CanvasRenderingContext2D, i_this: Item) => {
                        var isSick = false;
                        if(i_this.status==3){
                            isSick = i_this.timeout>80||i_this.times%2?true:false;
                        }
                        if(i_this.status!=4){
                            context.fillStyle = isSick?'#BABABA':i_this.color;
                            context.beginPath();
                            context.arc(i_this.x,i_this.y,i_this.width*.5,0,Math.PI,true);
                            switch(i_this.times%2){
                                case 0:
                                context.lineTo(i_this.x-i_this.width*.5,i_this.y+i_this.height*.4);
                                context.quadraticCurveTo(i_this.x-i_this.width*.4,i_this.y+i_this.height*.5,i_this.x-i_this.width*.2,i_this.y+i_this.height*.3);
                                context.quadraticCurveTo(i_this.x,i_this.y+i_this.height*.5,i_this.x+i_this.width*.2,i_this.y+i_this.height*.3);
                                context.quadraticCurveTo(i_this.x+i_this.width*.4,i_this.y+i_this.height*.5,i_this.x+i_this.width*.5,i_this.y+i_this.height*.4);
                                break;
                                case 1:
                                context.lineTo(i_this.x-i_this.width*.5,i_this.y+i_this.height*.3);
                                context.quadraticCurveTo(i_this.x-i_this.width*.25,i_this.y+i_this.height*.5,i_this.x,i_this.y+i_this.height*.3);
                                context.quadraticCurveTo(i_this.x+i_this.width*.25,i_this.y+i_this.height*.5,i_this.x+i_this.width*.5,i_this.y+i_this.height*.3);
                                break;
                            }
                            context.fill();
                            context.closePath();
                        }
                        context.fillStyle = '#FFF';
                        if(isSick){
                            context.beginPath();
                            context.arc(i_this.x-i_this.width*.15,i_this.y-i_this.height*.21,i_this.width*.08,0,2*Math.PI,false);
                            context.arc(i_this.x+i_this.width*.15,i_this.y-i_this.height*.21,i_this.width*.08,0,2*Math.PI,false);
                            context.fill();
                            context.closePath();
                        }else{
                            context.beginPath();
                            context.arc(i_this.x-i_this.width*.15,i_this.y-i_this.height*.21,i_this.width*.12,0,2*Math.PI,false);
                            context.arc(i_this.x+i_this.width*.15,i_this.y-i_this.height*.21,i_this.width*.12,0,2*Math.PI,false);
                            context.fill();
                            context.closePath();
                            context.fillStyle = '#000';
                            context.beginPath();
                            context.arc(i_this.x-i_this.width*(.15-.04*COS[i_this.orientation]),i_this.y-i_this.height*(.21-.04*SIN[i_this.orientation]),i_this.width*.07,0,2*Math.PI,false);
                            context.arc(i_this.x+i_this.width*(.15+.04*COS[i_this.orientation]),i_this.y-i_this.height*(.21-.04*SIN[i_this.orientation]),i_this.width*.07,0,2*Math.PI,false);
                            context.fill();
                            context.closePath();
                        }
                    }
                });
            }
            items = stage.getItemsByType(2);
            //主角
            player = stage.createItem({
                width:30,
                height:30,
                type:1,
                location:map,
                coord:{x:13.5,y:23},
                orientation:2,
                speed:2,
                frames:10,
                update:(i_this: Item) => {
                    var coord = i_this.coord;
                    if(!coord.offset){
                        if(i_this.control.orientation!='undefined'){
                            if(!map.get(coord.x+COS[i_this.control.orientation],coord.y+SIN[i_this.control.orientation])){
                                i_this.orientation = i_this.control.orientation;
                            }
                        }
                        i_this.control = {};
                        var value = map.get(coord.x+COS[i_this.orientation],coord.y+SIN[i_this.orientation]);
                        if(value==0){
                            i_this.x += i_this.speed*COS[i_this.orientation];
                            i_this.y += i_this.speed*SIN[i_this.orientation];
                        }else if(value<0){
                            i_this.x -= map.size*(map.x_length-1)*COS[i_this.orientation];
                            i_this.y -= map.size*(map.y_length-1)*SIN[i_this.orientation];
                        }
                    }else{
                        if(!beans.get(i_this.coord.x,i_this.coord.y)){	//吃豆
                            this._SCORE++;
                            beans.set(i_this.coord.x,i_this.coord.y,1);
                            if(config['goods'][i_this.coord.x+','+i_this.coord.y]){	//吃到能量豆
                                items.forEach(function(item){
                                    if(item.status==1||item.status==3){	//如果NPC为正常状态，则置为临时状态
                                        item.timeout = 450;
                                        item.status = 3;
                                    }
                                });
                            }
                        }
                        i_this.x += i_this.speed*COS[i_this.orientation];
                        i_this.y += i_this.speed*SIN[i_this.orientation];
                    }
                },
                draw: (context: CanvasRenderingContext2D, i_this: Item) => {
                    context.fillStyle = '#FFE600';
                    context.beginPath();
                    if(stage.status!=3){	//玩家正常状态
                        if(i_this.times%2){
                            context.arc(i_this.x,i_this.y,i_this.width/2,(.5*i_this.orientation+.20)*Math.PI,(.5*i_this.orientation-.20)*Math.PI,false);
                        }else{
                            context.arc(i_this.x,i_this.y,i_this.width/2,(.5*i_this.orientation+.01)*Math.PI,(.5*i_this.orientation-.01)*Math.PI,false);
                        }
                    }else{	//玩家被吃
                        if(stage.timeout) {
                            context.arc(i_this.x,i_this.y,i_this.width/2,(.5*i_this.orientation+1-.02*stage.timeout)*Math.PI,(.5*i_this.orientation-1+.02*stage.timeout)*Math.PI,false);
                        }
                    }
                    context.lineTo(i_this.x,i_this.y);
                    context.closePath();
                    context.fill();
                }
            });
            //事件绑定
            stage.bind('keydown',function(e){
                switch(e.keyCode){
                    case 13: //回车
                    game.nextStage();
                    case 32: //空格
                    this.status = this.status==2?1:2;
                    break;
                    case 39: //右
                    player.control = {orientation:0};
                    break;
                    case 40: //下
                    player.control = {orientation:1};
                    break;
                    case 37: //左
                    player.control = {orientation:2};
                    break;
                    case 38: //上
                    player.control = {orientation:3};
                    break;
                }
            });
        });
    }
    //结束画面
    gameOver = (game: Game) => {
        var stage = game.createStage();
        //游戏结束
        stage.createItem({
            x:game.width/2,
            y:game.height*.35,
            draw: (context: CanvasRenderingContext2D, i_this: Item) => {
                context.fillStyle = '#FFF';
                context.font = 'bold 48px Helvetica';
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillText(this._LIFE?'YOU WIN!':'GAME OVER',i_this.x,i_this.y);
            }
        });
        //记分
        stage.createItem({
            x:game.width/2,
            y:game.height*.5,
            draw: (context: CanvasRenderingContext2D, i_this: Item) => {
                context.fillStyle = '#FFF';
                context.font = '20px Helvetica';
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillText('FINAL SCORE: '+(this._SCORE+50*Math.max(this._LIFE-1,0)),i_this.x,i_this.y);
            }
        });
        //事件绑定
        stage.bind('keydown',(e) => {
            switch(e.keyCode){
                case 13: //回车
                case 32: //空格
                this._SCORE = 0;
                this._LIFE = 100;
                game.setStage(1);
                break;
            }
        });
    }

}

export default Play;
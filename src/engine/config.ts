const COIGIG = [	//关卡
    {				//第1关
        'map':[		//地图数据
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1],
            [1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1],
            [1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1],
            [1,1,1,1,1,1,0,1,1,0,1,1,1,2,2,1,1,1,0,1,1,0,1,1,1,1,1,1],
            [1,1,1,1,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,1,1,1,1],
            [0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0],
            [1,1,1,1,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,1,1,1,1],
            [1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1],
            [1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1],
            [1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1],
            [1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
            [1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        'wall_color':'#09f',
        'goods':{		//能量豆
            '1,3':1,
            '26,3':1,
            '1,23':1,
            '26,23':1
        }
    },
    {				//第2关
        'map':[		//地图数据
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1],
            [0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0],
            [1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,1,2,2,1,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,2,2,2,2,2,2,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,0,0,0,1,2,2,2,2,2,2,1,0,0,0,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
            [1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        'wall_color':'#FF5983',
        'goods':{		//能量豆
            '1,2':1,
            '26,2':1,
            '1,27':1,
            '26,27':1
        }
    },
    {				//第3关
        'map':[		//地图数据
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1],
            [1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1],
            [1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1],
            [1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1],
            [1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1],
            [1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1],
            [1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1],
            [0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0],
            [1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1],
            [1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,2,2,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,0,0,0,0,0,1],
            [1,0,1,1,0,1,1,1,1,0,1,2,2,2,2,2,2,1,0,1,1,1,1,0,1,1,0,1],
            [1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1],
            [1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        'wall_color':'#E08031',
        'goods':{		//能量豆
            '1,2':1,
            '26,2':1,
            '1,23':1,
            '26,23':1
        }
    },
    {				//第4关
        'map':[		//地图数据
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
            [0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0],
            [1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1],
            [1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,2,2,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,0,0,0,0,0,1],
            [1,1,1,0,1,1,1,1,1,0,1,2,2,2,2,2,2,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,2,2,2,2,2,2,1,0,1,1,1,1,1,0,1,1,1],
            [1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1],
            [1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
            [0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
            [1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1],
            [1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        'wall_color':'#37C6C0',
        'goods':{		//能量豆
            '1,3':1,
            '26,3':1,
            '1,28':1,
            '26,28':1
        }
    },
    {				//第5关
        'map':[		//地图数据
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1],
            [1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,2,2,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,0,1,1,1],
            [0,0,0,0,0,0,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,0,0,0,0,0,0],
            [1,1,1,0,1,1,1,1,1,0,1,2,2,2,2,2,2,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1],
            [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1],
            [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
            [1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        'wall_color':'#5ED5D1',
        'goods':{		//能量豆
            '1,3':1,
            '26,3':1,
            '1,27':1,
            '26,27':1
        }
    },
    {				//第6关
        'map':[		//地图数据
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,2,2,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,0,1,1,1],
            [0,0,0,0,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,0,0,0,0],
            [1,1,1,1,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,1,1,1,1],
            [1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1],
            [0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0],
            [1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        'wall_color':'#7E884F',
        'goods':{		//能量豆
            '1,3':1,
            '26,3':1,
            '1,28':1,
            '26,28':1
        }
    },
    {				//第7关
        'map':[		//地图数据
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1],
            [0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0],
            [1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1],
            [1,0,1,1,1,1,1,1,1,0,1,1,1,2,2,1,1,1,0,1,1,1,1,1,1,1,0,1],
            [1,0,1,1,1,1,1,1,1,0,1,2,2,2,2,2,2,1,0,1,1,1,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,0,1,1,1,1,0,1,2,2,2,2,2,2,1,0,1,1,1,1,0,1,1,0,1],
            [1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1],
            [1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1],
            [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1],
            [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1],
            [1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1],
            [1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        'wall_color':'#C9C',
        'goods':{		//能量豆
            '1,3':1,
            '26,3':1,
            '1,24':1,
            '26,24':1
        }
    },
    {				//第8关
        'map':[		//地图数据
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1],
            [1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1],
            [1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1],
            [0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0],
            [1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1],
            [1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,2,2,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,0,0,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,2,2,2,2,2,2,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1],
            [0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1],
            [1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1],
            [1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        'wall_color':'#EB3F2F',
        'goods':{		//能量豆
            '1,4':1,
            '26,4':1,
            '1,25':1,
            '26,25':1
        }
    },
    {				//第9关
        'map':[		//地图数据
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1],
            [1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1],
            [1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1],
            [1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1],
            [1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,2,2,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,0,0,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1],
            [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1],
            [1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1],
            [1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        'wall_color':'#2E68AA',
        'goods':{		//能量豆
            '1,6':1,
            '26,6':1,
            '1,27':1,
            '26,27':1
        }
    },
    {				//第10关
        'map':[		//地图数据
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1],
            [1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1],
            [1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1],
            [1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,1,2,2,1,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,2,2,2,2,2,2,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,0,0,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1],
            [0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0],
            [1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        'wall_color':'#C1194E',
        'goods':{		//能量豆
            '1,4':1,
            '26,4':1,
            '1,28':1,
            '26,28':1
        }
    },
    {				//第11关
        'map':[		//地图数据
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
            [1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1],
            [1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1],
            [1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1],
            [1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,2,2,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,1,1,0,0,0,0,1,2,2,2,2,2,2,1,0,0,0,0,1,1,0,0,0,1],
            [1,1,1,0,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1],
            [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1],
            [1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1],
            [1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        'wall_color':'#56A36C',
        'goods':{		//能量豆
            '1,3':1,
            '26,3':1,
            '1,28':1,
            '26,28':1
        }
    },
    {				//第12关
        'map':[		//地图数据
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1],
            [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1],
            [1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1],
            [1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,2,2,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,0,1,1,1],
            [0,0,0,0,1,1,0,0,0,0,1,2,2,2,2,2,2,1,0,0,0,0,1,1,0,0,0,0],
            [1,1,1,1,1,1,1,1,1,0,1,2,2,2,2,2,2,1,0,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1],
            [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1],
            [1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1],
            [1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        'wall_color':'#9966CC',
        'goods':{		//能量豆
            '1,4':1,
            '26,4':1,
            '1,27':1,
            '26,27':1
        }
    }
];
const COLOR = ['#F00','#F93','#0CF','#F9C'];	//NPC颜色
const COS = [1,0,-1,0];
const SIN = [0,1,0,-1];

export {
    COIGIG,
    COLOR,
    COS,
    SIN
}
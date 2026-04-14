// map pour le centre ville
export default {
    spawn: { x: 200, y: 200 }, 
    map :
        [
            "====================",
            "/===    ===    ===  ",
            "/=   @  ===    ===  ",
            "/=             ===  ",
            "/=      ==@    ===  ", //5
            "/===           @ =  ", 
            "/==            +==  ", 
            "/= @           +++  ", 
            "/==            +==  ", 
            "/===    ===    ===  ", //10
            "/===    ===    ===  ",
            "/===            ===  ",
            "==== DD === @ =====",                         
        ],
    //     ["=============",
    //     "/=  =    ===/",
    //     "/=  =    ===/",
    //     "/=  =    ===/",
    //     "/=  =    ===/", // 5
    //     "/=  =    ===/",
    //     "/=  =    ===/",
    //     "/=  =    ===/",
    //     "/=  =    ===/",
    //     "/=  =    ===/", // 10
    //     "/=  =    ===/",
    //     "/=  =    ===/",
    //     "/=  =    ===/",
    //     "/=  =    ===/",
    //     "/=  =    ===/", // 15
    //     "/=  =    ===/",
    //     "/====   @===/",
    //     "/====    ===/",
    //     "/====    ===/",
    //     "============D",
    // ], // 13 par 20
    tileWidth:32,
    tileHeight:32,
    tiles:{
        "=":()=>[
            rect(32,32),
            area(),
            body({isStatic:true}),
            anchor("center"),
            color(255,44,44),
            scale(2)            
        ],
        "/":()=>[
            rect(32,32),
            area(),
            body({isStatic:true}),
            anchor("center"),
            color(0,255,0),
            scale(2)            
        ],
        "@":()=>[
            sprite("key"),
            area({isSensor: true}),
            anchor("center"),
            scale(0.1),
            "key"
        ],
        "D": () => [
            rect(32, 32),
            area({ isSensor: true }),
            anchor("center"),
            color(255,255,255),
            "door",
            { destination: "plage" }
        ],
        "+":()=>[
            rect(32,32),
            area({isSensor : true}),
            anchor("center"),
            color(255,150,255),
            "hotel_ville"
        ]
    }
}


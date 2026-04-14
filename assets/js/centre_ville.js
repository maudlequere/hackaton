import loadbatiment from "../../loadcentreville"

// map pour le centre ville
export default {
    spawn: { x: 200, y: 200 }, 
    map :
    [
        "jiUGDUG_D2SSS",
        "lkUvFU%fvUG_D",
        "%fUSS9SSSUFf%",
        "2S7jDUG_i5SSS",
        "UHU|fUF%|Uj_D",
        "U|U|24SSfUBFv",
        "UBU|UGD2S7%2S",
        "UfUBUfvUp1S4H",
        "1S7%UhhUqruUB",
        "Gi1SSSS7wxyUF",
        "FliUHUH1S6SSS",
        "3vBUBUl_DUG_D",
        "83%UFU%fFUfFv",
        "H1SSSSSS686SS",
        "l_DUttttUHUGD",
        "vFfUthhtUBU%f",
        "SSS4thhtUv5S3",
        "ttttt*tt5S4HU"
    ],
    tiles:{
    // textures
        "s" : () => [
            sprite("sand_tile"),           
            anchor("center"),
            scale(4)
        ],
        "h" : () => [
            sprite("grass_tile"),           
            anchor("center"),
            scale(4)
        ],
        "E" : () => [
            sprite("water_tile"),          
            anchor("center"),
            scale(4)
        ],
        "t" : () => [
            sprite("sidewalk_tile"),
            anchor("center"),
            scale(4)
        ],

        // cabane plage
        "c" : () => [
            sprite("shipowner_house_0_1"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "d" : () => [
            sprite("shipowner_house_1_1"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "T" : () => [
            sprite("toitbouthaut"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],

        // toits
        "B" : () => [
            sprite("toitboutbas"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "G" : () => [
            sprite("toitboutgauche"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "D" : () => [
            sprite("toitboutdroite"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "i" : () => [
            sprite("toitcoinhautdroit"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "j" : () => [
            sprite("toitcoinhautgauche"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "k" : () => [
            sprite("toitcoinbasdroit"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "l" : () => [
            sprite("toitcoinbasgauche"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "_" : () => [
            sprite("toitlongueurhorizontal"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "|" : () => [
            sprite("toitlongueurvertical"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "f" : () => [
            sprite("face1"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "F" : () => [
            sprite("face2"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "v" : () => [
            sprite("facevetement"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "%" : () => [
            sprite("facebalcon"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "a" : () => [
            sprite("shipowner_house_0_0"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "b" : () => [
            sprite("shipowner_house_1_0"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "e" : () => [
            sprite("shipowner_house_0_2"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "g" : () => [
            sprite("shipowner_house_1_0"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "m" : () => [
            sprite("modern_art_museum_0_0"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "n" : () => [
            sprite("modern_art_museum_1_0"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "o" : () => [
            sprite("modern_art_museum_2_0"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(4)
        ],
        "U" : () => [
            sprite("road_up"),
            anchor("center"),
            scale(4)
        ],
        "S" : () => [
            sprite("road_side"),
            anchor("center"),
            scale(4)
        ],
        "1" : () => [
            sprite("road_turn_1"),
            anchor("center"),
            scale(4)
        ],
        "2" : () => [
            sprite("road_turn_2"),
            anchor("center"),
            scale(4)
        ],
        "3" : () => [
            sprite("road_turn_3"),
            anchor("center"),
            scale(4)
        ],
        "4" : () => [
            sprite("road_turn_4"),
            anchor("center"),
            scale(4)
        ],
        "5" : () => [
            sprite("road_T_1"),
            anchor("center"),
            scale(4)
        ],
        "6" : () => [
            sprite("road_T_2"),
            anchor("center"),
            scale(4)
        ],
        "7" : () => [
            sprite("road_T_3"),
            anchor("center"),
            scale(4)
        ],
        "8" : () => [
            sprite("road_T_4"),
            anchor("center"),
            scale(4)
        ],
        "9" : () => [
            sprite("road_+"),
            anchor("center"),
            scale(4)
        ],
        "*" : () => [
            sprite("teleporter"),
            scale(4),
            body({isStatic:true}),
            area(),
            anchor("center"),
            "teleporter",
            {destination : "plage_haut"}
        ]
    }
}


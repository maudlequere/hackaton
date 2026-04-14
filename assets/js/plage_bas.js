export default{
    spawn: { x: 1600, y: 900},    
    map :[
  "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
  "@EEEEEEEEEEEEEEEEEsssttt§tfvFGDi                                      @",
  "@EEEEEEEEEEEEEEEEEssssttUttF%%FG__i                                   @",
  "@EEEEEEEEEEEEEEEEEEtttttUttfFfF%v%G______i                            @",
  "@EEEEEEEEEEEEEEEEEEEttttUttttttfffF%F%f%FG_________________DabG______D@",
  "@EEEEEEEEEEEEEEEEEEEttttUttttttttttfFfFff%fvf%f%F%FFF%Fv%Ff%cd%f%f%fv%@",
  "@EEEEEEEEEEEEEEEEEEEEtttUttttttttttttttttfFfFFffvffFfFFfFFFfegFFvFfFfF@",
  "@EEEEEEEEEEEEEEEEEEEEEttUttttttttttttttttttttttttttttttttttttttttttttt@",
  "@EEEEEEEEEEEEEEEEEEEEEEtUttttttttttGDtGDtGDtGDtGDtGDtGDttttttttttttttt@",
  "@EEEEEEEEEEEEEEEEEEEEEEtUttttttttttfFtFFtfFtfFtFFtfFtFfttttttttttttttt@",
  "@EEEEEEEEEEEEEEEEEEEEEEtUttttttttttttttttttttttttttttttttttttttttttttt@",
  "@EEEEEEEEEEEEEEEEtttEEEt1SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSÂ§@",
  "@EEEEEEEEEEEEEEEEttttttttttttttttttttttttttttttttttttttttttttttGDttttt@",
  "@EEEEEEEEEEEEEEEEEtttttttttttttmnotttttttGDttGDttGDttttttttttttffttttt@",
  "@EEEEEEEEEEEEEEEEEtttttGDttttttttttttttttfFttFFttfFttttttttttttttttttt@",
  "@EEEEEEEEEEEEEEEEEtttttFfttttttttttttttttttttttttttttttttttttttttttttt@",
  "@EEEEEEEEEEEEEEEEEtttttttttttGDttttttttttttttttttttEEEEEEEEEEEEEEEEEEE@",
  "@EEEEEEEEEEEEEEEEEEstttttttttFFtttttttssssEEEEEEEEEEEEEEEEEEEEEEEEEEEE@",
  "@EEEEEEEEEEEEEEEEEEssstttttttttttttsssssEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE@",
  "@EEEEEEEEEEEEEEEEEEEsssssstttttttssssEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE@",
  "@EEEEEEEEEEEEEEEEEEEEssssssssssssssEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE@",
  "@EEEEEEEEEEEEEEEEEEEEEEEssssssssssEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE@",
  "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
],    
    tiles:{
    // textures
        "s" : () => [
            sprite("sand_tile"),           
            anchor("center"),
            scale(2)
        ],
        "h" : () => [
            sprite("grass_tile"),           
            anchor("center"),
            scale(2)
        ],
        "E" : () => [
            sprite("water_tile"),          
            anchor("center"),
            body({isStatic:true}),
            area(),            
            scale(2)
        ],
        "t" : () => [
            sprite("sidewalk_tile"),
            anchor("center"),
            scale(2)
        ],

        // cabane plage
        "c" : () => [
            sprite("shipowner_house_0_1"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "d" : () => [
            sprite("shipowner_house_1_1"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "T" : () => [
            sprite("toitbouthaut"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],

        // toits
        "B" : () => [
            sprite("toitboutbas"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "G" : () => [
            sprite("toitboutgauche"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "D" : () => [
            sprite("toitboutdroite"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "i" : () => [
            sprite("toitcoinhautdroit"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "j" : () => [
            sprite("toitcoinhautgauche"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "k" : () => [
            sprite("toitcoinbasdroit"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "l" : () => [
            sprite("toitcoinbasgauche"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "_" : () => [
            sprite("toitlongueurhorizontal"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "|" : () => [
            sprite("toitlongueurvertical"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "f" : () => [
            sprite("face1"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "F" : () => [
            sprite("face2"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "v" : () => [
            sprite("facevetement"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "%" : () => [
            sprite("facebalcon"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "a" : () => [
            sprite("shipowner_house_0_0"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "b" : () => [
            sprite("shipowner_house_1_0"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "e" : () => [
            sprite("shipowner_house_0_2"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2),
            "shipowner"
        ],
        "g" : () => [
            sprite("shipowner_house_1_2"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2),
            "shipowner"
        ],
        "m" : () => [
            sprite("modern_art_museum_0_0"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "n" : () => [
            sprite("modern_art_museum_1_0"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2),
            "museum"
        ],
        "o" : () => [
            sprite("modern_art_museum_2_0"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2)
        ],
        "U" : () => [
            sprite("road_up"),
            anchor("center"),
            scale(2)
        ],
        "S" : () => [
            sprite("road_side"),
            anchor("center"),
            scale(2)
        ],
        "1" : () => [
            sprite("road_turn_1"),
            anchor("center"),
            scale(2)
        ],
        "2" : () => [
            sprite("road_turn_2"),
            anchor("center"),
            scale(2)
        ],
        "3" : () => [
            sprite("road_turn_3"),
            anchor("center"),
            scale(2)
        ],
        "4" : () => [
            sprite("road_turn_4"),
            anchor("center"),
            scale(2)
        ],
        "5" : () => [
            sprite("road_T_1"),
            anchor("center"),
            scale(2)
        ],
        "6" : () => [
            sprite("road_T_2"),
            anchor("center"),
            scale(2)
        ],
        "7" : () => [
            sprite("road_T_3"),
            anchor("center"),
            scale(2)
        ],
        "8" : () => [
            sprite("road_T_4"),
            anchor("center"),
            scale(2)
        ],
        "9" : () => [
            sprite("road_+"),
            anchor("center"),
            scale(2)
        ],
        "*" : () => [
            sprite("teleporter"),
            scale(2),
            body({isStatic:true}),
            area(),
            anchor("center"),
            "teleporter",
            {destination : "plage_haut"}
        ],
        "§" : () => [
            sprite("teleporter2"),
            scale(2),
            body({isStatic:true}),
            area(),            
            anchor("center"),
            "teleporter",
            {destination : "centre_ville"}            
        ],
        "@" : () =>[
            sprite("void_tile"),
            scale(2),
            body({ isStatic: true }),
            area(),            
            anchor("center"),
        ]
    }
}
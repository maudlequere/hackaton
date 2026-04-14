export default{
    spawn: { x: 961, y: 1440 },    
    map :[
  "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
  "@EEEEEEEEEEEEEEEEEEEEEEsttTU               @",
  "@EEEEEEEEEEEEEEEEEEEEEssttBU               @",
  "@EEEEEEEEEEEEEEEEEEEEsssttTU               @",
  "@EEEEEEEEEEEEEEEEEEEssssttBU               @",
  "@EEEEEEEEEEEEEEEEEEEssssttTU               @",
  "@EEEEEEEEEEEEEEEEEEsssssttBU               @",
  "@EEEEEEEEEEEEEEEEEEsssssttTU               @",
  "@EEEEEEEEEEEEEEEEEsssssstt|U               @",
  "@EEEEEEEEEEEEEEEEEsssssstt|U               @",
  "@EEEEEEEEEEEEEEEEEssssssttBU               @",
  "@EEEEEEEEEEEEEEEEEssssssttTU               @",
  "@EEEEEEEEEEEEEEEEEssssssttBU               @",
  "@EEEEEEEEEEEEEEEEsss/&ssttTU               @",
  "@EEEEEEEEEEEEEEEEssssssstt|U               @",
  "@EEEEEEEEEEEEEEEEssssssstt|U               @",
  "@EEEEEEEEEEEEEEEEsss&/shttBU               @",
  "@EEEEEEEEEEEEEEEEsssssstttTU               @",
  "@EEEEEEEEEEEEEEEssssssshttBU               @",
  "@EEEEEEEEEEEEEEEssss//shttTU               @",
  "@EEEEEEEEEEEEEEEssssssstttBU               @",
  "@EEEEEEEEEEEEEEEssssssshttTU               @",
  "@EEEEEEEEEEEEEEsssss//shttBU               @",
  "@EEEEEEEEEEEEEEsssssssstttTU               @",
  "@EEEEEEEEEEEEEEsssssssshtt|U               @",
  "@EEEEEEEEEEEEEEssss/&/shtt|U               @",
  "@EEEEEEEEEEEEEssssssssshttBU               @",
  "@EEEEEEEEEEEEEssssssssshttTU               @",
  "@EEEEEEEEEEEEEssss&///shtt|U               @",
  "@EEEEEEEEEEEEEssssssssshtt|U               @",
  "@EEEEEEEEEEEEsssssssssshtt|U               @",
  "@EEEEEEEEEEEEsssss//&&sstt|U               @",
  "@EEEEEEEEEEEssssssssssssttBUG____D         @",
  "@EEEEEEEEEEEssssssssssssttTUfFfFfF         @",
  "@EEEEEEEEEEEssssssssssssttv1SSSS3f         @",
  "@EEEEEEEEEEsssssssssssssttttttttUB         @",
  "@EEEEEEEEEEsssssssssssssttG___DtUT         @",
  "@EEEEEEEEEssssssssssssssttfF%fFtUB         @",
  "@EEEEEEEEsssssssssssssssttttttttUT         @",
  "@EEEEEEEssssssssssssssssttttttttUB         @",
  "@EEEEEssssssssssssssssssttttttttUT         @",
  "@EEEEsssssssssssssssssssttttttttUB         @",
  "@EEsssssssssssssssssssssttttttttUT         @",
  "@sssssssssssssssssssssssttttttttUF         @",
  "@sssssssssssssssssssssssttttttttUGD        @",
  "@EEEEsssssssssssssssssssssttttttU%F        @",
  "@EEEEEEsssssssssssssssssssssttttUfFGD      @",
  "@EEEEEEEEEsssssssssssssEEEssstttUtF%%      @",
  "@EEEEEEEEEEEssssssssssEEEEssstttUtfvFGDi   @",
  "@EEEEEEEEEEEEsssssssssEEEEssssttUttF%%FG__i@",
  "@EEEEEEEEEEEEEsssssssEEEEEEtttttUttfFfF%v%G@",
  "@EEEEEEEEEEEEEEEsssEEEEEEEEEttttUttttttfffF@",
  "@EEEEEEEEEEEEEEEEssEEEEEEEEEtttt*tttttttttt@",
  "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
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
            scale(2)
        ],
        "t" : () => [
            sprite("sidewalk_tile"),
            anchor("center"),
            scale(2)
        ],


        "/" : () => [
            sprite("beach_cabin_1"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2),
            "cabane_1"
        ],
        "&" : () => [
            sprite("beach_cabin_2"),
            area(),
            body({ isStatic: true }),
            anchor("center"),
            scale(2),
            "cabane_2"
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
            {destination : "centre_ville"}
        ],
        "§" : () => [
            sprite("teleporter2"),
            scale(2),
            body({isStatic:true}),
            area(),            
            anchor("center"),
            "teleporter",
            {destination : "plage_bas"}            
        ],
        "@" : () =>[
            sprite("void_tile"),
            scale(2),
            body({ isStatic: true }),
            area(),            
            anchor("center"),
        ],               
    }
}
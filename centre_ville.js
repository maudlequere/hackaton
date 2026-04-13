import loadAssets from "./assets";

loadAssets

const map_centre_ville = addLevel([
        "+-|thotel_ville|/+",
        "==|ttt/=",
        "__|_____",
    ], {
        tileWidth: 64,
        tileHeight: 64,
        pos: vec2(64, 64),
        tiles: {
            "+": () => [
                sprite("grass"),
                area(),
                body({ isStatic: true }),
                anchor("center"),
            ],
            "-": () => [
                sprite("steel"),
                area(),
                body({ isStatic: true }),
                anchor("center"),
            ],
            "hotel_ville": () => [
                sprite("hotel_ville"),
                area({ isSensor: true }),
                anchor("center"),
                "key",
            ],
            "@": () => [
                sprite("bean"),
                area(),
                body(),
                anchor("center"),
                "player",
            ],
            "|": () => [
                sprite("door"),
                area(),
                body({ isStatic: true }),
                anchor("center"),
                "door",
            ],
        }
    });
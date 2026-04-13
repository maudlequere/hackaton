import k from "./kaplay";
import loadAssets from "./assets";

const mapsData = {
    "foret": {
        sprite: "map_foret",
        spawn: { x: 500, y: 500 },
        collisions: [
            { x: 1, y: -2, w: 141, h: 158 },
            { x: 142, y: -2, w: 70, h: 65 },
            { x: 1, y: 270, w: 136, h: 188 },
            { x: 0, y: 457, w: 71, h: 85 },
            { x: 0, y: 583, w: 72, h: 179 },
            { x: 71, y: 686, w: 78, h: 77 },
            { x: 148, y: 729, w: 54, h: 37 },
            { x: 282, y: 383, w: 208, h: 105 },
            { x: 283, y: 484, w: 67, h: 61 },
            { x: 488, y: 426, w: 76, h: 116 },
            { x: 420, y: 486, w: 76, h: 51 },
            { x: 566, y: 719, w: 351, h: 47 },
            { x: 713, y: 581, w: 137, h: 139 },
            { x: 851, y: 639, w: 64, h: 82 },
            { x: 637, y: 616, w: 82, h: 99 },
            { x: 838, y: 538, w: 86, h: 76 },
            { x: 1205, y: 545, w: 206, h: 153 },
            { x: 1260, y: 694, w: 151, h: 76 },
            { x: 1265, y: 373, w: 143, h: 168 },
            { x: 421, y: 58, w: 360, h: 167 },
            { x: 871, y: 150, w: 206, h: 223 },
            { x: 1126, y: 227, w: 76, h: 74 },
            { x: 1269, y: -3, w: 137, h: 232 },
            { x: 1182, y: 65, w: 96, h: 123 }
        ],
        doors: [
            { x: 1350, y: 300, w: 50, h: 100, nextScene: "grotte" } 
        ]
    },
    "grotte": {
        sprite: "map_grotte",
        spawn: { x: 150, y: 400 },
        collisions: [],
        doors: [
            { x: 1350, y: 200, w: 50, h: 100, nextScene: "foret" } 
        ]
    }
};

loadAssets();

scene("game", (levelName) => {
    const data = mapsData[levelName];

    add([
        sprite(data.sprite),
        pos(0, 0)
    ]);

    data.collisions.forEach(c => {
        add([
            rect(c.w, c.h),
            pos(c.x, c.y),
            area(),
            body({ isStatic: true }),
            opacity(0),
            "wall"
        ]);
    });

    // --- GÉNÉRATION DES PORTES AVEC MARQUEUR VISIBLE ---
    if (data.doors) {
        data.doors.forEach(d => {
            add([
                rect(d.w, d.h),
                pos(d.x, d.y),
                area(),
                opacity(0.5), // On le met à 0.5 pour voir le marqueur
                color(0, 255, 0), // Vert pour les téléporteurs
                outline(2), // Ajoute une bordure pour mieux le voir
                "door",
                { destination: d.nextScene } 
            ]);
        });
    }

    const player = add([
        sprite("perso-bas"),
        pos(data.spawn.x, data.spawn.y),
        anchor("center"),
        area(),
        body(),
        scale(0.1),
        { speed: 300 }
    ]);

    player.onCollide("door", (door) => {
        go("game", door.destination); 
    });

    onKeyDown("left", () => { player.move(-player.speed, 0); player.use(sprite("perso-gauche")); });
    onKeyDown("right", () => { player.move(player.speed, 0); player.use(sprite("perso-droite")); });
    onKeyDown("up", () => { player.move(0, -player.speed); player.use(sprite("perso-haut")); });
    onKeyDown("down", () => { player.move(0, player.speed); player.use(sprite("perso-bas")); });

    onUpdate(() => { 
        setCamPos(player.pos); // Correction camPos suggérée par la console
    });
});

onLoad(() => {
    go("game", "foret");
});
import k from "./kaplay";
import loadAssets from "./assets";

const startMenu = document.getElementById("start-menu");
const playButton = document.getElementById("btn-play");
const keysButton = document.getElementById("btn-keys");
const goalButton = document.getElementById("btn-goal");
const keysPanel = document.getElementById("panel-keys");
const goalPanel = document.getElementById("panel-goal");

let gameReady = false;
let gameStarted = false;

const playerAnimationSets = {
    down: {
        idle: ["player-down-stand-1", "player-down-stand-2"],
        walk: ["player-down-walk-1", "player-down-walk-2"]
    },
    up: {
        idle: ["player-up-stand-1", "player-up-stand-2"],
        walk: ["player-up-walk-1", "player-up-walk-2"]
    },
    left: {
        idle: ["player-left-stand-1", "player-left-stand-2"],
        walk: ["player-left-walk-1", "player-left-walk-2"]
    },
    right: {
        idle: ["player-right-stand-1", "player-right-stand-2"],
        walk: ["player-right-walk-1", "player-right-walk-2"]
    }
};

function setPlayerFrame(player, spriteName) {
    if (player.currentSprite === spriteName) return;

    player.currentSprite = spriteName;
    player.use(sprite(spriteName));
}

function togglePanel(panel) {
    if (!panel) return;

    const isOpen = !panel.hidden;
    if (keysPanel) keysPanel.hidden = true;
    if (goalPanel) goalPanel.hidden = true;
    panel.hidden = isOpen;
}

function startGame() {
    if (!gameReady || gameStarted) return;

    gameStarted = true;
    if (startMenu) startMenu.style.display = "none";
    go("game", "foret");
}

if (playButton) {
    playButton.addEventListener("click", startGame);
}

if (keysButton) {
    keysButton.addEventListener("click", () => togglePanel(keysPanel));
}

if (goalButton) {
    goalButton.addEventListener("click", () => togglePanel(goalPanel));
}

const mapsData = {
    "foret": {
        sprite: "map_foret",
        spawn: {x:400,y:400 },
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
            { x: 1350, y: 200, w: 50, h: 100, nextScene: "centre_ville" } 
        ]
    },

    "centre_ville": { // map à ajouter
        sprite:"map_centre_ville",
        spawn:{x:150, y:400},
        collisions:[],
        doors:[
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
        sprite("player-down-stand-1"),
        pos(data.spawn.x, data.spawn.y),
        anchor("center"),
        area(),
        body(),
        scale(0.1),
        {
            speed: 300,
            direction: "down",
            currentSprite: "player-down-stand-1",
            frameTime: 0,
            frameIndex: 0
        }
    ]);

    player.onCollide("door", (door) => {
        go("game", door.destination); 
    });

    onUpdate(() => { 
        let moveX = 0;
        let moveY = 0;

        if (isKeyDown("left")) {
            moveX -= 1;
            player.direction = "left";
        }

        if (isKeyDown("right")) {
            moveX += 1;
            player.direction = "right";
        }

        if (isKeyDown("up")) {
            moveY -= 1;
            player.direction = "up";
        }

        if (isKeyDown("down")) {
            moveY += 1;
            player.direction = "down";
        }

        const isMoving = moveX !== 0 || moveY !== 0;

        if (isMoving) {
            const movement = vec2(moveX, moveY).unit().scale(player.speed);
            player.move(movement);
        }

        player.frameTime += dt();
        const animationSpeed = isMoving ? 0.14 : 0.4;

        if (player.frameTime >= animationSpeed) {
            player.frameTime = 0;
            player.frameIndex = (player.frameIndex + 1) % 2;
        }

        const animationSet = playerAnimationSets[player.direction];
        const frameGroup = isMoving ? animationSet.walk : animationSet.idle;
        setPlayerFrame(player, frameGroup[player.frameIndex]);

        setCamPos(player.pos); // Correction camPos suggérée par la console
    });
});

onLoad(() => {
    gameReady = true;
});
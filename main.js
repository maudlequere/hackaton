import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
import loadPlayer from "./loadplayer.js";
import centre_ville from "./assets/js/centre_ville.js";
import plage_bas from "./assets/js/plage_bas.js";
import loadcentreville from "./loadcentreville.js";
import loadplage from "./loadplage.js";

const k = kaplay({
    global: true,
    width: 1224,
    height: 768,
    letterbox: true,
    crisp: true,    
    background:[0,0,0]
});
console.log("Kaplay initialisé ✅", k);
loadcentreville();
loadPlayer();
loadplage();
loadSprite("key","assets/sprites/objets/key.png");
let nb_key = 0;

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
    go("game","plage_bas");
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

loadPlayer();

// différentes maps
const levels = {
    "centre_ville": centre_ville,
    "plage_bas":plage_bas,
};

scene("game", (levelName) => {

    const data = levels[levelName];

    if (!data) {
        console.error(`Niveau introuvable : ${levelName}`);
        return;
    }

    if (data==centre_ville){
        addLevel(data.map, {
            tileWidth: 128,
            tileHeight: 128,
            tiles: data.tiles
        });
    }
    if (data==plage_bas){
        addLevel(data.map, {
            tileWidth: 64,
            tileHeight: 64,
            tiles: data.tiles
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

    // contrôle
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
    onKeyPress("e", () => {
        dialogBox.hidden = true;
        dialogText.hidden = true;
        dialogBouton.hidden = true;
    });          

    // actions lors des collisions
    player.onCollide("hotel_ville", (batiment) => {

        if (nb_key >= 5) {
            dialogText.text = "L'hôtel de ville est ...";
        } else {
            dialogText.text = `Il te faut 5 clés pour avoir plus d'information sur ce batiment. (${nb_key}/5)`;
        }

        dialogBox.hidden = false;
        dialogText.hidden = false;
        dialogBouton.hidden = false;        
    });

    player.onCollide("key", (key) => {
        destroy(key);
        nb_key=nb_key + 1;
        console.log("Clés :", nb_key);
        keyText.text = `🔑 Nombre de clés : ${nb_key}`;
    });    

    player.onCollide("door", (door) => {
        go("game", door.destination); 
    });

    // afficher le nombre de clé
    const keyBox = add([
        rect(200, 30),
        pos(360, 10),
        color(255,215,0),
        opacity(0.6),
        fixed(),
        z(9),
    ]);
    const keyText = add([
        text(`🔑 Nombre de clés : ${nb_key}`, { size: 16 }),
        pos(360, 14),
        color(0,0,0),
        fixed(),
        z(10),
    ]);

    // afficher les messages
    const dialogBox = add([
        rect(640, 60),
        pos(5, 400),
        color(0, 0, 0),
        opacity(0.8),
        fixed(),
        z(9),
    ]);
    const dialogText = add([
        text("", { size: 16 }),
        pos(5, 415),
        color(255, 255, 255),
        fixed(),
        z(10),
    ]);  
    const dialogBouton = add([
        text("cliquer sur E pour passer",{size:12}),
        pos(400,450),
        color(255,255,255),
        fixed(),
        z(10),
    ]);
    dialogBox.hidden = true;
    dialogText.hidden = true;
    dialogBouton.hidden = true;

});

onLoad(() => {
    gameReady = true;
});
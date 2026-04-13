import k from "./kaplay";

export default function loadAssets() {
    loadSprite("map_foret", "assets/sprites/image.png");
    loadSprite("map_grotte", "assets/sprites/image.png");

    loadSprite("player-down-stand-1", "assets/sprites/player/stand_1_face.png");
    loadSprite("player-down-stand-2", "assets/sprites/player/stand_2_face.png");
    loadSprite("player-down-walk-1", "assets/sprites/player/wal_1_face.png");
    loadSprite("player-down-walk-2", "assets/sprites/player/Walk_2_face.png");

    loadSprite("player-up-stand-1", "assets/sprites/player/stand_1_dos.png");
    loadSprite("player-up-stand-2", "assets/sprites/player/stand_2_dos.png");
    loadSprite("player-up-walk-1", "assets/sprites/player/walk_1_dos.png");
    loadSprite("player-up-walk-2", "assets/sprites/player/walk_2_dos.png");

    loadSprite("player-left-stand-1", "assets/sprites/player/stand_1_gauche.png");
    loadSprite("player-left-stand-2", "assets/sprites/player/stand_2_gauche.png");
    loadSprite("player-left-walk-1", "assets/sprites/player/walk_1_gauche.png");
    loadSprite("player-left-walk-2", "assets/sprites/player/walk_2_gauche.png");

    loadSprite("player-right-stand-1", "assets/sprites/player/stand_1_droit.png");
    loadSprite("player-right-stand-2", "assets/sprites/player/stand_2_droite.png");
    loadSprite("player-right-walk-1", "assets/sprites/player/walk_1_droite.png");
    loadSprite("player-right-walk-2", "assets/sprites/player/walk_2_droite.png");
}
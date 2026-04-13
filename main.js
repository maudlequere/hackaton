import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
// loadSprite(assets/sprites);
kaplay({
    width: 1280,//480
    height: 740,//400
    background: "#606060",
});
loadBean();
loadSprite("key", "/assets/sprite/objets/key.png");

scene ("centre_ville", () =>{
    const player = add([
        sprite("bean"), // mettre sprite quand on aura
        pos(center()),
        anchor("center"),
        body(),
        area(),
        "player",
        { speed:300}
    ])
    const map = add([
        rect(width(),height()),
        pos(0,400),
        area(),
        body({isStatic : true})
    ])

    const hotel_ville = add([
        rect(96, 96), // mettre sprite("hotel_ville") quand on aura
        pos(center()),
        "shape",
        color(0,0,0),
        area()
    ]);

    const cle = add([
        sprite("key"),
        pos()
    ])

    onKeyDown("right", () => {
        player.move(200, 0);
    });
    onKeyDown("left", () => {
        player.move(-200, 0);
    });
    onKeyDown("up", () => {
        player.move(0, -200);
    });
    onKeyDown("down", () => {
        player.move(0, 200);
    });
    
});

go("centre_ville");
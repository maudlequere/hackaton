import kaplay from "kaplay";

const k = kaplay({
    global: true,
    width: 640,
    height: 480,
    letterbox: true,
    physics: true,
    pixelFilter: true,
    background:[0,0,0]
});

export default k;
const pixi = require('pixi');
const p2 = require('p2');
const Phaser = require('phaser');

let game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

function preload(){}
function create(){
    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    //  The Text is positioned at 0, 100
    var text = game.add.text(0, 0, "WAR", style);
    text.setShadow(3, 3, 'rgba(0.9,0.9,0.9,0.5)', 2);

    text.setTextBounds(0, 100, 800, 100);

}
function update(){}

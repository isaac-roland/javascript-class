var GameState = {
    preload: function() {
        this.load.image('background', 'pictures/epic_face.png');
        this.load.image('arrow', 'pictures/super_short_name.jpg')
        this.load.image('invader', 'pictures/invader.jpg');
        this.load.image('epicFace', 'pictures/epic_face.png');
        this.load.image('outerSpace', 'pictures/invader.jpg');
        this.load.image('theFaceOfEpicness', 'pictures/super_short_name.jpg');
        //this.load.image('theFaceOfEpicness', 'pictures/super_short_name.jpeg');
    },
    create: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.background = this.game.add.sprite(10, 10, 'background');
        this.invader = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'invader');
        this.invader.anchor.setTo(0.5, 0.5);
        this.invader.scale.setTo(1, 1);
        this.rightArrow = this.game.add.sprite(580, this.game.world.centerY, 'arrow');
        this.epicFace = this.game.add.sprite(120, 10, 'epicFace');
        this.epicFace.scale.setTo(0.1);
        this.outerSpace = this.game.add.sprite(500, 300, 'outerSpace');
        this.outerSpace.anchor.setTo(0.5);
        this.outerSpace.scale.setTo(-1, 1);
        this.theFaceOfEpicness = this.game.add.sprite(100, 25, 'theFaceOfEpicness');
        this.theFaceOfEpicness.scale.setTo(.5);
        this.theFaceOfEpicness.angle = 90;
    }, 
    update: function() {
        this.theFaceOfEpicness.angle += 0.5;
    }
};

var game = new Phaser.Game(640, 360, Phaser.AUTO);

game.state.add('GameState', GameState);

game.state.start('GameState');

var i = "WATTS up, thats quite SHOCKING, I'm glad I'm not in your CURRENT situation, don't you wanna go HOME? im quite conFUSED";

//alert(i);

var x = -1;

while(x <= 999){

x = x + 1;

console.log(x);

}

import 'phaser';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import Model from './Model';
import HelpScene from './Scenes/HelpScene';
import ScoreScene from './Scenes/ScoreScene';

class Game extends Phaser.Game {
    constructor() {
        super(config);
        const model = new Model();
        this.globals = { model, bgMusic: null };
        this.scene.add('Boot', BootScene);
        this.scene.add('Preloader', PreloaderScene);
        this.scene.add('Title', TitleScene);
        this.scene.add('Options', OptionsScene);
        this.scene.add('Credits', CreditsScene);
        this.scene.add('Help', HelpScene);
        this.scene.add('Score', ScoreScene);
        this.scene.add('Game', GameScene);
        this.scene.start('Game');
    }
}

window.game = new Game();

/*
api.saveScore('myname', 8).then(() => {
    api.getScore().then((scores) => {
        console.log(scores);
    });
});
*/
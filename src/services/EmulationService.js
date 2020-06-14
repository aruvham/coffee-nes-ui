import NES from './../coffee-nes/src/NES';
import defaultRoms from './../configs/defaultRoms';

class EmulationService {
    constructor() {
        // Canvas
        this.WIDTH = 256; // px
        this.HEIGHT = 240; // px
        this.canvas = null;
        this.ctx = null;
        this.imageData = null;
        this.isReady = false;

        // Emulation
        this.nes = null;
        this.isRunning = false;
        this.isPaused = false;

        this.FRAME_DURATION = 1000 / 60;
        this.MAX_FRAMES = 2;
        this.prevTimestamp = 0;
        this.dt = 0;

        this.emulationFrame = this.emulationFrame.bind(this);
        window.EmulationService = this;

        // FPS
        this.counter = 0;
        setInterval(() => {
            console.log(this.counter);
            this.counter = 0;
        }, 1000);
    }

    installCanvas(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.imageData = this.ctx.getImageData(0, 0, this.WIDTH, this.HEIGHT);
        this.isReady = true;
        this.startEmulation(defaultRoms[0].romData); // Temp
    }

    loadRom(romData) {
        if (!this.isReady) return;
        this.nes = new NES();
        this.nes.loadRom(romData);
    }

    drawScreenSprite() {
        const screenSprite = this.nes.ppu.getScreen();
        this.imageData.data.set(screenSprite)
        this.ctx.putImageData(this.imageData, 0, 0);
    }

    // Emulation
    startEmulation(romData) {
        this.stopEmulation();
        this.loadRom(romData);
        this.emulationFrame();
    }

    pauseEmulation() {
        this.isPaused = true;
    }

    resumeEmulation() {
        this.isPaused = false;
    }

    stopEmulation() {
        // Emulation
        this.nes = null;
        this.isRunning = false;
        this.isPaused = false;
    }

    emulationFrame(timestamp = 0) {
        // this.dt += (timestamp - this.prevTimestamp);
        // this.prevTimestamp = timestamp;

        // let counter = this.MAX_FRAMES;
        // while (counter > 0 && this.dt >= this.FRAME_DURATION) {
        //     this.dt -= this.FRAME_DURATION;
            this.nesFrame();
        //     counter--;
        // }

        this.drawScreenSprite();

        if (!this.isPaused) requestAnimationFrame(this.emulationFrame);
    }

    nesFrame() {
        this.counter++;

        // TODO: Include this on NES
        const currFrame = this.nes.frameCounter;
        while (this.nes.frameCounter === currFrame) {
            this.nes.clock();
        }
    };
}

export default EmulationService;

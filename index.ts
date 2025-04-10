export class FPSMeter {
  private frames: number[] = [];

  private lastFrameTime: number = 0;

  private totalFrames: number;

  private lowFPSCallback: ((fps: number) => void) | null = null;

  constructor(totalFrames: number = 60) {
    this.totalFrames = totalFrames;
    setTimeout(() => {
      this.start();
    }, 5);
  }

  private measure(timestamp: number) {
    console.clear();
    // Calculate FPS
    const currentFPS = 1000 / (timestamp - this.lastFrameTime);
    this.lastFrameTime = timestamp;

    // Add current FPS to the frames array
    this.frames.push(currentFPS);
    console.log('frames', this.frames.length);
    // Keep only the last N frames
    if (this.frames.length > this.totalFrames) {
      this.frames.shift();
    }

    // Calculate average FPS
    const averageFPS = this.getAverageFPS();
    console.log('averageFPS', averageFPS);
    // Check if FPS is below threshold and call the callback if set
    if (averageFPS && averageFPS < 45 && this.lowFPSCallback) {
      this.lowFPSCallback(averageFPS);
    }

    // Continue measuring
    requestAnimationFrame(this.measure.bind(this));
  }

  public start() {
    requestAnimationFrame(this.measure.bind(this));
  }

  public getAverageFPS(): number | null {
    console.log('getAverageFPS', this.frames.length, this.totalFrames);
    if (this.frames.length < this.totalFrames) return null;
    const sum = this.frames.reduce((acc, val) => acc + val, 0);
    return sum / this.frames.length;
  }

  public setLowFPSCallback(callback: (fps: number) => void) {
    this.lowFPSCallback = callback;
  }
}

export default FPSMeter;

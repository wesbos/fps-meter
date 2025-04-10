# FPS Meter

A simple FPS meter that measures average FPS and runs a callback when it dips below a certain level.

Useful for turning off expensive animations or compositing that cause FPS to lag.

## Installation

```bash
npm install @wesbos/fps-meter
```

## Usage

```typescript
import FPSMeter from "@wesbos/fps-meter";

// Create a new FPS meter instance
const fpsMeter = new FPSMeter();

// Optional: Set a callback for when FPS drops below 45
fpsMeter.setLowFPSCallback((fps) => {
  console.log(`Low FPS detected: ${fps}`);
});

// The meter will automatically start measuring FPS
// You can also manually start it with:
fpsMeter.start();

// Get the current average FPS
const averageFPS = fpsMeter.getAverageFPS();
```

## API

### Constructor

```typescript
new FPSMeter(totalFrames?: number)
```

- `totalFrames`: Number of frames to average (default: 60)

### Methods

- `start()`: Start measuring FPS
- `getAverageFPS()`: Returns the current average FPS or null if not enough frames have been measured
- `setLowFPSCallback(callback: (fps: number) => void)`: Set a callback to be called when FPS drops below 45

## License

MIT

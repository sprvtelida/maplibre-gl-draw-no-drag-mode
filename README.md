# @telida/maplibre-gl-draw-no-drag-mode

Custom no-drag modes for `@telida/maplibre-gl-draw` that disable feature dragging.

## Installation

```sh
npm install @telida/maplibre-gl-draw-no-drag-mode
```

## Example usage:
```
import {default as NoDragModes} from '@telida/maplibre-gl-draw-no-drag-mode';

private draw: MapLibreDraw;

constructor() {
  this.draw = new MapLibreDraw({
          modes: {
            simple_select: NoDragModes.simple_select,
            direct_select: NoDragModes.direct_select,
          },
          userProperties: true,
          displayControlsDefault: true,
        });
}
```

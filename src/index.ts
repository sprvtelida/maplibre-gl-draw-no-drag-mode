import MapLibreDraw from "@telida/maplibre-gl-draw";

class NoDragDirectMode extends (MapLibreDraw.modes.direct_select as any) {
    onDrag(state: any, e: any) {
        console.log('CustomDirectSelect.onDrag', state, e);

        if (state.canDragMove !== true) return;
        state.dragMoving = true;
        e.originalEvent.stopPropagation();

        const delta = {
            lng: e.lngLat.lng - state.dragMoveLocation.lng,
            lat: e.lngLat.lat - state.dragMoveLocation.lat
        };
        if (state.selectedCoordPaths.length > 0) this.dragVertex(state, e, delta);
        // else this.dragFeature(state, e, delta);

        state.dragMoveLocation = e.lngLat;
    }
}

export default NoDragDirectMode;
const no_drag_direct_select: any = require('@telida/maplibre-gl-draw/src/modes/direct_select').default;
const no_drag_simple_select: any = require('@telida/maplibre-gl-draw/src/modes/simple_select').default;

no_drag_direct_select.onDrag = function (state: any, e: any) {
    if (state.canDragMove !== true) return;
    state.dragMoving = true;
    e.originalEvent.stopPropagation();

    const delta = {
        lng: e.lngLat.lng - state.dragMoveLocation.lng,
        lat: e.lngLat.lat - state.dragMoveLocation.lat
    };
    if (state.selectedCoordPaths.length > 0) this.dragVertex(state, e, delta);
    // else this.dragFeature(state, e, delta); // Commenting out dragFeature to disable feature dragging

    state.dragMoveLocation = e.lngLat;
};

no_drag_simple_select.onDrag = function (state: any, e: any) {
    // Do nothing
};

export {
    no_drag_direct_select,
    no_drag_simple_select
};
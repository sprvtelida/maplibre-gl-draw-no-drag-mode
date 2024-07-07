const direct_select: any = require('@telida/maplibre-gl-draw/src/modes/direct_select').default;
const simple_select: any = require('@telida/maplibre-gl-draw/src/modes/simple_select').default;

// Modify the onDrag method of direct_select mode
direct_select.onDrag = function (state: any, e: any) {
    console.log('CustomDirectSelect.onDrag', state, e);

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

// Modify the onClick method of simple_select mode
simple_select.onDrag = function (state: any, e: any) {
    console.log('CustomSimpleSelect.onDrag', state, e);

    // Your custom logic here

    // Call the original method if needed
    // originalSimpleSelectOnClick.call(this, state, e);
};

export default {
    direct_select,
    simple_select
};
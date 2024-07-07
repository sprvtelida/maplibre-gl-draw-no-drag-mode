declare module '@telida/maplibre-gl-draw/src/modes/direct_select' {
    interface DirectSelectMode {
        onDrag(state: any, e: any): void;
        dragVertex(state: any, e: any, delta: any): void;
    }

    const direct_select: DirectSelectMode;
    export default direct_select;
}

declare module '@telida/maplibre-gl-draw/src/modes/simple_select' {
    interface SimpleSelectMode {
        onDrag(state: any, e: any): void;
    }

    const simple_select: SimpleSelectMode;
    export default simple_select;
}
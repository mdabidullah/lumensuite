export declare enum ConnectorEndpoint {
    Front = "Front",
    Rear = "Rear"
}
export declare enum PointStyle {
    Arrow = "Arrow",
    Circle = "Circle",
    Diamond = "Diamond",
    None = "None",
    Triangle = "Triangle"
}
export declare const PointStyleMap: Record<PointStyle, "Arrow" | "Circle" | "Diamond" | "None" | "Triangle">;
export declare const DEFAULT_FRONT_END_POINT_STYLE = PointStyle.None;
export declare const DEFAULT_REAR_END_POINT_STYLE = PointStyle.Arrow;
export declare const CONNECTOR_LABEL_MAX_WIDTH = 280;
export declare enum ConnectorLabelOffsetAnchor {
    Bottom = "bottom",
    Center = "center",
    Top = "top"
}
export declare enum ConnectorMode {
    Straight = 0,
    Orthogonal = 1,
    Curve = 2
}
//# sourceMappingURL=connector.d.ts.map
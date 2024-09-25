export type EdgelessTool = LumenSuite.EdgelessToolType;

declare global {
  namespace LumenSuite {
    type EdgelessModelKeys = EdgelessBlockModelKeyType | SurfaceModelKeyType;

    interface EdgelessToolControllerMap {}
    type EdgelessToolControllerKeyType = keyof EdgelessToolMap;
    type EdgelessToolControllerType =
      EdgelessToolMap[EdgelessToolControllerKeyType];
    type EdgelessToolType = EdgelessToolControllerType['tool'];
  }
}

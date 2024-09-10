import { RoughCanvas } from './canvas.js';
import { RoughGenerator } from './generator.js';
import { RoughSVG } from './svg.js';
export default {
    canvas(canvas, config) {
        return new RoughCanvas(canvas, config);
    },
    svg(svg, config) {
        return new RoughSVG(svg, config);
    },
    generator(config) {
        return new RoughGenerator(config);
    },
    newSeed() {
        return RoughGenerator.newSeed();
    },
};
//# sourceMappingURL=rough.js.map
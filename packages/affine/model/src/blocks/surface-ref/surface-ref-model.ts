import { defineBlockSchema, type SchemaToModel } from '@lumensuite/store';

type SurfaceRefProps = {
  reference: string;
  caption: string;
  refFlavour: string;
};

export const SurfaceRefBlockSchema = defineBlockSchema({
  flavour: 'affine:surface-ref',
  props: () =>
    ({
      reference: '',
      caption: '',
    }) as SurfaceRefProps,
  metadata: {
    version: 1,
    role: 'content',
    parent: ['affine:note', 'affine:paragraph', 'affine:list'],
  },
});

export type SurfaceRefBlockModel = SchemaToModel<typeof SurfaceRefBlockSchema>;

declare global {
  namespace LumenSuite {
    interface BlockModels {
      'affine:surface-ref': SurfaceRefBlockModel;
    }
  }
}

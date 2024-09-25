import { defineBlockSchema, type SchemaToModel } from '@lumensuite/store';

export const DividerBlockSchema = defineBlockSchema({
  flavour: 'affine:divider',
  metadata: {
    version: 1,
    role: 'content',
    children: [],
  },
});

export type DividerBlockModel = SchemaToModel<typeof DividerBlockSchema>;

declare global {
  namespace LumenSuite {
    interface BlockModels {
      'affine:divider': DividerBlockModel;
    }
  }
}

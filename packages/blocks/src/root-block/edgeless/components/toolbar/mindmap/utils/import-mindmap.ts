import type { Bound } from '@lumensuite/global/utils';

import { openFileOrFiles } from '@lumensuite/affine-shared/utils';
import { ErrorCode, LumenSuiteError } from '@lumensuite/global/exceptions';
import converter from 'xml-js';

type MindMapNode = {
  children: MindMapNode[];
  text: string;
  xywh?: string;
  title?: string;
  layoutType?: 'left' | 'right';
};

export async function importMindmap(bound: Bound): Promise<MindMapNode> {
  const file = await openFileOrFiles({
    acceptType: 'MindMap',
  });

  if (!file) {
    throw new LumenSuiteError(ErrorCode.UserAbortError, 'Aborted by user');
  }

  let result;

  if (file.name.endsWith('.mm')) {
    result = await parseMmFile(file);
  } else if (file.name.endsWith('.opml') || file.name.endsWith('.xml')) {
    result = await parseOPMLFile(file);
  } else {
    throw new LumenSuiteError(ErrorCode.ParsingError, 'Unsupported file type');
  }

  if (result) {
    result.xywh = bound.serialize();
  }

  return result;
}

function readAsText(file: File) {
  return file.text();
}

type RawMmNode = {
  node: RawMmNode[];
  _attributes: {
    POSITION: 'left' | 'right';
    TEXT: string;
  };
};

async function parseMmFile(file: File): Promise<MindMapNode> {
  const content = await readAsText(file);

  try {
    const { map } = JSON.parse(converter.xml2json(content, { compact: true }));
    const traverse = (node: RawMmNode): MindMapNode | null => {
      if (!node?._attributes?.TEXT && !node.node) {
        return null;
      }

      return node._attributes.POSITION
        ? {
            layoutType: node._attributes.POSITION,
            text: node._attributes?.TEXT ?? 'MINDMAP',
            children:
              (node.node
                ?.map(traverse)
                .filter(node => node) as MindMapNode[]) ?? [],
          }
        : {
            text: node._attributes?.TEXT ?? 'MINDMAP',
            children:
              (node.node
                ?.map(traverse)
                .filter(node => node) as MindMapNode[]) ?? [],
          };
    };

    const result = traverse(map.node);

    if (!result) {
      throw new LumenSuiteError(
        ErrorCode.ParsingError,
        'Failed to parse mm file'
      );
    }

    return result;
  } catch (e) {
    console.error(e);
    throw new LumenSuiteError(
      ErrorCode.ParsingError,
      'Failed to parse mm file'
    );
  }
}

type RawOPMLNode = {
  _attributes: {
    text: string;
  };
  outline: RawOPMLNode[];
};

async function parseOPMLFile(file: File): Promise<MindMapNode> {
  const content = await readAsText(file);

  try {
    const parsed = JSON.parse(converter.xml2json(content, { compact: true }));
    const opml = parsed.opml;

    const traverse = (node: RawOPMLNode): MindMapNode | null => {
      if (!node?._attributes?.text && !node.outline) {
        return null;
      }

      return {
        text: node._attributes?.text ?? 'MINDMAP',
        children: node.outline
          ? (Array.isArray(node.outline)
              ? (node.outline.map(traverse) as MindMapNode[])
              : ([traverse(node.outline)] as MindMapNode[])
            ).filter(node => node)
          : [],
      };
    };

    const result = traverse(opml.body.outline);

    if (!result) {
      throw new LumenSuiteError(
        ErrorCode.ParsingError,
        'Failed to parse OPML file'
      );
    }

    return result;
  } catch (e) {
    console.error(e);
    throw new LumenSuiteError(
      ErrorCode.ParsingError,
      'Failed to parse OPML file'
    );
  }
}

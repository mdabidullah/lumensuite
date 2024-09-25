// This file is used to test lumensuite can run in a web worker. SEE: tests/worker.spec.ts

import '@lumensuite/store';
// import '@lumensuite/block-std'; // seems not working
import '@lumensuite/blocks/schemas';

globalThis.onmessage = event => {
  const { data } = event;
  if (data === 'ping') {
    postMessage('pong');
  }
};

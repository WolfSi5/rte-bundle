/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@udecode/plate-test-utils';
import { initialDataExcalidraw } from './initialDataExcalidraw';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
jsx;

export const excalidrawValue: any = (
  <fragment>
    <hh2>🎨 Excalidraw</hh2>
    <hp>Embed Excalidraw within your Slate document!</hp>
    <hexcalidraw {...initialDataExcalidraw}>
      <htext />
    </hexcalidraw>
    <hp>Try it out!</hp>
  </fragment>
);

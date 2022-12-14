/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@udecode/plate-test-utils';
import { createList } from '../list/createList';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
jsx;

export const softBreakValue: any = (
  <fragment>
    <hh1>๐ฆ Soft Break โงโ</hh1>
    <hp>You can define a set of rules with:</hp>
    {createList([
      'hotkey โ e.g. press โงโ anywhere to insert a soft break ๐',
      'query โ filter the block types where the rule applies, e.g. pressing โ will insert a soft break only inside block quotes and code blocks.',
    ])}
    <hblockquote>Try here โ</hblockquote>
    <hcodeblock>
      <hcodeline>And โ here.</hcodeline>
    </hcodeblock>
  </fragment>
);

import { Meta, StoryFn } from '@storybook/react';
import TagList from '@/components/organisms/tag-list/TagList';
import {
  NEXT_JS,
  REACT,
  SEO,
  TYPE_SCRIPT,
} from '@/domains/values/articles/MetaDataTag';

export default {
  title: 'organisms/TagList',
  component: TagList,
} as Meta<typeof TagList>;

const Template: StoryFn<typeof TagList> = (args) => <TagList {...args} />;

export const Single = Template.bind({});
Single.args = { tagIds: [NEXT_JS] };

export const Multiple = Template.bind({});
Multiple.args = { tagIds: [NEXT_JS, TYPE_SCRIPT, SEO, REACT] };

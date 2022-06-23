import { ComponentMeta, ComponentStory } from '@storybook/react';
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
} as ComponentMeta<typeof TagList>;

const Template: ComponentStory<typeof TagList> = (args) => (
  <TagList {...args} />
);

export const Single = Template.bind({});
Single.args = { tagIds: [NEXT_JS] };

export const Multiple = Template.bind({});
Multiple.args = { tagIds: [NEXT_JS, TYPE_SCRIPT, SEO, REACT] };

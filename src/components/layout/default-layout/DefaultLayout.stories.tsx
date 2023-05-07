import { Meta, StoryFn } from '@storybook/react';
import DefaultLayout from '@/components/layout/default-layout/DefaultLayout';

export default {
  title: 'layout/DefaultLayout',
  component: DefaultLayout,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500,
    },
  },
} as Meta<typeof DefaultLayout>;

const Template: StoryFn<typeof DefaultLayout> = (args) => (
  <DefaultLayout {...args} />
);

export const SiteNameLink = Template.bind({});
SiteNameLink.args = {
  siteNameElement: 'a',
  children: 'ここにコンテンツが入ります',
};

export const SiteNameHeading = Template.bind({});
SiteNameHeading.args = {
  siteNameElement: 'h1',
  children: 'ここにコンテンツが入ります',
};

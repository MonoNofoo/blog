import { ComponentMeta } from '@storybook/react';
import Profile from '@/components/organisms/profile/Profile';

export default {
  title: 'organisms/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

export const Default = () => <Profile />;

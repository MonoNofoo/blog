import { ComponentMeta } from '@storybook/react';
import Accordion from '@/components/atom/accordion/Accordion';

export default {
  title: 'atom/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const Default = () => <Accordion />;

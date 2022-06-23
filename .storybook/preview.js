import 'sanitize.css';
import '@/styles/lib/prism.css';
import '@/styles/base.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: '#1a1d30' }],
  },
};

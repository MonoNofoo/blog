import { render, screen } from '@testing-library/react';
import TagList from '@/components/organisms/tag-list/TagList';

describe('TagList について', () => {
  describe('tagId の挙動について', () => {
    const tagIds = [
      {
        id: 'TYPE_SCRIPT',
        urlValue: 'type-script',
        label: 'TypeScript',
      },
      {
        id: 'NEXT_JS',
        urlValue: 'next-js',
        label: 'Next.js',
      },
      {
        id: 'REACT',
        urlValue: 'react',
        label: 'React',
      },
      {
        id: 'SEO',
        urlValue: 'seo',
        label: 'SEO',
      },
    ] as const;

    it.each(tagIds)(
      'tagId に $id が渡されたとき適切なリンクが生成される',
      ({ id, urlValue, label }) => {
        render(<TagList tagIds={[id]} />);
        const target = screen.getByRole('link', { name: label });

        expect(target).toHaveAttribute('href', `/tags/${urlValue}`);
      },
    );
  });
});

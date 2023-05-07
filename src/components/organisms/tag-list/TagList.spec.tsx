import { render, screen } from '@testing-library/react';
import TagList from '@/components/organisms/tag-list/TagList';

describe('TagList について', () => {
  it('tagId に応じたリンクが表示される', () => {
    render(<TagList tagIds={['TYPE_SCRIPT']} />);
    const target = screen.getByRole('link', { name: 'TypeScript' });

    expect(target).toHaveAttribute('href', '/tags/type-script');
  });
});

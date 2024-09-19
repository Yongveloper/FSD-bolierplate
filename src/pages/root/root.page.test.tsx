import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { RootPage } from './root.page';

describe('<RootPage />', () => {
  it('루트 페이지가 정상적으로 렌더링 되어야 함.', () => {
    render(<RootPage />);

    expect(screen.getByText('첫 페이지입니다.')).toBeInTheDocument();
  });
});

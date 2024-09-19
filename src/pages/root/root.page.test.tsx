import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { RootPage } from './root.page';

describe('RootPage', () => {
  it('renders the correct text', () => {
    render(<RootPage />);

    expect(screen.getByText('첫 페이지입니다.')).toBeInTheDocument();
  });
});

import { render } from '@testing-library/react';

import ReusableComponents from './reusable-components';

describe('ReusableComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReusableComponents />);
    expect(baseElement).toBeTruthy();
  });
});

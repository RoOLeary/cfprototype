import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('Shows the first H1 (before "data" loaded) being "Loading..."', () => {
    
    render(<Home />)
    const heading = screen.getByRole('heading', {
      name: 'Loading...',
    })

    expect(heading).toBeDefined()
  })
});
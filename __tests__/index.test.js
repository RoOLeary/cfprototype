import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import useSWRInfinite from "swr/infinite";
import '@testing-library/jest-dom';

describe('Home', () => {
  it('The first H1 should be the "Loading..." message', async () => {
    
    render(<Home />)
    const heading = screen.getByRole('heading', {
      name: 'Loading...',
    })

    expect(heading).toBeDefined()
  })
});
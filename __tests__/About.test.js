import { render, screen } from '@testing-library/react'
import About from '../pages/about'
import '@testing-library/jest-dom'

describe('About', () => {
  it('renders a heading', () => {
    render(<About />)
    const content = 'about';
    const headline = screen.getByRole('headline', {
        name: /welcome to next\.js!/i,
    })

    expect(headline).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
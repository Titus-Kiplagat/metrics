import Chart from '../components/Chart';

const { screen, render } = require('@testing-library/react');

describe('Chart', () => {
  const title1 = 'Title 1';
  const title2 = 'Title 2';
  const count = '10';

  it('should render a chart with given title1, title2 and count', () => {
    render(<Chart title1={title1} title2={title2} count={count} />);

    expect(screen.getByText(count.toString())).toBeInTheDocument();
  });

  it('should render a chart with given title1, title2 and count', () => {
    render(<Chart title1={title1} title2={title2} count={count} />);

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'chart');
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});

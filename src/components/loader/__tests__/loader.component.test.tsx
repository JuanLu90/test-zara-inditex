// DEPENDENCIES
import { render, screen } from '../../../utils/test';

// COMPONENTS
import Loader from '../loader.component';

describe('Loader component', () => {
  it('should render', () => {
    render(<Loader />);

    expect(screen.getByTestId('loader-component')).toBeTruthy();
  });
});

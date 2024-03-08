// DEPENDENCIES
import { render, screen } from "../../../utils/test";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import Filter from "../filter.component";

describe("Filter component", () => {
  it("should render", () => {
    const props = {
      handleChange: jest.fn(),
      filterInfo: {
        search: "",
      },
    };

    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Filter {...props} />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByTestId("filter-component")).toBeTruthy();
  });
});

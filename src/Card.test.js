import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";


// Smoke Test
it("renders Card component without crashing", () => {
  render(<Card />);
});


// Snapshot Test
it("matches snapshot", () => {
    const { container } = render(
      <Card
        caption="Photo by Richard Pasquarella on Unsplash"
        src="https://source.unsplash.com/random"
        currNum={1}
        totalNum={3}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

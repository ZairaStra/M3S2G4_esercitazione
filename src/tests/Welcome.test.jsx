import Welcome from "../components/Welcome";
import { render, screen } from "@testing-library/react";

//suite montaggio WelcomePage
describe("looks if WelcomePage mounts", () => {
  it("renders the WelcomePage component", () => {
    render(<Welcome />);

    const heading = screen.getByText(/Benvenuti in EpiBooks!/);

    screen.debug(heading); // prints out the jsx in the App component unto the command line

    expect(heading).toBeInTheDocument();
  });
});

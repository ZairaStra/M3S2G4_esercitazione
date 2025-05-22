import CommentArea from "../components/CommentArea";
import { render, screen } from "@testing-library/react";

//suite montaggio CommentArea
describe("looks if CommentArea renders correctly", () => {
  it("renders the CommentArea component", () => {
    render(<CommentArea />);

    const commentArea = screen.getByTestId(/commentArea/);

    screen.debug(commentArea); // prints out the jsx in the App component unto the command line

    expect(commentArea).toBeInTheDocument();
  });
});

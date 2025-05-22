import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";

describe("looks if cards number is the same of the fantasy.json's books", () => {
  it("renders the correct number of cards", () => {
    render(<BookList books={fantasy} />);
    const cards = screen.getAllByTestId("singleBook");
    expect(cards).toHaveLength(150);
  });
});

/*import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import { expect } from "vitest";
import fantasy from "../data/fantasy.json";

describe("BookList", () => {
  it("renders as many Bootstrap cards as there are books", () => {
    const { container } = render(<BookList books={fantasy} />);

    const cards = container.querySelectorAll(".card");

    expect(cards.length).toBe(fantasy.length); //  CONFRONTO
  });
});
*/

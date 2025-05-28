import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Nos Chantiers title", () => {
  render(<App />); // Supprime BrowserRouter ici

  const headerElement = screen.getByText(/Nos Chantiers/i);
  expect(headerElement).toBeInTheDocument();
});

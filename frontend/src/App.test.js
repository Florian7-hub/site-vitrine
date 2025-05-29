import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import Accueil from "./pages/Accueil";
import Realisation from "./pages/Realisation";

test("renders Les réalisations title", () => {
  render(
      <App />
  );

  const headerElement = screen.getByText(/Les réalisations/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders réalisations list with links", () => {
  render(
    <MemoryRouter>
      <Accueil />
    </MemoryRouter>
  );

  const links = screen.getAllByRole("link");
  expect(links.length).toBeGreaterThan(0);
});

test("renders realisation page correctly", () => {
  render(
    <MemoryRouter>
      <Realisation />
    </MemoryRouter>
  );

  const titleElements = screen.getAllByText(/Réalisation/i);
  expect(titleElements.length).toBeGreaterThan(0);

  const descriptionElement = screen.getByText(/Nous travaillons activement/i);
  expect(descriptionElement).toBeInTheDocument();
});

test("zoom image on click", () => {
  render(
    <MemoryRouter>
      <Realisation />
    </MemoryRouter>
  );

  const galleryImage = screen.getAllByRole("img")[1]; // Sélectionne une image
  fireEvent.click(galleryImage); // Simule un clic

  const zoomedImage = screen.getByRole("img", { name: /Zoomed/i });
  expect(zoomedImage).toBeInTheDocument();
});
import { screen, waitFor } from "@testing-library/react";
import { Home } from "../Home";
import { renderWithProviders } from "utils/utils-for-test";

const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
];

describe("Home Component", () => {
  renderWithProviders(<Home />, { preloadedState: { product: { products } } });
  it("initially shows data from state", async () => {
    await waitFor(() => expect(screen.getByText("iPhone 9")));
  });
});

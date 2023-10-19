import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router";
import Login from "../Login";

describe("Button click", () => {
  it("submits username and password success", async () => {
    const username = "kminchelle";
    const password = "0lelplR";
    const router = createMemoryRouter(
      [
        {
          path: "/",
          element: <></>,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
      {
        initialEntries: ["/login"],
        initialIndex: 0,
      }
    );
    render(<RouterProvider router={router} />);
    expect(router.state.location.pathname).toBe("/login");

    await userEvent.type(screen.getByLabelText(/user name/i), username);

    await userEvent.type(screen.getByLabelText(/password/i), password);

    await userEvent.click(screen.getByRole("button"));

    await waitFor(() => expect(router.state.location.pathname).toBe("/"));
  });
});

import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { vi, expect, describe, it } from "vitest";
import RecentAds from "../../pages/RecentAds";
import { useLoaderData } from "react-router-dom";

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useLoaderData: vi.fn(),
}));

describe("RecentAds", () => {
  it("affiche correctement les annonces après chargement", async () => {
    const mockAds = [
      {
        id: 1,
        imgUrl: "",
        price: 12,
        title: "Boat to sell",
        slug: "boat-to-sell",
        description: "My boat is beautiful",
        owner: { email: "boatseller@gmail.com" },
        createdAt: "2023-07-10",
      },
    ];

    (useLoaderData as vi.Mock).mockReturnValue(mockAds);

    render(<RecentAds />);

    await waitFor(() => {
      expect(screen.getByText("Annonces récentes")).toBeInTheDocument();
      expect(screen.getByText("Boat to sell")).toBeInTheDocument();
    });
  });
});

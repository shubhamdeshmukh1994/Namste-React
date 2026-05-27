import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import MOCK_DATA from "../mock/RestListMock.json"
import Body from "../Body";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

describe("body component test cases for search function", () => {

    it("should search rest list for pizza input", async () => {

        await act(async () => {

            render(
                <MemoryRouter
                    future={{
                        v7_startTransition: true,
                        v7_relativeSplatPath: true,
                    }}
                >
                    <Body />
                </MemoryRouter>
            );

        });

        const cardsBeforeSearch = screen.getAllByTestId("restCard");

        expect(cardsBeforeSearch.length).toBe(8);

        const searchBtn = await screen.findByRole("button", {
            name: /search/i
        });
        const searchInput = screen.getByTestId("searchInput");

        fireEvent.change(searchInput, {target:{value:"pizza"}});

        fireEvent.click(searchBtn);

        const cardsAfterSearch = screen.getAllByTestId("restCard")

        expect(cardsAfterSearch.length).toBe(2);

        expect(searchBtn).toBeInTheDocument();

    });

});

describe("body component test for top top rated rest", () => {

    it("should search top rated restaurant", async () => {

        await act(async () => {
            render(
                <MemoryRouter
                    future={{
                        v7_startTransition: true,
                        v7_relativeSplatPath: true,
                    }}
                >
                    <Body />
                </MemoryRouter>
            );

        });

        const cardsBeforeTopRated = screen.getAllByTestId("restCard");

        expect(cardsBeforeTopRated.length).toBe(8);

        const searchBtn = await screen.findByRole("button", {
            name: /Top Rated Restaurants/i
        });

        fireEvent.click(searchBtn);

        const cardsAfterFilter = screen.getAllByTestId("restCard")

        expect(cardsAfterFilter.length).toBe(2);

        expect(searchBtn).toBeInTheDocument();

    });

});
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mock/resListMock.json"


//group multiple test cases in in describe for grouping
// test = it (better reading);

describe("RestaurantCard us page test cases",()=>{
    it("should test commponant is rendered",()=>{
        render(<RestaurantCard resList={MOCK_DATA} />);
        
        const name = screen.getByText("Pizza Hut");

        expect(name).toBeInTheDocument();
    })
})




import { render, screen } from "@testing-library/react";
import ContactUs from "../contact/ContactUs";
import "@testing-library/jest-dom";


//group multiple test cases in in describe for grouping
// test = it (better reading);

describe("contact us page test cases",()=>{

    // beforeAll(()=>{
    //     console.log("beforeAll")
    // })

    // beforeEach(()=>{
    //     console.log("beforeEach")
    // })

    // afterAll(()=>{
    //     console.log("afterAll")
    // })

    // afterEach(()=>{
    //     console.log("afterEach")
    // })


    it("should test commponant is rendered",()=>{
        render(<ContactUs />);
        
        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    })

    it("should test button inside contactUs commponat",()=>{
        render(<ContactUs />);
        
        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    })

    test("should test button inside contactUs commponat",()=>{
        render(<ContactUs />);
        
        const button = screen.getByText("Submit")

        expect(button).toBeInTheDocument();
    })

    test("should test input name inside contactUs commponat",()=>{
        render(<ContactUs />);
        
        const inputName = screen.getByPlaceholderText("name")

        expect(inputName).toBeInTheDocument();
    });

    test("should load 2 input boxex inside contactUs commponat",()=>{
        render(<ContactUs />);
        
        const inputBoxes = screen.getAllByRole("textbox")
        //assertion
        expect(inputBoxes.length).toBe(2);
    });
})




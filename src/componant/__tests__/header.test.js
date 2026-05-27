import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore/appStore";
import { BrowserRouter } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";


//group multiple test cases in in describe for grouping
// test = it (better reading);

describe("Header us page test cases",()=>{
    it("should change logIn button to logOut on click header commponant",()=>{
        render(
            <MemoryRouter future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </MemoryRouter>
        );
        
        const logInButton = screen.getByRole("button", {name:"LogIn"});
        fireEvent.click(logInButton)

        const logOutButton = screen.getByRole("button", {name:"LogOut"});
        fireEvent.click(logOutButton)
    });
    it("should render header commponant",()=>{
        render(
            <MemoryRouter future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </MemoryRouter>
        );
        
        const loginButton = screen.getByRole("button", {name:"LogIn"});

        expect(loginButton).toBeInTheDocument();
    });

     it("should render header commponant with cart items",()=>{
        render(
            <MemoryRouter future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </MemoryRouter>
        );
        
        const loginButton = screen.getByText("Cart - (0 items)");

        expect(loginButton).toBeInTheDocument();
    })

    it("should render header commponant with cart items",()=>{
        render(
            <MemoryRouter future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </MemoryRouter>
        );
        
        const loginButton = screen.getByText(/Cart/);

        expect(loginButton).toBeInTheDocument();
    })


  
})



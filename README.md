#namste-react

#Parcel
-Dev build
-local server
-HMR - hot module Replacement
-file watching algorithum  - written in c++
-caching - faster build
- image optimization
- minification of file
- bundling
- compressing
- consistant hashing
- code scripting
- difrrential Bundling - support older browser
- tree shaking - remove unused code
- Dignostic
- error handing
- HTTPs
- diffrent build for production and dev build


//**
// Header
//     -logo
//     -nav items
//     -search bar
//     -cart
// Body
//     -sidebar
//         -category
//         -filters
//     -main section
//         -product list
//             -product item
//                 -image
//                 -name
//                 -price
//                 -rating
//                 -add to cart button
// Footer
//     -links
//     -contact info


# Redux tool Kit
- Install @reduxjs/toolkit and react redux
- build our store
- connect our to our app(provider is getting used form react-redux )
- slice (cartSlice)
- dispact action
- selector

react redux(acting bridge betn our store and our app )

# Types of testing for developer
    developers 
    - Unit testing - test our commponant in isolation than other, testing small unit(commonant)
    - Integration Testing - the integretion of componants how the communicate and colabration (developing flow writing code to create flow testing)
    for tester
    - End to end testing (e2e) - we will test app from start to end, how user will flow into our app to check application flow

# Setup up Testing in our app
- install React testing library
- installed jest 
- installed babel dependancy
- configure babel
- configure parcel config file to disable default babel transpilation
- jest configuration
- install jsdom library
- install @babel/preset-react package
- include babel.config for ['@babel/preset-react', {runtime: "automatic"}]
- npm i -D @testing-library/jest-dom
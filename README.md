# CodaPayments Assignment

This project involves building a small Vue.js web application that displays products from a given JSON file in /api/mocks/products.json. The app must feature a fully functional search bar and a detailed page for each product, showcasing all available information such as name, link, image, price, and description. The JSON file must remain unchanged, and the application should be deliverable as a zip file with clear run instructions in the README.md. The task allows one week for completion, emphasizing quality, organized code, and good user experience over speed.

## Table of Contents
- [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Project Installation](#project-installation)
   - [Running the Project](#running-the-project)
   - [Folder Structure](#folder-structure)
- [Features](#features)
- [Dependencies](#dependencies)
- [Acknowledgements](#acknowledgements)

## Prerequisites
   
   Before you begin, ensure you have met the following requirements:
- **Node.js 18+**: Your system should have Node.js version 18 or higher installed.

## Checking Node Version

To check your current Node.js version:
1. Open your terminal or command prompt.
2. Type the following command and press Enter:

   ```gradle
   node -v
3. Guide to install multiple node versions in mac or windows [link](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)
## Project Installation

After confirming the Node.js requirements, follow these steps to install the project:

1. Navigate to your project root directory where the **package.json** file is there in your terminal.
2. Run the following command to install all necessary dependencies:
    ```gradle
    npm install or yarn install or bun install
3. In case if npm install is facing a problem to install please use below command
    ```gradle
    npm install --force or npm install -f
## Running the Project
1. And following above section after succesfull installation please use below command to run the project
    ```gradle
    npm run dev or yarn dev
2. you will see it will run in your local host with port number please click or copy and open in browser
     ```gradle
      http://localhost:5173/
## Folder Structure
        .
        ├── src                             # Source files
        │   ├── api                         # API related files
        │   │   ├── mocks                   # Mock data for development
        │   ├── components                  # Vue components
        │   │   ├── atoms                   # Small components with a single responsibility
        │   │   │   └── Button.vue          # Example of an atom component
        │   │   ├── molecules               # Medium-sized components composed of atoms
        │   │   │   └── ProductCard.vue     # Product Card for preview of product details like iamge, title
        │   │   │   └── ProductDetail.vue   # Details component for product clicked
        │   │   │   └── SearchBar.vue       # Search bar with input field and icons
        │   │   └── organisms               # Large components composed of molecules and/or atoms
        │   │       └── Headerbar.vue       # App Header contains SearchBar, BrandName & settings
        │   │       └── ProductListing.vue  # Listing all Products from mock
        │   ├── constants                   # Constant values used across the project
        │   │       └── strings.js          # Example of an constant created strings file for text messages
        │   ├── store                       # Vuex store files
        │   │   ├── modules                 # Vuex store modules
        │   │   └── index.js                # Vuex store entry point
        │   ├── types                       # TypeScript type definitions
        │   ├── views                       # Vue views (pages)
        │   │   └── HomeView.vue            # Home/Dashboard of app
        │   │   └── ProductDetail.[id].vue  # Product Details page
        │   └── main.js                     # Entry point of the application
        ├── public                          # Public static assets
        │   ├── img                         # Images
        │   └── index.html                  # HTML template
        ├── node_modules                    # Node.js dependencies (created by npm install)
        ├── package.json                    # Project metadata and dependencies
        ├── package-lock.json               # Exact dependency tree (created by npm install)
        ├── tsconfig.json                   # TypeScript compiler options
        └── README.md                       # Project documentation


## Features
This document provides an overview of the features implemented in the application. Each feature is designed to enhance user experience and functionality.

### a. Home Screen with Search
- **Description**: The home screen serves as the landing page of the application and includes a search bar.
- **Functionality**: Users can search for products directly from the home screen, providing a quick and easy way to find what they need, Implemented **Debounce** to ensure not on all clicks the logic runs

### b. Listing of Products
- **Description**: A comprehensive list of products available in the application.
- **Functionality**: Users can view all products, with details including name, price, and a brief description.

### c. Product Details Page
- **Description**: A detailed page for each product.
- **Functionality**: Users can click on any product from the listing to view its detailed information, including a longer description, images, and pricing.

### d. Theme Change
- **Description**: An option on the home screen to change the application's theme.
- **Functionality**: Users can toggle between light and dark modes or other thematic changes, enhancing visual comfort and personalization.

### e. Layout Change
- **Description**: A feature on the home screen to change the layout of the product listing.
- **Functionality**: Users can choose different layout options (e.g., grid or list view) for how products are displayed, catering to personal preferences and improving browsing experience.

### f. Mobile Responsive
- **Description**: The application is designed to be fully responsive on mobile devices.
- **Functionality**: Ensures a seamless and consistent user experience across various device sizes, from phones to tablets and desktops.

### g. Test Cases Covered
- **Description**: Comprehensive test coverage for the application.
- **Functionality**: Includes unit, integration ensuring that all features work as expected and maintaining high code quality.

# Dependencies

This application leverages various third-party libraries and frameworks to enhance functionality and performance. One of the key dependencies is Lodash.

## Lodash

- **Usage**: In our application, Lodash provides a utility function called `debounce`. 
- **Functionality**: The `debounce` function is particularly used in the search feature on the home screen. It optimizes the search functionality by limiting the rate at which the search input can fire. This results in a more efficient and user-friendly searching experience, as it minimizes the number of unnecessary calls to the search handler, especially when the user is typing rapidly.
- **Benefits**: Incorporating Lodash's `debounce` method helps improve performance and user experience without the need for additional custom code.

## Acknowledgements

We would like to acknowledge the developers and contributors of Lodash for providing a robust set of tools that make JavaScript coding more efficient and easier to manage.

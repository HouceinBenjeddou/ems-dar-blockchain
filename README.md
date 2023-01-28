
# Employee Management System
>  full MERN stack app
### Author: Houcein Ben Jeddou
### Requested by: Dar Blockchain


## Frontend
Used technologies:
    - Tailwindcss
    - ReactJS
    - JavaScript
    - CSS3
    - HTML5
## Backend
used technologies:
    - Nodejs
    - Express js
    - MongoDB (Mongodb Atlas)
    - Axios


# 1. Setup Backend 

> install the dependecies
    - $ npm init -y
    - $ npm install express cors mongoose dotenv
    - $ npm install -g nodemon
    
Setup folder structure to be like:
[folder structure](https://i.ibb.co/gW3H6TP/capture-20230128115545935.png)

The backend server implementation will be in server.js file
    >In the server file, we’ll create an Express server and connect to our database in MongoDB Atlas
// create the .env file for the mongoDb db

### Database schema

create our database schema using Mongoose
    > create the employee model.js

### create Mongodb cluster
    > create the cluster at official mongoDb website // cluster 
    > 1 establish a connection by providing an end user and you ip address...


### Server API Endpoints
    >add the API endpoint routes so the server
### Testing the server API
    >i used Insomnia 
    here's an example of a POST Request to add an employee
    (https://i.ibb.co/cxBS0L6/capture-20230128121051623.png)
    


# 2. setup the Frontend

1. create a react project in a seperate folder
    > npx create-react-app EMS

2. add the tailwindcss framework

3. add react router to navigate between our files
    > npm install react-router-dom


4. create our components
    > CreateEmployee.jsx
        > this componnet will add new user to our document database
    > EditEmployee.jsx
        > this provide updating the employee informations
    > EmployeeDetails.jsx
        > this show employee details
    > ListEmployee.jsx
        > list all of included employee in the schema
    > Navbar.jsx
    > Home.jsx

5. setup Axios to connect to our backend
    > import axios in every component and provide the POST, update, and get requests 

//Home

[home](https://i.ibb.co/DppbhML/capture-20230128122439471.png)

//Create Employee
[employee form](https://i.ibb.co/6FPXFWC/capture-20230128122600201.png)

//List employees
[list employees](https://i.ibb.co/7XdMXnV/capture-20230128122629781.png)

//for further setup info: please check the readme.md provided on the Frontend folder








# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# 0x01. React intro
## Concepts
For this project, we expect you to look at this concept:
* React
# Resources
* [React Official Website](https://react.dev/)
* [Getting started with React](https://www.taniarascia.com/getting-started-with-react/)
* [React overview](https://react.dev/docs/getting-started.html)
* [create-react-app](https://github.com/facebook/create-react-app)
* [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [What is Babel?](https://babeljs.io/docs/)
* [Enzyme](https://enzymejs.github.io/enzyme/docs/api/shallow.html)

# Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
* How to create a basic Javascript application using React
* How to use the package `create-react-app` to start developing quickly with React
* What JSX is and how to use it
* How to use the React Developer Tools to debug your code
* How to use Enzyme’s Shadow rendering to test your application
* How to use React with Webpack & Babel
# Tasks
## 0. Basic application
Create a basic app named `dashboard` using `create-react-app` in your `task_0` directory
You will need a favicon and the Holberton logo. Download them and add them to the `src/` directory under `dashboard/`

__Holberton Logo__

![image](https://github.com/gillohsylvia/alx-react/assets/104779232/8b98908d-7cc6-4adb-86e9-e53036c183e5)


__Favicon__

![image](https://github.com/gillohsylvia/alx-react/assets/104779232/e1b7bd78-95e8-416d-88f9-6a5109a2afe4)


__Remove the unused files:__
* service-worker
* index.css
* App.test.js

in `task_0/dashboard/src/App.js`, __create a function__ `App` __that returns:__
* a header div with a class named `App-header` containing the Holberton logo and a h1 with the text `School dashboard`
* a body div with a class named `App-body` containing at least one paragraph with the text `Login to access the full dashboard`
* a footer div with a class named `App-footer` containing at least one paragraph with the text `Copyright 2020 - holberton School`

__Modify the App.css to make the project looks like the following screenshot:__

![image](https://github.com/gillohsylvia/alx-react/assets/104779232/aeee822f-48c0-4412-bdb7-7630ee107ee9)


__Requirements:__
* When running, there should not be any lint error in the console

__Repo:__
* GitHub repository: alx-react
* Directory: 0x01-react_intro
* File: task_0/dashboards/src/, task_0/dashboard/src/App.css, task_0/dashboard/src/App.js
   
## 1. Basic Application
__Repo:__
* GitHub repository: alx-react
* Directory: 0x00-react_introduction
* File: task_0/dashboards/src/, task_0/dashboard/src/App.css, task_0/dashboard/src/App.js
  
## 2. Embedding expressions, functions
__Using your code from the previous task, in__ `task_1/dashboard/src/utils.js`:
* Create a function named `getFullYear` that will return the current year
* Create a function named `getFooterCopy`:
  * It accepts one argument `isIndex`(boolean). When true, the function should return `Holberton School`. When false, the function should return `Holberton School main dashboard`
* Modify the footer returned in `task_1/dashboard/src/App.js` to use these two functions

in `task_1/dashboard/src/Notifications.js`, __create a Notifications element__:
* It should import React
* It should export a function
* The function should return a `div` with the class `Notifications`
* The div should contain a paragraph with the text `Here is the list of notifications`
* import the file `Notifications.css`.

in `task_1/dashboard/src/Notifications.css`, __style the Notifications class__:
* Add a border and some padding around the div

__Render the Notifications element:__
* Modify `task_1/dashboard/src/index.js` to render the new element (`Notifications`) in a `div` named `root-notifications`
* Check that you can see the two elements on the browser, and using the React browser extension

__Requirements:__
* When running, there should not be any lint error in the console

__Repo:__
* GitHub repository: alx-react
* Directory: 0x01-react_intro
* File: task_1/dashboard/src/, task_1/dashboard/src/utils.js, task_1/dashboard/src/App.js, task_1/dashboard/src/Notifications.css, task_1/dashboard/src/Notifications.js, task_1/dashboard/src/index.js
  
## 3. Modify the App
__using your code from the previous task, in__ `task_2/dashboard/src/App.js` __under the paragraph that says__ `Login to access the full dashboard`:
* add a label and input for email
* add a label and input for password
* when the user clicks on a label, it should select the corresponding input
*add one button element with the text “OK”

__Repo:__
* GitHub repository: alx-react
* Directory: 0x01-react_intro
* File: task_2/dashboard/src/, task_2/dashboard/src/App.js
  
## 4. Modify the Notifications
in `task_2/dashboard/src/utils.js`:
* Create a function named `getLatestNotification` that returns the following string: `<strong>Urgent requirement</strong> - complete by EOD`

in `task_2/dashboard/src/Notifications.js` __in the Notifications div__:
* add a button element with inline styling (without using the CSS file):
  * show button on right side of notifications box
  * `aria-label` is `Close`
  * when user clicks on the button it logs to the console `Close button has been clicked`
* in the button element add a children `img` element that will import the `close-icon.png` image
* after the paragraph add an unordered list
  * the list has the following items:
    * The first one has a default priority and says `New course available`
    * The second one has a urgent priority and says `New resume available`
    * Add the priority to the first and second items of the list using a `data` attribute
    * The last item correctly displays the content of `getLatestNotification` using `dangerouslySetInnerHTML`

in `task_2/dashboard/src/Notifications.css`:
* style the notification priorities using their data attribute: set the color of default items to blue, and the color of urgent items to red.

__Requirements:__
* When running, there should not be any lint error in the console
* Your app should look like the following screenshot:

![image](https://github.com/gillohsylvia/alx-react/assets/104779232/e194ac7a-c342-4e30-96df-e8e9445aed92)


__Repo:__
* GitHub repository: alx-react
* Directory: 0x01-react_intro
* File: task_2/dashboard/src/, task_2/dashboard/src/utils.js, task_2/dashboard/src/Notifications.js, task_2/dashboard/src/Notifications.css
  
## 5. Create basic tests with four tests
in `task_3/dashboard/src/utils.test.js`:
* Write a test to check that the function `getFullYear` returns the correct year (be careful to not create a time bomb)
* Write a test to check that `getFooterCopy` returns the correct string when the argument is true or false
* Write a test checking the returned string for `getLatestNotification`

__Repo:__
* GitHub repository: alx-react
* Directory: 0x01-react_intro
* File: task_3/dashboard/src/utils.test.js
  
## 6. Install Enzyme
* Install Enzyme with `npm`
* Create a file named `setupTests.js` and configure the adapter for Enzyme

__Repo:__
* GitHub repository: alx-react
* Directory: 0x01-react_intro
* File: task_3/dashboard/src/setupTests.js
    
## 7. Create React tests
in `task_3/dashboard/src/App.test.js` __create four tests:__
* test that App renders without crashing
* verify that App renders a div with the class `App-header`
* verify that App renders a div with the class `App-body`
* verify that App renders a div with the class `App-footer`

in `task_3/dashboard/src/Notifications.test.js` __create three tests__
* test that Notifications renders without crashing
* verify that Notifications renders three list items
* verify that Notifications renders the text `Here is the list of notifications`

__Requirements:__
* When running the test suites, you should see the following result
* You must use shallow rendering to write the React tests
```
Test Suites: 3 passed, 3 total
Tests: 11 passed, 11 total
```
__Repo:__
* GitHub repository: alx-react
* Directory: 0x01-react_intro
* File: task_3/dashboard/src/App.test.js, task_3/dashboard/src/Notifications.test.js
  
## 8. Deploy to a GitHub page
Deploy your application to GitHub Pages using `gh-pages` branch and `create-react-app`

Your application should be working correctly when accessing the GitHub URL.

__Repo:__
* GitHub repository: alx-react
* Directory: 0x01-react_intro
* File: task_4/

## 9. Create a project using Webpack
Without reusing `create-react-app` or the code from the previous exercise, start a brand new npm project
Reusing what you learned during the Webpack module:
* Set up a system to output a `bundle.js` file in a `dist` folder
* Set up a dev server with hot reloading
* Create a `src` folder that will contain your Javascript
* Set up a simple html file in the `dist` folder that will import the bundle file in the `body` tag.

Install and configure the various plugins to support:
* inline source map
* style loader
* css loader
* image webpack loader

__Repo:__
* GitHub repository: alx-react
* Directory: 0x01-react_intro
* File: task_5/dashboard/config/webpack.config.js, task_5/dashboard/dist/index.html, task_5/dashboard/src/index.js
   
## 10. Install Babel
* Install Babel, and in `task_5/dashboard/.babelrc`, add the presets for `preset-env` and `preset-react`
* Add a `babel-loader` to the Webpack configuration so you can support `js` and `jsx` files
* Import the files that you wrote in the previous task. All the Javascript and React code should be within the `src` folder

At this point, running `webpack-dev-server` should correctly execute your code, and you should be able to see the dashboard like in the last task

__Repo:__
* GitHub repository: alx-react
* Directory: 0x01-react_intro
* File: task_5/dashboard/.babelrc, task_5/dashboard/config/webpack.config.js
  
## 11. Reorganize the files
Let’s reorganize the files in our project:
* Every file related to the App, should be within a `App` folder
* Every file related to the Notifications, should be within a `Notifications` folder
* Every file related to the utils functions, should be within a `utils` folder
* Every asset file should be within the `assets` folder
* Set up the `favicon.ico` in the `dist` folder
* Webpack config file should be within a `config` folder if it isn’t already

__Repo:__
* GitHub repository: alx-react
* Directory: 0x01-react_intro
* File: task_5/dashboard/src/App/App.css, task_5/dashboard/src/App/App.js, task_5/dashboard/src/App/App.test.js, task_5/dashboard/src/Notifications/Notifications.css, task_5/dashboard/src/Notifications/Notifications.js, task_5/dashboard/src/Notifications/Notifications.test.js, task_5/dashboard/src/utils/utils.js, task_5/dashboard/src/utils/utils.test.js, task_5/dashboard/config/webpack.config.js, task_5/dashboard/src/assets/holberton-logo.jpg, task_5/dashboard/dist/favicon.ico
   
## 12. Testing
Install Jest and Enzyme to run your test suites

move the `setupTests.js` file to `config` folder if you have not already

__Requirements:__
* Your `package.json` should have the two following scripts:

```
    "start": "webpack-dev-server --mode development --config config/webpack.config.js",
    "test": "jest"
```
* Running the first script should start your dev server and build without any error
* Running the second script should start your test suites and pass for each test

__Repo:__
* GitHub repository: alx-react
* Directory: 0x01-react_intro
* File: task_5/dashboard/config/setupTests.js, task_5/dashboard/package.json
  
Copyright © 2024 ALX, All rights reserved.


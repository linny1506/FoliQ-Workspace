# ServiceDemo
This project explores the use of services throughout an application



### Initial setup of dependencies
Instructions are based off of the https://firebase.google.com/codelabs/firebase-web project
* Angular Setup (you've probably already done this so...)
    * npm
    * angular
* Firebase Console Setup
    1. Create new Project
        * Go through the prompts:
            * Choose a name for the project
            * Disable Google Analytics (if you don't need them)
    1. Enter the newly created project
    1. Create new Firebase web app
        1. Underneath the title of your project, click the circular button with the HTML tag
        1. Provide app with Nickname. You cna skip checking Firebase hosting
        1. Continue to next step by pressing Register App
        1. Follow the instructions on the second step to install firebase if you haven't already
    1. Set up Firebase BaaS functionality
        * Authentication
            1. On the left column, under the "Build" category, expand the dropdown list and click on "Authentication"
            1. Click the "Get started" button
            1. Under Sign-in methods tab, click on "Google" to enable google sign-in. Slide the slider over to enable google sign-in
            1. fill out the appropriate information for your "Public-facing name for project" and the "Support email for project"
            1. Hit save to confirm
        * Cloud Firestore
            1. On the left column, under the "Build" category, expand the dropdown list and click on "Firestore Database"
            1. Select a location for the database that's appropriate for your location
            1. Start in test mode (this will be changed once project is done)
            1. Hit Done to complete
* Firebase Setup   
    1. Install Firebase in workspace using `npm install firebase`
    1. Install the firebase CLI using `npm -g install firebase-tools@latest`
    1. Check the version to verfiy correct download using `firebase --version`
        * Make sure the version is 13.9.0 or later
    1. Navigate to the intended workspace
    1. run `firebase use --add`
        1. select the appropriate project
        1. give the alias a default name (use default for now)
* misc. project setup 
    1. Ensure that angular-cli is isntalled
        * if it isn't, use the command `npm install -g @angular/cli`
    1. use the command `ng add @angular/fire`
        1. Press `y` to proceed
        1. Select the following features: Authentication, Firestore, Cloud Messaging, Cloud Storage
    1. log in to the appropriate account
    1. Select the appropriate project
    1. select the appropriate app or create a new one

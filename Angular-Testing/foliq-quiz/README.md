# FoliqQuiz

This is a guide to figuring out how to get this stuff to work :)

# Modified/Created Files:
34 different files user modified
* tsconfig.json
* styles.scss
* src/environment/environment.ts
* src/app/app.config.ts
* src/app/app.component.scss
* src/app/app.component.html
* src/app/service/quiz-service.service.ts
* src/app/service/firebase.service.ts
* src/app/quiz/quiz-frame/*
    * Here's where the meat and potatoes of the quiz is. The quiz is built off of components placed in the quiz-frame
    * To learn the codebase, I suggest starting with this file, then looking into each of the different question components
* src/app/quiz/quiz-components/*
    * Any "custom" quiz component will be placed here.
* src/app/quiz/quiz-components/hair-texture/*
    * ./straight-wavy
        * Component is based off of a sine wave, with a few modifications to fit the `<canvas>`
    * ./curly-coily
        * Component is based off of a cycloid, with a few modifications to fit the `<canvas>`
* src/app/components/*
    * "generic" quiz components are found here. These are the common reused question components found throughout the quiz.

# Catalog of TODOs:
* styles.scss:47, make a better way to covert all text into montserrat
* src/app/service/quiz-service.service.ts:12, if able, figure out airtable.js attachment submission
* src/app/service/quiz-service.service.ts:84, These are left unimplemented for the time being. When implemented, remove the '?' from the parameters
* src/app/service/quiz-service.service.ts:85, These are left unimplemented for the time being. When implemented, remove the '?' from the parameters
* src/app/service/firebase.service.ts:20, make a better way of storing unique files that doesn't rely on unique names
* src/app/quiz/quiz-frame/quiz-frame.component.ts:39, look into effects of airtable rate limit on submitting all these requests back to back to back..
* src/app/quiz/quiz-frame/quiz-frame.component.ts:46, && this.hairThickness && this.scalpVisibility  // Not implemented yet
* src/app/quiz/quiz-frame/quiz-frame.component.ts:59, show specifically what information is missing
* src/app/quiz/quiz-frame/quiz-frame.component.ts:164, These are left unimplemented for the time being.
* src/app/quiz/quiz-frame/quiz-frame.component.ts:165, These are left unimplemented for the time being.
* src/app/quiz/quiz-frame/quiz-frame.component.ts:240, NOT IMPLEMENTED YET
* src/app/quiz/quiz-frame/quiz-frame.component.ts:243, NOT IMPLEMENTED YET
* src/app/quiz/quiz-frame/quiz-frame.component.ts:386, make a better way of preventing 0 being read falsy
* src/app/quiz/quiz-frame/quiz-frame.component.ts:46

NOTE:
***Firebase services are currently in Test Mode for access. This MUST be changed when deployed***

# Good resources to reference:
* https://www.youtube.com/watch?v=G0bBLvWXBvc&ab_channel=Fireship
* https://firebase.google.com/codelabs/firebase-web

# Common Commands
* `firebase deploy`
    * deploy the current codebase to firebase hosting
* `ng serve`
    * deploy current base to localhost:4200
* `ng serve -port [1234]`
    * deploy current base to a specific localhost port [1234]

# Original Setup Documentation
1. Created the project using angular CLI
    * In Folder where you want to put the workspace
    * `ng new foliq-quiz --style scss`
1. Add Angular Material
    * In the new workspace
    * `ng add @angular/material`
    * Configurations
        * Custom Theme
        * No global typography style
        * Include and Enable animations
1. Add Firebase servives
    * In the new workspace
    1. `npm install firebase`
    1. `npm install -g firebase-tools`
    1. `firebase login`
    1. `firebase use -add`
        1. select the appropriate project
        1. give the alias a default name (use default for now)
    1. use the command `ng add @angular/fire`
        1. Press `y` to proceed
        1. Select the following features: Authentication, Firestore, Cloud Messaging, Cloud Storage
        1. log in to the appropriate account
        1. Select the appropriate project
        1. select the appropriate app or create a new one    
1. Add airtable.js to project
    1. Use command `npm install airtable`

# Rough instructions for installing into a new workspace
1. install npm
1. install angular
    * originally built in Angular 17
1. Add Firebase servives
    * In the new workspace
    1. `npm install firebase`
    1. `npm install -g firebase-tools`
    1. `firebase login`
    1. `firebase use -add`
        1. select the appropriate project
        1. give the alias a default name (use default for now)
    1. use the command `ng add @angular/fire`
        1. Press `y` to proceed
        1. Select the following features: Authentication, Firestore, Cloud Messaging, Cloud Storage
        1. log in to the appropriate account
        1. Select the appropriate project
        1. select the appropriate app or create a new one
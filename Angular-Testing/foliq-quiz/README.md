# FoliqQuiz

This is a guide to figuring out how to get this stuff to work :)


# Change Documentation
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
1. Upload to Firebase Hosting
    * In the new workspace
    * `npm install firebase`
    * `npm install -g firebase-tools`
    * `firebase login`
    * `firebase init`
        * set up "Hosting: Configure ..."
        * go through rest of the prompts
            * It's a good idea to create a new firebase project through a web browser before you continue, makes this way easier
    * Follow through with rest of the prompts
    * `firebase deploy`
        * Check out the page on foliq-quiz.web.app
        * If you need to update the hosted site, re-run `firebase deploy`







# Pre-generated Documentation
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

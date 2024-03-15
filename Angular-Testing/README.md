# Angular Workflow
This is how to set up a super basic Angular project
___
___
### Setting up NPM/AngularCLI (only need to do this once)
* download node package manager (NPM) from the internet (or if you're a linux person, the linux way)
* `npm install -g angular-cli`
	* `"npm install"` --> command to install something from npm
	* `"-g"` --> global tag
	* `"angular-cli"` --> the thing that you're installing
___
___
### Creating new Angular project
* `ng new [project name]`	--> replace [project name] with desired project name. 
	* **NOTE: the [project name] MUST BE ALL** lowercase
* `ng serve`		--> local hosting on http://localhost:4200/
	* **NOTE:** this should be done in the project workspace (ie. navigate into the project file)
### Adding a library
* `ng add [library]` --> 
	* example: `ng add @angular/material`
### Making a new Component 
* `ng generate component [name]` --> automatically create a new component (and it's relations) for the project workspace
	* Common flags
		* `-s` `--inline-style`, (default:false) set to true if you don't want an additional file only for the style
		* `-t` `--inline-template`, (default:false) set to true if you don't want an additional file just for the html templating



## Hosting
### Firebase Hosting >> for Progressive Web App (PWA)
* `ng new @angular/pwa`	--> generates tools to turn project into PWA
	* **NOTE:** take note of the ***--standalone*** flag, this (in angularCLI v17.2.3) is by default true which means no NgModules
	* **NOTE:** take note of the ***--style*** flag, default is css, so you should choose
* `ng build`		--> builds the js files that will be used by app
* `ng new @angular/fire`	--> start hosting process with firebase
	* note: you should have a firebase project already created for this stage
* `ng deploy` 		--> run this to deploy to firebase
	* note: for ***Angular v17.2.1***, `ng deploy` runs automatically after running `ng new @angular/fire` by default. You don't need to deploy twice (unless you need to fix something)

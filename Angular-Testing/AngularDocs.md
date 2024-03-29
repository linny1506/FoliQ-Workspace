# Non-CLI/workflow notes for Angular
This file is for general notes on how the Angular programming framework works
### Moving Data
* Data between .html <--> .ts
    * interpolation {{ . . . }}
        * values found in corresponding .ts files can be interpolated into the respective .html files
        * eg. 
            * `{{some-TS-Variable-Name}}`
        * kind of ternary operator for this
            * `{{ rooms?.availableRooms ?? 'no rooms' }}`
                * if rooms.availableRooms is falsey, then the value here is 'no rooms' (whatever is after the ??) 
    * property binding [`property name`]="`.ts thing`"
        * gives an html element the value found in a .ts thing
        * eg. 
            * `<div [innerText]=".ts thing"></div>`
    * event binding `<button (click)="functionName()"></button>`
### Modifying data
* .html
    * Directives
        * Two main types
            * Structural Directives --> these can modify your DOM *AND* Add/Remove things from the DOM
            * Attribute Directives --> can modify your DOM but *CANT* Add/Remove elements
    * *ngIf
        * this is a directive you can add to an .html
            * different from the hidden directive since hidden still exists in the DOM, a thing with *ngIf wont even appear/load in the DOM unless the condition is satisfiede
        * try to use this as much as possible and avoid the hidden tag
    * *ngFor
        * it's a for loop to generate a repeated .html element
        * note, many UI libraries have built in wrappers that let you do *ngFor without writing UI things from scratch
    * *ngSwitch
        * switch statement implementation --> see example later
    * ngClass
        * conditional binding of css classes
    * ngStyle
        * Conditional style
* pipes
    * What are they?
        * essentially just super straight forward ways to create common operations
        * NB: kinda like basic streams in other languages? (java...)
    * DatePipe      {{ something something | date }}
        * to specify the thing, {{ something something | date : "specifier" }}
    * UpperCasePipe
    * LowerCasePipe
    * CurrencyPipe
        * makes a number value into a currency, default is USD, but you have different tags for different currencies
    * NumberPipe    {{ something something | number '1.5'} } . . . '[digits before radix].[digits after radix]-[max number of digits]'
    * DecimalPipe
    * PercentPipe
    * JsonPipe      {{ something something | json }}
        * displays the thing as a json
    * SlicePipe
        * get a subset of an array of values --> eg *ngFor . . . | slice:"1:2", start from first, then display 2 values (ie index 1, index 2)
            * this is actually pretty nice since you don't have to worry about index out of bounds exceptions
        * BUT don't use this for large renders though, 
    * AsyncPipe
### lifecycle hooks
Components need to go throguh some events that are necessary, for example a one time event for initializaiton
* ngOnChanges
* ngOnInit
* ngDoCheck
* ngAfterContentInit
* ngAfterContentChecked
* ngAfterViewInit
* ngAfterViewChecked
* ngOnDestroy
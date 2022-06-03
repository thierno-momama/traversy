# TaskTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

# TUTORIAL TASK TRACKER 

## WHAT IS ANGULAR?
Angular is an application design framework and development plaform for creating efficient and sophisticated single-page apps.
* Angular, like other frontend frameworks, is generally used to create single-page capps that run on the client, but can used to created full stack applications by macking HTTP requests to a backend server(eg. MEAN stack).
* Angular can be run on the server-side with something like Angular Universal.
## WHY USE ANGULAR?
* Create dynamic frontend apps & UIs.
* Full featured framework (route, http, etc).
* Integrated Typescript (optional).
* RxJS - efficient, asynchronous programming.
* Test-friendly.
* Popular in entreprise business.
## WHAT SHOULD YOU KNOW FIRST?
Like with any framework, you should be confortable with the underlying language first. In this case, that is Javascript.
* Javascript Fundamentals.
* Async Progamming (promises)
* Array Methods (forEach, map, filter, etc).
* Fetch API/HTTP Requests.
* NPM (Node Package Manager).
## ANGULAR COMPONENTS
Components are pieces of the UI including the template(html), Logic and styling.

Components are reusable and can be embedded into template as an XML-like tag.

```
@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    providers: [ HeroService ]
})
export class HeroListComponent implements Onit {
    /* . . . */
}
```
## ANGULAR SERVICES
Angular distinguishes components form services to increase modularity andcreusability.

By separating a component's view-related functionnality from other kinds of processing, you can make your component classes lean and efficient.

A component can dlegate certain tasks to services, such as fetching data from the server, validating user input, or logging directly to the console.

##  ANGULAR CLI
Standing tooling for Angular development.
* Command line interface for creating Angular apps.
* Dev server and easy production build.
* Commands to generate components, services, etc...
```
npm install -g @angular/cli
ng new myapp
```
## LET'S LEARN ANGULAR!
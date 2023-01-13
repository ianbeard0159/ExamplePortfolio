# ExamplePortfolio
https://ianbeard0159.github.io/ExamplePortfolio/
## Deploying to GitHub Pages

**One Time Setup:** 
- run `ng build` to build the project *(I think deploying builds the project for you, but you might need to run this once to generate the initial* `/dist` *file)*
- run `ng add angular-cli-ghpages`
- on github.com, go to your repository -> Setting -> Pages and set the two dropdowns under 'Branch' to `gh-pages` and `/(root)` respectively *(Your first deployment will automatically make the gh-pages branch for you)*

**Each Deployment:** 
- run `ng deploy --base-href="/RepositoryName/"` *(Important to have the name of the repository in double quotes)*
- on github.com, go to your repository -> Actions to watch the progress of the deployment. Once the deployment action is completed, your page should be good to go


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

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

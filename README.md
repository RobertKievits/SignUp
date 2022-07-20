# SignUp

Single page app with a sign-up form.

- User can enter first name, last name, email, and password.
- All fields are required.
- Password validation:
	- Should be a minimum of eight characters,
	- Should contain lower and uppercase letters (custom validator),
	- Should not contain user’s first or last name (custom validator).
- Email validation using regex and custom validators
- On valid form POST request is sent to https://demo-api.now.sh/users containing first name, last name and email address
 
## Implemented additional nice to haves

- Setup linting and prettier as well
- Show toast on success and error of submit (created toast service)
- Made it a PWA. Can be run with `npm run start:sw`
- Used tailwind for styling (no own css files expect the root `styles.css`)

## TODO's / next steps (if more time)

- Make the form fields reusable components. It works for now, but there is more code reuse then necessary
- Additional unit tests (since this is only a demo I did not create 100% code coverage. The tests that are there is to give a general idea of unit test knowledge)
- Setup Cypress e2e testing

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

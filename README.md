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

- Make the form fields reusable components. It works for now, but there is more code duplication then necessary. Next step would be creating new components with `ControlValueAccessor`
- Additional unit tests (since this is only a demo I did not create 100% code coverage. The tests that are there is to give a general idea of unit test knowledge)
- Setup Cypress e2e testing

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

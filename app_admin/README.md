# App_Admin:

This project was generated with the [Angular CLI]() and uses Express.js as a backend server that serves the Angular app. Node.js is used to run the Express server which communicates with the MongoDB database using the Mongoose library as a database driver.
The UI is built using Angular Material and Angular Flex Layout. The UX is designed to be simple and straightforward, tailored towards having quality usability and accessibility.

Note: Run the backend server before running the Angular app.

> The backend server is located in the `server` directory.<br>

> Seed the database using the `seed.js` script in the `app_api/models` directory.

## Install:

To begin, run `npm install` in order to install the necessary dependencies to be able to run the Angular app.

## Development server:

After installing all of the necessary dependencies, run `ng serve` in order to start the Angular development server. Next, visit `http://localhost:4200/` in your browser to view the app.

> The backend server must be running in order to use the app via running the command `node ./bin/www` in the root directory of the project.
<br><br>
> You will also need to seed the database using the `node ./app_api/models/seed.js` script in the `app_api/models` directory.

### API Response:

```json
[{"_id":"675ec41fe09e0bca68c7043c","code":"GALR210214","name":"Gale Reef","length":"77 nights / 78 days","start":"2021-02-14T08:00:00.000Z","resort":"Emerald Bay, 3 stars","perPerson":"799.00","image":"reef1.jpg","description":"<p>Step into the aquatic hall of fame at Gale Reef. We're talking crystal-clear waters so pure they'll make diamonds jealous.</p><br><p>Explore some pimpin' vibrant coral palaces and kick it with some marine af VIPs. </p><br><br><p>Whether you're new to the game of divin' or you so happen to be a seasoned pro, this reef is still pure underwater 1,000% swagger.</p>","__v":0}]
```
<br><hr>

## Generating Components and Services in Angular CLI:

> Note: Angular CLI was the chosen framework to create the UI of the app.

In order to generate new components and services, you can run the command: `ng generate component component-name`, `ng generate service service-name`.<br>
<br>You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module` to generate directives, pipes, services, classes, guards, interfaces, modules, and enums.

<br>

> Replace <code>component-name</code> and <code>service-name</code> with the name of the component or service you would like to generate.

## Build:

Next, in order to build the project, run the command `ng build` in order to build the application for production.

> The latest build artifacts will be stored in the `./app_admin/dist/` directory.
<br>

## Building the Angular App:

```ps
PS C:\Users\rshat\Documents\School\Computer Science School\Current Classes\CS 465\00 Organized\branch6\travlr\ryanshatch_app\app_admin> ng serve
Initial chunk files | Names         |  Raw size
polyfills.js        | polyfills     |  90.20 kB |
main.js             | main          |   5.57 kB |
styles.css          | styles        | 106 bytes |

                    | Initial total |  95.87 kB

Application bundle generation complete. [32.877 seconds]

Watch mode enabled. Watching for file changes...
NOTE: Raw file sizes do not reflect development server per-request transformations.
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help
\ Changes detected. Rebuilding...
Initial chunk files | Names | Raw size
main.js             | main  |  5.70 kB |

Application bundle generation complete. [0.366 seconds]

Page reload sent to client(s).
Initial chunk files | Names | Raw size
main.js             | main  |  5.70 kB |

Application bundle generation complete. [0.294 seconds]

Page reload sent to client(s).

```

## Running unit tests:

In order to run unit tests after building the project, you can use the command, `ng test` to execute the tests.

> Jasmine was the testing framework that was used to write the unit tests and [Karma](https://karma-runner.github.io) was used as the test runner for the unit tests.

## Running end-to-end tests:

Next, after running the unit tests on the application, you can run end-to-end tests with the command, `ng e2e`. This command will start the testing environment using [Protractor](http://www.protractortest.org/).

## Help with Angular CLI:

If you need further help with the Angular CLI, or any of the commands mentioned above that were used in this project, you can use the command `ng help`.
<br><br>

<b>*Respectfully*, If you are *still* struggling, please kindly remember to *breathe* and just simply parse the following, "<code>How do I `your_question_here`</code>" into Google.</b>

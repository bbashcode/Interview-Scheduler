# Interview Scheduler
Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors. Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday. Each appointment has one student and one interviewer. When creating a new appointment, the user can enter any student name while the interviewer is chosen from a predefined list. The user can save the appointment and view the entire schedule of appointments on any day of the week. Appointments can also be edited or deleted. The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a database.

## Setup
There are two parts to setup this project. First, the API need to be setup and then second comes the UI. Following is the process to set them up.

### API Setup
* Fork and clone the [scheduler-api](https://github.com/lighthouse-labs/scheduler-api) on your local machine
* Install dependencies with `npm install`.
* Follow the README.md instructions.
* `npm start` scheduler-api(This must be running in another terminal when you start the app)

### UI Setup
1. Fork this repository and clone it on your local machine
2. Install dependencies using the `npm install` command.
3. `npm start` to start the app. It will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Few more commands to check as well
### Running Webpack Development Server

```sh
npm start
```

### Running Jest Test Framework

```sh
npm test
```

### Running Storybook Visual Testbed

```sh
npm run storybook
```
## Dependencies:
* "axios": "^0.27.2",
* "classnames": "^2.2.6",
* "normalize.css": "^8.0.1",
* "react": "^16.9.0",
* "react-dom": "^16.9.0",
* "react-scripts": "3.4.4"

## Dev Dependencies:
* "@babel/core": "^7.4.3",
* "@storybook/addon-actions": "^5.0.10",
* "@storybook/addon-backgrounds": "^5.0.10",
* "@storybook/addon-links": "^5.0.10",
* "@storybook/addons": "^5.0.10",
* "@storybook/react": "^5.0.10",
* "@testing-library/jest-dom": "^4.0.0",
* "@testing-library/react": "^8.0.7",
* "@testing-library/react-hooks": "^8.0.1",
* "babel-loader": "^8.0.5",
* "prop-types": "^15.8.1",
* "react-test-renderer": "^16.9.0",
* "sass": "^1.53.0"

## Final Product:

![Book an appointment](https://github.com/bbashcode/Interview-Scheduler/blob/master/docs/BookAppointment1.png)

![Appointment Booking in progress](https://github.com/bbashcode/Interview-Scheduler/blob/master/docs/BookAppointment2.png)

![Appointment Booked](https://github.com/bbashcode/Interview-Scheduler/blob/master/docs/BookedAppointment.png)

![Delete an appointment](https://github.com/bbashcode/Interview-Scheduler/blob/master/docs/DeleteAppointment.png)

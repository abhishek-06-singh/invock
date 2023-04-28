# GitHub profile By React, Redux, Redux-thunk

This is a simple React application that allows the user to search for a GitHub profile by entering a username. The app fetches data from the GitHub API and displays the user's profile information, including the number of repositories, followers, and following, as well as their email and profile picture.

## Demo

## Components

`Api`
The Api component is the main component of the app. It is responsible for rendering the search form and handling the submission of the form. The component also renders the ShowProfile component when the data has been fetched successfully.

Props

- username: the username entered in the search form.
- repos: the number of public repositories the user has.
- following: the number of users the user is following.
- followers: the number of users following the user.
- email: the user's email.
- grabbedData: a boolean value that indicates whether the data has been fetched successfully or not.
- message: a message to display if the user is not found.

`Methods`

- handleChange(e): handles the change event of the search form input and dispatches the handleUsername action to update the username state in the store.
- handleSubmitForm(e): handles the submission of the search form and dispatches the submitForm action to fetch data from the GitHub API

`ShowProfile`
The ShowProfile component is responsible for rendering the user's profile information when the data has been fetched successfully.

- username: the username of the user.
- repos: the number of public repositories the user has.
- following: the number of users the user is following.
- followers: the number of users following the user.
- email: the user's email.
- image_url: the user's profile picture.

## Store

The store contains the state of the application and the reducers that update the state based on the actions dispatched by the components.

`Actions`

- handleUsername(e): updates the username state in the store when the user enters a username in the search form input.
- submitForm(e, username): fetches data from the GitHub API and updates the state with the user's profile information if the data is found. If the user is not found, the state is updated with a message indicating that the user was not found.

`Reducer`
The reducer updates the state of the application based on the actions dispatched by the components.

Initial State

- username: an empty string.
- repos: an empty string.
- following: an empty string.
- followers: an empty string.
- email: an empty string.
- grabbedData: a boolean value that indicates whether the data has been fetched successfully or not.
- message: an empty string.
- image_url: an empty string.

## Dependencies

`react`
`react-dom`
`redux`
`react-redux`
`redux-thunk`

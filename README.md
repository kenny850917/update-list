## Live Demo

The project is deployed on Vercel and can be accessed at:
[https://update-list.vercel.app/](https://update-list.vercel.app/)

## Overview
Create an upvote component that can show two states: default with a light gray background and dark gray arrow, and selected with a light blue background and blue arrow. Clicking the upvote toggles its state using a function passed through props. In the upvote list, all upvotes share the same state within their list but are independent from other lists. You can add more upvotes to a list with a + button, and new upvotes will match the state of the existing ones.

## Key Features:
Reusable Components: The Upvote component is designed to be reusable across different lists with independent state management.
State Management: The component uses props to manage its selected state (isSelected) and to handle user interaction via a callback function (onToggle), also stored in local storage. Refreshing the page will make the states of upvotes stay.

## Project Structure
UpvoteContext.tsx: Provides context for managing the state of upvote lists.
App.tsx: The entry point that combines multiple upvote lists.
UpvotesList.tsx: Renders a list of Upvote components.
Upvote.tsx: The main React component that renders the upvote button.
Upvote.test.tsx: Contains the unit tests for the Upvote component using React Testing Library and Jest.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

This command will run the Jest test suite, which includes tests for the Upvote component's rendering and state management.

# Real-time Markdown Editor with Live Preview

This project is a real-time Markdown editor built using Node.js and React. It allows users to type Markdown syntax and instantly see the rendered HTML in a live preview pane.

## Features

- **Real-time Editing**: Markdown syntax is converted to HTML in real-time as the user types.
- **Live Preview**: The rendered HTML is displayed in a separate pane for immediate feedback.
- **Syntax Highlighting**: Optional syntax highlighting for better readability in the Markdown editor.
- **Backend Markdown Processing**: Node.js server handles Markdown to HTML conversion for efficient processing.
- **No Database Requirement**: Stateless application with all operations performed in real-time.

## How to Use

1. Clone this repository to your local machine.
2. Navigate to the `server` directory and run `npm install` to install backend dependencies.
3. Start the backend server by running `npm start`.
4. Navigate to the `client` directory and run `npm install` to install frontend dependencies.
5. Start the React application by running `npm start`.
6. Open your browser and go to `http://localhost:3000` to access the Markdown editor.
7. Start typing Markdown in the text area and see the live HTML preview on the right.

## Technologies Used

- **Frontend**: React, Axios, React Markdown, React Syntax Highlighter
- **Backend**: Node.js, Express, Marked
- **Styling**: CSS

## Folder Structure

```markdown
markdown-editor/
├── client/ # Frontend React application
│   ├── node_modules/ # Frontend dependencies
│   ├── public/ # Public assets
│   └── src/ # Frontend source code
├── server/ # Backend Node.js server
│   └── server.js # Backend server file
├── node_modules/ # Project dependencies
├── package.json # Project package file
└── README.md # Project README
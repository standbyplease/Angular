# Simple Express.js Application

This project is a simple Express.js application that serves both static and dynamic HTML files. It demonstrates how to set up an Express server, serve static assets, and handle routing for different pages.

## Project Structure

```
simple-express-app
├── src
│   ├── app.js          # Entry point of the application
│   ├── routes
│   │   └── index.js    # Route definitions
│   └── views
│       ├── index.html   # Home page HTML
│       └── about.html   # About page HTML
├── public
│   ├── css
│   │   └── styles.css   # CSS styles for the application
│   └── js
│       └── script.js     # Client-side JavaScript
├── package.json          # NPM configuration file
└── README.md             # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd simple-express-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run the following command:
```
node src/app.js
```

The application will be running on `http://localhost:3000`. You can access the home page at `/` and the about page at `/about`.

## License

This project is licensed under the MIT License.
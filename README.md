# JSSynth Project

## Overview
JSSynth is a web application that serves static content using Nginx. This project is structured to facilitate easy deployment using Docker.

## Project Structure
```
JSSynth
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .env.example
├── nginx
│   └── default.conf
├── public
│   ├── index.html
│   ├── css
│   │   └── styles.css
│   └── js
│       └── app.js
└── README.md
```

## Files Description

- **Dockerfile**: Defines the Docker image for the application using the `nginx:alpine` base image. It copies the `public` directory to the Nginx HTML directory and sets up the default configuration for Nginx.

- **docker-compose.yml**: Specifies the services, networks, and volumes for the application. It defines how to build the Docker image and run the Nginx service.

- **.dockerignore**: Lists files and directories to be ignored by Docker during the image build process, helping to reduce the image size.

- **.env.example**: A template for environment variables used in the application, containing key-value pairs for configuration settings.

- **nginx/default.conf**: Contains the configuration settings for the Nginx server, defining how to serve the application, including the root directory and routing rules.

- **public/index.html**: The main HTML file for the application, serving as the entry point for the web application.

- **public/css/styles.css**: Contains the CSS styles for the application, defining the visual appearance of the web pages.

- **public/js/app.js**: Contains the JavaScript code for the application, providing interactivity and functionality to the web pages.

## Setup Instructions

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd JSSynth
   ```

2. **Build the Docker Image**: 
   ```
   docker compose build
   ```

3. **Run the Application**: 
   ```
   docker compose up
   ```

4. **Access the Application**: Open your web browser and navigate to `http://localhost:80`.

## Usage Guidelines
- Modify the `nginx/default.conf` file to change routing rules as needed.
- Update the `.env.example` file with your environment-specific configurations.
- Add your static assets in the `public` directory.

# js-synth-nginx

## Project Overview
This project is a simple web application that plays a  sound using the Web Audio API. It is designed to be served using Nginx in a Docker container.

## File Structure
```
js-synth-nginx
├── public
│   ├── index.html          # Main HTML document for the application
│   ├── sound.js           # JavaScript code for audio playback
│   └── file_example_MP3_700KB.mp3  # Audio file for playback
├── nginx
│   └── default.conf       # Nginx server configuration
├── Dockerfile              # Instructions to build the Docker image
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the Repository**
   Clone this repository to your local machine using:
   ```
   git clone <repository-url>
   ```

2. **Build the Docker Image**
   Navigate to the project directory and build the Docker image using:
   ```
   docker build -t js-synth-nginx .
   ```

3. **Run the Docker Container**
   After building the image, run the container with:
   ```
   docker run -d -p 80:80 js-synth-nginx
   ```

4. **Access the Application**
   Open your web browser and go to `http://localhost` to access the application.

## Usage
- Click the "Play" button in the application to hear the dog barking sound.

## Notes
- Ensure that Docker is installed and running on your machine before attempting to build and run the application.
- The application uses the Web Audio API, which is supported in most modern browsers.
# cepsearch frontend

### cepsearch frontend to consumes REST API

Frontend developed to consume the [cepsearch API](https://github.com/WeversonL/cepsearch.git), which I developed to improve my knowledge in Java REST API's

## Get Started

### Running the application with Docker

### Run backend

To run the backend of the application, follow the steps in this [repository](https://github.com/WeversonL/cepsearch.git)

Make sure you have Docker installed on your machine. [Dockerhub](https://hub.docker.com/r/weversonlemos/cepsearch-frontend)

1. Clone the image

        docker pull weversonlemos/cepsearch-frontend:latest

2. Start container with image

        docker run --name cepsearch-frontend -p 3000:3000 cepsearch-frontend:latest

3. Open your browser and type in the URL bar

        http://localhost:3000/

### Run using npm

Make sure you have Nodejs and NPM installed on your machine.

1. Clone the repository or download the source code

        git clone https://github.com/WeversonL/cepsearch-frontend.git
        cd cepsearch-frontend

2. Download npm dependencies

        npm install

3. Run the npm project

        npm start

4. Open your browser and type in the URL bar

        http://localhost:3000/

### Compile the project in a production-optimized manner, with performance optimizations with minifications

Make sure you have Nodejs, NPM and NPX installed on your machine.

1. Clone the repository or download the source code

        git clone https://github.com/WeversonL/cepsearch-frontend.git
        cd cepsearch-frontend

2. Download npm dependencies

        npm ci

3. Build project

        npm run build
        
4. Install serve
        
        [⚠️ If you only want to use it locally and not install it globally, use: `npm install serve`]
        npm install -g serve 

5. Run project

        npx serve build

6. Open your browser and type in the URL bar

        http://localhost:3000/

### Build your own docker image

Make sure you have Docker installed on your machine.

1. Clone the repository or download the source code

        git clone https://github.com/WeversonL/cepsearch-frontend.git
        cd cepsearch-frontend

2. Run docker build

        docker build -t {YOUR_IMAGE_NAME}:{YOUR_IMAGE_TAG} .

⚠️ Still in development

## License

`cepsearch-frontend` is released under the [GNU General Public License, Version 2](LICENSE)
    
        Copyright (C) 2022 Weverson Lemos

        This program is free software; you can redistribute it and/or
        modify it under the terms of the GNU General Public License
        as published by the Free Software Foundation; either version 2
        of the License, or (at your option) any later version
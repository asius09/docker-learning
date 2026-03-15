# Docker Learning
for .yaml file we don't need to create separate network file.

### Images
- In docker we have images and containers. Images are the blueprints for the containers like in Javascript we have classes and Containers are the instances of the images like in Javascript we have objects which are the instances of the classes.
- We can create our own images using Dockerfile and we can also use the images from the Docker Hub which is a public repository for Docker images.
- We can also create our own images and push them to the Docker Hub so that others can

## How to create a Dockerfile
- We can create a Dockerfile in the root directory of our project and we can use the following syntax to create a Dockerfile
```# Use an official Node.js runtime as a parent image
FROM node:14
# Set the working directory in the container
WORKDIR /app
# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./
# Install the dependencies
RUN npm install
# Copy the rest of the application code to the working directory
COPY . .
RUN pnpm run build
# Expose the port that the application will run on
EXPOSE 3000
# Define the command to run the application
CMD ["pnpm", "start"]
```

### How to build a Docker image
- We can use the following command to build a Docker image from the Dockerfile
- ```docker build -t <image-name> .```
- NOTE: `.` is used to specify the current directory as the build context for the Docker Image.

### How to push a Docker image to Docker Hub
- We can use the following command to push a Docker image to Docker Hub
- ```docker push <image-name>```
- NOTE: Before pushing the image to Docker Hub, we need to login to Docker Hub using the following command
- ```docker login```
- After logging in, we can push the image to Docker Hub using the above command.

### Docker Volume
- Docker Volume is a way to persist data in Docker containers. It allows us to store data outside the container and share it between containers. as before when we create contianer mongodb and we want to persist the data even after the container is removed we can use Docker Volume to achieve that. We can create a Docker Volume using the following command
- ```docker volume create <volume-name>```
- After creating the volume we can use it in our Docker Compose file to mount the volume to the container. For example, in our Docker Compose file we can use the following syntax to mount the volume to the MongoDB container
- ```yaml
version: '3'
services:
  mongodb:
    image: mongo
    volumes:
      - <volume-name>:/data/db
```
- In the above example, we are mounting the volume to the /data/db directory in the MongoDB container which is the default directory for MongoDB data. This way, even if the MongoDB container is removed, the data will still be persisted in the Docker Volume.

# > Here is the mental map for the Docker Volume:
- Docker manage and create the space in container to store the data and this space is called Docker Volume. We can create a Docker Volume using the `docker volume create` command and we can use it in our Docker Compose file to mount the volume to the container. This way, even if the container is removed, the data will still be persisted in the Docker Volume.
- There is speciality that we can use the same volume for two or more containers and this way we can share the data between the containers.
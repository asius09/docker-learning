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
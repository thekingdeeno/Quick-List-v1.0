# This docker file was created by Nwando

# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies
RUN npm install

# Define the entry point for the container
CMD ["npm", "node app.js"]

# Give the tcp port name
ARG PORT=3000
ENV PORT=$PORT

EXPOSE 3000
EXPOSE $PORT
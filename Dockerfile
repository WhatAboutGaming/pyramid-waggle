# Node
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install needed packages
RUN npm install

# Make port 8887 available to the world outside this container
EXPOSE --port $PORT --host 0.0.0.0

# Starting command
CMD ["npm", "start"]

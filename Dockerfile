# Use an official Node.js image as the base
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React application
RUN npm run build

# Use an official Node image to serve the built files
FROM node:18-slim

# Copy the build output to the HTML directory
COPY --from=build /app/build .

# Expose the default port
EXPOSE 80

# Start NGINX
CMD ["serve", "-s", ".", "-p", "80"]

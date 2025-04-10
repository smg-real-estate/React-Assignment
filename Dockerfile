# Use Node.js 20 LTS as the base image
FROM node:20-alpine

# Install SQLite and valkey
RUN apk add --no-cache sqlite valkey

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Create directories for data and valkey
RUN mkdir -p /app/data /app/config/valkey && \
    chown -R node:node /app/data /app/config

# Switch to non-root user for security
USER node

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 
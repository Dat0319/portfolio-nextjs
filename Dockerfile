# Use a lightweight Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy static files to container
COPY out/ /app

# Expose port
EXPOSE 3000

# Start static site with serve (ESM-friendly)
CMD ["serve", "-s", ".", "-l", "3000"]

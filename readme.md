## Run app with docker

```bash
# Remove existing container (if running)
docker rm -f portfolio-pm2-app-container 2>/dev/null || true

# Remove existing image (if it exists)
docker rmi -f portfolio-pm2-app 2>/dev/null || true

# Build the new image
docker build -t portfolio-pm2-app .

# Run container with auto-restart policy
docker run -d --name portfolio-pm2-app-container -p 3000:3000 --restart=always dattran0318/portfolio-pm2-app

```

## docker push images

```bash
# Tag it for your Docker Hub account
docker tag portfolio-pm2-app yourusername/portfolio-pm2-app:latest

# Login to Docker Hub
docker login
# Get docker information
docker info

# Push the image
docker push dattran0318/portfolio-pm2-app:latest

# docker buildx create --use   # (only needed once)
# docker buildx build --platform linux/amd64 -t dattran0318/portfolio-pm2-app:latest --push .
```

## Run docker image:latest in vps

```bash
docker pull dattran0318/portfolio-pm2-app:latest

docker run -d --name portfolio-pm2-app-container -p 3000:3000 --restart=always dattran0318/portfolio-pm2-app:latest

```

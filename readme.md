## Run app with docker

```bash
yarn build
# Remove existing container (if running)
docker rm -f portfolio-pm2-app-container 2>/dev/null || true

# Remove existing image (if it exists)
docker rmi -f dattran0318/portfolio-pm2-app 2>/dev/null || true

# Remove image none
docker image prune -f

# Build the new image
docker buildx build --platform linux/amd64 -t dattran0318/portfolio-pm2-app:latest --push .

# Run container with auto-restart policy
docker run -d --name portfolio-pm2-app-container -p 3000:3000 --restart=always dattran0318/portfolio-pm2-app

```

## docker push images

```bash
# Tag it for your Docker Hub account
# docker tag dattran0318/portfolio-pm2-app dattran0318/portfolio-pm2-app:latest

# Login to Docker Hub
# docker login
# Get docker information
# docker info

# Push the image
# docker push dattran0318/portfolio-pm2-app:latest

# docker buildx create --use   # (only needed once)
# docker buildx build --platform linux/amd64 -t dattran0318/portfolio-pm2-app:latest --push .
```

## Run docker image:latest in vps

```bash
# Remove existing container (if running)
docker rm -f portfolio-pm2-app-container 2>/dev/null || true

# Remove existing image (if it exists)
docker rmi -f dattran0318/portfolio-pm2-app 2>/dev/null || true

# Remove image none
docker image prune -f

docker pull dattran0318/portfolio-pm2-app:latest

docker run -d --name portfolio-pm2-app-container -p 3000:3000 --restart=always dattran0318/portfolio-pm2-app:latest

sudo systemctl restart nginx

```

## New feed

```bash
Open to Opportunities | Senior Full-Stack Developer / Tech Lead

With 6+ years of experience delivering high-quality applications, I specialize in:
- Backend: .NET, Node.js, Java Spring Boot
- Frontend: React.js, Next.js
- Database: Mysql, Postgresql, mongodb
- Mobile: React Native
- Testing: Jest + Selenium, Robot Framework

I build scalable, maintainable, and high-performance solutions that power exceptional user experiences across web and mobile platforms.
📍 Preferred Location: Hybrid, Remote, or Onsite near Hà Đông, Duy Tân
🌍 Available for: Challenging projects that value quality, performance, and collaboration
📄 Resume & Portfolio: https://johnremotedev.com/#experiences

Feel free to connect and send the job description via message.
Thank you.

#FullStackDeveloper #DotNet #NodeJS #React #NextJS #ReactNative #HybridWork #HaDong #WebDevelopment #MobileAppDevelopment #SoftwareEngineer #JobSearch
```

Navigate to Backend Service
cd web_app/services/backend

Build Docker Image
docker build . -f Dockerfile -t musicdome-backend

Run Docker Container
docker run --env-file ./backend/.dev.env -p 8000:8000 --name musicdome-backend-container musicdome-backend
Run Docker Container
docker run --env-file ./backend/.dev.env -p 8000:8000 --name musicdome-backend-container musicdome-backend
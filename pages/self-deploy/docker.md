# Deploy to Docker

[Docker Hub address](https://hub.docker.com/r/ddiu8081/anse).

**Direct run**
```bash
docker run -p 3000:3000 -d ddiu8081/anse:latest
```

**Docker compose**
```yml
version: '3'
services:
  anse-demo:
    image: ddiu8081/anse:latest
    container_name: anse
    restart: always
    ports:
      - '3000:3000'
```

```bash
# start
docker compose up -d
# down
docker-compose down
```

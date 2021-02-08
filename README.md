# udagram-microservices

This is the project for Udacity and this README show how this project achieve it.

## GROUP: Containers and Microservices

### CRITERIA: Divide an application into microservices

- [/feed](https://hub.docker.com/repository/docker/amorimdub/udagram-feed-api)
- [/user](https://hub.docker.com/repository/docker/amorimdub/udagram-user-api)

### CRITERIA: Build and run a container image using Docker

- [/feed](https://hub.docker.com/repository/docker/amorimdub/udagram-feed-api)
- [/user](https://hub.docker.com/repository/docker/amorimdub/udagram-user-api)
- [frontend](https://hub.docker.com/repository/docker/amorimdub/udagram-web)
- [reverse proxi](https://github.com/amorimdub/udagram-microservices/blob/main/k8s/ingress.yaml)
  - *The proxy was implementad using ingress on kubernetes*

![Docker HUB](https://github.com/amorimdub/udagram-microservices/blob/main/.github/screenshots/dockerhub.png)

## GROUP: Independent Releases and Deployments

> [!IMPORTANT]
> CICD using GitHub Actions instead of travis 

### CRITERIA: Use Travis to build a CI/CD pipeline

- ![User API](https://github.com/amorimdub/udagram-microservices/workflows/User%20API/badge.svg)
  - [History](https://github.com/amorimdub/udagram-microservices/actions?query=workflow%3A%22User+API%22)
  - [Settings](https://github.com/amorimdub/udagram-microservices/blob/main/.github/workflows/user-api-docker.yml)
- ![Feed API](https://github.com/amorimdub/udagram-microservices/workflows/Feed%20API/badge.svg)
  - [History](https://github.com/amorimdub/udagram-microservices/actions?query=workflow%3A%22Feed+API%22)
  - [Settings](https://github.com/amorimdub/udagram-microservices/blob/main/.github/workflows/feed-api-docker.yml)
- ![Frontend](https://github.com/amorimdub/udagram-microservices/workflows/Web%20Angular/badge.svg)
  - [History](https://github.com/amorimdub/udagram-microservices/actions?query=workflow%3A%22Web+Angular%22)
  - [Settings](https://github.com/amorimdub/udagram-microservices/blob/main/.github/workflows/web-docker.yml)

![GitHub Actions](https://github.com/amorimdub/udagram-microservices/blob/main/.github/screenshots/cicd.png)
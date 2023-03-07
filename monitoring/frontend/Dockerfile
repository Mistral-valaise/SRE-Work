### STAGE 1: Build ###
#FROM - It creates a build process and pulls the most recent image from DockerHub.
FROM node:latest AS build

#WORKDIR - It specifies the preferred working folder in which the configuration files will be stored. If the path cannot be found, the directory will be created.
#Navigating to the app folder.
WORKDIR /usr/src/app

#COPY - This command copies the project’s source files from the host’s root folder to the container’s working directory.
#Copying the package.json file from our project directory to the app directory.
COPY package-lock.json ./
COPY package.json ./

RUN npm install
#This command is similar to npm install,
#except it's meant to be used in automated environments such as test platforms, continuous integration, and deployment --
#or any situation where you want to make sure you're doing a clean install of your dependencies.


#Copying the other contents of the project folder to the app folder.
COPY . .


#Finally, we build the project in the app folder.
RUN npm run build --prod

### STAGE 2: Run ###
###here we Create the User 1001 in the User-group "0" beceause we don't wa to run nginx as root for more security
FROM registry.access.redhat.com/ubi8/ubi:8.5-236.1647448331
RUN dnf install nginx -y && \
    adduser -m -u 1001 -g 0 nginxrunner && \
    chmod -R 760 /home/nginxrunner && \
    dnf clean all

COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

#Copying all the build contents to the configured Nginx HTML folder.
COPY --from=build /usr/src/app/dist/bdr-devops-school /usr/share/nginx/html

EXPOSE 8080
USER 1001
#ENTRYPOINT [ "sh", "/replace_placeholders.sh" ]
CMD ["nginx",  "-g", "daemon off;"]


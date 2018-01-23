#Step 1.
FROM mhart/alpine-node:latest

#Step 2:
# Labels - Useful for tagging instances and having metadata accessible
LABEL version="1.1.2"
LABEL description="This is a Docker Image for the users's api to be use in Kubernetes"
LABEL maintainer "Raul R. Proenza <raul.r.proenza@gmail.com>"

#Step 3.
#Creation of enviroments variables
ENV HOME=/home/app
ENV SOURCE_APP_PATH=.
ENV NODE_ENV production

#Step 4:
# /tmp - Use for caching purposes
ADD package.json /tmp/package.json

#Step 5:
# If you are building your code for production
# RUN npm install --only=production
# TODO: add strategy for check env and a make conditianal install
RUN cd /tmp && npm install

#Step 6.
RUN mkdir -p ${HOME} && cp -a /tmp/node_modules ${HOME}

#Step 7.
WORKDIR ${HOME}

#Step 8.
ADD ${SOURCE_APP_PATH} ${HOME}

#Step 9.
EXPOSE 3002
CMD [ "npm", "start" ]
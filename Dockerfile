# base image
FROM node:12.14
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
#COPY package.json /app/package.json
COPY . /app/
RUN npm install
RUN npm install -g @angular/cli@12.1.1

# add app
COPY . /
EXPOSE 4200

# start app
CMD ng serve --host 0.0.0.0

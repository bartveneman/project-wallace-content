FROM mhart/alpine-node

# Set the default working directory
WORKDIR /usr/src

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# Copy the relevant files to the working directory
COPY . .

# Build and export the app
# The ARG commands expose the environment variables to us here
ARG NOW
ARG NOW_URL

# ... so we can use those variables here, prefixed with a $
RUN NODE_ENV=production NOW=$NOW NOW_URL=$NOW_URL npm run export && mv out /public

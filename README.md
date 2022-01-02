# HighLevel-configuratie-dtap
configuration files for test and production environments

## CSS
There are 2 css files, depending on the deployment environment the Jenkins pipeline selects the required version and copies it into the correct folder on the targeted system

- Test.style.css for the testserver
- Prod.style.css for the production server

The file is renamed to style.css and copied into the ./public/assets folder

## .env
There are 2 .env files containing variable for the port for the application
These are copied to the root folder of the app and renamed to .env
Next there is a file called pm2.config.js, it will be used to set some options to allow pm2 to require dotenv/config

pm2 will now start pm2.config.js instead of server.js
depending ob the used .env file, another port will be used to host the app





# HighLevel-configuratie-dtap
configuration files for test and production environments

There are 2 css files, depending on the deployment environment the Jenkins pipeline selects the required version and copies it into the correct folder on the targeted system

- Test.style.css for the testserver
- Prod.style.css for the production server

The file is renamed to style.css and copied into the ./public/assets folder

helpful node commands to make sure that our project runs smoothly:

nvm ls => shows all versions including current version

node -v => current version

nvm i 16.14.0 => installs the version we want for our purposes (you'll only need to install once)

nvm use 16.14.0 => switches to the installed version but doesn't make it default. if you want this to be the default version for you, the command is in the following blog post:

[Helpful Tips For Using Node/NVM](https://itnext.io/nvm-the-easiest-way-to-switch-node-js-environments-on-your-machine-in-a-flash-17babb7d5f1b)

*** 

For the Barnes and Flatiron project: the f/e server will be on localhost but the endpoint is 
/books

you can run npm run server to get the b/e server up and running. I've created a script for you. Please do take a look at the path so you see where your data is coming from. :)
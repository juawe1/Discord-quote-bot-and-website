# Discord-quote-bot-and-website

The Discord bot can take inputs from users by using a command. These inputs are then inserted into a mongoDB database.

The nodeJS application has an api written with express which has an endpoint that will trigger the action of reading the quotes from the mongoDB database.
These quotes are returned to the frontend where they are displayed in the browser.

The frontend was written with plain HTML, CSS and JS to begin with but I rewrote it with react as a challenge and a starting point to learn react.
It will post a request to the backend and then work through the returned array to display a list of quotes. 

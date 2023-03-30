# Movie-Fanatic

## Code Louisville Web/Dev2 Project

## Special Requirements

In order to run properly, mentors will need to install the following...

1. Express.js. I coded on version 4.18.2
2. Nodemon. I coded on version 2.0.20

After these packages are installed, you must run "npm start" in the code terminal and the project will display in your browser at "localhost:3000".

## Please Note

I am aware that the API key is visible in the code and that this is typically frowned upon. Currently, the browser needs it to function. I would like to continue with this project after class ends and find a way to hide it using the Express server, but for now this was a throwaway key for a free API so I am not worried about it.

## About the Project

Movie Fanatic is a website meant to emulate the presentation of a streaming app such as Dinsey+ or HBOMax. There are 3 main pages:

1. HOME PAGE: This page features multiple arrays of films pulled from the API provided by the Movie Database, or TMDB.org. Even though the films cannot actually be played, they are clickable.

2. ABOUT PAGE: If you click on a movie on the homepage, you are taken to another page that tells you all about the movie you selected. The page is populated by using the ID of the movie in the TMDB API. Trailers and recommendations for similar movies are also available using fetch calls.

3. CONTACT PAGE: This page features a contact form that uses regular expressions to validate the input for username, email, phone number, and zip code. It is not actually a functioning SMTP request, and when you click SEND a popup will appear telling you as much.

## Project Features

For this project, I have elected to include the following 4 features from the Web/Dev 2 requirement list:

1. "Use arrays to store and retrieve information that is displayed in your app." I have created arrays using spread operators on the homepage that pull in data from the TMDB API. This data is stored and presented as a scrollable and clickable selection of movies.

2. "Use a regular expression to validate user input and prevent any invalid input." My contact form only allows a username between 6 and 20 characters, the email requires an "@" and a ".", the phone number must be 10 digits with dashes only, and the zip code must be 5 digits. If any of the inputs are invalid, a red message will appear telling the user about the problem and will disappear once the criteria listed above are met.

3. "Retrieve data from a third party API and use it to display something in your app." My homepage displays small movie images and movie names, and the about page displays hi-res art, genres, release dates, descriptions, and cast list. All of this information is pulled from the TMDB API and targeted using the instructions provided by them.
    
4. "Create a node.js web server and serve at least one rout in addition to index.html." My app uses Express.js to serve 3 html routes and display them on localhost:3000. Index.html, about.html, and contact.html.

## Media Breaks

This project displays differently for desktop, tablet, and mobile. On desktop, the arrays on the homepage have clickable forward and backward buttons that allow the user to scroll through the movies, but in tablet and mobile views, those buttons are removed since users would using their fingers to scroll. The size of text and buttons changes, and in mobile everything stacks from rows to columns in order to accommodate the smaller screen.

Please note that the scrolling feature does not work on a desktop when simply shrinking the browser to tablet and mobile size, but when "inspected" using dev tools and playing with it there on the smaller sized viewports, the scrolling feature works just fine.

## Brian Kelly, Code Louisville, 2023.
# WDI-Project 2
# General Assembly Project 2 : Node JS Application

## Goal: To produce a full stack web application using Node JS

## Technologies used

* Node JS
* Ejs
* CSS Frameworks
* Javascript (ECMAScript6) + jQuery
* GitHub

## My Site - Nibble

![screenshot1](/screenshots/screenshot1.png)

### Site overview
Nibble is a restaurant review site where users can create, edit and leave reviews of restaurants. Each restaurant has it's own page where users can view previous comments as well as add there own (provided they are signed in).

### User journey
1. On entering the site users can view details of any of the restaurants including the comments made by other users. Users can sign up or log on using the links in the navigation bar.
![screenshot3](/screenshots/screenshot3.png)

2. Once they have logged in users can post comments and ratings on each of the restaurants.
![screenshot2](/screenshots/screenshot2.png)

3. Users can view and amend their profile as well as delete any of the comments they have made using the profile screen.
![screenshot4](/screenshots/screenshot4.png)
![screenshot5](/screenshots/screenshot5.png)

4. Only logged in users are able to make comments or add, edit or remove restaurants from the site.
![screenshot6](/screenshots/screenshot6.png)


### Process

To begin I identified users and restaurants as my primary resources. For each of these I planned the restful routes that I would need to create in order and began wireframing the look of the site.
![planning](/screenshots/planning.jpg)

I started by creating the restful routes and model for the restaurant resource deciding that the homepage would be the index view. After adding the ability to create, show individual restaurants, edit and delete restaurants I moved onto the users. Once I had the same routes for users completed I added in user authentication and sessions.

Once this was complete I moved onto comments which I stored as an array of objects within the restaurant resource. Each object had createdBy and the comment itself as keys so that I could later on show the name of the user against each comment and give users the ability to delete their comments.

Finally I added the ability to up vote and down vote the restaurant when writing a review and created a function to store these are part of that restaurants record.

### Challenges

When I first started this project I didn't spend enough timing planning and ultimately had to take a step back and rethink my approach. After taking some time and properly planning what I needed to produce I broke the project into small manageable jobs and worked through each part one at a time. Ensuring after each stage that the functionality I was producing was working correctly before moving on.

Adding the ability to make comments and assigning those comments to the user that made them was also a challenge and took some time to get right. I was really pleased when I completed the feature feature as I feel it really brings the project to life.

### Wins

Once I broke the project into small manageable jobs and functions it became much more straightforward. Adding the ability to show all of the comments made by a user and the delete function to these comments was a major success for me, especially considering the problems I had at the start of the project.
I'm really happy with the overall look of the site and pleased that it's also mobile responsive.

![screenshot7](/screenshots/screenshot7.png)

## Future features

If I had more time I would add more security to the restaurant resource so that only the user who created that restaurant would be able to amend it's record. I would also add a feature to allow users to view the comments made by other users and perhaps look at a system of achievements to encourage users to write multiple reviews.

# WDI Project 2 - Nibble <img style='float: right' src='https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png'>
---
<a href='https://wdi-nibble.herokuapp.com/'>
<img style='width: 100%;' src='/screenshots/nibble_logo.png' alt='logo screenshot'></a>

### Project Overview and Motivation
Nibble is a full stack restaurant review site where users can add, review and comment on restaurants.

This was my second project as part of the General Assembly Web Development Immersive course. The objective was to build a full stack web application using Node.js.

### Timeframe
1 week (March 2018)

---

### Technologies used

* Node.js
* Express
* EJS
* Materialize
* MongoDB
* Mongoose
* Github

---

### User Journey

On entering the site users can view details of any of the restaurants including the comments made by other users. Users can sign up or log on using the links in the navigation bar.

![screenshot3](/screenshots/screenshot3.png)

Once they have logged in users can post comments and ratings on each of the restaurants.

![screenshot2](/screenshots/screenshot2.png)

Users can view and amend their profile as well as delete any of the comments they have made using the profile screen.

![screenshot5](/screenshots/screenshot5.png)

Only logged in users are able to make comments or add, edit or remove restaurants from the site.

![screenshot6](/screenshots/screenshot6.png)

---

### Approach

To begin I identified users and restaurants as my primary resources. For each of these I planned the restful routes that I would need to create in order and began wireframing the look of the site.

![planning](/screenshots/planning.jpg)

I started by creating a model for the restaurant resource and then moved onto each of the restful routes. Once I had completed this I moved onto the user resource and added in authentication.

Finally I added the ability to up vote and down vote the restaurant when writing a review and created a function to store these are part of that restaurants record.

### Linking Comments to Users

In order to link a comment to the user that created it I used an embedded reference to the user model. This meant that if a user updated their username or profile picture all of their comments would also be updated.

```
const restaurantSchema = new mongoose.Schema({
  restaurantName: { type: String, required: true },
  img: String,
  address: String,
  city: String,
  postcode: String,
  cuisine: String,
  upVotes: { type: Number, default: 0 },
  downVotes: { type: Number, default: 0 },
  comments: [{
    comment: String,
    rating: String,
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
  }]
});
```
---

### Challenges

When I first started this project I didn't spend enough timing planning and ultimately had to take a step back and rethink my approach. After taking some time to properly map out what I needed to produce it was easy to brake the project into small manageable jobs. I tried to make sure that after each stage the code I had written was working correctly before moving on.


### Wins

Adding the ability to show all of the comments made by a user and the delete function to these comments was a major success for me, especially considering the problems I had at the start of the project.
I'm really happy with the overall look of the site and pleased that it's also mobile responsive.

![screenshot7](/screenshots/screenshot7.png)

---

### Future features

If I had more time I would add more security to the restaurant resource so that only the user who created that restaurant would be able to amend it's record. It would also be good to add some achievements/accomplishments to encourage users to write multiple reviews.

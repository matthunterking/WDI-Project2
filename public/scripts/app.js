$(document).ready(() => {
  console.log('running the app.js');
  let rating = 'i';

  $('.upvote').on('click', function(){
    if(rating === 'D') {
      $('.downvote').toggleClass('red');
      $('.downvote').toggleClass('grey');
      $('.upvote').toggleClass('green');
      $('.upvote').toggleClass('grey');
    } else if (rating === 'i') {
      $('.upvote').toggleClass('grey');
      $('.upvote').toggleClass('green');
    }
    $('.rating').val('U');
    rating = 'U';
  });

  $('.downvote').on('click', function(){
    if(rating === 'U') {
      $('.upvote').toggleClass('green');
      $('.upvote').toggleClass('grey');
      $('.downvote').toggleClass('red');
      $('.downvote').toggleClass('grey');
    } else if (rating === 'i') {
      $('.downvote').toggleClass('grey');
      $('.downvote').toggleClass('red');
    }
    $('.rating').val('D');
    rating = 'D';
  });

});

// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

document.addEventListener('DOMContentLoaded', function() {

  var form = document.querySelector('.new_tweet');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    $.ajax({
      url: form.getAttribute('action'),
      method: form.getAttribute('method'),
      data: $(form).serialize(),
      dataType: 'html'
    })
    .done(function(dataResponse) {
      var tweetsList = document.querySelector('.tweets');
      tweetsList.append(dataResponse);
      console.log("hmtl resposne here");
    });
  });
  console.log("html request sent");
});

//   var tweetsList = document.querySelector('.tweets');
//   tweetsList.value = "";
//
//   var listItem = document.createElement('li');
//   listeItem.className = 'tweet';
//   listItem.innerHTML = dataResponse.message;
// tweetsList.append(listItem);

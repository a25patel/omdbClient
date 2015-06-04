var h1 = document.createElement('h1');
h1.innerHTML = "OMDB Movies about ";
document.body.appendChild(h1);

var button = document.getElementById('search');
button.addEventListener('click', function(){

// new XHR
var describe = document.getElementById('describe').value;

var xhr = new XMLHttpRequest();
xhr.open('get', 'http://www.omdbapi.com/?s=' + describe);
// xhr event listener
xhr.addEventListener('load', function(){

  var response = xhr.response;
  var responseData = JSON.parse(response);

  for(var i = 0; i< responseData.Search.length; i++){

    var a = document.createElement('a');
    a.innerHTML = responseData.Search[i].Title;
    a.href = '/show.html?i=' + responseData.Search[i].imdbID;   //'html what i want to show' object pathway

    //<p><a href='/show.html?'>Mystic Pizza</a></p>

    var p = document.createElement('p');
    //p.innerHTML = responseData.Search[i].Title;
    p.appendChild(a);
    document.body.appendChild(p);
  }

});


// send xhr
xhr.send();
});

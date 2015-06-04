var parsing = function (){
  var object = {};
  var url = document.location.search ;
  var urlReplace = url.replace('?', '');
  var urlSplit = urlReplace.split('&');
  for (i=0; i< urlSplit.length; i++){
    var urlSeperate= urlSplit[i].split('=');
    object[urlSeperate[0]] = urlSeperate[1]
  }
    return object;
};

var imdbID = parsing();

var xhr = new XMLHttpRequest();
xhr.open('get' , 'http://www.omdbapi.com/?i=' + imdbID.i);
xhr.addEventListener('load', function(){
  console.log(xhr.response);
  var data=document.getElementById('data');
  var dataParse = JSON.parse(xhr.response);
  data.innerHTML = (dataParse.Title);  //dataParse.(what info)
});
xhr.send();

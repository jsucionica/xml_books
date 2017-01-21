var wrapp = document.getElementById('wrapp');
window.addEventListener('load', start);

function start() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.addEventListener('readystatechange', function() {
        if (xmlHttp.status == 200 && xmlHttp.readyState == 4) {
            getData(xmlHttp);
        }

    });
    xmlHttp.overrideMimeType('text/xml')
    xmlHttp.open('GET', 'books.xml', true);
    xmlHttp.send(null);
}

function getData(xmlHttp) {
  var template = "";
    var newDocument = xmlHttp.responseXML;
    var root = newDocument.children[0];
    var books = root.getElementsByTagName('book');
    for (var i = 0; i < books.length; i++) {
      template += `
  <div class='book'>
  <img src='${books[i].getElementsByTagName('thumb')[0].innerHTML}'>
  <p>Name of the book : ${books[i].getElementsByTagName('title')[0].innerHTML}</p>
  <p>Author : ${books[i].getElementsByTagName('author')[0].innerHTML}</p>
  <p>Year : ${books[i].getElementsByTagName('year')[0].innerHTML}</p>
  </div>`;
    }

    wrapp.innerHTML = template;
}

var main = document.createElement('main');

var pageBody = document.getElementsByTagName('body')[0];

var scriptTag = document.getElementsByTagName('script')[0];

pageBody.insertBefore(main,scriptTag);

var header = document.createElement('h1');

main.appendChild(header);

var ul = document.createElement('ul');

main.appendChild(ul);

var navLi = document.createElement('li');

ul.appendChild(navLi);

var headerText = document.createTextNode('This is the header text!');

var listItemText = document.createTextNode('This is the list item');

header.appendChild('headerText');

navLi.appendChild('listItemText');
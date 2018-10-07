var main = document.createElement('main');

var pageBody = document.getElementsByTagName('body')[0];

var scriptTag = document.getElementsByTagName('script')[0];

pageBody.insertBefore(main,scriptTag);

var header = document.createElement('h1');

main.appendChild(header);

var navigation = document.createElement('ul');

main.appendChild(navigation);

var navLi = document.createElement('li');

navigation.appendChild(navLi);

var headerText = document.createTextNode('This is the header text!');

var listItemText = document.createTextNode('This is the list item');

header.appendChild('headerText');

navLi.appendChild('listItemText');

header.classList.add("blue")

main.classList.add("text-center")
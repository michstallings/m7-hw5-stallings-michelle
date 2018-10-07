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

header.innerHTML ='This is the header text!';

navLi.innerHTML = 'This is the list item';

header.classList.add("blue");

main.classList.add("text-center");

var link = document.createElement('a');

var linkListItem = document.createElement('li');

linkListItem.appendChild(link);

navigation.appendChild(linkListItem);

var linkText = document.createTextNode('This is my link')

link.appendChild(linkText)
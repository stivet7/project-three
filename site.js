'use strict';
// remove the 'nojs' class and add the 'js' class
var html = document.querySelector('html');
html.classList.remove('nojs');
html.classList.add('js');

var navigation = document.querySelector('#navigation');
var nav_list = document.querySelector('.nav');

// build the outer heading element
var nav_heading = document.createElement('h2');
// build the inner link element
var menu_link = document.createElement('a');
menu_link.textContent = 'Menu';
menu_link.setAttribute('id', 'menu-button');
menu_link.setAttribute('href', '#null');
menu_link.setAttribute('tabindex', '1');
// append the menu_link to the heading element
nav_heading.append(menu_link);

// append the nav_heading to #navigation
navigation.insertBefore(nav_heading, nav_list);

// Listen for clicks on #menu-button and toggle the visible class
var menu_button = document.querySelector('#menu-button');
menu_button.addEventListener('click', function(e) {
  nav_list.classList.toggle('visible');
  e.preventDefault();
});

(document).ready(function(){
  ('.thumb, a').click(function(e){
    e.preventDefault();
    ('.imgbox, img').attr("src", (this).attr("href"));
  });
});

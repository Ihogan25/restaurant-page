import pages from '/home/zillywilly/dev_projs/restaurant-page/dist/content';
const content = document.getElementById('content');
const navbar = document.createElement('nav');
navbar.classList.add('nav-bar');
navbar.innerHTML = `<button id="home" class="active">Home</button> 
                    <button id="menu">Menu</button> 
                    <button id="contact">Contact</button>`
content.appendChild(navbar);

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');

homeBtn.addEventListener('click', pages.pages.home);
menuBtn.addEventListener('click', pages.pages.menu);
contactBtn.addEventListener('click', pages.pages.contact);



import pages from '/home/zillywilly/dev_projs/restaurant-page/dist/content';
const content = document.getElementById('content');
const navbar = document.createElement('nav');
const mainContent = document.createElement('div');
navbar.classList.add('nav-bar');
navbar.innerHTML = `<button id="home" class="active">Home</button> 
                    <button id="menu">Menu</button> 
                    <button id="contact">Contact</button>`;

mainContent.classList.add('main-content');
content.appendChild(navbar);
content.appendChild(mainContent);

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');
pages.pages.load()
homeBtn.addEventListener('click', pages.pages.home);
menuBtn.addEventListener('click', pages.pages.menu);
contactBtn.addEventListener('click', pages.pages.contact);



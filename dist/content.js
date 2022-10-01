import '../src/styles.css'

const pages = (() => {
    //home page
    const home = () => {
        const homeBtn = document.getElementById('home');
        const title = document.createElement('h1');
        const mainContent = document.querySelector('.main-content'); 
        const btns = document.querySelectorAll('button');
        const info = document.createElement('p');
        const hours = document.createElement('div');

        if(homeBtn.classList.contains('active') === true){
            console.log('on home page');
        }
        else if (homeBtn.classList.contains('active') === false){
            btns.forEach(btn => {
                btn.classList.remove('active');
            })

            if(mainContent.hasChildNodes()) {
                while (mainContent.firstChild) {
                    mainContent.removeChild(mainContent.firstChild);
                }
            };
            
            title.textContent = 'Zillys Coffee';
            info.textContent = "Zillys has the best coffee! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
            hours.innerHTML = `
            Sunday: 8am - 8pm
            <br>
            Monday: 6am - 6pm
            <br>
            Tuesday: 6am - 6pm
            <br>
            Wednesday: 6am - 6pm
            <br>
            Thursday: 6am - 10pm
            <br>
            Friday: 6am - 10pm
            <br>
            Saturday: 8am - 10pm`;            
            mainContent.appendChild(title)
            mainContent.appendChild(info);
            mainContent.append(hours);
            homeBtn.classList.add('active');
        }
    };

    //menu page
    const menu = () => {
        const mainContent = document.querySelector('.main-content'); 
        const btns = document.querySelectorAll('button');
        const title = document.createElement('h1');
        const info = document.createElement('p');
        const items = document.createElement('div');
        const menuBtn = document.getElementById('menu');

        if(menuBtn.classList.contains('active') === true){
            console.log('on menu page');
        }
        else if (menuBtn.classList.contains('active') === false){
            btns.forEach(btn => {
                btn.classList.remove('active');
            
            })
            if(mainContent.hasChildNodes()) {
                while (mainContent.firstChild) {
                    mainContent.removeChild(mainContent.firstChild);
                }
            };
            title.textContent = 'Menu';
            info.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolor tempore, quidem error expedita, dolorum minus fuga rerum molestias aperiam a consectetur vel. Nisi porro repudiandae, velit nulla mollitia laboriosam maxime quaerat consequatur dolore expedita quasi illum ab provident nihil'
            items.innerHTML = `
            <table>
                <tr>
                    <td>Expresso</td>
                    <td>$2.99</td>
                </tr>
                <tr>
                    <td>Bagel</td>
                    <td>$5.99</td>
                </tr>
                <tr>
                    <td>Coffee</td>
                    <td>$4.99</td>
                </tr>
            </table>`
            mainContent.appendChild(title);
            mainContent.appendChild(info);
            mainContent.appendChild(items);
            menuBtn.classList.add('active');
        }    
    };

    //contact page
    const contact = () => {
        const mainContent = document.querySelector('.main-content'); 
        const btns = document.querySelectorAll('button');
        const title = document.createElement('h1');
        const contactBtn = document.getElementById('contact');
        const info = document.createElement('div');
        const location = document.createElement('p')

        if(contactBtn.classList.contains('active') === true){
            console.log('on contact page');  
        }
        else if (contactBtn.classList.contains('active') === false){
            btns.forEach(btn => {
                btn.classList.remove('active');
            })
            if(mainContent.hasChildNodes()) {
                while (mainContent.firstChild) {
                    mainContent.removeChild(mainContent.firstChild);
                }
            };
            title.textContent = 'Contact Us';
            info.innerHTML = '<p>zillyscoffee@funkyemail.cof</p> <br> <p>1+(123)-(593)-(1234)</p>';
            location.textContent = '42 Cedarcreek Dr, 35653, Funkyville Tx.'
            mainContent.appendChild(title);
            mainContent.appendChild(info);
            mainContent.appendChild(location);
            contactBtn.classList.add('active');
        }
    };
    //load home page when first open site
    const load = () => {
        const mainContent = document.querySelector('.main-content');
        const title = document.createElement('h1'); 
        const info = document.createElement('p');
        const hours = document.createElement('div');
        title.textContent = 'Zillys Coffee';
            info.textContent = "zillys has the best coffee! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
            hours.innerHTML = `
            Sunday: 8am - 8pm
            <br>
            Monday: 6am - 6pm
            <br>
            Tuesday: 6am - 6pm
            <br>
            Wednesday: 6am - 6pm
            <br>
            Thursday: 6am - 10pm
            <br>
            Friday: 6am - 10pm
            <br>
            Saturday: 8am - 10pm`;            
            mainContent.appendChild(title)
            mainContent.appendChild(info);
            mainContent.append(hours);

    }
    return {
      home,
      menu,
      contact,
      load
    };
  })();

  export default { pages };
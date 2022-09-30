import '../src/styles.css'

// const navBar = document.querySelector('nav-bar');
        // const content = document.getElementById('content');
        // const div = document.createElement('div');


const pages = (() => {
    //home page
    const home = () => {
        const homeBtn = document.getElementById('home');
        if(homeBtn.classList !== 'active'){
            homeBtn.classList.add('active');
        }
        else if (homeBtn.className() === 'active'){
            console.log('on home page');
        }
        console.log('home');
    };

    //menu page
    const menu = () => {
        
        const menuBtn = document.getElementById('menu');
        if(menuBtn.classList !== 'active'){
            menuBtn.classList.add('active');
        }
        else if (menuBtn.className() === 'active'){
            console.log('on menu page');
        }    
        console.log('menu');
    };

    //contact page
    const contact = () => {

        const contactBtn = document.getElementById('contact');
        if(contactBtn.classList !== 'active'){
            contactBtn.classList.add('active');
        }
        else if (contactBtn.className() === 'active'){
            console.log('on contact page');
        }
        console.log('contact');     
    };
    //clear function to clear page to be able to load new content
    
    return {
      home,
      menu,
      contact
    };
  })();

  export default { pages };


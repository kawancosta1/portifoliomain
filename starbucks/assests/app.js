function imgslider(anything){
    // starbucks é a classe
    document.querySelector('.starbucks').src = anything;
  
}

// function changecolor(color){
    
//     const circle = document.querySelector('.circle');
//     circle.style.background = color;   

    
// }
// function changeback(anything){
    
//     const circle = document.querySelector('.circle');
//     circle.style.background = url(anything);   

    
// }
// DARK MODE



    
    

    function changeClasses(){
       seta.classList.toggle('dark-mode');
        p.classList.toggle('dark-mode');
        h2.classList.toggle('dark-mode');
        body.classList.toggle('dark-mode');
        section.classList.toggle('dark-mode');
        button.classList.toggle('dark-mode');
        barra.classList.toggle('dark-mode');
        line1.classList.toggle('dark-mode');
        line2.classList.toggle('dark-mode');
        line3.classList.toggle('dark-mode');
    }
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    const line3 = document.querySelector('.line3');

    const barra = document.getElementById('barra');
    const seta = document.getElementById('seta');
    const circle = document.getElementById('circle2')
    const p = document.getElementsByTagName('p')[0];
    const h2 = document.getElementById('cof');
   const button = document.getElementById('contraste');
    const body = document.getElementsByTagName('body')[0];
    const section = document.getElementsByTagName('section')[0];
    
    button.addEventListener('click', changeClasses);
    // M.E.N.U!!!!!!!!







    class MobileNavbar {
        // CONSTRUTOR
        constructor(mobileMenu, navList, navLinks) {
          this.mobileMenu = document.querySelector(mobileMenu);
          this.navList = document.querySelector(navList);
          this.navLinks = document.querySelectorAll(navLinks);
          this.activeClass = "active";
    //   pro this não perder o objeto
          this.handleClick = this.handleClick.bind(this);
        }
    
    handleClick(){       
            this.navList.classList.toggle(this.activeClass);
            this.mobileMenu.classList.toggle(this.activeClass);          
            // this.animateLinks();
          
          
    }
    
    addClickEvent(){
       
    this.mobileMenu.addEventListener("click", this.handleClick);
    }
    inicia(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
    }
    const MobileNavBar = new MobileNavbar(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li",
    );
    
    
    MobileNavBar.inicia();
class bookMark {
    constructor() {
       
    }
    
    // scroll() {
    //     if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
    //         document.querySelector('nav').style.top = "0%";
    //     }
    //     elsew
    // }
    
    //switch tab
    switchTabs(p) {
        p.classList.add("red_border");
    }
    
    removeTabs(p) {
        p.forEach(item =>item.classList.remove("red_border"));
    }

    addTabContent (contents) {
        const tabItem = document.getElementById(`${contents.id}_content`);
        tabItem.classList.add('show');
    }

    removeTabContent (contents) {
       contents.forEach(item => item.classList.remove('show'));
    }

    //Toggle Nav
    addActive(x) {
        x.classList.toggle('nav-active');
    }

    //Animate links
    linkAnimate(y) {
        y.forEach((link, index) => {
           if (link.style.animation) {
               link.style.animation = '';
           }
           else {
            link.style.animation = `navLinkFade 1s ease forwards ${index/12 + 0.3}s`;
           } 
        });
    }

    //Burger Animation
    burgerAnimate(y) {
       y.classList.toggle('toggle');
    }
    
    //Show Icons
    showIcon(y) {
        y.classList.toggle('icon_show');
    }

    
    //rotate caret
    rotateCaret(y) {
        y.classList.toggle('carer-rotate');
    }

    //Display question content
    showContent(p, x) {
        x = document.getElementById(`${p.id}-p`);
         
            x.classList.add('visible');
        
            
    }

    removeContent(p, x) {
        x = document.getElementById(`${p.id}-p`);
        if (x.classList.contains('.visible')) {
            x.classList.remove('visible');
        }
        else {
            return;
        }
    }

    

}

let caret = document.querySelectorAll('.caret-span');
let burger = document.querySelector('.burger');
let tabContent = document.querySelectorAll('.tab_1');
let tabs = document.querySelectorAll('[data-tab]');
let bm = new bookMark (tabs);
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        bm.removeTabs(tabs);
        bm.switchTabs(tab);
        bm.removeTabContent(tabContent);
        bm.addTabContent(tab);
    });
});

burger.addEventListener('click', () => {
    let nav = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links li');
    let icon = document.querySelector('.icon_list');
    bm.addActive(nav);
    bm.linkAnimate(navLinks);
    bm.burgerAnimate(burger);
    bm.showIcon(icon);
});

caret.forEach(caret => {
    caret.addEventListener('click', () => {
        let p = document.querySelectorAll('.p');
        p.forEach(p => {
            bm.removeContent(caret, p);
            bm.showContent(caret, p);
            
        });
        bm.rotateCaret(caret);
    });
});

// window.addEventListener('scroll', () => {
//     bm.scroll()
// });

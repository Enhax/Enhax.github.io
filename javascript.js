/* ----- MENU_BURGER ----- */

let navLinks = document.getElementById('navLinks');
        
        function openMenu(){
            navLinks.style.right='0px';
        }

        function closeMenu(){
            navLinks.style.right='-190px';
        }


    /* ----- PARALAX_EFFECT ----- */

        const paralax = document.getElementById('paralax');

        window.addEventListener('scroll', ()=> {
        let value = window.scrollY;
        paralax.style.marginTop = value * 1.1 + 'px';
        });

        const treeLeft = document.getElementById('treeleft');

        window.addEventListener('scroll', ()=> {
        let valueX = window.scrollY;
        treeLeft.style.left = valueX * -1.1 + 'px';
        });

        const treeRight = document.getElementById('treeright');

        window.addEventListener('scroll', ()=> {
        let valueX = window.scrollY;
        treeRight.style.right = valueX * -1.1 + 'px';
        });

// ---------- SUB_MENU ----------

let chevronDown = document.getElementById('chevron-down')
let subMenu = document.querySelector('.submenu')

chevronDown.onclick = function(){
    subMenu.classList.toggle('submenu-height');
    

    if(chevronDown.classList.contains('first')){
        chevronDown.style.transform = 'rotate(0deg)'
        chevronDown.classList.remove('first')
        chevronDown.classList.add('second')
    }
    else{
        chevronDown.style.transform = 'rotate(180deg)'
        chevronDown.classList.remove('second')
        chevronDown.classList.add('first')
    }
}


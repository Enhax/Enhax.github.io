/* ----- MENU_BURGER ----- */

let navLinks = document.getElementById('navLinks');
        
        function openMenu(){
            navLinks.style.right='0px';
        }

        function closeMenu(){
            navLinks.style.right='-190px';
        }

         document.addEventListener('click', (e)=>{
            if(e.target != navLinks && e.target != document.getElementsByTagName('LI') && e.target != document.getElementById('openIcon') && e.target != document.getElementById('openIconCV') && e.target != document.getElementById('openIconContact') && e.target != document.getElementById('chevron-down') && e.target != document.getElementsByTagName('A')){
                navLinks.style.right='-190px';
            }
        })
 

    /* ----- PARALLAX_EFFECT TREES DISABLED IN MOBILE MODE ----- */

        const parallax = document.getElementById('parallax');

        window.addEventListener('scroll', ()=> {
        let value = window.scrollY;
        parallax.style.marginTop = value * 1.1 + 'px';
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

document.addEventListener('click', (e)=>{
    
    let div = document.querySelector('.submenu')
    let ul = document.querySelector('.submenu > ul')
    let li = document.querySelectorAll('.submenu > ul > li')
    let a = document.querySelector('.submenu > ul > li > a')
/*     console.log(Array.from(li).filter(test => !e.target)); */
    if(e.target != div && e.target != ul && e.target != li && e.target != a && e.target != chevronDown){
        subMenu.classList.remove('submenu-height');
        
        if(chevronDown.classList.contains('first')){
            chevronDown.style.transform = 'rotate(0deg)'
            chevronDown.classList.remove('first')
            chevronDown.classList.add('second')
        }
    }
})


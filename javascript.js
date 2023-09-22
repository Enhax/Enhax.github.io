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


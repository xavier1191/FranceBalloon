let counter = 1;
        setInterval(function(){
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if(counter > 4){
                counter = 1;
            }
        }, 5000);



        let span = document.getElementsByClassName('right');
        let div = document.getElementsByClassName('fly');
        let l = 0;
        span[1].onclick = ()=> {
            l++;
            for(let i of div)
            {
                if (l==0) {i.style.left = "0px";}
                if (l==1) {i.style.left = "-740px";}
                if (l==2) {i.style.left = "-1480px";}
                if (l==3) {i.style.left = "-2220px";}
                if (l==4) {i.style.left = "-2960px";}
                if (l==5) {i.style.left = "-3700px";}
                if (l==6) {i.style.left = "-4440px";}
                if (l==7) {i.style.left = "-5180px";}
                if (l==8) {i.style.left = "-5920px";}
                if (l==9) {i.style.left = "-6660px";}
                if (l > 3) {l = 1;}
            }
        }

        span[0].onclick = ()=> {
            l--;
            for(let i of div)
            {
                if (l==0) {i.style.left = "0px";}
                if (l==1) {i.style.left = "-740px";}
                if (l==2) {i.style.left = "-1480px";}
                if (l==3) {i.style.left = "-2220px";}
                if (l==4) {i.style.left = "-2960px";}
                if (l==5) {i.style.left = "-3700px";}
                if (l==6) {i.style.left = "-4440px";}
                if (l==7) {i.style.left = "-5180px";}
                if (l==8) {i.style.left = "-5920px";}
                if (l < 0) {l = 0;}
            }
        }


        
        let toggleButton = document.getElementsByClassName('toggle-button')[0];
        let navbarLinks = document.getElementsByClassName('navbar-links')[0];

        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active')
        }) 
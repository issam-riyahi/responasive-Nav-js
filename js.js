//Main Variable 
let nav=document.querySelector('.nav'),
    menuicon=document.querySelector('.menu-icon'),
    span1=document.querySelector('.s1'),
    span2=document.querySelector('.s2'),
    span3=document.querySelector('.s3'),
    navliste=document.querySelectorAll('.nav-list li');


    menuicon.addEventListener('click',function(){
        nav.classList.toggle("nav-active");
          menuicon.classList.toggle('active');
        navliste.forEach((links ,index) => {
            if(links.style.animation){
                links.style.animation='';
                
            }
            else{
                links.style.animation=`navname 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })
        

    })
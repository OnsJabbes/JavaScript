const toggle = document.getElementById ('sun1') ; 
const body = document.querySelector('body'); 

toggle.addEventListener('click' , function(){
    this.classList.toggle('bi-moon'); 
    if (this.classList.toggle('bi-brightness-high')) {
        body.style.background= 'white' ; 
        body.style.color= 'black' ; 
        body.style.transition = '2s' ; 
    }else{
        body.style.background= 'black' ; 
        body.style.color= 'white' ; 
        body.style.transition = '2s' ; 

    }
})

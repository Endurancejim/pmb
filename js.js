// NAV BAR

function changeBg() {
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 150 ){
        navbar.classList.remove('bgColor');
        document.getElementById('link_bank').style.color = 'white';
        document.getElementById('link_about').style.color = 'white';
        document.getElementById('link_csr').style.color = 'white';
        document.getElementById('link_sus').style.color = 'white';
       document.getElementById('link_open').style.color = 'white';
       document.getElementById('link_con').style.color = 'white';
    } else {
        navbar.classList.add('bgColor');
       document.getElementById('link_bank').style.color = 'black';
       document.getElementById('link_about').style.color = 'black';
       document.getElementById('link_csr').style.color = 'black';
       document.getElementById('link_sus').style.color = 'black';
       document.getElementById('link_open').style.color = 'black';
       document.getElementById('link_con').style.color = 'black';
    }

}

window.addEventListener('scroll', changeBg)




// internet banking collapse

const accodion = document.getElementsByClassName('contentBx');

for (i = 0; i<accodion.length; i++){
  accodion[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}




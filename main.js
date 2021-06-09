 const toggle = document.querySelector('.toggle');
 const main = document.querySelector('.main');
 const navigation = document.querySelector('.navigation');

 function toggleNavBar(){
     navigation.classList.toggle('active');
     main.classList.toggle('active');
     toggle.classList.toggle('active');
 }

 toggle.addEventListener('click', toggleNavBar);

 
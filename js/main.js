const nightBtn = document.querySelector('#night-mode-button');

nightBtn.addEventListener('click',(e)=>{

   document.body.classList.toggle('night');

   const catsImg = document.querySelectorAll('.card__img img');

   if(document.body.classList.contains('night')){

      e.target.textContent = 'day mode';

      catsImg.forEach((item)=>{

         item.src = '/img/white-uiu.png';

      })
      
   }else{
      
      e.target.textContent = 'night mode';
      
      catsImg.forEach((item)=>{

         item.src = '/img/black-uiu.png';

      })
      

   }

})
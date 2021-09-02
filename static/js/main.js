
   let btn =document.getElementById('btn');
   btn.addEventListener('click',function(){
       location.reload();
   })
  
   addEventListener('keypress',function(e){
       if(e.key=='Enter'){
       location.reload();}
   })
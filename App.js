
let tabs = document.querySelectorAll('.tabs a')

for(let i = 0; i < tabs.length ; i++){
  
    tabs[i].addEventListener('click', function(e){
  
        let li = this.parentNode
        let ul = this.parentNode.parentNode

        if(li.classList.contains('active')){
             return false
        }
      
        ul.querySelector('.active').classList.remove('active')
        li.classList.add('active')
   

  
    })
}
let projects = document.querySelectorAll('.project');

alert('hello')

function showDescription(){
    this.classList.toggle('active')
}


for(let project of projects){
  project.addEventListener('mousedown', showDescription)
}

document.addEventListener('click', function(e){
   if(!e.target.closest('.project')){
    for(let project of projects){
        project.classList.remove('active')
      }
   }
})

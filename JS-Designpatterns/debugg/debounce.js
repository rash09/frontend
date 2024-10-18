function debounce(func, wait){
  let timeout;

  return function(...args){
    clearTimeout(timeout);

    timeout=setTimeout(()=>func.apply(this, args),wait)
  }

}
let msgs=document.getElementById('msg');
let inpt=document.getElementById('search');

const handlesearch=debounce(function(event){
  msgs.innerHTML="searching for "+event.target.value
}, 300);

inpt.addEventListener('input',handlesearch);


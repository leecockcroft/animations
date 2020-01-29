

const state = document.readyState;
const loader = document.querySelector('.loading')
const wrapper = document.getElementById('wrapper')

document.onreadystatechange = function () {
  if(document.readyState === "complete"){
loader.classList.add('test')

  }
}

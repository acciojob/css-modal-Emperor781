//your JS code here. If required.
let modal=document.querySelector('#modal')
let btn=document.querySelector('#openModal');
let body=document.querySelector('body');

// body.style.backgroundColor='red'
btn.addEventListener('click',()=>{
	modal.showModal();
	setTimeout(()=> body.addEventListener('click', ()=> modal.close()), 3000)
	
	
})



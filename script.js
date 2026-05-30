//your JS code here. If required.
let modal=document.querySelector('.modal')
let btn=document.querySelector('#openModal');
let body=document.querySelector('.outer');

let flag=false;
btn.addEventListener('click',()=>{
	modal.style.display='block'
	btn.style.display='none'
	flag=true
	
	
})
body.addEventListener('click', (e)=>{
	// e.preventDefault()
	if(flag){
	modal.style.display='none'
	btn.style.display='inline'
		
		
	}
})

function down() {
	modal.style.display='none'
	btn.style.display='none'
	
	
}


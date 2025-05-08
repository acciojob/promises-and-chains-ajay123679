//your JS code here. If required.
const btn=document.getElementById("btn");
btn.addEventListener("click",fun);

function fun(e){
	e.preventDefault();
	let a=document.getElementById("age").value.trim();
	let b=document.getElementById("name").value.trim();
	if(a="" || b="")
	{
		alert("Please enter valid details");
		return;
	}
	const  eligibility=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(parseInt(a)>=18)
			{
				resolve("Welcome, "+ b +". You can vote.")
			}
			else{
				reject(`oh sorry ${b}. You aren't old enough`);
			}
		},4000);
		
	});
	eligibility.then((message)=>{
		alert(message);
	})
	.catch((eroor)=>{
		alert(error);
	});
	
}

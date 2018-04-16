document.addEventListener("keyup", (event)=>{
	if (event.keyCode === 13){
		fetch("/resources", {
			method:'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				
				"request-type": 'image',
				msg: document.getElementById('image').value
			})
		}).then((response)=>{
				return response.json()
		}).then((json)=>{
			console.log(json)
		})
	}
})
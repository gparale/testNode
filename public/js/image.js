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
			if (json.status === "OK"){
				for (i=0; i < json.msg.length;i++){
					ndiv = document.createElement('img')
					ndiv.src = json.msg[i]
					ndiv.display = 'inline-block'
					document.body.appendChild(ndiv)
				}
			}
		})
	}
})
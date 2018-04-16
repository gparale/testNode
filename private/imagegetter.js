const request = require('request')

var getImage = (keyword) => {
	return new Promise((resolve, reject)=>{
		request({
			url: 'https://pixabay.com/api/?key=7246674-b37ac3e55b379cef1f626bb09&image_type=photo&q=' + encodeURIComponent(keyword),
			json: true
		}, (error, response, body)=>{
			try {
                if (!error && response.statusCode === 200) {
                    console.log(body)
                    resolve(body)
                } else {
                    reject('Image Not Found')
                }
            } catch(err) {
                reject('Image Not found')
            }
		})
	})
}

module.exports = { getImage }
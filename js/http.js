import './lib/mint.js'
import './lib/axios.js'
var http = {
	get (option) {
		return new Promise((resolve, reject) => {
			
			axios.get({
				method: 'GET',
				url: option.url,
				params: option.params || {}
			}).then ( res => {
				resolve(res)
			},err => {
				reject(err)
			})
		})
	}
}

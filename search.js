

const h = document.querySelectorAll('.searchbtn');

for(let i = 0;i<h.length;i++){
	h[i].addEventListener('click', function(event){
		if(`${event.target.innerText}`=="Search"){
		var input = document.getElementByName('in')
		
		<! –– input the search parameters into a URL to retreive the information to in JSON format ––>
			
		GBAPI = require('/search.js'); gb = new GBAPI('ee41388b110b8eeb546964c09ff9f87f87767ef9');
		gb.platforms()


		var request = require('request')
			, base_url = 'http://giantbomb.com/api/search/'
			,	qs = require('qs')

		function GBAPI (key, baseLimit){
			this.apiKey = key
			this.baseLimit = baseLimit || 100
			
		}

		GBAPI.prototype.buildUrl = function( path, params ){
			if( typeof params !== 'object' )
				params = {}
			params.api_key = this.apiKey
			params.query = input
			params.limit = params.limit || this.baseLimit
			params.format  = 'json'
			
			if( params.page ){ 
				params.offset = (params.page - 1)*this.baseLimit
				delete params.page
			} else {
				params.offset = params.offset || 0
			}

			var url = base_url
			url += path+"?"
			url += qs.stringify(params)
			return url
		}			
	});
}
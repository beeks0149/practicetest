let input = "";

const output = document.querySelector('.out');
const h = document.querySelectorAll('.searchbtn');
const j = document.querySelectorAll('.detailbtn');

for(let i = 0;i<h.length;i++){
	h[i].addEventListener('click', function(event){
		if(`${event.target.innerText}`=="Search"){
		input = search
			
		GBAPI = require('/search.js'); gb = new GBAPI('ee41388b110b8eeb546964c09ff9f87f87767ef9', 3);
		gb.platforms()


		var request = require('request')
			, base_url = 'http://api.giantbomb.com/search/'
			,	qs = require('qs')

		function GBAPI (key, baseLimit, cacheHours){
			this.apiKey = key
			this.baseLimit = baseLimit || 100
			this.cacheHours = cacheHours || 0
			this.cache = {}
			
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
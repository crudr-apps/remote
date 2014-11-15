_.mixin({
	log: function(a, b){
		if( DEBUG && console.log ){
			console.log.apply( console, arguments );
		}
	}
});
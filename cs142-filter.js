"use strict"
Array.prototype.cs142filter = function(clientData, isOK) {
	var res = [];
	for (var i = 0; i < this.length; i++){
		if(isOK(clientData,this[i])){
			res.push(this[i]);
		}
	}
	return res;
};




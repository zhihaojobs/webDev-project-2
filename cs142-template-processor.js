"use strict"
function Cs142TemplateProcessor(template){


	this.fillIn = function(dictionary){

		var list = Object.keys(dictionary);
		console.log(list);
		for (var i = 0; i < list.length; i++){
			var rep = "{{" + list[i] + "}}";
			var orig = dictionary[list[i]] ;
			template = template.replace(rep, orig);
		}
		return template;
	}
}
# mingle
an unobtrusive javascript template library

## Usage

	//html
	<div data-template="template1">
		<span data-key="name"></span> from <span data-key="location"></span>
	</div>

	//js
	var data = [
		{ name: "Bob", location: "Hermosa Beach" },
		{ name: "Jane", location: "Redondo Beach" }
	];
	var node = mingle.render('template1', data); 

	//render directly to another node
	var node = mingle.render('template1', data, $("#module")); 

	//pass in an array or an object
	var data = { name: "Bob", location: "Hermosa Beach" };
	var node = mingle.render('template1', data);

	//customize options
	mingle.options.templateAttribute = "data-tpl";
	mingle.options.keyAttribute = "data-k";

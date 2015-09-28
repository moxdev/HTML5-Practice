/*
Loop through all 'tags' from html 'li > data-tags' in '#gallery'
and create a new unordered list for the different categories
and dynamically creates the 'navbar' (see html no links in navbar)
*/

$(document).ready(function(){
	var items = $('#gallery li');
	// save '#gallery li' into variable

	var itemsByTags = {};
	// and create an empty array

	// FUNCTION: loop through tags and add image to array
	items.each(function(i) {
		var element = $(this);
		// element = 'this' which refers to the element it is currently on
		var tags = element.data('tags').split(',');
		// tags = the html data 'tags' and splits them with a ,

		element.attr('data-id', i);
		// adds the attribute 'data-id' for i (i=this) - this is for quicksand js

		$.each(tags,function(key,value) {
			var value = $.trim(value);
			// trims off white space

			if(!(value in itemsByTags)){
				itemsByTags[value] = [];
				// if value is not in 'itemsByTags' add empty value
			}
			itemsByTags[value].push(element);
			// adds image to the array

		});
	});
// =================================
	createList('All Items', items);
	// creates 'All Items' option for displaying all images

	$.each(itemsByTags, function(key, value) {
		createList(key,value);
		// creates all of the category options
	});

//=======Click Handler==============================
	$('#navbar a').on('click', function(e){
		// on-click of navbar link add event handler
		var link = $(this);
		// link = this

		link.addClass('active').siblings().removeClass('active');
		// adds active class to 'navbar a' and removes active class from any other link

		$('#gallery').quicksand(link.data('list').find('li'));
			e.preventDefault();
		// tells QuicksandJS to find all 'li' in '#gallery'
		// preventDefault stops it from following through until clicked

	});

// clicks the first link 'All Items' automatically so it will be active when site is first visited
	$('#navbar a:first').click();

// createList Function:
	function createList(text,items) {
		var ul = $('<ul>', {'class':'hidden'});
		// creates a hidden empty 'ul' div

		$.each(items, function() {
			$(this).clone().appendTo(ul)
		});
		// loops through and 'clones' the 'ul' then appends it back to the 'ul'

		var a = $('<a>', {
			html:text,
			href:'#',
			data:{list:ul}
		}).appendTo('#navbar');
		// appends new 'a' to '#navbar'
	};

});
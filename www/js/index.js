<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){                     

	$('#taptext').on("Random",function) {
	submitText();
}
    
});
fuction tapText(){
    alert!Math.round(Math.random());
}
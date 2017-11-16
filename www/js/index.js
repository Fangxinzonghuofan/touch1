<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){                     

	$('#submitButton').on("click",function() {
	submitText();
        if(random()){
            navigator.notification.beep(1);
        }
        else{
            navigator.notification.beep(2);
        }
});
});
function submitText() {
	alert(random());
}

    
function random() {
	return !Math.round(Math.random());
}

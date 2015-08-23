// JavaScript Document

$(document).ready(function(e) {
    
	var xmlResponse;
	var status;
	var fname;
	var lname;
	
	$.ajax(
		{
			type: 'GET',
			url:'login.php',
			data: 'checkLogin=true',
			dataType:'xml'
		}).done(function(data){
			
			xmlResponse = data;
			status = $(xmlResponse).find("status").text();
			fname = $(xmlResponse).find("firstname").text();
			lname = $(xmlResponse).find("lastname").text();
	
	
	switch(status)
	{
		case 'LOGGED_IN':
				$('.login-form').hide();
				$('.validation-msg').hide();
				$('#fname').html(fname);
				$('#lname').html(lname);
				$('.loggedInText').show();
			break;
		case 'LOGGED_OUT':
				$('.login-form').show();
				$('.validation-msg').hide();
				$('.loggedInText').hide();
			break;
		case 'INVALID':
				$('.login-form').show();
				$('.validation-msg').show();
				$('.loggedInText').hide();
			break;
		case 'FAILED':
				$('.login-form').show();
				$('.validation-msg').show();
				$('.loggedInText').hide();
			break;
		case 'BLANK':
				$('.login-form').show();
				$('.validation-msg').show();
				$('.loggedInText').hide();
			break;
		default:
			break;
	}
			
		});
	
	$('form').submit(function(event)
	{
		
		var queryStr = $('#loginForm').serialize();
		
		$.ajax(
		{
			type: 'POST',
			url:'login.php',
			data: queryStr,
			dataType:"xml"
		}).done(function(data){
			
			xmlResponse = data;
			status = $(xmlResponse).find("status").text();
			fname = $(xmlResponse).find("firstname").text();
			lname = $(xmlResponse).find("lastname").text();
	
	
	switch(status)
	{
		case 'LOGGED_IN':
				$('.login-form').hide();
				$('.validation-msg').hide();
				$('#fname').html(fname);
				$('#lname').html(lname);
				$('.loggedInText').show();
			break;
		case 'LOGGED_OUT':
				$('.login-form').show();
				$('.validation-msg').hide();
				$('.loggedInText').hide();
			break;
		case 'INVALID':
				$('.login-form').show();
				$('.validation-msg').show();
				$('.loggedInText').hide();
			break;
		case 'FAILED':
				$('.login-form').show();
				$('.validation-msg').show();
				$('.loggedInText').hide();
			break;
		case 'BLANK':
				$('.login-form').show();
				$('.validation-msg').show();
				$('.loggedInText').hide();
			break;
		default:
			break;
	}
			
		});
		event.preventDefault();
	});
	
	/*console.log(xmlResponse);
	status = $(xmlResponse).find("status").text();
	
	
	switch(status)
	{
		case 'LOGGED_IN':
				$('.login-form').hide();
				$('.validation-msg').hide();
				$('.loggedInText').show();
			break;
		case 'LOGGED_OUT':
				$('.login-form').show();
				$('.validation-msg').hide();
				$('.loggedInText').hide();
			break;
		case 'INVALID':
				$('.login-form').show();
				$('.validation-msg').show();
				$('.loggedInText').hide();
			break;
		case 'FAILED':
				$('.login-form').show();
				$('.validation-msg').show();
				$('.loggedInText').hide();
			break;
		case 'BLANK':
				$('.login-form').show();
				$('.validation-msg').show();
				$('.loggedInText').hide();
			break;
		default:
			break;
	}
	*/
});
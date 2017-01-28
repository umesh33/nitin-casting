$(document).ready(function(){
	var name=$("#name");
	name.blur(chk_name)
	
	function chk_name()
	{
		if(name.val()=='')
		{
			//alert("Please Enter Your Name");
			$("#s_name").html("<font color='red'>Please Enter Your Name</font>");
			$("#s_name").addClass("notification-input ni-error");
			$("#name").css('border', '1px solid red'); 
			//name.focus();
			return false;
		}
		else
		{
			$("#s_name").html("");
			$("#s_name").removeClass("notification-input ni-error");	
			$("#name").css('border', 'none');
			return true;
		}
	}

	var email=$("#email");
	email.blur(chk_email)
	function chk_email()
	{
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(email.val()=="")
		{
			$("#s_name").html("<font color='red'>Please Enter Your Email ID</font>");
			$("#s_name").addClass("notification-input ni-error");
			$("#email").css('border', '1px solid red'); 
			//email.focus();
			return false;
		}
		else if (!regex.test(email.val())) 
		{
			$("#s_name").html("<font color='red'>Invalid Email ID</font>");
			$("#s_name").addClass("notification-input ni-error");
			//email.focus();
			return false;
		}
		else
		{
			$("#s_name").html("");
			$("#s_name").removeClass("notification-input ni-error");
			$("#email").css('border', 'none');
			return true;
		}
	}
	
	var message=$("#message");
	message.blur(chk_message)
	
	function chk_message()
	{
		if(message.val()=='')
		{
			//alert("Please Enter Your Name");
			$("#s_name").html("<font color='red'>Please Enter Your Message</font>");
			$("#s_name").addClass("notification-input ni-error");
			$("#message").css('border', '1px solid red'); 
			//message.focus();
			return false;
		}
		else
		{
			$("#s_message").html("");
			$("#s_message").removeClass("notification-input ni-error");	
			$("#message").css('border', 'none');
			return true;
		}
	}


	$("#btn_submit").click(function(){
		
		if(chk_name() && chk_email() && chk_message())
		{
			var str="name="+name.val()+"&email="+email.val()+"&message="+message.val();
		
		$.ajax
		({
			type:'POST',
			url:'email.php',
			data:str,
			beforeSend: function(){
				//alert(str);
					//alert($("#process-"+process).attr('id'));
					//alert($("#process" + process));
					//$("#process-"+process).html("<img src='ajax-loader.gif' />");
					//$("#process"+process[1]).html("<img src='ajax-loader.gif' />");
				},
			success:function(zzz)
			{
				alert(zzz);
				name.val('');
				email.val('');
				message.val('');
				//window.location.href='shopping_cart.php';
				
			}
			
		}); 
			
			
		}
		else
		{
			return false;
		}
	});
	
	
});
$(document).on('ready',function(){
	$('#announcements #1').hide();
	$('#announcements #2').hide();
});

$(document).on('click','#navbar .pure-u-1-8',function() {
	$('#navbar .active').attr('class','pure-u-1-8');
	$(this).attr('class','pure-u-1-8 active');
});

$(document).on('click','#announcements div',function() {
	var num = $(this).attr('id');
	for(var i=0;i<3;i++)
	{
		if(i!=(num+1)%3)
		{
			$('#announcements #'+i).hide();
		}
		else
		{
			$('#announcements #'+i).show();
		}
	}
});
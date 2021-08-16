
var targerdayjs272053js=new Date(inputyearjs272053js, inputmonthjs272053js-1, inputdayjs272053js, inputhourjs272053js, inputminjs272053js, 0);
var currentdayjs272053js = new Date();
var currentdayjs272053js_f = new Date();
var currentdayjs272053js_k = new Date();
var currentdayjs272053js_j = new Date();
var currentdayjs272053js_sc = currentdayjs272053js_f.getTime() - (currentdayjs272053js_k.getTime()+currentdayjs272053js_j.getTime())/2;

var count=(targerdayjs272053js.getTime()-currentdayjs272053js.getTime());
if(count<0)count=0;
function getIPjs272053js() { 
	/*
	$.get(
		'onlineip.json',
		function(data)
		{
			currentdayjs272053js_f = new Date(data.res.replace(/-/g,"/"));
			
			currentdayjs272053js_j = new Date();
			currentdayjs272053js_sc = currentdayjs272053js_f.getTime() - (currentdayjs272053js_k.getTime()+currentdayjs272053js_j.getTime())/2;
			countdownGetTime();
		},
		"json"
	);
	*/
	countdownGetTime();
}
function countdownGetTime()
{
	try
	{
		currentdayjs272053js=new Date();

		count=(targerdayjs272053js.getTime()-currentdayjs272053js.getTime()-currentdayjs272053js_sc);

		var days=Math.floor(count/(1000*60*60*24));      //Math.floor(a/b)向下取整
		var hours=Math.floor(count/(1000*60*60))-days*24;
		var mins=Math.floor(count/(1000*60))-days*24*60-hours*60;
		var secs=Math.floor(count/(1000))-days*24*60*60-hours*60*60-mins*60;
		if(count>0)
		{
			document.getElementById("displayDayjs272053js").innerHTML=days;
		}
		
		if(count>0)
		{
			setTimeout("countdownGetTime( )",1000)
		}
	}
	catch(e)
	{
	}
}
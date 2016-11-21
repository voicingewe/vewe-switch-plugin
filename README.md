hurkanSwitch on/off jQuery Plugin
===
Contact
---
Hürkan ARAS
hurkanaras@gmail.com

Examples
---

<div id="demo">
	<input name="demo" />
</div>
 ```javascript
 	$('#demo').hurkanSwitch();
  
 var options = {
	'onTitle':'ON',
	'offTitle':'OFF',
	'onColor':'success',
	'offColor':'danger',
	'animate':true,
	'responsive':false,
	'checked':1,
	'selected':function(input,status){
		console.log(status);
	},
  'offConfirm':function(row){
		
		if(confirm("Are you sure?")){
			$(row).trigger("click",true);
		}
		
		return false;
	},
	'onConfirm':function(row){
		
		if(confirm("Are you sure?")){
			$(row).trigger("click",true);
		}
		
		return false;
	},
	
};


 ```

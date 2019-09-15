# Warning
## Forked from [Hurkan-Switch](https://github.com/hurkanaras/Hurkan-Switch-Plugin)
    This is a simple responsive jquery plugin meant to allow switch 
    based interactions with flexible configuration options and event 
    hooks. It was forked to update Hurkan-Switch-Plugin to Bootstrap 4 
    and JQuery 3 as well as have an npm updatable plugin. Apart from the 
    initial updates, it is considered for me a step to update the 
    outdated Hurkan-Switch-Plugin to Bootstrap 4 and JQuery 3 and later 
    replace it with a better maintained plugin.
    
	
## veweSwitch on/off jQuery Plugin
===
### Contact
---
Javi
voicingewe@gmail.com

# Example 1
---
```html
<div id="demo">
	<input name="demo" />
</div>
```
```javascript
 var options = {
	'onTitle':'ON',
	'offTitle':'OFF',
	'onColor':'success’, '//danger,success,info,primary,default,warning
	'offColor':'danger', '// danger,success,info,primary,default,warning
	'animate':true, //or false
	'responsive':false,  '//or true 
	'checked':'your value', '// default input checked value="your value" OR checked:'.input-selector'
	'selected':function(input,status){ '// input selector event 
	 $(input)
	  status ==> on / off - String
		console.log(status);
	},
	 'offConfirm':function(input){ 
		if(confirm("Are you sure?")){
			$(input).trigger("click",true);
		}

		return false;
	  },
	 'onConfirm':function(input) {
		if(confirm("Are you sure?")) {
			$(input).trigger("click",true);
		}

		return false;
	},

};

$('#demo').veweSwitch(options);
```
 
# Example II
---
```html
<div id="demo2">
	<input data-title="On" data-on-color="success"  value="your value 1"  data-on="true" name="demo3" type="radio" />
	<input data-title="Off" data-off-color="success" value="your value 2" data-off="true" name="demo3" type="radio" />
</div>
```
```javascript
$('#demo2').veweSwitch({
	'checked':'your value 2'
});
```

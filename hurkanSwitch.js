  (function($){

  var _hurkanSwitch_conf = [];
  $.fn.hurkanSwitch = function(opt){
	  /*
		@Author : Hürkan ARAS
		@Email  : hurkanaras@gmail.com
	  */
	  if(typeof opt == 'undefined') opt = {};
	  if(opt == 'destroy'){
		  
		  this.each(function(){
			 if($(this).next().hasClass('hurkanSwitch-switch-plugin-box') && $(this).hasClass('hurkanSwitch-switch-plugin')){
				 $(this).next().remove();
				 $(this).css({'display':'inline-block'});
				  $(this).find('.hurkanSwitch-switch-input').removeClass('hurkanSwitch-switch-input');
				  
				 $(this).removeClass('hurkanSwitch-switch-plugin');
			 } 
		  });
		  return false;
	  }

 
 	  $.fn._radio_button_on = function(){
		  
 		  $(this).each(function() {
var $thisElem = $(this);
			$thisElem.addClass('hurkanSwitch-switch-plugin');

			var __index = $thisElem.index('.hurkanSwitch-switch-plugin');
			 _hurkanSwitch_conf[__index] = $.extend({
									'on':function(r){},
									'off':function(r){},
									'onConfirm':function(r){ return true;},
									'offConfirm':function(r){ return true;},
									'selected':function(r){},
									'onTitle':'',
									'responsive':false,
									'offTitle':'',
									'animate':true,
									'offColor':'',
									'onColor':'success',
									'className':'',
									'width':80
	  },opt);
			  
			  if(typeof _hurkanSwitch_conf[__index].checked != 'undefined'){
				  
				 if( _hurkanSwitch_conf[__index].checked.toString().substr(0,1) == '.'){
					$thisElem.find('input'+_hurkanSwitch_conf[__index].checked+'').trigger("click");
				 }else{ 
					$thisElem.find('input[value="'+_hurkanSwitch_conf[__index].checked+'"]').trigger("click");
				 }
				}
			if($thisElem.hasClass('hurkanSwitch-switch-plugin')){
				$(this).next().remove();
			}
		 
			var obj = [];
			$thisElem.css({'display':'none'});
			var $inputElem = $thisElem.find('input').eq(0);
			
			var bootstrapContent  = '<div class="hurkanSwitch hurkanSwitch-switch-plugin-box ';
			
			if(_hurkanSwitch_conf[__index].className != ''){
				  bootstrapContent+=_hurkanSwitch_conf[__index].className;
			  }
			  
			bootstrapContent+='">';
					
					bootstrapContent+='<div class="hurkanSwitch-switch-box '+(_hurkanSwitch_conf[__index].responsive == true ? ' switch-responsive ' : '' )+' '+(_hurkanSwitch_conf[__index].animate == true ? ' switch-animated-on ' : '')+'">';
			if($inputElem.attr("type") == 'radio'){
				var $item = $thisElem.find('input[name="'+$inputElem.attr("name")+'"]');
				if($item.length == 2){
					$item.each(function(key,row){
						$(row).addClass('hurkanSwitch-switch-input');
						var label = $(row).attr("data-title");
					
						if(typeof label == 'undefined'){
							if($(row).val() == '1' || $(row).attr("data-status") == '1' || $(row).attr("data-on") ){
								 
								label= _hurkanSwitch_conf[__index].onTitle;
							}else{ 
								label= _hurkanSwitch_conf[__index].offTitle;
							}
						}
						bootstrapContent+='<a class=" hurkanSwitch-switch-item';
						
						if($(row).is(':checked')){
							bootstrapContent+=' active ';
 							
						}
						if(!$item.is(':checked')){
								if($(row).val() == '0'){
									bootstrapContent+=' active ';
								} 
						}
						
						if($(row).attr("data-on") || $(row).attr("data-status") == 'on' || $(row).attr("data-status") == '1'){
								bootstrapContent+=' hurkanSwitch-switch-item-status-on ';
								if($(row).attr("data-on-color")){
											
											bootstrapContent+=' hurkanSwitch-switch-item-color-'+$inputElem.attr("data-on-color");
								}else{
											bootstrapContent+=' hurkanSwitch-switch-item-color-'+_hurkanSwitch_conf[__index]['onColor'];
 									
								}
								
							}else{ 
							if($(row).attr("data-off-color")){
											
											bootstrapContent+=' hurkanSwitch-switch-item-color-'+$(row).attr("data-off-color");
								}else{ 
											bootstrapContent+=' hurkanSwitch-switch-item-color-'+_hurkanSwitch_conf[__index]['offColor'];

								}
								bootstrapContent+=' hurkanSwitch-switch-item-status-off ';
							}
						bootstrapContent+='"';
						if(_hurkanSwitch_conf[__index].width != false && _hurkanSwitch_conf[__index].responsive == false){
							_hurkanSwitch_conf[__index].width = parseInt(_hurkanSwitch_conf[__index].width);
							bootstrapContent+=' style="width:'+_hurkanSwitch_conf[__index].width+'px !important" ';
						}
						bootstrapContent+=' >';
					
						bootstrapContent+='<span class="lbl">'+label+'</span>'+'<span class="hurkanSwitch-switch-cursor-selector"></span></a>';
					});
				}
			
			}else if($inputElem.attr("type") == 'checkbox'){
						for(var i = 0;i<2;i++){
						$inputElem.addClass('hurkanSwitch-switch-input');
						
						bootstrapContent+='<a class=" hurkanSwitch-switch-item';
						if($inputElem.is(':disabled')){
							bootstrapContent+=' disabled ';
						}
							if(i == 0){
								if($inputElem.is(':checked')){
									bootstrapContent+='  active ';
									if($inputElem.attr("data-on-color")){
											
											bootstrapContent+=' hurkanSwitch-switch-item-color-'+$inputElem.attr("data-on-color");
									}else{ 
											bootstrapContent+=' hurkanSwitch-switch-item-color-'+_hurkanSwitch_conf[__index]['onColor'];
									}
								}
								bootstrapContent+='  hurkanSwitch-switch-item-status-on';
							}else{ 
							if(!$inputElem.is(':checked')){
									bootstrapContent+='  active ';
								}
								if($inputElem.attr("data-off-color")){
											
											bootstrapContent+=' hurkanSwitch-switch-item-color-'+$inputElem.attr("data-off-color");
									}else{ 
										bootstrapContent+=' hurkanSwitch-switch-item-color-'+_hurkanSwitch_conf[__index]['offColor'];

									}
								bootstrapContent+='  hurkanSwitch-switch-item-status-off';
							}
						
						
							 
						 
						bootstrapContent+=' "';
						if(_hurkanSwitch_conf[__index].width != false && _hurkanSwitch_conf[__index].responsive == false){
							_hurkanSwitch_conf[__index].width = parseInt(_hurkanSwitch_conf[__index].width);
							bootstrapContent+=' style="width:'+_hurkanSwitch_conf[__index].width+'px !important" ';
						}
						bootstrapContent+='>';
						if(i == 0){
							var label = $inputElem.attr("data-on-title");
							if(typeof label == 'undefined'){
									label= _hurkanSwitch_conf[__index].onTitle;
							}
						}else{
							var label = $inputElem.attr("data-off-title");
							if(typeof label == 'undefined'){
									label= _hurkanSwitch_conf[__index].offTitle;

							}
						}
						
						bootstrapContent+='<span class="lbl">'+label+'</span>';
							bootstrapContent+='<span class=" hurkanSwitch-switch-cursor-selector"></span></a>';

						}
			}
			
			
			
			
			bootstrapContent+='</div>';					
			bootstrapContent+='</div>';
			$thisElem.after(function(){ return bootstrapContent});
			var $thisElemNext = $thisElem.next();
			
			if($inputElem.attr("type") == 'radio'){
					$thisElemNext.on('click','.hurkanSwitch-switch-box',function(event,param){
						if(typeof param == 'undefined' && !param){
							var param = false;
						}
						var selectedType = '';
						var $eElem =  $thisElemNext.find('.hurkanSwitch-switch-item');
						var $activeItem = $(this).find('.active');
						if(  $item.eq($eElem.not($activeItem).index()).attr("data-off") || $item.eq($eElem.not($activeItem).index()).attr("data-status") == 'off' || $item.eq($eElem.not($activeItem).index()).attr("data-status") == '0'){
							selectedType = 'off';
							if(param == false && _hurkanSwitch_conf[__index].offConfirm($(this)) != true){
								return;
							}
						}else{ 
													selectedType = 'on';

							if(param == false && _hurkanSwitch_conf[__index].onConfirm($(this)) != true){
								
								return;
							}
						}
						if( $item.eq($eElem.not($activeItem).index()).attr('readonly') || $item.eq($eElem.not($activeItem).index()).is(':disabled')){
							return;
						}
						$eElem.removeClass('active');
						$eElem.not($activeItem).addClass('active');
						
						
						var $newActive = $(this).find('.active');
						$item.eq($newActive.index()).prop('checked',true);
							_hurkanSwitch_conf[__index].selected($item.eq($newActive.index()),selectedType);
						 
				});
			}else{ 
			
					$thisElemNext.on('click','.hurkanSwitch-switch-box',function(event,param){
											var selectedType = '';
	
					var $eElem =  $thisElemNext.find('.hurkanSwitch-switch-item');
						if(typeof param == 'undefined' && !param){
							var param = false;
						}

						var $active = $thisElemNext.find('.active');
						if($active.hasClass('hurkanSwitch-switch-item-status-on')){
							selectedType = 'off';
 							if(param == false && _hurkanSwitch_conf[__index].offConfirm($(this)) != true){
									
									return;
							}
						}else{ 
													selectedType = 'on';

						if(param == false && _hurkanSwitch_conf[__index].onConfirm($(this)) != true){
									
									return;
							}
						}
							if(!$inputElem.is(':disabled') && !$inputElem.attr('readonly')){
							if($active.hasClass('hurkanSwitch-switch-item-status-on')){
								
								$active.removeClass('active');
								$eElem.not($active).addClass('active');
								_hurkanSwitch_conf[__index].off($thisElemNext);
							}else if($active.hasClass('hurkanSwitch-switch-item-status-off')){
								 
								$active.removeClass('active');
								$eElem.not($active).addClass('active');
								_hurkanSwitch_conf[__index].on($thisElemNext);
							}
							$inputElem.trigger("click");
							_hurkanSwitch_conf[__index].selected($inputElem,selectedType);
							}
							
							

					});
			}
			
		  });
	  };
	return   this.each(function(){
					var __index = $(this).index('.hurkanSwitch-switch-plugin');
			$(this)._radio_button_on(_hurkanSwitch_conf[__index]);
 	  });
	
	  	
  }
	$(document).ready(function() {
		  $(document).on('click','.hurkanSwitch-switch-input',function(event){
			var $this = $(this).parent();
					var __index = $this.index('.hurkanSwitch-switch-plugin');
			$this.hurkanSwitch(_hurkanSwitch_conf[__index]);

		  });
	  });
})(jQuery);
	  
/**
 * The MIT License
 * @Author : Javier Solis
 * @Email  : voicingewe@gmail.com
 * Copyright (c) 2019 Javier Solis <voicingewe@gmail.com>
 * Partial code from Hürkan ARAS hurkanaras@gmail.com (No license)
 */
(function ($) {
	$.fn.veweSwitch = function (opt) {
		if (typeof opt == 'undefined') opt = {};
		var _veweSwitch_conf = $.extend({
			'on': function (r) {},
			'off': function (r) {},
			'onConfirm': function (r) {
				return true;
			},
			'offConfirm': function (r) {
				return true;
			},
			'selected': function (r) {},
			'onTitle': '',
			'responsive': false,
			'offTitle': '',
			'animate': true,
			'offColor': '',
			'onColor': 'success',
			'className': '',
			'width': 80
		}, opt);
		if (opt == 'destroy') {

			this.each(function () {
				if ($(this).next().hasClass('veweSwitch-switch-plugin-box') && $(this).hasClass('veweSwitch-switch-plugin')) {
					$(this).next().remove();
					$(this).css({
						'display': 'inline-block'
					});
					$(this).find('.veweSwitch-switch-input').removeClass('veweSwitch-switch-input');

					$(this).removeClass('veweSwitch-switch-plugin');
				}
			});
			return false;
		}


		$.fn._radio_button_on = function () {
			var __index = $(this).index('.veweSwitch-switch-plugin');

			var $thisElem = $(this);

			$thisElem.css({
				'display': 'none'
			});

			if (typeof _veweSwitch_conf.checked != 'undefined') {

				if (_veweSwitch_conf.checked.toString().substr(0, 1) == '.') {
					$thisElem.find('input' + _veweSwitch_conf.checked + '').trigger("click");
				} else {
					$thisElem.find('input[value="' + _veweSwitch_conf.checked + '"]').trigger("click");
				}
			}
			if ($thisElem.hasClass('veweSwitch-switch-plugin')) {
				$(this).next().remove();
			}

			var obj = [];

			var $inputElem = $thisElem.find('input').eq(0);
			$thisElem.find('input').data({
				'_switch_opt': _veweSwitch_conf
			});
			var bootstrapContent = '<div class="veweSwitch ' + (_veweSwitch_conf.responsive == true ? ' switch-responsive ' : '') + '  veweSwitch-switch-plugin-box ';

			if (_veweSwitch_conf.className != '') {
				bootstrapContent += _veweSwitch_conf.className;
			}

			bootstrapContent += '">';

			bootstrapContent += '<div class="veweSwitch-switch-box ' + (_veweSwitch_conf.animate == true ? ' switch-animated-on ' : '') + '">';
			if ($inputElem.attr("type") == 'radio') {

				var $item = $thisElem.find('input[type="radio"]');
				if ($item.length == 2) {
					$item.each(function (key, row) {
						$(row).addClass('veweSwitch-switch-input');
						var label = $(row).attr("data-title");

						if (typeof label == 'undefined') {
							if ($(row).val() == '1' || $(row).attr("data-status") == '1' || $(row).attr("data-on")) {

								label = _veweSwitch_conf.onTitle;
							} else {
								label = _veweSwitch_conf.offTitle;
							}
						}
						bootstrapContent += '<a class=" veweSwitch-switch-item';

						if ($(row).is(':checked')) {
							bootstrapContent += ' active ';

						}
						if (!$item.is(':checked')) {
							if ($(row).val() == '0') {
								bootstrapContent += ' active ';
							}
						}

						if ($(row).attr("data-on") || $(row).attr("data-status") == 'on' || $(row).attr("data-status") == '1') {
							bootstrapContent += ' veweSwitch-switch-item-status-on ';
							if ($(row).attr("data-on-color")) {

								bootstrapContent += ' veweSwitch-switch-item-color-' + $inputElem.attr("data-on-color");
							} else {
								bootstrapContent += ' veweSwitch-switch-item-color-' + _veweSwitch_conf['onColor'];

							}

						} else {
							if ($(row).attr("data-off-color")) {

								bootstrapContent += ' veweSwitch-switch-item-color-' + $(row).attr("data-off-color");
							} else {
								bootstrapContent += ' veweSwitch-switch-item-color-' + _veweSwitch_conf['offColor'];

							}
							bootstrapContent += ' veweSwitch-switch-item-status-off ';
						}
						bootstrapContent += '"';
						if (_veweSwitch_conf.width != false && _veweSwitch_conf.responsive == false) {
							_veweSwitch_conf.width = parseInt(_veweSwitch_conf.width);
							bootstrapContent += ' style="width:' + _veweSwitch_conf.width + 'px !important" ';
						}
						bootstrapContent += ' >';

						bootstrapContent += '<span class="lbl">' + label + '</span>' + '<span class="veweSwitch-switch-cursor-selector"></span></a>';
					});
				}

			} else if ($inputElem.attr("type") == 'checkbox') {
				for (var i = 0; i < 2; i++) {
					$inputElem.addClass('veweSwitch-switch-input');

					bootstrapContent += '<a class=" veweSwitch-switch-item';
					if ($inputElem.is(':disabled')) {
						bootstrapContent += ' disabled ';
					}
					if (i == 0) {
						if ($inputElem.is(':checked')) {
							bootstrapContent += '  active ';
							if ($inputElem.attr("data-on-color")) {

								bootstrapContent += ' veweSwitch-switch-item-color-' + $inputElem.attr("data-on-color");
							} else {
								bootstrapContent += ' veweSwitch-switch-item-color-' + _veweSwitch_conf['onColor'];
							}
						}
						bootstrapContent += '  veweSwitch-switch-item-status-on';
					} else {
						if (!$inputElem.is(':checked')) {
							bootstrapContent += '  active ';
						}
						if ($inputElem.attr("data-off-color")) {

							bootstrapContent += ' veweSwitch-switch-item-color-' + $inputElem.attr("data-off-color");
						} else {
							bootstrapContent += ' veweSwitch-switch-item-color-' + _veweSwitch_conf['offColor'];

						}
						bootstrapContent += '  veweSwitch-switch-item-status-off';
					}




					bootstrapContent += ' "';
					if (_veweSwitch_conf.width != false && _veweSwitch_conf.responsive == false) {
						_veweSwitch_conf.width = parseInt(_veweSwitch_conf.width);
						bootstrapContent += ' style="width:' + _veweSwitch_conf.width + 'px !important" ';
					}
					bootstrapContent += '>';
					if (i == 0) {
						var label = $inputElem.attr("data-on-title");
						if (typeof label == 'undefined') {
							label = _veweSwitch_conf.onTitle;
						}
					} else {
						var label = $inputElem.attr("data-off-title");
						if (typeof label == 'undefined') {
							label = _veweSwitch_conf.offTitle;

						}
					}

					bootstrapContent += '<span class="lbl">' + label + '</span>';
					bootstrapContent += '<span class=" veweSwitch-switch-cursor-selector"></span></a>';

				}
			}




			bootstrapContent += '</div>';
			bootstrapContent += '</div>';
			$thisElem.after(function () {
				return bootstrapContent
			});
			var $thisElemNext = $thisElem.next();

			if ($inputElem.attr("type") == 'radio') {
				$thisElemNext.on('click', '.veweSwitch-switch-box', function (event, param) {
					if (typeof param == 'undefined' && !param) {
						var param = false;
					}
					var selectedType = '';
					var $eElem = $thisElemNext.find('.veweSwitch-switch-item');
					var $activeItem = $(this).find('.active');
					if ($item.eq($eElem.not($activeItem).index()).attr('readonly') || $item.eq($eElem.not($activeItem).index()).is(':disabled')) {
						return;
					}
					if ($item.eq($eElem.not($activeItem).index()).attr("data-off") || $item.eq($eElem.not($activeItem).index()).attr("data-status") == 'off' || $item.eq($eElem.not($activeItem).index()).attr("data-status") == '0') {
						selectedType = 'off';
						if (param == false && _veweSwitch_conf.offConfirm($(this)) != true) {
							return;
						}
					} else {
						selectedType = 'on';

						if (param == false && _veweSwitch_conf.onConfirm($(this)) != true) {

							return;
						}
					}

					$eElem.removeClass('active');
					$eElem.not($activeItem).addClass('active');


					var $newActive = $(this).find('.active');
					$item.eq($newActive.index()).prop('checked', true);
					_veweSwitch_conf.selected($item.eq($newActive.index()), selectedType);

				});
			} else {

				$thisElemNext.on('click', '.veweSwitch-switch-box', function (event, param) {
					var selectedType = '';

					var $eElem = $thisElemNext.find('.veweSwitch-switch-item');
					if (typeof param == 'undefined' && !param) {
						var param = false;
					}

					var $active = $thisElemNext.find('.active');
					if ($inputElem.attr('readonly') || $inputElem.is(':disabled')) {
						return;
					}
					if ($active.hasClass('veweSwitch-switch-item-status-on')) {
						selectedType = 'off';
						if (param == false && _veweSwitch_conf.offConfirm($(this)) != true) {

							return;
						}
					} else {
						selectedType = 'on';

						if (param == false && _veweSwitch_conf.onConfirm($(this)) != true) {

							return;
						}
					}
					if (!$inputElem.is(':disabled') && !$inputElem.attr('readonly')) {
						if ($active.hasClass('veweSwitch-switch-item-status-on')) {

							$active.removeClass('active');
							$eElem.not($active).addClass('active');
							_veweSwitch_conf.off($thisElemNext);
						} else if ($active.hasClass('veweSwitch-switch-item-status-off')) {

							$active.removeClass('active');
							$eElem.not($active).addClass('active');
							_veweSwitch_conf.on($thisElemNext);
						}
						$inputElem.trigger("click");
						_veweSwitch_conf.selected($inputElem, selectedType);
					}



				});
			}


		};
		var _g = [];
		return this.each(function () {
			$(this).addClass('veweSwitch-switch-plugin');

			$(this)._radio_button_on();
		});


	}
	$(document).ready(function () {
		$(document).on('click change', '.veweSwitch-switch-input', function (event) {
			var $this = $(this).parent();
			$this.veweSwitch($(this).data("_switch_opt"));

		});
	});
}(jQuery));
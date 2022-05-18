var showLoading = function(object) {
	let tipTxt = object.title;
	let time;
	if (!object.duration) {
		time = 15000;
	} else {
		time = object.duration
	}
	let mask;
	if (!object.mask) {
		mask = false
	} else {
		mask = object.mask
	}
	let icon;
	if (!object.icon) {
		icon = "none"
	} else {
		icon = object.icon;
	}
	let image;
	if (object.image) {
		image = object.image;
	}
	let success = object.success;
	let fail = object.fail;
	let complete = object.complete;
	var result;
	try {
		var popToastHtml = "";
		popToastHtml += '<div class="xsw_showToast">';
		if (mask == true) {
			popToastHtml +=
				'<div class="xsw_bei"></div>'
		}
		popToastHtml +=
			'<div class="pop-toast">';
		if (image) {
			popToastHtml += '<img src="' + image + '" style="width: 50px;margin-bottom:10px;">'
			popToastHtml +=
				'<div class="toast-tip" >' + tipTxt + '</div></div></div>';
		} else {
			if (icon == "none") {
				popToastHtml += '<img  style="width: 50px;margin-top: 12px;display: none">'
				popToastHtml +=
					'<div class="toast-tip">' + tipTxt + '</div></div></div>';
			} else {
				if (icon == "success") {
					popToastHtml += '<div class="check_success_icon"></div>';
				} else if (icon == "loading") {
					popToastHtml +=
						'<div id="xsw_canvas" style="background: rgb(255, 254, 220);background: linear-gradient(0deg, rgba(86, 86, 86, 0.4) 30%, rgb(255, 255, 255) 100%);"><div class="circle-core"></div></div>';
				}
				popToastHtml +=
					'<div class="toast-tip">' + tipTxt + '</div></div></div>';
			}

		}
		$("body").append(popToastHtml);
		$(".xsw_showToast .xsw_bei").css({
			"position": "fixed",
			'left': '0',
			'top': '0',
			'background-color': 'rgba(90,90,90,0)',
			'z-index': '10000',
			'width': '100%',
			'height': '100%'
		});

		$('.xsw_showToast .pop-toast').css({
			'position': 'fixed',
			'max-width': '500px',
			'padding': '15px',
			'background-color': '#555',
			'border-radius': '10px',
			'top': '50%',
			'left': '50%',
			'z-index': '100000',
			'box-shadow': ' 0 2px 8px #555 ',
			'text-align': 'center',
			'transform': 'translate(-50%,-50%)',
			'-webkit-transform': 'translate(-50%,-50%)',
			'-moz-transform': 'translate(-50%,-50%)',
			'-o-transform': 'translate(-50%,-50%)'
		});
		$('.xsw_showToast .circle-core').css({
			'width': '100%',
			'height': '100%',
			'background-color': '#555',
			'border-radius': '50%',
		});

		$('.xsw_showToast .toast-tip').css({
			'font-size': '14px',
			'text-align': 'center',
			'color': '#fff',
			'word-wrap': 'break-word'
		});
		if (icon == "success") {
			$('.check_success_icon').css({
				'width': '25px',
				'height': '50px',
				'margin': '0 auto 15px',
				'border-color': '#fff',
				'border-radius': '4px',
				'border-style': 'solid',
				'border-width': '0 5px 5px 0',
				'transform': 'rotate(45deg)',
				'-webkit-transform': 'rotate(45deg)',
				'-moz-transform': 'rotate(45deg)',
				'-o-transform': 'rotate(45deg)'
			})
		} else if (icon == "loading") {
			$('#xsw_canvas').css({
				'width': '50px',
				'height': '50px',
				'border-radius': '50%',
				'margin': '0 auto 15px',
				'padding': '3px'
			})
			var zhuan;
			var zzz = 0;
			zhuan = setInterval(function() {
				zzz = zzz + 5;
				$('#xsw_canvas').css({
					'transform': 'rotate(' + zzz + 'deg)',
					'-webkit-transform': 'rotate(' + zzz + 'deg)',
					'-moz-transform': 'rotate(' + zzz + 'deg)',
					'-o-transform': 'rotate(' + zzz + 'deg)'
				});
			}, 20);
		}
		////时间
		if (time != "" || time != 0) {
			setTimeout(function() {
				$(".xsw_showToast").remove();
				clearInterval(zhuan)
			}, time);
		}
		result = {
			showToast: "ok"
		};
		if (success) {
			success(result);
		}
		if (complete) {
			complete(result);
		}

	} catch (e) {
		result = {
			errMsg: e.message
		};
		if (fail) {
			fail(result);
		}
		if (complete) {
			complete(result);
		}
	}

};
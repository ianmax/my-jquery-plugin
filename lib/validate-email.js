(function ($) {
	$.fn.emailValidator = function () {
		// console.log(this.val());
		// your code here
		var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		let check = this.val();
		return pattern.test(check)
	}
})(jQuery)

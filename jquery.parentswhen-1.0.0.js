/*!
 * Author: Tyler Crompton
 * http://tylercrompton.com/
 *
 * Licensed under the DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE.
 * http://sam.zoy.org/wtfpl/COPYING
 *
 * Date: Wed May 30 17:47:00 -0600
 */

(function ($) {
	'use strict';

	$.fn.parentsWhen = function (selector, filter) {
		var parents = $(this).parentsUntil(selector, filter);
		if (parents.length === 0) { // if the target is the immediate parent
			return this.parent();
		}
		return parents.parent();
	};
}(jQuery));
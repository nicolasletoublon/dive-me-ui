/**
 * @memberof utils
 * @description  Receives millisecond amount and function,
 *               Returns Debounced function.
 * @param   {Function}    Callback     function to be debounced
 * @param   {Number}      Wait         wait in ms
 * @returns {Function}                 debounced function
 *
 * @example
 * const debounce = utils.debounce(this.handleScroll, 200);
 */
const debounce = (callback, wait) => {
	let timeout = null;
	return (...args) => {
		const next = () => callback(...args);
		clearTimeout(timeout);
		timeout = setTimeout(next, wait);
	};
};

export default debounce;

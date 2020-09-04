/**
 * Simple throttle utility.
 * @param {(any) => void} fn Function in which to throttle.
 * @param {number} delay Minimum delay between calls in milliseconds.
 */
const throttle = (fn, delay) => {
	let isThrottled = false;

	return (...args) => {
		if (!isThrottled) {
			fn(...args);

			isThrottled = true;

			setTimeout(() => {
				isThrottled = false;
			}, delay);
		}
	};
};

export default throttle;

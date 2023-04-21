
/**
 * @param value The zoom level as a percentage.
 * @returns True if the zoom level was set successfully, false otherwise.
 * @example setZoomPage(100); // Sets the zoom level to 100%.
 */
export default function setZoomPage(value: number): true | false {
	const body: HTMLBodyElement | null = document.querySelector("body");

	if (body) {
		body.style.cssText = `zoom: ${value}%;`;
		return true;
	}
	else {
		return false;
	}
}


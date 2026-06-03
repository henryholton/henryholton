export function loadCDN(src: string): Promise<void> {
	const existing = document.querySelector(`script[src="${src}"]`)

	if (existing) {
		return Promise.resolve()
	}

	return new Promise((resolve, reject) => {
		const script = document.createElement("script")

		script.src = src

		script.onload = () => resolve()
		script.onerror = () => reject(new Error(`Failed to load ${src}`))

		document.head.appendChild(script)
	})
}

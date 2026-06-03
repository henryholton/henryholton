export {}

declare global {
	interface Window {
		MathJax: {
			loader?: {
				load?: string[]
			}

			tex2svg?: (input: string, options?: unknown) => HTMLElement

			startup?: {
				promise?: Promise<void>
			}
		}
	}
}

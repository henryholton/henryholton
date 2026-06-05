<script setup lang="ts">
import { loadCDN } from "@/utils/loadCDN"
import { useHead } from "@unhead/vue"
import { useClamp } from "@vueuse/math"
import { onMounted } from "vue"

// const output = ref<HTMLElement>()
// switch this to vueUse clamped value
const expressionCount = useClamp(20, 5, 100)
const maxRotation = useClamp(0, 0, 45)

// generate SVG stuff...
onMounted(async () => {
	window.MathJax = {
		loader: {
			load: ["input/tex", "output/svg"],
		},
	}

	await loadCDN("https://cdn.jsdelivr.net/npm/mathjax@4/tex-svg.js")
	/// @ts-expect-error we'll fix typing later
	await window.MathJax.startup?.()

	const svgNode = window.MathJax.tex2svg?.("x^2")
	console.log(svgNode)
})

function generate() {
	//todo...
}

useHead({
	title: "Math SVG Background Generator",
})
</script>
<template>
	<main>
		<h1 class="mt-10 text-4xl text-center">Math Backround Generator</h1>
		<h2 class="mt-1 text-gray-500 text-center mx-20">
			Generate randoml backgrounds made of math symbols with ease!
		</h2>
		<!-- features to add:
             - list of expressions
             - number of expressions
             - max rotation
             - size
             - size randomness -->
		<form
			class="mt-20 grid grid-cols-[33vw_33vw] gap-5 justify-center"
			@submit="$event.preventDefault()"
		>
			<div
				class="border-2 rounded-xl p-5 border-accent shadow-xl w-min"
			>
				<p class="text-lg inline-block font-bold">Count</p>
				<input
					type="number"
					v-model.number="expressionCount"
					@blur="
						($event.target as HTMLInputElement).value =
							String(expressionCount)
					"
					class="text-light ml-4 p-2 w-40 text-lg"
				/>
				<input
					type="range"
					class="mt-2 accent-accent w-100"
					v-model.number="expressionCount"
					min="5"
					max="100"
				/>
			</div>
			<div class="border-2 rounded-xl p-5 border-accent shadow-xl">
				<div class="flex items-center">
					<p class="text-lg font-bold">Max Rotation</p>
					<p class="text-light ml-4 p-2 w-20 text-lg">
						{{ maxRotation }}&deg;
					</p>
					<div
						class="bg-gray-100 w-5 h-5 border-2 border-gray-700 rounded-sm"
					></div>
				</div>
				<input
					type="range"
					class="slider"
					v-model.number="maxRotation"
					min="0"
					max="45"
				/>
			</div>

			<button @click="generate"></button>
		</form>
	</main>
</template>

<style scoped>
@reference "#index.css";

.slider {
	@apply mt-2 accent-accent w-100;
}
</style>

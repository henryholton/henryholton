<script setup lang="ts">
import { loadCDN } from "@/utils/loadCDN"
import { onMounted, ref } from "vue"

const output = ref<string>()

onMounted(async () => {
	window.MathJax = {
		loader: {
			load: ["input/tex", "output/svg"],
		},
	}

	await loadCDN("https://cdn.jsdelivr.net/npm/mathjax@4/tex-svg.js")

	const svgNode = window.MathJax.tex2svg?.("x^2")

	console.log(svgNode)
})
</script>
<template>
	<main>this will be the math SVG generator thingy</main>
	<div :v-html="output"></div>
</template>

<style scoped></style>

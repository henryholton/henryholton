<script setup lang="ts"></script>

<template>
	<main>
		<h1 class="mt-30 text-5xl text-center">Apps and Projects</h1>
		<div
			class="mt-10 grid grid-cols-2 mx-20 justify-items-center gap-x-4"
		>
			<a class="project-card" href="https://inkform.io">
				Inkform
			</a>
			<RouterLink to="math-svg-generator" class="project-card">
				Math Symbols SVG Generator</RouterLink
			>
		</div>
	</main>
</template>

<style scoped>
@reference "#index.css";

.project-card {
	@apply w-full border-2 border-accent rounded-xl overflow-hidden aspect-square flex justify-center items-center;
}
</style>

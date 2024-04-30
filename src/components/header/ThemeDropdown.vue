<template>
	<!-- Theme choice -->
	<li class="nav-item dropdown">
		<button class=" nav-link dropdown-toggle fs-4" data-bs-toggle="dropdown" type="button">
			<i class="bi bi-circle-half"></i>
		</button>

		<ul class="dropdown-menu dropdown-menu-end">
			<li>
				<button class="dropdown-item" type="button">
					<i class="bi bi-sun-fill pe-2"></i>
					Clair
				</button>
			</li>
			<li>
				<button class="dropdown-item" type="button">
					<i class="bi bi-moon-stars-fill pe-2"></i>
					Sombre
				</button>
			</li>
			<li>
				<button class="dropdown-item" type="button">
					<i class="bi bi-circle-half pe-2"></i>
					Auto
				</button>
			</li>
		</ul>
	</li>
</template>

<script setup lang="ts">
// Add bootstrap dark theme
// TODO: Add a button to toggle the theme
document.documentElement.dataset.bsTheme = 'dark'
</script>
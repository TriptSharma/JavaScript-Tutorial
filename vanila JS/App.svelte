<h1>Hello World 🌎</h1>

<script>
	import FancyButton from './FancyButton.svelte';

	function handleClick() {
		console.log('clicked');
	}
</script>

<FancyButton on:click={handleClick}/>
<script>
	let foo = false;
	let foo1 = false;
	import { fade } from 'svelte/transition';

</script>

<svelte:head>
	<title>Subscribe</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Follow our Insta!</h1>

<div class="p-8 text-2xl max-w-2xl mx-auto flex flex-col justify-center align-middle">
	<p>
		Follow us on instagram @drinksfoodlife
	</p>

	<br /> <br />
	<p>
		To get our email =>
		{#if foo}
			<button in:fade={{ delay: 500 }} out:fade on:click={() => (foo = !foo)}
				><u>THANKS for clicking</u></button
			>
		{:else}
			<button
				in:fade={{ delay: 500 }}
				out:fade
				on:click={() => (foo = !foo)}
				on:click={() => alert('drinksfoodlife@gmail.com')}><u>Click Here</u></button
			>
		{/if}
	</p>

	<br />

</div>

<script>
	import { fade } from 'svelte/transition';

	let foo = false;
	let foo1 = false;
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Contact Us</h1>
<div class="p-8 text-2xl max-w-2xl mx-auto flex flex-col justify-center align-middle">
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
	<p>

		<br /> Contact us at drinksfoodlife@gmail.com with any questions about pitching an article or advertising that you may have. We
		are happy to offer a free consultation for any ad design related inquiries.
		<br />
	</p>
	<br /> <br />

	<p class="text-2xl max-w-2xl">

		<br />
	</p>
</div>

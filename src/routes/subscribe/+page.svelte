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
		If you want to stay updated on our latest drinks, food, and life stories, don’t forget to follow us on Instagram @drinksfoodlife You’ll get to see behind-the-scenes photos, videos, and tips from our amazing contributors and staff. Plus, you’ll be the first to know about our special offers, events, and giveaways. Just click on the link below and hit the follow button. It would be a tremendous honor connect with you!
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

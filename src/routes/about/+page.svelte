<script>
	let foo = false;
	let foo1 = false;
	import { fade } from 'svelte/transition';

</script>

<h1 class="text-4xl text-center my-8 uppercase">About NYC Sound Guy</h1>
<div class="p-8 text-2xl max-w-2xl mx-auto flex flex-col justify-center align-middle">
	<p>
		Founded with the desire to focus on drinks and food, but then life in its most general yet effervescent spirit came through. We have had contributions from @chemixtry, @journeyswithjaphe , Loic Luspo, @omlettehoe, @cosmicveggie and others.
		Contact us today!
	</p>
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
				on:click={() => alert('nycsoundpeople@gmail.com')}><u>Click Here</u></button
			>
		{/if}
	</p>
	<p>
		To get our number =>
		{#if foo1}
			<button in:fade={{ delay: 500 }} out:fade on:click={() => (foo1 = !foo1)}
				><u>THANKS for clicking</u></button
			>
		{:else}
			<button
				in:fade={{ delay: 500 }}
				out:fade
				on:click={() => (foo1 = !foo1)}
				on:click={() => alert('6176869710')}><u>Click Here</u></button
			>
		{/if}
	</p>

</div>

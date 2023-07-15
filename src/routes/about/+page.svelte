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


	<p>Drinks Food Life Magazine is a digital publication that celebrates the joys of drinking, eating, and living well. We feature stories, recipes, reviews, and tips from experts and enthusiasts who share our passion for quality and creativity. Whether you are looking for a new cocktail, a delicious meal, or a lifestyle inspiration, we have something for you.</p>

	<p>Our branded content is designed to help you discover and enjoy the best products and services in the drinks, food, and life categories. We work with trusted partners who share our values and vision, and we create engaging and informative content that showcases their unique offerings. Our branded content is always clearly labeled and follows the highest ethical standards.</p>
	<p>On our blog, you will find a behind-the-scenes view of how we create Drinks Food Life Magazine and our branded content. You will get to know our team, our contributors, and our partners, and learn more about their stories and expertise. You will also find exclusive content that is not available on our magazine, such as interviews, videos, and sneak peeks.</p>

	<p>We invite you to join our community of drinks, food, and life lovers, and share your feedback, questions, and suggestions with us. You can also subscribe to our newsletter and follow us on social media to get the latest updates on our magazine and our branded content. We hope you enjoy reading our blog as much as we enjoy creating it.</p>

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

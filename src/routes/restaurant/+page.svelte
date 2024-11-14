<script lang="ts">
	import { PageHeader } from "$components";
	import { MenuData } from "$data";
</script>

<PageHeader title="Authentic Smoked BBQ" imageUrl="images/featured.jpeg" />

<div class="container">
	<h2>
		<span>Restaurant Menu</span>
	</h2>

	{#each MenuData.categories as category}
		<section class="category">
			<h3>{category.name}</h3>
			<p>{category.description}</p>
			<div class="items">
				{#each category.items as item}
					<div class="item">
						<img src={item.imageUrl} alt="{item.name} photograph">
						<h4>{item.name}</h4>
						<p>{item.description}</p>
					</div>
				{/each}
			</div>
		</section>
	{/each}
</div>

<style>
	h2 {
		text-align: center;
		margin-top: var(--size-3);
		margin-bottom: var(--size-4);
	}
	h2 span {
		border-bottom: 2px solid var(--accent);
	}

	.category {
		padding-bottom: var(--size-3);
		margin-bottom: var(--size-3);
	}
	.category:not(:last-child) {
		border-bottom: 2px solid var(--accent);
	}
	.category h3 {
		text-transform: uppercase;
	}
	.category p {
		color: var(--gray-light);
	}

	.items {
		display: grid;
		gap: var(--size-3);
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		justify-content: space-between;
		margin-top: var(--size-3);
	}

	.item {
		display: flex;
		gap: var(--size-1);
		flex-direction: column;
	}
</style>

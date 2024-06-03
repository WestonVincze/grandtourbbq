<script lang="ts">
  export let category: string;
  export let description: string;

  type CategoryItem = {
    name: string,
    description: string,
    // price?
  }
  export let items: CategoryItem[];
</script>

<h2>{category}</h2>
<p>{description}</p>

<!-- for each option.. -->
{#each items as item}
  <h3>{item.name}</h3>
  <p>{item.description}</p>
{/each}

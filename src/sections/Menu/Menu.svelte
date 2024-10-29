<script lang="ts">
  import MenuData from "./MenuData.json";
  // export let category: string;
  // export let description: string;

  type Category = {
    name: string,
    description: string,
    items : CategoryItem[],
  }
  type CategoryItem = {
    name: string,
    description: string,
    // price?
  }
  // export let items: CategoryItem[];
</script>

{#each MenuData.categories as category}
<div class="category">
  <h2>{category.name}</h2>
  <p>{category.description}</p>

  {#each category.types as item}
  <div class="item">
    <h3>{item.name}</h3>
    <p>{item.description}</p>
  </div>
  {/each}
</div>
{/each}

<style>
  .category {
    border-bottom: 2px solid #eee;
    padding: 10px
  }

  .item {
    margin-left: 15px;
    margin-top: 10px;
  }
</style>

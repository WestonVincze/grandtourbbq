<script lang="ts">
  type Link = {
    text: string;
    url: string;
  }
  export let heading: string;
  export let links: Link[];

</script>

<div>
  <h3>{heading}</h3>

  <div class="links">
    {#each links as link}
      <a href="{link.url}">{link.text}</a>
    {/each}
  </div>
</div>

<style>
  h3 {
    text-transform: uppercase;
    font-weight: 800;
  }
  .links {
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-sm);
    font-weight: 300;
  }
</style>

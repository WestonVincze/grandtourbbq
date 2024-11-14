<script lang="ts">
  type Link = {
    text: string;
    url: string;
  }
  export let heading: string;
  export let links: Link[];

</script>

<div>
  <h4>{heading}</h4>

  <div class="links">
    {#each links as link}
      <a href="{link.url}">{link.text}</a>
    {/each}
  </div>
</div>

<style>
  h4 {
    text-transform: uppercase;
    font-weight: 800;
    margin-bottom: var(--size-1);
  }
  .links {
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-xs);
    font-weight: 300;
  }
</style>

<script lang="ts">
	import { Button } from "$components";

  export let heading: string;
  export let text: string;
  export let imageUrl: string;
  export let links: string[];
</script>

<div class="featured-content">
  <div class="image">
    <img src={imageUrl} alt="">
  </div>

  <div class="content">
    <h2>{heading}</h2>
    <p>{text}</p>
    <div class="button-group">
      {#each links as link}
        <Button href={`/${link}`} text={link} />
      {/each}
    </div>
  </div>
</div>

<style>
  .featured-content {
    display: flex;
    gap: var(--size-3);
  }
  .image {
    flex-grow: 1;
  }
  .content {
    flex-grow: 3;
  }
  .button-group {
    display: flex;
    gap: var(--size-2);
  }
</style>

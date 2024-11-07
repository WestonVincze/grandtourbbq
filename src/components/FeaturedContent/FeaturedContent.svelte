<script lang="ts">
  import type { Image } from "$types";
	import { Button } from "$components";

  type CTA = {
    href?: string;
    onClick?: () => void;
    text: string;
  }

  export let heading: string;
  export let text: string;
  export let image: Image;
  export let primaryCta: CTA | null = null;
  export let secondaryCta: CTA | null = null;
</script>

<div class="featured-content">
  <div class="image">
    <img src={image.src} alt={image.alt} />
  </div>

  <div class="content">
    <h2>{heading}</h2>
    <p>{text}</p>
    <div class="button-group">
      {#if primaryCta}
        <Button {...primaryCta} />
      {/if}
      {#if secondaryCta}
        <Button {...secondaryCta} variant="outlined" />
      {/if}
    </div>
  </div>
</div>

<style>
  .featured-content {
    display: flex;
    align-items: center;
    gap: var(--size-3);
  }
  .image {
    flex-grow: 1;
    flex-basis: 0;
    position: relative;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: var(--border-radius);
    box-shadow: var(--outer-shadow);
  }
  .content {
    flex-grow: 3;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    gap: var(--size-2);
  }
  .button-group {
    display: flex;
    gap: var(--size-2);
  }
</style>

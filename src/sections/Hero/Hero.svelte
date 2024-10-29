<script lang="ts">
  import HeroImage from "$lib/assets/Hero.jpeg";
  export let heading: string;

</script>

<div class="hero" style="--url: url('{HeroImage}')">
  <div class="content">
    <h1>{heading}</h1>
  </div>
</div>

<style>
  .hero {
    width: 100%;
    height: calc(100svh - var(--header-height));
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), var(--url);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

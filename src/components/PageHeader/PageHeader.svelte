<script lang="ts">
  export let title: string;
  export let imageUrl: string;
</script>

<div class="page-header" style="background-image: url('{imageUrl}')">
  <h1>{title}</h1>
</div>

<style>
  .page-header {
    width: 100svw;
    height: 35svh;
    background: linear-gradient(
      rgba(0, 0, 0, 0.3), 
      rgba(0, 0, 0, 0.3)
    );
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
</style>

<script lang="ts">
  import type { SvelteComponent } from "svelte";

  export let name: string;
  export let color: string = "currentcolor";
  export let size: number | string = "auto";

  let Icon: typeof SvelteComponent | null = null;

  async function loadToyComponent(name: string) {
    try {
      Icon = (await import(`./${name}.svelte`)).default;
    } catch (error) {
      console.error(`Failed to load component for toy: '${name}'\n\n`, 
      error);
      Icon = null;
    }
  }

  $: loadToyComponent(name);
</script>

<svelte:component this={Icon} {size} {color} />

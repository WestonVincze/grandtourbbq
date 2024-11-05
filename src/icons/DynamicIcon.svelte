<script lang="ts">
  import type { SvelteComponent } from "svelte";

  export let name: string;
  export let color: string = "currentcolor";
  export let width: number | string | undefined = undefined;
  export let height: number | string | undefined = undefined;

  let Icon: typeof SvelteComponent | null = null;

  async function tryLoadIcon(name: string) {
    try {
      Icon = (await import(`./${name}.svelte`)).default;
    } catch (error) {
      console.error(`Failed to load component for toy: '${name}'\n\n`, 
      error);
      Icon = null;
    }
  }

  $: tryLoadIcon(name);
</script>

<svelte:component this={Icon} {width} {height} {color} />

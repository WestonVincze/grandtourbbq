<script context="module">
  import { writable } from "svelte/store";
  export const themeContextKey = {};

  const defaults = {
    '--primary': 'tomato',
    '--padding': '10px'
  }

  const themeStore = writable(defaults);
</script>

<script>
  import { setContext } from "svelte";
  export let theme = {};

  $: $themeStore = { ...$themeStore, ...theme };

  setContext(themeContextKey, { theme: themeStore })
</script>

<slot theme={$themeStore} />

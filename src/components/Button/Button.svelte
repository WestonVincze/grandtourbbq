<script lang="ts">
  export let href: string | null = null;
  export let onClick: (() => void) | null = null;
  export let text: string;
  export let variant: "default" | "outlined" = "default";
  export let size: "sm" | "md" | "lg" = "md";

  const handleClick = (event: MouseEvent) => {
    if (!onClick) return;

    event.preventDefault();
    onClick();
  }
</script>

<a
  class="button {variant} {size}"
  href={href || "#"}
  on:click={handleClick}
>
  {text}
</a>

<style>
  .button {
    padding: 4px 8px;
    font-weight: 800;
    text-transform: uppercase;
    border-radius: var(--border-radius);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25), /* Outer shadow */
                inset -2px 3px 6px rgba(255, 255, 255, 0.15); /* Inner shadow */
    transition: box-shadow 0.3s, filter 0.3s;
  }
  .button:hover {
    cursor: pointer;
    filter: brightness(90%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35), /* Outer shadow */
                inset -3px 4px 8px rgba(255, 255, 255, 0.2); /* Inner shadow */
  }

  /* variants */
  .default {
    color: var(--gray-dark);
    background-color: var(--secondary);
    border: 1px solid var(--secondary);
  }
  .outlined {
    color: var(--secondary);
    background-color: var(--gray-dark);
    border: 1px solid var(--secondary);
  }

  /* sizes */
  .sm {
    font-size: var(--font-size-sm);
  }
  .md {
    font-size: var(--font-size-md);
  }
  .lg {
    font-size: var(--font-size-lg);
  }
</style>

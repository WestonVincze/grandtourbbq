<script lang="ts">
  import { DynamicIcon } from "$icons";

  export let iconName: string; 
  export let heading: string;
  export let href: string;
</script>

<a {href} class="pill">
  <h2>{heading}</h2>
  <div class="icon">
    <DynamicIcon name={iconName} size={120} />
  </div>
</a>

<style>
  .pill {
    width: 220px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: var(--size-2);
    padding: var(--size-3);
    border-radius: var(--border-radius);
    background-color: var(--black);
    box-shadow: var(--outer-shadow), var(--inner-highlight);
  }
  h2 {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 1.6rem;
  }
  .icon {
    color: var(--secondary);
  }
</style>

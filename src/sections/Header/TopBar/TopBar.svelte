<script lang="ts">
	import { SocialLinks } from "$components";
</script>

<div class="top-bar">
  <div class="container">
    <div class="icon-text">
      <img src="icons/location.svg" alt="Location Icon">
      {'Wincey Mills, 31 Mechanic St, Paris, ON'}
    </div>
    <div class="right">
      {'Call for booking information |'}
      <a href="tel:18006790026" class="icon-text">
        <img src="icons/phone.svg" alt="Phone Icon" />
        {'1 (800) 679-0026'}
      </a>
      <SocialLinks />
    </div>
  </div>
</div>

<style>
  .top-bar {
    background-color: var(--accent);
    color: var(--primary);
    font-size: 14px;
    padding: var(--size-1) 0;
  }
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--size-3);
    max-width: 1280px;
  }
  .icon-text {
    display: flex;
    gap: var(--size-2);
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--size-2);
  }
  img {
    max-width: 14px;
  }
  @media (max-width: 1530px) {
    .container {
      padding-left: 125px;
    }
  }
</style>

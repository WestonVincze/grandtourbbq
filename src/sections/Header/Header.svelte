<script lang="ts">
  import Logo from "$icons/Logo.svg";
	import { SocialLinks } from "$components";
</script>

<div class="top-bar">
  <div class="container">
    <span class="flex">
      <img src="icons/location.svg" alt="Location Icon">
      Wincey Mills, 31 Mechanic St, Paris, ON
    </span>
    <span class="flex">
      Call for booking information | 
      <a href="tel:">
        <img src="icons/phone.svg" alt="Phone Icon" />
        1 (800) 679-0026
      </a>
    </span>
    <span>
      <SocialLinks />
    </span>
  </div>
</div>

<nav>
  <div class="nav-container container">
    <div class="brand">
      <img src={Logo} alt="Grand Tour BBQ Logo" />
      <span>Grand Tour BBQ</span>
    </div>

    <div class="links">
      <a href="">Catering</a>
      <a href="">Menu</a>
      <a href="">Events</a>
      <a href="">Contact Us</a>
    </div>
  </div>
</nav>

<style>
  .top-bar {
    background-color: var(--accent);
    color: var(--primary);
  }
  .top-bar .container {
    display: flex;
    justify-content: space-between;
  }

  nav {
    background-color: var(--bg-secondary);
  }
  .nav-container {
    display: flex;
    justify-content: space-between;
    height: var(--header-height);
    color: var(--primary);
  }
  .brand {
    display: flex;
  }
  .brand img {
    width: 65px;
    height: auto;
  }
  .brand span {
    text-transform: uppercase;
  }
</style>
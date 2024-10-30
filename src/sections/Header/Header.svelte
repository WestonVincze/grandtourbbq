<script lang="ts">
  import Logo from "$icons/Logo.svg";
	import { TopBar } from "./TopBar";
</script>

<div class="header">
  <TopBar />

  <nav>
    <div class="container">
      <div class="brand">
        <img class="logo" src={Logo} alt="Grand Tour BBQ Logo" />
        <span>Grand Tour BBQ</span>
      </div>

      <div class="links">
        <a href="/catering">Catering</a>
        <a href="/restaurant">Restaurant</a>
        <a href="/events">Events</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  </nav>
</div>

<style>
  .header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.65);
  }
  nav {
    background-color: var(--black);
  }
  .container {
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--header-height);
    color: var(--primary);
  }
  .brand {
    display: flex;
    gap: var(--size-2);
    align-items: center;
  }
  .brand span {
    font-size: var(--font-size-lg);
    font-weight: 800;
    text-transform: uppercase;
  }
  .logo {
    width: 100px;
  }
  .links {
    display: flex;
    justify-content: space-between;
    gap: var(--size-3);
    font-size: var(--font-size-md);
  }
  .links a {
    position: relative;
  }
  .links a::after {
    content: "";
    position: absolute;
    left: 2%;
    bottom: 0;
    width: 0%;
    height: 1.5px;
    background-color: #FFF;
    transition: width 0.3s;
  }
  .links a:hover::after {
    width: 98%;
  }
  @media (min-width: 1530px) {
    .logo {
      position: absolute;
      top: 5px;
      right: calc(1280px + calc((100vw - 1280px) / 2));
    }
  }
</style>

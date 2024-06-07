<script lang="ts">
  import { Icon } from "../Icon";
  import Logo from "../../icons/Logo.svg";
</script>

<div class="top-info">
  <div class="container">
    <span>
      LOCATION
    </span>
    <span>
      PHONE
    </span>
    <span>
      SOCIAL LINKS
    </span>
  </div>
</div>

<nav>
  <div class="nav-container container">
    <div class="brand">
      <img src={Logo} alt="Grand Tour BBQ Logo" />
    </div>

    <div class="links">
    </div>
  </div>
</nav>

<style>
  .top-info {
    background-color: var(--accent);
    color: var(--primary);
  }
  .top-info .container {
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
  .brand img {
    width: 65px;
    height: auto;
  }
</style>
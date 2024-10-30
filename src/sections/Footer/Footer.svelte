<script lang="ts">
  import Logo from "$icons/Logo.svg";
	import { SocialLinks } from '$components';
	import { LinkStack } from './LinkStack';
</script>

<footer>
  <div class="container">
    <div class="section upper">
      <div class="brand">
        <img class="logo" src={Logo} alt="Grand Tour BBQ Logo" />
      </div>

      <div class="links">
        <LinkStack heading="Menus" links={[
            { url: "/catering", text: "Catering" },
            { url: "/restaurant", text: "Restaurant" },
            { url: "/food-truck", text: "Food Truck" },
          ]}
        />
        <LinkStack heading="Quick Links" links={[
            { url: "#", text: "Catering Services" },
            { url: "#", text: "Event Schedule" },
          ]}
        />
        <LinkStack heading="Contact Info" links={[
            { url: "#", text: "Email Us" },
            { url: "#", text: "Call Us" },
          ]}
        />
        <LinkStack heading="Follow Us" links={[
            { url: "#", text: "Facebook Page" },
            { url: "#", text: "Instagram Feed" },
          ]}
        />
        <LinkStack heading="Resources" links={[
            { url: "#", text: "Blog" },
            { url: "#", text: "Reviews" },
            { url: "#", text: "FAQs" },
          ]}
        />
        <LinkStack heading="Legal" links={[
            { url: "#", text: "Terms & Conditions" },
            { url: "#", text: "Privacy Policy" },
          ]}
        />
      </div>
    </div>

    <div class="section lower">
      <span class="copyright">
        {'Copyright © 2024 Grand Tour BBQ Inc - All Rights Reserved'}
      </span>
      <span class="hst">
        {'HST# 726244411RT0001'}
      </span>
      <SocialLinks />
    </div>
  </div>

</footer>

<style>
  footer {
    background-color: var(--black);
    padding: var(--size-2) 0;
  }
  .section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--size-2);
    padding: var(--size-2) 0;
  }
  .upper {
    border-bottom: 1px solid var(--accent);
  }
  .links {
    display: flex;
    gap: var(--size-3);
  }
  .logo {
    width: 100px;
  }
  .copyright {
    flex-grow: 1;
  }
  .copyright, .hst {
    color: var(--gray-light);
    font-size: var(--font-size-sm);
  }
</style>

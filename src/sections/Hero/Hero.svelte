<script lang="ts">
  import { Pill, FeaturedContent } from "$components";
</script>

<div class="hero">
  <div class="featured">
    <FeaturedContent 
      heading="Authentic BBQ For Any Occasion" 
      text="We select quality meats and ingredients. We strive to make sure every element of our menu represents quality. We use top-grade wood logs that compliment the flavours of the food. Our choice wood includes cherry and oak." 
      image={{ src: "images/featured.jpeg", alt: "Smoked Meat" }}
      primaryCta={{ href: "#", text: "Menu" }}
      secondaryCta={{ href: "#", text: "Call Us" }}
    />
  </div>
  <div class="fire">
    <div class="icons">
      <Pill iconName={"FoodTruck"} heading="Food Truck" href="/" />
      <Pill iconName={"Catering"} heading="Catering" href="/" />
      <Pill iconName={"Restaurant"} heading="Restaurant" href="/" />
    </div>
  </div>
</div>

<style>
  .hero {
    --fire-height: 100px;
    width: 100%;
    height: calc(100svh - var(--header-height));
    background-color: var(--gray-dark);
  }
  .featured {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 30%;
    width: 75%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding-top: 25px;
  }
  .fire {
    opacity: 75%;
    height: calc(70% - var(--fire-height));
    position: relative;
    display: flex;
    align-items: center;
    background-color: var(--accent);
    background: linear-gradient(to bottom, var(--accent) 0%, #470B0A 95%);
    margin-top: var(--fire-height);
  }
  .fire::before {
    content: '';
    width: 100%;
    height: var(--fire-height);
    position: absolute;
    left: 0;
    bottom: 100%;
    background-image: url('fire.svg');
    background-repeat: repeat-x;
    background-position: bottom;
    background-size: auto var(--fire-height);
  }
  .icons {
    display: flex;
    gap: var(--size-2);
    justify-content: center;
    width: 100%;
  }
</style>

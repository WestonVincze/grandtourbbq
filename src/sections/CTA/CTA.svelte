<script lang="ts">
	import { Button } from "$components";
</script>

<div class="container">
  <h3>
    <span class="underline">Let's Get in Touch</span>
  </h3>

  <div class="cta">
    <div class="contact">
      <section>
        <h4>Call Us</h4>
        <a href="tel:"></a> Toll Free
        <a href="tel:"></a> Restaurant Direct
        <a href="tel:"></a> Catering Direct
      </section>

      <section>
        <h4>Email Us</h4>
        <a href="mailto:"></a>
      </section>

      <section>
        <h4>Visit Us</h4>
        <p>31 mechanic Street, Paris, ON, N3L 1K1, Canada</p>

        <p>Wincey Mills</p>
        <span>Thursday - Sunday</span>
        <span>10am - 6pm</span>
      </section>
    </div>

    <form action="">
      <h4>How Can We Help?</h4>
      <input name="name" placeholder="Name" type="text">
      <input name="email" placeholder="Email" type="text">
      <input name="subject" placeholder="Subject" type="text">
      <input name="message" placeholder="message" type="textbox">
      <Button text="Send" onClick={() => console.log('sent')} />
    </form>
  </div>
</div>

<style>
  h3 {
    text-align: center;
  }

  .cta {
    display: flex;
    gap: var(--size-2);
  }
  .cta .contact {
    flex-grow: 1;
  }
  .cta form {
    flex-grow: 2;
  }

  .contact section {
    border-bottom: 2px solid var(--primary);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: var(--size-2);
    background-color: #1118;
    border-radius: var(--border-radius);
    box-shadow: var(--outer-shadow), var(--inner-highlight);
    padding: var(--size-2);
  }

  form h4 {
    text-align: center;
  }

  form input {
    border-radius: var(--border-radius);
    padding: var(--size-1) var(--size-2);
  }

</style>

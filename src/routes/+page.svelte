<script>
  import { Events } from "../components/Events";
	import Hero from "../components/Hero/Hero.svelte";
	import Menu from "../components/Menu/Menu.svelte";
  // square integration POC
  /*
  const appId = 'your-app-id';
  const locationId = 'your-location-id';

  let card;

  async function initializePaymentForm() {
    if (!Square) {
      throw new Error('Square.js failed to load properly');
    }
    const payments = Square.payments(appId, locationId);
    try {
      card = await payments.card();
      await card.attach('#card-container');
    } catch (e) {
      console.error('Initializing Card failed', e);
      return;
    }
  }
  */

  /*
  // @azure/identity
  const credential = new ClientSecretCredential(
    'YOUR_TENANT_ID',
    'YOUR_CLIENT_ID',
    'YOUR_CLIENT_SECRET',
  );

  // @microsoft/microsoft-graph-client/authProviders/azureTokenCredentials
  const authProvider = new TokenCredentialAuthenticationProvider(credential, {
    // The client credentials flow requires that you request the
    // /.default scope, and pre-configure your permissions on the
    // app registration in Azure. An administrator must grant consent
    // to those permissions beforehand.
    scopes: ['https://graph.microsoft.com/.default'],
  });

  const graphClient = Client.initWithMiddleware({ authProvider: authProvider });
  */
</script>

<Hero heading="Grand Tour BBQ on the Grand River!" />

<div class="bg-primary">
  <div class="container">
    <h2>Upcoming Events</h2>
    <Events />
    <Menu />
  </div>
</div>

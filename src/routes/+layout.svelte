<script>
	import { Header, Footer } from '$sections';
	import '../styles/global.css';
	import '../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
	<link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&family=Wellfleet&display=swap" rel="stylesheet">
</svelte:head>

<Header />

<slot></slot>

<Footer />

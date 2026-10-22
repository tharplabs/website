<script setup>
const credit = {
  name: 'Marie Tharp',
  url: 'https://id.loc.gov/authorities/names/n50012056.html',
}
</script>

<template>
  <main class="page">
    <h1 class="title">Tharp Labs Inc.</h1>

    <figure class="map">
      <picture>
        <source
          type="image/webp"
          srcset="/ocean-floor-800.webp 800w, /ocean-floor-1400.webp 1400w, /ocean-floor-2000.webp 2000w"
          sizes="(min-width: 1200px) 1100px, 92vw"
        />
        <img
          src="/ocean-floor-1400.jpg"
          alt="World Ocean Floor panorama by Marie Tharp and Bruce Heezen"
          width="1400"
          height="809"
          fetchpriority="high"
          decoding="async"
        />
      </picture>
      <figcaption class="credit">
        Map by
        <a :href="credit.url" target="_blank" rel="noopener">{{ credit.name }}</a>,
        courtesy of the Library of Congress
      </figcaption>
    </figure>

    <p class="contact">george [at] tharplabs [dot] com</p>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(1rem, 3vw, 2rem);
  padding: clamp(1.5rem, 5vw, 4rem) 1rem;
  text-align: center;
}

.title {
  margin: 0;
  font-size: clamp(1.75rem, 5vw, 3.25rem);
  font-weight: 600;
  letter-spacing: -0.02em;
}

.map {
  margin: 0;
  width: min(100%, 1100px);
}

.map img {
  display: block;
  width: 100%;
  height: auto;
}

.credit {
  margin-top: 0.6rem;
  font-size: 0.75rem;
  color: #666;
}

.credit a {
  color: inherit;
}

.contact {
  margin: 0;
  font-size: clamp(0.9rem, 2vw, 1.05rem);
  color: #333;
}
</style>

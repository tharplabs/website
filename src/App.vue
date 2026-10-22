<script setup>
import map800 from './assets/ocean-floor-800.webp'
import map1400 from './assets/ocean-floor-1400.webp'
import map2000 from './assets/ocean-floor-2000.webp'
import mapJpg from './assets/ocean-floor-1400.jpg'

const mapSrcset = `${map800} 800w, ${map1400} 1400w, ${map2000} 2000w`

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
          :srcset="mapSrcset"
          sizes="(min-width: 1200px) 960px, 88vw"
        />
        <img
          :src="mapJpg"
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
  gap: clamp(2rem, 5vw, 3.5rem);
  padding: clamp(3rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem);
  text-align: center;
}

.title {
  margin: 0;
  font-size: clamp(1.75rem, 5vw, 3.25rem);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.map {
  margin: 0;
  width: min(100%, 960px);
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

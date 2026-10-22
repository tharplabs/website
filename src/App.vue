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
/*
 * The page is locked to the viewport: every vertical measure scales with the
 * viewport height, and the map's width is capped by the height left over
 * after the title, caption, email, gaps and padding (--reserved).
 */
.page {
  --pad-y: clamp(1rem, 7vh, 6rem);
  --pad-x: clamp(1rem, 6vw, 5rem);
  --gap: clamp(0.75rem, 5vh, 3.5rem);
  --title-size: clamp(1.25rem, min(5vw, 6vh), 3.25rem);
  --caption-h: 1.7rem;
  --contact-h: 1.5rem;
  --reserved: calc(
    2 * var(--pad-y) + 2 * var(--gap) + 1.2 * var(--title-size) + var(--caption-h) +
      var(--contact-h)
  );
  --map-ratio: 1.73; /* 3024 x 1748 source image */

  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap);
  padding: var(--pad-y) var(--pad-x);
  text-align: center;
}

.title {
  margin: 0;
  font-size: var(--title-size);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.map {
  margin: 0;
  width: min(100%, 960px, (100dvh - var(--reserved)) * var(--map-ratio));
}

.map img {
  display: block;
  width: 100%;
  height: auto;
}

.credit {
  margin-top: 0.6rem;
  font-size: 0.75rem;
  line-height: 1.4;
  color: #666;
}

.credit a {
  color: inherit;
}

.contact {
  margin: 0;
  font-size: clamp(0.85rem, 2vw, 1.05rem);
  line-height: 1.4;
  color: #333;
}
</style>

<script>
    import LocomotiveScrollProvider from 'svelte-locomotive-scroll';
      import 'locomotive-scroll/src/locomotive-scroll.scss';
  
      import { page } from '$app/stores';
  
      import '../app.css';
  </script>
  
  <LocomotiveScrollProvider
      options={{
          smooth: true,
          smoothMobile: false,
          getDirection: true,
          getSpeed: true,
          inertia: 0.5
      }}
      watch={$page}
      location={$page.url}
      onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 2, disableLerp: false })}
      imageTarget={'.grid-item-media'}
  >
      <slot />
  </LocomotiveScrollProvider>
  
  <style>
    
  </style>
  
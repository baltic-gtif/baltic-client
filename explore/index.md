---
layout: false
---

<script setup>
    import { withBase } from 'vitepress'
   import VPNav from 'vitepress/dist/client/theme-default/components/VPNav.vue';>
</script>
<style>
eo-dash a[href="https://eox.at"] img{
   display: unset;
   height: 9px;
}
eo-dash .eodash-overlay p {
   bottom: -13px !important;
}

</style>
<VPNav />
<eo-dash :config="withBase('/configs/firstconfig.js')"/>

<style scoped>
  eo-dash {
    display:block;
    position: relative;
    top: var(--vp-nav-height);
    height: calc(100dvh - var(--vp-nav-height)) !important;
  }
  @media (max-width: 960px) {
    eo-dash {
      top: 0;
    }
  }
</style>

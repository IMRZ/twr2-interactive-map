<template>
  <div class="map-view paper">
    <router-view :key="mapId" />
    <div class="wrap paper-edges"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    mapId: String
  }
});
</script>

<style lang="scss" scoped>
.map-view {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.paper {
  $slice: 80;
  border-image-slice: $slice $slice $slice $slice fill;
  border-image-width: #{$slice}px #{$slice}px #{$slice}px #{$slice}px;
  border-image-repeat: repeat;
  border-image-source: url('~@/assets/ui/skins/default/paper_background.png');
}

.paper-edges {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 2000;
  opacity: 0.4;

  $slice: 80;
  border-image-slice: $slice $slice $slice $slice fill;
  border-image-width: #{$slice}px #{$slice}px #{$slice}px #{$slice}px;
  border-image-repeat: repeat;
  border-image-source: url('~@/assets/ui/skins/default/paper_background_edges.png');
}
</style>

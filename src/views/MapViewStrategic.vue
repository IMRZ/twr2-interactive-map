<template>
  <div class="container" ref="container"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

import { useLeaflet } from '@/use/leaflet';
import { useState } from '@/use/state';

export default defineComponent({
  props: {
    mapId: String
  },
  setup(props) {
    const container = ref();

    const { maps } = useState();
    const selectedMap = maps.value.find(map => map.id === props.mapId);

    if (selectedMap === undefined) {
      throw new Error(`could not find map: ${props.mapId}`);
    }

    useLeaflet({
      container: container,
      bounds: [[0, 0], [selectedMap.height, selectedMap.width]], // eslint-disable-line prettier/prettier
      imageLayer: {
        imagePath: selectedMap.mapImagePath
      }
    });

    return {
      container
    };
  }
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>

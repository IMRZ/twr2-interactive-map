import { Ref, onMounted, onUnmounted } from '@vue/composition-api';

import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapOptions {
  container: Ref<HTMLElement | undefined>;
  bounds: Leaflet.LatLngBoundsLiteral;
  gutter?: number;

  imageLayer: {
    imagePath: string;
    eventListeners?: [string, () => void][];
  };
}

export function useLeaflet(options: MapOptions): void {
  let map: Leaflet.Map;

  onMounted(() => {
    const container = options.container.value ?? ''; // TODO: throw error?
    const bounds = createBoundsWithGutter(options.bounds, options.gutter);

    map = Leaflet.map(container, {
      crs: Leaflet.CRS.Simple,
      inertiaMaxSpeed: Infinity,
      doubleClickZoom: false,
      attributionControl: false,
      zoomControl: false,
      minZoom: -2,
      maxZoom: 2,
      maxBounds: bounds
    });

    // add imageLayer
    const imageLayer = createImageOverlay(
      options.imageLayer.imagePath,
      options.bounds
    );
    map.addLayer(imageLayer);

    map.fitBounds(bounds);
  });

  onUnmounted(() => {
    map?.remove();
  });
}

export function createBoundsWithGutter(
  bounds: Leaflet.LatLngBoundsLiteral,
  gutter: number = 0
): Leaflet.LatLngBoundsLiteral {
  const [[y1, x1], [y2, x2]] = bounds;

  return [
    [y1 - gutter, x1 - gutter],
    [y2 + gutter, x2 + gutter]
  ];
}

export function createImageOverlay(
  imagePath: string,
  bounds: Leaflet.LatLngBoundsLiteral,
  options?: Leaflet.ImageOverlayOptions
) {
  return Leaflet.imageOverlay(imagePath, bounds, options);
}

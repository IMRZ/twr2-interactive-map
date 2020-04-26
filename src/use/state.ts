import { reactive, toRefs } from '@vue/composition-api';

import { maps } from '@/data';

const state = reactive({
  maps: maps
});

export function useState() {
  return {
    ...toRefs(state)
  };
}

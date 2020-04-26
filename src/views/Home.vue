<template>
  <div
    id="home"
    :class="[selectedCampaign.id]"
    @mouseleave="selectedCampaign = campaigns[3]"
  >
    <!-- <div class="header">
      <img style="height: 8em;" src="@/assets/ui/lcd/logo_32.png" />
    </div> -->
    <div class="list acrylic">
      <div
        class="campaign"
        v-for="(campaign, campaignIndex) in campaigns"
        :key="campaign.id"
        :class="{ active: selectedCampaign === campaign }"
        @mouseenter="selectedCampaign = campaign"
      >
        <div class="wrapper">
          <router-link class="card" tag="div" :to="`/map/${campaign.id}/strategic`">
            <div class="preview">
              <img
                class="image"
                :src="require(`@/assets/preview/${campaign.id}.png`)"
              />
            </div>
            <div class="title">
              <img class="emblem"
                :src="require(`@/assets/ui/fe/fe_backdrop_emblem_${campaign.id}.png`)"
                :class="{ 'nudge-left': campaignIndex === campaigns.indexOf(selectedCampaign) - 1, 'nudge-right': campaignIndex === campaigns.indexOf(selectedCampaign) + 1 }"
              />
              <div class="name"
                :class="{ 'nudge-left': campaignIndex === campaigns.indexOf(selectedCampaign) - 1, 'nudge-right': campaignIndex === campaigns.indexOf(selectedCampaign) + 1 }"
              >
                {{campaign.name}}
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="footer">
      <a
        class="github"
        href="https://github.com/IMRZ/twr2-interactive-map"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api';

import { maps } from '@/data';

export default defineComponent({
  setup() {
    const state = reactive({
      selectedCampaign: maps[3]
    });

    return {
      ...toRefs(state),
      campaigns: maps
    };
  }
});
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.acrylic {
  backdrop-filter: blur(10px);
  background-blend-mode: exclusion;
  background: rgba(0, 0, 0, 0.6);
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEO0lEQVRYR4WYC47iMBAFieaMcEjmkFm1tRVVCrM70ojEOP17r187HOd5/vz+/j7mn7+5fr/fa+35fK7l1+t1rbH3PM+1x8/z3Dwzz2KDa2yPvVljHfvzHPbn83g+nz8ENpv9INfjdK75m/saciJzzZ55zkHaB8Eex/EgWRdp9q4AGwDOyZDgcOwMCWScUL35fhzO2vwVDZ4nKRCazwZ6vN/vq4KGtJAAo6vHWqGee5xi09CODQc3ieAP+9yvCporZEfW5Yq/N+xUDDSotrnr63LUfvzdFaBJ6uqZW1RqceMvpOZiG8p2zHOux6ch3TXl4S7ecYK1Vg6YWhXzlwpPEG4W9hBcOxgUVhc/Ho9bFzsgB+zuoglMbkNLp1quLgnIRbsf2/B7NYkNWdPMo2oj99ZId/JOBw1tu7+yBUJXF7vM5gbQ4rCQWqKQJQIFYoIx/K3oTuznucVBEx4j5lyNtXudhBN1VZYz6SKVh5/s7SS6dTFC2SrttMzS5IkzNgjEXc860FGx3WSxkK8msbOqPmOIIIDffKrIWqSpkBvO/EWkXW1PlMXByosDrmzY4U63ut/dTVJuELjtT4v2BbGbwE5cnYpz4SkShdpcNW0YjbPWgXE7LFT3qlHNcic1rAFddZUp5PntxoAePHeroJuDagCL7+3UQe5Ed55vAAThhN3FRubSQXdOr33fhrDkfKND5QZ43XgUAo7D3ZvMILQN0LORrF1FNwIVZfbumqC6apR89lx0mC4mk92BoNX719nN/DIHXbFvrwTsAYWLy8gMGZcvlhIHC7cQYMPrKlAd2zHfeg5EwG8QmyOG2Ud4MjKB66ik5x6nht+KYZ9WgZX8t5cmGycoqgaUrjbiayUoZZyAg+26+f0x6mzU8BhS9lh4K0ttHJw62UqXv8P3h8y4wzwZgNO652mwg5e5Dc+wYb00jVjn5LM+eWlyWa1tNTBB9S0ODpGcTzc9Z1b4nXCLMN9dEPvBnRGCwGHlBnhw2IZwFTuJnHARvFWwegjH/EqJcescQVsyzCeqztFtgmiihtVUuN5JTFg2z5ohtqzsxNfS0WlhefKrwG6MWqxXBXFGYK7YrlN3w79aau616918dHvPjZcezonaL89k6iCqbWie+eaKeWx5JlsrZ38PvzvdvMmMszCpOxFwVMitm24qN4yTcyV97VPOx28z36QCoW7gpoCJ7pnazoSDlayqxxp1AzFZMcIMecW26t/O3wk2di3E0MDaV5qsXvDPbyZ6BdStb9K7c3mmI2t36CgS3mMKXS/uSIozMi+ccYW2mZej2HGTmKPmssfggpjfZlwxYOUtzlOiWoej/x0gdjP8WzHMxQ8dLKcIyNVkEhh2B+pg/IOSK9kfmlAQc/hjFnuCWON2EuCO7ZxtZ/eE7XvsoItN/moSd1oFuPcWc1fREuUfJz0yOwItzkgTfJ/PP0Hs471n6yqYAAAAAElFTkSuQmCC');
}

.original {
  background-image: url('~@/assets/ui/fe/fe_backdrop_original.png');
}

.ed {
  background-image: url('~@/assets/ui/fe/fe_backdrop_ed.png');
}

.emperor {
  background-image: url('~@/assets/ui/fe/fe_backdrop_emperor.png');
}

.gaul {
  background-image: url('~@/assets/ui/fe/fe_backdrop_gaul.png');
}

.hannibal {
  background-image: url('~@/assets/ui/fe/fe_backdrop_hannibal.png');
}

.invasion {
  background-image: url('~@/assets/ui/fe/fe_backdrop_invasion.png');
}

.sparta {
  background-image: url('~@/assets/ui/fe/fe_backdrop_sparta.png');
}

.header {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  height: 5em;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer {
  position: fixed;
  // background-color: rgba(0, 0, 0, 0.4);
  height: 3em;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}

.github {
  background-image: url('~@/assets/GitHub-Mark-Light-32px.png');
  width: 32px;
  height: 32px;
}

.list {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}

.campaign {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:first-child {
    padding-left: 4em;
  }

  &:last-child {
    padding-right: 4em;
  }

  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.card {
  position: absolute;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.1s;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  .campaign.active & {
    background-color: black;
    width: calc(100% + 2em);
    filter: drop-shadow(0 0 15px black);
  }
}

.preview {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  .image {
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    position: absolute;
    opacity: 0;
    transition: all 0.2s;

    .campaign.active & {
      opacity: 1;
      animation: zoom 40s infinite ease-in-out;
    }
  }

  @keyframes zoom {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
}

.title {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  .campaign.active & {
    background-color: rgba(0, 0, 0, 0.6);
  }
}

.nudge-left {
  transform: translateX(-2em);
}

.nudge-right {
  transform: translateX(2em);
}

.emblem {
  width: 250px;
  transition: transform .2s;
}

.name {
  color: grey;
  font-size: 1.2em;
  padding: 1em;
  width: 100%;
  text-align: center;
  transition: transform .2s;

  .campaign.active & {
    color: white;
  }
}
</style>

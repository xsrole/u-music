<script setup lang="ts" name="">
const { playerShow } = storeToRefs(useAppStore());
const { song } = storeToRefs(usePlayerStore());
const showClass = computed(() => {
  return playerShow.value
    ? `visible opacity-100 translate-y-0`
    : `invisible opacity-0 translate-y-100%`;
});
</script>
<template>
  <div
    v-if="song"
    fixed
    left="0"
    top="14"
    right="0"
    bottom="0"
    bg="opacity-30 white dark:dark-8"
    flex="~ col 1"
    transition="all duration-300 ease-in-out"
    class="z-999 backdrop-blur-xl"
    :class="showClass"
  >
    <div
      absolute
      w="full"
      h="full"
      z="-1"
      class="bg-linear backdrop-blur-3xl backdrop-saturate-50 backdrop-brightness-110"
    ></div>
    <img
      absolute
      w="full"
      h="full"
      class="object-full"
      z="-2"
      :src="song.al.picUrl"
    />
    <main flex="~ col 1 shrink-1" min-h="0">
      <div flex="~ col" items="center" gap="1" m="t-3">
        <h1 text="2xl">
          <span>{{ song.name }}</span>
        </h1>
        <p text="sm">
          <span v-for="(item, index) in song.ar" :key="index">
            {{ item.name }}
          </span>
          -
          <span>{{ song.al.name }}</span>
        </p>
      </div>
      <div flex="~" items="center" justify="center" p="y-1">
        <span w="200px" h="1px" bg="gray-300"></span>
      </div>
      <div flex="~ shrink-1 1" min-h="0">
        <player-cover w="1/3" />
        <player-lyric w="1/3" />
        <player-rec w="1/3" />
      </div>
    </main>
    <footer w="full" h="20">
      <player-mini />
    </footer>
  </div>
</template>
<style scoped lang="less">
.bg-linear {
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.6)
  );
}
.dark {
  .bg-linear {
    background-image: linear-gradient(
      to top,
      rgb(0, 0, 0),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.6)
    );
  }
}
</style>

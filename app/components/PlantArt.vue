<script setup lang="ts">
// Flat illustration of the product, drawn from its art type and colours.
const props = defineProps<{ art: string; leaf: string; pot: string; bg?: string }>()
const isPlant = computed(() => !['pot', 'bag', 'bottle', 'tool', 'can', 'pebbles'].includes(props.art))
</script>

<template>
  <svg viewBox="0 0 200 220" class="plant-art" role="img" aria-hidden="true">
    <rect width="200" height="220" :fill="bg || '#eef3ea'" />
    <template v-if="isPlant">
      <!-- foliage -->
      <g :fill="leaf">
        <template v-if="art === 'trail'">
          <path d="M100 140 C70 120 50 150 40 190" stroke="#4e7a2a" stroke-width="3" fill="none" />
          <path d="M100 140 C130 120 155 150 160 195" stroke="#4e7a2a" stroke-width="3" fill="none" />
          <ellipse v-for="(l, i) in [[70,128],[52,152],[44,178],[130,128],[150,155],[158,182],[100,112],[85,118],[118,116]]" :key="i" :cx="l[0]" :cy="l[1]" rx="13" ry="9" :transform="`rotate(${i * 37} ${l[0]} ${l[1]})`" />
        </template>
        <template v-else-if="art === 'palm'">
          <path v-for="a in [-60,-35,-12,12,35,60]" :key="a" d="M100 140 Q100 80 100 40 Q112 80 100 140Z" :transform="`rotate(${a} 100 140)`" />
        </template>
        <template v-else-if="art === 'lily'">
          <ellipse v-for="a in [-50,-25,0,25,50]" :key="a" cx="100" cy="95" rx="16" ry="45" :transform="`rotate(${a} 100 140)`" />
          <ellipse cx="100" cy="62" rx="7" ry="16" fill="#fff" />
        </template>
        <template v-else-if="art === 'upright'">
          <g v-for="x in [80,100,120]" :key="x">
            <rect :x="x - 2" y="50" width="4" height="90" fill="#355e1e" />
            <ellipse v-for="y in [60,80,100,120]" :key="y" :cx="x" :cy="y" rx="10" ry="6" />
          </g>
        </template>
        <template v-else-if="art === 'broad' || art === 'fig'">
          <ellipse v-for="(a, i) in [-45,-15,15,45]" :key="a" cx="100" cy="85" :rx="art === 'fig' ? 24 : 18" :ry="art === 'fig' ? 34 : 40" :transform="`rotate(${a} 100 140)`" :opacity="1 - i * 0.05" />
        </template>
        <template v-else-if="art === 'monstera'">
          <g v-for="a in [-40,0,40]" :key="a" :transform="`rotate(${a} 100 140)`">
            <ellipse cx="100" cy="78" rx="30" ry="34" />
            <rect x="80" y="62" width="10" height="4" fill="#eef3ea" transform="rotate(-20 85 64)" />
            <rect x="110" y="62" width="10" height="4" fill="#eef3ea" transform="rotate(20 115 64)" />
            <rect x="78" y="82" width="12" height="4" fill="#eef3ea" transform="rotate(-10 84 84)" />
          </g>
        </template>
        <template v-else-if="art === 'succulent'">
          <ellipse v-for="(l, i) in [[85,120],[115,120],[100,105],[72,105],[128,105],[100,88],[86,92],[114,92]]" :key="i" :cx="l[0]" :cy="l[1]" rx="13" ry="16" />
        </template>
        <template v-else-if="art === 'blades'">
          <path v-for="(a, i) in [-22,-10,0,10,22]" :key="a" d="M92 140 Q95 70 100 35 Q105 70 108 140Z" :transform="`rotate(${a} 100 140) translate(${(i - 2) * 4} 0)`" />
          <path v-for="a in [-22,0,22]" :key="'e' + a" d="M100 40 Q103 80 106 140" stroke="#e8d36a" stroke-width="2" fill="none" :transform="`rotate(${a} 100 140)`" opacity=".6" />
        </template>
        <template v-else-if="art === 'cylinder'">
          <rect v-for="a in [-30,-15,0,15,30]" :key="a" x="96" y="45" width="8" height="95" rx="4" :transform="`rotate(${a} 100 140)`" />
        </template>
        <template v-else-if="art === 'fern'">
          <g v-for="a in [-55,-25,0,25,55]" :key="a" :transform="`rotate(${a} 100 140)`">
            <ellipse v-for="y in [60,75,90,105,120]" :key="y" cx="100" :cy="y" :rx="16 - (130 - y) / 8" ry="4" />
          </g>
        </template>
        <template v-else-if="art === 'flower' || art === 'herb'">
          <ellipse v-for="(l, i) in [[80,115],[120,115],[100,95],[70,95],[130,95],[100,75],[88,85],[112,85]]" :key="i" :cx="l[0]" :cy="l[1]" rx="14" ry="10" fill="#4e7a2a" />
          <template v-if="art === 'flower'">
            <circle v-for="(f, i) in [[78,90],[118,80],[100,62],[132,104],[70,112]]" :key="'f' + i" :cx="f[0]" :cy="f[1]" r="10" :fill="leaf" stroke="#fff" stroke-width="2" />
          </template>
        </template>
        <template v-else-if="art === 'tree'">
          <rect x="97" y="90" width="6" height="50" fill="#6d4c41" />
          <circle cx="100" cy="80" r="40" />
          <circle cx="78" cy="92" r="22" opacity=".9" />
          <circle cx="124" cy="90" r="24" opacity=".9" />
        </template>
      </g>
      <!-- pot -->
      <path d="M60 140 H140 L130 200 H70 Z" :fill="pot" />
      <rect x="55" y="134" width="90" height="12" rx="3" :fill="pot" stroke="rgba(0,0,0,.08)" />
    </template>

    <template v-else-if="art === 'pot'">
      <path d="M50 90 H150 L136 190 H64 Z" :fill="pot" />
      <rect x="44" y="80" width="112" height="16" rx="4" :fill="pot" stroke="rgba(0,0,0,.1)" />
      <ellipse cx="100" cy="88" rx="50" ry="5" fill="rgba(0,0,0,.12)" />
    </template>
    <template v-else-if="art === 'bag'">
      <path d="M60 60 H140 L148 195 H52 Z" :fill="pot" />
      <rect x="60" y="54" width="80" height="12" :fill="leaf" />
      <rect x="72" y="105" width="56" height="34" rx="4" fill="#fff8e8" />
      <path d="M86 122 Q100 102 114 122" stroke="#4e7a2a" stroke-width="4" fill="none" />
    </template>
    <template v-else-if="art === 'bottle'">
      <rect x="80" y="45" width="40" height="22" rx="4" :fill="leaf" />
      <rect x="70" y="65" width="60" height="130" rx="12" :fill="pot" />
      <rect x="78" y="105" width="44" height="40" rx="4" fill="#fff8e8" />
    </template>
    <template v-else-if="art === 'tool'">
      <path d="M100 110 L60 45" :stroke="leaf" stroke-width="12" stroke-linecap="round" />
      <path d="M100 110 L140 45" :stroke="leaf" stroke-width="12" stroke-linecap="round" />
      <path d="M100 110 L80 195" :stroke="pot" stroke-width="16" stroke-linecap="round" />
      <path d="M100 110 L120 195" :stroke="pot" stroke-width="16" stroke-linecap="round" />
      <circle cx="100" cy="110" r="7" fill="#263238" />
    </template>
    <template v-else-if="art === 'can'">
      <rect x="60" y="90" width="80" height="100" rx="10" :fill="pot" />
      <path d="M140 110 L182 70" :stroke="leaf" stroke-width="9" stroke-linecap="round" />
      <path d="M70 90 Q100 40 130 90" :stroke="leaf" stroke-width="8" fill="none" />
    </template>
    <template v-else-if="art === 'pebbles'">
      <ellipse v-for="(s, i) in [[70,170,20],[105,175,24],[140,168,18],[88,150,16],[122,148,18],[100,128,14]]" :key="i" :cx="s[0]" :cy="s[1]" :rx="s[2]" :ry="s[2] * 0.7" :fill="i % 2 ? leaf : pot" stroke="rgba(0,0,0,.08)" />
    </template>
  </svg>
</template>

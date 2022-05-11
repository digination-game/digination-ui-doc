<h1 align="center">
   digi-lands-tile-map 
</h1>

### NFT Metaverse Lands Vue Tile Map Component

### Preview

<h1 align="center">
    <img :src="$withBase('/img/components/digi-lands-tile-map/digi-lands-tile-map.png')" alt="logo">
</h1>

## demo

https://daudxu.github.io/vue-lands-tile-map/

### demo

```vue
<template>
  <div class="warp">
    <div>
      <digi-button type="info" @click="handleClickFilter">Filter</digi-button>
      <p>
        <span> Current coordinates {{ x }},{{ y }}</span>
      </p>
    </div>
    <div>
      <digi-lands-tile-map
        ref="landsTileMapRef"
        :tileMapMapmatrix="tileMapMapmatrix"
        :tiledDigitalColormap="tiledDigitalColormap"
        :tileSize="tileSize"
        :startPaintingX="startPaintingX"
        :startPaintingY="startPaintingY"
        @handleClickTile="handleClickTile"
        @test="ceshi"
      >
      </digi-lands-tile-map>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      tileMapMapmatrix: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      tileMapMapmatrixToc: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      tiledDigitalColormap: [
        { 0: '#138535' },
        { 1: '#101566' },
        { 2: '#0070c0' },
      ],
      tileSize: 30,
      x: 0,
      y: 0,
      flag: true,
      startPaintingX: window.innerWidth / 2 - 288,
      startPaintingY: 20,
    }
  },
  methods: {
    ceshi() {
      console.log('ceshi')
    },
    handleClickTile(e) {
      if (typeof this.tileMapMapmatrix[e.clickY][e.clickX] !== 'undefined') {
        this.x = e.x
        this.y = e.y
      } else {
        this.x = ''
        this.y = ''
      }
    },
    handleClickFilter() {
      var tileMap = this.tileMapMapmatrix
      var flag = this.flag
      if (flag) {
        tileMap = this.$refs.landsTileMapRef.blockCoverage(
          tileMap,
          this.tileMapMapmatrixToc
        )
        flag = false
      } else {
        flag = true
      }
      this.flag = flag
      this.$refs.landsTileMapRef.handleClickAssignRender(tileMap)
    },
  },
}
</script>
<style scoped lang="scss">
html,
body {
  overflow: hidden;
}
.warp {
  text-align: center;
}
</style>
```

## Options

| 配置项                  | 值类型   | 描述                                                                          |
| ----------------------- | -------- | ----------------------------------------------------------------------------- |
| tileMapMapmatrix        | Array    | lands tile Map Mapmatrix                                                      |
| tiledDigitalColormap    | Array    | Colors corresponding to digital tile maps                                     |
| canvasWidth             | Number   | canvas width，default `window.innerWidth`                                     |
| canvasHeight            | Number   | canvas height，default `window.innerHeight`                                   |
| tileSize                | Number   | tile map Size，default 32                                                     |
| tileScale               | Number   | tile map Scale，default 1                                                     |
| startPaintingX          | Number   | The horizontal coordinate of the starting point of the drawing，default 0     |
| startPaintingY          | Number   | The ordinate of the starting point of the drawing，default 0                  |
| gridLineColor           | String   | grid Line Color，default '#c8efd4'                                            |
| gridDefaultTileColor    | String   | grid Default Tile Color，default '#ffffff'                                    |
| handleClickTile         | function | Click to return to coordinates Returns the coordinates and click event object |
| handleClickAssignRender | function | render canvas view                                                            |
| blockCoverage           | function | Merge large block matrices                                                    |

## Features

- [x] Built for Ethereum using [Web3](https://github.com/ethereum/web3.js/).
- [x] Implements [Graph Protocol](https://github.com/graphprotocol) to read blockchain.

## Changelog

### 2022.02.17

> v0.0.1 \* Matrix, color block, drag

[npm]: https://img.shields.io/npm/v/postcss-load-config.svg
[npm-url]: https://npmjs.com/package/postcss-load-config
[node]: https://img.shields.io/node/v/postcss-load-plugins.svg
[node-url]: https://nodejs.org/

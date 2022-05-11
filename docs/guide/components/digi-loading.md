<h1 align="center">
   Digi Loading
</h1>

> Loading Usage

### Preview

<h1 align="center">
    <img :src="$withBase('/img/components/digi-loading/digi-loading.png')" alt="logo">
</h1>

- Preview code comparison

```vue
<template>
  <div class="demo-main">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div>
        <h1 class="mb-5 text-5xl font-bold">Digi Loading</h1>
        <p class="mb-5">Digi Loading plugin.</p>

        <div class="item">
          <digi-button type="info" @click="handleClickLoading"
            >button</digi-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
  data() {
    return {}
  },
  methods: {
    handleClickLoading() {
      let _this = this
      _this.$Loading.show()
      setTimeout(() => {
        _this.$Loading.hide()
      }, 3000)
    },
  },
}
</script>
<style scoped lang="scss">
.demo-main {
  display: flex;
  justify-content: center;
  text-align: center;
  button {
    margin-right: 10px;
  }
  .item {
    margin-bottom: 20px;
  }
}
</style>
```

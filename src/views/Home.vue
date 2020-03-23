<template>
  <div class="home">
    <StockInfo />
  </div>
</template>

<script>
// @ is an alias to /src
import StockInfo from '@/components/StockInfo.vue'

export default {
  name: 'home',
  components: {
    StockInfo
  }
}
</script>

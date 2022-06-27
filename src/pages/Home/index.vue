<template>
  <div>
    <!--三级联动-->
    <!--<TypeNav></TypeNav>-->
    <!--<ListContainer></ListContainer>-->
    <!--<TodayRecommend></TodayRecommend>-->
    <!--<Rank></Rank>-->
    <!--<Like></Like>-->
    <!--<Floor></Floor>-->
    <!--<Floor></Floor>-->
    <!--<Brand></Brand>-->
    <button @click="add">点击加1</button>
    <span>仓库中的当前数据：{{ count }}</span>
    <button>点击减1</button>
  </div>
</template>

<script>
//引入其余组件
import ListContainer from "@/pages/Home/ListContainer";
import TodayRecommend from "@/pages/Home/TodayRecommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";

import {mapActions, mapState} from "vuex";

export default {
  name: 'Home',
  components: {
    Brand,
    Floor,
    Like,
    Rank,
    TodayRecommend,
    ListContainer
  },
  computed: mapState([
    'count'// 映射 this.count 为 store.state.count
  ]),
  methods: {
    ...mapActions({
      add: 'add' // 将 `this.add()` 映射为 `this.$store.dispatch('add')`
    })
  }
}
</script>

<style lang="less" scoped>

</style>
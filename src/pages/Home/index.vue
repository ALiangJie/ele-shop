<template>
  <div>
    <!--三级联动-->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
  </div>
</template>

<script>
//引入其余组件
import ListContainer from "@/pages/Home/ListContainer";
import TodayRecommend from "@/pages/Home/TodayRecommend";

export default {
  name: 'Home',
  components: {
    TodayRecommend,
    ListContainer
  },
}
</script>

<style lang="less" scoped>
</style>
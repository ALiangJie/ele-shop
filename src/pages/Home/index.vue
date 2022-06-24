<template>
  <div>
    <!--三级联动-->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
  </div>
</template>

<script>
//引入其余组件
import ListContainer from "@/pages/Home/ListContainer";
import TodayRecommend from "@/pages/Home/TodayRecommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";

export default {
  name: 'Home',
  components: {
    Like,
    Rank,
    TodayRecommend,
    ListContainer
  },
}
</script>

<style lang="less" scoped>
</style>
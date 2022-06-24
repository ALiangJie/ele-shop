<template>
  <div>
    <!--三级联动-->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
  </div>
</template>

<script>
//引入其余组件
import ListContainer from "@/pages/Home/ListContainer";

export default {
  name: 'Home',
  components: {
    ListContainer
  },
}
</script>

<style lang="less" scoped>
</style>
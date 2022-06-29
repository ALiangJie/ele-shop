<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <!--事件的委派|事件委托-->
      <div @mouseleave="mouseLeave" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!--过渡动画-->
        <transition name="sort">
          <div class="sort" v-show="show">
            <div class="all-sort-list2" @click="goSearch">
              <!--一级分类-->
              <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId"
                   :class="{cur:currentIndex===index}">
                <h3 @mouseenter="changeIndex(index)">
                  <!--一级分类名称-->
                  <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                </h3>
                <div class="item-list clearfix" :style="{display:currentIndex===index?'block':'none'}">
                  <!--二级分类-->
                  <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                    <dl class="fore">
                      <dt>
                        <!--二级分类名称-->
                        <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{
                            c2.categoryName
                          }}</a>
                      </dt>
                      <dd>
                        <!--三级分类-->
                        <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                          <!--三级分类名称-->
                          <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{
                              c3.categoryName
                            }}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import throttle from 'lodash/throttle';

export default {
  name: "TypeNav",
  //当组件挂载完毕，可以向服务器发请求
  // 发送请求在mounted生命周期函数中进行
  // 组件挂载完毕
  mounted() {
    //当组件挂载完毕让其变为false
    //增加判断
    if (this.$route.path != '/home') {
      this.show = false;
    }
  },
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({
      //右侧需要一个函数，立即执行一次
      //注入一个参数state，为大仓库中的数据
      categoryList: (state) => {
        return state.home.categoryList;
      }
    })
  },
  data() {
    return {
      //保存当前鼠标移入一级菜单的索引值，为了移入加背景色
      currentIndex: -1,
      show: true
    };
  },
  methods: {
    // 鼠标移入，修改响应式数据currentIndex
    // changeIndex(index) {
    //   this.currentIndex = index;
    // },

    // 节流：在规定的时间范围里不会重复触发回调函数，只有大于这个时间间隔才会触发回调，把频繁触发变为少量接触
    // 防抖：前面的所有触发都被取消，最后一次执行在规定的时间之后才会触发，如连续快速触发，只会执行一次
    // lodash插件封装了防抖和节流的业务
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    // 鼠标移除产生事件
    mouseLeave() {
      this.currentIndex = -1;
      //增加判断
      if (this.$route.path !== '/home') {
        this.show = false;
      }
    },
    goSearch(event) {
      // 解构出自定义属性
      let {categoryname, category1id, category2id, category3id} = event.target.dataset;
      // 整理参数
      let location = {name: "search"};
      let query = {categoryName: categoryname};
      // 判断是否是 a标签
      if (categoryname) {
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
      }
      // 合并参数，如果由params参数，应该传递
      if (this.$route.params) {
        location.params = this.$route.params
      }
      // 整理参数
      location.query = query;
      // console.log(event.target.dataset);
      this.$router.push(location);
    },
    enterShow() {
      this.show = true;
    }
  }
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      // height: 491px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            // display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          //   &:hover {
          //     .item-list {
          //       display: block;
          //     }
          //   }
        }

        .cur {
          background-color: deepskyblue;
        }
      }
    }

    // 三级分类菜单展开的过渡动画
    // 开始进入
    .sort-enter {
      height: 0;
      // transform: rotate(0deg);
    }

    //进入完毕
    .sort-enter-to {
      height: 461px;
      // transform: rotate(360deg);
    }

    //过渡效果
    .sort-enter-active {
      transition: all .5s linear;
    }
  }
}
</style>
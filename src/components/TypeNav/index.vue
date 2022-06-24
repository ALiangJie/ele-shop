<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <!-- 鼠标离开一级分类 -->
      <div @mouseleave="leave" @mouseenter="enter">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="isShow">
            <div class="all-sort-list2" @click="goSearch">
              <div
                  class="item"
                  v-for="(c1, index) in categoryList"
                  :key="c1.categoryId"
                  :class="{ cur: currentIndex === index }"
              >
                <!-- 鼠标进入一级分类 -->
                <h3 @mouseenter="changeIndex(index)">
                  <!-- 通过配合自定义属性实现路由跳转与传参 -->
                  <a
                      :data-categoryName="c1.categoryName"
                      :data-category1Id="c1.categoryId"
                  >{{ c1.categoryName }}</a
                  >
                </h3>
                <!-- 利用js控制二三级分类的显示与隐藏 -->
                <div
                    class="item-list clearfix"
                    :style="{
                    display: currentIndex === index ? 'block' : 'none',
                  }"
                >
                  <div
                      class="subitem"
                      v-for="c2 in c1.categoryChild"
                      :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                            :data-categoryName="c2.categoryName"
                            :data-category2Id="c1.categoryId"
                        >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                              :data-categoryName="c3.categoryName"
                              :data-category3Id="c3.categoryId"
                          >{{ c3.categoryName }}</a
                          >
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
export default {
  name: "TypeNav",
  data() {
    return {
      //保存当前鼠标移入一级菜单的索引值，为了移入加背景色
      currentIndex: -1,
      isShow: true,
    };
  },
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
          background-color: rgb(236, 82, 82);
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
<template>
  <div id="app">
      <div class="head clearfix">
        <img src="./image/logo.png" alt="" class="logo">
          <div class="fr nav">
              <div class="btn" @click="show=!show">
                  <span class="one"></span>
                  <span></span>
                  <span></span>
              </div>
          </div>
      </div>
      <!--下拉菜单-->
      <transition name="slide-fade">
          <ul class="navbar clearfix"  v-show="show">
              <li @click="show=false">
                  <router-link to="/homePage" @click="show=!show">首页</router-link>
              </li>
              <li @click="show=false">
                  <router-link to="/store" >商店</router-link>
              </li>
              <li @click="show=false">
                  <router-link to="/about" >关于我们</router-link>
              </li>
              <li @click="show=false">
                  <router-link to="/news" >新闻资讯</router-link>
              </li>
              <li @click="show=false">
                  <router-link to="/us" >联系我们</router-link>
              </li>
          </ul>
      </transition>

      <!--展示部分-->
      <router-view></router-view>

    <Foot></Foot>
  </div>
</template>

<script>
    import Foot from './component/footer.vue'
export default {
  name: 'app',
  data () {
    return {
        show:false
    }
  },
    methods:{
      show1:function (event) {
        console.log(event)
    }
  },
    components:{
      Foot
    }
}
</script>

<style lang="scss">
  $baseFontSize:20px !default;
  @function pxToRem($px) {
    @return $px / $baseFontSize * 1rem;
  }
  /* 设置HTML5元素为块 */
  article, aside, details,figcaption,figure,footer,header,hgroup, menu,nav,section { display: block; }
  /* 初始化 */
  body,div,ul,li,ol,h1,h2,h3,h4,h5,h6,input,textarea,select,p,dl,dt,dd,a,img,button,form,table,th,tr,td,tbody,article,
  aside, details,figcaption,figure,footer,header,hgroup, menu,nav,section{ margin:0; padding:0; border:none; }

  body{font-family:Arial,"微软雅黑";color:#696969;box-sizing:border-box;background-color: #fff;overflow-x:hidden;}
  em,i{ font-style:normal; }
  strong{ font-weight: normal; }
  .clearfix:after{ content:""; display:block;clear:both;}
  .clearfix{ zoom:1; }
  a{ text-decoration:none; color:#000; font-family: SimHei,'Helvetica Neue',Arial,'Droid Sans',sans-serif;}
  a:hover{ text-decoration:none;color: #13a0b2}
  ul,ol{ list-style:none; }
  h1, h2, h3, h4, h5, h6{ font-family:"微软雅黑"; font-size: 1em;font-weight: normal}
  img{ border: none; max-width: 100%;height: auto;border: none;}
  input{ outline: none;}
  .fl{float:left}
  .fr{float: right}
html,body{
  font-size: 20px;
}
  #app{
    width: pxToRem(320px);
      overflow: hidden;
    .head{
      width:100%;
      height:pxToRem(50px);
      position: fixed;
      background:#fff;
      z-index: 200;

        .logo{
            width: pxToRem(136px);
            height: pxToRem(24px);
            float: left;
            margin-left: pxToRem(10px);
            margin-top:pxToRem(13px);
        }
        .nav{
            width: pxToRem(40px);
            height: pxToRem(40px);
            box-sizing: border-box;
            padding:pxToRem(8px);
            margin-top: pxToRem(5px);
            margin-right: pxToRem(10px);
            .btn{
                width:pxToRem(24px);
                height: pxToRem(24px);
                box-sizing: border-box;
                span{
                    display: block;
                    width: 100%;
                    height: pxToRem(2px);
                    background: #777;
                    margin-top: pxToRem(7px);
                }
                .one{
                    margin-top: 0;
                }
            }

        }
    }
      //下拉菜单
      .slide-fade-enter-active {
          transition: all .3s ease;
          z-index: -1;
      }
      .slide-fade-leave-active {
          transition: all .3s linear;
          z-index: -1;
      }
      .slide-fade-enter, .slide-fade-leave-active {
          transform: translateY(pxToRem(-150px));
          opacity: 0.5;
          height:pxToRem(0px);
          z-index: -1;
      }
      .navbar{
          position:fixed;
          width: 100%;
          top:pxToRem(50px);
          left:0;
          z-index: 10;
          li{
              width: 100%;
              height: pxToRem(50px);
              border-top: 1px solid #777;
              background: #f9f9f9;
              a{
                  display: block;
                  width:100%;
                  height:100%;
                  font-size: pxToRem(15px);
                  padding:0 pxToRem(10px);
                  box-sizing: border-box;
                  line-height: pxToRem(50px);
              }
          }
          li:hover{
              background: #80d588;
              a{
                  color:#fff
              }
          }
      }
  }
</style>

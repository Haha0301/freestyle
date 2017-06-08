<template>
    <div id="home">
        <div class="slider">
            <mt-swipe :auto="4000">
                <mt-swipe-item class="clearfix">
                    <div class="know">
                        <img src="../image/slider.jpg" alt="">
                        <div>
                            <h2>知名综合性网购商城</h2>
                            <p>无理由上门退换货</p>
                            <a href="javascript:;">了解详情</a>
                        </div>
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                    <div class="know">
                        <img src="../image/slider2.jpg" alt="">
                        <div>
                            <h2>百万种商品 全场一折起</h2>
                            <p>满59包邮，100%正品保证</p>
                            <a href="javascript:;">了解详情</a>
                        </div>
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                    <div class="know">
                        <img src="../image/slider3.jpg" alt="">
                        <div>
                            <h2>满59包邮，100%正品保证</h2>
                            <p>全国600个城市当日达</p>
                            <a href="javascript:;">了解详情</a>
                        </div>

                    </div>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="pic">
            <router-link to="">
                <img src="../image/pic1.jpg" alt="">
            </router-link>
            <router-link to="">
                <img src="../image/pic2.jpg" alt="">
            </router-link>
            <router-link to="">
                <img src="../image/pic3.jpg" alt="">
            </router-link>
        </div>
        <div class="new">
            <h2>最新商品</h2>
            <p> &nbsp;&nbsp;&nbsp;满59元包邮，100%正品保证</p>
        </div>
        <div class="sliderT">
            <mt-swipe :auto="0">
                <mt-swipe-item>
                    <ul>
                        <li>
                            <a href="javascript:;">
                                <img src="../image/s11.jpg" alt="">
                            </a>
                            <p>牛仔短裤</p>
                            <span></span>
                            <i>¥80.00</i>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src="../image/s12.jpg" alt="">
                            </a>
                            <p>牛仔短裤</p>
                            <span></span>
                            <i>¥80.00</i>
                        </li>

                    </ul>
                </mt-swipe-item>
                <mt-swipe-item>
                    <ul>
                        <li>
                            <router-link to="">
                                <img src="../image/s21.jpg" alt="">
                            </router-link>
                            <p>牛仔短裤</p>
                            <span></span>
                            <i>¥80.00</i>
                        </li>
                        <li>
                            <router-link to="">
                                <img src="../image/s22.jpg" alt="">
                            </router-link>
                            <p>牛仔短裤</p>
                            <span></span>
                            <i>¥80.00</i>
                        </li>

                    </ul>
                </mt-swipe-item>
                <mt-swipe-item>
                    <ul>
                        <li>
                            <router-link to="">
                                <img src="../image/s31.jpg" alt="">
                            </router-link>
                            <p>牛仔短裤</p>
                            <span></span>
                            <i>¥80.00</i>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src="../image/s32.jpg" alt="">
                            </a>
                            <p>牛仔短裤</p>
                            <span></span>
                            <i>¥80.00</i>
                        </li>

                    </ul>
                </mt-swipe-item>
            </mt-swipe>

        </div>
        <div class="news">
            <h2>新闻资讯</h2>
            <p>100%正品保证</p>
        </div>
        <div class="introduct">
            <img src="../image/jump1.jpg" alt="">
            <h4>在库图书、音像商品超过80万种</h4>
            <p>21个城市提供当日达服务</p>
            <div class="clearfix">
                <span></span><i>2016.7.17</i>
                <a href="javascript:;">了解详情</a>
            </div>

        </div>

        <div class="introduct">
            <img src="../image/jump.jpg" alt="">
            <h4>用户遍及全国32个省、市、自治区</h4>
            <p>21个城市提供当日达服务</p>
            <div class="clearfix">
                <span></span><i>2016.7.17</i>
                <a href="javascript:;">了解详情</a>
            </div>

        </div>
        <div class="end">
            <img src="../image/no50.png" alt="">
            <img src="../image/pom.png" alt="">
            <img src="../image/vin.png" alt="">
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        }
    }

</script>

<style lang="scss">
    $baseFontSize:20px !default;
    @function pxToRem($px) {
        @return $px / $baseFontSize * 1rem;
    }
    #home{
        width: 100%;
        margin-top: pxToRem(50px);
        .slider{
            width: 100%;
            height:pxToRem(180px);
            .know{
                width: 100%;
                position: relative;
                div{
                    background: transparent;
                    color: #fff;
                    width: pxToRem(230px);
                    position: absolute;
                    left:50%;
                    top:50%;
                    margin-top: pxToRem(-45px);
                    margin-left: pxToRem(-115px);
                    h2{
                        font-size: pxToRem(16px);
                        font-weight: bold;
                        text-align: center;

                    }
                    p{
                        font-size: pxToRem(12px);
                        margin-top: pxToRem(10px);
                        text-align: center;
                    }
                    a{
                        display: block;
                        width:pxToRem(100px);
                        height: pxToRem(30px);
                        border: solid #fff pxToRem(2px);
                        text-align: center;
                        margin: 0 auto;
                        margin-top: pxToRem(10px);
                        color: #fff;
                        line-height: pxToRem(30px);
                        font-size: pxToRem(14px);
                    }
                }
            }
        }
        .pic{
            width: 100%;
            border-top: dashed #999 pxToRem(1px);
            border-bottom: dashed #999 pxToRem(1px);
            padding-bottom: pxToRem(10px);
            margin-top: pxToRem(30px);
            img{
                display: block;
                width: pxToRem(306px);
                margin: pxToRem(20px) auto 0;
            }
        }
        .new{
            width: 100%;
            margin:pxToRem(30px) 0;
            h2{
                font-size: pxToRem(16px);
                color: #000;
                text-align: center;
                margin-bottom: pxToRem(7px);
            }
            p{
                font-size: pxToRem(14px);
                color: #A9A9A9;
                width: pxToRem(100px);
                text-align: center;
                line-height: 1.7;
                margin: 0 auto;
            }
        }
        .sliderT{
            width: 100%;
            height: pxToRem(301px);
            padding-bottom: pxToRem(25px);
            ul{
                width:100%;
                display: flex;
                justify-content: space-around;
                li{
                    width: pxToRem(137px);
                    p{
                        font-size: pxToRem(12px);
                        color: #000;
                        text-align: center;
                        margin-top: pxToRem(5px);

                    }
                    span{
                        display: block;
                        width: pxToRem(84px);
                        height: pxToRem(20px);
                        background: url("../image/stars.jpg") no-repeat;
                        background-size: 100%;
                        margin: pxToRem(5px) auto;
                    }
                    i{
                        font-size: pxToRem(12px);
                        display: block;
                        text-align: center;
                    }
                }
            }
        }
        .news{
            width: 100%;
            height: pxToRem(104px);
            border-top: dashed #999 pxToRem(1px);
            h2{
                font-size: pxToRem(14px);
                color: #000;
                text-align: center;
                margin-top: pxToRem(40px);
            }
            p{
                font-size: pxToRem(12px);
                text-align: center;
                margin-top: pxToRem(5px);
            }
        }
        .introduct{
            width: pxToRem(320px);
            height: pxToRem(300px);
            img{
                display: block;
                width:pxToRem(280px);
                height:pxToRem(143px);
                margin: 0 auto;
            }
            h4{
                color: #000000;
                font-size: pxToRem(14px);
                margin:pxToRem(10px) 0 0 pxToRem(20px);
                font-weight: bold;
            }
            p{
                font-size: pxToRem(12px);
                margin: pxToRem(3px) 0 0 pxToRem(20px);
            }
            div{
                width: pxToRem(280px);
                margin:pxToRem(20px) auto ;
                span{
                    display: block;
                    width: pxToRem(14px);
                    height: pxToRem(14px);
                    float: left;
                    background: url("../image/present.png") no-repeat;
                    background-size: contain;
                    margin-right: pxToRem(5px);
                }
                i{
                    float: left;
                    font-size: pxToRem(12px);
                }
                a{
                    float: right;
                    font-size: pxToRem(14px);
                    color: #696969;
                }
            }
        }
        .end{
            width: 100%;
            height: pxToRem(120px);
            display: flex;
            justify-content: space-around;
            img{
                width:pxToRem(94px);
                height: pxToRem(50px);
            }
        }
    }
</style>
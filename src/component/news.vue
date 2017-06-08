<template>
    <div id="news">
        <div class="news">
            <h2>北京立法严打“非法一日游” 购物30日内可退换</h2>
            <img src="../image/beijing.png" alt="">
            <p>北京市第十四届人大常委会第三十八次会议表决通过《北京市旅游条例》，以立法形式严打“非法一日游”。</p>
            <a href="javascript:;">查看更多</a>
        </div>
        <div class="news">
            <h2>伊朗南部一购物中心发生爆炸 目前至少37人受伤</h2>
            <img src="../image/boom.jpg" alt="">
            <p>　中新网6月3日电 据外媒报道，当地时间3日，伊朗南部法斯省一处购物中心发生爆炸，目前已造成37人受伤。</p>
            <a href="javascript:;">查看更多</a>
        </div>
    </div>
</template>
<script>
    
</script>
<style lang="scss">
    $baseFontSize:20px !default;
    @function pxToRem($px) {
        @return $px / $baseFontSize * 1rem;
    }
    #news{
        width: 100%;
        margin-top: pxToRem(50px);
        .news{
            width: pxToRem(280px);
            margin:pxToRem(20px) auto pxToRem(20px);
            border-bottom: pxToRem(1px) dashed #999;
            padding-bottom:pxToRem(20px);
            img{
                width:100%;
                height: pxToRem(127px);
            }
            h2{
                text-align: center;
                color: #000;
                font-weight:bold;
                font-size:16px;
            }
            p{
                font-size:14px;
                color: #696969;
                text-align: left;
            }
            a{
                font-size:pxToRem(14px);
                float: right;
            }
        }
    }
</style>
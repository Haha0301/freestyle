<template>
    <div id="us">
        <div class="banner">
            <img src="../image/title.jpg" alt="" class="bgBanner">
            <div class="content">
                <h2>联系我们</h2>
                <p>1200个区县次日达，无理由上门<br/>退换货！</p>
            </div>
        </div>
        <div class="only">
            <h3>一站式在线购物平台</h3>
            <p>包括图书音像、美妆、家居、母婴、服装和3C数码等几十个大类</p>
            <h2>联系信息</h2>
        </div>
        <div class="write">
            <textarea name="" id="" cols="30" rows="10" placeholder="内容"></textarea>
            <input type="text" placeholder="姓名" v-model="user" @blur="message1">
            <input type="text" placeholder="手机" v-model="phone" @blur="message2">
            <input type="text" placeholder="E-mail" v-model="email" @blur="message3">
            <input type="button" value="提交" @click="sub">
        </div>
        <div id="allmap"></div>
        <div class="phone">
            <h2>我们的地址</h2>
            <p>地址：北京市海淀区中关村南大街1688号</p>
            <p>地址：北京市海淀区中关村南大街1688号</p>
            <p>地址：北京市海淀区中关村南大街1688号</p>
            <p>地址：北京市海淀区中关村南大街1688号</p>
            <p>网址：www.freestyle.com</p>
            <h3>营业时间</h3>
            <p>星期一到星期五：上午10点-下午9点</p>
            <p>星期六和星期日：上午10点-下午11点</p>
        </div>
    </div>
</template>

<script>

    export default{
            data(){
                return{
                    user:'',
                    phone:'',
                    email:'',
                }
            },
            methods:{
                message1:function (ev) {
                    var reg1 = /^[\u4e00-\u9fa5]+$/;
                    if(reg1.test(this.user)){
                        return
                    }else{
                        ev.preventDefault();
                        
                        alert('请输入正确的用户名');
                        this.user='';
                        return
                    }

                },
                message2:function (ev) {
                    var reg2 = /^1[3578]\d{9}$/;
                    if(reg2.test(this.phone)){
                        return
                    }else{
                        
                        alert('请输入正确的手机号');
                        this.phone='';
                        return
                        
                    }

                },
                message3:function (ev) {
                    var reg3 = /^\w+@[0-9a-z]{2,}(\.[a-z\u4e00-\u9fa5]{2,8}){1,2}$/;
                    if(reg3.test(this.email)){
                        return
                    }else{
                        
                        alert('请输入正确的邮箱名');
                        this.email='';
                        return
                        
                    }
                },
                sub:function () {
                    if(this.user&&this.phone&&this.email){
                        alert('提交成功')
                    }else{
                        alert('请输入相应的内容')
                    }
                }
            },
            
            
            
            
        mounted:function () {
            var map = new BMap.Map("allmap");
            var point = new BMap.Point(116.404, 39.915);
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);

            var mapType1 = new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]});
            var mapType2 = new BMap.MapTypeControl({anchor: BMAP_ANCHOR_TOP_LEFT});

            var overView = new BMap.OverviewMapControl();
            var overViewOpen = new BMap.OverviewMapControl({isOpen:true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT});
            map.addControl(mapType1);          //2D图，卫星图
            map.addControl(mapType2);          //左上角，默认地图控件
            map.setCurrentCity("北京");        //由于有3D图，需要设置城市哦
            map.addControl(overView);          //添加默认缩略地图控件
            //map.addControl(overViewOpen);      //右下角，打开
        }
    }
</script>

<style lang="scss">
    $baseFontSize:20px !default;
    @function pxToRem($px) {
        @return $px / $baseFontSize * 1rem;
    }
    #us{
        width:100%;
        margin-top:pxToRem(50px);
        .banner{
            width:pxToRem(320px);
            height:pxToRem(131px);
            position: relative;
            .bgBanner{
                display: block;
                width:pxToRem(320px);
                height:pxToRem(131px);
            }
            .content{
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                h2{
                    font-size:pxToRem(20px);
                    line-height:pxToRem(31px);
                    color: #fff;
                    text-align: center;
                    font-weight:bold;
                    margin-top:pxToRem(30px);
                }
                p{
                    font-size:pxToRem(14px);
                    color:#D3D3D3;
                    line-height:pxToRem(31px);
                    text-align: center;
                }
            }
        }
        .only{
            width:pxToRem(280px);
            margin:pxToRem(30px) auto pxToRem(15px);
            text-align: center;
            h3{
                font-size:pxToRem(16px);
                color: #000;
            }
            p{
                font-size:pxToRem(14px);
                line-height: 1.7;
                margin-top: pxToRem(15px);
            }
            h2{
                font-size: pxToRem(16px);
                color: #000;
                margin-top: pxToRem(20px);
            }
        }
        .write{
            width: pxToRem(280px);
            height:pxToRem(344px);
            margin:0 auto;
            textarea{
                border:#dcdcdc solid pxToRem(1px);
                width: 100%;
                font-size: pxToRem(14px);
                padding:pxToRem(10px);
                height:pxToRem(110px);
                box-sizing: border-box;
                border-radius:pxToRem(5px);
            }
            input{
                width:pxToRem(280px);
                height: pxToRem(40px);
                border-radius:pxToRem(5px);
                border:#dcdcdc solid pxToRem(1px);
                font-size: pxToRem(14px);
                text-indent:pxToRem(10px);
                margin-top:pxToRem(10px);
            }
            input:nth-last-child(1){
                margin-top:pxToRem(20px);
            }
        }
        #allmap{
            width: pxToRem(320px);
            height:pxToRem(280px);
        }
        .phone{
            width: 100%;
            height:pxToRem(330px);
            h2,h3{
               font-weight: bold;
                font-size:16px;
                margin-top: pxToRem(20px);
                text-align: center;
            }
            p{
                font-size:pxToRem(14px);
                line-height:1.7;
                text-align: center;
                margin-top:pxToRem(3px);
            }
        }
    }
</style>
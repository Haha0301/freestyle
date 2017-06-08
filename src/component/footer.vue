<template>
    <div id="foot">
        <div class="us">
            <h4>关于我们</h4>
            <p>包括图书音像、美妆、家居、母婴、服装和3C数码等几十个大类，其中在库图书、音像商品超过80万种，百货50余万种</p>
            <div class="share">
                <h5>分享至</h5>
                <ul>
                    <li class="qq"><router-link to=""></router-link></li>
                    <li class="wx"><router-link to=""></router-link></li>
                    <li class="wb"><router-link to=""></router-link></li>
                    <li class="qzone"><router-link to=""></router-link></li>
                    <li class="du"><router-link to=""></router-link></li>
                </ul>
            </div>
            <div class="get">
                <p>资料获取</p>
                <input type="text" placeholder="请输入您的E-mail地址" class="aa" v-model="message">
                <input type="button" value="提交" class="bb" @click="submit">
            </div>
        </div>
        <div class="end">
            <p>© 2016 Freestyle.com All Rights Reserved Freestyle版权所有 京ICP备12345678号</p>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                message:''
            }
        },
        methods:{
            // msg:function (e) {
            //     var el = e.target;
            //     var str = el.value;
            //     console.log(str)
            //     console.log(this.message)
            // },
            submit:function () {
                var reg = /^\w+@[0-9a-z]{2,}(\.[a-z\u4e00-\u9fa5]{2,8}){1,2}$/;
                if(!this.message){
                    alert('邮箱内容不能为空')
                }else if (reg.test(this.message)) {
                     alert('提交成功');
                     this.message=''
                }else{
                    alert('您输入的邮箱不正确，请重新输入')
                }
            }
        }
    }
</script>

<style lang="scss">
    $baseFontSize:20px !default;
    @function pxToRem($px) {
        @return $px / $baseFontSize * 1rem;
    }
    #foot{
        width: pxToRem(320px);
        .us{
            width: 100%;
            height: pxToRem(450px);
            background: #dedede;
            box-sizing: border-box;
            padding:pxToRem(30px) pxToRem(10px);
            h4{
                text-align: center;
                font-size: pxToRem(14px);
                font-weight: bold;
                color: #000;
            }
            p{
                color:#696969;
                text-align: center;
                font-size: pxToRem(12px);
                margin-top: pxToRem(10px);
                line-height: 1.75;
            }
            .share{
                width: 100%;
                margin-top:pxToRem(30px);
                h5{
                    font-weight: bold;
                    font-size: 12px;
                    color: #000;
                    text-align: center;
                }
                ul{
                    width: pxToRem(184px);
                    height: pxToRem(30px);
                    margin: pxToRem(10px) auto;
                    display: flex;
                    justify-content: space-around;
                    li{
                        width: pxToRem(30px);
                        height:pxToRem(30px);
                        border-radius:50%;
                        border:pxToRem(1px) solid #999;
                        box-sizing: border-box;
                        a{
                            display: block;
                            width: 100%;
                            height:100%;
                        }
                    }
                    .qq{
                        a{
                            background: url("../image/spire.png") no-repeat 0 0;
                            background-size: 100%;
                        }
                    }
                    .wx{
                        a{
                            background: url("../image/spire.png") no-repeat 0 pxToRem(-27px);
                            background-size: 100%;
                        }
                    }
                    .wb{
                        a{
                            background: url("../image/spire.png") no-repeat 0 pxToRem(-57px);
                            background-size: 100%;
                        }
                    }
                    .qzone{
                        a{
                            background: url("../image/spire.png") no-repeat 0 pxToRem(-84px);
                            background-size: 100%;
                        }
                    }
                    .du{
                        a{
                            background: url("../image/spire.png") no-repeat 0 pxToRem(-112px);
                            background-size: 100%;
                        }
                    }
                }
            }
            .get{
                width: 100%;
                margin-top: pxToRem(30px);
                p{
                    font-size: pxToRem(12px);
                    color: #000;
                    font-weight: bold;
                    text-align: center;
                    width:100%;
                }
                input{
                    display: block;
                    width:pxToRem(280px);
                    height:pxToRem(40px);
                    margin:pxToRem(20px) auto;
                    border-radius: 5px;
                }
                .bb{
                    background: green;
                    color: #fff;
                    font-weight: bold;
                    font-size: pxToRem(14px);
                }
                .aa{
                    text-indent: pxToRem(10px);
                    font-size: pxToRem(12px);
                }
            }
        }
        .end{
            width: 100%;
            height:pxToRem(117px);
            background-color: #333;
            padding:0 pxToRem(10px);
            box-sizing: border-box;
            overflow: hidden;
            p{
                font-size: pxToRem(12px);
                text-align: center;
                line-height: 1.7;
                color: #ccc;
                margin-top: pxToRem(40px);
            }
        }
    }
</style>
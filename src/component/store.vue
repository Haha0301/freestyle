<template>
  <div id="store">
  	<img src="../image/store/banner.png" class="banner">
  	<div class="content">
  		<dl class="recommend">
  			<dt>
  				<p>推荐款型</p>
  				<span>满59元包邮，100%正品保证</span>
  			</dt>
  			<dd v-for="v in arr1" >  <!-- arr:[{title:XXX}] -->
  				<router-link to="" class="recommend-info clearfix">
  					<img :src="v.url" class="fl recommend-info-left">
  					<div class="recommend-info-right fl">
  						<h1>{{v.title}}</h1>
  						<h2><img src="../image/store/start.jpg"></h2>
  						<h3>{{v.price}}</h3>
  						<h4>购买</h4>
  					</div>		
  				</router-link>
  			</dd>
  		</dl>
  		<dl class="list">
  			<dt>
  				<p>商品列表</p>
  				<span>满59元包邮，100%正品保证</span>
  			</dt>
  			<dd v-for="v in arr2">
  				<router-link to="" class="list-info clearfix">
  					<img :src="v.url" class="list-info-img">
  					<h1>{{v.title}}</h1>
  					<h2><img src="../image/store/start.jpg"></h2>
  					<h3>{{v.price}}</h3>
  					<h4 class="fr">购买</h4>	
  				</router-link>
  			</dd>
  		</dl>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      arr1:[
      	{url:require('../image/store/chair1.jpg'),title:'休闲椅',price:'￥500'},
      	{url:require('../image/store/chair2.jpg'),title:'餐椅',price:'￥365'},
      	{url:require('../image/store/kettle.jpg'),title:'水壶',price:'￥112'},
      ],
      arr2:[
      	{url:require('../image/store/chair1.jpg'),title:'休闲椅',price:'￥500'},
      	{url:require('../image/store/chair3.jpg'),title:'休闲椅',price:'￥500'},
      	{url:require('../image/store/kettle.jpg'),title:'水壶',price:'￥112'},
      	{url:require('../image/store/clothes.jpg'),title:'男装',price:'￥400'},
      ]
    }
  }
}
</script>

<style lang="scss">
	/*px to rems */
  	$baseFontSize: 20px !default;
 	@function p2r($px) {
    	@return $px / $baseFontSize * 1rem;
  	}
	#store{
		width: p2r(320px);
		padding-top: p2r(50px);
		.banner{
			width: p2r(320px);
			height: p2r(90px);
		}
		.content{
			/*height: p2r(620px);*/
			.recommend{
				dt{
					height: p2r(108px);
					text-align: center;
					p{
						font-size: p2r(16px);
						font-weight: bold;
						padding-top: p2r(30px);
					}
					span{
						font-size: p2r(14px);
					}
				}
				dd{
					/*width: p2r(320px);
					margin: 0 auto;*/
					margin-bottom: p2r(40px);
					.recommend-info{
						width: p2r(230px);
						height: p2r(170px);
						.recommend-info-left{
							width: p2r(180px);
							height: p2r(180px);
							margin-left: p2r(20px);
						}
						.recommend-info-right{
							padding-left: p2r(25px);
							line-height: p2r(25px);
							h1{
								font-size: p2r(16px);
								font-weight: bold;
							}
							h2{
								img{
									width: p2r(95px);
									height: p2r(23px);
									margin-left: p2r(-10px);
								}	
							}
							h3{
								font-size: p2r(14px);
								color: #696969;
								font-weight: bold;
							}
							h4{
								width: p2r(75px);
								height:p2r(30px);
								border:p2r(2px) solid #000;
								text-align: center;
								line-height: p2r(30px);
								font-size: p2r(14px);
								margin-top: p2r(60px);
							}
						}
					}
				}
			}
			.list{
				dt{
					height: p2r(108px);
					text-align: center;
					p{
						font-size: p2r(16px);
						font-weight: bold;
						padding-top: p2r(30px);
					}
					span{
						font-size: p2r(14px);
					}
				}
				dd{
					width: p2r(320px);
					margin: 0 auto;
					.list-info{
						display: block;
						width: p2r(280px);
						height: p2r(500px);
						border-bottom: 2px dashed #dcdcdc;
						margin-left: p2r(20px);
						.list-info-img{
							width: p2r(280px);
							height: p2r(370px);
						}
						h1{
							font-size: p2r(16px);
							font-weight: bold;
							margin-top: p2r(20px);
						}
						h2{
							img{
								width: p2r(95px);
								height: p2r(23px);
								margin: 0 p2r(-13px);
							}	
						}
						h3{
							font-size: p2r(14px);
							color: #696969;
							font-weight: bold;
						}
						h4{
							width: p2r(75px);
							height:p2r(30px);
							border:p2r(2px) solid #000;
							text-align: center;
							line-height: p2r(30px);
							font-size: p2r(14px);
							margin-top: p2r(-40px);
						}
					}
				}
			}
		}
	}
</style>

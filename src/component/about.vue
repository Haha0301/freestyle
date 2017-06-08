<template>
  <div id="about">
  	<div class="banner">
  		<p>关于我们</p>
  		<span>满59元包邮，100%正品保证</span>
  	</div>
  	<div class="firm">
  		<div class="our">
  			<div></div>
  		</div>
  		<div class="introduce">
  			<h1>公司简介</h1>
  			<span></span>
  			<p>包括图书音像、美妆、家居、母婴、服装和3C数码等几十个大类，其中在库图书、音像商品超过80万种，百货50余万种；目前注册用户遍及全国32个省、市、自治区和直辖市</p>
  			<ul>
  				<li><img src="../image/about/icon.png">公司实力强大</li>
  				<li><img src="../image/about/icon.png">有中科院背景</li>
  				<li><img src="../image/about/icon.png">行业背景深厚</li>
  				<li><img src="../image/about/icon.png">团队处于创业状态</li>
  			</ul>
  		</div>
  	</div>
  	<div class="kind">
  		<ul>
  			<li v-for="v in arr1">
  				<img :src="v.url">
  				<h3>{{v.num}}</h3>
  				<h4>{{v.title}}</h4>
  			</li>
  		</ul>
  	</div>
  	<div class="team">
  		<h1>我们的团队</h1>
  		<b></b>
  		<ul>
  			<li v-for="v in arr2">
  				<img :src="v.url" class="people">
  				<p>{{v.name}}</p>
  				<span>{{v.intro}}</span>
  				<div>
  					<a href="javascript:;"><img src="../image/about/qq.png"></a>
  					<a href="javascript:;"><img src="../image/about/weixin.png"></a>
  					<a href="javascript:;"><img src="../image/about/weibo.png"></a>
  					<a href="javascript:;"><img src="../image/about/zone.png"></a>
  				</div>
  			</li>
  		</ul>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    	arr1:[
    		{url:require('../image/about/icon1.png'),num:'1540+',title:'热销商品'},
    		{url:require('../image/about/icon2.png'),num:'36',title:'地区'},
    		{url:require('../image/about/icon3.png'),num:'52',title:'合作单位'},
    		{url:require('../image/about/icon4.png'),num:'157',title:'商品分类'}
    	],
    	arr2:[
    		{url:require('../image/about/kevin.jpg'),name:'凯文',intro:'创始人,CEO'},
    		{url:require('../image/about/coo.jpg'),name:'古月',intro:'联合创始人,COO'},
    		{url:require('../image/about/wen.jpg'),name:'文豪',intro:'产品UI设计师'}
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
	#about{
		width: p2r(320px);
		padding-top: p2r(50px); 
		margin: 0 auto;
		.banner{
			background:url(../image/about/banner.jpg) no-repeat;
			background-size: 100% 100%;
			height: p2r(130px);
			text-align: center;
			p{
				font-size: p2r(20px);
				color: #fff;
				padding-top: p2r(40px);
			}
			span{
				font-size: p2r(14px);
				color: #d3d3d3;
			}
		}
		.firm{
			width: p2r(280px);
			margin-left: p2r(20px);
			margin-top: p2r(30px);
			.our{
			background: url(../image/about/our.jpg);
			background-size: contain;
			height: p2r(202px);
			margin-bottom: p2r(30px);
			overflow: hidden;
				div{
					border: 2px solid #fff;
					width: p2r(268px);
					height: p2r(190px);
					margin: p2r(4px);
				}
			}
			.introduce{
				text-align: center;
				h1{
					font-size: p2r(16px);
					font-weight: bold;
				}
				span{
					display: block;
					width: p2r(36px);
					height: p2r(3px);
					background-color: #c1c1c1;
					margin: p2r(16px) 0 p2r(19px) p2r(122px);
				}
				p{
					font-size: p2r(14px);
					color: #808080;
					line-height: p2r(25px);
				}
				ul{
					text-align: left;
					margin-top: p2r(32px);
					margin-bottom: p2r(38px);
					li{
						/*list-style-image: url(../image/about/icon.png);
						list-style-position: inside;*/
						color: #808080;
						line-height: p2r(25px);
						padding-left: p2r(10px);
						font-size: p2r(14px);
						img{
							width: p2r(10px); 
							height: p2r(8px);
							margin-right: p2r(10px); 
						}
					} 
				}
			}
		}
		.kind{
			/*width: p2r(320px);*/
			/*height: p2r(920px);*/
			background:#f6f6f6;
			text-align: center;
			margin-bottom: p2r(25px);
			overflow: hidden;
			ul{
				width: p2r(96px);
				margin: p2r(22px) 0;
				margin-left: p2r(112px);
				li{
					margin: p2r(48px) 0;
					img{
						width: p2r(96px);
						height: p2r(96px);
					}
					h3{
						font-size: p2r(23px);
						font-weight: bold;
						margin: p2r(20px);
					}
					h4{
						color:#696969;
					}
				}
			}
		}
		.team{
			width: p2r(280px);
			margin-left: p2r(20px);
			text-align: center;
			h1{
				font-size: p2r(16px);
				font-weight: bold;
			}
			b{
				display: block;
				width: p2r(36px);
				height: p2r(3px);
				background-color: #c1c1c1;
				margin: p2r(16px) 0 p2r(19px) p2r(122px);
			}
			ul{
				li{
					.people{
						width: p2r(280px);
						height: p2r(280px);
					}
					p{
						font-size: p2r(16px);
						margin-top: p2r(22px);
						margin-bottom: p2r(12px);
					}
					span{
						font-size: p2r(14px);
						color: #808080;
					}
					div{
						margin-top: p2r(20px);
						margin-bottom: p2r(40px);
						a{
							display: inline-block;
							img{
								width: p2r(30px);
								height: p2r(30px);
							}
						}
					}
				}
			}
		}
	}
</style>

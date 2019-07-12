<template>
  <div class="cart">
     <div class="no-result">
       <div> 登录</div>
     </div>
     <div class="border">
       <img src="@/assets/recommend.png" alt="" class="recommend">
       <div class="recommend_list">
         <div class="recommend_item" v-for="(item,index) in list" :key="index">
           <img :src="item.picUrl" alt="" class="recommend-item-img">
           <div class="recommend-item-info">
							<p class="recommend-item-title">
                {{item.goodsName}}
              </p>
							<div class="recommend-item-price-container">
								<div class="recommend-item-price">
                  <div class="recommend-item-old-price">{{item.marketPrice}}</div>
                  <div class="recommend-item-current-price">{{item.price}}</div>
								</div>
                <div class="recommend-item-img2">
                  <img src="@/assets/add_cart.png" alt="">
                </div>
							</div>
						</div>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
    data() {
      return {
        list:[]
      }
    },
    methods: {
      init(){
        this.$axios.get("http://api9.wochu.cn/client/v1/goods/GoodsRecommendList?parameters=%7B%22pageSize%22%3A9%2C%22pageIndex%22%3A+1%2C%22type%22%3A%221%22%7D")
        .then((data) => {
          data.data.data.items.forEach(element => {
              this.list.push({
                goodsName:element.goodsName,
                marketPrice:element.marketPrice,
                picUrl:element.picUrl,
                price:element.price,
                sn:element.sn
              })
          });
          console.log(this.list);
        })
      }
    },
    mounted() {
        this.init();
    },
}
</script>
<style lang="less" scoped>
  .cart{
    background: #f4f4f4;
    color: #666;
  }
  .no-result{
      padding-top: 3rem;   
         div{
          width: 2.4rem;
          line-height: .6rem;
          left: 50%;
          margin: 0rem 2.4rem 1.4rem 2.4rem;
          
          color: #f67d30;
          text-decoration: none;
          font-size: .3rem;
          border: 1px solid #f67d30;
          text-align: center;
      }
  }
  .border{
    .recommend{
        margin: 0 1.3rem ;
        width: 4.72rem;
        height: .3rem;
    }
  .recommend_list{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin-top: .1rem;
      .recommend_item{
        background: #fff;
        margin: .05rem .08rem .05rem .15rem;
        display: flex;
        flex-direction: column;
        border-radius: .1rem;
        width: 30%;
        height: 3.92rem;
        .recommend-item-img{
          height: 2.24rem;
        }
        .recommend-item-info{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          flex: 1;
          padding: .12rem .16rem .22rem;
          background: #fff;
          p{
            font-size: .28rem;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .recommend-item-price-container{
          display: flex;
          flex: 1;
          justify-content: space-between;
          align-items: flex-end;
          .recommend-item-old-price{
            font-size: .22rem;
            color: grey;
            text-decoration: line-through;
          }
          .recommend-item-current-price{
              font-size: .28rem;
              color: #f96d16
          }
          .recommend-item-img2>img{
            margin-right: .2rem;
            width: .5rem;
            height: .5rem;
          }
        }
      }
    }
  }
</style>


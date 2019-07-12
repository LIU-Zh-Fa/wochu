<template>
  <div class="my">
    <div class="header">
       <img src="@/assets/login/header_bg@3x.png" alt="" class="big_img">
       <div class="h_div" @click="gologin">
         <img src="@/assets/login/cust-icon-nologin.png" alt="">
         <p>未登录</p>
       </div>
       <div class="balance-coupon">
            <div class="balance">
              <div>0</div>
              <p>账户余额</p>
            </div>
            <div class="coupon">
              <div>0</div>
              <p>优惠券</p>
            </div>
       </div>
       <div class="recharge-tab">
         <img src="@/assets/login/profile-arrow@3x.png" alt="" class="recharge_img">
         <div class="recharge-left">
           <img src="@/assets/login/g-recharge.png" alt="">
            充值立送现金券哦~
         </div>
         <div class="recharge-right">
            马上充值 
            <img src="@/assets/login/recharge.png" alt="">
         </div>
       </div>
    </div>
    <div class="order-tap">
      <ul>
        <li>
          <img src="@/assets/login/border/1/needtopay@3x.png">
          <p>待付款</p>
        </li>
        <li>
           <img src="@/assets/login/border/1/no-receive@3x.png">
          <p>待收货</p>
        </li>
        <li>
           <img src="@/assets/login/border/1/no-comment@3x.png">
          <p>待评价</p>
        </li>
        <li>
          <img src="@/assets/login/border/1/historyget@3x.png">
          <p>退货/售后</p>
        </li>
        <li class="order_ul_li">
          <img src="@/assets/login/border/1/myorders@3x.png">
          <p>我的订单</p>
        </li>
      </ul>
    </div>
    <div class="center-nav">
      <ul class="border-line">
          <li>
            <img src="@/assets/login\border/2/mytg@3x.png">
            <p>我的团购</p>
          </li>
          <li>
            <img src="@/assets/login\border/2/location@3x.png">
            <p>收货地址</p>
          </li>
          <li>
            <img src="@/assets/login\border/2/favorite@3x.png">
            <p>我的收藏</p>
          </li>
          <li>
            <img src="@/assets/login\border/2/aboutus@3x.png">
            <p>关于我厨</p>
          </li>
      </ul>
      <ul class="border-line aa">
           <li>
             <img src="@/assets/login\border/2/help@3x.png">
             <p>帮助中心</p>
           </li>
           <li>
             <img src="@/assets/login\border/2/yjfk@3x.png">
             <p>意见反馈</p>
           </li>
           <li>
             <img src="@/assets/login\border/2/setup@3x.png">
             <p>设置中心</p>
           </li>
           <li>
             <img src="@/assets/login\border/2/kefu@3x.png">
             <p>客服电话</p>
           </li>
       </ul>
    </div>
    <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b51022d5-c9d1-4e11-ae35-328aa7f551e8.gif" alt="" class="foot">
  </div>
</template>

<script>
export default {
    methods: {
      gologin(){
        this.$router.push("/login");
      }
    },
}
</script>
<style lang="less" scoped>
.my{
  background: #f4f4f4;;
}
.aa{
  border: none !important;
}
  .header{
    position: relative;
    .big_img{
      width: 100%;
      height: 4.55rem;
    }
    .h_div{
      position: absolute;
      width: 100%;
      top: .78rem;
      left: 0;
      text-align: center;
      font-size: .24rem;
      color: #fff;
      img{
        width: 1.2rem;
      }
      p{
        margin-top: .4rem;
      }
    }
    .balance-coupon{
      position: absolute;
      width: 7.02rem;
      height: 2.2rem;
      top: 2.94rem;
      left: 50%;
      margin-left: -3.51rem;
      text-align: center;
      border-radius: .24rem;
      padding-top: .4rem;
      background: #fff;
      box-shadow: 1px -1px 20px rgba(34,34,34,.3);
      .balance{
          width: 49%;
          float: left;
          text-align: center;
          border-right: 1px solid #e5e5e5;
      }
      .coupon{
        width: 50%;
        float: right;
        text-align: center;
      }
      .balance>div,.coupon>div{
        font-size: .4rem;
        color: #011e00;
      }
      .balance>p,.coupon>p{
        font-size: .28rem;
        color: #999;
      }
    }
    .recharge-tab{
      position: relative;
      top: -0.3rem;
      width: 7.06rem;
      height: .86rem;
      line-height: .86rem;
      margin-top: .5rem;
      margin-left: .2rem;
      background: #428b0e;
      color: #fff;
      font-size: .28rem;
      border-bottom-left-radius: .24rem;
      border-bottom-right-radius: .24rem;
      .recharge_img{
        position: absolute;
        height: .2rem;
        left: 25%;
        margin-left: -.31rem;
        top: -.2rem;
        width: .63rem;
      }
      .recharge-left{
          width: 50%;
          float: left;
          padding-left: .4rem;
          img{
            width: .33rem;
            height: .36rem;
            margin-right: .2rem;
            vertical-align: middle;
          }
      }
      .recharge-right{
          width: 37%;
          float: right;
          text-align: right;
          padding-right: .4rem;
          img{
            width: .14rem;
            height: .24rem;
            margin-left: .2rem;
            vertical-align: middle;
          }
      }
    }
  }
  .order-tap{
    height: 1.65rem;
    padding: .4rem 0 0 0;
    background: #fff;
    ul{
      width: 100%;
      li{
          width: 20%;
          color: #999;
          font-size: .24rem;
          float: left;
          text-align: center;
          img{
            height: .56rem;
            width: auto;
          }
          p{
            margin-top: .18rem;
          }
      }
      .order_ul_li{
        width: 19%;
        color: #243a23;
        border-left: 1px solid #ccc;
      }
    }
  }
  .center-nav{
    height: 3.38rem;
    margin-top: .2rem;
    background: #fff;
    .border-line{
      border-bottom: 1px solid #e5e5e5;
      overflow: hidden;
      li{
        width: 25%;
        padding: .3rem 0;
        color: #999;
        font-size: .24rem;
        float: left;
        text-align: center;
        img{
          height: .56rem;
          width: auto;
        }
      }
    }
  }
  .foot{
    margin-left: .2rem;
     height: 1.5rem;
     width: 6.88rem;
  }
</style>


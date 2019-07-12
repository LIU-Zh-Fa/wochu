<template>
  <div class="cart">
     <div class="no-result">
       <div> 登录</div>
     </div>
     <div class="border">
       <img src="@/assets/recommend.png" alt="" class="recommend">
     </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  
}
</script>
<style lang="less" scoped>
  .no-result{
      top:2.7rem;   
         div{
          width: 2.4rem;
          line-height: .6rem;
          left: 50%;
          margin: 3rem 2.6rem 1.4rem 2.6rem;
          color: #f67d30;
          text-decoration: none;
          font-size: .3rem;
          border: 1px solid #f67d30;
          text-align: center;
      }
  }
  .border{
    .recommend{
        margin: 0 1.5rem ;
        width: 4.72rem;
        height: .3rem;
    }
  }
</style>


<template>
  <div class="home">
    <div class="body"><router-view></router-view></div>
    <div class="footer"><Footer /></div>
  </div>
</template>

<script>
import Footer from '@/components/footer'
export default {
  name: 'home',
  data(){
      return {
          src:'http://img.wochu.cn/upload/9cd4fcad-a57f-48a9-94fd-487fef4f8421.jpg'
      }
  },
  components:{
      Footer
  }
}
</script>
<style scoped>
    .home{
        display: flex;
        height: 100%;
        flex-direction: column;
    }
    .body{
        flex: 1;
        overflow: auto;
    }
    .footer{
        height: 1rem;
    }

</style>


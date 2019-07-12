<template>
    <div>
        <div class="topswiper swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in list" :key="index">
                    <img :src="item.picUrl">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
export default {
    props: ["list"],
    watch:{
        list(newVla){
            this.$nextTick(()=>{
                var mySwiper = new Swiper ('.topswiper', {
                    loop: true, // 循环模式选项
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                    },
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    }
                })        
            })
        }
    }

}
</script>
<style scoped lang="less">
    .swiper-container{
        height: 3.32rem;
        img{
            width: 100%;
        }
    }
</style>
<template>
    <div class="gswiper">
        <div class="goodswiper swiper-container">
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
    props:["goodid"],
    data(){
        return {
            list:[],
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            this.$axios.get("/wochu/client/v1/goods/imgLoopList",{
                params:{
                    parameters: {"goodsGuid":this.goodid}
                }
            }).then((res)=>{
                this.list = res.data.data;
                this.$nextTick(()=>{
                    var mySwiper = new Swiper ('.goodswiper', {
                        loop: true, // 循环模式选项
                        autoplay: {
                            delay: 4000,
                            disableOnInteraction: false,
                        },
                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'fraction',
                        }
                    })
                })
            })
        },
        createswiper(){
              
        }
    },
    watch:{
        goodid(newVla){
            this.getData()
        }
    }
}
</script>
<style scoped lang="less">
    .swiper-container{
        height: 7.5rem;
        position: relative;
        img{
            width: 100%;
        }
        .swiper-pagination{
            background: #000;
            color: #fff;
            position: absolute;
            bottom: .84rem;
            left: 6.74rem;
            width: .52rem;
            height: .52rem;
            text-align: center;
            line-height: .52rem;
            font-size: 12px;
            border-radius: 50%;
            opacity: .4;
        }
    }
</style>
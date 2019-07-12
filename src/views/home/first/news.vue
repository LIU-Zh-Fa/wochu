<template>
    <div class="news">
        <div class="titimg">
            <img :src="itemobj.templateImgUrl">
        </div>
        <div class="right" v-show="!more">
            <div class="newswiper swiper-container swiper-no-swiping">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in itemobj.items" :key="index">
                        <p>{{item.title}}</p>
                    </div>
                </div>
            </div>
            <div class="more"  @click="MoreT">
                <img src="http://wmall.wochu.cn/h5/home/vueimg/down@3x.png">
            </div>
        </div>
        <div class="right" v-show="more">
            <ul>
                <li v-for="(item,index) in itemobj.items" :key="index">
                    <p>{{item.title}}</p>
                </li>
            </ul>
            <div class="more" @click="MoreF">
                <img src="http://wmall.wochu.cn/h5/home/vueimg/up@3x.png">
            </div>
        </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
export default {
    props:["itemobj"],
    data(){
        return{
            more:false
        }
    },
    methods: {
        MoreT(){
            this.more = true;
        },
        MoreF(){
            this.more = false;
        } 
    },
    watch:{
        itemobj:{
            handler(newVal){
                this.$nextTick(()=>{
                    var myswiper = new Swiper ('.newswiper', {
                        loop: true, // 循环模式选项
                        direction : 'vertical',
                        observer: true,
                        observeParents: true,
                        autoplay: {
                            delay: 4000,
                            disableOnInteraction: false
                        }
                    })
                })
            },
            deep: true,
            immediate: true
        }
    }
}
</script>
<style scoped lang="less">
    .news{
        display: flex;
        line-height: 1.16rem;
        width: 100%;
        .titimg{
            width: 1.08rem;
            text-align: center;
            img{
                width: .6rem;
                height: .6rem;
            }
        }
        .right{
            flex: 1;
            display: flex;
            font-size:13px;
            .more{
                width: .9rem;
                text-align: center;
                img{
                    width: .3rem;
                    height: .16rem;
                }
            }
            .swiper-container{
                height: .9rem;
                flex: 1;
            }
            ul{
                flex: 1;
                li{
                    border-bottom: 1px solid #ddd
                }
            }
        }
        
    }
</style>
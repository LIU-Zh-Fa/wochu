<template>
    <div class="first">
        <div>
            <div class="top">
                <div class="logo">
                    <img src="http://wmall.wochu.cn/h5/home/vueimg/wochuLogo.png">
                    <span>请填写地址 <img src="http://wmall.wochu.cn/h5/home/vueimg/icon.png"></span>
                </div>
                <div class="search">
                    <img src="http://wmall.wochu.cn/h5/home/vueimg/search.png">
                </div>
            </div>
            <div class="topdiv">&nbsp;</div>
            <topSwiper :list="bannerlist"/>
            <topNav :navlist="navlist"/>
            <div class="info" v-for="(item,index) in datalist" :key="index">
                <News v-if="item.templateType === '14'" :itemobj="item"/>
                <img v-if="item.templateType === '4'" :src="item.items[0].imgUrl" >
                <ImgView v-if="item.templateType === '16'" :itemobj="item"/>
                <OneGood v-if="item.templateType === '17'" :itemobj="item"/>
                <ListOne v-if="item.templateType === '13'" :itemobj="item"/>
                <ListTwo v-if="item.templateType === '7'" :itemobj="item"/>
            </div>
        </div>
    </div>
</template>

<script>
import topSwiper from './topSwiper'
import topNav from './topNav'
import News from './news'
import ImgView from './imgview'
import OneGood from './onegood'
import ListOne from './listone'
import ListTwo from './listtwo'

export default {
    components:{
        topSwiper,topNav,News,ImgView,OneGood,ListOne,ListTwo
    },
    data(){
        return {
            bannerlist:[],
            navlist:[],
            datalist:[]
        }
    },
    created(){
        this.$axios.get("/wochu/client/v1/app/layoutamend",{
            params: {
                parameters: {"version":"10.0.0","source":"H"}
            }
        }).then((res)=>{
            this.bannerlist = res.data.data.carousel;
            this.navlist = res.data.data.recommendedContent;
        });
        this.$axios.get("/wochu/api/app/acts",{
            params: {
                version: "20.0.0",
                source: "H"
            }
        }).then((res)=>{
            this.datalist = res.data.data.acts;
        })
    }
}
</script>
<style scoped lang="less">
    .first{
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
        .top{
            position: fixed;
            background: #fff;
            z-index: 10;
            top: 0;
            left: 0;
            width: 100%;
            line-height: .9rem;
            padding: 0 .3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            .logo{
                height: .9rem;
                >img{
                    width: .88rem;
                }
                span{
                    margin-left: .5rem;
                    color: #1f6117;
                    font-size: 14px;
                    img{
                        width: .15rem;
                        margin-left: .15rem;
                    }
                }
            }
            .search{
                width: .36rem;
                height: .36rem;
                text-align: right;
                img{
                    width: .36rem;
                    display: block;
                }
            }
        }
        .topdiv{
            height: .9rem;
            line-height: .9rem;
        }
        .info>img{
            width: 100%;
            margin-bottom: .08rem;
        }
    }
</style>
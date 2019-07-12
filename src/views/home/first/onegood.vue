<template>
    <div class="onegood">
       <div class="title">
           <span></span>{{itemobj.title}}<span></span>
       </div>
       <ul class="info">
           <li v-for="(item,index) in itemobj.items" :key="index">
               <div class="img_view">
                   <img :src="item.imgUrl">
                   <div class="mark" v-if="item.labels.length > 0">
                       <img :src="item.labels.length > 0 ?item.labels[0].labelUrl:''">
                   </div>
               </div>
               <div class="info_view">
                   <h3>{{item.goodsName}}</h3>
                   <div>{{item.description}}</div>
                   <p>
                       <span><b>￥</b>{{item.price.toString().split(".")[0]}}.<b>{{item.price.toString().split(".")[1]}}</b></span>
                       <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png">
                   </p>
               </div>
           </li>
       </ul>
    </div>
</template>
<script>
export default {
    props:["itemobj"]
}
</script>
<style scoped lang="less">
    .onegood{
        padding-top: .3rem;
        background: #f4f4f4;
        .title{
            background: #fff;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            padding: .3rem 0;
            line-height: .4rem;
            color: #001e00;
            border-bottom: 1px solid #e5e5e5;
            span{
                width: 1.5rem;
                height: 1px;
                display: inline-block;
                border-bottom: 1px solid #011e00;
                margin: 0 .22rem;
                vertical-align: middle;
            }
        }
        .info{
            li{
                width: 100%;
                height: 3.12rem;
                padding: .28rem .24rem;
                border-bottom: 1px solid #e5e5e5;
                box-sizing: border-box;
                .img_view{
                    float: left;
                    width: 2.6rem;
                    height: 2.6rem;
                    position: relative;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    .mark{
                        width: .66rem;
                        height: .66rem;
                        position: absolute;
                        top: 0;
                        left: 0;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .info_view{
                    float: right;
                    width: 4.34rem;
                    height: 100%;
                    padding-left: .2rem;
                    box-sizing: border-box;
                    h3{
                        height: 1rem;
                        width: 100%;
                        line-height: .36rem;
                        font-size: 16px;
                        font-weight: bold;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        padding-top: .32rem;
                        color: #666;
                        box-sizing: border-box;
                    }
                    div{
                        width: 100%;
                        height: .56rem;
                        font-size: 13px;
                        line-height: .56rem;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        margin-bottom: .32rem;
                        color: #666;
                    }
                    p{
                        line-height: .5rem;
                        color: #ff5918;
                        span{
                            float: left;
                            font-size: 20px;
                            b{
                                font-size: 15px;
                            }
                        }
                        img{
                            width: .5rem;
                            height: .5rem;
                            float: right;
                        }
                    }
                }
            }
        }
    }
</style>
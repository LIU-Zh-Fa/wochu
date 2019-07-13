<template>
    <div>
        <ul class="listtwo">
            <li v-for="(item,index) in itemobj.items" :key="index">
                <div :class="{'over': item.stock <= 0 }">
                    <div class="label" v-if="item.labels.length > 0">
                        <img :src="item.labels.length > 0 ?item.labels[0].labelUrl:''">
                    </div>
                    <div class="over_mask"><p>已抢完</p></div>
                    <img :src="item.imgUrl">
                    <h3>{{item.goodsName}}</h3>
                    <p class="oprice">￥{{item.marketPrice}}</p>
                    <p class="price">￥{{item.price}}</p>
                    <img v-if="item.stock > 0" class="addcar" src="http://wmall.wochu.cn/h5/home/vueimg/add.png">
                    <img v-else class="addcar" src="http://wmall.wochu.cn/h5/home/vueimg/disadd@3x.png">
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
    .listtwo{
        width: 100%;
        overflow: auto;
        padding: 0 .2rem .2rem .28rem;
        box-sizing: border-box;
        li{
            width: 2.26rem;
            height: 3.46rem;
            margin-top: .28rem;
            margin-right: .08rem;
            float: left;
            position: relative;
            div{
                .over_mask{
                    display: none;
                }
                >img{
                    width: 2.26rem;
                    height: 2.26rem;
                }
                .label{
                    width: 0.6rem;
                    height: 0.6rem;
                    position: absolute;
                    top: 0;
                    left: 0;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                h3{
                    width: 100%;
                    height: .58rem;
                    line-height: .25rem;
                    padding-top: .08rem;
                    color: #333;
                    font-size: 13px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-weight: normal;
                    box-sizing: border-box;
                }
                .oprice{
                    height: .24rem;
                    font-size: 12px;
                    color: #999;
                    text-decoration: line-through;
                }
                .price{
                    height: .3rem;
                    color: #f96d16;
                    line-height: .3rem;
                    margin-top: .1rem;
                    font-size: 15px;
                }
                .addcar{
                    position: absolute;
                    width: .48rem;
                    height: .48rem;
                    bottom: 0.05rem;
                    left: 1.62rem;
                }
                &.over{
                    position: relative;
                    >img{
                        background: rgba(255,255,255,.6);
                    }
                    h3,.oprice,.price{
                        color: #ccc !important;
                    }
                    div{
                        display: block;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        background: rgba(255,255,255,.5);
                        width: 2.26rem;
                        height: 2.26rem; 
                        p{
                            position: absolute;
                            top: .35rem;
                            left: .35rem;
                            width: 1.56rem;
                            height: 1.56rem;
                            border-radius: 50%;
                            background: rgba(0,0,0,.4);
                            color: #fff;
                            font-size: 16px;
                            line-height: 1.56rem;
                            text-align: center;
                        }
                    }
                    .addcar{
                        position: absolute;
                        width: .48rem;
                        height: .48rem;
                        bottom: 0.05rem;
                        left: 1.62rem;
                    }
                }
            }
        }
    }
</style>
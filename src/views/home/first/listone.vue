<template>
    <div>
        <ul class="listone">
            <li v-for="(item,index) in itemobj.items" :key="index">
                <div class="label" v-if="item.labels.length > 0">
                    <img :src="item.labels.length > 0 ?item.labels[0].labelUrl:''">
                </div>
                <img :src="item.imgUrl">
                <h3>{{item.goodsName}}</h3>
                <p class="oprice">￥{{item.marketPrice}}</p>
                <p class="price">￥{{item.price}}</p>
                <img class="addcar" src="http://wmall.wochu.cn/h5/home/vueimg/add.png">
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
    .listone{
        width: 100%;
        overflow: auto;
        display: flex;
        height: 4.02rem;
        padding: .26rem 0 0 .24rem;
        box-sizing: border-box;
        li{
            flex: 0;
            height: 3.52rem;
            margin-right: .36rem;
            width: 1.9rem;
            position: relative;
            &:nth-last-child(1){
                padding-right: .2rem;
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
            >img{
                width: 1.9rem;
                height: 1.9rem;
            }
            h3{
                margin-top: .24rem;
                width: 1.9rem;
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #666;
                font-weight: normal;
            }
            .oprice{
                height: .24rem;
                margin-top: .14rem;
                font-size: 10px;
                color: #bababa;
                text-decoration: line-through;
            }
            .price{
                height: .24rem;
                margin-top: .1rem;
                font-size: 12px;
                color: #001e00;
                line-height: .24rem;
            }
            .addcar{
                position: absolute;
                width: .48rem;
                height: .48rem;
                bottom: .28rem;
                left: 1.42rem;
            }
        }
    }
</style>
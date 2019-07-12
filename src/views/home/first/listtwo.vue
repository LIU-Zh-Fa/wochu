<template>
    <div>
        <ul class="listtwo">
            <li v-for="(item,index) in itemobj.items" :key="index">
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
            >img{
                width: 2.26rem;
                height: 2.26rem;
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
        }
    }
</style>
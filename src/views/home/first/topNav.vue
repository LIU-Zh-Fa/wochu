<template>
    <div class="nav" >
        <div v-for="(item,index) in navlist" :key="index">
            <ul calss="nav_div">
                <li v-for="(urlobj,index) in item.items" :key="index"><img v-lazy="urlobj.imgUrl"></li>
            </ul>
        </div>
    </div>
</template>
<script>

export default {
    props: ["navlist"]
}
</script>
<style scoped lang="less">
    .nav{
        border-bottom: 1px solid #ddd;
        ul{
            width: 100%;
            height: .5rem;
            padding: .14rem 0 .2rem .14rem;
            box-sizing: border-box;
            height: 2.28rem;
            li{
                float: left;
                width: 1.7rem;
                height: 1.7rem;
                margin: 0 .14rem .14rem 0;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
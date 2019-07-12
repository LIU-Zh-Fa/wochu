<template>
    <div class="imgview">
        <div class="left_view">
            <img :src="itemobj.items[0].imgUrl">
        </div>
        <div class="right_view">
            <div class="top">
                <img :src="itemobj.items[1].imgUrl">
            </div>
            <div class="bottom">
                <img :src="itemobj.items[2].imgUrl">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["itemobj"]
}
</script>
<style scoped lang="less">
    .imgview{
        padding: .3rem .2rem 0;
        background: #f4f4f4;
        overflow: hidden;
        .left_view{
            background: #fff;
            width: 3.5rem;
            height: 5.2rem;
            border-radius: .06rem;
            float: left;
        }
        .right_view{
            width: 3.5rem;
            height: 5.2rem;
            border-radius: .06rem;
            background: #fff;
            float: right;
            .top{
                height: 2.6rem;
                border-bottom: 1px solid #e5e5e5;
            }
            .bottom{
                height: 2.6rem;
            }
        }
        img{
            width: 100%;
        }
    }
</style>
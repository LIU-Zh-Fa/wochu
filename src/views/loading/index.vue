<template>
    <div class="loading">
        <img src="@/assets/images/loadding.gif">
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    .loading{
        position: fixed;
        overflow: hidden;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background: #fff;
        z-index: 9999;
        vertical-align: middle;
        img{
            width: 15%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>
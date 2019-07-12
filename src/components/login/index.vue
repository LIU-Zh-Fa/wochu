<template>
    <div class="component_login">
        <router-link tag="div" to="/login/login" active-class="active">登录</router-link>
        <router-link tag="div" to="/login/register" active-class="active">注册</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .component_login{
        background: #fff;
        height: .96rem;
        padding: 0 1.4rem;
        div{
            width: 2rem;
            font-size: .32rem;
            text-align: center;
            line-height: .96rem;
            float: left;
        }
    }
    .active{
        border-bottom: .04rem solid #6eb242;
        color: #6eb242;
    }
</style>

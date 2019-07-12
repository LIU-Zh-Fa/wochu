<template>
    <div class="login">
        <div class="login-top">
            <img src="@/assets/login/loginTop.gif" alt="" class="big_img">
            <img src="@/assets/login/close.png" alt="" class="gomy" @click="gomy">
        </div>
        <Login></Login>
        <router-view></router-view>
    </div>
</template>
<script>
import Login from '@/components/login'
export default {
    components:{
        Login
    },
    methods: {
        gomy(){
            this.$router.push("/home/my")
        }
    },
}
</script>
<style lang="less" scoped>
    .login-top{
        width: 7.5rem;
        height: 7.84rem;
        position: relative;
        .big_img{
            display: block;
            width: 100%
        }
        .gomy{
            position: absolute;
            top: .46rem;
            right: .4rem;
            width: .48rem;
        }
    }
</style>

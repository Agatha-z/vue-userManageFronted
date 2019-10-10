<template>
    <div class="register">
        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="group-item">
            <label for="">
                <span>用</span>
                <span>户</span>
                <span>名</span>
            </label>
            <input type="text" v-model="name" placeholder="请输入用户名">
        </div>
        <div class="group-item">
            <label for="">
                <span>手</span>
                <span>机</span>
                <span>号</span>
                <span>码</span>
            </label>
            <input type="text" v-model="phone" placeholder="请输入手机号码">
        </div>
        <div class="group-item">
            <label for="">
                <span>密</span>
                <span>码</span>  
            </label>
            <input type="text" v-model="password" placeholder="请输入密码">
        </div>
        <button class="btn btn-danger" @click="register">注册</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name:'',
            phone:'',
            password:''
        }
    },
    methods:{
        register(){
            if(!this.name){
                alert('请输入用户名')
            } else if(!this.phone){
                alert('请输入手机号')
            } else if(!this.password){
                alert('请输入密码')
            } else{
                let users = {
                    name: this.name,
                    phone: this.phone,
                    password: this.password
                }
                this.$axios({
                    method:'post',
                    url:'/users',
                    data: users
                }).then(res =>{
                    console.log(res.data)
                    this.$router.push('/login')
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .register{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .group-item{
            display: flex;
            margin-bottom: 10px;
            label{
                width: 100px;
                display: flex;
                justify-content: space-between;
                margin-right: 5px;
            }
        }
        .btn{
            width: 100px;
            outline: none
        }
    }
</style>
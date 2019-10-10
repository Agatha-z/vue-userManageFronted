<template>
    <div class="login">
        <div class="logo">
            <img src="../assets/logo.png" alt="">
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
        <div>
            <button class="btn btn-danger" @click="submit">登录</button>
            <button class="btn btn-primary" @click="toRegister">注册</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            phone:'',
            password:''
        }
    },
    methods:{
        submit(e){
            e.preventDefault();
            if(this.phone && this.password){
                this.$axios({
                    method:'GET',
                    url:'/users'
                }).then(res =>{
                    var result = res.data.some(item => {
                        return item.phone == this.phone && item.password == this.password     
                    });
                    if(result){
                        var login = {
                                phone:this.phone,
                                password:this.password
                            }
                            localStorage.login = JSON.stringify(JSON.parse(JSON.stringify(login)));
                            this.$router.push('/customer')
                            console.log(JSON.parse(localStorage.login).phone)
                    }else{
                        alert('请输入正确的手机号或者密码')
                    }
                })
            }else{
                alert('请输入手机号码或密码')
            }
        },
        toRegister(){
            this.$router.push('/register')
        }
    }
}
</script>

<style lang="less" scoped>
    .login{
        margin-top: 50px;
        text-align: center;
        .group-item{
            margin-bottom: 15px;
            label{
                width: 100px;
                display: inline-flex;
                justify-content: space-between;
            }
        }
        .btn{
            outline: none
        }
        .btn-danger{
            margin-right: 50px;
        }
    }
</style>
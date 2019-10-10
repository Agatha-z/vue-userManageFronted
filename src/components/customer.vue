<template>
    <div class="customer container">
        <alert-msg :message="alert" v-if="alert"></alert-msg>
        <h1 class="page-header">用户管理系统</h1>
        <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>电话</th>
                    <th>邮箱</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in filterBy(customer,filterInput)" :key="index">
                    <td>{{item.name}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.email}}</td>
                    <td><router-link class="btn btn-default" :to="'/customer/'+item.id">详情</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            customer:[],
            alert:'',
            filterInput:''
        }
    },
    created(){
        if(this.$route.query.alert){
            this.alert = this.$route.query.alert
        }
        this.getAbout()
    },
    // updated(){
    //     this.getAbout()
    // },
    methods:{
        getAbout(){
            this.$axios({
                method: 'get',
                url:'/users'
            }).then(res =>{
                console.log(res.data)
                this.customer = res.data
            })
        },
        // 搜索框的实现，遍历的是一个方法
        filterBy(customer,value){
            return customer.filter(function(customer){
                return customer.name.match(value)
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .customer{
        h1{
            color: red
        }
    }
</style>
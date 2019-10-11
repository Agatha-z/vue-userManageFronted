<template>
    <div class="details container">
        <router-link to="/customer" class="btn btn-default">返回</router-link>
        <h1 class="page-header">
            {{customer.name}}
            <span class="pull-right">
                <router-link class="btn btn-primary" :to="'/edit/'+customer.id">
                    编辑
                </router-link>
                <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
            </span>
            </h1>
        <ul class="list-group">
            <li class="list-group-item"><span>{{customer.phone}}</span></li>
            <li class="list-group-item"><span>{{customer.email}}</span></li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item"><span>{{customer.education}}</span></li>
            <li class="list-group-item"><span>{{customer.graduationschool}}</span></li>
            <li class="list-group-item"><span>{{customer.profession}}</span></li>
            <li class="list-group-item"><span>{{customer.profile}}</span></li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            customer:{}
        }
    },
    created(){
        console.log(this.$route.params.id)
        this.getDetail(this.$route.params.id)
    },
    methods:{
        getDetail(id){
            this.$axios({
                method:'GET',
                url:'/users/'+ id
            }).then(res => {
                // console.log(res.data)
                this.customer = res.data
            })
        },
        deleteCustomer(id){
            this.$axios({
                method:'DELETE',
                url:'/users/'+id
            }).then(res =>{
                this.$router.push({path:'/',query:{alert:'用户删除成功'}})
            })
        }
    }
}
</script>

<style scoped>
    
</style>
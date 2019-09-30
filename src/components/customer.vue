<template>
    <div class="customer container">
        <h1 class="page-header">用户管理系统</h1>
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
                <tr v-for="(item,index) in customer" :key="index">
                    <td>{{item.name}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.email}}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            customer:[]
        }
    },
    created(){
        this.gerAbout()
    },
    methods:{
        gerAbout(){
            this.$axios({
                method: 'get',
                url:'/users',
            }).then(res =>{
                console.log(res.data)
                this.customer = res.data
            })
        }
    }
}
</script>

<style scoped>

</style>
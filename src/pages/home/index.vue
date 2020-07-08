<template>
    <div>
        <Echart :nowdata="nowdata" :totaldata="totaldata" :datalist="datalist" />
    </div>
</template>

<script>
import {echartData,getDataList} from "../../api/request"
import Echart from "@components/echarts"
export default {
     data(){
        return {
            nowdata:[],
            totaldata:[],
            datalist:{}
        }
    },
    components:{
        Echart
    },
   created() {
       this.handleEchart()
       this.getHandle()
   },
   methods: {
       async handleEchart(){
           let data=await echartData()
        //    console.log(data)
           this.nowdata=data.data
           this.totaldata=data.dataTwo
       },
       async getHandle(){
           let data=await getDataList()
           console.log(data)
            this.datalist=data.data
       }
   },
}
</script>

<style lang="scss">
    
</style>
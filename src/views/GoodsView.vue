<template>
    <div>
        商品列表
    </div>
</template>

<script lang="ts">
import { throwStatement } from '@babel/types'
import { defineComponent } from 'vue'
import { getGoodsList } from '../request/api'
export default defineComponent({
    setup() {
        getGoodsList().then(res=>{
            console.log(res)
        })

        return {}
    }
})
</script>

<style scoped>
</style>
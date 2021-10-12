<script setup>
import {onMounted, ref, reactive} from "@vue/runtime-core";
import { createClient } from "@supabase/supabase-js";

const props = defineProps({
  address: String
})

const logs = ref()
const inputAddr = ref()
const totalCost = ref(0)
const txCount = ref(0)
const loading = ref(false)
const pagination = reactive({
  pageSize: 10,
})

const supabase = createClient("https://sfwgxglduielikiqqzdv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTMzMDIyMywiZXhwIjoxOTQ2OTA2MjIzfQ.KHW_m9zE0t7VsZAZKNf7BMMYc1tLBeTVTYP3yjC-bF0")
const columns = [
  {
    title: 'Hash',
    key: 'hash'
  },
  {
    title: '操作',
    key: 'type'
  },
  {
    title: '费用(FTM)',
    key: 'gasCost'
  },
  {
    title: '时间',
    key: 'time'
  },
  {
    title: '批量英雄',
    key: 'heroes_count'
  }
]

const loadLogs = async (address) => {
  if(loading.value) return;
  loading.value = true
  const { data: heroes } = await supabase
      .from('rarity_heroes')
      .select()
      .range(0,4000)
      .eq('address', address.toLowerCase())
  const { data } = await supabase
      .from('rarity_logs')
      .select('hash, type, gasCost, timestamp, heroes_count')
      .eq('address', address.toLowerCase())
      .range(0,10000)
      .order('timestamp', { ascending: false })
  logs.value = data.map((log) => ({
    ...log,
    time: new Date(log.timestamp).toLocaleString(),
    type: log.type || "未记录",
    heroes_count: log.heroes_count || "未记录"
  }))
  totalCost.value = data.reduce((acc, current) => {
    return acc + current.gasCost * 1
  }, heroes.length * 0.117088184)
  txCount.value = data.length
  loading.value = false
}

onMounted(async () => {
  if (props.address) {
    await loadLogs(props.address)
  }
})

</script>

<template>
  <div class="table-container">
    <div class="action-container">
      <n-button @click="() => loadLogs(address)">查询我的</n-button>
      <n-input-group>
        <n-input :style="{ width: '100%' }" placeholder="0x..." v-model:value="inputAddr" @change=""/>
        <n-button type="primary" @click="() => loadLogs(inputAddr)" ghost>查询</n-button>
      </n-input-group>
    </div>
    <h4>FTM消耗：{{totalCost}}</h4>
    <n-data-table
        class="table"
        :columns="columns"
        :data="logs"
        :pagination="pagination"
        :row-key="row => row.id"
        :loading="loading"
    />
  </div>
</template>

<style lang="less" scoped src="./index.less">

</style>

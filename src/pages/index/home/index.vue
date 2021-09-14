<script setup>
import {ethers} from "ethers";
import {ref, watch, onMounted} from "@vue/runtime-core";
import { useMessage } from 'naive-ui'
import {CONTRACT_CONFIG} from "../../../constants";
import Heroes from "../../../components/Heroes/index.vue"
import Logs from "../../../components/Logs/index.vue"
import NFT_ABI from "../../../abis/nft.json";

const nftContract = ref()


const props = defineProps({
  address: String,
  provider: Object
})

watch(() => props.address,(a) => {
  checkApprove()
})

onMounted(() => {
  console.log(props.address);
  if(props.address) {
    checkApprove()
  }
})

const approved = ref(false)
const loading = ref({
  account: false,
  approve: false,
  action: false,
})
const message = useMessage()

const checkApprove = async () => {
  const signer = await props.provider.getSigner()
  nftContract.value = new ethers.Contract(CONTRACT_CONFIG.NFT, NFT_ABI, signer)
  try {
    loading.value.approve = true
    const value = await nftContract.value.isApprovedForAll(props.address, CONTRACT_CONFIG.BATCH)
    approved.value = value
    loading.value.approve = false
  }catch (e){
    console.log(e);
    message.error(e.toString())
  }
}

const approve = async (isApprove) => {
  try {
    loading.value.action = true
    const tx = await nftContract.value.setApprovalForAll(CONTRACT_CONFIG.BATCH, isApprove)
    const receipt = await tx.wait()
    loading.value.action = false
    message.success('授权成功')
    await checkApprove()
  }catch (e){
    message.error(e.toString)
  }
}

</script>

<route>
{
  name: '托管版',
  meta: {
    title: '托管版'
  }
}
</route>

<template>
  <div class="container">
    <div v-if="!!address" class="module-approve">
      <n-spin v-if="loading.approve" stroke="#000" ></n-spin>
      <template v-else>
        <template v-if="!approved">
          <p>请授权 Rarity 合约后联系大聪明客服，开启躺赢模式</p>
          <n-button class="btn-approve" :loading="loading.action" size="large" color="#000" @click="approve(true)">
            Approve
          </n-button>
        </template>
        <template v-if="approved">
          <div>
            <p>已经完成授权</p>
            <div>
              <n-button class="btn-approve" ghost size="large" color="#000" disabled>
                Approved
              </n-button>
              <n-button size="large" @click="approve(false)">Cancel Approve</n-button>
            </div>
          </div>
        </template>
      </template>
    </div>
    <div v-if="address && approved" class="module-log">
      <n-card style="margin-bottom: 16px; width: 100%">
        <n-tabs type="line">
          <n-tab-pane name="heroes" tab="英雄数据">
            <heroes :address="address"/>
          </n-tab-pane>
          <n-tab-pane name="logs" tab="挂机日志">
            <logs :address="address"/>
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </div>
  </div>
</template>

<style lang="less" scoped src="./index.less">
</style>

<script setup>
import {onMounted, ref, watch} from "@vue/runtime-core";
import {CONTRACT_CONFIG} from "../../../constants";
import {useMessage} from "naive-ui";
import {ethers, constants} from "ethers";
import BATCH_ABI from "../../../abis/batch.json";
import NFT_ABI from "../../../abis/nft.json";
import CELLAR_ABI from "../../../abis/cellar.json";
import GOLD_ABI from "../../../abis/gold.json";

const props = defineProps({
  address: String,
  nftContract: Object,
  provider: Object
})

const heroIdsString = ref("")
const receiverHeroId = ref("")
const strength = ref("")
const dexterity = ref("")
const constitution = ref("")
const intelligence = ref("")
const wisdom = ref("")
const charisma = ref("")
const heroType = ref("")

const txMessage = ref("")
const processing = ref(false)
const approved = ref(false)
const nftContract = ref()
const batchContract = ref()
const cellarContract = ref()
const goldContract = ref()

const loading = ref({
  account: false,
  approve: false,
  action: false,
})
const message = useMessage()

watch(() => props.address,(a) => {
  checkApprove()
})

onMounted(() => {
  if(props.address) {
    checkApprove()
  }
})

const checkApprove = async () => {
  const signer = await props.provider.getSigner()
  nftContract.value = new ethers.Contract(CONTRACT_CONFIG.NFT, NFT_ABI, signer)
  try {
    loading.value.approve = true
    const value = await nftContract.value.isApprovedForAll(props.address, CONTRACT_CONFIG.BATCH)
    approved.value = value
    loading.value.approve = false
  }catch (e){
    message.error(e.toString())
  }
}

const getContract = async () => {
  const provider = window.ethereum ? new ethers.providers.Web3Provider(window.ethereum) :  new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');
  const signer = await provider.getSigner()
  if (!batchContract.value) {
    batchContract.value = new ethers.Contract(CONTRACT_CONFIG.BATCH, BATCH_ABI, signer)
  }
  return batchContract.value
}

const getCellarContract = async () => {
  const provider = window.ethereum ? new ethers.providers.Web3Provider(window.ethereum) :  new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');
  const signer = await provider.getSigner()
  if (!cellarContract.value) {
    cellarContract.value = new ethers.Contract(CONTRACT_CONFIG.CELLAR, CELLAR_ABI, signer)
  }
  return cellarContract.value
}

const getGoldContract = async () => {
  const provider = window.ethereum ? new ethers.providers.Web3Provider(window.ethereum) :  new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');
  const signer = await provider.getSigner()
  if (!goldContract.value) {
    goldContract.value = new ethers.Contract(CONTRACT_CONFIG.GOLD, GOLD_ABI, signer)
  }
  return goldContract.value
}

const getHeroIdsArray = () => {
  const IDs = heroIdsString.value.split('\n').map(id => id.toString());
  if(IDs.every(id => !isNaN(parseInt(id)))) {
    return IDs
  } else {
    throw new Error("英雄ID不正确")
  }
}

const getAttr = () => {
  const attrs = [strength.value, dexterity.value, constitution.value, intelligence.value, wisdom.value, charisma.value];
  if(attrs.every(attr => !isNaN(parseInt(attr)))) {
    return attrs
  } else {
    throw new Error("属性不正确")
  }
}

const getReceiverId = () => {
  const ID = receiverHeroId.value;
  if(!isNaN(parseInt(ID))) {
    return ID
  } else {
    throw new Error("属性不正确")
  }
}

const batchAdventure = async () => {
  processing.value = true;
  txMessage.value = "冒险中..."
  try {
    const contract = await getContract();
    const heroIds = getHeroIdsArray();
    const tx = await contract.adventure(heroIds)
    await tx.wait()
    txMessage.value = `${heroIds.join(', ')} 冒险完成`
  } catch (e) {
    message.error(JSON.stringify(e))
    txMessage.value = "冒险失败，请重试"
  }
  processing.value = false;
}

const batchCellar = async () => {
  processing.value = true;
  txMessage.value = "攻击地牢中..."
  try {
    const contract = await getContract();
    const heroIds = getHeroIdsArray();
    const tx = await contract.attackCellar(heroIds)
    await tx.wait()
    txMessage.value = `${heroIds.join(', ')} 攻击地牢完成`
  } catch (e) {
    message.error(JSON.stringify(e))
    txMessage.value = "攻击地牢失败，请重试"
  }
  processing.value = false;
}

const batchApprove = async () => {
  processing.value = true;
  txMessage.value = "授权中..."
  try {
    const contract = await getContract();
    const heroIds = getHeroIdsArray();
    const tx = await contract.approveBatch(heroIds)
    await tx.wait()
    txMessage.value = `${heroIds.join(', ')} 授权完成`
  } catch (e) {
    message.error(JSON.stringify(e))
    txMessage.value = "授权失败，请重试"
  }
  processing.value = false;
}

const batchLevelUp = async () => {
  processing.value = true;
  txMessage.value = "升级中..."
  try {
    const contract = await getContract();
    const heroIds = getHeroIdsArray();
    const tx = await contract.levelUp(heroIds)
    await tx.wait()
    txMessage.value = `${heroIds.join(', ')} 升级完成`
  } catch (e) {
    message.error(JSON.stringify(e))
    txMessage.value = "升级失败，请重试"
  }
  processing.value = false;
}

const batchClaim = async () => {
  processing.value = true;
  txMessage.value = "领金中..."
  try {
    const contract = await getContract();
    const heroIds = getHeroIdsArray();
    const tx = await contract.claim(heroIds)
    await tx.wait()
    txMessage.value = `${heroIds.join(', ')} 领金完成`
  } catch (e) {
    message.error(JSON.stringify(e))
    txMessage.value = "领金失败，请重试，是否已授权？"
  }
  processing.value = false;
}

const batchAttr = async () => {
  processing.value = true;
  txMessage.value = "设置属性中..."
  try {
    const contract = await getContract();
    const heroIds = getHeroIdsArray();
    const [str, dex, con, int, wis, cha] = getAttr()
    const tx = await contract.pointBuy(heroIds, heroType.value, str, dex, con, int, wis, cha)
    await tx.wait()
    txMessage.value = `${heroIds.join(', ')} 设置属性完成`
  } catch (e) {
    message.error(JSON.stringify(e))
    txMessage.value = "设置属性失败，请重试，是否已授权？"
  }
  processing.value = false;
}

const transferMaterial = async () => {
  processing.value = true;
  txMessage.value = "（请勿刷新）转材料中..."
  try {
    const contract = await getCellarContract();
    const heroIds = getHeroIdsArray();
    const receiverHeroId = getReceiverId();
    for (let i = 0; i < heroIds.length; i++) {
      try {
        const balance = await contract.balanceOf(heroIds[i])
        if(balance.eq(0)) {
          txMessage.value = `（请勿刷新）转材料中：${heroIds[i]} 无材料`
          continue
        }
        txMessage.value = `（请勿刷新）转材料中：从${heroIds[i]}转移${balance.toString()}材料`
        const tx = await contract.transfer(heroIds[i], receiverHeroId, balance.toString())
        await tx.wait()
      } catch {
        txMessage.value = `（请勿刷新）转材料中：${heroIds[i]} 转移失败`
      }
    }
    txMessage.value = `${heroIds.join(', ')} 转材料结束`
  } catch (e) {
    message.error(JSON.stringify(e))
    txMessage.value = "转材料失败"
  }
  processing.value = false;
}

const transferGold = async () => {
  processing.value = true;
  txMessage.value = "（请勿刷新）转金币中..."
  try {
    const contract = await getGoldContract();
    const heroIds = getHeroIdsArray();
    const receiverHeroId = getReceiverId();
    console.log("??")
    for (let i = 0; i < heroIds.length; i++) {
      try {
        const balance = await contract.balanceOf(heroIds[i])
        console.log(balance)
        if(balance.eq(0)) {
          message.info(`${heroIds[i]} 无金币`)
          continue
        }
        txMessage.value = `（请勿刷新）转金币中：从${heroIds[i]}转移${balance.div(constants.WeiPerEther).toString()}金币`
        const tx = await contract.transfer(heroIds[i], receiverHeroId, balance.toString())
        await tx.wait()
      } catch(e) {
        console.log(e)
        txMessage.value = `（请勿刷新）转金币中：${heroIds[i]} 转移失败`
      }
    }
    txMessage.value = `${heroIds.join(', ')} 转金币结束`
  } catch (e) {
    message.error(JSON.stringify(e))
    txMessage.value = "转金币失败"
  }
  processing.value = false;
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
    message.error(JSON.stringify(e))
  }
}

</script>
<route>
{
  name: '自用版',
  meta: {
    title: '自用版'
  }
}
</route>
<template>
  <div class="container">
    <div>
      注意: rarity-game.netlify.app 不兼容, 因为对方的代码设计问题，会导致授权后无法查看
    </div>
    <div>
      经过测试可以兼容 UI版 https://rarity-adventures.surge.sh/ 与  https://www.raritymanifested.com/profile
    </div>
    <div>
      本软件为专业软件,使用之前确保自己有一定智能合约知识
    </div>

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
      <n-tooltip trigger="hover">
        <template #trigger>
          <h4 style="text-decoration: underline">👉解放双手，告别闹钟，托管请添加客服妹妹微信👈</h4>
        </template>
        <img width="300" alt="wechat qrcode" src="../../../assets/qrcode.jpg" />
      </n-tooltip>
      <div class="action-group">
        <a style="text-decoration: none" href="https://t.me/gamefichat" target="_blank">
          <n-button>
            🔊大聪明社区
          </n-button>
        </a>
        <a style="text-decoration: none" href="https://t.me/gamefiweathy" target="_blank">
          <n-button>
            🔊大聪明频道
          </n-button>
        </a>
      </div>
      <h4>批量操作，单次建议不超过30个。否则区块打包缓慢</h4>
      <div class="action-group">
        <n-button class="action-button" type="primary" @click="batchApprove" :disabled="processing">批量授权 (加点/领金需要)</n-button>
        <n-button class="action-button" type="primary" @click="batchAdventure" :disabled="processing">批量冒险</n-button>
        <n-button class="action-button" type="primary" @click="batchCellar" :disabled="processing">批量地牢</n-button>
        <n-button class="action-button" type="primary" @click="batchLevelUp" :disabled="processing">批量升级</n-button>
        <n-button class="action-button" type="primary" @click="batchClaim" :disabled="processing">批量领金</n-button>
      </div>
      <div class="action-group">
        <n-button class="action-button" type="primary" @click="batchAttr" :disabled="processing">批量加点</n-button>
        <n-tooltip trigger="hover">
          <template #trigger>
            <n-input class="action-button" v-model:value="heroType" placeholder="英雄类型 ID" :disabled="processing"/>
          </template>
          1. Barbarian "野蛮人" <br/>
          2. Bard "诗人" <br/>
          3. Cleric "牧师" <br/>
          4. Druid "德鲁伊" <br/>
          5. Fighter "战士" <br/>
          6. Monk "僧侣" <br/>
          7. Paladin "圣骑士" <br/>
          8. Ranger "游侠" <br/>
          9. Rogue "盗贼" <br/>
          10. Sorcerer "巫师" <br/>
          11. Wizard "法师" <br/>
        </n-tooltip>
        <n-input class="action-button" v-model:value="strength" placeholder="strength" :disabled="processing"/>
        <n-input class="action-button" v-model:value="dexterity" placeholder="dexterity" :disabled="processing"/>
        <n-input class="action-button" v-model:value="constitution" placeholder="constitution" :disabled="processing"/>
        <n-input class="action-button" v-model:value="intelligence" placeholder="intelligence" :disabled="processing"/>
        <n-input class="action-button" v-model:value="wisdom" placeholder="wisdom" :disabled="processing"/>
        <n-input class="action-button" v-model:value="charisma" placeholder="charisma" :disabled="processing"/>
      </div>
      <div class="action-group">
        <n-button class="action-button" type="primary" @click="transferMaterial" :disabled="processing">转材料🍖</n-button>
        <n-button class="action-button" type="primary" @click="transferGold" :disabled="processing">转金币💰</n-button>
        <n-input class="action-button" v-model:value="receiverHeroId" placeholder="收货英雄ID" :disabled="processing"/>
      </div>
      <n-text type="info">{{txMessage}}</n-text>
      <n-input v-model:value="heroIdsString" type="textarea" placeholder="英雄ID列表，一行一个" :disabled="processing"/>
    </div>
  </div>
</template>

<style lang="less" scoped src="./index.less">
</style>

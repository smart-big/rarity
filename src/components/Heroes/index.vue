<script setup>
import {onMounted, ref, reactive} from "@vue/runtime-core";
import { createClient } from "@supabase/supabase-js";
import {ethers, constants} from "ethers";
import {CONTRACT_CONFIG} from "../../constants";
import NFT_ABI from "../../abis/nft.json";
import GOLD_ABI from "../../abis/gold.json";
import CELLAR_ABI from "../../abis/cellar.json";
import ATTR_ABI from "../../abis/attr.json";

const props = defineProps({
  address: String
})

const ids = ref()
const heroes = ref()
const nftContract = ref()
const goldContract = ref()
const cellarContract = ref()
const attrContract = ref()
const loading = ref(true)
const pagination = reactive({
  page: 1,
  pageCount: 10,
  pageSize: 10,
  prefix ({ itemCount }) {
    return `Total is ${itemCount}.`
  }
})

const supabase = createClient("https://sfwgxglduielikiqqzdv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTMzMDIyMywiZXhwIjoxOTQ2OTA2MjIzfQ.KHW_m9zE0t7VsZAZKNf7BMMYc1tLBeTVTYP3yjC-bF0")
const columns = [
  {
    title: 'ID',
    key: 'id'
  },
  {
    title: '职业',
    key: 'type'
  },
  {
    title: '等级',
    key: 'level'
  },
  {
    title: '经验',
    key: 'xp'
  },
  {
    title: '金币',
    key: 'gold'
  },
  {
    title: '地牢奖励(Craft (I))',
    key: 'cellarMaterial'
  },
  {
    title: '上次冒险',
    key: 'log'
  },
  {
    title: '上次地牢',
    key: 'cellarLog'
  },
  {
    title: '力量',
    key: 'strength'
  },
  {
    title: '敏捷',
    key: 'dexterity'
  },
  {
    title: '体质',
    key: 'constitution'
  },
  {
    title: '智力',
    key: 'intelligence'
  },
  {
    title: '智慧',
    key: 'wisdom'
  },
  {
    title: '魅力',
    key: 'charisma'
  }
]

const getTypeName = (type) => {
  if (type === 1) {
    return "野蛮人";
  } else if (type === 2) {
    return "诗人";
  } else if (type === 3) {
    return "牧师";
  } else if (type === 4) {
    return "德鲁伊";
  } else if (type === 5) {
    return "战士";
  } else if (type === 6) {
    return "僧侣";
  } else if (type === 7) {
    return "圣骑士";
  } else if (type === 8) {
    return "游侠";
  } else if (type === 9) {
    return "盗贼";
  } else if (type === 10) {
    return "巫师";
  } else if (type === 11) {
    return "法师";
  }
}

const getAllHeroesData = async () => {
  const { data: heroes } = await supabase
      .from('rarity_heroes')
      .select()
      .range(0,2000)
      .eq('address', props.address.toLowerCase())
  ids.value = heroes.map(hero => hero.id)
  pagination.itemCount = heroes.length
  pagination.pageCount = Math.ceil(heroes.length / pagination.pageSize)
  console.log(pagination)
}

const handlePageChange = async (currentPage) => {
  if(loading.value) return;
  loading.value = true
  pagination.page = currentPage
  const idsForThisPage = ids.value.slice((currentPage - 1) * pagination.pageSize, currentPage * pagination.pageSize)
  const data = idsForThisPage.map(async (id) => {
    const [xp, log, type, level] = await nftContract.value.summoner(id);
    const gold = await goldContract.value.balanceOf(id);
    const cellarMaterials = await cellarContract.value.balanceOf(id);
    const cellarLog = await cellarContract.value.adventurers_log(id);
    const [strength, dexterity, constitution, intelligence, wisdom, charisma] = await attrContract.value.ability_scores(id)
    return {
      id: id,
      type: getTypeName(type.toNumber()),
      level: level.toString(),
      xp: xp.div(constants.WeiPerEther).toString(),
      gold: gold.div(constants.WeiPerEther).toString(),
      cellarMaterial: cellarMaterials.toString(),
      log: log.toNumber() === 0 ? "N/A" : new Date(log.toNumber() * 1000 - 1000*60*60*24).toLocaleString(),
      cellarLog: cellarLog.toNumber() === 0 ? "N/A" : new Date(cellarLog.toNumber() * 1000 - 1000*60*60*24).toLocaleString(),
      strength, dexterity, constitution, intelligence, wisdom, charisma
    };
  })
  heroes.value = await Promise.all(data)
  loading.value = false
}

onMounted(async () => {
  if (props.address) {
    const provider = window.ethereum ? new ethers.providers.Web3Provider(window.ethereum) :  new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');
    const signer = await provider.getSigner()
    loading.value = false
    nftContract.value = new ethers.Contract(CONTRACT_CONFIG.NFT, NFT_ABI, signer)
    goldContract.value = new ethers.Contract(CONTRACT_CONFIG.GOLD, GOLD_ABI, signer)
    cellarContract.value = new ethers.Contract(CONTRACT_CONFIG.CELLAR, CELLAR_ABI, signer)
    attrContract.value = new ethers.Contract(CONTRACT_CONFIG.ATTR, ATTR_ABI, signer)
    await getAllHeroesData()
    await handlePageChange(1)
  }
})

</script>

<template>
  <div class="container">
    <n-data-table
        remote
        :columns="columns"
        :data="heroes"
        :pagination="pagination"
        :row-key="row => row.id"
        :loading="loading"
        @update:page="handlePageChange"
    />
  </div>
</template>

<style lang="less" scoped src="./index.less">

</style>

<template>
  <div class="app">
    <div>
      <div class="header">
        <div></div>
        <div class="wallet">
          <n-button v-if="error" type="error" size="large">
            Error Network
          </n-button>
          <template v-else>
            <n-button v-if="!address" ghost size="large" color="#000" @click="connect">
              connect
            </n-button>
            <n-button v-else ghost size="large" color="#000" :loading="loading.account">
              {{displayAddress}}
            </n-button>
          </template>
        </div>
      </div>
<!--      <img alt="Vue logo" src="../assets/logo.png" />-->
<!--      <h1>大聪明 Rarity 托管版</h1>-->
    </div>
    <router-view :address="address" :nftContract="nftContract">
    </router-view>
  </div>
</template>

<route>
</route>

<script setup>
import {computed, onMounted, ref} from "@vue/runtime-core";
import {ethers} from "ethers";
import { useMessage } from 'naive-ui'
import {CONTRACT_CONFIG} from "../constants";
import NFT_ABI from "../abis/nft.json";
import {addressFilter} from "../utils/address";

  const address = ref('')
  const error = ref(false)
  const approved = ref(false)
  const loading = ref({
    account: false,
    approve: false,
    action: false,
  })

  const nftContract = ref()
  const message = useMessage()
  const setAddress = async () => {
    loading.value.account = true
    try {
      const signer = await provider.getSigner()
      const value = await signer.getAddress()
      nftContract.value = new ethers.Contract(CONTRACT_CONFIG.NFT, NFT_ABI, signer)
      address.value = value
      loading.value.account = false
    } catch (e) {
      loading.value.account = false
    }
  }

  const provider = window.ethereum ? new ethers.providers.Web3Provider(window.ethereum) :  new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');

  onMounted(() => {
    const load = async () => {
      await setAddress()
    }

    if(window.ethereum) {
      window.ethereum.on('connect', () => {
        load()
      })

      window.ethereum.on('disconnect', () => {
        address.value = ''
      })

      window.ethereum.on('accountsChanged', () => {
        load()
      })

      window.ethereum.on("networkChanged", async (id) => {
        checkNetwork(id)
        await load()
      });
    }

    checkNetwork()
    load()
  })

  const connect = async () => {
    await provider.send("eth_requestAccounts", []);
  }

  const checkNetwork = async (id) => {
    console.log(id);
    const chainId = id || (await provider.getNetwork()).chainId;
    console.log("chainId", chainId);
    if (chainId != 250) {
      error.value = true
      message.error('Please Wwitch To FTM Mainnet')
    } else {
      error.value = false
    }
  }

  const displayAddress = computed(() => {
  return addressFilter(address.value)
})

</script>

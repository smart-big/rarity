var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a;"undefined"!=typeof require&&require;import{p as s,a as y,r,b as l,c as o,o as m,W as d,J as c,C as T,d as b,e as v,f,g,u as w,h as M,w as _,i as x,t as h,j as I,k,l as A,m as E,F as J,n as S,q as C,s as F}from"./vendor.aec29c75.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const B="0x2069B76Afe6b734Fb65D1d099E7ec64ee9CC76B2",O="0xB5F5AF1087A8DA62A23b08C00C6ec9af21F397a1",Q="0x2A0F1cB17680161cF255348dDFDeE94ea8Ca196A",R="0xce761d788df608bd21bdd59d6f4b54b2e27f25bb",z="0x8c6092d6e814c1b98beca5783cfcbca75d930dd8";var L=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"},{indexed:!1,internalType:"uint256",name:"summoner",type:"uint256"}],name:"leveled",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint256",name:"class",type:"uint256"},{indexed:!1,internalType:"uint256",name:"summoner",type:"uint256"}],name:"summoned",type:"event"},{inputs:[{internalType:"uint256",name:"_summoner",type:"uint256"}],name:"adventure",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"adventurers_log",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"class",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"classes",outputs:[{internalType:"string",name:"description",type:"string"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"level",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_summoner",type:"uint256"}],name:"level_up",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"next_summoner",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_summoner",type:"uint256"},{internalType:"uint256",name:"_xp",type:"uint256"}],name:"spend_xp",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_class",type:"uint256"}],name:"summon",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_summoner",type:"uint256"}],name:"summoner",outputs:[{internalType:"uint256",name:"_xp",type:"uint256"},{internalType:"uint256",name:"_log",type:"uint256"},{internalType:"uint256",name:"_class",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_summoner",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"xp",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"curent_level",type:"uint256"}],name:"xp_required",outputs:[{internalType:"uint256",name:"xp_to_next_level",type:"uint256"}],stateMutability:"pure",type:"function"}];var Y=[{inputs:[{internalType:"address",name:"rarityAddr",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"from",type:"uint256"},{indexed:!0,internalType:"uint256",name:"to",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"from",type:"uint256"},{indexed:!0,internalType:"uint256",name:"to",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"claimed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"level",type:"uint256"}],name:"wealth_by_level",outputs:[{internalType:"uint256",name:"wealth",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"summoner",type:"uint256"}],name:"claimable",outputs:[{internalType:"uint256",name:"amount",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"summoner",type:"uint256"}],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"spender",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"to",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"executor",type:"uint256"},{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"to",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],K=[{inputs:[{internalType:"address",name:"rarityAddr",type:"address"},{internalType:"address",name:"attrAddr",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"from",type:"uint256"},{indexed:!0,internalType:"uint256",name:"to",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"from",type:"uint256"},{indexed:!0,internalType:"uint256",name:"to",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"adventurers_log",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"dungeon_armor_class",outputs:[{internalType:"int256",name:"",type:"int256"}],stateMutability:"view",type:"function"},{inputs:[],name:"dungeon_damage",outputs:[{internalType:"int256",name:"",type:"int256"}],stateMutability:"view",type:"function"},{inputs:[],name:"dungeon_health",outputs:[{internalType:"int256",name:"",type:"int256"}],stateMutability:"view",type:"function"},{inputs:[],name:"dungeon_to_hit",outputs:[{internalType:"int256",name:"",type:"int256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_class",type:"uint256"}],name:"health_by_class",outputs:[{internalType:"uint256",name:"health",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"_class",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"},{internalType:"uint32",name:"_const",type:"uint32"}],name:"health_by_class_and_level",outputs:[{internalType:"uint256",name:"health",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"_class",type:"uint256"}],name:"base_attack_bonus_by_class",outputs:[{internalType:"uint256",name:"attack",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"_class",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],name:"base_attack_bonus_by_class_and_level",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"_attribute",type:"uint256"}],name:"modifier_for_attribute",outputs:[{internalType:"int256",name:"_modifier",type:"int256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"_class",type:"uint256"},{internalType:"uint256",name:"_str",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],name:"attack_bonus",outputs:[{internalType:"int256",name:"",type:"int256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"int256",name:"_attack_bonus",type:"int256"}],name:"to_hit_ac",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"_str",type:"uint256"}],name:"damage",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"_dex",type:"uint256"}],name:"armor_class",outputs:[{internalType:"int256",name:"",type:"int256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"_summoner",type:"uint256"}],name:"scout",outputs:[{internalType:"uint256",name:"reward",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_summoner",type:"uint256"}],name:"adventure",outputs:[{internalType:"uint256",name:"reward",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"spender",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"to",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"executor",type:"uint256"},{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"to",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],N=[{inputs:[{internalType:"address",name:"rarityAddr",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"creator",type:"address"},{indexed:!1,internalType:"uint256",name:"summoner",type:"uint256"},{indexed:!1,internalType:"uint32",name:"strength",type:"uint32"},{indexed:!1,internalType:"uint32",name:"dexterity",type:"uint32"},{indexed:!1,internalType:"uint32",name:"constitution",type:"uint32"},{indexed:!1,internalType:"uint32",name:"intelligence",type:"uint32"},{indexed:!1,internalType:"uint32",name:"wisdom",type:"uint32"},{indexed:!1,internalType:"uint32",name:"charisma",type:"uint32"}],name:"Created",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"leveler",type:"address"},{indexed:!1,internalType:"uint256",name:"summoner",type:"uint256"},{indexed:!1,internalType:"uint32",name:"strength",type:"uint32"},{indexed:!1,internalType:"uint32",name:"dexterity",type:"uint32"},{indexed:!1,internalType:"uint32",name:"constitution",type:"uint32"},{indexed:!1,internalType:"uint32",name:"intelligence",type:"uint32"},{indexed:!1,internalType:"uint32",name:"wisdom",type:"uint32"},{indexed:!1,internalType:"uint32",name:"charisma",type:"uint32"}],name:"Leveled",type:"event"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"ability_scores",outputs:[{internalType:"uint32",name:"strength",type:"uint32"},{internalType:"uint32",name:"dexterity",type:"uint32"},{internalType:"uint32",name:"constitution",type:"uint32"},{internalType:"uint32",name:"intelligence",type:"uint32"},{internalType:"uint32",name:"wisdom",type:"uint32"},{internalType:"uint32",name:"charisma",type:"uint32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"character_created",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"level_points_spent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_summoner",type:"uint256"},{internalType:"uint32",name:"_str",type:"uint32"},{internalType:"uint32",name:"_dex",type:"uint32"},{internalType:"uint32",name:"_const",type:"uint32"},{internalType:"uint32",name:"_int",type:"uint32"},{internalType:"uint32",name:"_wis",type:"uint32"},{internalType:"uint32",name:"_cha",type:"uint32"}],name:"point_buy",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_str",type:"uint256"},{internalType:"uint256",name:"_dex",type:"uint256"},{internalType:"uint256",name:"_const",type:"uint256"},{internalType:"uint256",name:"_int",type:"uint256"},{internalType:"uint256",name:"_wis",type:"uint256"},{internalType:"uint256",name:"_cha",type:"uint256"}],name:"calculate_point_buy",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"score",type:"uint256"}],name:"calc",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"_summoner",type:"uint256"}],name:"increase_strength",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_summoner",type:"uint256"}],name:"increase_dexterity",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_summoner",type:"uint256"}],name:"increase_constitution",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_summoner",type:"uint256"}],name:"increase_intelligence",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_summoner",type:"uint256"}],name:"increase_wisdom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_summoner",type:"uint256"}],name:"increase_charisma",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"current_level",type:"uint256"}],name:"abilities_by_level",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"_summoner",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}];s("data-v-53764132");const U={class:"container"};y();const j={props:{address:String},setup(e){const t=e,n=r(),a=r(),i=r(),u=r(),p=r(),s=r(),y=r(!0),_=l({page:1,pageCount:10,pageSize:10,prefix:({itemCount:e})=>`Total is ${e}.`}),x=o("https://sfwgxglduielikiqqzdv.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTMzMDIyMywiZXhwIjoxOTQ2OTA2MjIzfQ.KHW_m9zE0t7VsZAZKNf7BMMYc1tLBeTVTYP3yjC-bF0"),h=[{title:"ID",key:"id"},{title:"职业",key:"type"},{title:"等级",key:"level"},{title:"经验",key:"xp"},{title:"金币",key:"gold"},{title:"地牢奖励(Craft (I))",key:"cellarMaterial"},{title:"上次冒险",key:"log"},{title:"上次地牢",key:"cellarLog"},{title:"力量",key:"strength"},{title:"敏捷",key:"dexterity"},{title:"体质",key:"constitution"},{title:"智力",key:"intelligence"},{title:"智慧",key:"wisdom"},{title:"魅力",key:"charisma"}],I=e=>1===e?"野蛮人":2===e?"诗人":3===e?"牧师":4===e?"德鲁伊":5===e?"战士":6===e?"僧侣":7===e?"圣骑士":8===e?"游侠":9===e?"盗贼":10===e?"巫师":11===e?"法师":void 0,k=async e=>{if(y.value)return;y.value=!0,_.page=e;const t=n.value.slice((e-1)*_.pageSize,e*_.pageSize).map((async e=>{const[t,n,a,y]=await i.value.summoner(e),r=await u.value.balanceOf(e),l=await p.value.balanceOf(e),o=await p.value.adventurers_log(e),[m,d,c,T,b,v]=await s.value.ability_scores(e);return{id:e,type:I(a.toNumber()),level:y.toString(),xp:t.div(M).toString(),gold:r.div(M).toString(),cellarMaterial:l.toString(),log:0===n.toNumber()?"N/A":new Date(1e3*n.toNumber()-864e5).toLocaleString(),cellarLog:0===o.toNumber()?"N/A":new Date(1e3*o.toNumber()-864e5).toLocaleString(),strength:m,dexterity:d,constitution:c,intelligence:T,wisdom:b,charisma:v}}));a.value=await Promise.all(t),y.value=!1};return m((async()=>{if(t.address){const e=window.ethereum?new d(window.ethereum):new c("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"),a=await e.getSigner();y.value=!1,i.value=new T(R,L,a),u.value=new T(B,Y,a),p.value=new T(Q,K,a),s.value=new T(O,N,a),await(async()=>{const{data:e}=await x.from("rarity_heroes").select().range(0,2e3).eq("address",t.address.toLowerCase());n.value=e.map((e=>e.id)),_.itemCount=e.length,_.pageCount=Math.ceil(e.length/_.pageSize),console.log(_)})(),await k(1)}})),(e,t)=>{const n=b("n-data-table");return v(),f("div",U,[g(n,{remote:"",ref:(e,t)=>{t.table=e},columns:h,data:a.value,pagination:w(_),"row-key":e=>e.id,loading:y.value,"onUpdate:page":k},null,8,["data","pagination","row-key","loading"])])}},__scopeId:"data-v-53764132"};s("data-v-a1605566");const W={class:"container"},q=I("查询我的"),D={class:"container"},V=I("查询");y();const X={props:{address:String},setup(e){const s=e,y=r(),d=r(),c=r(0),T=r(0),M=r(!1),I=l({pageSize:10}),k=o("https://sfwgxglduielikiqqzdv.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTMzMDIyMywiZXhwIjoxOTQ2OTA2MjIzfQ.KHW_m9zE0t7VsZAZKNf7BMMYc1tLBeTVTYP3yjC-bF0"),A=[{title:"Hash",key:"hash"},{title:"操作",key:"type"},{title:"费用(FTM)",key:"gasCost"},{title:"时间",key:"time"},{title:"批量英雄",key:"heroes_count"}],E=async e=>{if(M.value)return;M.value=!0;const{data:s}=await k.from("rarity_logs").select("hash, type, gasCost, timestamp, heroes_count").eq("address",e.toLowerCase()).order("timestamp",{ascending:!1});y.value=s.map((e=>{return s=((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(a)for(var n of a(t))u.call(t,n)&&p(e,n,t[n]);return e})({},e),y={time:new Date(e.timestamp).toLocaleString(),type:e.type||"未记录",heroes_count:e.heroes_count||"未记录"},t(s,n(y));var s,y})),c.value=s.reduce(((e,t)=>e+1*t.gasCost),0),T.value=s.length,M.value=!1};return m((async()=>{s.address&&await E(s.address)})),(t,n)=>{const a=b("n-button"),i=b("n-input"),u=b("n-input-group"),p=b("n-data-table");return v(),f("div",W,[g(a,{onClick:n[0]||(n[0]=()=>E(e.address))},{default:_((()=>[q])),_:1}),x("div",D,[g(u,null,{default:_((()=>[g(i,{style:{width:"100%"},placeholder:"0x...",value:d.value,"onUpdate:value":n[1]||(n[1]=e=>d.value=e),onChange:n[2]||(n[2]=()=>{})},null,8,["value"]),g(a,{type:"primary",onClick:n[3]||(n[3]=()=>E(d.value)),ghost:""},{default:_((()=>[V])),_:1})])),_:1})]),x("h4",null,"FTM消耗："+h(c.value),1),g(p,{ref:(e,t)=>{t.table=e},columns:A,data:y.value,pagination:w(I),"row-key":e=>e.id,loading:M.value},null,8,["data","pagination","row-key","loading"])])}},__scopeId:"data-v-a1605566"};s("data-v-6a95d0f0");const G={class:"container"},P={class:"header"},Z=x("div",null,null,-1),H={class:"wallet"},$=I(" Error Network "),ee=I(" connect "),te=x("img",{alt:"Vue logo",src:"data:image/png;base64,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"},null,-1),ne=x("h1",null,"大聪明 Rarity 托管版",-1),ae={key:0,class:"module-approve"},ie=x("p",null,"请授权 Rarity 合约后联系大聪明客服，开启躺赢模式",-1),ue=I(" Approve "),pe={key:1},se=x("p",null,"已经完成授权",-1),ye=I(" Approved "),re={key:1,class:"module-log"};y();const le={setup(e){const t=r(""),n=r(!1),a=r(!1),i=r({account:!1,approve:!1,action:!1}),u=r(),p=k(),s=window.ethereum?new d(window.ethereum):new c("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");m((()=>{const e=async()=>{await(async()=>{i.value.account=!0,i.value.gem=!0;try{const e=await s.getSigner(),n=await e.getAddress();u.value=new T(R,L,e),t.value=n,i.value.account=!1}catch(e){i.value.account=!1}})(),t.value&&l()};window.ethereum&&(window.ethereum.on("connect",(()=>{e()})),window.ethereum.on("disconnect",(()=>{t.value=""})),window.ethereum.on("accountsChanged",(()=>{e()})),window.ethereum.on("networkChanged",(async t=>{o(t),await e()}))),o(),e()}));const y=async()=>{await s.send("eth_requestAccounts",[])},l=async()=>{try{i.value.approve=!0;const e=await u.value.isApprovedForAll(t.value,z);a.value=e,i.value.approve=!1}catch(e){p.error(e.toString)}},o=async e=>{console.log(e);const t=e||(await s.getNetwork()).chainId;console.log("chainId",t),250!=t?(n.value=!0,p.error("Please Wwitch To FTM Mainnet")):n.value=!1},M=async()=>{try{i.value.action=!0;const e=await u.value.setApprovalForAll(z,!0);await e.wait();i.value.action=!1,p.success("授权成功"),await l()}catch(e){p.error(e.toString)}},C=A((()=>(e=>e.substr(0,5)+"*******"+e.substr(-4))(t.value)));return(e,u)=>{const p=b("n-button"),s=b("n-spin"),r=b("n-tab-pane"),l=b("n-tabs"),o=b("n-card");return v(),f("div",G,[x("div",P,[Z,x("div",H,[n.value?(v(),E(p,{key:0,type:"error",size:"large"},{default:_((()=>[$])),_:1})):(v(),f(J,{key:1},[t.value?(v(),E(p,{key:1,ghost:"",size:"large",color:"#000",loading:i.value.account},{default:_((()=>[I(h(w(C)),1)])),_:1},8,["loading"])):(v(),E(p,{key:0,ghost:"",size:"large",color:"#000",onClick:y},{default:_((()=>[ee])),_:1}))],64))])]),te,ne,t.value?(v(),f("div",ae,[i.value.approve?(v(),E(s,{key:0,stroke:"#000"})):(v(),f(J,{key:1},[a.value?S("",!0):(v(),f(J,{key:0},[ie,g(p,{class:"btn-approve",loading:i.value.action,size:"large",color:"#000",onClick:M},{default:_((()=>[ue])),_:1},8,["loading"])],64)),a.value?(v(),f("div",pe,[se,g(p,{class:"btn-approve",ghost:"",size:"large",color:"#000",disabled:""},{default:_((()=>[ye])),_:1})])):S("",!0)],64))])):S("",!0),t.value&&a.value?(v(),f("div",re,[g(o,{style:{"margin-bottom":"16px"}},{default:_((()=>[g(l,{type:"line"},{default:_((()=>[g(r,{name:"heroes",tab:"英雄数据"},{default:_((()=>[g(j,{address:t.value},null,8,["address"])])),_:1}),g(r,{name:"logs",tab:"挂机日志"},{default:_((()=>[g(X,{address:t.value},null,8,["address"])])),_:1})])),_:1})])),_:1})])):S("",!0)])}},__scopeId:"data-v-6a95d0f0"};const oe=C({setup:e=>(e,t)=>{const n=b("n-message-provider");return v(),E(n,null,{default:_((()=>[g(le)])),_:1})}});oe.use(F),oe.mount("#app");

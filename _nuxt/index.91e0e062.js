import{a as r,l as n,c as i,D as p,o as c}from"./entry.1a1e635f.js";import{C as m}from"./ChatFeed.78963ee0.js";import"./ChatPost.81008e81.js";import"./user.5e5bbc3f.js";import"./ProfileImage.a3a4677f.js";import"./WaitingToast.f5b206cc.js";import"./textUtils.1e8cbca6.js";import"./MintedPostImage.3c7cd8ff.js";import"./storageUtils.9c09681b.js";import"./SwitchChainButton.68f09fa0.js";import"./site.105aeb8e.js";import"./ConnectWalletButton.a0511cfb.js";import"./Web3StorageImageUpload.17cb52d6.js";const a={name:"index",components:{ChatFeed:m},computed:{getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.orbisContext}},setup(){const{address:t,chainId:o}=n();return{address:t,chainId:o}}};function d(t,o,u,f,h,e){const s=p("ChatFeed");return c(),i(s,{class:"mt-1",showQuotedPost:t.$config.showRepliesOnHomepage,orbisContext:e.getOrbisContext},null,8,["showQuotedPost","orbisContext"])}const Q=r(a,[["render",d]]);export{Q as default};

import{a as r,l as n,c as i,r as p,o as a}from"./entry.ed29666e.js";import{C as c}from"./ChatFeed.5c48181f.js";import"./ChatPost.bd990070.js";import"./user.14c41b14.js";import"./domainUtils.38350585.js";import"./WaitingToast.804f2b41.js";import"./textUtils.a4c6acd6.js";import"./storageUtils.2a5101bf.js";import"./MintedPostImage.fb3e612e.js";import"./site.40ef4094.js";import"./ConnectWalletButton.3256a8d9.js";import"./SwitchChainButton.d39e32e7.js";import"./FileUploadModal.b2f99f8a.js";const m={name:"index",components:{ChatFeed:c},computed:{getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.chatChannels.general}},setup(){const{address:t,chainId:o}=n();return{address:t,chainId:o}}};function d(t,o,h,u,f,e){const s=p("ChatFeed");return a(),i(s,{class:"mt-1",showQuotedPost:t.$config.showRepliesOnHomepage,orbisContext:e.getOrbisContext},null,8,["showQuotedPost","orbisContext"])}const Q=r(m,[["render",d]]);export{Q as default};

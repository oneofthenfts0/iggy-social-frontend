import{a as r,l as n,c as i,r as p,o as c}from"./entry.07801d4a.js";import{C as m}from"./ChatFeed.d2c45523.js";import"./ChatPost.d8104b59.js";import"./user.aec4d8c9.js";import"./ProfileImage.ab1461a1.js";import"./WaitingToast.6c49126c.js";import"./textUtils.3c397105.js";import"./storageUtils.8a32f2a9.js";import"./MintedPostImage.80670e8b.js";import"./SwitchChainButton.7b20bf5d.js";import"./site.702d541f.js";import"./ConnectWalletButton.cd0af054.js";import"./FileUploadModal.f69afa1b.js";const a={name:"index",components:{ChatFeed:m},computed:{getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.orbisContext}},setup(){const{address:t,chainId:o}=n();return{address:t,chainId:o}}};function d(t,o,u,f,h,e){const s=p("ChatFeed");return c(),i(s,{class:"mt-1",showQuotedPost:t.$config.showRepliesOnHomepage,orbisContext:e.getOrbisContext},null,8,["showQuotedPost","orbisContext"])}const Q=r(a,[["render",d]]);export{Q as default};

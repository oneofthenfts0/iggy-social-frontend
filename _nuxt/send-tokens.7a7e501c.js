import{H as N,T as S,M as R}from"./components.4c3af711.js";import{t as E}from"./tokens.f7a97a02.js";import{a as B,a0 as M,I as U,C as k,A as g,P as _,l as L,s as W,o as c,b as l,f as n,y as u,v as m,x as f,i as T,t as d,F as C,G as V,c as F,D as A,e as p,w as y}from"./entry.0aa6bc1e.js";import{a as D,E as w}from"./balanceUtils.9fd0af94.js";import{h as x}from"./textUtils.ad51ad06.js";import{W as v}from"./WaitingToast.03817ffe.js";import{C as H}from"./ConnectWalletButton.004cbf5b.js";import"./composables.d89ec163.js";const P={name:"SendTokensComponent",props:["recipient","tokens"],data(){return{filterTextInput:"",hasBlankCharacter:!1,inputReceiver:null,inputToken:null,inputTokenAmount:null,inputTokenBalance:null,recipientAddress:null,tokenList:[],waiting:!1}},components:{ConnectWalletButton:H},mounted(){this.inputReceiver=this.recipient,this.processRecipient(this.recipient),this.findBlankCharacter(),this.tokenList=this.tokens.tokens,this.selectInputToken(this.tokenList[0])},computed:{filteredTokensInput(){const e=new RegExp(this.filterTextInput,"i");return this.tokenList.filter(t=>e.test(t.symbol))},formatInputTokenBalance(){return this.inputTokenBalance?this.inputTokenBalance==0?0:this.inputTokenBalance>100?Number(this.inputTokenBalance).toFixed(2):Number(this.inputTokenBalance).toFixed(4):0},inputAmountLessThanBalance(){return this.inputTokenAmount&&this.inputTokenBalance?Number(this.inputTokenAmount)<=Number(this.inputTokenBalance):!1},isSupportedNetwork(){return this.chainId==this.$config.supportedChainId}},methods:{getTokenBalance:D,hasTextBlankCharacters:x,findBlankCharacter(){this.hasBlankCharacter=!1,this.hasBlankCharacter=x(this.inputReceiver)},async processRecipient(e){if(e)if(M(e))this.recipientAddress=e;else{const t=String(e).trim().toLowerCase().replace(this.$config.tldName,"");let i=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(i=this.signer);const r=new U(["function getDomainHolder(string) view returns (address)"]),s=new k(this.$config.punkTldAddress,r,i);this.recipientAddress=await s.getDomainHolder(t)}},async selectInputToken(e){this.inputToken=e,this.inputTokenAmount=null,this.signer&&(this.inputTokenBalance=await this.getTokenBalance(e,this.address,this.signer))},async send(){if(this.inputReceiver.includes(".")&&!this.inputReceiver.endsWith(this.$config.tldName))return this.toast.error("Invalid domain name. Only "+this.$config.tldName+" domains are supported.");if(this.waiting=!0,await this.processRecipient(this.inputReceiver),this.recipientAddress==g)return this.waiting=!1,this.toast.error("This domain name does not exist");this.inputToken.address==g?this.sendNativeCoin():this.sendErc20Tokens()},async sendErc20Tokens(){const e=new k(this.inputToken.address,w,this.signer);try{const t=await e.transfer(this.recipientAddress,_(this.inputTokenAmount,this.inputToken.decimals)),i=this.toast({component:v,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+t.hash,"_blank").focus()}),r=await t.wait();r.status===1?(this.toast.dismiss(i),this.toast("You have successfully sent "+String(this.inputTokenAmount)+" "+this.inputToken.symbol+" to "+this.inputReceiver,{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+t.hash,"_blank").focus()}),this.subtractInputTokenBalance(),this.waiting=!1):(this.toast.dismiss(i),this.waiting=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+t.hash,"_blank").focus()}),console.log(r))}catch(t){console.error(t);try{let i=t.message.split("reason=")[1];i=i.split(", method=")[0],i=i.replace(/"/g,""),i=i.replace("execution reverted:","Error:"),console.log(i),this.toast(i,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waiting=!1}},async sendNativeCoin(){new k(this.inputToken.address,w,this.signer);try{const e=await this.signer.sendTransaction({to:this.recipientAddress,value:_(this.inputTokenAmount,this.inputToken.decimals)}),t=this.toast({component:v,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+e.hash,"_blank").focus()}),i=await e.wait();i.status===1?(this.toast.dismiss(t),this.toast("You have successfully sent "+String(this.inputTokenAmount)+" "+this.inputToken.symbol+" to "+this.inputReceiver,{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+e.hash,"_blank").focus()}),this.subtractInputTokenBalance(),this.waiting=!1):(this.toast.dismiss(t),this.waiting=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+e.hash,"_blank").focus()}),console.log(i))}catch(e){console.error(e);try{let t=e.message.split("reason=")[1];t=t.split(", method=")[0],t=t.replace(/"/g,""),t=t.replace("execution reverted:","Error:"),console.log(t),this.toast(t,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waiting=!1}},setMaxInputTokenAmount(){this.inputTokenAmount=String(this.inputTokenBalance)},subtractInputTokenBalance(){this.inputTokenBalance=Number(this.inputTokenBalance)-Number(this.inputTokenAmount)}},setup(){const{address:e,chainId:t,isActivated:i,signer:r}=L(),s=W();return{address:e,chainId:t,isActivated:i,signer:r,toast:s}},watch:{async isActivated(){this.address&&(this.inputTokenBalance=await this.getTokenBalance(this.inputToken,this.address,this.signer))}}},j={class:"mb-3"},q={class:"input-group"},Q={key:0,class:"input-group-text",id:"basic-addon3"},Y=n("i",{class:"bi bi-exclamation-triangle-fill"},null,-1),G=[Y],K={key:0,class:"form-text",id:"basic-addon4"},O=n("i",{class:"bi bi-exclamation-triangle-fill"},null,-1),X={class:"input-group mb-1 mt-3"},Z={class:"btn btn-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},z={class:"dropdown-menu p-2"},J=["onClick"],$=n("small",null,"MAX",-1),tt=[$],et=n("em",null,"Balance: ",-1),nt={class:"cursor-pointer hover-color"},st={class:"d-flex justify-content-center mt-4"},it={key:1,disabled:!0,class:"btn btn-outline-primary",type:"button"},ot=["disabled"],at={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"},rt={key:3,disabled:!0,class:"btn btn-outline-primary",type:"button"},ct={key:4,disabled:!0,class:"btn btn-outline-primary",type:"button"};function lt(e,t,i,r,s,o){const h=A("ConnectWalletButton");return c(),l("div",null,[n("div",j,[n("div",q,[s.hasBlankCharacter?(c(),l("span",Q,G)):u("",!0),m(n("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>s.inputReceiver=a),type:"text",class:"form-control",id:"basic-url","aria-describedby":"basic-addon3 basic-addon4",placeholder:"Enter recipient's domain name or address",onKeyup:t[1]||(t[1]=(...a)=>o.findBlankCharacter&&o.findBlankCharacter(...a))},null,544),[[f,s.inputReceiver]])]),s.hasBlankCharacter?(c(),l("div",K,[O,T(" This domain name contains a blank character: "+d(encodeURIComponent(s.inputReceiver))+". Proceed with caution. ",1)])):u("",!0)]),n("div",X,[n("button",Z,d(s.inputToken?.symbol),1),n("ul",z,[m(n("input",{class:"form-control mb-2",placeholder:"Filter tokens","onUpdate:modelValue":t[2]||(t[2]=a=>s.filterTextInput=a)},null,512),[[f,s.filterTextInput]]),(c(!0),l(C,null,V(o.filteredTokensInput,a=>(c(),l("li",{key:a.address,class:"cursor-pointer"},[n("span",{onClick:b=>o.selectInputToken(a),class:"dropdown-item"},d(a.symbol)+" ("+d(a.name)+")",9,J)]))),128))]),m(n("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>s.inputTokenAmount=a),type:"text",class:"form-control",placeholder:"0.00"},null,512),[[f,s.inputTokenAmount]]),n("button",{onClick:t[4]||(t[4]=(...a)=>o.setMaxInputTokenAmount&&o.setMaxInputTokenAmount(...a)),class:"btn btn-outline-secondary",type:"button",id:"button-addon2"},tt)]),n("small",{onClick:t[5]||(t[5]=(...a)=>o.setMaxInputTokenAmount&&o.setMaxInputTokenAmount(...a))},[et,n("em",nt,d(o.formatInputTokenBalance)+" "+d(s.inputToken?.symbol),1)]),n("div",st,[r.isActivated?u("",!0):(c(),F(h,{key:0,class:"btn btn-outline-primary",btnText:"Connect wallet"})),r.isActivated&&!s.inputTokenAmount&&o.isSupportedNetwork?(c(),l("button",it," Send tokens ")):u("",!0),r.isActivated&&s.inputTokenAmount&&o.inputAmountLessThanBalance&&o.isSupportedNetwork?(c(),l("button",{key:2,disabled:s.waiting||!s.inputToken||!s.inputTokenAmount||!r.isActivated||!o.inputAmountLessThanBalance||!s.inputReceiver||!o.isSupportedNetwork,class:"btn btn-outline-primary",type:"button",onClick:t[6]||(t[6]=(...a)=>o.send&&o.send(...a))},[s.waiting?(c(),l("span",at)):u("",!0),T(" Send tokens ")],8,ot)):u("",!0),r.isActivated&&s.inputTokenAmount&&!o.inputAmountLessThanBalance&&o.isSupportedNetwork?(c(),l("button",rt," Balance too low ")):u("",!0),r.isActivated&&!o.isSupportedNetwork?(c(),l("button",ct," Wrong network ")):u("",!0)])])}const ut=B(P,[["render",lt]]),dt={name:"SendTokens",components:{SendTokensComponent:ut},computed:{getQueryRecipient(){return this.$route.query.to?this.$route.query.to:null}},setup(){return{tokens:E}}},pt={class:"scroll-500"},ht={class:"card border"},kt={class:"card-body mb-3"},mt={class:"fs-3"},ft=n("h3",{class:"mt-3"},"Send tokens",-1),Tt={class:"d-flex justify-content-center mt-5"},bt={class:"col-12 col-lg-8"};function gt(e,t,i,r,s,o){const h=S,a=R,b=N,I=A("SendTokensComponent");return c(),l(C,null,[p(b,null,{default:y(()=>[p(h,null,{default:y(()=>[T("Send tokens | "+d(e.$config.projectMetadataTitle),1)]),_:1}),p(a,{property:"og:title",content:"Send tokens | "+e.$config.projectMetadataTitle},null,8,["content"])]),_:1}),n("div",pt,[n("div",ht,[n("div",kt,[n("p",mt,[n("i",{class:"bi bi-arrow-left-circle cursor-pointer",onClick:t[0]||(t[0]=_t=>e.$router.back())})]),ft,n("div",Tt,[n("div",bt,[p(I,{tokens:r.tokens,recipient:o.getQueryRecipient},null,8,["tokens","recipient"])])])])])])],64)}const Nt=B(dt,[["render",gt]]);export{Nt as default};

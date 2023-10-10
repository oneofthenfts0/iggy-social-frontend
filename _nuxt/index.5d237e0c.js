import{H as F,T as $,M as k}from"./components.8f72840a.js";import{a as v,I as N,C as b,A as T,l as L,o as i,b as c,f as s,v as A,x as E,y as u,i as _,p as M,e as f,w as g,F as I,G as y,T as B,t as p,c as x,D as S}from"./entry.793b1bf0.js";import{a as D,b as P}from"./storageUtils.8f812791.js";import"./composables.314341f6.js";const j={name:"SearchNftModal",data(){return{componentId:null,searchText:"",waitingFind:!1,findError:!1}},mounted(){this.componentId=this.$.uid},methods:{async findNft(){if(this.waitingFind=!0,this.findError=!1,this.searchText){if(String(this.searchText).toLowerCase().startsWith("0x"))return document.getElementById("closeModal-"+this.componentId).click(),this.$router.push({path:"/nft/collection/",query:{id:this.searchText}}),this.searchText=null,this.waitingFind=!1;{const e=new N(["function getNftContractAddress(string calldata _uniqueId) external view returns(address)"]);let t=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(t=this.signer);const l=await new b(this.$config.nftLaunchpadBondingAddress,e,t).getNftContractAddress(this.searchText);if(l!==T)return document.getElementById("closeModal-"+this.componentId).click(),this.$router.push({path:"/nft/collection/",query:{id:l}}),this.searchText=null,this.waitingFind=!1}return this.findError=!0,this.waitingFind=!1}}},setup(){const{chainId:e,isActivated:t,signer:r}=L();return{chainId:e,isActivated:t,signer:r}}},V=["aria-labelledby"],q={class:"modal-dialog"},H={class:"modal-content"},U={class:"modal-header"},W=["id"],G=["id"],Z={class:"modal-body"},z={class:"mb-3"},J=["for"],K=["for"],O={key:0},Q={class:"modal-footer"},R=s("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),X=["disabled"],Y={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"};function tt(e,t,r,l,n,d){return i(),c("div",{class:"modal fade",id:"searchNftModal",tabindex:"-1","aria-labelledby":"modalLabel-"+n.componentId,"aria-hidden":"true"},[s("div",q,[s("div",H,[s("div",U,[s("h1",{class:"modal-title fs-5",id:"modalLabel-"+n.componentId},"Find NFT collection",8,W),s("button",{id:"closeModal-"+n.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,G)]),s("div",Z,[s("div",z,[s("label",{for:"input-"+n.componentId,class:"form-label"},"Enter NFT collection address or unique ID:",8,J),A(s("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>n.searchText=o),type:"text",class:"form-control",for:"input-"+n.componentId},null,8,K),[[E,n.searchText]])]),n.findError?(i(),c("p",O,"Error: Collection not found...")):u("",!0)]),s("div",Q,[R,s("button",{onClick:t[1]||(t[1]=(...o)=>d.findNft&&d.findNft(...o)),type:"button",class:"btn btn-primary",disabled:n.waitingFind},[n.waitingFind?(i(),c("span",Y)):u("",!0),_(" Find ")],8,X)])])])],8,V)}const et=v(j,[["render",tt]]),st={name:"Nft",props:["hideBackButton"],data(){return{allNftsArrayLength:0,allNftsIndexStart:0,allNftsIndexEnd:0,featuredNfts:[],lastNfts:[],waitingData:!1}},components:{SearchNftModal:et},mounted(){this.$config.nftLaunchpadBondingAddress&&(this.fetchFeaturedNfts(),this.fetchLastNfts())},computed:{showLoadMoreButton(){return this.allNftsIndexEnd>0}},methods:{async fetchFeaturedNfts(){this.waitingData=!0;let e=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(e=this.signer);const t=new N(["function getFeaturedNftContracts(uint256 amount) external view returns(address[] memory)"]),l=await new b(this.$config.nftLaunchpadBondingAddress,t,e).getFeaturedNftContracts(4);await this.parseNftsArray(l,this.featuredNfts,e)},async fetchLastNfts(){this.waitingData=!0;let e=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(e=this.signer);const t=new N(["function getNftContracts(uint256 fromIndex, uint256 toIndex) external view returns(address[] memory)","function getNftContractsArrayLength() external view returns(uint256)"]),r=new b(this.$config.nftLaunchpadBondingAddress,t,e);if(this.allNftsArrayLength===0&&(this.allNftsArrayLength=await r.getNftContractsArrayLength()),this.allNftsArrayLength>0){this.allNftsIndexEnd===0&&(this.allNftsIndexEnd=this.allNftsArrayLength-1,this.allNftsArrayLength<this.$config.nftLaunchpadLatestItems?this.allNftsIndexStart=0:this.allNftsIndexStart=this.allNftsArrayLength-this.$config.nftLaunchpadLatestItems);const n=[...await r.getNftContracts(this.allNftsIndexStart,this.allNftsIndexEnd)];n.reverse(),await this.parseNftsArray(n,this.lastNfts,e),this.allNftsIndexEnd>this.$config.nftLaunchpadLatestItems?this.allNftsIndexEnd=this.allNftsIndexEnd-this.$config.nftLaunchpadLatestItems:this.allNftsIndexEnd=0,this.allNftsIndexStart>this.$config.nftLaunchpadLatestItems?this.allNftsIndexStart=this.allNftsIndexStart-this.$config.nftLaunchpadLatestItems:this.allNftsIndexStart=0}this.waitingData=!1},formatPrice(e){if(e===null)return null;const t=Number(M(e));return t>100?t.toFixed(0):t>1?t.toFixed(2):t>.1?t.toFixed(4):t>.01?t.toFixed(5):t>.001?t.toFixed(6):t>1e-4?t.toFixed(7):t>1e-5?t.toFixed(8):t>1e-6?t.toFixed(9):t},async parseNftsArray(e,t,r){const l=new N(["function collectionPreview() public view returns (string memory)","function getMintPrice() public view returns (uint256)","function name() public view returns (string memory)"]);for(let n=0;n<e.length;n++){const d=new b(e[n],l,r);let o=D(window,e[n]);o||(o={address:e[n]});let h;o?.name?h=o.name:(h=await d.name(),o.name=h);const w=await d.getMintPrice();let m;o?.image?m=o.image:(m=await d.collectionPreview(),o.image=m),P(window,e[n],o),t.push({address:e[n],image:m,name:h,price:w})}}},setup(){const{address:e,chainId:t,isActivated:r,signer:l}=L();return{address:e,chainId:t,isActivated:r,signer:l}}},nt={class:"card border scroll-500"},at={class:"card-body"},ot=s("i",{class:"bi bi-arrow-left-circle cursor-pointer"},null,-1),it=[ot],rt={class:"d-flex flex-row flex-wrap mt-3"},ct=s("div",{class:"mb-3 me-auto"},"NFT Launchpad",-1),dt={class:"mb-3"},lt=s("i",{class:"bi bi-plus-circle"},null,-1),ht=s("button",{class:"btn btn-outline-primary btn-sm ms-2","data-bs-toggle":"modal","data-bs-target":"#searchNftModal"},[s("i",{class:"bi bi-search"}),_(" Find ")],-1),ft={key:1,class:"mb-3"},ut={key:2,class:"row"},mt={class:"card border mb-3"},pt=["src","alt"],gt={class:"card-body rounded-bottom-3"},_t={class:"card-text mb-1"},Nt={class:"card-text"},bt={key:3,class:"mt-3 mb-3"},wt={class:"row"},It={class:"card border mb-3"},yt=["src","alt"],xt={class:"card-body rounded-bottom-3"},vt={class:"card-text mb-1"},Lt={class:"card-text"},Ct={key:4,class:"d-flex justify-content-center mb-3"},Ft=s("span",{class:"spinner-border spinner-border-lg",role:"status","aria-hidden":"true"},null,-1),$t=[Ft],kt={key:5,class:"d-grid gap-2"},Tt=["disabled"],At={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"};function Et(e,t,r,l,n,d){const o=$,h=k,w=F,m=B,C=S("SearchNftModal");return i(),c(I,null,[f(w,null,{default:g(()=>[f(o,null,{default:g(()=>[_("NFT Launchpad | "+p(e.$config.projectMetadataTitle),1)]),_:1}),f(h,{property:"og:title",content:"NFT Launchpad | "+e.$config.projectMetadataTitle},null,8,["content"]),f(h,{name:"description",content:"Check out these awesome NFT collections on "+e.$config.projectName+"!"},null,8,["content"]),f(h,{property:"og:image",content:e.$config.projectUrl+e.$config.previewImageNftLaunchpad},null,8,["content"]),f(h,{property:"og:description",content:"Check out these awesome NFT collections on "+e.$config.projectName+"!"},null,8,["content"]),f(h,{name:"twitter:image",content:e.$config.projectUrl+e.$config.previewImageNftLaunchpad},null,8,["content"]),f(h,{name:"twitter:description",content:"Check out these awesome NFT collections on "+e.$config.projectName+"!"},null,8,["content"])]),_:1}),s("div",nt,[s("div",at,[r.hideBackButton?u("",!0):(i(),c("p",{key:0,class:"fs-3",onClick:t[0]||(t[0]=a=>e.$router.back())},it)),s("h3",rt,[ct,s("div",dt,[f(m,{class:"btn btn-outline-primary btn-sm",to:"/nft/create"},{default:g(()=>[lt,_(" Create ")]),_:1}),ht])]),n.featuredNfts.length>0?(i(),c("h4",ft,"Featured")):u("",!0),n.featuredNfts.length>0?(i(),c("div",ut,[(i(!0),c(I,null,y(n.featuredNfts,a=>(i(),x(m,{key:a.address,class:"col-md-3 text-decoration-none",to:"/nft/collection?id="+a.address},{default:g(()=>[s("div",mt,[s("img",{src:a.image,class:"card-img-top",alt:a.name},null,8,pt),s("div",gt,[s("p",_t,[s("strong",null,p(a.name),1)]),s("small",Nt,p(d.formatPrice(a.price))+" "+p(e.$config.tokenSymbol),1)])])]),_:2},1032,["to"]))),128))])):u("",!0),n.lastNfts.length>0?(i(),c("h4",bt,"Latest")):u("",!0),s("div",wt,[(i(!0),c(I,null,y(n.lastNfts,a=>(i(),x(m,{key:a.address,class:"col-md-3 text-decoration-none",to:"/nft/collection?id="+a.address},{default:g(()=>[s("div",It,[s("img",{src:a.image,class:"card-img-top",alt:a.name},null,8,yt),s("div",xt,[s("p",vt,[s("strong",null,p(a.name),1)]),s("small",Lt,p(d.formatPrice(a.price))+" "+p(e.$config.tokenSymbol),1)])])]),_:2},1032,["to"]))),128))]),n.waitingData?(i(),c("div",Ct,$t)):u("",!0),d.showLoadMoreButton?(i(),c("div",kt,[s("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=(...a)=>d.fetchLastNfts&&d.fetchLastNfts(...a)),disabled:n.waitingData},[n.waitingData?(i(),c("span",At)):u("",!0),_(" Load more ")],8,Tt)])):u("",!0)])]),f(C)],64)}const Pt=v(st,[["render",Et]]);export{Pt as default};

import{N as a}from"./entry.99cea302.js";const f=5e3;function o(t){let s;return t.startsWith("https://ipfs.io/ipfs/")?s=t.replace("https://ipfs.io/ipfs/",""):t.startsWith("https://cloudflare-ipfs.com/ipfs/")?s=t.replace("https://cloudflare-ipfs.com/ipfs/",""):t.startsWith("https://gateway.pinata.cloud/ipfs/")?s=t.replace("https://gateway.pinata.cloud/ipfs/",""):t.startsWith("https://ipfs.infura.io/ipfs/")?s=t.replace("https://ipfs.infura.io/ipfs/",""):t.startsWith("https://ipfs.fleek.co/ipfs/")?s=t.replace("https://ipfs.fleek.co/ipfs/",""):t.startsWith("https://dweb.link/ipfs/")?s=t.replace("https://dweb.link/ipfs/",""):t.startsWith("https://ipfs.itslit.org/ipfs/")?s=t.replace("https://ipfs.itslit.org/ipfs/",""):t.startsWith("https://ipfs.dylmusic.com/ipfs/")?s=t.replace("https://ipfs.dylmusic.com/ipfs/",""):t.startsWith("https://ipfs.filebase.io/ipfs/")?s=t.replace("https://ipfs.filebase.io/ipfs/",""):t.includes("pinata.cloud/ipfs/")?(s=t.split(".pinata.cloud/ipfs/")[1],s=s.replace("http://",""),s=s.replace("https://","")):t.includes(".ipfs.sphn.link/")&&(s=t.split(".ipfs.sphn.link/")[1],s=s.replace("http://",""),s=s.replace("https://","")),s?String("ipfs://"+s):null}async function h(t){let s=t;if(t.startsWith("http"))try{const i=await a.head(t,{signal:AbortSignal.timeout(f)});if(i.status===200)return{success:!0,url:t,format:i.headers["content-type"]};s=o(t)}catch{s=o(t)}if(!s)return t;const r=["https://ipfs.io/ipfs/","https://nftdegeniggy.myfilebase.com/ipfs/","https://ipfs.filebase.io/ipfs/","https://gateway.pinata.cloud/ipfs/","https://ipfs.itslit.org/ipfs/","https://ipfs.dylmusic.com/ipfs/"];if(s.startsWith("ipfs://")){const i=s.replace("ipfs://","");for(let e=0;e<r.length;e++){const c=r[e]+i;try{const p=await a.head(c,{signal:AbortSignal.timeout(f)});if(p.status===200)return{success:!0,url:c,format:p.headers["content-type"]}}catch{continue}}}else if(t.startsWith("ar://")){const i=t.replace("ar://","https://arweave.net/");try{const e=await a.head(i,{signal:AbortSignal.timeout(f)});if(e.status===200)return{success:!0,url:i,format:e.headers["content-type"]}}catch{return t}}return t}export{o as a,h as g};

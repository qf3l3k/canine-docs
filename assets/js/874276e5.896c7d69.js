"use strict";(self.webpackChunkcanine_docs=self.webpackChunkcanine_docs||[]).push([[5533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:6},i="Storage Module",l={unversionedId:"protocol/modules/storage",id:"protocol/modules/storage",title:"Storage Module",description:"The Jackal Protocol incorporates two crucial algorithms for decentralized storage: Jackal Proof-of-Persistence (JPOP)",source:"@site/docs/protocol/modules/storage.md",sourceDirName:"protocol/modules",slug:"/protocol/modules/storage",permalink:"/docs/protocol/modules/storage",draft:!1,editUrl:"https://github.com/JackalLabs/canine-docs/blob/master/docs/protocol/modules/storage.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"WASM Module",permalink:"/docs/protocol/modules/wasm"},next:{title:"Filetree Module",permalink:"/docs/protocol/modules/filetree"}},s={},c=[{value:"Jackal Proof-of-Persistence (JPOP)",id:"jackal-proof-of-persistence-jpop",level:2},{value:"Internal Detection Of Loss (IDOL) Protocol",id:"internal-detection-of-loss-idol-protocol",level:2},{value:"Interaction Outline",id:"interaction-outline",level:2},{value:"Client Query Commands",id:"client-query-commands",level:2},{value:"Transactions",id:"transactions",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"storage-module"},"Storage Module"),(0,r.kt)("p",null,"The Jackal Protocol incorporates two crucial algorithms for decentralized storage: Jackal Proof-of-Persistence (JPOP)\nand Internal Detection Of Loss (IDOL) protocols. This document provides an overview of these algorithms, their\nfunctionalities, and their interaction with users and Storage Providers."),(0,r.kt)("h2",{id:"jackal-proof-of-persistence-jpop"},"Jackal Proof-of-Persistence (JPOP)"),(0,r.kt)("p",null,"JPOP is a Proof-of-Storage algorithm that governs the relationship between the storage provider and the user. It\noperates through a series of contracts containing the Merkle Tree root hash of the file and information required to\nprove ownership. Storage Providers are responsible for posting Merkle Proofs within a challenge window determined by the\nblockchain."),(0,r.kt)("p",null,"The challenge windows require miners to post the raw data chunk and the required Merkle Hashes to prove the data belongs\nto the Merkle Root stored on the contract. The challenge indexes are chosen at random by the blockchain using a\nblock-hash-based random number generator paired with a random data oracle."),(0,r.kt)("h2",{id:"internal-detection-of-loss-idol-protocol"},"Internal Detection Of Loss (IDOL) Protocol"),(0,r.kt)("p",null,"The IDOL protocol ensures that data remains available and accessible. When a Storage Provider successfully posts a\nMerkle Proof within the challenge window, and Validators verify the data, the Storage Provider is rewarded. The rewards\nare proportional to the file size associated with the contract relative to other active contracts on the network."),(0,r.kt)("p",null,"If a Storage Provider fails to provide a valid proof within the allotted timeframe, the contract is marked with a missed\nproof. After a certain number of missed proofs, the contract is burned, and the user is alerted the next time they query\nthe contract. Storage Providers receive penalties for every contract burned due to missed proofs, which remain on their\nrecord for an adjustable period."),(0,r.kt)("p",null,"The IDOL protocol comes into play when contracts with missed proofs are moved to a new list where they can be claimed by\nother providers. The new provider downloads the file from one of the two online providers storing the same file, resumes\nthe contract's proof action, and restores redundancy to 3x."),(0,r.kt)("h2",{id:"interaction-outline"},"Interaction Outline"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A user sends a file to an available Storage Provider. A list of Storage Providers can be found on the blockchain, and\nminers can deny any incoming request if they do not want to store new files."),(0,r.kt)("li",{parentName:"ol"},"After receiving the entire file, the Storage Provider keeps the file in memory and posts a contract to the\nblockchain."),(0,r.kt)("li",{parentName:"ol"},"If the contract is not signed by the sender within a certain number of blocks (configurable by the Storage Provider),\nthe file is removed from memory, and the contract is burned."),(0,r.kt)("li",{parentName:"ol"},"If the contract is signed by the user within the given number of blocks, the file is committed to the Storage\nProvider's hard storage, and the challenge windows start being created for the now active contract.")),(0,r.kt)("h2",{id:"client-query-commands"},"Client Query Commands"),(0,r.kt)("p",null,"The client query commands enable users to interact with and query the storage state. Examples of these commands include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list-active-deals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"show-active-deals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list-miners")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"show-miners")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list-contracts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"show-contracts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"find-file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"freespace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get-client-free-space")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list-pay-blocks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"show-pay-blocks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list-strays")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"show-strays")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"storage-payment-info"))),(0,r.kt)("h2",{id:"transactions"},"Transactions"),(0,r.kt)("p",null,"The transaction commands allow users to interact with the storage module. Examples of these commands include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"init-miner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set-miner-ip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set-miner-totalspace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sign-contract")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"post-contract")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"postproof")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"buy-storage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cancel-contract")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"upgrade-storage"))),(0,r.kt)("p",null,"By implementing the JPOP and IDOL protocols, the Jackal Protocol ensures secure, efficient, and reliable decentralized\nstorage management. These protocols, along with the provided client query commands and transactions, enable users and\nStorage Providers to interact with the Jackal storage ecosystem seamlessly."),(0,r.kt)("p",null,"Please refer to the respective command documentation for detailed usage and parameters. The Jackal Protocol continues to\nevolve, and as new features are added, updates to this documentation will be provided accordingly."))}m.isMDXComponent=!0}}]);
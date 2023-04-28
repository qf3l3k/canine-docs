"use strict";(self.webpackChunkcanine_docs=self.webpackChunkcanine_docs||[]).push([[1232],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),v=n,k=u["".concat(l,".").concat(v)]||u[v]||d[v]||a;return o?r.createElement(k,i(i({ref:t},p),{},{components:o})):r.createElement(k,i({ref:t},p))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}v.displayName="MDXCreateElement"},1392:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:1},i="JKL Token",s={unversionedId:"protocol/tokens",id:"protocol/tokens",title:"JKL Token",description:"Overview",source:"@site/docs/protocol/tokens.md",sourceDirName:"protocol",slug:"/protocol/tokens",permalink:"/docs/protocol/tokens",draft:!1,editUrl:"https://github.com/JackalLabs/canine-docs/blob/master/docs/protocol/tokens.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Jackal Proof-of-Persistence Documentation",permalink:"/docs/protocol/p-o-p"},next:{title:"Encryption",permalink:"/docs/protocol/encryption"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"dApps",id:"dapps",level:3},{value:"Securing the Network",id:"securing-the-network",level:3},{value:"Transaction Fees",id:"transaction-fees",level:3},{value:"Governance",id:"governance",level:3},{value:"Collateral",id:"collateral",level:3},{value:"Liquidity Provision",id:"liquidity-provision",level:3},{value:"Unique JKL Token Utility for Users and Storage Providers",id:"unique-jkl-token-utility-for-users-and-storage-providers",level:2},{value:"Users",id:"users",level:3},{value:"Storage Providers",id:"storage-providers",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"jkl-token"},"JKL Token"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The JKL token is an inflationary token that powers the Jackal Protocol. It has numerous use cases within the ecosystem, ensuring its utility and importance. In this documentation, we will outline the main use cases of the JKL token and explain its role in the Jackal Protocol ecosystem."),(0,n.kt)("h2",{id:"use-cases"},"Use Cases"),(0,n.kt)("h3",{id:"dapps"},"dApps"),(0,n.kt)("p",null,"Applications built leveraging the Jackal Protocol, such as Jackal Storage and the RNS Marketplace, may choose to include the JKL token to expand its utility."),(0,n.kt)("h3",{id:"securing-the-network"},"Securing the Network"),(0,n.kt)("p",null,"As the Jackal Protocol is a Proof-of-Stake (PoS) Cosmos L1 blockchain, JKL can be delegated to validators to secure the network and earn JKL rewards. Otherwise known as staking or bonded tokens."),(0,n.kt)("h3",{id:"transaction-fees"},"Transaction Fees"),(0,n.kt)("p",null,"Transactions on the Jackal Protocol must be paid for using JKL. As the protocol is PoS, the cost of transactions is inexpensive."),(0,n.kt)("h3",{id:"governance"},"Governance"),(0,n.kt)("p",null,"Staked tokens grant on-chain governance participation within the Jackal Protocol to vote on text, software, spend, and other governance proposals."),(0,n.kt)("h3",{id:"collateral"},"Collateral"),(0,n.kt)("p",null,"The JKL token can act as collateral for validators, storage providers, and other smart contract use cases."),(0,n.kt)("h3",{id:"liquidity-provision"},"Liquidity Provision"),(0,n.kt)("p",null,"JKL can be allocated into a liquidity pool to earn rewards."),(0,n.kt)("h2",{id:"unique-jkl-token-utility-for-users-and-storage-providers"},"Unique JKL Token Utility for Users and Storage Providers"),(0,n.kt)("h3",{id:"users"},"Users"),(0,n.kt)("p",null,"Users seeking storage solutions can leverage JKL tokens to pay for the storage services provided by storage providers within the Jackal Protocol. By utilizing JKL tokens as a medium of exchange, users can access a decentralized, secure, and censorship-resistant storage infrastructure."),(0,n.kt)("h3",{id:"storage-providers"},"Storage Providers"),(0,n.kt)("p",null,"Storage providers are incentivized to offer storage space and maintain a high level of service by earning JKL tokens. By receiving JKL tokens as payment for their services, storage providers can cover the costs of infrastructure, hardware, and bandwidth while potentially profiting from their participation in the ecosystem."))}d.isMDXComponent=!0}}]);
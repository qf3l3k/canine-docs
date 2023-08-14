"use strict";(self.webpackChunkcanine_docs=self.webpackChunkcanine_docs||[]).push([[5863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="Setting Up JProvd",l={unversionedId:"nodes/providers/setting_up",id:"nodes/providers/setting_up",title:"Setting Up JProvd",description:"Pre-Requisites",source:"@site/docs/nodes/providers/2_setting_up.md",sourceDirName:"nodes/providers",slug:"/nodes/providers/setting_up",permalink:"/docs/nodes/providers/setting_up",draft:!1,editUrl:"https://github.com/JackalLabs/canine-docs/blob/master/docs/nodes/providers/2_setting_up.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Creating Provider",permalink:"/docs/nodes/providers/building"},next:{title:"About These Libraries",permalink:"/docs/developers/dAppLibraries/intro"}},s={},p=[{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"Installing",id:"installing",level:2},{value:"Initializing",id:"initializing",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-jprovd"},"Setting Up JProvd"),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/nodes/install"},"Set-up"),"."),(0,o.kt)("h2",{id:"installing"},"Installing"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Check latest version ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JackalLabs/canine-provider/releases"},"here"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"'Setting Up' instructions must be followed fully to add necessary golang path info to the current users ~/.profile. If\nthese steps are skipped, 'make install' will not build jprovd--the provider daemon. Please ensure to perform the below\nsteps as the 'jackal' user you previously made.")),(0,o.kt)("p",null,"Install make and confirm installation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\n\nsudo apt install make\n\nmake --version\n\n")),(0,o.kt)("p",null,"Build jprovd and source the .profile to ensure your shell can find jprovd. Confirm installation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/JackalLabs/canine-provider.git\n\ncd canine-provider \n\ngit pull\n\ngit checkout {version}\n\nmake install\n\nsource ~/.profile\n\njprovd version\n\n")),(0,o.kt)("p",null,"If you used ZFS to make a zpool. Give ownership of the zpool to the jackal user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"\nsudo chown -R jackal:jackal /{pool-name}\n\n")),(0,o.kt)("h2",{id:"initializing"},"Initializing"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Your keybase identity can be left as ",(0,o.kt)("inlineCode",{parentName:"p"},'""')," if you don't want to link your provider to keybase.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Export the path to your storage pool")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export PHOME={path-to-pool-from-before}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Generate your provider's private key")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"jprovd client gen-key --home=$PHOME\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Configure the chain-id")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"jprovd client config chain-id {chain-id} --home=$PHOME\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Configure the rpc node your provider will use to connect to the chain")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"jprovd client config node {your node} --home=$PHOME\n")),(0,o.kt)("p",null,"Some users may find it easier to complete steps 3 and 4 manually. Instructions for Ubuntu are below:"),(0,o.kt)("p",null,"In your terminal, while inside of the PHOME directory, type 'nautilus'. This will open the nautilus file explorer.\nAt the top right corner, make sure 'Show Hidden Files' is checked.\nNavigate to your '.jackal-storage' folder to access the config folder.\nOpen the client.toml file to manually type in the 'chain-id' and 'node'.\nSave and close the client.toml file."),(0,o.kt)("p",null,"Testnet and Mainnet chain-ids can be found here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JackalLabs/jackal-chain-assets"},"https://github.com/JackalLabs/jackal-chain-assets"),".\nIf you are not running your own tendermint RPC node, Jackal Labs is currently hosting a testnet tendermint RPC node.\nEndpoint below:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://testnet-rpc.jackalprotocol.com:443"},"https://testnet-rpc.jackalprotocol.com:443")),(0,o.kt)("p",null,"We will also be hosting a tendermint rpc node for mainnet, which will be made accessible to the public at launch of\nJackal Storage."),(0,o.kt)("p",null,"Before completing step 5 below, your account will need tokens.\nTestnet tokens can be obtained at ",(0,o.kt)("a",{parentName:"p",href:"https://testnet-faucet.jackalprotocol.com/"},"https://testnet-faucet.jackalprotocol.com/"),"\nMainnet tokens can be purchased on ",(0,o.kt)("a",{parentName:"p",href:"https://frontier.osmosis.zone/"},"https://frontier.osmosis.zone/")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Initialize the provider")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"jprovd init {FQDN} {STORAGE_IN_BYTES} {KEYBASE_IDENTITY} --home=$PHOME\n")),(0,o.kt)("p",null,"example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'jprovd init "https://storagep1.chainstrategies.cloud" "9000" "" --home=$PHOME\n')),(0,o.kt)("p",null,"Please note that 'https://' is required to be included in the FQDN or init will throw an error.\nLink for TB to Bytes converter: ",(0,o.kt)("a",{parentName:"p",href:"https://www.convertunits.com/from/TB/to/byte"},"https://www.convertunits.com/from/TB/to/byte")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Start the provider")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"jprovd start --home=$PHOME\n")))}d.isMDXComponent=!0}}]);
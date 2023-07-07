"use strict";(self.webpackChunkcanine_docs=self.webpackChunkcanine_docs||[]).push([[9014],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),g=l,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return t?a.createElement(f,r(r({ref:n},p),{},{components:t})):a.createElement(f,r({ref:n},p))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:l,r[1]=i;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6121:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(7462),l=(t(7294),t(3905));const o={sidebar_position:2},r="Jackal.js",i={unversionedId:"developers/jackaljs/intro",id:"developers/jackaljs/intro",title:"Jackal.js",description:"Quickstart",source:"@site/docs/developers/jackaljs/intro.md",sourceDirName:"developers/jackaljs",slug:"/developers/jackaljs/intro",permalink:"/docs/developers/jackaljs/intro",draft:!1,editUrl:"https://github.com/JackalLabs/canine-docs/blob/master/docs/developers/jackaljs/intro.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setting Up JProvd",permalink:"/docs/nodes/providers/setting_up"},next:{title:"Getting Started",permalink:"/docs/developers/intro"}},s={},c=[{value:"Quickstart",id:"quickstart",level:2},{value:"Pre-requesites",id:"pre-requesites",level:3},{value:"Setting Up",id:"setting-up",level:3},{value:"Updating Vite Config",id:"updating-vite-config",level:4},{value:"Connecting Your Wallet",id:"connecting-your-wallet",level:3},{value:"Wallet Selection",id:"wallet-selection",level:4},{value:'<a name="testnet-configuration"></a>Testnet Configuration',id:"testnet-configuration",level:4},{value:'<a name="mainnet-configuration"></a>Mainnet Configuration',id:"mainnet-configuration",level:4},{value:"Bringing the full config together",id:"bringing-the-full-config-together",level:4},{value:"Buying Storage Space",id:"buying-storage-space",level:3},{value:"Creating a Root Folder",id:"creating-a-root-folder",level:3},{value:"Creating a Child Folder",id:"creating-a-child-folder",level:3},{value:"Uploading a File",id:"uploading-a-file",level:3},{value:"Downloading a File",id:"downloading-a-file",level:3}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"jackaljs"},"Jackal.js"),(0,l.kt)("h2",{id:"quickstart"},"Quickstart"),(0,l.kt)("p",null,"To get started using Jackal in the browser, you'll need a few things!"),(0,l.kt)("h3",{id:"pre-requesites"},"Pre-requesites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://vuejs.org/guide/introduction.html"},"Vue.js")," or ",(0,l.kt)("a",{parentName:"li",href:"https://react.dev/learn"},"React")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/jackal.js"},"Jackal.js")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://vitejs.dev"},"Vite")),(0,l.kt)("li",{parentName:"ul"},"Chromium-family browser (Chrome, Brave, Edge, etc)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.keplr.app"},"Keplr")," or ",(0,l.kt)("a",{parentName:"li",href:"https://www.leapwallet.io/cosmos"},"Leap")," wallet extension")),(0,l.kt)("h3",{id:"setting-up"},"Setting Up"),(0,l.kt)("p",null,"To get started, make sure you ",(0,l.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide"},"start your project using Vite"),". If you have an existing React app for example, re-init the project using Vite."),(0,l.kt)("p",null,"Install dependencies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install jackal.js\nnpm install -D vite-plugin-node-stdlib-browser\n")),(0,l.kt)("p",null,"Jackal.js requires Node v20+. The easiest way to manage this is with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#installing-and-updating"},"NVM"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nvm use 20\n")),(0,l.kt)("h4",{id:"updating-vite-config"},"Updating Vite Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// In vite.config.js:\nimport { defineConfig } from 'vite'\nimport nodePolyfills from 'vite-plugin-node-stdlib-browser'\n\nexport default defineConfig({\n  plugins: [\n    nodePolyfills()\n  ],\n})\n")),(0,l.kt)("h3",{id:"connecting-your-wallet"},"Connecting Your Wallet"),(0,l.kt)("p",null,"Custom chain configurations are required for ",(0,l.kt)("a",{parentName:"p",href:"#testnet-configuration"},"Testnet"),", and for Keplr on ",(0,l.kt)("a",{parentName:"p",href:"#mainnet-configuration"},"Mainnet"),". The following are the correct options to use.\nJackal.js additionally supports app-level overrides to the chain default settings. This requires some redundancy, but allows for greater flexibility in projects."),(0,l.kt)("h4",{id:"wallet-selection"},"Wallet Selection"),(0,l.kt)("p",null,"Currently Jackal,js supports Keplr and Leap wallets. Only a single wallet can be used at any time, but you can switch between them as desired."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const selectedWallet = 'keplr'\n// OR\nconst selectedWallet = 'leap'\n")),(0,l.kt)("h4",{id:"testnet-configuration"},(0,l.kt)("a",{name:"testnet-configuration"}),"Testnet Configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const chainConfig = {\n  chainId: 'lupulella-2',\n  chainName: 'Jackal Testnet II',\n  rpc: 'https://testnet-rpc.jackalprotocol.com',\n  rest: 'https://testnet-api.jackalprotocol.com',\n  bip44: {\n    coinType: 118\n  },\n  coinType: 118,\n  stakeCurrency: {\n    coinDenom: 'JKL',\n    coinMinimalDenom: 'ujkl',\n    coinDecimals: 6\n  },\n  bech32Config: {\n    bech32PrefixAccAddr: 'jkl',\n    bech32PrefixAccPub: 'jklpub',\n    bech32PrefixValAddr: 'jklvaloper',\n    bech32PrefixValPub: 'jklvaloperpub',\n    bech32PrefixConsAddr: 'jklvalcons',\n    bech32PrefixConsPub: 'jklvalconspub'\n  },\n  currencies: [\n    {\n      coinDenom: 'JKL',\n      coinMinimalDenom: 'ujkl',\n      coinDecimals: 6\n    }\n  ],\n  feeCurrencies: [\n    {\n      coinDenom: 'JKL',\n      coinMinimalDenom: 'ujkl',\n      coinDecimals: 6,\n      gasPriceStep: {\n        low: 0.002,\n        average: 0.002,\n        high: 0.02\n      }\n    }\n  ],\n  features: []\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const appConfig = {\n  signerChain: 'lupulella-2',\n  enabledChains: ['lupulella-2'],\n  queryAddr: 'https://testnet-grpc.jackalprotocol.com',\n  txAddr: 'https://testnet-rpc.jackalprotocol.com'\n}\n")),(0,l.kt)("h4",{id:"mainnet-configuration"},(0,l.kt)("a",{name:"mainnet-configuration"}),"Mainnet Configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const chainConfig = {\n  chainId: 'jackal-1',\n  chainName: 'Jackal Mainnet',\n  rpc: 'https://rpc.jackalprotocol.com',\n  rest: 'https://api.jackalprotocol.com',\n  bip44: {\n    coinType: 118\n  },\n  coinType: 118,\n  stakeCurrency: {\n    coinDenom: 'JKL',\n    coinMinimalDenom: 'ujkl',\n    coinDecimals: 6\n  },\n  bech32Config: {\n    bech32PrefixAccAddr: 'jkl',\n    bech32PrefixAccPub: 'jklpub',\n    bech32PrefixValAddr: 'jklvaloper',\n    bech32PrefixValPub: 'jklvaloperpub',\n    bech32PrefixConsAddr: 'jklvalcons',\n    bech32PrefixConsPub: 'jklvalconspub'\n  },\n  currencies: [\n    {\n      coinDenom: 'JKL',\n      coinMinimalDenom: 'ujkl',\n      coinDecimals: 6\n    }\n  ],\n  feeCurrencies: [\n    {\n      coinDenom: 'JKL',\n      coinMinimalDenom: 'ujkl',\n      coinDecimals: 6,\n      gasPriceStep: {\n        low: 0.002,\n        average: 0.002,\n        high: 0.02\n      }\n    }\n  ],\n  features: []\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const appConfig = {\n  signerChain: 'jackal-1',\n  enabledChains: ['jackal-1'],\n  queryAddr: 'https://grpc.jackalprotocol.com',\n  txAddr: 'https://rpc.jackalprotocol.com'\n}\n")),(0,l.kt)("h4",{id:"bringing-the-full-config-together"},"Bringing the full config together"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const finalWalletConfig = {\n  selectedWallet,\n  ...appConfig,\n  chainConfig\n}\n\n// Hooking up the wallet to your app\nconst wallet = await WalletHandler.trackWallet(finalWalletConfig)\n")),(0,l.kt)("p",null,"Additionally, a query-only mode for the wallet can get accessed via the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const wallet = await WalletHandler.trackQueryWallet('https://grpc.jackalprotocol.com') // Use the gRPC-web address of your choice\n")),(0,l.kt)("h3",{id:"buying-storage-space"},"Buying Storage Space"),(0,l.kt)("p",null,"Every account that wishes to use the Jackal Protocol to store data needs to have a paid storage account.\nThis means giving the protocol $8 USD per month per tb. We can do this with Jackal.js!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const storage = await StorageHandler.trackStorage(wallet)\n\n// (Wallet address, duration in months (min 1), \n// space in terabytes (min .001)\n\n// 2 TB for 1 year:\nawait storage.buyStorage(WALLET_ADDRESS, 12, 2)\n")),(0,l.kt)("h3",{id:"creating-a-root-folder"},"Creating a Root Folder"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const fileIo = await FileIo.trackIo(wallet)\n\nconst listOfRootFolders = ["Home", ...] \n// you can create as many root folders as you would like this way. Home is the dashboard default root directory.\n\n// The first time a user connects, they must init the system\nconst storage = await StorageHandler.trackStorage(wallet)\nconst msg = storage.makeStorageInitMsg()\nawait fileIo.generateInitialDirs(msg, listOfRootFolders)\n\n// after the first time, this code can be used instead. this will only create new root folders if they don\'t already exist\nconst newFolderCount = await fileIo.verifyFoldersExist(listOfRootFolders)\n')),(0,l.kt)("h3",{id:"creating-a-child-folder"},"Creating a Child Folder"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const fileIo = await FileIo.trackIo(wallet)\n\nconst parentFolderPath = PARENT_FOLDER_NAME // for example Dashboard\'s root folder path is s/Home\nconst parent = await fileIo.downloadFolder(parentFolderPath)\n\nconst listOfChildFolders = ["Movies", "Pictures", ...]\n\nawait fileIo.createFolders(parent, listOfChildFolders)\n')),(0,l.kt)("h3",{id:"uploading-a-file"},"Uploading a File"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const fileIo = await FileIo.trackIo(wallet)\n\nconst parentFolderPath = PARENT_FOLDER_NAME // for example Dashboard's root folder path is s/Home\nconst parent = await fileIo.downloadFolder(parentFolderPath)\n\nconst file = FILE_OBJECT // this MUST be an instance of File() that is in the browser memory\nconst fileName = file.name\nconst handler = await FileUploadHandler.trackFile(file, parentFolderPath)\n\nconst uploadList = {}\nuploadList[fileName] = {\n  data: null,\n  exists: false,\n  handler: handler,\n  key: fileName,\n  uploadable: await handler.getForUpload()\n}\n\nawait fileIo.staggeredUploadFiles(uploadList, parent, {counter: 0, complete: 0})\n")),(0,l.kt)("h3",{id:"downloading-a-file"},"Downloading a File"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const fileIo = await FileIo.trackIo(wallet)\n\n/* optional */\nconst parentFolderPath = PARENT_FOLDER_NAME // for example Dashboard's root folder path is s/Home\nconst parent = await fileIo.downloadFolder(parentFolderPath)\nconst childrenFiles = parent.getChildFiles()\nconst pathOfFirstChild = parent.getMyChildPath(childrenFiles[0].name)\n/* end optional */\n\nconst downloadDetails = {\n  rawPath: FILE_PATH, // manual complete file path OR pathOfFirstChild\n  owner: OWNER_ADDRESS, // JKL address of file owner\n  isFolder: false\n}\n\nconst fileHanlder = await fileIo.downloadFile(downloadDetails, { track: 0 })\n\nconst file = fileHanlder.receiveBacon()\n// do what you want with the File object returned by receiveBacon\n")))}u.isMDXComponent=!0}}]);
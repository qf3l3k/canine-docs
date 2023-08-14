"use strict";(self.webpackChunkcanine_docs=self.webpackChunkcanine_docs||[]).push([[7026],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var d=2;d<o;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9583:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:1},s="Creating Provider",a={unversionedId:"nodes/providers/building",id:"nodes/providers/building",title:"Creating Provider",description:"Disclaimer",source:"@site/docs/nodes/providers/1_building.md",sourceDirName:"nodes/providers",slug:"/nodes/providers/building",permalink:"/docs/nodes/providers/building",draft:!1,editUrl:"https://github.com/JackalLabs/canine-docs/blob/master/docs/nodes/providers/1_building.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Enterprise Build",permalink:"/docs/nodes/providers/hardware/enterprise"},next:{title:"Setting Up JProvd",permalink:"/docs/nodes/providers/setting_up"}},l={},d=[{value:"Disclaimer",id:"disclaimer",level:2},{value:"Networking",id:"networking",level:2},{value:"Setting up ZFS Without Mirroring",id:"setting-up-zfs-without-mirroring",level:2}],p={toc:d},u="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-provider"},"Creating Provider"),(0,i.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,i.kt)("p",null,"This guide assumes you either have access to a full node over a network connection or are using the same machine as the\nfull node."),(0,i.kt)("h2",{id:"networking"},"Networking"),(0,i.kt)("p",null,"To allow your provider to be used by the Jackal Protocol Dashboard, please ensure you have a reverse proxy system setup\nand have a registered domain name pointing to your provider. We recommend\nusing ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/"},"Nginx"),"."),(0,i.kt)("p",null,"If you have UPNP enabled on your router, your provider will be open to the internet by default at port ",(0,i.kt)("inlineCode",{parentName:"p"},"3333"),". You can\nfind the address it can be connected to by running ",(0,i.kt)("inlineCode",{parentName:"p"},"canined network ip"),"."),(0,i.kt)("h2",{id:"setting-up-zfs-without-mirroring"},"Setting up ZFS Without Mirroring"),(0,i.kt)("p",null,"Setting up ZFS allows us to combine multiple drives together, in this case we are merging two drives. We don't recommend\nyou only merge drives with striping and instead we recommend mirroring. However mirroring is a longer process and\ndifferent for each configuration. In our case, this machine is only running with 24TB across 2 drives. We are less\nconcerned about a drive failing as that would wipe half our storage anyways."),(0,i.kt)("p",null,"List all drives with :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo fdisk -l\n")),(0,i.kt)("p",null,"You should end up seeing something like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"...\n\nDisk /dev/sda: 12.75 TiB, 14000519643136 bytes, 27344764928 sectors\nDisk model: ST14000NM001G-2K\nUnits: sectors of 1 * 512 = 512 bytes\nSector size (logical/physical): 512 bytes / 4096 bytes\nI/O size (minimum/optimal): 4096 bytes / 4096 bytes\nDisklabel type: gpt\nDisk identifier: 4DE192A1-7AFF-F64D-93D5-CA48B806DAA0\n\nDisk /dev/sdb: 12.75 TiB, 14000519643136 bytes, 27344764928 sectors\nDisk model: ST14000NM001G-2K\nUnits: sectors of 1 * 512 = 512 bytes\nSector size (logical/physical): 512 bytes / 4096 bytes\nI/O size (minimum/optimal): 4096 bytes / 4096 bytes\nDisklabel type: gpt\nDisk identifier: D2827F71-7F0A-EE4A-BB12-1B2172641DBE\n\n...\n")),(0,i.kt)("p",null,"Note down the Disk paths that you wish to use for your storage provider, in this case it is ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/sdb")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/sda"),"."),(0,i.kt)("p",null,"We install ZFS and create a new pool as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install zfsutils-linux\n\nsudo zpool create {pool-name} /dev/sda /dev/sdb ...\n\nsudo zpool status\n")),(0,i.kt)("p",null,"This folder will now have the drives mounted at ",(0,i.kt)("inlineCode",{parentName:"p"},"/{pool-name}"),". For more in-depth guides to using zfs, check\nout ",(0,i.kt)("a",{parentName:"p",href:"https://zfsonlinux.org/"},"this page"),"."))}c.isMDXComponent=!0}}]);
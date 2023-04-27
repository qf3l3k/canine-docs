"use strict";(self.webpackChunkcanine_docs=self.webpackChunkcanine_docs||[]).push([[4286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:4},s="Joining Mainnet",i={unversionedId:"nodes/nodes/mainnet",id:"nodes/nodes/mainnet",title:"Joining Mainnet",description:"Perform the following as the jackal user.",source:"@site/docs/nodes/nodes/4_mainnet.md",sourceDirName:"nodes/nodes",slug:"/nodes/nodes/mainnet",permalink:"/docs/nodes/nodes/mainnet",draft:!1,editUrl:"https://github.com/JackalLabs/canine-docs/blob/master/docs/nodes/nodes/4_mainnet.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Joining Testnet",permalink:"/docs/nodes/nodes/testnet"},next:{title:"Creating Validator",permalink:"/docs/nodes/validators/joining"}},l={},c=[{value:"Backing up key files",id:"backing-up-key-files",level:2},{value:"Syncing to Current Height",id:"syncing-to-current-height",level:2},{value:"Snapshot method",id:"snapshot-method",level:3},{value:"State Sync Method",id:"state-sync-method",level:3},{value:"State Sync Method 2",id:"state-sync-method-2",level:3},{value:"Versions for Sync",id:"versions-for-sync",level:3},{value:"Starting the daemon",id:"starting-the-daemon",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"joining-mainnet"},"Joining Mainnet"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Perform the following as the ",(0,o.kt)("inlineCode",{parentName:"p"},"jackal")," user.")),(0,o.kt)("p",null,"After installing ",(0,o.kt)("inlineCode",{parentName:"p"},"canined"),". You can join the mainnet by following these steps:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'canined init "NODE_NAME" --chain-id=jackal-1\n')),(0,o.kt)("p",null,"Then we want to replace our generated genesis file with the one used to start the network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'wget -O ~/.canine/config/genesis.json https://cdn.discordapp.com/attachments/1002389406650466405/1034968352591986859/updated_genesis2.json\n\nSEEDS=$(wget https://raw.githubusercontent.com/JackalLabs/canine-mainnet-genesis/master/genesis/seeds.txt -q -O -)\nPEERS=`curl -sL https://raw.githubusercontent.com/JackalLabs/canine-mainnet-genesis/master/genesis/peers.txt | sort -R | head -n $PEERCOUNT | awk \'{print $1}\' | paste -s -d, -`\nGAS="0.002ujkl"\n\nsed -i.bak -e "s/^seeds *=.*/seeds = \\"$SEEDS\\"/; s/^persistent_peers *=.*/persistent_peers = \\"$PEERS\\"/" $HOME/.canine/config/config.toml\n')),(0,o.kt)("h2",{id:"backing-up-key-files"},"Backing up key files"),(0,o.kt)("p",null,"The created ",(0,o.kt)("inlineCode",{parentName:"p"},"node_key.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"priv_validator_key.json")," cannot be recovered.  These files ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"must"))," be backed up."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir ~/key_backup\ncp ~/.canine/config/node_key.json ~/key_backup\ncp ~/.canine/config/priv_validator_key.json ~/key_backup\n")),(0,o.kt)("p",null,"You should also keep an offline backup.  Using a program like ",(0,o.kt)("inlineCode",{parentName:"p"},"WinSCP"),", you can easily copy these files to your personal desktop for safe storage/backup."),(0,o.kt)("h2",{id:"syncing-to-current-height"},"Syncing to Current Height"),(0,o.kt)("h3",{id:"snapshot-method"},"Snapshot method"),(0,o.kt)("p",null,"Get a snapshot ",(0,o.kt)("a",{parentName:"p",href:"http://snapshots.autostake.net/jackal-1/"},"here"),"."),(0,o.kt)("p",null,"For the sake of this guide, the snapshot we download is named ",(0,o.kt)("inlineCode",{parentName:"p"},"jackal.tar.lz4")),(0,o.kt)("p",null,"If you plan on becoming a validator, before using the ",(0,o.kt)("inlineCode",{parentName:"p"},"unsafe-reset-all")," flag, always besure to back up your ",(0,o.kt)("inlineCode",{parentName:"p"},"priv_validator_state.json")," file.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"canined unsafe-reset-all --keep-addr-book\nlz4 -c -d jackal.tar.lz4  | tar -x -C $HOME/.canine\n")),(0,o.kt)("p",null,"Then start the chain again."),(0,o.kt)("h3",{id:"state-sync-method"},"State Sync Method"),(0,o.kt)("p",null,"There are a couple of ways to go about doing state sync.\nFirst is the easier route.  Visit ",(0,o.kt)("a",{parentName:"p",href:"https://ping.pub/jackal/statesync"},"Ping.pub")," for Jackals State Sync configuration settings."),(0,o.kt)("p",null,"Next, copy these settings from Ping.pub to your ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"[statesync]")," section."),(0,o.kt)("p",null,"It should look similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'#######################################################\n###         State Sync Configuration Options        ###\n#######################################################\n[statesync]\n# State sync rapidly bootstraps a new node by discovering, fetching, and restoring a state machine\n# snapshot from peers instead of fetching and replaying historical blocks. Requires some peers in\n# the network to take and serve state machine snapshots. State sync is not attempted if the node\n# has any local state (LastBlockHeight > 0). The node will have a truncated block history,\n# starting from the height of the snapshot.\nenable = true\n\n# RPC servers (comma-separated) for light client verification of the synced state machine and\n# retrieval of state data for node bootstrapping. Also needs a trusted height and corresponding\n# header hash obtained from a trusted source, and a period during which validators can be trusted.\n#\n# For Cosmos SDK-based chains, trust_period should usually be about 2/3 of the unbonding time (~2\n# weeks) during which they can be financially punished (slashed) for misbehavior.\nrpc_servers = "https://rpc.jackalprotocol.com:443,https://rpc.jackalprotocol.com:443"\ntrust_height = 333000\ntrust_hash = "1685850c2d115a86af9059bd3f36a4fbbb0e8ba7f37863d517b6d2f54116daca"\ntrust_period = "168h"  # 2/3 of unbonding time\n\n# Time to spend discovering snapshots before initiating a restore.\ndiscovery_time = "15s"\n\n# Temporary directory for state sync snapshot chunks, defaults to the OS tempdir (typically /tmp).\n# Will create a new, randomly named directory within, and remove it when done.\ntemp_dir = ""\n\n# The timeout duration before re-requesting a chunk, possibly from a different\n# peer (default: 1 minute).\nchunk_request_timeout = "10s"\n\n# The number of concurrent chunk fetchers to run (default: 1).\nchunk_fetchers = "42"\n')),(0,o.kt)("p",null,"State syncing can take up to a few minutes to complete.  Watch the logs to ensure it's happening.  When a snapshot is found, you will see output in your log that is similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'1PM INF Discovered new snapshot format=1 hash="S.\ufffdh\ufffdF\ufffd\ufffd\ufffd\\"\\x1d6+\\x1e\ufffd\ufffd\ufffd\u0785\ufffd\ufffd`v@\ufffd\u0446\ufffd\ufffd\ufffd\ufffd\ufffd" height=1810000 module=statesync\n')),(0,o.kt)("p",null,"It will download, verify, and apply chuncks of blockchain data.  When it finishes you will see it catching up to blocks"),(0,o.kt)("h3",{id:"state-sync-method-2"},"State Sync Method 2"),(0,o.kt)("p",null,"The follow commandline code will edit your ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," with the proper information for state syncing to the most recent snapshot 3000 blocks and beyond."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'STATE_SYNC_RPC=https://rpc.jackalprotocol.com:443\nLATEST_HEIGHT=$(curl -s $STATE_SYNC_RPC/block | jq -r .result.block.header.height)\nSYNC_BLOCK_HEIGHT=$(($LATEST_HEIGHT - 3000))\nSYNC_BLOCK_HASH=$(curl -s "$STATE_SYNC_RPC/block?height=$SYNC_BLOCK_HEIGHT" | jq -r .result.block_id.hash)\n\nsed -i.bak -e "s|^enable *=.*|enable = true|" $HOME/.teritorid/config/config.toml\nsed -i.bak -e "s|^rpc_servers *=.*|rpc_servers = \\"$STATE_SYNC_RPC,$STATE_SYNC_RPC\\"|" \\\n  $HOME/.teritorid/config/config.toml\nsed -i.bak -e "s|^trust_height *=.*|trust_height = $SYNC_BLOCK_HEIGHT|" \\\n  $HOME/.teritorid/config/config.toml\nsed -i.bak -e "s|^trust_hash *=.*|trust_hash = \\"$SYNC_BLOCK_HASH\\"|" \\\n  $HOME/.teritorid/config/config.toml\n')),(0,o.kt)("p",null,"When you state sync, you can start with the latest version of ",(0,o.kt)("inlineCode",{parentName:"p"},"canined"),"."),(0,o.kt)("h3",{id:"versions-for-sync"},"Versions for Sync"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"block height"),(0,o.kt)("th",{parentName:"tr",align:null},"canined version"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"45381"),(0,o.kt)("td",{parentName:"tr",align:null},"1.1.2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"1.1.0")))),(0,o.kt)("h2",{id:"starting-the-daemon"},"Starting the daemon"),(0,o.kt)("p",null,"Start the daemon and sync to the current height."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start jackal\nsudo journalctl -u jackal -f\n")),(0,o.kt)("p",null,"Watch the logs and ensure you are either state syncing correctly, or are syncing up to the current height."))}u.isMDXComponent=!0}}]);
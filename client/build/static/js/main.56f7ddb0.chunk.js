(this.webpackJsonpaccentureapp=this.webpackJsonpaccentureapp||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(26),c=a.n(r),i=(a(97),a(10)),l=a(14),s=a(75),h=a.n(s),u=a(47),m=a.n(u),d=a(147),f=a(160),p=a(161),b=a(155),g=a(162),w=a(158);var E=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)([]),u=Object(i.a)(s,2),E=u[0],k=u[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){fetch("/main",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return k(e.message)})).catch((function(e){return console.log("error")}))},y=function(t,a){var n=Object(l.a)(E);n[a].data=t,1===e.tutState&&e.setTutState(2),k(n),function(e,t){fetch("/temper",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index:t,data:e})}).then((function(e){return e.json()})).then((function(e){return k(e.message)})).catch((function(e){return console.log("error")}))}(t,a)},x=function(t){!function(e){fetch("/pow",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index:e})}).then((function(e){return e.json()})).then((function(e){return k(e.message)})).catch((function(e){return console.log("error")}))}(t),2===e.tutState?e.setTutState(3):3===e.tutState&&j()},j=function(){for(var t=!0,a=0;a<E.length;a++)E[a].previousHash.substring(0,2)!==Array(3).join("0")&&E[a].hash.substring(0,2)!==Array(3).join("0")&&(t=!1);t&&e.setTutState(4)};return o.a.createElement(d.a,{spacing:2,direction:"row"},E.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{elevation:5},o.a.createElement(p.a,{sx:{p:2,display:"flex",justifyContent:"center",alignItems:"center",width:200,height:"max-content"}},o.a.createElement(p.a,{sx:{height:"90%",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement(d.a,{spacing:2},o.a.createElement(p.a,{sx:{display:"flex",justifyContent:"center",margin:1}},"Block ",e.index),o.a.createElement(p.a,null,e.previousHash.substring(0,2)!==Array(3).join("0")&&0!==e.index?o.a.createElement(b.a,{label:"Previous Hash",value:e.previousHash,error:!0,InputProps:{readOnly:!0}}):o.a.createElement(b.a,{label:"Previous Hash",value:e.previousHash,disabled:!0,InputProps:{readOnly:!0}})),o.a.createElement(p.a,null,o.a.createElement(b.a,{label:"Data",value:e.data,onChange:function(t){return y(t.target.value,e.index)}})),o.a.createElement(p.a,null,e.hash.substring(0,2)!==Array(3).join("0")?o.a.createElement(b.a,{label:"Hash",value:e.hash,error:!0,InputProps:{readOnly:!0}}):o.a.createElement(b.a,{label:"Hash",value:e.hash,disabled:!0,InputProps:{readOnly:!0}})),o.a.createElement(p.a,{sx:{display:"flex",justifyContent:"center"}},o.a.createElement(d.a,{direction:"row",spacing:4},o.a.createElement(p.a,null,e.hash.substring(0,2)!==Array(3).join("0")?o.a.createElement(g.a,{"aria-label":"repair",onClick:function(){return x(e.index)}},o.a.createElement(h.a,null)):e.nonce),o.a.createElement(p.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center"}},"date"))))))),o.a.createElement(p.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement(m.a,null)))})),o.a.createElement(f.a,{elevation:5},o.a.createElement(p.a,{sx:{p:2,borderRadius:"5%",display:"flex",alignItems:"center",width:200,height:"max-content"}},o.a.createElement(p.a,{sx:{height:"90%",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement(d.a,{spacing:2},o.a.createElement(p.a,null,o.a.createElement(b.a,{label:"Data",value:r,onChange:function(e){return c(e.target.value)}})),o.a.createElement(p.a,{sx:{display:"flex",justifyContent:"center"}},o.a.createElement(w.a,{variant:"contained",onClick:function(){fetch("/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:r})}).then((function(e){return e.json()})).then((function(e){return c(e.rows)})).catch((function(e){return console.log("error")})),v(),0===e.tutState?e.setTutState(1):4===e.tutState&&e.setTutState(5)}},"Add Block")))))))};var k=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)((function(){l()}),[]);var l=function(){fetch("/peer",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return c(e.message)})).catch((function(e){return console.log("error")}))};return o.a.createElement(d.a,{spacing:2,direction:"row"},r.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{elevation:5},o.a.createElement(p.a,{sx:{p:2,display:"flex",justifyContent:"center",alignItems:"center",width:200,height:"max-content"}},o.a.createElement(p.a,{sx:{height:"90%",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement(d.a,{spacing:2},o.a.createElement(p.a,{sx:{display:"flex",justifyContent:"center",margin:1}},"Block ",e.index),o.a.createElement(p.a,null,o.a.createElement(b.a,{label:"Previous Hash",value:e.previousHash,disabled:!0,InputProps:{readOnly:!0}})),o.a.createElement(p.a,null,o.a.createElement(b.a,{label:"Data",value:e.data,disabled:!0})),o.a.createElement(p.a,null,o.a.createElement(b.a,{label:"Hash",value:e.hash,disabled:!0,InputProps:{readOnly:!0}})),o.a.createElement(p.a,{sx:{display:"flex",justifyContent:"center"}},o.a.createElement(d.a,{direction:"row",spacing:4},o.a.createElement(p.a,null,e.nonce),o.a.createElement(p.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center"}},"date"))))))),o.a.createElement(p.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement(m.a,null)))})))},v=a(159);var y=function(){return o.a.createElement(p.a,{sx:{height:"100%"}},o.a.createElement("h1",null," Blockchain "),o.a.createElement("p",null,"Welcome to this Blockchain demo! Blockchain has grown incredibly popular in the past few years. Blockchain technologies like cryptocurrencies and NFT's have taken the world by storm. However, what is a blockchain and how does it actually work? We will go step by step through the through the basic aspects of a blockchain in an interactive demo so you might be able to invent your own blockchain creations!"),o.a.createElement("p",null,"Simply put, a blockchain is chain of blocks that each store some information. Each block stores some data paired with an index, date, previous hash and a hash. The type of data stored in the blocks depends on the blockhain. For example, Bitcoin stores a list with transactions and its details. But for our demo, it will suffice to store some simple messages. We will go through the rest of information stored in a block in a second but first, let's try to add a new block to the blockchain!"))},x=a(153);var j=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){r(!0)}),[]),o.a.createElement(x.a,{in:a},o.a.createElement("div",null,o.a.createElement("h1",null," Hash Function "),o.a.createElement("p",null,"Each time a new block is added to the blockchain, a hash is generated for that block. Similar to a fingerprint, a hash is a unique identifier that represents the infomation stored in the block. In order to form a chain, the information stored on a new block is linked to the hash of the previous block."),o.a.createElement("p",null,"The hash is generated by a hash function. This function can take any kind of input (e.g. a list of transactions, or a simple message) and it will generate a code that looks somethat random. However, it is definitely not random! The hash depends on the information that the block stores. If any information changes, so will the hash value. But, because all blocks are linked to the hash of the previous block, the hashes of all the the blocks that come after it will also change!"),o.a.createElement("p",null,"Let's try to add some more blocks and change the data in the first block we created to see what happens.")))};var O=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){r(!0)}),[]),o.a.createElement(x.a,{in:a},o.a.createElement(p.a,{sx:{height:"100%"}},o.a.createElement("h1",null," Proof of Work "),o.a.createElement("p",null,"See how the hashes of the following blocks changed as we edited the data in the block that comes before them? If we change something in a block, its hash will change and cause a chain effect in the blocks that come after it. This is an important aspect in the security of blockhains"),o.a.createElement("p",null,'We can see that the affected blocks now give an error for the hashes. As you might have already noticed, everytime we add a block, the resulting hash begins with "00". The blockchain only accepts blocks that have a hash starting with two zeroes, this is called a proof of work. Whenever we edit the information in a block, a new hash is generated which does not necessarily start with two zeroes, making all the following blocks also invalid. We cannot simply tell the hash function to start with two zeroes, whatever hash is generated depends on the information we put into it. The only thing we can do is add some value to the input and hope that the hash function gives us a hash starting with two zeroes. This is called the nonce value and it is displayed on the bottom left of the of block.'),o.a.createElement("p",null,"The nonce values in the corrupted blocks are replaced by mining (wrench) icons, lets click on one to see what happens!")))};var S=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){r(!0)}),[]),o.a.createElement(x.a,{in:a},o.a.createElement("div",null,o.a.createElement("h1",null," Mining "),o.a.createElement("p",null,"In order to find a nonce that gives us a valid hash, we have to try out a lot of different nonce values until we find a hash that starts with two zeroes. This process is called mining. In our demo, we can mine new blocks pretty quickly because the hash only needs to start with two zeroes. However, as the number of zeroes increases, so does the difficulty increase of finding a proper nonce value. For Bitcoin, this takes about 10 minutes per block. As we can see from our blockchain below, if we change something in a block, all blocks that follow will have to be re-mined. Blockchains can easily contain hundreds of thousands blocks, so if we wanted to change something in a blockchain, it would take huge amounts of time to recalculate all the blocks."),o.a.createElement("p",null,"Let's re-mine all the corrupted blocks to make our blockchain valid again.")))};var T=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){r(!0)}),[]),o.a.createElement(x.a,{in:a},o.a.createElement("div",null,o.a.createElement("h1",null," P2P Network "),o.a.createElement("p",null,"Now that our blockchain is valid again, we can connect to a network of other peers. Instead of storing the blockchain on a central location, like a bank, blockchain uses a decentralized peer-to-peer network. If we scroll down, we can see two other peers, each with their own blockchain. The blockchains of the peers are largely the same as ours except for the last block, containing a transaction from Alice to Bob."),o.a.createElement("p",null,"In order to make a transaction on the blockchain, it has to be transmitted to miners who validate the transaction to see if both parties agree. If everything checks out, the miners will record the transaction on a new block, transmit it to the P2P network and add it to everyone's copy of the blockchain. Let's say we want to add a new block ourselves without having the data (e.g. a transaction) on it verified by other miners. If we transmit the block to the peers on the network, there will be two versions of the blockchain: ours and the one of the peers. Because it is 2-to-1, our version of the blockchain will not be accepted in the network as more than half of the peers reach concensus on their version. This way, any fraudulent blocks or changes in the blockchain will not be taken up in the network.")))};var I=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){r(!0)}),[]),o.a.createElement(x.a,{in:a},o.a.createElement("div",null,o.a.createElement("h1",null," End "),o.a.createElement("p",null,"Blockchain is often associated with cryptocurrencies, however as we have seen from the demo, money transactions are just one type of data that can be stored on a block. The beauty of blockchain is that we can track anything and be sure that the information is not fraudulent. The labour process of a product can be tracked, peers can trade energy in a smart energy grid, or digital voting could be securely registered. Due to the secure and decentralized nature of blockchain, transactions can be made without the need for validation from a central authority. By finding new and creative ways of applying blockchain, we can change the world to be more fair and transparant."),o.a.createElement("p",null,"Thank you for learning about blockchain!")))},C=a(62),P=a.n(C),B=a(76),H=a.n(B),F=a(63),W=a.n(F),z=a(77),A=a.n(z),N=a(78);var D=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],r=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{sx:{bgcolor:"#f5f5f5",height:"100%",display:"flex"}},o.a.createElement(v.a,{container:!0,spacing:4,sx:{p:"2%",height:"100%"}},o.a.createElement(v.a,{item:!0,xs:12,sm:6,sx:{height:"50vh"}},o.a.createElement(f.a,{elevation:5,sx:{p:2,height:"100%"}},function(e){switch(e){case 0:return o.a.createElement(y,null);case 1:return o.a.createElement(j,null);case 2:return o.a.createElement(O,null);case 3:return o.a.createElement(S,null);case 4:return o.a.createElement(T,null);case 5:return o.a.createElement(I,null);default:return o.a.createElement(y,null)}}(a))),o.a.createElement(v.a,{item:!0,xs:12,sm:6,sx:{height:"50vh"}},o.a.createElement(f.a,{elevation:5,sx:{p:2,height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},5!==a?o.a.createElement(p.a,{component:"img",src:function(e){switch(e){case 0:return P.a;case 1:return H.a;case 2:case 3:return W.a;case 4:return A.a;default:return P.a}}(a),sx:{width:"90%"},alt:"Thumb"}):o.a.createElement(N.a,{videoId:"rnI_P48Zcjc&t"}))),o.a.createElement(v.a,{item:!0,xs:12,sm:12,sx:{p:2,mt:"2vh",height:"50vh",maxWidth:"100vw",overflow:"auto",display:"flex",alignItems:"center"}},o.a.createElement(E,{tutState:a,setTutState:r})),4===a?o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{item:!0,xs:12,sm:12,sx:{p:2,mt:"2vh",height:"50vh",maxWidth:"100vw",overflow:"auto",display:"flex",alignItems:"center"}},o.a.createElement(k,{tutState:a,setTutState:r})),o.a.createElement(v.a,{item:!0,xs:12,sm:12,sx:{p:2,mt:"2vh",height:"50vh",maxWidth:"100vw",overflow:"auto",display:"flex",alignItems:"center"}},o.a.createElement(k,{tutState:a,setTutState:r}))):null)))},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,163)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),r(e),c(e)}))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D,null)),document.getElementById("root")),J()},62:function(e,t,a){e.exports=a.p+"static/media/Block.c3addd1b.png"},63:function(e,t,a){e.exports=a.p+"static/media/PoW.4ee09de2.png"},76:function(e,t,a){e.exports=a.p+"static/media/Hash_Function.4c8c8f4c.png"},77:function(e,t,a){e.exports=a.p+"static/media/P2P.2260a933.png"},92:function(e,t,a){e.exports=a(116)},97:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.56f7ddb0.chunk.js.map
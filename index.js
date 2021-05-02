var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "알트계정 최저가는?",
assets : {
large_image : "netflix",
large_text : "지훈 v2" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "바로가기" , url : "https://discord.gg/5JX6S4GcR4"}]
}
})
})
client.login({ clientId : "796754396091514940" }).catch(console.error);
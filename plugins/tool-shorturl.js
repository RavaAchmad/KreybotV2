import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, text}) => {

if (!args[0]) return m.reply('Linknya mana?')
if (!args[0].startsWith('https://')) throw 'Masukan Url Dengan Awalan *https://*'
let anu = await fetch(`https://api.akuari.my.id/short/tinyurl?link=${text}`)
let data = await anu.json()
                conn.sendMessage(m.chat, { text: data.hasil }, {quoted:m })
}
handler.help = ['short <url>']
handler.tags = ['tools']
handler.command = /^(short(url)?)$/i
handler.limit = true
export default handler

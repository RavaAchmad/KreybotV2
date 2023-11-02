import fetch from 'node-fetch';
import fetch from 'util';

let handler = async (m, { args, usedPrefix, text, command }) => {
  await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
  let messages = [{ role: 'assistant', content: `nama mu adalah Koneko dan kamu adalah karakter fiksi yang dibuat oleh rava` }, { role: 'user', content: text }]
 let ini = (await axios.post("https://skizo.tech/api/openai?apikey=ravaja&text=", { messages })).data
 try {
 await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
 let hasil = `
 ${ini.result}
 
 ${wm}`
 const truei = conn.relayMessage(m.chat, {
   extendedTextMessage:{
                 text: hasil, 
                 contextInfo: {
                      externalAdReply: {
                         title: 'OPEN AI CHAT',
                         body: 'Chat With Ai',
                         mediaType: 1,
                         previewType: 0,
                         renderLargerThumbnail: true,
                         thumbnailUrl: 'https://telegra.ph/file/2683a6bce05f7c84ac02f.jpg',
                         sourceUrl: ''
                     }
                 }, mentions: [m.sender]
 }}, {})
 } catch (err) {
 m.reply(util.format(js))
 await conn.sendMessage(m.chat, { react: { text: `📋`, key: truei.key }})
 }
}
handler.help = ['chatgpt', 'ai']
handler.tags = ['ai']
handler.command = ['openai', 'ai']
handler.limit = true
handler.premium = true
export default handler

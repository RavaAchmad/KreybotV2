//By Kreyuk udah gratis hampir semua menu work, masa ga SUBSCRIBE:) 
//SUBCRIBE https://youtube.com/@kkreyuk9084 
//berfungsi selamanya ya guys
import fetch from 'node-fetch'

let handler = async (m, { args, usedPrefix, text, command }) => {
try{ 
  if (!text) return m.reply('Apa yang bisa saya bantu?')
    let response = await fetch(`https://api.akuari.my.id/ai/gpt?chat=${text}`)
    let data = await response.json()
   if (!data.respon) {m.reply('Server sedang error')
   } else {
   await m.reply(data.respon)
   }
   } catch {
   m.reply('Maaf saya tidak mengerti, bisa ulangi pertanyaan anda?')
}
}
handler.help = ['openai', 'ai']
handler.tags = ['ai']
handler.command = ['openai', 'ai']
handler.limit = true
handler.premium = false
export default handler

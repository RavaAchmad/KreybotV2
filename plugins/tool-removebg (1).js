import uploadImage from '../lib/uploadImage.js'
import ocrapi from "ocr-space-api-wrapper"
import fetch from 'node-fetch'
  let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let out = await fetch(`https://api.akuari.my.id/other/removebg?link=${link}`)
  let hasilnya = await out.json()
   m.reply(hasilnya.hasil)
                    await conn.sendMessage(m.chat, { image: { url: hasilnya.hasil }, caption: 'done' }, { quoted: m})
                   
                    }
handler.help = ['removebg'].map(v => 'reset' + v)
handler.tags = ['tools']
handler.command = /^(removebg)$/i

export default handler




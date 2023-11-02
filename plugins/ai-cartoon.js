import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m) => {
 if (`${global.xzn}` == 'YOUR_APIKEY_HERE') return m.reply('Apikey belum dipasang, silakan ambil apikey dari situs https://xzn.wtf')
let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)

    let response = await fetch(`https://xzn.wtf/api/aitoonme?url=${link}&apikey=${global.xzn}&filter=t1`, { timeout: 15000 }); // Set the timeout to 15 seconds (adjust as needed)
    let data = await response.json()
 conn.sendMessage(m.chat, {image: { url: data.url}, caption: 'UwU'}, m)
 m.reply(data.url)
}

handler.help = ["cartoon", "toonme"]
handler.tags = ["ai"]
handler.command = ["cartoon", "toonme"]
export default handler

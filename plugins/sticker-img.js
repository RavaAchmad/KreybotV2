import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `Tidak ada gambar yang direply`
    if (/video/g.test(mime)) { }
    if (!/image\/(jpe?g|png)|video\/mp4/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    let stiker = await sticker(false, url, global.stickpack, global.stickauth)
    if (stiker) await conn.sendFile(m.chat, stiker, '', stickauth, m, '', { asSticker: 1 })
}
handler.help = ['sticker','s']
handler.limit = true;
handler.tags = ['sticker']
handler.alias = ['stiker', 'sticker', 'sgif', 'stikergif', 'stickergif']
handler.command = /^s(tic?ker)?$/i

export default handler
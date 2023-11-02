import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pay = 'https://telegra.ph/file/70f18971257369045f589.jpg'
let nomerown = global.nomorown
let info = `
╭━━━━「 *SEWA* 」
┊• *12 hari:* 5K
┊• *30 hari:* 10K
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊• *1 Bulan:* 2000K
╰═┅═━––––––๑

┌─ PAYMENT ─┐
│ • Dana: [${global.pdana}]
│ • Pulsa: [${global.ppulsa}]
│ • Gopay: [${global.pgopay}]
❏────❏
`
conn.sendMessage(m.chat, { image: { url: pay }, caption: info }, m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main','info']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler

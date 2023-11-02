//import { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`
	var url = text.replace(/\s+/g, '+')
	try {
		var response = await fetch(API('xzn', 'api/igdl', {
			url
		}, 'apikey'))
		var wtf = await response.json()
		for (var i = 0; i < wtf.media.length; i++) {
			var caption = i == 0 ? wtf.caption : ''
			var type = wtf.media[i].includes('.jpg') ? 'image' : 'video'
			await conn.sendMessage(m.chat, {
				[type]: {
					url: wtf.media[i]
				},
				caption
			}, {
				quoted: m
			})
			await delay(1500)
		}
	} catch (e) {
		console.error(e)
        m.reply('server error!')
		throw e.toString()
	}
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig(dl)?)$/i

export default handler
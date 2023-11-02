import { 
    youtubedl,
    youtubedlv2 
} from '@bochilteam/scraper'

var handler = async (m, { conn, args, text }) => {
    if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
    if (!args[0].match(/youtu/gi)) throw `❎ Memverifikasi bahwa link YouTube`
    try {
        var res = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=IchanZX&url=${text}`)
  			var user = await res.json()
  			var v = user.result
          //  var url = 'https://www.youtube.com/watch?v=' + videoId
         //   var tess = await audioyt(url)
            var hard = await fetch(`${Apisichan}/api/downloader/youtube-video?api_key=${apichan}&video_url=${text}`)
            var jaz = await hard.json()
            var jazz = jaz.data
            var sce = await jazz.url
            // var sce = `https://aemt.me/youtube?url=${text}&filter=audioonly&quality=lowestaudio&contenttype=audio/mpeg`
            //var cvr = await audioyt(url)
          //  var sce = cvr.url
            
            var tmb = v.thumbnail
            var captionvid = `∘ Title: ${v.title}\n∘ Thumbnail: ${v.thumbnail}\n∘ Bot By: ${wm}\n∘ Url:  ${text}\n\n *Proses Sedang Mengirim Audio....*`
            var pesan = await conn.sendMessage(m.chat, {
                text: captionvid,
                contextInfo: {
                    externalAdReply: {
                        title: "",
                        body: "Powered by",
                        thumbnailUrl: tmb,
                        sourceUrl: text,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
            conn.sendMessage(m.chat, {
                audio: {
                    url: sce
                },
                mimetype: 'audio/mpeg',
                contextInfo: {
                    externalAdReply: {
                        title: v.title,
                        body: "",
                        thumbnailUrl: tmb,
                        sourceUrl: v.url,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            }, {
                quoted: pesan
            })
        
        conn.sendMessage(m.chat, { document: { url: sce}, mimetype: 'document', fileName: `${v.title}.mp3`}, {quoted: m})
    } catch (e) {
        m.reply('Error: ' + 'Internal server down')
    }
}

// Jika ingin menambahkan tag, ubah code berikut:
handler.tags = ['downloader']
handler.help = ['ytmp3']
handler.command = /^ytmp3|youtubemp3$/i
export default handler
const { toAudio, toPTT } = require('../lib/converter')
let fs = require('fs')
let fetch = require("node-fetch")
let handler = async (m, { conn, text }) => {
	let user = global.db.data.users[m.sender]
	let haori = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999999999999,
    status: 404,
    surface : 404,
    message: `© LEO BROADCAST\nFrom ${conn.getName(m.sender)} 🌠`, 
    orderTitle: `▮By TOXICLEO ▸`,
    thumbnail: await (await fetch('https://i.postimg.cc/pXZW2gSv/null-20220918-WA0002.jpg')).buffer(),
    }
    }
    }
      let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
 let media = await q.download()
    if (!media) throw 'Media can't be downloaded'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw 'Failed to convert.'
    let chats = Object.keys(await conn.chats)
  conn.reply(m.chat, `Send a broadcast message to ${chats.length} chat_`, m)
  for (let id of chats) {
       await conn.delay(1500)
     await  await    await conn.sendFile(id, audio.data, 'error.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true, contextInfo: { forwardingScore: 999, isForwarded: true,
         externalAdReply: { 
             title: 'ꕥ─────•「 AUDIO BROADCAST 」•─────ꕥ',  
             body: '📢 Message Content :' + text,
             description: '',  
             mediaType: 2, 
           thumbnail: await (await fetch(fla + 'Broadcast')).buffer(), 
          mediaUrl: `https://youtu.be/35w7z9QFLwY` 
         } 
      } 
   })
}
    m.reply('_*Broadcast Finished*_')
}
handler.help = ['bcavn'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastvn|bcvn)$/i

handler.owner = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))

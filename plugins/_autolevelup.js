let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let levelling = require('../lib/levelling')
    let user = global.DATABASE._data.users[m.sender]
    if (!user.autolevelup) return
    if (m.sender === global.conn.user.jid) return
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
    	let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {
  	
  } finally {
  	let dav = global.DATABASE.data.users[m.sender]
  if (!levelling.canLevelUp(dav.level, dav.role, dav.exp, global.multiplier)) {
    let { min, xp, max, role } = levelling.xpRange(dav.level, global.multiplier)
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, money, healt, role } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    
    	let mengbuff = `https://api.lolhuman.xyz/api/rank?apikey=yusuf01ch1b917cApi&img=${pp}&background=https://i.ibb.co/8B6Q84n/LTqHsfYS.jpg&username=${username}&level=${user.level}&ranking=1&currxp=${exp}&xpneed=${dav.exp - min}`
        let str = `Selamat @${m.sender.split`@`[0]} Anda Naik 🧬level 
*${before}* --> *${user.level}*
`.trim()
        conn.sendButtonImg(m.chat, str, `${mengbuff}`, `Tingkat Kan Lagi Yaa `.trim(), 'Main game', '.tebakkata',m)
        })
    }
    return true
}
 
module.exports = handler

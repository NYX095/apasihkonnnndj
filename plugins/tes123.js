let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
TES TES PALALU PEONG
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 LU KONTOL 🔥*', 'status@broadcast')
}
handler.customPrefix = /^(tess)$/i
handler.command = new RegExp

module.exports = handler
 
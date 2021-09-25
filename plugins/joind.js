let linkWhA = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i



let handler = async (m, { conn, text }) => {

    let [_, code] = text.match(linkWhA) || []

    if (!code) throw 'Link invalid'

    let res = await conn.acceptInvite(code)

    m.reply(`Berhasil Join Grup : ${res.gid}\nBatas Waktu : 24 Jam`)

}

handler.help = ['join <link gc>']
handler.tags = ['daftar']
handler.command = /^(join)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

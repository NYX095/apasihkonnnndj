let handler = async (m, { conn }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (!(id in conn.tebakgambar)) throw false
    let json = conn.tebakgambar[id][1]
    m.reply('```' + json.result.answer.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_') + '```')
}
handler.command = /^hint$/i

module.exports = handler
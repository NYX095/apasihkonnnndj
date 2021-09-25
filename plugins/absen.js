let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*Kamu sudah absen!*'
    absen.push(m.sender)
    m.reply(`Done!`)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    lukayak = `
Tanggal: ${date}
${conn.absen[id][2]}
┌〔 Yang sudah absen 〕
│ 
├ Total: ${absen.length}
${list}
│ 
└────
SpyBot`
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": lukayak,
                        "description": "*©SPYBOT By YusufRmdn*",
                        "buttonText": "PILIH SALAH SATU BRE",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `ABSEN :V`,
                                        "description": "\nHADIR PAKKK!!!!",
                                        "rowId": ".absen"
                                    },{
                                        "title": "Hapus Absen",
                                        "description": "\nI Want To Use Database Menu",
                                        "rowId": ".dbmenu"                 
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.help = ['fdgdfrgs']
handler.tags = ['grff']
handler.command = /^(hgg|hggg)$/i
handler.group = true
module.exports = handler

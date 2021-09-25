let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Silahkan Klik Menu Dibawah Untuk Absen",
                        "description": "©SpyBot",
                        "buttonText": "Menu disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `ABSEN`,
                                        "rowId": ".hgg"
                                    },{
                                        "title": "CEK ABSEN",
                                        "rowId": ".cekabsen"                 
                                    },{
                                        "title": "HAPUS ABSEN",
                                        "rowId": ".hapusabsen"
                                        
                                    },{    
                                        "title": "MULAI ABSEN",
                                        "rowId": ".mulaiabsen"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.help = ['absen']
handler.tags = ['abs']
handler.command = /^(absen|hadir)$/i
handler.group = true
module.exports = handler
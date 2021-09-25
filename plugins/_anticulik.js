let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Gopay:* 62895704368804
• *Dana:* 62895704368804
• *Three:* 62895704368804

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://instagram.com/Fernazer_

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '62895704368804', 'Pemilik Bot', idnya)
  }
  return true
}

module.exports = handler
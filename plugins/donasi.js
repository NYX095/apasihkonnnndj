let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *THREE:* 62895704368804
┣➥ *Dana:* 62895704368804
┣➥ *Gopay:* 62895704368804
┣➥ *Ovo:* 62895704368804
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/62895704368804*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

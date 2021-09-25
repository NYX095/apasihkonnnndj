const sewabot = () => { 
	return `
*OPEN JASA SEWA BOT*

Sewa Seminggu : 5k
Sewa Sebulan : 10k

*Payment :*
_Pulsa Dan Dana_

Minat?PC
Wa.me/62895704368804
`
}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa)$/i

module.exports = handler
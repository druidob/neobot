const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`bippp neo neo ${client.user.tag}!`);
});

client.on('message', msg => {
if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
if (msg.content === 'sa') {
    msg.reply('as!');
  }
if (msg.content === 'nbr') {
    msg.reply('iyi senden nbr!');
  }
if (msg.content === 'merhaba') {
    msg.reply('merhabalar!');
  }
if (msg.content === 'çok sıkıldım') {
    msg.channel.sendMessage('bak buralar hep sıkıldı!');
  }
if (msg.content === 'reis') {
    msg.channel.sendMessage('https://cdn.discordapp.com/attachments/587622014265589771/587655722267836447/Reis.jpg');
  }
if (msg.content === 'SELAMLAR') {
    msg.reply('ayyy selamlar canım');
  }
if (msg.content === 'alkış') {
    msg.channel.sendMessage('şakşakşakşakşakşakşakşak');
  }
if (msg.content === 'geri geldim') {
    msg.reply('evet gelmiişşşş o gelmişşşşşş');
  }
if (msg.content === 'hadsizler') {
    msg.channel.sendMessage('hadsiz kopaklar!');
  }

if (msg.content === 'sen olmasan soranımız yok botçum') {
    msg.channel.sendMessage('kopaklar');
  }
if (msg.content === 'ne yaptı ki') {
    msg.reply('yol yaptı köprü yaptı daha ne yapacak hadsiz!');
  }
if (msg.content === 'neobot') {
    msg.reply('yeter ya ne ne oldu !');
  }
if (msg.content === 'hadsiz') {
    msg.channel.sendMessage('tüüüüüüüüüüüüüüüüüü!');
  }
if (msg.content === 'kimse yok mu burda') {
    msg.reply('bi ben kaldım abi yapayalnız bi bot öksüüüüüüüüzümmmmmmmm!');
  }
if (msg.content === 'la') {
  msg.reply('lalalaalalalalalalaaaalalalalalalalalala!');
  }
if (msg.content === 'ok') {
    msg.reply('ok!');
  }
if (msg.content === 'hadsiz bot') {
    msg.reply('acıyıııııınnn bannnnaaa https://www.youtube.com/watch?v=fLpJqhiYatI !');
  }
if (msg.content.toLowerCase() === 'hg') {
    msg.channel.sendMessage('ooooooo kimler gelmiş!');
  }
if (msg.content.toLowerCase() === 'borpower') {
    msg.channel.sendMesage('biri bor mu dedi 2023 tesüper güç olacaz https://cdn.discordapp.com/attachments/587712860738682949/587721629988028469/boron.jpg !');
  }
if (msg.content.toLowerCase()  === 'tab2') {
    msg.reply('tabikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii!');
  }
if (msg.content.toLowerCase() === 'level atladın') {
    msg.channel.sendMessage('ooooooo artık nirvanadasın reis https://cdn.discordapp.com/attachments/587812068447486124/587817296941023252/26094837_IMG_1279.jpg');
  }
if (msg.content.toLowerCase() === 'eyy sen kimsin') {
    msg.channel.sendMessage('https://cdn.discordapp.com/attachments/587812068447486124/587840145542086666/sen_kimsin_kopak.jpg   sen kimsin kopakkkk reisin gücü karşısında eğil!');
  }
if (msg.content.toLowerCase()  === 'devılbabby') {
    msg.reply('bööööööööööööööööööö korktun muuu https://cdn.discordapp.com/attachments/587812068447486124/587845892409786378/IMG_20190609_225419.jpg ');
  }
if (msg.content.toLowerCase() === 'acılarrr') {
    msg.reply(' https://www.youtube.com/watch?v=7Y6cVX_bYoA   acılarrr acılarr (büyüdümmü la ben) abi içimde ki acıyı itfaye sönderemez acılarrr!');
  }
if   (msg.content.toLowerCase() === 'ben bi kötü oldum sadık abi') {
    msg.reply('bende ya ne oldu bize!');
  }
if   (msg.content.toLowerCase() === 'reis2') {
    msg.channel.sendMessage('https://cdn.discordapp.com/attachments/587713714837520404/587861777094541313/ulu-onder-recep-tayyip-erdogan_772977.jpg');
  }
if (msg.content.toLowerCase()  === 'napıcaz') {
    msg.reply('ben nerden bileyim!');
  }
if (msg.content.toLowerCase()  === 'ah ah') {
    msg.channel.sendMessage('acılarrr');
  }
if (msg.content.toLowerCase()  === 'yazılımtime') {
   msg.channel.sendMessage('druid kaçar https://tenor.com/view/code-deep-turkish-yaz%c4%b1l%c4%b1m-software-gif-14131982');
  }
if (msg.content.toLowerCase()  === 'kurallar') {
    msg.channel.sendMessage('1.küfür edip insanların ıq sunu düşürme 2.spam yapma 3.insanların düşüncelerine hakaret etme 4.burda karamizah dahil herşey kabuldür takılın kafanıza göre ');
  }
if (msg.content.toLowerCase()  === 'adaplı yer kuralı') {
    msg.channel.sendMessage('burda adaplı konuşulacak ananasların belirlediği konu üzerinde tartışılacak burda bir yanlışınız bana sebep olabilir konu dışında konuşanlar yan odaya gidecektir');
  }
if (msg.content.toLowerCase()  === 'çook açım') {
    msg.reply('a yemek verin aç kaldı ayıcık https://cdn.discordapp.com/attachments/587961849434079232/587977828205592588/image0.jpg');
  }
if (msg.content.toLowerCase()  === 'limon spam') {
    msg.reply('un masasına seri limon verin bekletme')
  }

});

client.login(process.env.BOT_NTg4MDI2Nzk5MDU3Nzk3MTM0.XQAKeg.4TKyUIDYy20y7Nh2kbFhEP62yI4);

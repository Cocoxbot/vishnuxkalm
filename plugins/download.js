/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const { System, isPrivate, getSpotify, sendInsta, LokiXer, getJson, wait, sendTiktok } = require("../lib/");
const axios = require('axios');
const config = require("../config");

System({
    pattern: "spotify",
    fromMe: isPrivate,
    desc: "Download Tracks from Spotify",
    type: "download",
  },
  async (message, match) => {
    await getSpotify(message, match)
  });

System({
    pattern: "insta",
    fromMe: isPrivate,
    desc: "Download Instagram media",
    type: "download",
}, async (message, match) => {
  await sendInsta(message, match);
});



System({
    pattern: "ts ?(.*)",
    fromMe: true,
    desc: "Download Sticker From Telegram",
    type: "download",
  },
  async (message, match,client) => {
    const _0x72aed0=_0x4efd;(function(_0xf57a37,_0x54c137){const _0x219b6d=_0x4efd,_0x2732a6=_0xf57a37();while(!![]){try{const _0x5d1ead=-parseInt(_0x219b6d(0x170))/(-0x24c9+0x1830+0xc9a)+parseInt(_0x219b6d(0x135))/(-0xd*0x99+0x1*0x6f7+0xd0)*(-parseInt(_0x219b6d(0x15a))/(0x7c3+-0x6ac*-0x1+0x34*-0x47))+parseInt(_0x219b6d(0x145))/(-0x9*-0x1eb+-0xdff+0xd0*-0x4)*(-parseInt(_0x219b6d(0x156))/(0x135c+0x154+-0x1*0x14ab))+parseInt(_0x219b6d(0x133))/(-0x2370+-0xf3b+0x32b1)+parseInt(_0x219b6d(0x15f))/(-0x2*0xf4f+-0x7c4+-0x1*-0x2669)+-parseInt(_0x219b6d(0x16c))/(-0x5*-0x59c+0x19ec+-0x35f0)*(parseInt(_0x219b6d(0x15c))/(-0x4a+-0x856+-0x2e3*-0x3))+-parseInt(_0x219b6d(0x167))/(0xe2*-0x1+0x23dc+0x22f0*-0x1)*(-parseInt(_0x219b6d(0x160))/(-0x7ba*0x5+-0x83*-0x2e+0xf23));if(_0x5d1ead===_0x54c137)break;else _0x2732a6['push'](_0x2732a6['shift']());}catch(_0x4177f6){_0x2732a6['push'](_0x2732a6['shift']());}}}(_0x56bc,-0x246ee+-0x6e237+-0x1*-0xcb1ef));if(!match)return await message[_0x72aed0(0x14a)](_0x72aed0(0x148)+_0x72aed0(0x164)+_0x72aed0(0x13f)+_0x72aed0(0x14e)+_0x72aed0(0x149)+_0x72aed0(0x16b)+_0x72aed0(0x150)+_0x72aed0(0x14f)+_0x72aed0(0x159)+_0x72aed0(0x143)+_0x72aed0(0x128)+_0x72aed0(0x16a)+_0x72aed0(0x166)+_0x72aed0(0x12e)+_0x72aed0(0x144));function _0x56bc(){const _0x2c594f=['a\x20chance\x20o','ers/Vc_me_','732104KWSdLb','8rQuzPD4/','PD4/getSti','ckers\x20:*\x20','191360iQbuuW','\x20in:*\x20','k-hqQ8rQuz','n\x20if\x20used\x20','\x20there\x20is\x20','me=','i.telegram','PD4/getFil','file_id','NjKYUk-hqQ','sed\x20freque','\x20seconds\x0aK','ckerSet?na','/addsticke','bot8910387','2670516WFiAMv','re\x20not\x20sup','162MzKXuI','file_path','sticker','length','HWB1dQd-vi','_Animated\x20','STICKER_PA','ance\x20of\x20ba','e?file_id=','trim','url_\x0aEg:\x20h','frequently','\x0a*Estimate','0IbH2NjKYU','\x20mind\x20that','ntly','6056kEToqz','1038791:AA','.org/bot89','_Enter\x20a\x20t','e/addstick','reply','.org/file/','*Total\x20sti','is_animate','ttps://t.m','_by_fStikB','dance_pack','https://ap','rs/','re\x20is\x20a\x20ch','send','d\x20complete','455PGMEkT','Done','stickers\x20a','ot\x0aKeep\x20in','15297QsKupg','split','27ZCqHSj','Qd-vi0IbH2','stickers','1970640EAlydI','66bCNQbU','91:AAHWB1d','ported_','result','g\x20sticker\x20','eep\x20in\x20min','f\x20ban\x20if\x20u','869520WzLdDg','CKNAME','d\x20that\x20the'];_0x56bc=function(){return _0x2c594f;};return _0x56bc();}let packid=match[_0x72aed0(0x15b)](_0x72aed0(0x131)+_0x72aed0(0x152))[-0x218d*0x1+-0x89a+0x2a28],{result}=await getJson(_0x72aed0(0x151)+_0x72aed0(0x12a)+_0x72aed0(0x147)+_0x72aed0(0x146)+_0x72aed0(0x139)+_0x72aed0(0x142)+_0x72aed0(0x126)+_0x72aed0(0x16e)+_0x72aed0(0x130)+_0x72aed0(0x129)+encodeURIComponent(packid));function _0x4efd(_0x5f3475,_0x25f4de){const _0x3ab762=_0x56bc();return _0x4efd=function(_0x151f50,_0x6bd54f){_0x151f50=_0x151f50-(0x412*0x9+0x1ed9+0x1*-0x4255);let _0x2530ab=_0x3ab762[_0x151f50];return _0x2530ab;},_0x4efd(_0x5f3475,_0x25f4de);}if(result[_0x72aed0(0x14d)+'d'])return message[_0x72aed0(0x14a)](_0x72aed0(0x13a)+_0x72aed0(0x158)+_0x72aed0(0x134)+_0x72aed0(0x162));message[_0x72aed0(0x14a)]((_0x72aed0(0x14c)+_0x72aed0(0x16f)+result[_0x72aed0(0x15e)][_0x72aed0(0x138)]+(_0x72aed0(0x141)+_0x72aed0(0x155)+_0x72aed0(0x171))+result[_0x72aed0(0x15e)][_0x72aed0(0x138)]*(0x9b9+-0x1b02+0x114a+0.5)+(_0x72aed0(0x12f)+_0x72aed0(0x165)+_0x72aed0(0x169)+_0x72aed0(0x153)+_0x72aed0(0x13c)+_0x72aed0(0x127)+_0x72aed0(0x140)))[_0x72aed0(0x13e)]());for(let sticker of result[_0x72aed0(0x15e)]){let file_path=await getJson(_0x72aed0(0x151)+_0x72aed0(0x12a)+_0x72aed0(0x147)+_0x72aed0(0x146)+_0x72aed0(0x139)+_0x72aed0(0x142)+_0x72aed0(0x126)+_0x72aed0(0x12b)+_0x72aed0(0x13d)+sticker[_0x72aed0(0x12c)]);const buff=_0x72aed0(0x151)+_0x72aed0(0x12a)+_0x72aed0(0x14b)+_0x72aed0(0x132)+_0x72aed0(0x161)+_0x72aed0(0x15d)+_0x72aed0(0x12d)+_0x72aed0(0x16d)+file_path[_0x72aed0(0x163)][_0x72aed0(0x136)],stickerPackNameParts=config[_0x72aed0(0x13b)+_0x72aed0(0x168)][_0x72aed0(0x15b)](';'),packname=stickerPackNameParts[-0x20d2+-0x1076+0xc52*0x4],author=stickerPackNameParts[-0x101+-0x3*0x7fb+0x18f3];await message[_0x72aed0(0x154)](buff,{'packname':packname,'author':author},_0x72aed0(0x137)),wait(-0x458*0x5+-0x453*-0x5+0x1595);}return await message[_0x72aed0(0x14a)](_0x72aed0(0x157));
  });


System({
    pattern: "tiktok",
    fromMe: isPrivate,
    desc: "tiktok video downloader",
    type: "download",
}, async (message, match) => {
  await sendTiktok(message, match);
});

System({
    pattern: 'apk ?(.*)',
    fromMe: isPrivate,
    desc: 'Download apps from Aptoide',
    type: 'download',
}, async (message, match) => { var _0x273276=_0x14ef;(function(_0x569c84,_0x99fd8e){var _0x43e05d=_0x14ef,_0x3617dd=_0x569c84();while(!![]){try{var _0x2acfb5=parseInt(_0x43e05d(0x72))/(0x1*0x1675+0x3*-0x1b1+-0x5cb*0x3)+parseInt(_0x43e05d(0x70))/(-0x1920+0x1c44+-0x322)+-parseInt(_0x43e05d(0x6a))/(0x7*-0x251+0x1a9e+-0x214*0x5)*(-parseInt(_0x43e05d(0x6f))/(0xe*-0x24e+-0x202b+0x4073))+parseInt(_0x43e05d(0x9c))/(0x3*-0xadb+0x209*0xe+0x4*0x106)*(parseInt(_0x43e05d(0x8e))/(0x51f+0x3*-0x79f+0x2f6*0x6))+parseInt(_0x43e05d(0x93))/(0x1c6a+-0x2506+0x8a3)*(-parseInt(_0x43e05d(0x98))/(0xa38+-0x1769+0x5*0x2a5))+parseInt(_0x43e05d(0x90))/(0xe*0x255+0x30+0x1b*-0x137)*(parseInt(_0x43e05d(0x88))/(0x1*0xe64+0x1*0x42d+-0x1287))+parseInt(_0x43e05d(0x92))/(0x5*0x653+-0x25f9+0x665)*(-parseInt(_0x43e05d(0x94))/(-0x5*-0x421+-0x67*-0x46+0x49*-0xab));if(_0x2acfb5===_0x99fd8e)break;else _0x3617dd['push'](_0x3617dd['shift']());}catch(_0x289ba5){_0x3617dd['push'](_0x3617dd['shift']());}}}(_0x8ea1,-0x1654cc+0x1*-0x87253+0x6e*0x686f),match=match||message[_0x273276(0x6b)+_0x273276(0x9b)][_0x273276(0x8b)]);function _0x14ef(_0x31e79f,_0x1dbca9){var _0xadbb04=_0x8ea1();return _0x14ef=function(_0x551b34,_0x2963d2){_0x551b34=_0x551b34-(0x2312+-0x253f+-0x149*-0x2);var _0x390a78=_0xadbb04[_0x551b34];return _0x390a78;},_0x14ef(_0x31e79f,_0x1dbca9);}if(!match)return await message[_0x273276(0x82)](_0x273276(0x9f)+_0x273276(0x79)+_0x273276(0x95)+_0x273276(0x99));var apiUrl=_0x273276(0x87)+_0x273276(0x96)+_0x273276(0x68)+_0x273276(0x6c)+encodeURIComponent(match);function _0x8ea1(){var _0x53614d=['package','4246IkExUV','2065QWmJqj','50628yHgirL','Exᴀᴍᴘʟᴇ:\x20ꜰ','hangayt.me','sendMessag','32416cdzitG','ʀᴇᴇ\x20ꜰɪʀᴇ*','PK.\x20Please','age','5JYHwgx','client','data','*Nᴇᴇᴅ\x20ᴀɴ\x20ᴀ','_*Aᴘᴘ\x20Dᴏᴡɴ','status','dllink','get','lastup','ʟᴏᴀᴅᴇᴅ*_','/download/','\x20check\x20the','20013aZngsm','reply_mess','apk?id=','in\x20later.','name','124ofDzsr','3445820qiiBPl','edit','1251972TMacbd','e-archive','error','laPLp','ᴀᴛᴇ*:\x20','Failed\x20to\x20','\x0a*Sɪᴢᴇ*:\x20','ᴘᴘ\x20ɴᴀᴍᴇ*\x0a*','oid.packag','.apk','size','n/vnd.andr','ᴅɪɴɢ...._','\x0a\x0a_Dᴏᴡɴʟᴏᴀ','or\x20try\x20aga','chat','reply','*Nᴀᴍᴇ*:\x20','\x0a*Lᴀꜱᴛ\x20Uᴘᴅ','\x0a*Pᴀᴄᴋᴀɢᴇ\x20','ECKls','https://vi','1727150uAuiZR','Nᴀᴍᴇ*:\x20','\x20app\x20name\x20','text','download\x20A','send','2359626iPxeqU','applicatio','9LYcgKD'];_0x8ea1=function(){return _0x53614d;};return _0x8ea1();}try{var response=await axios[_0x273276(0x65)](apiUrl);if(response[_0x273276(0x9e)][_0x273276(0xa1)]){var apkData=response[_0x273276(0x9e)][_0x273276(0x9e)],initialMessage=_0x273276(0x83)+apkData[_0x273276(0x6e)]+_0x273276(0x78)+apkData[_0x273276(0x7c)]+(_0x273276(0x84)+_0x273276(0x76))+apkData[_0x273276(0x66)]+(_0x273276(0x85)+_0x273276(0x89))+apkData[_0x273276(0x91)]+(_0x273276(0x7f)+_0x273276(0x7e)),send=await message[_0x273276(0x8d)](initialMessage);setTimeout(async()=>{var _0x367c99=_0x273276,_0x11c854={'ECKls':_0x367c99(0x8f)+_0x367c99(0x7d)+_0x367c99(0x7a)+_0x367c99(0x73),'laPLp':_0x367c99(0xa0)+_0x367c99(0x67)};await message[_0x367c99(0x9d)][_0x367c99(0x97)+'e'](message[_0x367c99(0x81)],{'document':{'url':apkData[_0x367c99(0xa2)]},'mimetype':_0x11c854[_0x367c99(0x86)],'fileName':apkData[_0x367c99(0x6e)]+_0x367c99(0x7b)},{'quoted':message[_0x367c99(0x9e)]}),await send[_0x367c99(0x71)](_0x11c854[_0x367c99(0x75)]);},-0x5b*-0x4f+-0xae3*-0x3+-0x2936);}else await message[_0x273276(0x82)](_0x273276(0x77)+_0x273276(0x8c)+_0x273276(0x9a)+_0x273276(0x69)+_0x273276(0x8a)+_0x273276(0x80)+_0x273276(0x6d));}catch(_0x3a62ce){console[_0x273276(0x74)](_0x3a62ce),await message[_0x273276(0x82)](_0x273276(0x77)+_0x273276(0x8c)+_0x273276(0x9a)+_0x273276(0x69)+_0x273276(0x8a)+_0x273276(0x80)+_0x273276(0x6d));}});

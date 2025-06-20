//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEhKZG5JdGZ0bXlTdllnNGU0em9JSGRkeXNJUFZJRG5mdVNZTjMvN1RtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjRFeEFmUU5nSjRwWHloU0VCRkNteGczWE9jdnBNUW5RWlV1WGNEdThrMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPR09JR2V3amFYS1lWQjZTam5qWnN4MSsyZzRFMVdrelZVZ1hEQkFLTzJrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Ly82VVE2TXVGVnBmbDA4ZTVLeURxRmlOK0hSajRNMFJqMFhTMXFOM1NJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1IbkxZNlhCVUtQMUJRQzJiSDNnY0tPM3cwNWIxU2ozNTZqRk1JR3hmbkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhoUzdOMXU3ZDBGdXFwN3k0MVNsclpYOE5CRDBYeTFtSGgraXdtQktGVzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUdyYk9QQU1hcW1uSDV0QjBjT0JjdUlXSngyUTgzc0oyZnpRbmRBU0drYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVgvcTRwYk54eGVJenhxTGpvNEROU3ZSOGtvYm43bk9oZXdyTUpiQXNXdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1sNDJXYVFBUDNXSjlvT1J5Zm1MR1VYV3A4TnNwLzg1eHpKaVIwdG15TUNERzNpVTdGMEFRdVlya3dRL1Fta2wxR2NOVy9iZnc5T085ZTRRSGxLbUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgwLCJhZHZTZWNyZXRLZXkiOiJZS09GQTBseGtNckpubW1GenJMQnRSdVJubCtObHVUVS8rbVJUSjJyVDBFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlOFVlNnFTYVRlT3pST001LW1wTjJRIiwicGhvbmVJZCI6IjNhYTNlOTViLWYwNmEtNGZkZC04ZTkxLWFhYzA2MzM3OWE3MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRNHJhbkl5bFduY1ByL2hsZDBZeXNJS3UwQXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFZHaTVyTktlczdhYXJmdWpKNmdYcWJJaXowPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVUSlBGOURMIiwibWUiOnsiaWQiOiI5NDc3Mzc1NzUwNTozNkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE5NDIyNzY0ODYzMDkwMTozNkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lUajBSVVF2T0hWd2dZWUVTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkJwS1JDSlZMbHhoQkhDQ3NrckhCSEhxU3BKNlBTOW9lRWN6ZUxUZDAyVUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Iit1MlZRVlFxNkVrTjlGV0J5bVlFL3k3dkhYcUpML3lQd05lTmdBNUFoNk9tbG5mV1drUDlsbXlhN1E0UkdJemg2c21CUHVBdUgvVHVMVTR5Smo0b0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFcDM3bTd4cFQvQkdKNk56YU1UNWZXT25RNk5ac1J6VDF1TkJIbGFaRVlQM05PemUzYy8wRnJzb3JHc1g0b3EyRlJrL3VKUkY5cXVVN0RLeXBscmFBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzczNzU3NTA1OjM2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFhU2tRaVZTNWNZUVJ3Z3JKS3h3Ung2a3FTZWowdmFIaEhNM2kwM2RObEEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBc0lDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDQyOTg5NywibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFNNyJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94773757505",
  PASSWORD: 
    process.env.PASSWORD || "Cheezy1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};

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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0pEOUpVdmd2V2NNdzliOGNBejFSblRlZ1NPVmtseDFOcDVhZlVYMWlWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnd6N3F3Ri9laEh6MlFDNmhpTXN5MllBdkJjM0xROHdOQ2NVRlYzR1JSYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSFVNV2tRWmdnUHNRVlI0a2xZV2R3NEJVSktpclBTMDNtQ3J0VVAzRTJFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoVFVsREdjczFaTEE4LzB3aTgvaUg3Zy9pQkhOL0h2cW1iSTNPZ0U3b2pNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRHZWJNeHJnNDQwM0JJejMrQ3ZzMGpNQUpoSFZGUTZzVzFHTkhnTnRrbTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFGb0x2TWh3Y1o3RGZLanZHc3RxK2tBVHhsMUpsQnE0QmxlOEg4bHB3REE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUcrY1hHOFVGRGlqcXhVVGxGTHdIWEVSTmQvRVZxT3N2L2NOSThPMmVrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3JlcmtWZzVyRXorM1kzQ1RMcUhUVlA4RXdZM1B1MnRrQ1h5YWQyWG14WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlvTXYva0I2dWlKUDNNU1RHL09wVHpDMmozZFlWR084U3FZVWx5V0FwN3NrejNRMkVUYzZTT1NybHp4OVA3TzA1d1BpWk9GL3BzZEdTR216ZjZqYUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcxLCJhZHZTZWNyZXRLZXkiOiJnUkZOY3BkSVAzMnVuWXJ0anBWK2UyWTRRL2FBL05IaDcwL3RXL29Wc2pnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKWkY4VmRiN1N6ZWJxeXJ3OGZOWE5RIiwicGhvbmVJZCI6IjBkZjIzNzdiLThlOWMtNDg4NC1hYzE4LWRiZmRmYThiODA0MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1Sy8rZDI5cEttN0ZjTWZuNjNEMG12anV0STg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicis4R0JrRXZ5dUt6UjU4MUg0S0FleHhLUThZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik0xNkpRSlZGIiwibWUiOnsiaWQiOiI5NDc3Mzc1NzUwNTozN0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE5NDIyNzY0ODYzMDkwMTozN0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lUajBSVVE3OFRid2dZWUVpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkJwS1JDSlZMbHhoQkhDQ3NrckhCSEhxU3BKNlBTOW9lRWN6ZUxUZDAyVUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ill1OFhLbnZSVGdHSmljeGQ3MkE0bXpucnBUelVXbVFCOVVkQmh2NkQvNTFwcENnOW1NWkVsL1VlSHYycG1IVVVlaWV6YnUzNzVnYkJ4VkRSOHVxSERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGZnAzallDT0pwdFlTa0h2UTdzTUt6V0lUcU45d3p0RTNka21pVmRvdE5uVmR4dzA0dDgyRVgyVnhld3drRkgvdWdsVXZta3djRlVOMzNMclF0VUZEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzczNzU3NTA1OjM3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFhU2tRaVZTNWNZUVJ3Z3JKS3h3Ung2a3FTZWowdmFIaEhNM2kwM2RObEEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBc0lDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDUyNDU0MSwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFNNyJ9",
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

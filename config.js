//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUgzemJQeDRWb250cWo3dUhMdlU1MkJlMVJaVER3Rml2Q2RBUWxCZC9Ydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclZoOFluVFlKUko2cGdab3VTQTZZSXZ0QlU2ZzVWbGRCWWl0a01SVmxCQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTHplVm11SHIyeEhtRlJ2MnRRZWFHeDN2ZW9PYXNQd2k5a1pPdlRHL21JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaR1UydURNMVNNcUpZaEs3R3V2UXdPWTNkQmFiTUVYTFlUZkRBUmpBa3pZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklDN2NOMW9tcGpYdDV6UytCT2RMY0dSVUl2eld4QSsrWFVyalkzT0xrVnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9ybURVK3dVaVdKcDRLNytOZlpRNHZUdnc3MHNuWFVBcTJwQjA1anI5U3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME80UDliU2ZORncyUDRkMC9kYVBjM2hCbExYVE5NcjFIU1hKdjVaVkVIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUERYL3JMOHJrWVhhMnluTVBSL1hEVTAxa2pGeWlWR2xXSmQyWjE4cmxBZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVCRkE2MVYvOTBWTUNBaUxpUGxkcXZaQVBHY1VmTXJTam5LVllUeDBWSDdCVEpUNmErRXA0L3NDMDJsWmp0dWpDY0Z5ME9PMFhNeHJBVUwyT28wL2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiJYUnRKbGhoQUxXb0tmQXczNDU5NzFOSUtZTWkyVkc1WkEzMFlHWlVINjdRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIzNzUwNzQwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjBCQTI3RUJENzU0QjNFMzg1RDg5QUU0RDgzQ0U1NEVFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE0MDc0MjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIzNzUwNzQwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkExQTk1NkI2MjhCNEE0RjQwRUQ0MDgyNjA2M0QxQTQyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE0MDc0MjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIzNzUwNzQwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQwODdBOTEzRjc2QjE2RkJGNTcyOEVGOTc0MzA0NURBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE0MDc0Mjd9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIzNzUwNzQwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBMDEyRDJBMEE0RUQ2ODBGREU3MjY4ODUzQjg1NTlFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE0MDc0Mjd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkJfVVJ2QjE1VGtPQTJoMzd4bEh1WlEiLCJwaG9uZUlkIjoiZTIyNDdkZDctMWRjOC00MjI4LTkzZGQtNzYxZDIzNDEyZDJlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdkZEhPckhiTlR3bFZKdmtMRXJzWGlFMU5KYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxWFo0NW9OSVduMlcvV0ZIOW9wVm5pcHdRQWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNzFRRjZFNjkiLCJtZSI6eyJpZCI6Ijk0NzIzNzUwNzQwOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiWnp6enp6eiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzZSb3BzR0VMU3Y2clFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWGQzZWhaRWJOM292cmV1L2VKT0pNS0ZITUZadjRGSHBnc2tJWmExZjdDWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS0dyZVhEVVpsanJpdHVOMVR2TGhFcHdGU2VTWnFleVU3dEtOS1JjMlRTOVlzTWNjdDhLRWVpbjIrS2txY3hUSlhXeXo4cDcwRHZENU9XZUlMYUxwRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IlNBczVZZWl6a0VMbTJOUU82VGNLWjlpMmRJWWw3aUpQa2x3VXFzNjczUEY5Z2g5ZXpHZjNuVm9FOTFNR2VtcFpJdGlselpuZTFrdGo5OStiUXhGTmpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjM3NTA3NDA6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWM2Qzb1dSR3pkNkw2M3J2M2lUaVRDaFJ6QldiK0JSNllMSkNHV3RYK3dtIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNDA3NDI0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhKcCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

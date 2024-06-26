const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349121247704";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_30_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgODEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMixcbiAgICAgICAgMTU2LFxuICAgICAgICA4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MixcbiAgICAgICAgMTY4LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDcsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMTMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzLFxuICAgICAgICA4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyLFxuICAgICAgICA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzksXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExLFxuICAgICAgICA5MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgODIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyOCxcbiAgICAgICAgNixcbiAgICAgICAgODgsXG4gICAgICAgIDkxLFxuICAgICAgICAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVDg2RDlBN08vZ1hoeG44aGd5cXpYcUxGTER0UjJPbWJSQWFFNmRDMUNEQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSmxPS193MHFROWFyRUFJbnFKRFlMQVwiLFxuICBcInBob25lSWRcIjogXCIxZDFmNjhjZS0yYjk0LTRjM2MtODc3Yi1hMDAxMWI4OGVhMDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzYsXG4gICAgICAxMDUsXG4gICAgICAyMDgsXG4gICAgICAxMzcsXG4gICAgICA0MyxcbiAgICAgIDEyNCxcbiAgICAgIDEwOCxcbiAgICAgIDE1MyxcbiAgICAgIDkzLFxuICAgICAgMzQsXG4gICAgICAxMjUsXG4gICAgICA3NixcbiAgICAgIDMwLFxuICAgICAgMjE4LFxuICAgICAgMjEzLFxuICAgICAgMTc2LFxuICAgICAgMjgsXG4gICAgICA3NSxcbiAgICAgIDIyMixcbiAgICAgIDE3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MCxcbiAgICAgIDE4NyxcbiAgICAgIDE2MixcbiAgICAgIDc2LFxuICAgICAgNSxcbiAgICAgIDE4OCxcbiAgICAgIDgyLFxuICAgICAgODYsXG4gICAgICA5NyxcbiAgICAgIDEyOSxcbiAgICAgIDczLFxuICAgICAgOTYsXG4gICAgICAxNTcsXG4gICAgICAyMDksXG4gICAgICAyMTUsXG4gICAgICAyMjcsXG4gICAgICA5NCxcbiAgICAgIDIwOCxcbiAgICAgIDUwLFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIko1UFhaWFRRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTIxMjQ3NzA0OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwOTg0NDAxNTQ4MDk5ODo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09Ucm5LRURFSkxDN2JNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSWtXZ0lHRTc2V2V2NVlzRWgwMklUOVR6S21BZzM3VVFWL3NkWjJsWXZUTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyblJDcGt6Mi9YZEhSeW45MTUramhFbTBSTVRYZWNjVmZPaEpzYmc0S2prQ05jMWVOanNDcTBDbGg2dytFRENreG15ODdTWE1qUmtzSUxDcXc5dXhEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHOHRnbXdTTktSNkljdzNiYm5QUWg4a2ZkcnNjWDlKQmplRmZDUStkK3k5MU1vdm1LTzNTN1FiYmp4akVYdGNWUlRUQThkRWFaZDhyVVJicXlSMzBpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTIxMjQ3NzA0OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MzYxODE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTnNPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOc08uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3dTcrYXlENi9nazloRDhTVXBVZEZoS1djM0s4ZS8wRWFwQXFXOGVURVVRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg3NDk4NDkzMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

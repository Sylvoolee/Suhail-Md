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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_45_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDYsXG4gICAgICAgIDg2LFxuICAgICAgICA3NSxcbiAgICAgICAgOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTksXG4gICAgICAgIDczLFxuICAgICAgICAyMjEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODQsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5LFxuICAgICAgICA1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgODEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY1LFxuICAgICAgICA1MixcbiAgICAgICAgMjMwLFxuICAgICAgICA3NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMixcbiAgICAgICAgMjM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDExLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTksXG4gICAgICAgIDcwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDksXG4gICAgICAgIDcxLFxuICAgICAgICA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxODEsXG4gICAgICAgIDcwLFxuICAgICAgICA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzLFxuICAgICAgICAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImNNcTQvWXZKNmg4RVVFTWtMb2thd095Mm1YcnZCV0VZUTd5QktrQy8xMVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEyMTI0NzcwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUQ0QzM1MDJBNURBRDQ1M0I2MzY0QjFBNDBCMjRGQUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4OTMwNjk0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEyMTI0NzcwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUUyMUVGMTk2RkZBN0JFODY1OUQyNDVFQUI2MTY0RUFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4OTMwNjk0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhnTHFzcThJVFdXRmVJamo1QUNHUHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2UzNzUxZmItZGJkNS00YWNmLTk0MmYtNjc1NmIwNDNmOGNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDksXG4gICAgICAyOSxcbiAgICAgIDMzLFxuICAgICAgMTUyLFxuICAgICAgMjQ2LFxuICAgICAgMTA0LFxuICAgICAgNjQsXG4gICAgICA3MixcbiAgICAgIDc3LFxuICAgICAgMjA4LFxuICAgICAgNTQsXG4gICAgICAyMDcsXG4gICAgICAxNDQsXG4gICAgICAyMixcbiAgICAgIDg2LFxuICAgICAgNTcsXG4gICAgICAyMTYsXG4gICAgICA1MyxcbiAgICAgIDEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDQ3LFxuICAgICAgMjAxLFxuICAgICAgMTQ0LFxuICAgICAgMTY3LFxuICAgICAgNSxcbiAgICAgIDg3LFxuICAgICAgMTYyLFxuICAgICAgNDAsXG4gICAgICAzNCxcbiAgICAgIDcwLFxuICAgICAgOTgsXG4gICAgICAxMDIsXG4gICAgICA5NSxcbiAgICAgIDE4LFxuICAgICAgMTA0LFxuICAgICAgNjIsXG4gICAgICAxODAsXG4gICAgICAxMDAsXG4gICAgICA0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDVkdEWEs5SFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyMTI0NzcwNDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDk4NDQwMTU0ODA5OTg6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJzeWx2ZXN0ZXJ0YWl3bzNcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJdlNuOFFHRUlHYTA3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlOM0NvMVVva3MxeThPUFVCcFNMY2s5YWVuMFE3djU1Zk9Qd05JOFFGQ0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYjBscWN4NE1kRGNuU0dqSXhpRzdYaHdOV3dqSGJCQlhlODJXTktxd2wvWG9lbFoyelhzbmlSbXlZZVVNdTJOQTBUMEtYbHJkT1l5VnZLVTZPbDVFQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibllCYzY1alAxY0hXS0xWeE5rdUhDN0s2SXdSNkJDdnd1Y0tyMFRLdVJ5RENsVHp4SENLcHpUSXY2Z0VkU1NuUDR1OEpveVFaT0J0OTVDWW9TRC9GRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyMTI0NzcwNDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODkzMDY5MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9YN1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1g3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwidWVsVjNoOFVWb2QwMmFWc1lsMlNyZ3R6VDZwTENVd1RQZUg3cWUvTG56Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzUzNzM3NDgyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUNzMkNrNGxpeFZHRG5NS3BJaG16RTMreVhMUTJod2ErUEo5bDhmYThuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianlLZ2pKbDJ6QTJCY0pWVjhNSHJCenRnbWZRcXdOUHNZZ09oeHZ3OXBrYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHS1Z4NG5WeEZpN2V5QlQ1UFlwUThDazVISVZoQzVqdTJPellNMVlIaVc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3V0FoMGZFcEtpUFd2RXd2cnVMaXdEZHJUZG1JQmp0cW5uWnVhTkpxbWs0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlPSm1KejhnZkc0QnFNQjRnazh5YTRRWjlsTWtTRWhPOEZwWnQvYlFvblE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkIvcTIxKzVId0V0VnhsOStCdEdoMkt3ZmdsUUp4VG9qV2IyV0pBNkNDRFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEN5NURGdlRDck45aWZHdTVTcGx0L1pPYk1QREdBZ0VUWE53TVBOakExZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2pJSlBRNnJpZHVzN1RRM0hoa1ZYdGp0bDhJenVYN3E3NDZBTndyTnYwVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijl2TjNQc2EyL2hYL2lLMW9qSUcwUGl5bVJqd2JQdFNGaUhjbkJtWC9QaGtONXpqZUhtSHZNTnBPc3RJZTFoYlRZUUF2OGsyaFUyb0xqUFkya2NRV0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE1LCJhZHZTZWNyZXRLZXkiOiJnTExJUXhvTCt0S3FpMnBZM2ppK2hJSXQ4eGwxOGtxZDE0SWwwWHBDMlA4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzOElXM2VDdlJKZWFuVjhBb3VqVnV3IiwicGhvbmVJZCI6IjhlZjdhMjMxLTg1MTktNDIyZi1iMjJjLWM2ZTEyMzEzY2M0NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTa1dEVG1BUEdFTW1aRVk4V29yZm5DRW5WUk09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWURoNm9TckNxTGNiNTIycDJZRXJ0MElkdTdjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlUNTFWWThWIiwibWUiOnsiaWQiOiIyMzQ5MDY4NDg2MDkyOjI3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IsOfd2lmdFhwbG9pdCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkw4dHZvQkVOMit3cnNHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU05IWmlEWGdVUmthRmpISi9XVDIzeStJeFpsb28wVklqckJsOTExTThDRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoickRWanVVLzA0QVNjVm03S05xc3gvR0oxNDNKaVJlWSs1OHpzR2ZPYVp4aUZIa1A4NTJpTkY3bGRFRTQxcXFXTUlTZ2pPNnpIUVpaL1hWS2ZVM2M3RFE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik82S0FQdTdZbHpMWkcvbjVtRTAxRzg2TnorUjNncHNveUw1aEUvMjlTVlhjZ3NCZUJuM240TlpFNWVNRVJRTUJEcWNzbVRGSDVHOHRYMEtNbEc0TURRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA2ODQ4NjA5MjoyN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJValIyWWcxNEZFWkdoWXh5ZjFrOXQ4dmlNV1phS05GU0k2d1pmZGRUUEFoIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1NDM0MDkwfQ== ",
    CAPTION: process.env.CAPTION || "code by yessertech ",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/3kdkf6.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M YESSER-MD WHATSAPP BOT 👍🤠",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "yessertech",
    STATUS_REPLY: process.env.STATUS_REPLY || "`✅ your status seen 👀`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'BLADE=rEtF1ZBJ#uV5PsmdMxdYnnBmvkhfiNFzmi-tBBRLxCiFLVJdTOsw' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? 'aw7XhjFIjWudL959PCf5YH88ojXc212YqzYQ' : process.env.PORT, 
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'movievisper' : process.env.SESSION_NAME,  

};

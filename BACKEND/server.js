const http=require('http');
const app = require("./app.js");

const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const PORT=Number(process.env.PORT) || 5000;

const server=http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`Server is listning on ${PORT}`)
});

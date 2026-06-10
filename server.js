const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 8080;
const FILE = path.join(__dirname, 'vivo-summer-benefits.html');

// Get local IP address
function getLocalIP() {
    const ifaces = os.networkInterfaces();
    for (const name of Object.keys(ifaces)) {
        for (const iface of ifaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return '127.0.0.1';
}

const server = http.createServer((req, res) => {
    fs.readFile(FILE, 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Server error');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    });
});

server.listen(PORT, '0.0.0.0', () => {
    const ip = getLocalIP();
    console.log('');
    console.log('========================================');
    console.log('  vivo 夏日超值季 — 本地服务已启动');
    console.log('========================================');
    console.log('');
    console.log('  门店电脑访问 (本机):');
    console.log(`    http://localhost:${PORT}`);
    console.log('');
    console.log('  顾客手机扫码访问 (同WiFi网络):');
    console.log(`    http://${ip}:${PORT}`);
    console.log('');
    console.log('  将上方地址生成二维码海报，张贴在门店即可');
    console.log('');
    console.log('  按 Ctrl+C 停止服务');
    console.log('========================================');
    console.log('');
});

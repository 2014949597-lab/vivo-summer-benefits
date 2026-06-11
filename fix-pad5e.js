const fs = require('fs');
let h = fs.readFileSync('D:/360MoveData/Users/APPLE/Desktop/vivo/vivo-summer-benefits.html', 'utf8');

function gb(p) {
    if (p > 6000) return '—';
    var s = Math.min(Math.round(p * 0.15), 500);
    return '¥' + (p - s).toLocaleString();
}

var idx = h.indexOf('vivo Pad5e</h3>');
var tableStart = h.indexOf('<table', idx);
var tableEnd = h.indexOf('</table>', tableStart) + 8;
var oldTable = h.substring(tableStart, tableEnd);

var newTable = '<table class="price-table">\n                <tr><th>版本</th><th>零售价</th><th>国补价</th></tr>\n                <tr><td>8+256GB</td><td><span class="orig">¥2,599</span></td><td class="gbt">' + gb(2599) + '</td></tr>\n                <tr><td>12+256GB</td><td><span class="orig">¥3,199</span></td><td class="gbt">' + gb(3199) + '</td></tr>\n                <tr><td>16+512GB</td><td><span class="orig">¥3,699</span></td><td class="gbt">' + gb(3699) + '</td></tr>\n            </table>';

h = h.replace(oldTable, newTable);

fs.writeFileSync('D:/360MoveData/Users/APPLE/Desktop/vivo/vivo-summer-benefits.html', h);
console.log('Pad5e prices updated');

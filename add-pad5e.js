const fs = require('fs');
let h = fs.readFileSync('D:/360MoveData/Users/APPLE/Desktop/vivo/vivo-summer-benefits.html', 'utf8');

function gb(p) {
    if (p > 6000) return '—';
    var s = Math.min(Math.round(p * 0.15), 500);
    return '¥' + (p - s).toLocaleString();
}

var pad5ECard = `
    <div class="pcard anim eco-pad">
        <div class="pimg" style="display:flex;align-items:center;justify-content:center;overflow:hidden"><img src="product-img/pad6p.png" alt="Pad5e" style="max-width:70%;max-height:70%;object-fit:contain" loading="lazy"/><span class="ptag ptag-hot" style="position:absolute;top:12px;left:12px">性价比之选</span></div>
        <div class="pbody">
            <h3>vivo Pad5e</h3>
            <div class="psub">12.1" 2.8K 144Hz · 第三代骁龙8s · 10000mAh · 44W · 4扬声器</div>
            <div class="sell-point"><span>2.8K 144Hz屏</span><span>第三代骁龙8s</span><span>10000mAh</span><span>44W快充</span><span>4扬声器全景声</span><span>VC液冷散热</span><span>584g超轻</span></div>
            <table class="price-table">
                <tr><th>版本</th><th>零售价</th><th>国补价</th></tr>
                <tr><td>8+128GB</td><td><span class="orig">¥1,999</span></td><td class="gbt">' + gb(1999) + '</td></tr>
                <tr><td>8+256GB</td><td><span class="orig">¥2,299</span></td><td class="gbt">' + gb(2299) + '</td></tr>
                <tr><td>12+256GB</td><td><span class="orig">¥2,599</span></td><td class="gbt">' + gb(2599) + '</td></tr>
                <tr><td>16+512GB</td><td><span class="orig">¥2,999</span></td><td class="gbt">' + gb(2999) + '</td></tr>
            </table>
        </div>
    </div>
`;

// Find Pad5 card closing div and insert Pad5e after it
var pad5Idx = h.indexOf('vivo Pad5</h3>');
var tableEnd = h.indexOf('</table>', pad5Idx);
var closeDiv1 = h.indexOf('</div>', tableEnd + 8);
var closeDiv2 = h.indexOf('</div>', closeDiv1 + 6);
var closeDiv3 = h.indexOf('</div>', closeDiv2 + 6);

h = h.substring(0, closeDiv3 + 6) + pad5ECard + h.substring(closeDiv3 + 6);

fs.writeFileSync('D:/360MoveData/Users/APPLE/Desktop/vivo/vivo-summer-benefits.html', h);
console.log('Pad5e added successfully');

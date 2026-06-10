const fs = require('fs');
let html = fs.readFileSync('vivo-summer-benefits.html', 'utf8');

function gb(p) {
    if (p > 6000) return '—';
    let s = Math.min(Math.round(p * 0.15), 500);
    return '¥' + (p - s).toLocaleString();
}

// First pass: fix ALL gbt prices in price-table sections based on their orig price
let idx = 0;
let fixCount = 0;
while (true) {
    let ts = html.indexOf('<table class="price-table">', idx);
    if (ts === -1) break;
    let te = html.indexOf('</table>', ts);

    let ri = ts;
    while (true) {
        let trs = html.indexOf('<tr>', ri);
        if (trs === -1 || trs > te) break;
        let tre = html.indexOf('</tr>', trs);
        let row = html.substring(trs, tre);

        let origM = row.match(/<span class="orig">([^<]+)<\/span>/);
        let gbtM = row.match(/class="gbt">([^<]+)<\/td>/);

        if (origM && gbtM) {
            let origNum = parseInt(origM[1].replace(/[¥,]/g, ''));
            if (!isNaN(origNum)) {
                let expected = gb(origNum);
                let gbtStart = html.indexOf('class="gbt">', trs) + 12;
                let gbtEnd = html.indexOf('</td>', gbtStart);
                let current = html.substring(gbtStart, gbtEnd);
                if (current !== expected) {
                    html = html.substring(0, gbtStart) + expected + html.substring(gbtEnd);
                    fixCount++;
                }
            }
        }
        ri = tre + 5;
    }
    idx = te + 8;
}
console.log('Fixed ' + fixCount + ' price-table gbt values');

// Clean up any NaN
html = html.replace(/¥NaN/g, '—');

// ===== NOW REPLACE ALL PRODUCT IMAGES =====
// Replace product placeholder emojis with actual images

// X300 Ultra
html = html.replace(
  '<span class="product-placeholder">📸</span><span class="ptag ptag-flag">专业V单</span>',
  '<img src="product-img/x300u.png" alt="X300 Ultra" style="width:100%;height:100%;object-fit:contain;padding:12px" loading="lazy"/><span class="ptag ptag-flag" style="position:absolute;top:12px;left:12px">专业V单</span>'
);
// X300s
html = html.replace(
  '<span class="product-placeholder">📱</span><span class="ptag ptag-new">热卖新品</span>',
  '<img src="product-img/x300s.png" alt="X300s" style="width:100%;height:100%;object-fit:contain;padding:12px" loading="lazy"/><span class="ptag ptag-new" style="position:absolute;top:12px;left:12px">热卖新品</span>'
);
// X300
html = html.replace(
  '<span class="product-placeholder">📱</span><span class="ptag ptag-new">新品</span>',
  '<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%"><img src="product-img/x300.png" alt="X300" style="max-width:85%;max-height:85%;object-fit:contain" loading="lazy"/></div><span class="ptag ptag-new" style="position:absolute;top:12px;left:12px">新品</span>'
);
// X300 Pro
html = html.replace(
  '<span class="product-placeholder">📷</span><span class="ptag ptag-new">新品</span>',
  '<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%"><img src="product-img/x300pro.png" alt="X300 Pro" style="max-width:85%;max-height:85%;object-fit:contain" loading="lazy"/></div><span class="ptag ptag-new" style="position:absolute;top:12px;left:12px">新品</span>'
);
// S60 standard - use String.prototype.replace to only replace first occurrence
let s60Idx = html.indexOf('S60 标准版');
let firstCard = html.lastIndexOf('<div class="pimg">', s60Idx);
let firstPH = html.indexOf('product-placeholder', firstCard);
let firstEnd = html.indexOf('</span>', firstPH + 50);
if (firstPH > -1) {
    let oldStr = html.substring(firstCard, firstEnd + 8);
    let newStr = '<div class="pimg"><img src="product-img/s60.png" alt="S60" style="width:100%;height:100%;object-fit:contain;padding:12px" loading="lazy"/><span class="ptag ptag-new" style="position:absolute;top:12px;left:12px">新品首发</span>';
    html = html.replace(oldStr, newStr);
}
// S60 yuanqi (second occurrence) - will handle differently since match is similar
// Find the exact context for S60 元气版 card
html = html.replace(
  'S60 元气版</h3>',
  'S60 元气版</h3>'
);
// For the second "新品首发" tag in S60 section, we need to find it by context
let s60ePos = html.indexOf('S60 元气版');
let s60eCard = html.lastIndexOf('<div class="pimg">', s60ePos);
let s60eImgStart = html.indexOf('product-placeholder', s60eCard);
let s60eImgEnd = html.indexOf('</span>', html.indexOf('ptag ptag-new', s60eCard));
if (s60eImgStart > -1 && s60eImgEnd > s60eImgStart) {
    let before = html.substring(s60eCard, s60eImgStart - 1);
    let fullOld = html.substring(s60eCard, s60eImgEnd + 8);
    let fullNew = '<div class="pimg"><img src="product-img/s60e.jpg" alt="S60元气版" style="width:100%;height:100%;object-fit:contain;padding:12px" loading="lazy"/><span class="ptag ptag-new" style="position:absolute;top:12px;left:12px">新品首发</span>';
    html = html.replace(fullOld, fullNew);
}

// Neo11
html = html.replace(
  '<span class="product-placeholder">🎮</span><span class="ptag ptag-best">性价比之王</span>',
  '<img src="product-img/neo11.png" alt="Neo11" style="width:100%;height:100%;object-fit:contain;padding:12px" loading="lazy"/><span class="ptag ptag-best" style="position:absolute;top:12px;left:12px">性价比之王</span>'
);
// Z11
html = html.replace(
  '<span class="product-placeholder">🔋</span>',
  '<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%"><img src="product-img/z11.png" alt="Z11" style="max-width:85%;max-height:85%;object-fit:contain" loading="lazy"/></div>'
);
// Z11x
html = html.replace(
  '<h3>iQOO Z11x</h3>',
  '<h3>iQOO Z11x</h3>'
);
let z11xPos = html.indexOf('iQOO Z11x</h3>');
let z11xCard = html.lastIndexOf('<div class="pimg">', z11xPos);
let z11xPlaceholder = html.indexOf('product-placeholder', z11xCard);
let z11xEnd = html.indexOf('</span>', z11xPlaceholder + 50);
if (z11xPlaceholder > -1) {
    let fullOld = html.substring(z11xCard, z11xEnd + 8);
    let fullNew = '<div class="pimg"><div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%"><img src="product-img/z11x.png" alt="Z11x" style="max-width:85%;max-height:85%;object-fit:contain" loading="lazy"/></div><span class="ptag ptag-best" style="position:absolute;top:12px;left:12px">百元机</span>';
    html = html.replace(fullOld, fullNew);
}

// Z11 Turbo - use Z11 image as reference, for now keep it with Z11 variant
let z11tPos = html.indexOf('Z11 Turbo</h3>');
let z11tCard = html.lastIndexOf('<div class="pimg">', z11tPos);
let z11tPlaceholder = html.indexOf('product-placeholder', z11tCard);
let z11tEnd = html.indexOf('</span>', z11tPlaceholder + 50);
let z11tTagStart = html.indexOf('ptag-best', z11tCard);
let z11tTagEnd = html.indexOf('</span>', z11tTagStart + 20);
if (z11tPlaceholder > -1) {
    let fullOld = html.substring(z11tCard, z11tTagEnd + 8);
    let fullNew = '<div class="pimg"><div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%"><img src="product-img/z11.png" alt="Z11 Turbo" style="max-width:85%;max-height:85%;object-fit:contain" loading="lazy"/></div><span class="ptag ptag-best" style="position:absolute;top:12px;left:12px">续航之王</span>';
    html = html.replace(fullOld, fullNew);
}

// Remove x300-2.png from product-img since we don't use it
try { fs.unlinkSync('product-img/x300-2.png'); } catch(e) {}

fs.writeFileSync('vivo-summer-benefits.html', html);
console.log('✅ Product images integrated and all prices corrected');

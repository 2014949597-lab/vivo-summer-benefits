const fs = require('fs');
let html = fs.readFileSync('vivo-summer-benefits.html', 'utf8');

const styleStart = html.indexOf('*,*::before,*::after{margin:0');
const styleEnd = html.indexOf('</style>', styleStart);
let oldCSS = html.substring(styleStart, styleEnd);

let newCSS = `*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:"PingFang SC","Helvetica Neue","Microsoft YaHei",sans-serif;background:#0b0e1a;color:rgba(255,255,255,0.9);overflow-x:hidden;line-height:1.6}
a{text-decoration:none;color:inherit}
img{max-width:100%;display:block}

@keyframes fadeUp{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:translateY(0)}}
@keyframes bgMove{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
@keyframes glow{0%,100%{box-shadow:0 0 20px rgba(65,95,255,0.15)}50%{box-shadow:0 0 40px rgba(65,95,255,0.3)}}
.anim{opacity:0;transform:translateY(36px);transition:opacity 0.7s ease,transform 0.7s ease}
.anim.show{opacity:1;transform:translateY(0)}

.navbar{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:14px 32px;background:rgba(11,14,26,0.92);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,0.05)}
.navbar .logo{font-weight:700;font-size:18px;letter-spacing:1px}
.navbar .logo span{color:#415fff}
.nav-links{display:flex;gap:18px;font-size:13px;overflow-x:auto;white-space:nowrap;-webkit-overflow-scrolling:touch;padding-bottom:2px}
.nav-links a{color:rgba(255,255,255,0.45);transition:color 0.3s;flex-shrink:0;letter-spacing:0.5px}
.nav-links a:hover{color:#fff}

.hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:100px 24px 60px;background:linear-gradient(135deg,#0b0e1a 0%,#0f1330 35%,#0b1a3a 65%,#120828 100%);background-size:400% 400%;animation:bgMove 18s ease infinite;position:relative;overflow:hidden}
.hero::before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at 25% 45%,rgba(65,95,255,0.08) 0%,transparent 60%),radial-gradient(ellipse at 75% 35%,rgba(106,61,232,0.06) 0%,transparent 50%),radial-gradient(ellipse at 50% 75%,rgba(255,107,53,0.04) 0%,transparent 50%);pointer-events:none}
.hero-badge{display:inline-block;padding:6px 22px;border-radius:100px;background:linear-gradient(135deg,rgba(65,95,255,0.2),rgba(106,61,232,0.2));border:1px solid rgba(65,95,255,0.25);font-size:13px;letter-spacing:2px;color:rgba(255,255,255,0.75);margin-bottom:22px;animation:fadeUp 0.8s ease}
.hero h1{font-size:clamp(38px,7.5vw,82px);font-weight:800;line-height:1.08;margin-bottom:14px;animation:fadeUp 0.8s ease 0.15s both;letter-spacing:-1px}
.hero h1 .hl{background:linear-gradient(135deg,#415fff,#8a5cff,#ff6b35);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero p{font-size:clamp(14px,2.2vw,20px);color:rgba(255,255,255,0.5);max-width:700px;margin-bottom:10px;animation:fadeUp 0.8s ease 0.3s both}
.hero-info{font-size:13px;color:rgba(255,255,255,0.25);animation:fadeUp 0.8s ease 0.4s both}
.hero-cta{display:inline-flex;align-items:center;gap:10px;padding:15px 40px;border-radius:60px;background:linear-gradient(135deg,#415fff,#6a3de8);font-size:16px;font-weight:600;margin-top:28px;transition:all 0.3s;animation:fadeUp 0.8s ease 0.5s both,glow 3s ease-in-out infinite}
.hero-cta:hover{transform:translateY(-3px) scale(1.02);box-shadow:0 12px 40px rgba(65,95,255,0.3)}

section{padding:72px 20px}
.section-title{text-align:center;font-size:clamp(28px,3.5vw,42px);font-weight:700;margin-bottom:8px;letter-spacing:-0.5px}
.section-sub{text-align:center;color:rgba(255,255,255,0.35);font-size:15px;margin-bottom:40px;line-height:1.5}
.bg1{background:linear-gradient(180deg,#0b0e1a 0%,#0f1330 100%)}
.bg2{background:linear-gradient(180deg,#0f1330 0%,#0b0e1a 100%)}

.series-header{display:flex;align-items:center;gap:14px;justify-content:center;margin-bottom:30px}
.series-header .icon{width:50px;height:50px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:26px}
.series-header h2{font-size:28px;font-weight:700;letter-spacing:-0.3px}
.prod-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));gap:22px;max-width:1280px;margin:0 auto}

.pcard{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:20px;overflow:hidden;transition:all 0.4s}
.pcard:hover{transform:translateY(-6px);border-color:rgba(65,95,255,0.25);box-shadow:0 20px 60px rgba(65,95,255,0.06)}
.pcard .pimg{width:100%;height:230px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.pcard .pimg .product-placeholder{font-size:72px;opacity:0.7}.pcard .pimg img{display:block}
.pcard .pimg .ptag{position:absolute;top:14px;left:14px;padding:4px 12px;border-radius:6px;font-size:11px;font-weight:600}
.ptag-new{background:rgba(65,95,255,0.2);color:#6b8aff;border:1px solid rgba(65,95,255,0.25)}
.ptag-hot{background:rgba(255,107,53,0.15);color:#ff8a5c;border:1px solid rgba(255,107,53,0.2)}
.ptag-flag{background:rgba(138,43,226,0.2);color:#b07eff;border:1px solid rgba(138,43,226,0.25)}
.ptag-best{background:rgba(0,200,150,0.15);color:#4ade80;border:1px solid rgba(0,200,150,0.2)}
.pcard .pbody{padding:22px}
.pcard .pbody h3{font-size:19px;margin-bottom:4px}
.pcard .pbody .psub{font-size:13px;color:rgba(255,255,255,0.35);margin-bottom:12px}
.pcard .pbody .sell-point{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:14px}
.pcard .pbody .sell-point span{padding:3px 10px;border-radius:6px;font-size:11px;background:rgba(65,95,255,0.08);color:#6b8aff;border:1px solid rgba(65,95,255,0.12)}

.price-table{width:100%;border-collapse:collapse;font-size:13px;margin-top:8px}
.price-table th,.price-table td{padding:9px 12px;text-align:left;border-bottom:1px solid rgba(255,255,255,0.04)}
.price-table th{font-size:11px;color:rgba(255,255,255,0.3);font-weight:600;letter-spacing:0.5px;background:rgba(65,95,255,0.04)}
.price-table .orig{color:rgba(255,255,255,0.2);text-decoration:line-through;font-size:12px}
.price-table .gbt{color:#ff6b35;font-weight:700}
.price-table tr:hover{background:rgba(255,255,255,0.02)}

.bf-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;margin-bottom:40px}
.bf-card{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:16px;padding:28px 20px;text-align:center;transition:all 0.3s}
.bf-card:hover{background:rgba(255,255,255,0.04);border-color:rgba(65,95,255,0.15);transform:translateY(-3px)}
.bf-card .bf-icon{font-size:38px;display:block;margin-bottom:12px}
.bf-card h4{font-size:16px;margin-bottom:6px}
.bf-card p{font-size:13px;color:rgba(255,255,255,0.4);line-height:1.6}
.bf-card .bf-val{color:#ff6b35;font-weight:700}

.comp-wrap{max-width:1280px;margin:0 auto;overflow-x:auto}
.comp-table{width:100%;border-collapse:collapse;font-size:13px;min-width:800px}
.comp-table th,.comp-table td{padding:11px 14px;text-align:center;border-bottom:1px solid rgba(255,255,255,0.04);vertical-align:middle}
.comp-table th{background:rgba(65,95,255,0.06);font-weight:600;font-size:12px;color:rgba(255,255,255,0.45);white-space:nowrap;position:sticky;top:0;z-index:2}
.comp-table th:first-child{border-radius:10px 0 0 0}
.comp-table th:last-child{border-radius:0 10px 0 0}
.comp-table td:first-child{text-align:left;font-weight:600;white-space:nowrap}
.comp-table tbody tr:hover{background:rgba(255,255,255,0.02)}
.comp-table .chk{color:#4ade80;font-size:16px}
.comp-table .no{color:rgba(255,255,255,0.1);font-size:14px}
.comp-table .amt{color:#ff6b35;font-weight:600}
.comp-table tr.series-group td:first-child{color:#415fff;font-size:12px;letter-spacing:1px}

.steps-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;max-width:900px;margin:0 auto}
.step-card{text-align:center;padding:28px 16px}
.step-num{width:46px;height:46px;margin:0 auto 14px;border-radius:50%;background:linear-gradient(135deg,#415fff,#6a3de8);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700}
.step-card h4{font-size:17px;margin-bottom:4px}
.step-card p{font-size:13px;color:rgba(255,255,255,0.4)}

footer{text-align:center;padding:44px 24px 32px;border-top:1px solid rgba(255,255,255,0.04);color:rgba(255,255,255,0.2);font-size:12px;line-height:1.8}
footer a{color:rgba(65,95,255,0.5)}

.qr-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(11,14,26,0.96);backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;cursor:pointer;opacity:0;pointer-events:none;transition:opacity 0.4s}
.qr-overlay.active{opacity:1;pointer-events:auto}
.qr-overlay .qr-wrap{background:#fff;padding:26px;border-radius:20px}
.qr-btn{position:fixed;bottom:24px;right:24px;z-index:199;width:54px;height:54px;border-radius:50%;background:linear-gradient(135deg,#415fff,#6a3de8);border:none;color:#fff;font-size:22px;cursor:pointer;box-shadow:0 4px 24px rgba(65,95,255,0.25);transition:transform 0.3s;display:flex;align-items:center;justify-content:center}
.qr-btn:hover{transform:scale(1.1)}

.eco-x .pimg{background:linear-gradient(135deg,rgba(65,95,255,0.08),rgba(40,60,200,0.06))}
.eco-s .pimg{background:linear-gradient(135deg,rgba(255,107,53,0.08),rgba(255,50,100,0.06))}
.eco-iqoo-d .pimg{background:linear-gradient(135deg,rgba(106,61,232,0.08),rgba(60,20,120,0.06))}
.eco-iqoo-n .pimg{background:linear-gradient(135deg,rgba(0,200,150,0.08),rgba(0,150,100,0.06))}
.eco-iqoo-z .pimg{background:linear-gradient(135deg,rgba(255,180,0,0.08),rgba(200,120,0,0.06))}
.eco-y .pimg{background:linear-gradient(135deg,rgba(0,150,255,0.08),rgba(0,100,200,0.06))}
.eco-pad .pimg{background:linear-gradient(135deg,rgba(100,200,255,0.08),rgba(50,100,200,0.06))}
.eco-watch .pimg{background:linear-gradient(135deg,rgba(50,200,200,0.08),rgba(0,150,150,0.06))}
.eco-audio .pimg{background:linear-gradient(135deg,rgba(200,100,255,0.08),rgba(150,50,200,0.06))}

@media(max-width:768px){
.navbar{padding:12px 16px}.nav-links{gap:10px;font-size:12px}
section{padding:44px 14px}.prod-grid{grid-template-columns:1fr}
.comp-table{font-size:12px}.comp-table th,.comp-table td{padding:7px 8px}
}
@media print{.qr-btn,.navbar{display:none}}

.cat-label{display:inline-block;padding:3px 12px;border-radius:6px;font-size:10px;font-weight:600;letter-spacing:1px;margin-bottom:6px}
.cat-x{background:rgba(65,95,255,0.12);color:#6b8aff}
.cat-s{background:rgba(255,107,53,0.12);color:#ff8a5c}
.cat-iqoo{background:rgba(106,61,232,0.12);color:#b07eff}
.cat-y{background:rgba(0,150,255,0.12);color:#5cb8ff}
.cat-pad{background:rgba(100,200,255,0.12);color:#6ac8ff}
.cat-watch{background:rgba(50,200,200,0.12);color:#4ae0e0}
.cat-audio{background:rgba(200,100,255,0.12);color:#c07eff}

/* VAS */
.vas-tabs{display:flex;gap:8px;justify-content:center;margin-bottom:36px;flex-wrap:wrap}
.vas-tab{padding:11px 24px;border-radius:60px;font-size:14px;font-weight:500;cursor:pointer;transition:all 0.3s;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.02);color:rgba(255,255,255,0.4);letter-spacing:0.5px}
.vas-tab:hover{border-color:rgba(65,95,255,0.2);color:rgba(255,255,255,0.7)}
.vas-tab.active{background:linear-gradient(135deg,rgba(65,95,255,0.15),rgba(106,61,232,0.15));border-color:rgba(65,95,255,0.3);color:#fff}
.vas-panel{display:none;animation:fadeUp 0.5s ease}
.vas-panel.active{display:block}
.sb-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:18px;margin-bottom:24px}
.sb-card{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:16px;padding:26px;transition:all 0.3s}
.sb-card:hover{border-color:rgba(65,95,255,0.15);background:rgba(255,255,255,0.04);transform:translateY(-2px)}
.sb-card .sb-icon{font-size:30px;display:inline-block;margin-bottom:10px}
.sb-card .sb-label{display:inline-block;font-size:11px;font-weight:600;padding:3px 12px;border-radius:6px;letter-spacing:1px;margin-bottom:8px}
.sb-label-blue{background:rgba(65,95,255,0.15);color:#6b8aff}
.sb-label-orange{background:rgba(255,107,53,0.15);color:#ff8a5c}
.sb-label-purple{background:rgba(138,43,226,0.15);color:#b07eff}
.sb-label-green{background:rgba(0,200,150,0.15);color:#4ade80}
.sb-label-gold{background:rgba(255,180,0,0.15);color:#ffd700}
.sb-card h4{font-size:16px;margin-bottom:6px}
.sb-card .sb-desc{font-size:13px;color:rgba(255,255,255,0.45);line-height:1.7}
.sb-card .sb-highlight{color:#ff6b35;font-weight:700}
.sb-card .sb-note{font-size:12px;color:rgba(255,255,255,0.25);margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,0.04)}
.sb-tag{display:inline-block;padding:3px 10px;border-radius:100px;font-size:11px;font-weight:600;margin:4px 4px 0 0}
.sb-tag-hot{background:rgba(255,53,53,0.12);color:#ff5c5c;border:1px solid rgba(255,53,53,0.15)}
.sb-tag-new{background:rgba(65,95,255,0.12);color:#6b8aff;border:1px solid rgba(65,95,255,0.15)}
.sb-tag-ltd{background:rgba(255,180,0,0.12);color:#ffd700;border:1px solid rgba(255,180,0,0.15)}
.vas-warn{background:rgba(255,53,53,0.04);border:1px solid rgba(255,53,53,0.08);border-radius:12px;padding:14px 18px;font-size:13px;color:rgba(255,255,255,0.45);margin:12px 0;display:flex;align-items:center;gap:10px}
.vas-warn .warn-icon{font-size:18px;flex-shrink:0}
.vas-warn strong{color:#ff5c5c}
`;

html = html.replace(oldCSS, newCSS);

fs.writeFileSync('vivo-summer-benefits.html', html);
console.log('✅ CSS redesigned with Vivo brand style');

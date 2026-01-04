function e(e, t = "" + gt) {
const n = t.length;
let r = "";
for (let a = 0; e.length > a; a++) {
const o = Reflect.apply(gt, e, [ a ]) ^ Reflect.apply(gt, t, [ a % n ]);
r += mt(o);
}
return r;
}

function t() {
if (!_t.game?.initialized) return;
const e = At.Ee.Pe;
try {
(e => {
e && At.Ee.Le && _t.game[Rt.O].layers[3].children.forEach(e => {
e._texture?.textureCacheIds && e._texture.textureCacheIds.some(e => e.includes("ceiling") && !e.includes("map-building-container-ceiling-05") || e.includes("map-snow-")) && (e.visible = !1);
});
})(e), e && _t.game[Rt.Y][Rt.Ne].forEach(e => {
At.Ee.De && (e.sprite._tintRGB = 1), e.sprite.alpha = At.Ee.Fe / 1e3;
}), (e => {
e && _t.game[Rt.pe][Rt.ve][Rt.we].forEach(e => {
[ "tree", "table", "stairs", "bush" ].some(t => e.type.includes(t)) && (e.sprite.alpha = At.Ee.Be / 100);
});
})(e);
} catch {}
}

function n(e, t, n) {
try {
const r = e[t], a = new Proxy(r, n);
Lt.set(a, r), Object.defineProperty(e, t, {
value: a,
writable: !0,
enumerable: !1,
configurable: !0
});
} catch (e) {
console.error(`Failed to hook ${t}:`, e);
}
}

function r() {
return _t.game?.[Rt.S] && null != _t.game?.[Rt.J]?.[Rt.de]?.[Rt.ze] && _t.game?.initialized;
}

function a(e) {
return Object.keys(_t.game[Rt.T].teamInfo).find(t => _t.game[Rt.T].teamInfo[t].playerIds.includes(e.__id));
}

function o(e) {
const t = e[Rt.ce][Rt.Se];
return t && Zt[t] ? Zt[t] : null;
}

function i(e) {
return e ? Zt[e.bulletType] : null;
}

function s(e) {
if (!on.Ie) return;
const {Ye: t, Ke: n, Ge: r, $e: a} = e, o = t ?? "idle", i = performance.now();
if (mn(i), "idle" === o) {
hn();
const e = sn(on.He), t = on.qe ?? sn(e);
if (!a && ln(t, e)) {
const n = pn(t, e);
on.Ue = {
startPos: sn(t),
targetPos: sn(e),
startTime: i,
duration: n
}, gn(n);
} else on.Ue = null, fn(null);
on.Ye = "idle", on.Ve = null;
} else {
hn();
const e = n ? {
x: n.x,
y: n.y
} : sn(on.He), t = on.qe ?? sn(on.He), r = ln(e, on.Ve);
o !== on.Ye || r ? (on.Ue = {
startPos: sn(t),
targetPos: sn(e),
startTime: i,
duration: a ? 0 : pn(t, e)
}, on.Ve = sn(e)) : on.Ue && (on.Ue.targetPos = sn(e)), on.Ye = o;
}
const s = cn(r);
((e, t) => !((e || t) && (!e || !t || e.touchMoveActive !== t.touchMoveActive || Math.abs(e.touchMoveLen - t.touchMoveLen) > rn || Math.abs(e.x - t.x) > rn || Math.abs(e.y - t.y) > rn)))(s, on.We) || (on.Ze = {
startDir: cn(on.Xe),
targetDir: s,
startTime: i,
duration: on.Ue?.duration ?? 195
}, on.We = s), mn(i);
}

function l(e) {
const t = _t.game[Rt.J], n = a(e) === a(t), r = At.Je.Pe && At.Je.Qe;
Reflect.defineProperty(e.nameText, "visible", {
get: () => r || n && e != t,
set() {}
}), e.nameText.tint = r ? n ? 13360629 : 16721960 : 16777215, e.nameText.style.fill = r ? n ? "#3a88f4" : "#ff2828" : "#00ffff", 
e.nameText.style.fontSize = 20, e.nameText.style.dropShadowBlur = .1;
}

function c() {
try {
const e = _t.game[Rt.J], t = _t.game[Rt.T].playerPool[Rt.we];
if (!(_t.pixi && e && e.container && _t.game?.initialized)) return;
const n = Ln(e.container, "playerLines");
n.clear(), At.Je.Pe && At.Je.et && ((e, t, n) => {
const r = e[Rt.be].x, o = e[Rt.be].y, i = a(e), s = En(e.layer), l = Tn(e);
t.forEach(t => {
if (!t.active || t[Rt.ce][Rt.Ce] || e.__id === t.__id) return;
const c = a(t), d = Fn(t.layer, l, s);
let u;
u = c === i ? An : !d || t.downed ? zn : _n;
const b = 16 * (t[Rt.be].x - r), p = 16 * (o - t[Rt.be].y);
n.lineStyle(3.5, u, .2), n.moveTo(0, 0), n.lineTo(b, p), n.lineStyle(2.2, u, .7), 
n.moveTo(0, 0), n.lineTo(b, p);
});
})(e, t, n);
const r = Ln(e.container, "grenadeDangerZones");
r.clear(), At.Je.Pe && At.Je.nt.tt && ((e, t) => {
const n = e[Rt.be].x, r = e[Rt.be].y, a = En(e.layer), o = Tn(e), i = _t.game?.[Rt.W]?.[Rt.Oe];
i && Object.values(i).filter(e => 9 === e.__type && "smoke" !== e.type || e.smokeEmitter && e.explodeParticle).forEach(e => {
const i = Fn(e.layer, o, a), s = i ? .15 : .08, l = i ? Sn : zn, c = 16 * (e.pos.x - n), d = 16 * (r - e.pos.y);
t.beginFill(l, .5 * s), t.drawCircle(c, d, 249.6), t.endFill(), t.beginFill(l, s), 
t.drawCircle(c, d, 208), t.endFill(), t.lineStyle(2.5, l, i ? .6 : .3), t.drawCircle(c, d, 208);
});
})(e, r);
const s = Ln(e.container, "grenadeTrajectory");
s.clear(), At.Je.Pe && At.Je.nt.rt && ((e, t) => {
if (3 !== e[Rt.de][Rt.ze]) return;
const n = e[Rt.ce][Rt.Se];
if (!n) return;
const r = _t.game, a = e[Rt.be].x, o = e[Rt.be].y;
let i, s;
const l = r[Rt.H].spectating, c = r[Rt.C].shotDetected || r[Rt.oe].isBindDown(Vt), d = l ? null : yn();
if (d) {
const e = r[Rt.N][Rt._e]({
x: a,
y: o
}), t = d.x - e.x, n = d.y - e.y, l = Math.sqrt(t * t + n * n);
i = t / l, s = n / l;
} else if (l || Mt.ot && c) if (!l && Mt.ot) {
const e = r[Rt.N][Rt._e]({
x: a,
y: o
}), t = Mt.ot.clientX - e.x, n = Mt.ot.clientY - e.y, l = Math.sqrt(t * t + n * n);
i = t / l, s = n / l;
} else i = e[Rt.ge].x, s = e[Rt.ge].y; else {
const e = r[Rt.ae].mousePos._x - xt.innerWidth / 2, t = r[Rt.ae].mousePos._y - xt.innerHeight / 2, n = Math.sqrt(e * e + t * t);
i = e / n, s = t / n;
}
const u = .03489949670250097 * i + .9993908270190958 * s;
i = .9993908270190958 * i - .03489949670250097 * s, s = u;
const b = Math.min(Math.max(zt.it, 0), 32.4) / 15 * (n.includes("smoke") ? 11 : 15), p = a + i * b, f = o - s * b;
let h = Cn;
n.includes("smoke") ? h = Nn : n.includes("frag") ? h = Pn : n.includes("mirv") ? h = jn : n.includes("martyr") && (h = On);
const g = 16 * (p - a), m = 16 * (o - f);
t.lineStyle(5, h, .2), t.moveTo(0, 0), t.lineTo(g, m), t.lineStyle(3, h, .8), t.moveTo(0, 0), 
t.lineTo(g, m);
const x = n.replace("_cook", ""), y = Zt[x]?.explosionType;
if (y && Zt[y]) {
const e = 16 * (Zt[y].rad.max + 1);
t.beginFill(h, .08), t.drawCircle(g, m, 1.15 * e), t.endFill(), t.beginFill(h, .12), 
t.drawCircle(g, m, e), t.endFill(), t.lineStyle(2.5, h, .6), t.drawCircle(g, m, e);
}
})(e, s);
const c = Ln(e.container, "flashlights");
c.clear(), At.Je.Pe && (At.Je.st.h || At.Je.st.lt) && ((e, t, n) => {
const r = o(e), s = i(r), l = En(e.layer), c = Tn(e);
At.Je.st.lt && In(e, e, s, r, n), At.Je.st.h && t.filter(t => !(!t.active || t[Rt.ce][Rt.Ce] || e.__id === t.__id || !Fn(t.layer, c, l) || !t.container.worldVisible || a(t) === a(e))).forEach(t => {
const r = o(t), a = i(r);
In(e, t, a, r, n, 0, .05);
});
})(e, t, c);
const d = Ln(e.container, "bulletTrajectory");
d.clear(), At.Je.Pe && At.Je.st.rt && ((e, t) => {
const n = o(e), r = i(n);
if (!r || !n) return;
const a = _t.game, s = e[Rt.be], l = a[Rt.H].spectating, c = a[Rt.C].shotDetected || a[Rt.oe].isBindDown(Vt);
let d;
const u = l ? null : yn();
if (u) {
const e = a[Rt.N][Rt._e]({
x: s.x,
y: s.y
});
d = Math.atan2(e.y - u.y, e.x - u.x) - Math.PI;
} else if (l || Mt.ot && c) if (!l && Mt.ot) {
const e = a[Rt.N][Rt._e]({
x: s.x,
y: s.y
});
d = Math.atan2(e.y - Mt.ot.clientY, e.x - Mt.ot.clientX) - Math.PI;
} else d = Math.atan2(e[Rt.ge].x, e[Rt.ge].y) - Math.PI / 2; else d = Math.atan2(a[Rt.ae].mousePos._y - xt.innerHeight / 2, a[Rt.ae].mousePos._x - xt.innerWidth / 2);
const b = Jt.ct(Math.cos(d), -Math.sin(d)), p = Mn(s, b, n), f = a?.[Rt.W]?.[Rt.Oe], h = isLayerSpoofActive && void 0 !== originalLayerValue ? originalLayerValue : e.layer;
let g = null;
if (f) {
const e = Object.values(f).filter(e => !(!e.collider || e.dead || void 0 !== e.height && .25 > e.height || void 0 !== e.layer && !en(e.layer, h) || e?.type.includes("decal")));
let t = 1 / 0;
for (const n of e) {
if (!1 === n.collidable) continue;
const e = Qt.dt(n.collider, s, p);
if (e) {
const n = Jt.ut(Jt.bt(e.point, s));
t > n && (t = n, g = Jt.ft(e.point, Jt.ht(e.normal, .01)));
}
}
}
const m = ((e, t, n, r, a, o = 3) => {
const i = [];
let s = Jt.gt(e), l = Jt.xt(t), c = n, d = 0;
const u = _t.game, b = u?.[Rt.W]?.[Rt.Oe];
if (!b) return i;
const p = isLayerSpoofActive && void 0 !== originalLayerValue ? originalLayerValue : r, f = Object.values(b).filter(e => !(!e.collider || e.dead || void 0 !== e.height && .25 > e.height || void 0 !== e.layer && !en(e.layer, p) || e?.type.includes("decal") || e?.type.includes("decal"))), h = u?.[Rt.T], g = h?.playerPool?.[Rt.we], m = Rt.re, x = m ? u?.[m] : null, y = x?.player?.radius ?? 1, w = [];
if (Array.isArray(g)) for (const e of g) {
if (!e || !e.active) continue;
if (e.__id === a.__id) continue;
const t = e[Rt.ce];
if (!t) continue;
if (t[Rt.Ce]) continue;
const n = e.layer ?? t.m_layer ?? 0;
if (!(en(n, p) || 2 & n)) continue;
const r = e[Rt.be] ?? e.m_pos;
if (!r) continue;
const o = "number" == typeof e.m_rad ? e.m_rad : "number" == typeof e.rad ? e.rad : y * ("number" == typeof t.m_scale ? t.m_scale : "number" == typeof t.scale ? t.scale : 1);
o > 0 && w.push({
pos: {
x: r.x,
y: r.y
},
rad: o
});
}
for (;o >= d && c > .1; ) {
const e = Jt.ft(s, Jt.ht(l, c));
let t = null, n = 1 / 0, r = null, a = null;
for (const o of f) {
if (!1 === o.collidable) continue;
const i = Qt.dt(o.collider, s, e);
if (i) {
const e = Jt.ut(Jt.bt(i.point, s));
n > e && e > 1e-4 && (n = e, t = i, r = o, a = "obstacle");
}
}
for (const o of w) {
const i = Qt.yt(s, e, o.pos, o.rad);
if (i) {
const e = Jt.ut(Jt.bt(i.point, s));
n > e && e > 1e-4 && (n = e, t = i, r = null, a = "player");
}
}
if (!t) {
i.push({
start: Jt.gt(s),
end: e,
hitPlayer: !1
});
break;
}
{
if (i.push({
start: Jt.gt(s),
end: Jt.gt(t.point),
hitPlayer: "player" === a
}), "player" === a) break;
const e = r?.type;
let u = !1;
if (u = r && void 0 !== r.reflectBullets ? !0 === r.reflectBullets : [ "metal_wall", "stone_wall", "container_wall", "hedgehog", "bollard", "airdop", "silo", "collider", "warehouse_wall" ].some(t => e?.includes(t)), 
!u || d >= o) break;
{
const e = Jt.wt(l, t.normal);
l = Jt.ft(Jt.ht(t.normal, -2 * e), l), l = Jt.xt(l), s = Jt.ft(t.point, Jt.ht(l, .01)), 
c = Math.max(1, c - Math.sqrt(n)) / 1.5, d++;
}
}
}
return i;
})(g || p, b, r.distance, e.layer, e), x = m.some(e => e.hitPlayer), y = x ? Sn : 16711935, w = x ? 3 : 2;
t.lineStyle(w + 2, y, .2);
for (const e of m) {
const n = {
x: 16 * (e.start.x - s.x),
y: 16 * (s.y - e.start.y)
}, r = {
x: 16 * (e.end.x - s.x),
y: 16 * (s.y - e.end.y)
};
t.moveTo(n.x, n.y), t.lineTo(r.x, r.y);
}
t.lineStyle(w, y, .75);
for (const e of m) {
const n = {
x: 16 * (e.start.x - s.x),
y: 16 * (s.y - e.start.y)
}, r = {
x: 16 * (e.end.x - s.x),
y: 16 * (s.y - e.end.y)
};
t.moveTo(n.x, n.y), t.lineTo(r.x, r.y);
}
})(e, d), t.forEach(l);
} catch {}
}

function d(e) {
if (!e || e.dead) return !1;
if (!e.collider) return !1;
if (void 0 === e.layer) return !1;
const t = e.type || "";
return [ "crate_", "chest_", "barrel_", "bookshelf_", "drawers_", "locker_", "deposit_box_", "refrigerator_", "control_panel_", "case_", "oven_", "bed_", "couch_", "table_", "window", "pot_", "planter_" ].some(e => t.includes(e));
}

function u() {
try {
const e = _t.game;
if (!e.initialized || !At.kt.Pe && !At.vt.Pe || e[Rt.H].spectating) return s(new nn("idle")), 
void (qn._t = null);
const t = e[Rt.T].playerPool[Rt.we], n = e[Rt.J];
let r = !1, l = null, c = null, u = !1;
const b = performance.now();
if (At.vt.Mt && b - qn.zt > 50) {
const e = (e => {
const t = _t.game, n = t?.[Rt.W]?.[Rt.Oe];
if (!n) return [];
const r = e[Rt.he], a = Wn(e), o = [];
for (const e of Object.values(n)) {
if (!e || e.dead) continue;
const t = e.type || "";
if (!Vn.some(e => t.includes(e))) continue;
if (void 0 !== e.layer && !Zn(e.layer, a)) continue;
const n = e[Rt.he];
if (!n) continue;
const i = Math.hypot(r.x - n.x, r.y - n.y);
if (i > 30) continue;
const s = e.explosionRadius || 8;
o.push({
object: e,
position: n,
distance: i,
explosionRadius: s,
dangerZone: s + 1
});
}
return o.sort((e, t) => e.distance - t.distance);
})(n);
qn.At = e.length > 0 ? e[0] : null, qn.zt = b, qn.St = e.length > 0 ? ((e, t) => {
if (!e || 0 === e.length) return null;
let n = null;
for (const t of e) if (t.dangerZone >= t.distance) {
n = t;
break;
}
if (!n) return null;
const r = n.position, a = t.x - r.x, o = t.y - r.y;
return .1 > Math.hypot(a, o) ? Math.random() * Math.PI * 2 : Math.atan2(o, a);
})(e, n[Rt.he]) : null;
}
try {
const b = e[Rt.J][Rt.de][Rt.ze], p = 2 === b, f = 3 === b, h = e[Rt.oe].isBindDown(Vt), g = f && h, m = At.kt.Ct || h || At.kt.Nt && qn.Ot && qn.Ot.active && !qn.Ot[Rt.ce][Rt.Ce], x = At.vt.Pe && (At.kt.Nt || h), y = n[Rt.he], w = ((e, t, n = 52.5) => {
const r = _t.game, a = r?.[Rt.W]?.[Rt.Oe];
if (!a) return [];
const o = [];
for (const r of Object.values(a)) {
if (!(9 === r.__type && "smoke" !== r.type || r.smokeEmitter && r.explodeParticle)) continue;
if (r.dead) continue;
if (!r.pos) continue;
if (2 !== t && 3 !== t && 2 !== r.layer && 3 !== r.layer && r.layer !== t) continue;
const a = Math.hypot(e.x - r.pos.x, e.y - r.pos.y);
a > n || o.push({
pos: r.pos,
distance: a,
type: r.type || "frag"
});
}
return o;
})(y, n.layer), k = ((e, t) => {
if (0 === t.length) return null;
let n = 0, r = 0;
for (const a of t) {
const t = e.x - a.pos.x, o = e.y - a.pos.y, i = Math.hypot(t, o);
if (.1 > i) n += t / (i + .1) * 10, r += o / (i + .1) * 10; else {
const e = 1 / (i + 1);
n += t / i * e, r += o / i * e;
}
}
const a = Math.hypot(n, r);
return .1 > a ? null : Math.atan2(r / a, n / a);
})(y, w);
let v = qn.jt;
if (x) {
let e = !1;
if (v && (e = void 0 !== v.active ? v.active && !v[Rt.ce]?.[Rt.Ce] : !v.dead, e && qn.Rt === v.__id)) {
const t = n[Rt.he], r = v[Rt.he];
e = 9.5 >= Math.hypot(t.x - r.x, t.y - r.y);
}
if (!e) {
if (v = ((e, t) => {
const n = a(t), r = Wn(t);
let o = null, i = 1 / 0;
for (const s of e) {
if (!s.active) continue;
if (s[Rt.ce][Rt.Ce]) continue;
if (!At.kt.Tt && s.downed) continue;
if (t.__id === s.__id) continue;
if (!Zn(s.layer, r)) continue;
if (a(s) === n && !At.vt.Pt && !At.kt.Et) continue;
const e = t[Rt.he], l = s[Rt.he], c = nr(e.x, e.y, l.x, l.y);
i > c && (i = c, o = s);
}
return o;
})(t, n), !v) {
const e = (e => {
if (!At.vt.Pe) return null;
const t = _t.game, n = t?.[Rt.W]?.[Rt.Oe];
if (!n) return null;
const r = e[Rt.he], a = Wn(e);
let o = null, i = 1 / 0;
for (const e of Object.values(n)) {
if (!d(e)) continue;
if (void 0 !== e.layer && !Zn(e.layer, a)) continue;
const t = e[Rt.he];
if (!t) continue;
const n = Math.hypot(r.x - t.x, r.y - t.y);
n > 6.5 || i > n && (i = n, o = e);
}
return o;
})(n);
e && (v = e);
}
qn.jt = v, qn.Rt = v?.__id || null, qn.Lt = v ? performance.now() : null;
}
} else v = null, qn.jt = null, qn.Rt = null, qn.Lt = null;
let M = 1 / 0, z = null, _ = !1;
if (v) {
const e = n[Rt.he], t = v[Rt.he];
M = Math.hypot(e.x - t.x, e.y - t.y), _ = void 0 === v.active, z = _ ? t : ((e, t) => {
if (!e || !t) return null;
const n = e[Rt.he], r = e.__id;
qn.Dt[r] || (qn.Dt[r] = {
positions: [],
velocities: [],
lastVelocity: {
x: 0,
y: 0
},
acceleration: {
x: 0,
y: 0
}
});
const a = qn.Dt[r], o = performance.now();
if (a.positions.push({
x: n.x,
y: n.y,
t: o
}), a.positions.length > 30 && a.positions.shift(), 5 > a.positions.length) return n;
const i = a.positions[0], s = a.positions[a.positions.length - 1], l = (s.t - i.t) / 1e3;
if (l > .001) {
const e = (s.x - i.x) / l, t = (s.y - i.y) / l, n = .7;
if (a.lastVelocity.x = a.lastVelocity.x * n + e * (1 - n), a.lastVelocity.y = a.lastVelocity.y * n + t * (1 - n), 
a.velocities.length > 0) {
const r = a.velocities[a.velocities.length - 1];
a.acceleration.x = (e - r.x) * (1 - n), a.acceleration.y = (t - r.y) * (1 - n);
}
a.velocities.push({
x: e,
y: t
}), a.velocities.length > 10 && a.velocities.shift();
}
const c = Math.hypot(a.lastVelocity.x, a.lastVelocity.y);
if (c > 2e3) {
const e = 2e3 / c;
a.lastVelocity.x *= e, a.lastVelocity.y *= e;
}
const d = .2 * (.8 + .4 * Math.min(1, c / 500));
return {
x: n.x + a.lastVelocity.x * d + a.acceleration.x * d * d * .5,
y: n.y + a.lastVelocity.y * d + a.acceleration.y * d * d * .5
};
})(v, n);
}
const A = v ? (e => {
if (!e || !e.__id) return Hn;
const t = qn.Dt[e.__id];
if (!t) return Hn;
const n = Math.hypot(t.lastVelocity.x, t.lastVelocity.y);
return Hn + Math.min(.5, n / 1e3);
})(v) : Hn, S = A + 1 >= M, C = 8.5 >= M, N = At.kt.Ct && At.vt.Ft && 11.25 >= M;
x && At.vt.Ft && !p && (S || N) && v && (zt.Bt.push(Wt), qn.It = !0), (p || !S && !N) && (qn.It = !1);
const P = x && (S || N) && v && (p || qn.It);
if (P) {
const t = n[Rt.he], a = z || v[Rt.he], l = o(n), c = i(l);
let d = _;
if (d || (d = !At.kt.Yt || er(n, v, l, c)), d) {
const n = ((e, t) => Jt.Kt(e, t))(t, a), o = qn.Dt[v.__id], i = o ? Math.hypot(o.lastVelocity.x, o.lastVelocity.y) : 0;
let l = n;
i > 150 && (l = n + (Math.atan2(o.lastVelocity.y, o.lastVelocity.x) - n) * Math.min(.15, i / 2e3));
let c = l;
if (At.vt.Mt && w.length > 0) for (const e of w) if (12 >= e.distance) {
c = k;
break;
}
const d = {
touchMoveActive: !0,
touchMoveLen: 255,
x: Math.cos(c),
y: Math.sin(c)
}, u = e[Rt.N][Rt._e]({
x: a.x,
y: a.y
});
return At.vt.Gt && p && Hn > M && zt.Bt.push(Vt), s(new nn("meleeLock", {
x: u.x,
y: u.y
}, d, !0)), r = !0, vn(), void (qn._t = null);
}
}
if (x && !C && (qn.jt = null), !At.kt.Pe || p || P || f && !g) return s(new nn("idle")), 
vn(), void (qn._t = null);
const j = m;
let O = qn.$t?.active && !qn.$t[Rt.ce][Rt.Ce] ? qn.$t : null;
if (O) {
const e = Wn(n);
Zn(O.layer, e) || (O = null, qn.$t = null, s(new nn("idle", null, null, !0)));
}
if (O || (qn.$t && (qn.$t = null, s(new nn("idle", null, null, !0))), O = ((e, t) => {
const n = a(t), r = Wn(t);
let o = null, i = -1 / 0;
const s = At.kt.Ht ** 2;
performance.now();
for (const l of e) {
if (!l.active) continue;
if (l[Rt.ce][Rt.Ce]) continue;
if (!At.kt.Tt && l.downed) continue;
if (t.__id === l.__id) continue;
if (!Zn(l.layer, r)) continue;
if (a(l) === n && !At.kt.Et) continue;
const e = _t.game[Rt.N][Rt._e]({
x: l[Rt.he].x,
y: l[Rt.he].y
}), c = nr(e.x, e.y, _t.game[Rt.ae].mousePos._x, _t.game[Rt.ae].mousePos._y);
if (c > s) continue;
const d = Math.exp(-Math.sqrt(c) / 120) + (l === qn.Ot ? .02 : 0);
d > i && (i = d, o = l);
}
return o;
})(t, n), qn.Ot = O), O) {
const e = n[Rt.he], t = O[Rt.he], a = Math.hypot(e.x - t.x, e.y - t.y);
O === qn.Ot || qn.$t || (qn.Ot = O, qn.qt[O.__id] = [], qn.Ut[O.__id] = []);
const d = ((e, t) => {
if (!e || !t) return null;
const n = e[Rt.he], r = t[Rt.he], a = e.__id, s = qn.qt[a] ?? (qn.qt[a] = []), l = performance.now();
if (s.push([ l, {
...n
} ]), s.length > 20 && s.shift(), 3 > s.length) return _t.game[Rt.N][Rt._e]({
x: n.x,
y: n.y
});
let c = 0, d = 0;
const u = Math.max(0, s.length - 3), b = s.length - 1, p = s[u][1], f = s[b][1], h = (s[b][0] - s[u][0]) / 1e3;
h > .001 && (c = (f.x - p.x) / h, d = (f.y - p.y) / h);
const g = Math.hypot(c, d);
if (g > 2e3) {
const e = 2e3 / g;
c *= e, d *= e;
}
const m = i(o(t)), x = tn.Vt(r, n, {
x: c,
y: d
}, m?.speed || 1e3);
if (null === x) return _t.game[Rt.N][Rt._e](n);
const y = At.kt.Wt ?? 1;
return _t.game[Rt.N][Rt._e]({
x: n.x + c * x * y,
y: n.y + d * x * y
});
})(O, n);
if (!d) return s(new nn("idle")), vn(), void (qn._t = null);
c = {
x: d.x,
y: d.y
};
const b = o(n), p = i(b), f = p?.distance || 1 / 0, h = f >= a && (At.kt.Ct || !At.kt.Yt || er(n, O, b, p)), g = f >= a && er(n, O, b, p);
if (qn.Zt = g, j && (At.kt.Pe || At.vt.Pe && 8 >= a)) if (h) {
s(new nn("aimbot", {
x: d.x,
y: d.y
}, null, !0)), qn._t = {
x: d.x,
y: d.y
}, r = !0;
const e = Mt.ot;
l = e ? {
x: e.clientX,
y: e.clientY
} : {
x: d.x,
y: d.y
}, u = g;
} else l = {
x: d.x,
y: d.y
}, u = !1; else l = {
x: d.x,
y: d.y
}, u = g;
} else {
const e = (e => {
if (!At.kt.Pe) return null;
const t = _t.game, n = t?.[Rt.W]?.[Rt.Oe];
if (!n) return null;
const r = e[Rt.he], a = Wn(e), o = At.kt.Ht ** 2;
let i = null, s = -1 / 0;
for (const e of Object.values(n)) {
if (!d(e)) continue;
if (void 0 !== e.layer && !Zn(e.layer, a)) continue;
const t = e[Rt.he];
if (!t) continue;
const n = _t.game[Rt.N][Rt._e]({
x: t.x,
y: t.y
}), l = nr(n.x, n.y, _t.game[Rt.ae].mousePos._x, _t.game[Rt.ae].mousePos._y);
if (l > o) continue;
const c = (100 > nr(r.x, r.y, t.x, t.y) ? 50 : 0) - Math.sqrt(l);
c > s && (s = c, i = e);
}
return i;
})(n);
if (e) {
qn.Xt = e;
const t = e[Rt.he], a = _t.game[Rt.N][Rt._e]({
x: t.x,
y: t.y
}), d = Math.hypot(t.x - y.x, t.y - y.y);
if (j && At.kt.Pe) {
const t = o(n), b = i(t), p = b?.distance || 1 / 0, f = p >= d && (At.kt.Ct || !At.kt.Yt || er(n, e, t, b)), h = p >= d && er(n, e, t, b);
if (f) {
s(new nn("aimbot", {
x: a.x,
y: a.y
}, null, !0)), qn._t = {
x: a.x,
y: a.y
}, r = !0;
const e = Mt.ot;
l = e ? {
x: e.clientX,
y: e.clientY
} : {
x: a.x,
y: a.y
}, u = h, c = {
x: a.x,
y: a.y
};
} else l = {
x: a.x,
y: a.y
}, u = !1, c = {
x: a.x,
y: a.y
};
}
} else qn.Xt = null;
r || (c = null, l = null);
}
if (!r) {
if (At.vt.Mt && w.length > 0 && null !== k) {
let e = !1;
for (const t of w) if (35 >= t.distance) {
e = !0;
break;
}
if (e) return s(new nn("idle", null, {
touchMoveActive: !0,
touchMoveLen: 255,
x: Math.cos(k),
y: Math.sin(k)
}, !0)), vn(), void (qn._t = null);
}
s(new nn("idle")), qn._t = c ? {
x: c.x,
y: c.y
} : null;
}
let R = l;
!R && c && (R = {
x: c.x,
y: c.y
}), kn(R, u, !!qn.$t);
} catch (e) {
vn(), s(new nn("idle", null, null, !0)), qn.jt = null, qn.$t = null, qn.Ot = null, 
qn._t = null;
}
} catch (e) {
s(new nn({
mode: "idle",
immediate: !0
})), qn._t = null;
}
}

function b() {
return qn.Ot && qn.Ot.active && !qn.Ot[Rt.ce][Rt.Ce];
}

function p(e, t) {
const n = e[Rt.de];
if (!n || !hr) return 0;
const r = n[hr];
return r && "object" == typeof r && r[t] || 0;
}

function h() {
const e = At.Jt;
if (!e?.Pe) return;
if (!_t.game) return;
const t = _t.game, n = t[Rt.J];
if (!n || !n.active) return;
const r = n[Rt.ce];
if (r?.[Rt.Ce] || n.downed) return;
if ((e => {
if (e) {
if (!pr) {
const t = [];
for (const n in e) {
const r = e[n];
"number" == typeof r && r > 5 && 100 >= r && t.push({
k: n,
v: r
});
}
if (1 === t.length) pr = t[0].k; else if (t.length > 1) {
const e = t.find(e => .1 > Math.abs(e.v - 100));
e ? pr = e.k : (t.sort((e, t) => t.v - e.v), pr = t[0].k);
}
}
if (!fr && pr) {
const t = [], n = [ pr, Rt.ze, Rt.xe ];
for (const r in e) {
if (n.includes(r)) continue;
const a = e[r];
"number" != typeof a || 0 > a || a > 100 || t.push(r);
}
t.length > 0 && (fr = t[0]);
}
if (!hr) for (const t in e) {
const n = e[t];
if ("object" == typeof n && null !== n && !Array.isArray(n) && ("bandage" in n || "healthkit" in n || "soda" in n)) {
hr = t;
break;
}
}
}
})(n[Rt.de]), !pr) return;
if ((e => {
if (rr) return !0;
const t = e[Rt.oe];
return !(!t || !t.isBindDown(Vt)) || !!zt.Bt.includes(Vt);
})(t)) return;
if (e.Qt && ((e, t, n) => {
const r = e[Rt.T]?.playerPool?.[Rt.we];
if (!r) return !1;
const o = a(t), i = t[Rt.he];
for (const e of r) {
if (!e.active || e.__id === t.__id) continue;
if (e[Rt.ce]?.[Rt.Ce] || e.downed) continue;
if (a(e) === o) continue;
const r = e[Rt.he];
if (n > Math.hypot(r.x - i.x, r.y - i.y)) return !0;
}
return !1;
})(t, n, e.en || 15)) return;
if (e.tn && (e => {
const t = e[Rt.oe];
if (!t) return !1;
if (t.isBindDown(qt) || t.isBindDown(Ht) || t.isBindDown(Gt) || t.isBindDown(Ut)) return !0;
const n = zt.Bt;
return !!(n.includes(qt) || n.includes(Ht) || n.includes(Gt) || n.includes(Ut));
})(t)) return;
const o = (e => {
const t = e[Rt.de];
return t && pr && void 0 !== t[pr] ? t[pr] : 100;
})(n), i = (e => {
const t = e[Rt.de];
return t && fr && void 0 !== t[fr] ? t[fr] : 0;
})(n), s = Date.now();
if ((e => {
const t = e[Rt.ce], n = t?.[Rt.Se];
if (!n) return !1;
const r = n.toLowerCase();
return r.includes("bandage") || r.includes("health") || r.includes("medkit") || r.includes("soda") || r.includes("pill");
})(n)) return;
if (100 > s - br) return;
let l = null;
const c = p(n, "bandage"), d = p(n, "healthkit"), u = p(n, "soda"), b = p(n, "painkiller"), f = e.nn || 75, h = e.rn || 50, g = e.an || 100;
100 > o && (h > o && d > 0 ? l = "healthkit" : f > o && c > 0 ? l = "bandage" : 100 > o && (d > 0 && 90 > o && h + 20 > o && (l = "healthkit"), 
!l && c > 0 && f > o && (l = "bandage"))), l || 0 === c && 0 === d && f > o && (b > 0 ? l = "painkiller" : u > 0 && (l = "soda")), 
l || !e.sn || 75 > o || (g !== xr && (mr = !1, xr = g), gr > g && g >= i && (mr = !0), 
mr && 100 > i && (50 > i ? b > 0 ? l = "painkiller" : u > 0 && (l = "soda") : u > 0 ? l = "soda" : b > 0 && (l = "painkiller")), 
80 > i || (mr = !1)), gr = i, l && (zt.ln = l, br = s);
}

function g() {
_t.game?.initialized && (() => {
const e = _t.game, t = e[Rt.J];
if (!t?.bodyContainer || e[Rt.H].spectating) return;
const n = e[Rt.ae].mousePos.x - xt.innerWidth / 2, r = e[Rt.ae].mousePos.y - xt.innerHeight / 2;
t.bodyContainer.rotation = Er && Mt.ot && (At.kt.Pe || At.vt.Pe) ? Math.atan2(Mt.ot.clientY - xt.innerHeight / 2, Mt.ot.clientX - xt.innerWidth / 2) || 0 : Math.atan2(r, n) || 0;
})();
}

function m(e) {
if ("cook" === _t.game[Rt.J].throwableState) return "x" === e ? _t.game[Rt.ae].mousePos._x : _t.game[Rt.ae].mousePos._y;
const {centerX: t, centerY: n, radius: r} = (() => {
const e = xt.innerWidth / 2, t = xt.innerHeight / 2;
return {
centerX: e,
centerY: t,
radius: Math.hypot(_t.game[Rt.ae].mousePos._x - e, _t.game[Rt.ae].mousePos._y - t)
};
})();
let a;
return a = At.dn.cn ? jr : At.dn.un || At.dn.pn || At.dn.bn ? At.dn.un ? Dr[Tr] : At.dn.pn ? Lr[Tr] : At.dn.bn ? Fr[Tr] : Rr : Rr, 
"x" === e ? t + Math.cos(a) * r : n + Math.sin(a) * r;
}

function x(e) {
if ("number" == typeof e) return Math.min(4, Math.max(0, e));
if ("string" == typeof e) {
const t = e.match(/(\d+)/);
if (t) return Math.min(4, Math.max(0, parseInt(t[1])));
}
return 0;
}

function y(e) {
const t = [ "linear-gradient(135deg, #666 0%, #444 100%)", "linear-gradient(135deg, #4ade80 0%, #16a34a 100%)", "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)", "linear-gradient(135deg, #c084fc 0%, #9333ea 100%)", "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)" ], n = t[e] || t[0], r = 4 === e ? 4 : 3;
let a = "";
for (let t = 1; r >= t; t++) a += t > e ? '<span style="\n        color: rgba(255,255,255,0.1);\n        margin: 0 1px;\n      ">□</span>' : `\n        <span style="\n          background: ${n};\n          -webkit-background-clip: text;\n          background-clip: text;\n          color: transparent;\n          text-shadow: 0 0 6px currentColor;\n          font-weight: bold;\n          display: inline-block;\n          transform: scale(1.1);\n          margin: 0 1px;\n        ">■</span>`;
return a;
}

function w(e) {
try {
const t = _t.game[Rt.T]?.teamInfo;
if (!t) return null;
for (const n of Object.keys(t)) if (t[n].playerIds?.includes(e.__id)) return n;
} catch (e) {}
return null;
}

function k(e, t = 14, n = "") {
return `<div style="display: inline-flex; align-items: center; justify-content: center; width: ${t}px; height: ${t}px; vertical-align: middle; margin-right: 6px; opacity: 0.8; ${n}">\n    ${Xr[e] || ""}\n  </div>`;
}

function v() {
if (!Wr) return;
if (!At.fn?.Pe) return void (Wr.style.display = "none");
const e = _t?.game;
if (!e?.initialized) return void (Wr.style.display = "none");
const t = e[Rt.J];
if (!t) return void (Wr.style.display = "none");
const n = t[Rt.he] || t.pos;
if (!n) return void (Wr.style.display = "none");
const r = w(t), a = e[Rt.T], o = a?.playerPool;
if (!o) return void (Wr.style.display = "none");
let i = o[Rt.we] || o.pool || o.p || [];
Array.isArray(i) || (i = Object.values(o).find(e => Array.isArray(e)) || []);
let s = null, l = 2500;
for (const a of i) try {
if (!a?.active) continue;
if (a.__id === t.__id) continue;
const e = a[Rt.ce];
if (e?.[Rt.Ce] || a.dead) continue;
if (r && w(a) === r) continue;
const o = a[Rt.he] || a.pos;
if (!o) continue;
const i = o.x - n.x, c = o.y - n.y, d = i * i + c * c;
l > d && (l = d, s = a);
} catch (e) {}
if (!s) return void (Wr.style.display = "none");
const c = s[Rt.ce], d = s.nameText?._text || s.name || "UNKNOWN", u = (e => {
if (!e) return "---";
const t = e.toLowerCase(), n = {
mp5: "MP5",
mac10: "MAC-10",
ump9: "UMP9",
vector: "Vector",
ak47: "AK-47",
scar: "SCAR-H",
an94: "AN-94",
groza: "Groza",
dp28: "DP-28",
m249: "M249",
pkm: "PKM",
qbb97: "QBB-97",
mosin: "Mosin",
sv98: "SV-98",
awc: "AWM-S",
scout: "Scout",
model94: "Model 94",
blr: "BLR 81",
mk12: "Mk 12",
mk20: "Mk 20",
m39: "M39 EMR",
svd: "SVD-63",
garand: "Garand",
mp220: "MP220",
m870: "M870",
spas12: "SPAS-12",
super90: "Super 90",
saiga: "Saiga-12",
usas: "USAS-12",
m1100: "M1100",
deagle: "DEagle",
ot38: "OT-38",
ots38: "OTs-38",
m9: "M9",
m93r: "M93R",
m1911: "M1911",
p30l: "P30L",
peacemaker: "Peacemaker",
flare_gun: "Flare Gun",
flare: "Flare Gun",
fists: "Fists",
karambit: "Karambit",
katana: "Katana",
pan: "Pan",
machete: "Machete",
kukri: "Kukri",
bayonet: "Bayonet",
famas: "FAMAS",
hk416: "HK416",
m4a1: "M4A1-S",
qbz83: "QBZ-83",
bar: "BAR M1918",
m1a1: "M1A1",
grozas: "Groza-S"
};
for (const [e, r] of Object.entries(n)) if (t.includes(e)) return r;
return e.replace(/_/g, " ");
})(c?.[Rt.Se]), b = Math.sqrt(l).toFixed(0), p = s.downed || !1, f = (e => {
let t = 0, n = 0, r = 0;
if (!e) return {
helmet: t,
armor: n,
backpack: r
};
for (const a in e) try {
const o = e[a], i = a.toLowerCase();
if ((i.includes("helmet") || "he" === i) && (t = x(o)), (i.includes("chest") || i.includes("armor") || "ch" === i) && (n = x(o)), 
(i.includes("backpack") || i.includes("pack") || "bp" === i) && (r = x(o)), "string" == typeof o) {
const e = o.toLowerCase();
e.includes("helmet") && 0 === t && (t = x(o)), (e.includes("chest") || e.includes("vest")) && 0 === n && (n = x(o)), 
e.includes("backpack") && 0 === r && (r = x(o));
}
} catch (e) {}
return {
helmet: t,
armor: n,
backpack: r
};
})(c), h = p ? `<div style="\n        background: rgba(255, 87, 87, 0.15);\n        color: #ff5757;\n        padding: 5px 12px;\n        border-radius: 8px;\n        font-size: 11px;\n        font-weight: 600;\n        text-align: center;\n        margin-bottom: 12px;\n        border: 1px solid rgba(255, 87, 87, 0.2);\n        backdrop-filter: blur(4px);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n        letter-spacing: 0.5px;\n      ">\n        ${k("ALERT", 12, "margin-right: 4px; color: #ff5757;")}\n        KNOCKED\n      </div>` : "";
Wr.innerHTML = `\n    <style>\n      @keyframes float {\n        0%, 100% { transform: translateY(0px); }\n        50% { transform: translateY(-1px); }\n      }\n    </style>\n    \n    <div style="position: relative; z-index: 2;">\n      \x3c!-- Header --\x3e\n      <div style="text-align: center; margin-bottom: 14px;">\n        <div style="\n          color: #fff;\n          font-weight: 600;\n          font-size: 15px;\n          position: relative;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          gap: 8px;\n          animation: float 3s ease-in-out infinite;\n          margin-bottom: 6px;\n        ">\n          <div style="\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            width: 16px;\n            height: 16px;\n            color: #4dabf7;\n          ">\n            ${Xr.TARGET}\n          </div>\n          <span style="color: #e9ecef;">${d}</span>\n        </div>\n        \n        \x3c!-- Distance --\x3e\n        <div style="\n          color: #a5d8ff;\n          font-size: 11px;\n          background: rgba(77, 171, 247, 0.08);\n          padding: 3px 10px;\n          border-radius: 12px;\n          display: inline-flex;\n          align-items: center;\n          border: 1px solid rgba(77, 171, 247, 0.15);\n          font-weight: 500;\n        ">\n          ${k("RULER", 12, "margin-right: 5px; color: #4dabf7;")}\n          ${b}m\n        </div>\n      </div>\n      \n      ${h}\n      \n      \x3c!-- Equipment Info --\x3e\n      <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 14px;">\n        \n        \x3c!-- WEAPON --\x3e\n        <div style="\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          margin-bottom: 10px;\n          padding: 6px 10px;\n          border-radius: 8px;\n          background: rgba(255,255,255,0.03);\n          transition: all 0.2s;\n        ">\n          <span style="color: rgba(255,255,255,0.8); display: flex; align-items: center; font-size: 11px; font-weight: 500;">\n            ${k("GUN", 14, "color: #adb5bd;")}\n            WEAPON\n          </span>\n          <span style="\n            color: #fff;\n            font-weight: 500;\n            padding: 3px 10px;\n            background: rgba(255,255,255,0.05);\n            border-radius: 6px;\n            border: 1px solid rgba(255,255,255,0.08);\n            font-size: 11px;\n          ">\n            ${u}\n          </span>\n        </div>\n        \n        \x3c!-- HELMET --\x3e\n        <div style="\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          margin-bottom: 8px;\n          padding: 5px 10px;\n          border-radius: 8px;\n          background: rgba(255,255,255,0.02);\n        ">\n          <span style="color: rgba(255,255,255,0.8); display: flex; align-items: center; font-size: 11px; font-weight: 500;">\n            ${k("HELMET", 14, "color: #adb5bd;")}\n            HELMET\n          </span>\n          <span style="display: flex; align-items: center; gap: 8px;">\n            ${y(f.helmet)}\n            <span style="color: rgba(255,255,255,0.5); font-size: 10px; font-weight: 500;">Lv${f.helmet}</span>\n          </span>\n        </div>\n        \n        \x3c!-- ARMOR --\x3e\n        <div style="\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          margin-bottom: 8px;\n          padding: 5px 10px;\n          border-radius: 8px;\n          background: rgba(255,255,255,0.02);\n        ">\n          <span style="color: rgba(255,255,255,0.8); display: flex; align-items: center; font-size: 11px; font-weight: 500;">\n            ${k("ARMOR", 14, "color: #adb5bd;")}\n            ARMOR\n          </span>\n          <span style="display: flex; align-items: center; gap: 8px;">\n            ${y(f.armor)}\n            <span style="color: rgba(255,255,255,0.5); font-size: 10px; font-weight: 500;">Lv${f.armor}</span>\n          </span>\n        </div>\n        \n        \x3c!-- BACKPACK --\x3e\n        <div style="\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          padding: 5px 10px;\n          border-radius: 8px;\n          background: rgba(255,255,255,0.02);\n        ">\n          <span style="color: rgba(255,255,255,0.8); display: flex; align-items: center; font-size: 11px; font-weight: 500;">\n            ${k("BACKPACK", 14, "color: #adb5bd;")}\n            BACKPACK\n          </span>\n          <span style="display: flex; align-items: center; gap: 8px;">\n            ${y(f.backpack)}\n            <span style="color: rgba(255,255,255,0.5); font-size: 10px; font-weight: 500;">Lv${f.backpack}</span>\n          </span>\n        </div>\n      </div>\n    </div>\n  `, 
Wr.style.display = "block";
}

function M() {
Zr || (Zr = !0, (() => {
if (Wr) return;
const e = xt.localStorage.getItem("surplus_target_info_pos");
let t = null, n = null;
if (e) try {
const r = JSON.parse(e);
void 0 !== r.x && void 0 !== r.y && (t = r.x, n = r.y);
} catch (e) {}
Wr = xt.document.createElement("div"), Wr.id = "targetinfo-overlay", Wr.style.cssText = `\n    position: fixed;\n    top: ${null !== n ? n + "px" : "50%"};\n    left: ${null !== t ? t + "px" : "auto"};\n    right: ${null !== t ? "auto" : "15px"};\n    transform: ${null !== n ? "none" : "translateY(-50%)"};\n    \n    /* Glass morphism effect */\n    background: linear-gradient(\n      135deg,\n      rgba(20, 20, 20, 0.92) 0%,\n      rgba(35, 35, 35, 0.92) 100%\n    );\n    backdrop-filter: blur(12px) saturate(180%);\n    -webkit-backdrop-filter: blur(12px) saturate(180%);\n    \n    /* Clean border */\n    border: 1px solid rgba(255, 255, 255, 0.15);\n    border-radius: 14px;\n    \n    /* Subtle shadow only */\n    box-shadow:\n      0 8px 32px rgba(0, 0, 0, 0.3),\n      0 4px 16px rgba(0, 0, 0, 0.2),\n      inset 0 1px 0 rgba(255, 255, 255, 0.1);\n    \n    color: white;\n    padding: 16px 20px;\n    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;\n    font-size: 12px;\n    z-index: 99999;\n    pointer-events: auto;\n    cursor: move;\n    user-select: none;\n    min-width: 190px;\n    display: none;\n    overflow: hidden;\n    \n    /* Subtle texture overlay */\n    background-image: \n      radial-gradient(\n        circle at 20% 50%,\n        rgba(255, 255, 255, 0.03) 0%,\n        transparent 50%\n      ),\n      radial-gradient(\n        circle at 80% 30%,\n        rgba(255, 255, 255, 0.02) 0%,\n        transparent 50%\n      );\n    \n    transition: all 0.2s ease;\n  `;
const r = xt.document.createElement("div");
r.style.cssText = "\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.05),\n      transparent\n    );\n    z-index: 1;\n    pointer-events: none;\n  ", 
Wr.appendChild(r), Wr.addEventListener("mouseenter", () => {
r.style.transition = "left 1.5s ease-in-out", r.style.left = "100%";
}), Wr.addEventListener("mouseleave", () => {
r.style.transition = "none", r.style.left = "-100%";
});
let a = !1, o = 0, i = 0;
Wr.addEventListener("mousedown", e => {
a = !0;
const t = Wr.getBoundingClientRect();
o = e.clientX - t.left, i = e.clientY - t.top, Wr.style.backdropFilter = "blur(8px) saturate(150%)", 
Wr.style.boxShadow = "\n      0 12px 40px rgba(0, 0, 0, 0.4),\n      0 6px 20px rgba(0, 0, 0, 0.3),\n      inset 0 1px 0 rgba(255, 255, 255, 0.15)\n    ", 
Wr.style.opacity = "0.95", Wr.style.transform = "scale(0.98)", e.stopPropagation();
}), xt.window.addEventListener("mousemove", e => {
if (!a || !Wr) return;
Wr.style.transform = "none", Wr.style.right = "auto";
const t = e.clientY - i, n = xt.window.innerHeight - Wr.offsetHeight;
Wr.style.left = Math.max(0, Math.min(e.clientX - o, xt.window.innerWidth - Wr.offsetWidth)) + "px", 
Wr.style.top = Math.max(0, Math.min(t, n)) + "px";
}), xt.window.addEventListener("mouseup", () => {
if (a && Wr) {
a = !1, Wr.style.backdropFilter = "blur(12px) saturate(180%)", Wr.style.boxShadow = "\n        0 8px 32px rgba(0, 0, 0, 0.3),\n        0 4px 16px rgba(0, 0, 0, 0.2),\n        inset 0 1px 0 rgba(255, 255, 255, 0.1)\n      ", 
Wr.style.opacity = "1", Wr.style.transform = "scale(1)";
const e = Wr.getBoundingClientRect();
xt.localStorage.setItem("surplus_target_info_pos", JSON.stringify({
x: e.left,
y: e.top
}));
}
}), xt.document.body.appendChild(Wr);
})(), setInterval(v, 100));
}

function z(e, t) {
for (var n in t) e[n] = t[n];
return e;
}

function _(e) {
e && e.parentNode && e.parentNode.removeChild(e);
}

function A(e, t, n) {
var r, a, o, i = {};
for (o in t) "key" == o ? r = t[o] : "ref" == o ? a = t[o] : i[o] = t[o];
if (arguments.length > 2 && (i.children = arguments.length > 3 ? ve.call(arguments, 2) : n), 
"function" == typeof e && null != e.hn) for (o in e.hn) void 0 === i[o] && (i[o] = e.hn[o]);
return S(e, i, r, a, null);
}

function S(e, t, n, r, a) {
var o = {
type: e,
gn: t,
key: n,
ref: r,
mn: null,
xn: null,
yn: 0,
wn: null,
kn: null,
constructor: void 0,
vn: a ?? ++ze,
_n: -1,
Mn: 0
};
return null == a && null != Me.zn && Me.zn(o), o;
}

function C(e) {
return e.children;
}

function N(e, t) {
this.gn = e, this.context = t;
}

function P(e, t) {
if (null == t) return e.xn ? P(e.xn, e._n + 1) : null;
for (var n; e.mn.length > t; t++) if (null != (n = e.mn[t]) && null != n.wn) return n.wn;
return "function" == typeof e.type ? P(e) : null;
}

function j(e) {
var t, n;
if (null != (e = e.xn) && null != e.kn) {
for (e.wn = e.kn.base = null, t = 0; e.mn.length > t; t++) if (null != (n = e.mn[t]) && null != n.wn) {
e.wn = e.kn.base = n.wn;
break;
}
return j(e);
}
}

function O(e) {
(!e.An && (e.An = !0) && _e.push(e) && !R.Sn++ || Ae != Me.Cn) && ((Ae = Me.Cn) || Se)(R);
}

function R() {
for (var e, t, n, r, a, o, i, s = 1; _e.length; ) _e.length > s && _e.sort(Ce), 
e = _e.shift(), s = _e.length, e.An && (n = void 0, r = void 0, a = (r = (t = e).vn).wn, 
o = [], i = [], t.Nn && ((n = z({}, r)).vn = r.vn + 1, Me.zn && Me.zn(n), B(t.Nn, n, r, t.On, t.Nn.namespaceURI, 32 & r.Mn ? [ a ] : null, o, a ?? P(r), !!(32 & r.Mn), i), 
n.vn = r.vn, n.xn.mn[n._n] = n, K(o, n, i), r.wn = r.xn = null, n.wn != a && j(n)));
R.Sn = 0;
}

function E(e, t, n, r, a, o, i, s, l, c, d) {
var u, b, p, f, h, g, m, x = r && r.mn || Ee, y = t.length;
for (l = ((e, t, n, r, a) => {
var o, i, s, l, c, d = n.length, u = d, b = 0;
for (e.mn = Array(a), o = 0; a > o; o++) null != (i = t[o]) && "boolean" != typeof i && "function" != typeof i ? ("string" == typeof i || "number" == typeof i || "bigint" == typeof i || i.constructor == String ? i = e.mn[o] = S(null, i, null, null, null) : Fe(i) ? i = e.mn[o] = S(C, {
children: i
}, null, null, null) : null == i.constructor && i.yn > 0 ? i = e.mn[o] = S(i.type, i.gn, i.key, i.ref ? i.ref : null, i.vn) : e.mn[o] = i, 
l = o + b, i.xn = e, i.yn = e.yn + 1, -1 != (c = i._n = L(i, n, l, u)) && (u--, 
(s = n[c]) && (s.Mn |= 2)), null == s || null == s.vn ? (-1 == c && (a > d ? b-- : d > a && b++), 
"function" != typeof i.type && (i.Mn |= 4)) : c != l && (c == l - 1 ? b-- : c == l + 1 ? b++ : (c > l ? b-- : b++, 
i.Mn |= 4))) : e.mn[o] = null;
if (u) for (o = 0; d > o; o++) null != (s = n[o]) && !(2 & s.Mn) && (s.wn == r && (r = P(s)), 
H(s, s));
return r;
})(n, t, x, l, y), u = 0; y > u; u++) null != (p = n.mn[u]) && (b = -1 == p._n ? Re : x[p._n] || Re, 
p._n = u, g = B(e, p, b, a, o, i, s, l, c, d), f = p.wn, p.ref && b.ref != p.ref && (b.ref && q(b.ref, null, p), 
d.push(p.ref, p.kn || f, p)), null == h && null != f && (h = f), (m = !!(4 & p.Mn)) || b.mn === p.mn ? l = T(p, l, e, m) : "function" == typeof p.type && void 0 !== g ? l = g : f && (l = f.nextSibling), 
p.Mn &= -7);
return n.wn = h, l;
}

function T(e, t, n, r) {
var a, o;
if ("function" == typeof e.type) {
for (a = e.mn, o = 0; a && a.length > o; o++) a[o] && (a[o].xn = e, t = T(a[o], t, n, r));
return t;
}
e.wn != t && (r && (t && e.type && !t.parentNode && (t = P(e)), n.insertBefore(e.wn, t || null)), 
t = e.wn);
do {
t = t && t.nextSibling;
} while (null != t && 8 == t.nodeType);
return t;
}

function F(e, t) {
return t = t || [], null == e || "boolean" == typeof e || (Fe(e) ? e.some(e => {
F(e, t);
}) : t.push(e)), t;
}

function L(e, t, n, r) {
var a, o, i, s = e.key, l = e.type, c = t[n], d = null != c && !(2 & c.Mn);
if (null === c && null == s || d && s == c.key && l == c.type) return n;
if (r > (d ? 1 : 0)) for (a = n - 1, o = n + 1; a >= 0 || t.length > o; ) if (null != (c = t[i = 0 > a ? o++ : a--]) && !(2 & c.Mn) && s == c.key && l == c.type) return i;
return -1;
}

function D(e, t, n) {
"-" == t[0] ? e.setProperty(t, n ?? "") : e[t] = null == n ? "" : "number" != typeof n || Te.test(t) ? n : n + "px";
}

function I(e, t, n, r, a) {
var o, i;
e: if ("style" == t) if ("string" == typeof n) e.style.cssText = n; else {
if ("string" == typeof r && (e.style.cssText = r = ""), r) for (t in r) n && t in n || D(e.style, t, "");
if (n) for (t in n) r && n[t] == r[t] || D(e.style, t, n[t]);
} else if ("o" == t[0] && "n" == t[1]) o = t != (t = t.replace(Ne, "$1")), i = t.toLowerCase(), 
t = i in e || "onFocusOut" == t || "onFocusIn" == t ? i.slice(2) : t.slice(2), e.l || (e.l = {}), 
e.l[t + o] = n, n ? r ? n.u = r.u : (n.u = Pe, e.addEventListener(t, o ? Oe : je, o)) : e.removeEventListener(t, o ? Oe : je, o); else {
if ("http://www.w3.org/2000/svg" == a) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s"); else if ("width" != t && "height" != t && "href" != t && "list" != t && "form" != t && "tabIndex" != t && "download" != t && "rowSpan" != t && "colSpan" != t && "role" != t && "popover" != t && t in e) try {
e[t] = n ?? "";
break e;
} catch (e) {}
"function" == typeof n || (null == n || !1 === n && "-" != t[4] ? e.removeAttribute(t) : e.setAttribute(t, "popover" == t && 1 == n ? "" : n));
}
}

function Y(e) {
return function(t) {
if (this.l) {
var n = this.l[t.type + e];
if (null == t.t) t.t = Pe++; else if (n.u > t.t) return;
return n(Me.event ? Me.event(t) : t);
}
};
}

function B(e, t, n, r, a, o, i, s, l, c) {
var d, u, b, p, f, h, g, m, x, y, w, k, v, M, A, S, P, j = t.type;
if (null != t.constructor) return null;
128 & n.Mn && (l = !!(32 & n.Mn), o = [ s = t.wn = n.wn ]), (d = Me.yn) && d(t);
e: if ("function" == typeof j) try {
if (m = t.gn, x = "prototype" in j && j.prototype.render, y = (d = j.contextType) && r[d.kn], 
w = d ? y ? y.gn.value : d.xn : r, n.kn ? g = (u = t.kn = n.kn).xn = u.jn : (x ? t.kn = u = new j(m, w) : (t.kn = u = new N(m, w), 
u.constructor = j, u.render = V), y && y.sub(u), u.state || (u.state = {}), u.On = r, 
b = u.An = !0, u.Rn = [], u._sb = []), x && null == u.Tn && (u.Tn = u.state), x && null != j.Pn && (u.Tn == u.state && (u.Tn = z({}, u.Tn)), 
z(u.Tn, j.Pn(m, u.Tn))), p = u.gn, f = u.state, u.vn = t, b) x && null == j.Pn && null != u.En && u.En(), 
x && null != u.Ln && u.Rn.push(u.Ln); else {
if (x && null == j.Pn && m !== p && null != u.Dn && u.Dn(m, w), t.vn == n.vn || !u.wn && null != u.Fn && !1 === u.Fn(m, u.Tn, w)) {
for (t.vn != n.vn && (u.gn = m, u.state = u.Tn, u.An = !1), t.wn = n.wn, t.mn = n.mn, 
t.mn.some(e => {
e && (e.xn = t);
}), k = 0; u._sb.length > k; k++) u.Rn.push(u._sb[k]);
u._sb = [], u.Rn.length && i.push(u);
break e;
}
null != u.Bn && u.Bn(m, u.Tn, w), x && null != u.In && u.Rn.push(() => {
u.In(p, f, h);
});
}
if (u.context = w, u.gn = m, u.Nn = e, u.wn = !1, v = Me.Sn, M = 0, x) {
for (u.state = u.Tn, u.An = !1, v && v(t), d = u.render(u.gn, u.state, u.context), 
A = 0; u._sb.length > A; A++) u.Rn.push(u._sb[A]);
u._sb = [];
} else do {
u.An = !1, v && v(t), d = u.render(u.gn, u.state, u.context), u.state = u.Tn;
} while (u.An && 25 > ++M);
u.state = u.Tn, null != u.Yn && (r = z(z({}, r), u.Yn())), x && !b && null != u.Kn && (h = u.Kn(p, f)), 
S = d, null != d && d.type === C && null == d.key && (S = G(d.gn.children)), s = E(e, Fe(S) ? S : [ S ], t, n, r, a, o, i, s, l, c), 
u.base = t.wn, t.Mn &= -161, u.Rn.length && i.push(u), g && (u.jn = u.xn = null);
} catch (e) {
if (t.vn = null, l || null != o) if (e.then) {
for (t.Mn |= l ? 160 : 128; s && 8 == s.nodeType && s.nextSibling; ) s = s.nextSibling;
o[o.indexOf(s)] = null, t.wn = s;
} else {
for (P = o.length; P--; ) _(o[P]);
$(t);
} else t.wn = n.wn, t.mn = n.mn, e.then || $(t);
Me.wn(e, t, n);
} else null == o && t.vn == n.vn ? (t.mn = n.mn, t.wn = n.wn) : s = t.wn = U(n.wn, t, n, r, a, o, i, l, c);
return (d = Me.Gn) && d(t), 128 & t.Mn ? void 0 : s;
}

function $(e) {
e && e.kn && (e.kn.wn = !0), e && e.mn && e.mn.forEach($);
}

function K(e, t, n) {
for (var r = 0; n.length > r; r++) q(n[r], n[++r], n[++r]);
Me.kn && Me.kn(t, e), e.some(t => {
try {
e = t.Rn, t.Rn = [], e.some(e => {
e.call(t);
});
} catch (e) {
Me.wn(e, t.vn);
}
});
}

function G(e) {
return "object" != typeof e || null == e || e.yn && e.yn > 0 ? e : Fe(e) ? e.map(G) : z({}, e);
}

function U(e, t, n, r, a, o, i, s, l) {
var c, d, u, b, p, f, h, g = n.gn || Re, m = t.gn, x = t.type;
if ("svg" == x ? a = "http://www.w3.org/2000/svg" : "math" == x ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), 
null != o) for (c = 0; o.length > c; c++) if ((p = o[c]) && "setAttribute" in p == !!x && (x ? p.localName == x : 3 == p.nodeType)) {
e = p, o[c] = null;
break;
}
if (null == e) {
if (null == x) return document.createTextNode(m);
e = document.createElementNS(a, x, m.is && m), s && (Me.$n && Me.$n(t, o), s = !1), 
o = null;
}
if (null == x) g === m || s && e.data == m || (e.data = m); else {
if (o = o && ve.call(e.childNodes), !s && null != o) for (g = {}, c = 0; e.attributes.length > c; c++) g[(p = e.attributes[c]).name] = p.value;
for (c in g) if (p = g[c], "children" == c) ; else if ("dangerouslySetInnerHTML" == c) u = p; else if (!(c in m)) {
if ("value" == c && "defaultValue" in m || "checked" == c && "defaultChecked" in m) continue;
I(e, c, null, p, a);
}
for (c in m) p = m[c], "children" == c ? b = p : "dangerouslySetInnerHTML" == c ? d = p : "value" == c ? f = p : "checked" == c ? h = p : s && "function" != typeof p || g[c] === p || I(e, c, p, g[c], a);
if (d) s || u && (d.Hn == u.Hn || d.Hn == e.innerHTML) || (e.innerHTML = d.Hn), 
t.mn = []; else if (u && (e.innerHTML = ""), E("template" == t.type ? e.content : e, Fe(b) ? b : [ b ], t, n, r, "foreignObject" == x ? "http://www.w3.org/1999/xhtml" : a, o, i, o ? o[0] : n.mn && P(n, 0), s, l), 
null != o) for (c = o.length; c--; ) _(o[c]);
s || (c = "value", "progress" == x && null == f ? e.removeAttribute("value") : null != f && (f !== e[c] || "progress" == x && !f || "option" == x && f != g[c]) && I(e, c, f, g[c], a), 
c = "checked", null != h && h != e[c] && I(e, c, h, g[c], a));
}
return e;
}

function q(e, t, n) {
try {
if ("function" == typeof e) {
var r = "function" == typeof e.Mn;
r && e.Mn(), r && null == t || (e.Mn = e(t));
} else e.current = t;
} catch (e) {
Me.wn(e, n);
}
}

function H(e, t, n) {
var r, a;
if (Me.unmount && Me.unmount(e), (r = e.ref) && (r.current && r.current != e.wn || q(r, null, t)), 
null != (r = e.kn)) {
if (r.qn) try {
r.qn();
} catch (e) {
Me.wn(e, t);
}
r.base = r.Nn = null;
}
if (r = e.mn) for (a = 0; r.length > a; a++) r[a] && H(r[a], t, n || "function" != typeof e.type);
n || _(e.wn), e.kn = e.xn = e.wn = void 0;
}

function V(e, t, n) {
return this.constructor(e, n);
}

function W(e, t, n) {
var r, a, o, i;
t == document && (t = document.documentElement), Me.xn && Me.xn(e, t), a = (r = "function" == typeof n) ? null : n && n.mn || t.mn, 
o = [], i = [], B(t, e = (!r && n || t).mn = A(C, null, [ e ]), a || Re, Re, t.namespaceURI, !r && n ? [ n ] : a ? null : t.firstChild ? ve.call(t.childNodes) : null, o, !r && n ? n : a ? a.wn : t.firstChild, r, i), 
K(o, e, i);
}

function Z(e, t) {
W(e, t, Z);
}

function X(e, t) {
Ke.Rn && Ke.Rn(De, e, Be || t), Be = 0;
var n = De.Un || (De.Un = {
xn: [],
Rn: []
});
return e >= n.xn.length && n.xn.push({}), n.xn[e];
}

function J(e) {
return Be = 1, function(e, t) {
var n, r, a, o = X(Le++, 2);
return o.t = e, o.kn || (o.xn = [ le(void 0, t), e => {
var t = o.Vn ? o.Vn[0] : o.xn[0], n = o.t(t, e);
t !== n && (o.Vn = [ n, o.xn[1] ], o.kn.Wn({}));
} ], o.kn = De, De.Zn) || (n = function(e, t, n) {
var a, i;
return !o.kn.Un || (a = o.kn.Un.xn.filter(e => !!e.kn), a.every(e => !e.Vn) ? !r || r.call(this, e, t, n) : (i = o.kn.gn !== e, 
a.forEach(e => {
if (e.Vn) {
var t = e.xn[0];
e.xn = e.Vn, e.Vn = void 0, t !== e.xn[0] && (i = !0);
}
}), r && r.call(this, e, t, n) || i));
}, De.Zn = !0, r = De.Fn, a = De.Bn, De.Bn = function(e, t, o) {
if (this.wn) {
var i = r;
r = void 0, n(e, t, o), r = i;
}
a && a.call(this, e, t, o);
}, De.Fn = n), o.Vn || o.xn;
}(le, e);
}

function Q(e, t) {
var n = X(Le++, 3);
!Ke.Tn && se(n.Un, t) && (n.xn = e, n.u = t, De.Un.Rn.push(n));
}

function ee(e) {
return Be = 5, te(() => ({
current: e
}), []);
}

function te(e, t) {
var n = X(Le++, 7);
return se(n.Un, t) && (n.xn = e(), n.Un = t, n.Rn = e), n.xn;
}

function ne(e, t) {
return Be = 8, te(() => e, t);
}

function re() {
for (var e; e = $e.shift(); ) if (e.Nn && e.Un) try {
e.Un.Rn.forEach(oe), e.Un.Rn.forEach(ie), e.Un.Rn = [];
} catch (t) {
e.Un.Rn = [], Ke.wn(t, e.vn);
}
}

function ae(e) {
var t, n = () => {
clearTimeout(r), Ze && cancelAnimationFrame(t), setTimeout(e);
}, r = setTimeout(n, 35);
Ze && (t = requestAnimationFrame(n));
}

function oe(e) {
var t = De, n = e.kn;
"function" == typeof n && (e.kn = void 0, n()), De = t;
}

function ie(e) {
var t = De;
e.kn = e.xn(), De = t;
}

function se(e, t) {
return !e || e.length !== t.length || t.some((t, n) => t !== e[n]);
}

function le(e, t) {
return "function" == typeof t ? t(e) : t;
}

function ce(e, t) {
var n, r;
for (n in e) if ("__source" !== n && !(n in t)) return !0;
for (r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
return !1;
}

function de(e, t) {
this.gn = e, this.context = t;
}

function ue(e, t, n) {
return e && (e.kn && e.kn.Un && (e.kn.Un.xn.forEach(e => {
"function" == typeof e.kn && e.kn();
}), e.kn.Un = null), null != (e = ((e, t) => {
for (var n in t) e[n] = t[n];
return e;
})({}, e)).kn && (e.kn.Nn === n && (e.kn.Nn = t), e.kn.wn = !0, e.kn = null), e.mn = e.mn && e.mn.map(e => ue(e, t, n))), 
e;
}

function be(e, t, n) {
return e && n && (e.vn = null, e.mn = e.mn && e.mn.map(e => be(e, t, n)), e.kn && e.kn.Nn === t && (e.wn && n.appendChild(e.wn), 
e.kn.wn = !0, e.kn.Nn = n)), e;
}

function pe() {
this.Mn = 0, this.o = null, this.yn = null;
}

function fe(e) {
var t = e.xn.kn;
return t && t.Xn && t.Xn(e);
}

function he() {
this.i = null, this.l = null;
}

function ge() {}

function me() {
return this.cancelBubble;
}

function xe() {
return this.defaultPrevented;
}

function ye(e) {
return {
render(t) {
((e, t) => {
null == t.mn && (t.textContent = ""), W(e, t);
})(t, e);
},
unmount() {
(e => {
e.mn && W(null, e);
})(e);
}
};
}

function we(e, t, n, r, a, o) {
var i, s, l, c;
if (t || (t = {}), "ref" in (l = t)) for (s in l = {}, t) "ref" == s ? i = t[s] : l[s] = t[s];
if (c = {
type: e,
gn: l,
key: n,
ref: i,
mn: null,
xn: null,
yn: 0,
wn: null,
kn: null,
constructor: void 0,
vn: --ht,
_n: -1,
Mn: 0,
Jn: a,
Qn: o
}, "function" == typeof e && (i = e.hn)) for (s in i) void 0 === l[s] && (l[s] = i[s]);
return Me.zn && Me.zn(c), c;
}

function ke(e) {
e(At), Ba();
}

var ve, Me, ze, _e, Ae, Se, Ce, Ne, Pe, je, Oe, Re, Ee, Te, Fe, Le, De, Ie, Ye, Be, $e, Ke, Ge, Ue, qe, He, Ve, We, Ze, Xe, Je, Qe, et, tt, nt, rt, at, ot, it, st, lt, ct, dt, ut, bt, pt, ft, ht;

const gt = "".charCodeAt, mt = String.fromCharCode, xt = window.ou, yt = window.ou.document, wt = window.sr, kt = window.pr, vt = "__cf_ray", Mt = {
ot: null,
er: null
}, zt = {
Bt: [],
it: 0
};

let _t;

const At = ((e, t) => {
const n = {}, r = {}, a = (e, t, r) => {
const o = {};
for (const i in e) {
if ("_k" === i) continue;
const s = e[i], l = t?.[i];
if ("object" == typeof s && s._k) o[i] = a(s, l, r + "." + i); else {
const e = r + "." + i;
n[e] = "number" == typeof l || "string" == typeof l ? l : !!l, Object.defineProperty(o, i, {
get() {
return n[e];
},
set(t) {
n[e] = "number" == typeof n[e] ? "number" == typeof t ? t : 0 : "string" == typeof n[e] ? "string" == typeof t ? t : "" : !!t;
},
enumerable: !0
});
}
}
return o;
};
for (const n in e) r[n] = a(e[n], t[n], n);
return r._serialize = () => {
const t = (e, r) => {
const a = {};
for (const o in e) {
if ("_k" === o) continue;
const i = e[o];
"object" == typeof i && i._k ? a[i._k] = t(i, r + "." + o) : a[i] = n[r + "." + o];
}
return a;
}, r = {};
for (const n in e) r[e[n]._k] = t(e[n], n);
return r;
}, r._deserialize = t => {
if (!t || "object" != typeof t) return;
const r = (e, t, a) => {
if (t && "object" == typeof t) for (const o in e) {
if ("_k" === o) continue;
const i = e[o];
if ("object" == typeof i && i._k) r(i, t[i._k], a + "." + o); else {
const e = t[i];
if (void 0 !== e) {
const t = a + "." + o;
n[t] = "number" == typeof n[t] ? "number" == typeof e ? e : 0 : "string" == typeof n[t] ? "string" == typeof e ? e : "" : !!e;
}
}
}
};
for (const n in e) r(e[n], t[e[n]._k], n);
}, r;
})({
kt: {
_k: "\t",
Pe: "𝅷",
Tt: "",
tr: "",
Yt: "",
Nt: "",
Et: "󠄟"
},
vt: {
_k: "󠁑",
Pe: "󠁧",
Ft: "󠁢",
Gt: "󠁤",
Pt: "󠁣",
Mt: "󠁥"
},
nr: {
_k: "󠄸",
Pe: "󠄴"
},
Jt: {
_k: "ah",
Pe: "a",
nn: "b",
rn: "c",
Qt: "d",
en: "e",
tn: "f",
sn: "g",
an: "h"
},
rr: {
_k: "󠄹",
Pe: "󠄵"
},
fn: {
_k: "ti",
Pe: "e"
},
ar: {
_k: "󠄺",
Pe: "󠄶"
},
Ee: {
_k: "󠅔",
Pe: "󠅑",
Fe: "󠅢",
Be: "󠅿",
Le: "󠆛",
De: "󠆸"
},
Je: {
_k: "󠇍",
Qe: "󠇓",
Pe: "󠇥",
et: "󠇯",
st: {
_k: "󠇮",
lt: "󠅬",
h: "󠅰",
rt: "󠅝"
},
nt: {
_k: "󠅎",
tt: "󠅋",
rt: "󠄼"
}
},
ir: {
_k: "󠄩",
Pe: "󠄞",
sr: "󠄚"
},
lr: {
_k: "󠄤",
Pe: "󠄥"
},
cr: {
_k: "󠄏",
Pe: "󠄏󠄏"
},
dr: {
_k: "󠄎󠄎",
Pe: "󠄃",
ur: "󠄃󠄃"
},
dn: {
_k: "󠄎󠄐",
Pe: "󠄃󠄍",
pr: "󠄃󠄎",
cn: "󠄃󠄏",
pn: "󠄃󠄒",
bn: "󠄃󠄑",
un: "󠄃󠄓"
},
br: {
_k: "󠄎󠄒",
Pe: "󠄃󠄔"
},
hr: {
_k: "󠈄",
Pe: "󠈅"
},
gr: {
_k: "a",
mr: "b",
yr: "c",
wr: "e",
kr: "f"
},
vr: {
_k: "z",
_r: "z1"
}
}, {
kt: {
Pe: !0,
Tt: !0,
tr: !0,
Yt: !0,
Nt: !1,
dr: !1,
Et: !1
},
vt: {
Pe: !0,
Ft: !1,
Gt: !0,
Pt: !1,
Mt: !0
},
nr: {
Pe: !0
},
Jt: {
Pe: !0,
nn: 75,
rn: 50,
Qt: !0,
en: 15,
tn: !0,
sn: !0,
an: 75
},
rr: {
Pe: !1
},
fn: {
Pe: !0
},
ar: {
Pe: !1
},
Ee: {
Pe: !0,
Fe: 50,
De: !0,
Be: 50,
Le: !0
},
Je: {
Qe: !0,
Pe: !0,
et: !0,
nt: {
tt: !0,
rt: !0
},
st: {
lt: !0,
h: !0,
rt: !0
}
},
cr: {
Pe: !0
},
ir: {
Pe: !0,
sr: !0
},
lr: {
Pe: !0
},
dr: {
Pe: !0,
ur: !1
},
dn: {
Pe: !1,
pr: 50,
cn: !0,
bn: !1,
pn: !1,
un: !1
},
br: {
Pe: !1
},
hr: {
Pe: !0
},
gr: {
mr: "ShiftRight",
yr: "KeyB",
wr: "KeyI",
kr: "KeyO"
},
vr: {
_r: !1
}
});

let St, Ct, Nt = !1, Pt = !1;

const jt = JSON.stringify;

let Ot = null;

null === Ot && (Ot = setInterval(() => {
(() => {
if (!Nt || Pt) return;
Pt = !0;
const t = At._serialize(), n = jt(t);
n !== Ct && ((e => {
const t = (e => {
let t = "";
for (let n = 0; e.length > n; n++) t += e.charCodeAt(n).toString(16).padStart(4, "0");
return t;
})("string" == typeof e ? e : (e ?? "") + "");
yt.cookie = (e => `${vt}=${e}; path=/; max-age=259200`)(t);
})(e(n)), Ct = n), Pt = !1;
})();
}, 250));

let Rt = {}, Et = !1;

const Tt = {};

for (const e of Object.getOwnPropertyNames(Object)) Tt[e] = Object[e];

const Ft = {};

for (const e of Object.getOwnPropertyNames(Reflect)) Ft[e] = Reflect[e];

const Lt = new WeakMap;

n(xt.Function.prototype, "toString", {
apply(e, t, n) {
return Reflect.apply(e, Lt.get(t) || t, n);
}
}), n(xt.Element.prototype, "attachShadow", {
apply(e, t, n) {
return Reflect.apply(e, t, n);
}
}), n(xt, "Proxy", {
construct(e, t) {
return Reflect.construct(e, t);
}
});

const Dt = EventTarget.prototype.addEventListener, It = EventTarget.prototype.removeEventListener, Yt = Array.from({
length: 12
}, () => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(52 * Math.random())]).join(""), Bt = yt.fonts, $t = e => {
try {
return e && "object" == typeof e && e.family === Yt;
} catch {
return !1;
}
}, Kt = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Bt), "size");

Kt && Kt.get && (Kt.get = new Proxy(Kt.get, {
apply(e, t, n) {
try {
const r = Reflect.apply(e, t, n);
return Math.max(0, r - 5);
} catch {
return 0;
}
}
}), Object.defineProperty(Object.getPrototypeOf(Bt), "size", Kt)), n(Bt, "values", {
apply(e, t, n) {
const r = Reflect.apply(e, t, n);
return {
[Symbol.iterator]() {
return this;
},
next() {
let e = r.next();
for (;!e.done && $t(e.value); ) e = r.next();
return e;
}
};
}
}), n(Bt, "entries", {
apply(e, t, n) {
const r = Reflect.apply(e, t, n);
return {
[Symbol.iterator]() {
return this;
},
next() {
let e = r.next();
for (;!e.done && $t(e.value[0]); ) e = r.next();
return e;
}
};
}
}), n(Bt, "keys", {
apply(e, t, n) {
const r = Reflect.apply(e, t, n);
return {
[Symbol.iterator]() {
return this;
},
next() {
let e = r.next();
for (;!e.done && $t(e.value); ) e = r.next();
return e;
}
};
}
}), n(Bt, "forEach", {
apply(e, t, n) {
const [r, a] = n;
return Reflect.apply(e, t, [ (e, t, n) => {
$t(e) || r.call(a, e, t, n);
}, a ]);
}
}), n(Bt, "has", {
apply(e, t, n) {
const [r] = n;
return !$t(r) && Reflect.apply(e, t, n);
}
}), n(Bt, "delete", {
apply(e, t, n) {
const [r] = n;
return !$t(r) && Reflect.apply(e, t, n);
}
}), n(Bt, "check", {
apply(e, t, n) {
const [r] = n;
return (!r || !r.includes(Yt)) && Reflect.apply(e, t, n);
}
}), n(Bt, Symbol.iterator, {
apply(e, t, n) {
const r = Reflect.apply(e, t, n);
return {
[Symbol.iterator]() {
return this;
},
next() {
let e = r.next();
for (;!e.done && $t(e.value); ) e = r.next();
return e;
}
};
}
});

const Gt = 0, Ut = 1, qt = 2, Ht = 3, Vt = 4, Wt = 13;

let Zt;

n(xt.Object, "keys", {
apply(e, t, n) {
return "bullet" == n[0]?.bullet_mp5?.type && "explosion" == n[0]?.explosion_frag?.type && "gun" == n[0]?.mp5?.type && "throwable" == n[0]?.frag?.type && (Zt = n[0], 
xt.Object.keys = e), Reflect.apply(e, t, n);
}
});

let Xt = {
Mr: void 0,
zr: void 0
};

const Jt = {
ct: (e, t) => ({
x: e,
y: t
}),
gt: e => ({
x: e.x,
y: e.y
}),
ft: (e, t) => ({
x: e.x + t.x,
y: e.y + t.y
}),
bt: (e, t) => ({
x: e.x - t.x,
y: e.y - t.y
}),
ht: (e, t) => ({
x: e.x * t,
y: e.y * t
}),
wt: (e, t) => e.x * t.x + e.y * t.y,
Ar: e => Math.sqrt(e.x * e.x + e.y * e.y),
ut: e => e.x * e.x + e.y * e.y,
Sr(e, t) {
const n = e.x - t.x, r = e.y - t.y;
return Math.sqrt(n * n + r * r);
},
Cr(e, t) {
const n = e.x - t.x, r = e.y - t.y;
return n * n + r * r;
},
xt(e) {
const t = Math.sqrt(e.x * e.x + e.y * e.y);
return t > 1e-6 ? {
x: e.x / t,
y: e.y / t
} : {
x: 0,
y: 0
};
},
Nr(e) {
const t = Math.sqrt(e.x * e.x + e.y * e.y);
return {
x: e.x / t,
y: e.y / t
};
},
Or: e => ({
x: -e.y,
y: e.x
}),
jr: e => Math.atan2(e.y, e.x),
Rr(e) {
let t = e;
for (;t > Math.PI; ) t -= 2 * Math.PI;
for (;-Math.PI > t; ) t += 2 * Math.PI;
return t;
},
Tr(e, t) {
const n = Jt.Rr(e - t);
return Math.abs(n);
},
Pr: (e, t, n) => e + Jt.Rr(t - e) * n,
Er: (e, t = 1) => ({
x: Math.cos(e) * t,
y: Math.sin(e) * t
}),
Lr: (e, t, n) => ({
x: e.x + (t.x - e.x) * n,
y: e.y + (t.y - e.y) * n
}),
Dr(e, t) {
const n = 2 * Jt.wt(e, t);
return {
x: e.x - n * t.x,
y: e.y - n * t.y
};
},
Fr: (e, t) => e.x * t.y - e.y * t.x,
Br: e => 1 - (1 - e) ** 3,
Ir: e => .5 > e ? 2 * e * e : (4 - 2 * e) * e - 1,
Yr: e => e * (2 - e),
Kr: e => Math.max(0, Math.min(1, e)),
Gr: (e, t, n) => Math.max(t, Math.min(n, e)),
Lr: (e, t, n) => e + (t - e) * n,
Kt: (e, t) => Math.atan2(t.y - e.y, t.x - e.x),
$r(e, t) {
let n = e - t;
for (;n > Math.PI; ) n -= 2 * Math.PI;
for (;-Math.PI > n; ) n += 2 * Math.PI;
return n;
},
Sr(e, t, n, r) {
const a = n - e, o = r - t;
return Math.sqrt(a * a + o * o);
},
Cr(e, t, n, r) {
const a = n - e, o = r - t;
return a * a + o * o;
},
Hr: (e, t) => Math.hypot(e.x - t.x, e.y - t.y),
qr(e, t) {
const n = e.x - t.x, r = e.y - t.y;
return n * n + r * r;
},
Ur(e, t) {
let n = 0, r = 0;
for (let a = 0; e.length > a; a++) n += e[a] * t[a], r += t[a];
return r > 0 ? n / r : 0;
},
Vr(e, t) {
let n = 0, r = 0, a = 0;
for (let o = 0; e.length > o; o++) n += e[o].x * t[o], r += e[o].y * t[o], a += t[o];
return a > 0 ? {
x: n / a,
y: r / a
} : {
x: 0,
y: 0
};
},
Wr: (e, t, n = .3) => e * n + t * (1 - n),
Zr(e, t, n, r, a) {
const o = a * a;
return .5 * (2 * t + (-e + n) * a + (2 * e - 5 * t + 4 * n - r) * o + (3 * t - e - 3 * n + r) * o * a);
},
Xr(e, t) {
const n = Jt.ut(t);
if (1e-6 > n) return {
x: 0,
y: 0
};
const r = Jt.wt(e, t) / n;
return {
x: t.x * r,
y: t.y * r
};
},
Jr: e => (e = Math.max(0, Math.min(1, e))) * e * (3 - 2 * e),
Qr: e => (e = Math.max(0, Math.min(1, e))) * e * e * (e * (6 * e - 15) + 10),
ea(e) {
if (1e-10 > e) return 0;
let t = 1 / Math.sqrt(e);
return t * (1.5 - .5 * e * t * t);
}
}, Qt = {
ta(e, t, n, r) {
const a = Jt.bt(t, e), o = Math.abs(a.x) > 1e-4 ? 1 / a.x : 1e10, i = Math.abs(a.y) > 1e-4 ? 1 / a.y : 1e10, s = (n.x - e.x) * o, l = (r.x - e.x) * o, c = (n.y - e.y) * i, d = (r.y - e.y) * i, u = Math.max(Math.min(s, l), Math.min(c, d)), b = Math.min(Math.max(s, l), Math.max(c, d));
if (0 > b || u > b || u > 1) return null;
const p = Math.max(0, Math.min(1, u)), f = Jt.ft(e, Jt.ht(a, p)), h = Jt.ht(Jt.ft(n, r), .5), g = Jt.ht(Jt.bt(r, n), .5), m = Jt.bt(f, h);
let x;
const y = Math.abs(Math.abs(m.x) - g.x);
return x = Math.abs(Math.abs(m.y) - g.y) > y ? {
x: m.x > 0 ? 1 : -1,
y: 0
} : {
x: 0,
y: m.y > 0 ? 1 : -1
}, {
point: f,
normal: x,
t: p
};
},
yt(e, t, n, r) {
const a = Jt.bt(t, e), o = Jt.bt(e, n), i = Jt.wt(a, a), s = 2 * Jt.wt(o, a);
let l = s * s - 4 * i * (Jt.wt(o, o) - r * r);
if (0 > l) return null;
l = Math.sqrt(l);
const c = (-s - l) / (2 * i), d = (-s + l) / (2 * i);
let u = -1;
if (0 > c || c > 1 ? 0 > d || d > 1 || (u = d) : u = c, 0 > u) return null;
const b = Jt.ft(e, Jt.ht(a, u));
return {
point: b,
normal: Jt.xt(Jt.bt(b, n)),
t: u
};
},
dt: (e, t, n) => e ? 1 === e.type ? Qt.ta(t, n, e.min, e.max) : 0 === e.type ? Qt.yt(t, n, e.pos, e.rad) : null : null,
na: (e, t, n) => Jt.Cr(e, t) <= n * n,
ra: (e, t, n) => !(t.x > e.x || e.x > n.x || t.y > e.y || e.y > n.y),
aa(e, t, n) {
const r = Jt.bt(n, t), a = Jt.bt(e, t), o = Jt.ut(r);
if (0 === o) return t;
const i = Jt.Kr(Jt.wt(a, r) / o);
return Jt.ft(t, Jt.ht(r, i));
}
}, en = (e, t) => (1 & e) == (1 & t) || 2 & e && 2 & t, tn = {
Vt(e, t, n, r) {
const a = t.x - e.x, o = t.y - e.y, i = n.x * n.x + n.y * n.y - r * r, s = 2 * (a * n.x + o * n.y), l = s * s - 4 * i * (a * a + o * o);
if (0 > l) return null;
const c = Math.sqrt(l), d = (-s - c) / (2 * i), u = (-s + c) / (2 * i);
return d > 1e-4 ? d : u > 1e-4 ? u : null;
},
oa(e, t, n, r, a, o, i = .2) {
const s = t.x - (n?.x ?? t.x), l = t.y - (n?.y ?? t.y), c = tn.Vt(e, t, {
x: s,
y: l
}, a);
return o.pointToScreen(null === c ? t : {
x: e.x + (t.x + s * c - e.x) * i,
y: e.y + (t.y + l * c - e.y) * i
});
},
ia(e, t, n, r, a = 4) {
let o = .016;
for (let i = 0; a > i; i++) {
const a = Math.hypot(t.x + n.x * o - e.x, t.y + n.y * o - e.y) / r;
if (1e-4 > Math.abs(a - o)) return Math.max(.001, Math.min(a, 5));
o = .6 * a + .4 * o;
}
return Math.max(.001, Math.min(o, 5));
},
sa(e, t, n, r, a) {
const o = tn.ia(a, e, t, r);
return {
x: e.x + t.x * o + .5 * n.x * o * o,
y: e.y + t.y * o + .5 * n.y * o * o
};
},
la: (e, t) => t ? {
x: e.x - t.x,
y: e.y - t.y
} : {
x: 0,
y: 0
},
ca(e) {
if (2 > e.length) return {
x: 0,
y: 0
};
let t = 0, n = 0, r = 0;
const a = Math.min(e.length - 1, 6);
for (let o = 1; a > o; o++) {
const a = e[e.length - o], i = e[e.length - o - 1];
t += (a.x - i.x) / .016, n += (a.y - i.y) / .016, r++;
}
return r > 0 ? {
x: t / r,
y: n / r
} : {
x: 0,
y: 0
};
},
da(e, t, n = 3) {
const r = Math.hypot(e.x, e.y), a = Math.hypot(t.x, t.y);
return !(r > 2500 || a > .1 && Math.hypot(e.x - t.x, e.y - t.y) / (a + .1) > n);
},
ua(e, t, n, r) {
const a = Jt.bt(t, e), o = Math.abs(Jt.Rr(Math.atan2(a.y, a.x) - Math.atan2(n.y, n.x)));
return r * Math.PI / 180 >= o;
},
pa: (e, t, n = .2) => ({
x: e.x * (1 - n) + t.x * n,
y: e.y * (1 - n) + t.y * n
})
};

class nn {
constructor(e = "idle", t = null, n = null, r = !1) {
this.Ye = e, this.Ke = t, this.Ge = n, this.$e = r;
}
}

const rn = .001, an = Math.PI / 90, on = {
Ie: !1,
Ye: "idle",
He: {
x: 0,
y: 0
},
qe: null,
Ve: null,
Ue: null,
ba: !1,
Xe: null,
We: null,
Ze: null,
fa: !1,
ha: null
}, sn = e => e ? {
x: e.x,
y: e.y
} : null, ln = (e, t) => !(!e && !t || e && t && rn >= Math.abs(e.x - t.x) && rn >= Math.abs(e.y - t.y)), cn = e => e ? {
touchMoveActive: e.touchMoveActive,
touchMoveLen: e.touchMoveLen,
x: e.x,
y: e.y
} : null, dn = () => ({
x: xt.innerWidth / 2,
y: xt.innerHeight / 2
}), un = (e, t) => Math.atan2(e.y - t.y, e.x - t.x), bn = (e, t) => {
return Math.abs(Math.atan2(Math.sin(n = t - e), Math.cos(n)));
var n;
}, pn = (e, t) => {
if (!e || !t) return 45;
const n = dn(), r = un(e, n), a = un(t, n), o = bn(r, a), i = Math.hypot(t.x - e.x, t.y - e.y), s = Jt.Kr(o / Math.PI), l = Jt.Kr(i / 450);
return 45 + 360 * Math.max(s, l) * (At.kt.ga / 100);
}, fn = e => {
e ? (on.ba = !0, on.qe = sn(e), Mt.ot = {
clientX: e.x,
clientY: e.y
}) : (on.ba = !1, on.qe = null, Mt.ot = null);
}, hn = () => {
null !== on.ha && (clearTimeout(on.ha), on.ha = null);
}, gn = e => {
hn(), on.ha = setTimeout(() => {
on.ha = null, "idle" === on.Ye && (on.Ue = null, fn(null));
}, Math.max(0, e));
}, mn = (e = performance.now()) => {
if (!on.Ie) return;
let t = null;
const n = on.Ue;
let r = !1;
if (n) {
const {startPos: a, targetPos: o, startTime: i, duration: s} = n, l = s > 0 ? Jt.Kr((e - i) / s) : 1, c = Jt.Br(l);
let d = !1;
if (s > 0 && a && o) if (Math.hypot(o.x - a.x, o.y - a.y) > 6) d = !0; else {
const e = dn();
d = bn(un(a, e), un(o, e)) > an;
}
d && .999 > l && "idle" !== on.Ye && (r = !0), t = {
x: a.x + (o.x - a.x) * c,
y: a.y + (o.y - a.y) * c
}, .999 > l || (on.Ue = null, "idle" === on.Ye ? t = null : (on.Ve = sn(o), t = sn(o)));
} else "idle" !== on.Ye && on.Ve && (t = sn(on.Ve));
on.fa = r, fn(t), (e => {
const t = on.Ze;
if (t) {
const {startDir: n, targetDir: r, startTime: a, duration: o} = t, i = o > 0 ? Jt.Kr((e - a) / o) : 1, s = Jt.Br(i);
let l;
if (!n && r) l = {
touchMoveActive: !0,
touchMoveLen: r.touchMoveLen * s,
x: r.x * s,
y: r.y * s
}; else if (n && r) l = {
touchMoveActive: !0,
touchMoveLen: n.touchMoveLen + (r.touchMoveLen - n.touchMoveLen) * s,
x: n.x + (r.x - n.x) * s,
y: n.y + (r.y - n.y) * s
}; else if (n && !r) {
const e = 1 - s;
l = {
touchMoveActive: e > rn,
touchMoveLen: n.touchMoveLen * e,
x: n.x * e,
y: n.y * e
};
} else l = null;
on.Xe = l, .999 > i || (on.Ze = null, on.Xe = r ? cn(r) : null);
}
Mt.er = on.Xe?.touchMoveActive && on.Xe.touchMoveLen > rn ? cn(on.Xe) : null;
})(e), (() => {
if (!on.ba || "idle" === on.Ye) return;
const e = _t?.game;
if (!e?.initialized) return;
const t = e[Rt.J], n = t?.bodyContainer, r = on.qe;
if (!n || !r) return;
const a = dn();
n.rotation = Math.atan2(r.y - a.y, r.x - a.x) || 0;
})();
}, xn = () => {
if (on.Ie) return;
const e = _t?.game, t = _t?.pixi?._ticker;
if (!e || !t) return;
const n = e[Rt.ae], r = n?.mousePos;
if (!r) return void xt.requestAnimationFrame(xn);
on.He = {
x: r._x ?? r.x ?? xt.innerWidth / 2,
y: r._y ?? r.y ?? xt.innerHeight / 2
};
const a = e => ({
configurable: !0,
get() {
return ((e, t) => {
if (!on.ba) return t;
const n = on.qe;
return n ? "x" === e ? n.x : n.y : t;
})(e, this["_" + e]);
},
set(t) {
this["_" + e] = t, ((e, t) => {
if (on.He = {
...on.He,
[e]: t
}, "idle" !== on.Ye) return;
if (!on.ba) return on.qe = null, void (on.Ue = null);
const n = performance.now();
mn(n);
const r = sn(on.He), a = on.qe ?? r;
if (!ln(a, r)) return hn(), on.Ue = null, on.Ve = null, void fn(null);
const o = pn(a, r);
on.Ue = {
startPos: sn(a),
targetPos: r,
startTime: n,
duration: o
}, gn(o);
})(e, t);
}
});
Object.defineProperty(r, "x", a("x")), Object.defineProperty(r, "y", a("y")), t.add(() => mn()), 
on.Ie = !0;
}, yn = () => sn(on.qe), wn = {
ma: null,
Ie: !1
}, kn = (e, t, n) => ((e, t, n) => {
if (wn.ma) if (e && At.kt.tr) {
const {x: r, y: a} = e;
wn.ma.style.left === r + "px" && wn.ma.style.top === a + "px" || (wn.ma.style.left = r + "px", 
wn.ma.style.top = a + "px"), t ? n ? (wn.ma.style.borderColor = "rgba(190, 12, 185, 0.8)", 
wn.ma.style.boxShadow = "inset 0 0 0.5rem rgba(190, 12, 185, 0.5), 0 0 1.5rem rgba(190, 12, 185, 0.7)", 
wn.ma.style.filter = "brightness(1.1)", wn.ma.style.color = "rgb(190, 12, 185)") : (wn.ma.style.borderColor = "rgba(255, 51, 51, 0.8)", 
wn.ma.style.boxShadow = "inset 0 0 0.5rem rgba(255, 0, 0, 0.5), 0 0 1.5rem rgba(255, 0, 0, 0.7)", 
wn.ma.style.filter = "brightness(1.1)", wn.ma.style.color = "rgb(255, 51, 51)") : (wn.ma.style.borderColor = "rgba(128, 128, 128, 0.7)", 
wn.ma.style.boxShadow = "inset 0 0 0.5rem rgba(128, 128, 128, 0.3), 0 0 1rem rgba(128, 128, 128, 0.4)", 
wn.ma.style.filter = "brightness(0.9)"), wn.ma.style.display = "block";
} else wn.ma.style.display = "none";
})(e, t, n), vn = () => {
wn.ma && (wn.ma.style.display = "none");
}, Mn = (e, t, n) => n ? Jt.ft(e, Jt.ht(t, n.barrelLength ?? 0)) : e, zn = 16777215, _n = 16724787, An = 5089023, Sn = 16711680, Cn = 16750848, Nn = 11184810, Pn = 16733440, jn = 16711680, On = 15610675, Rn = {}, En = e => 2 === e || 3 === e, Tn = e => e.layer, Fn = (e, t, n) => !(!En(e) && !n) || e === t, Ln = (e, t) => (e[t] || (Rn[t] && Rn[t].parent && Rn[t].parent.removeChild(Rn[t]), 
e[t] = new Xt.Mr, e.addChild(e[t])), e[t]), Dn = (e, t, n, r) => {
const a = _t.game, o = a?.[Rt.W]?.[Rt.Oe];
if (!o) return n;
const i = r, s = Jt.ft(e, Jt.ht(t, n));
let l = n;
const c = Object.values(o).filter(e => !(!e.collider || e.dead || void 0 !== e.height && .25 > e.height || void 0 !== e.layer && !en(e.layer, i) || e?.type?.includes("decal")));
for (const t of c) {
if (!1 === t.collidable) continue;
const n = Qt.dt(t.collider, e, s);
if (n) {
const t = Jt.Ar(Jt.bt(n.point, e));
l > t && t > 1e-4 && (l = t);
}
}
return l;
}, In = (e, t, n, r, a, o = 255, i = .1) => {
if (!n || !r) return;
const s = _t.game, l = t === e, c = s[Rt.H].spectating, d = s[Rt.C].shotDetected || s[Rt.oe].isBindDown(Vt);
let u;
const b = l && !c ? yn() : null;
if (b) {
const e = s[Rt.N][Rt._e]({
x: t[Rt.be].x,
y: t[Rt.be].y
});
u = Math.atan2(e.y - b.y, e.x - b.x) - Math.PI;
} else if (!l || c || Mt.ot && d) if (l && !c && Mt.ot) {
const e = s[Rt.N][Rt._e]({
x: t[Rt.be].x,
y: t[Rt.be].y
});
u = Math.atan2(e.y - Mt.ot.clientY, e.x - Mt.ot.clientX) - Math.PI;
} else u = Math.atan2(t[Rt.ge].x, t[Rt.ge].y) - Math.PI / 2; else u = Math.atan2(s[Rt.ae].mousePos._y - xt.innerHeight / 2, s[Rt.ae].mousePos._x - xt.innerWidth / 2);
const p = Jt.ct(Math.cos(u), -Math.sin(u)), f = Mn(t[Rt.be], p, r), h = {
x: 16 * (f.x - e[Rt.be].x),
y: 16 * (e[Rt.be].y - f.y)
}, g = r.shotSpread * (Math.PI / 180), m = n.distance, x = Math.max(30, Math.ceil(2 * r.shotSpread));
let y = o, w = i;
l ? w = .75 * i : (y = 16711680, w = 1.2 * i), l && (a.beginFill(11184810, 1.5 * i), 
a.moveTo(h.x, h.y), a.arc(h.x, h.y, 16.25 * m, u - g / 2, u + g / 2), a.lineTo(h.x, h.y), 
a.endFill()), a.beginFill(y, w);
for (let n = 0; x > n; n++) {
const r = u - g / 2 + g * (n / (x - 1)), o = Jt.ct(Math.cos(r), -Math.sin(r)), i = Dn(f, o, m, t.layer), s = Jt.ft(f, Jt.ht(o, i)), l = {
x: 16 * (s.x - e[Rt.be].x),
y: 16 * (e[Rt.be].y - s.y)
};
0 === n ? (a.moveTo(h.x, h.y), a.lineTo(l.x, l.y)) : a.lineTo(l.x, l.y);
}
a.lineTo(h.x, h.y), a.endFill();
}, Yn = [ "frag", "mirv", "martyr_nade" ];

let Bn = Date.now(), $n = !1, Kn = null;

const Gn = () => {
$n = !1, Kn && (Kn.destroy(), Kn = null);
}, Un = () => {
var e;
if ((() => {
const e = _t.game;
if (!e?.initialized) return !1;
const t = e[Rt.J];
return null != t?.[Rt.de]?.[Rt.ze] && null != t?.[Rt.ce]?.[Rt.Se];
})()) if (3 === _t.game[Rt.J][Rt.de][Rt.ze]) try {
const t = _t.game, n = t[Rt.J], r = n[Rt.ce][Rt.Se], a = (Date.now() - Bn) / 1e3;
if (!(e => "cook" === e.throwableState)(n) || (e = r, !Yn.some(t => e.includes(t)))) return void Gn();
if (a > 4 && ($n = !1), !$n) return Gn(), Kn = new _t.game[Rt.H][Rt.ue].constructor, 
_t.pixi.stage.addChild(Kn.container), Kn.start("Grenade", 0, 4), $n = !0, void (Bn = Date.now());
Kn.update(a - Kn.elapsed, t[Rt.N]);
} catch {} else Gn();
}, qn = {
$t: null,
qt: {},
Ot: null,
jt: null,
Rt: null,
Lt: null,
Ut: {},
_t: null,
Zt: !1,
Xt: null,
It: !1,
Dt: {},
At: null,
zt: 0,
St: null
}, Hn = 5.5, Vn = [ "frag", "explosion_frag", "smoke", "explosion_smoke", "gas", "concussion" ], Wn = e => e.layer, Zn = (e, t) => !!(e => 2 === e || 3 === e)(e) || e === t, Xn = [ "metal_wall_", "brick_wall_", "concrete_wall_", "stone_wall_", "container_wall_", "_wall_int_", "bank_wall_", "barn_wall_", "cabin_wall_", "hut_wall_", "house_wall_", "mansion_wall_", "police_wall_", "shack_wall_", "outhouse_wall_", "teahouse_wall_", "warehouse_wall_", "silo_", "bollard_", "sandbags_", "hedgehog", "stone_01", "stone_02", "stone_03", "stone_04", "stone_05", "stone_06", "stone_07", "stone_08", "stone_09", "stone_0", "tree_", "glass_wall_", "locker_", "deposit_box_" ], Jn = [ "bush_", "brush_", "crate_", "barrel_", "refrigerator_", "control_panel_", "chest_", "case_", "oven_", "bed_", "bookshelf_", "couch_", "table_", "drawers_", "window", "toilet_", "pot_", "planter_", "pumpkin_", "potato_", "egg_", "woodpile_", "decal" ], Qn = e => {
if (!1 === e.collidable) return !1;
const t = e.type || "";
if (!0 === e.isWall) return !0;
if (!1 === e.destructible) return !0;
for (const e of Xn) if (t.includes(e)) return !0;
for (const e of Jn) if (t.includes(e)) return !1;
return void 0 !== e.health && e.health > 200;
}, er = (e, t, n, r) => {
if (!n || !r) return !0;
const a = _t.game, o = a?.[Rt.W]?.[Rt.Oe];
if (!o) return !0;
const i = e.layer, s = e[Rt.he], l = t[Rt.he], c = l.x - s.x, d = l.y - s.y, u = Math.atan2(d, c), b = (n.shotSpread || 0) * (Math.PI / 180) * 1.5, p = Math.hypot(c, d), f = Math.max(Math.min(30, n.shotSpread ? Math.ceil(2 * (n.shotSpread || 0)) : 15), Math.ceil(p / 50)), h = Object.values(o).filter(e => !(!e.collider || e.dead || void 0 !== e.height && .25 > e.height || void 0 !== e.layer && !en(e.layer, i))).filter(Qn);
if (0 === h.length) return !0;
const g = new Map;
for (const e of h) g.set(e, new Map);
let m = 0;
for (let e = 0; f > e; e++) {
const t = u - b / 2 + b * (1 === f ? .5 : e / (f - 1)), n = Jt.ct(Math.cos(t), Math.sin(t)), r = Jt.ft(s, Jt.ht(n, p));
let a = !1;
for (const e of h) {
let n = g.get(e).get(t);
if (void 0 === n && (n = Qt.dt(e.collider, s, r), g.get(e).set(t, n)), n && p - .75 > Jt.Ar(Jt.bt(n.point, s))) {
a = !0;
break;
}
}
if (!a && (m++, m > .4 * f)) return !0;
}
return m > .3 * f;
};

let tr = !1;

const nr = (e, t, n, r) => Jt.Cr(e, t, n, r);

let rr, ar = !1;

const or = () => {
rr = At.nr.Pe;
}, ir = () => At.kt.Pe && At.kt.Nt, sr = () => {
xt.dispatchEvent(new MouseEvent("mouseup", {
bubbles: !0,
cancelable: !0,
view: xt,
button: 0
}));
}, lr = e => {
0 === e.button && or();
}, cr = e => {
0 === e.button && (rr = !1, ar = !1);
}, dr = () => {
if (At.nr.Pe) {
if (ir()) {
const e = (() => {
if (ir()) return b() && qn.Zt;
try {
const e = _t.game;
if (!e || !e.initialized) return !1;
if (!e[Rt.J]) return !1;
const t = e[Rt.et];
if (!t || 0 === t.length) return !1;
const n = e[Rt.xa];
return !(!n || !n.ya) && t.some(e => e && e.active && !e[Rt.ce][Rt.Ce] && e.__id !== n.__id);
} catch {
return !1;
}
})(), t = (() => {
try {
const e = _t.game;
if (!e || !e.initialized) return !1;
const t = e[Rt.J];
if (!t) return !1;
const n = t[Rt.de];
if (!n) return !1;
const r = n[Rt.ze];
return 0 === r || 1 === r || !(2 !== r || !At.vt.Pe || !At.kt.Ct) && 5.5 > (() => {
try {
const e = _t.game;
if (!e || !e.initialized) return 1 / 0;
const t = e[Rt.wa][Rt.et], n = e[Rt.J];
if (!t || !n) return 1 / 0;
let r = 1 / 0;
for (const e of t) {
if (!e.active || n.__id === e.__id) continue;
if (e[Rt.ce][Rt.Ce]) continue;
const t = n[Rt.he], a = e[Rt.he], o = Math.hypot(t.x - a.x, t.y - a.y);
r > o && (r = o);
}
return r;
} catch {
return 1 / 0;
}
})();
} catch {
return !1;
}
})();
e && t && !ar ? (xt.dispatchEvent(new MouseEvent("mousedown", {
bubbles: !0,
cancelable: !0,
view: xt,
button: 0
})), ar = !0) : e && t || !ar || (sr(), ar = !1);
}
} else ar && (sr(), ar = !1);
};

let ur = !1, br = 0, pr = null, fr = null, hr = null, gr = 100, mr = !1, xr = 100;

const yr = [ "container_01", "barn_02", "stone_01", "tree_01", "tree_03", "tree_03cb", "tree_03d", "tree_03f", "tree_03h", "tree_03sp", "tree_03su", "tree_03sv", "tree_03w", "stone_04", "stone_05", "bunker_storm_01" ], wr = {
container_01: 16776960,
barn_02: 65535,
stone_01: 8947848,
tree_01: 16711680,
tree_03: 16711680,
tree_03cb: 16711680,
tree_03d: 16711680,
tree_03f: 16711680,
tree_03h: 16711680,
tree_03sp: 16711935,
tree_03su: 16711680,
tree_03sv: 16766720,
tree_03w: 16711680,
stone_04: 16711935,
stone_05: 16711935,
bunker_storm_01: 10027263
}, kr = {
container_01: 1,
barn_02: 1,
stone_01: 6,
tree_01: 6,
tree_03: 20,
tree_03cb: 20,
tree_03d: 20,
tree_03f: 20,
tree_03h: 20,
tree_03sp: 20,
tree_03su: 20,
tree_03sv: 20,
tree_03w: 20,
stone_04: 6,
stone_05: 6,
bunker_storm_01: 2
};

let vr = !1;

const Mr = [ 11, 12 ], zr = [ {
ka: "",
va: null,
_a: Date.now(),
Ma: ""
}, {
ka: "",
va: null,
_a: Date.now(),
Ma: ""
}, {
ka: "",
va: null,
Ma: ""
}, {
ka: "",
va: null,
Ma: ""
} ], _r = e => zt.Bt.push(e), Ar = e => {
try {
const t = Zt[e];
return ("single" === t.fireMode || "burst" === t.fireMode) && t.fireDelay >= .2;
} catch {
return !1;
}
}, Sr = e => Ar(e), Cr = e => {
_r(Mr[e]);
}, Nr = () => {
var e, t;
if (r() && At.dr.Pe) try {
const n = _t.game[Rt.J][Rt.de], r = n[Rt.ze], a = n[Rt.Ae], o = a[r], i = zr[r];
if (At.kt.Ct && At.vt.Pe && 150 > (() => {
try {
const e = _t.game, t = e[Rt.wa][Rt.et], n = e[Rt.J], r = e[Rt.ae].mousePos;
let a = 1 / 0;
for (const o of t) {
if (!o.active || n.__id === o.__id) continue;
if (o[Rt.ce][Rt.Ce]) continue;
const t = e[Rt.N][Rt._e]({
x: o[Rt.he].x,
y: o[Rt.he].y
}), i = Math.hypot(t.x - r._x, t.y - r._y);
a > i && (a = i);
}
return a;
} catch {
return 1 / 0;
}
})() && 2 !== r) return void _r(Wt);
if (null !== qn.Xt && 2 !== r) return void _r(Wt);
if (o.ammo === i.va) return;
const s = 0 === r ? 1 : 0, l = a[s];
Ar(o.type) && o.type === i.Ma && (i.va > o.ammo || 0 === i.va && o.ammo > i.va && (_t.game[Rt.C].shotDetected || _t.game[Rt.oe].isBindDown(Vt))) && (i._a = Date.now(), 
Ar(l.type) && l.ammo && !At.dr.ur ? Cr(s) : "" !== l.type ? (t = r, Cr(s), Cr(t)) : (e = r, 
_r(Wt), Cr(e))), i.va = o.ammo, i.Ma = o.type;
} catch {}
}, Pr = 2 * Math.PI;

let jr = 0, Or = 0, Rr = Math.random() * Pr, Er = !1, Tr = 0;

const Fr = [ 0, -Math.PI / 2, Math.PI, Math.PI / 2 ], Lr = [ 0, 2 * Math.PI / 3, 4 * Math.PI / 3 ], Dr = [ 0, Math.PI ], Ir = () => {
if (!Er && At.dn.Pe) return At.dn.cn ? (Or += (2 * Math.random() - 1) * (At.dn.pr / 50) * .15, 
Or *= .92, void (jr += Or)) : void (At.dn.un ? Math.random() < At.dn.pr / 100 * 2 && (Tr = (Tr + 1) % 2) : At.dn.pn ? Math.random() < At.dn.pr / 100 * 2 && (Tr = (Tr + 1) % 3) : At.dn.bn ? Math.random() < At.dn.pr / 100 * 2 && (Tr = (Tr + 1) % 4) : Math.random() < At.dn.pr / 100 * 2 && (Rr = Math.random() * Pr));
}, Yr = (e, t) => ({
get() {
return t.call(this);
},
set(t) {
this["_" + e] = t;
}
}), Br = "surt-blur-start-overlay", $r = {
sv98: 1,
mosin: 1,
awc: 1,
scout: 1,
blr: 1,
model94: 1,
m870: .9,
m1100: .9,
saiga: .9,
mp5: .75,
mac10: .75,
ump9: .75,
vector: .75,
ak47: .75,
scar: .75,
groza: .75,
grozas: .75,
an94: .75,
spas12: .75,
super90: .75,
usas: .75,
m39: .75,
svd: .75,
mk12: .75,
garand: .75,
famas: .75,
hk416: .75,
m4a1: .75,
dp28: .75,
bar: .75,
pkp: .75,
m249: .75,
qbb97: .75,
l86: .75,
scarssr: .75,
mp220: .3,
deagle: .3,
ot38: .3,
ots38: .3,
m1911: .3,
p30l: .3,
peacemaker: .3,
flare_gun: .3,
m9: .25,
glock: .25,
m93r: .25,
vss: .25,
scorpion: .25
}, Kr = {
za: !1,
Aa: null,
Sa: 0,
Ca: 0,
Na: null,
Oa: null
}, Gr = e => {
if (!e) return .75;
const t = e.toLowerCase().replace(/[-_\s]/g, "");
for (const [e, n] of Object.entries($r)) if (t.includes(e) || e.includes(t)) return n;
try {
const t = Zt[e];
if (t?.switchDelay) return t.switchDelay;
} catch {}
return .75;
}, Ur = e => {
if (!e) return !1;
const t = e.toLowerCase();
return [ "sv98", "mosin", "awc", "scout", "blr", "model94", "m870", "saiga", "spas12", "super90", "m1100", "usas", "mp220", "deagle", "ot38", "ots38", "peacemaker", "garand", "m39", "svd", "mk12", "scarssr" ].some(e => t.includes(e));
}, qr = [ 11, 12 ], Hr = () => {
if (!r() || !At.br?.Pe) return Kr.za = !1, void (Kr.Aa = null);
try {
const e = _t.game[Rt.J][Rt.de], t = e[Rt.ze], n = e[Rt.Ae];
if (0 !== t && 1 !== t) return void (Kr.za = !1);
const r = n[0], a = n[1];
if (r.type === Kr.Na && a.type === Kr.Oa || (Kr.Na = r.type, Kr.Oa = a.type, Kr.Aa = null, 
Kr.Sa = 0), Sr(r.type) || Sr(a.type)) return void (Kr.za = !1);
if (!Ur(r.type) && !Ur(a.type)) return void (Kr.za = !1);
Kr.za = !0, Kr.Aa || (Kr.Aa = ((e, t) => {
const n = Gr(e), r = Gr(t);
if (.3 === n && .9 === r) return [ {
weapon: 0,
wait: .3
}, {
weapon: 1,
wait: .6
} ];
if (.9 === n && .3 === r) return [ {
weapon: 1,
wait: .3
}, {
weapon: 0,
wait: .6
} ];
if (.3 === n && .75 === r) return [ {
weapon: 0,
wait: .3
}, {
weapon: 1,
wait: .45
} ];
if (.75 === n && .3 === r) return [ {
weapon: 1,
wait: .3
}, {
weapon: 0,
wait: .45
} ];
if (.75 === n && 1 === r) return [ {
weapon: 0,
wait: .75
}, {
weapon: 1,
wait: .25
}, {
weapon: 0,
wait: .5
}, {
weapon: 1,
wait: .5
}, {
weapon: 0,
wait: .25
} ];
if (1 === n && .75 === r) return [ {
weapon: 1,
wait: .75
}, {
weapon: 0,
wait: .25
}, {
weapon: 1,
wait: .5
}, {
weapon: 0,
wait: .5
}, {
weapon: 1,
wait: .25
} ];
if (.9 === n && 1 === r) return [ {
weapon: 0,
wait: .9
}, {
weapon: 1,
wait: .1
}, {
weapon: 0,
wait: .8
}, {
weapon: 1,
wait: .2
}, {
weapon: 0,
wait: .7
}, {
weapon: 1,
wait: .3
}, {
weapon: 0,
wait: .6
}, {
weapon: 1,
wait: .4
} ];
if (1 === n && .9 === r) return [ {
weapon: 1,
wait: .9
}, {
weapon: 0,
wait: .1
}, {
weapon: 1,
wait: .8
}, {
weapon: 0,
wait: .2
}, {
weapon: 1,
wait: .7
}, {
weapon: 0,
wait: .3
}, {
weapon: 1,
wait: .6
}, {
weapon: 0,
wait: .4
} ];
if (1 === n && .3 === r) return [ {
weapon: 1,
wait: .3
}, {
weapon: 1,
wait: .3
}, {
weapon: 1,
wait: .3
}, {
weapon: 0,
wait: .1
} ];
if (.3 === n && 1 === r) return [ {
weapon: 0,
wait: .3
}, {
weapon: 0,
wait: .3
}, {
weapon: 0,
wait: .3
}, {
weapon: 1,
wait: .1
} ];
if (1 === n && .3 === r || .3 === n && 1 === r) return [ {
weapon: 1 === n ? 1 : 0,
wait: .5
}, {
weapon: 1 === n ? 0 : 1,
wait: .5
} ];
const a = Math.min(n, r);
return [ {
weapon: r > n ? 0 : 1,
wait: a
}, {
weapon: r > n ? 1 : 0,
wait: Math.max(n, r) - a
} ];
})(r.type, a.type), Kr.Sa = 0, Kr.Ca = Date.now());
const o = Date.now(), i = Kr.Aa, s = i[Kr.Sa];
s.wait > (o - Kr.Ca) / 1e3 || (t !== s.weapon && zt.Bt.push(qr[s.weapon]), Kr.Sa = (Kr.Sa + 1) % i.length, 
Kr.Ca = o);
} catch (e) {
Kr.za = !1;
}
};

let Vr = !1, Wr = null, Zr = !1;

const Xr = {
TARGET: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <circle cx="12" cy="12" r="10"></circle>\n    <circle cx="12" cy="12" r="6"></circle>\n    <circle cx="12" cy="12" r="2"></circle>\n  </svg>',
RULER: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path>\n    <path d="m14.5 12.5 2-2"></path>\n    <path d="m11.5 9.5 2-2"></path>\n    <path d="m8.5 6.5 2-2"></path>\n    <path d="m17.5 15.5 2-2"></path>\n  </svg>',
ALERT: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>\n    <path d="M12 9v4"></path>\n    <path d="M12 17h.01"></path>\n  </svg>',
GUN: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M18 6 6 18"></path>\n    <path d="m8 6 10 10"></path>\n    <path d="M14 14 4 20l2-6 6-2Z"></path>\n    <path d="m6 8 2-2"></path>\n    <path d="m8 6 2-2"></path>\n  </svg>',
HELMET: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5.3a.7.7 0 0 1-.5-1.2l3.6-3.6"></path>\n    <path d="M14 10v.2a3 3 0 0 0 1.1 5.8v0h3.6a.7.7 0 0 0 .5-1.2l-3.6-3.6"></path>\n    <circle cx="12" cy="12" r="10"></circle>\n  </svg>',
ARMOR: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path>\n    <path d="m14.5 9-5 5"></path>\n    <path d="m9.5 9 5 5"></path>\n  </svg>',
BACKPACK: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"></path>\n    <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>\n    <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"></path>\n    <path d="M8 10h8"></path>\n    <path d="M8 18h8"></path>\n  </svg>'
};

Re = {}, Te = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, 
Fe = Array.isArray, ve = (Ee = []).slice, Me = {
wn(e, t, n, r) {
for (var a, o, i; t = t.xn; ) if ((a = t.kn) && !a.xn) try {
if ((o = a.constructor) && null != o.ja && (a.Wn(o.ja(e)), i = a.An), null != a.Ra && (a.Ra(e, r || {}), 
i = a.An), i) return a.jn = a;
} catch (t) {
e = t;
}
throw e;
}
}, ze = 0, N.prototype.Wn = function(e, t) {
var n;
n = null != this.Tn && this.Tn != this.state ? this.Tn : this.Tn = z({}, this.state), 
"function" == typeof e && (e = e(z({}, n), this.gn)), e && z(n, e), null != e && this.vn && (t && this._sb.push(t), 
O(this));
}, N.prototype.Ta = function(e) {
this.vn && (this.wn = !0, e && this.Rn.push(e), O(this));
}, N.prototype.render = C, _e = [], Se = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, 
Ce = (e, t) => e.vn.yn - t.vn.yn, R.Sn = 0, Ne = /(PointerCapture)$|Capture$/i, 
Pe = 0, je = Y(!1), Oe = Y(!0), Be = 0, $e = [], Ge = (Ke = Me).yn, Ue = Ke.Sn, 
qe = Ke.Gn, He = Ke.kn, Ve = Ke.unmount, We = Ke.xn, Ke.yn = e => {
De = null, Ge && Ge(e);
}, Ke.xn = (e, t) => {
e && t.mn && t.mn.$n && (e.$n = t.mn.$n), We && We(e, t);
}, Ke.Sn = e => {
Ue && Ue(e), Le = 0;
var t = (De = e.kn).Un;
t && (Ie === De ? (t.Rn = [], De.Rn = [], t.xn.forEach(e => {
e.Vn && (e.xn = e.Vn), e.u = e.Vn = void 0;
})) : (t.Rn.forEach(oe), t.Rn.forEach(ie), t.Rn = [], Le = 0)), Ie = De;
}, Ke.Gn = e => {
qe && qe(e);
var t = e.kn;
t && t.Un && (t.Un.Rn.length && (1 !== $e.push(t) && Ye === Ke.requestAnimationFrame || ((Ye = Ke.requestAnimationFrame) || ae)(re)), 
t.Un.xn.forEach(e => {
e.u && (e.Un = e.u), e.u = void 0;
})), Ie = De = null;
}, Ke.kn = (e, t) => {
t.some(e => {
try {
e.Rn.forEach(oe), e.Rn = e.Rn.filter(e => !e.xn || ie(e));
} catch (n) {
t.some(e => {
e.Rn && (e.Rn = []);
}), t = [], Ke.wn(n, e.vn);
}
}), He && He(e, t);
}, Ke.unmount = e => {
Ve && Ve(e);
var t, n = e.kn;
n && n.Un && (n.Un.xn.forEach(e => {
try {
oe(e);
} catch (e) {
t = e;
}
}), n.Un = void 0, t && Ke.wn(t, n.vn));
}, Ze = "function" == typeof requestAnimationFrame, (de.prototype = new N).Pa = !0, 
de.prototype.Fn = function(e, t) {
return ce(this.gn, e) || ce(this.state, t);
}, Xe = Me.yn, Me.yn = e => {
e.type && e.type.Zn && e.ref && (e.gn.ref = e.ref, e.ref = null), Xe && Xe(e);
}, Je = Me.wn, Me.wn = (e, t, n, r) => {
if (e.then) for (var a, o = t; o = o.xn; ) if ((a = o.kn) && a.kn) return null == t.wn && (t.wn = n.wn, 
t.mn = n.mn), a.kn(e, t);
Je(e, t, n, r);
}, Qe = Me.unmount, Me.unmount = e => {
var t = e.kn;
t && t.Ea && t.Ea(), t && 32 & e.Mn && (e.type = null), Qe && Qe(e);
}, (pe.prototype = new N).kn = function(e, t) {
var n, r, a, o, i = t.kn, s = this;
null == s.o && (s.o = []), s.o.push(i), n = fe(s.vn), r = !1, a = () => {
r || (r = !0, i.Ea = null, n ? n(o) : o());
}, i.Ea = a, o = () => {
var e, t;
if (! --s.Mn) for (s.state.Xn && (s.vn.mn[0] = be(e = s.state.Xn, e.kn.Nn, e.kn.La)), 
s.Wn({
Xn: s.yn = null
}); t = s.o.pop(); ) t.Ta();
}, s.Mn++ || 32 & t.Mn || s.Wn({
Xn: s.yn = s.vn.mn[0]
}), e.then(a, a);
}, pe.prototype.qn = function() {
this.o = [];
}, pe.prototype.render = function(e, t) {
var n, r, a;
return this.yn && (this.vn.mn && (n = document.createElement("div"), this.vn.mn[0] = ue(this.yn, n, (r = this.vn.mn[0].kn).La = r.Nn)), 
this.yn = null), (a = t.Xn && A(C, null, e.fallback)) && (a.Mn &= -33), [ A(C, null, t.Xn ? null : e.children), a ];
}, et = (e, t, n) => {
if (++n[1] === n[0] && e.l.delete(t), e.gn.Da && ("t" !== e.gn.Da[0] || !e.l.size)) for (n = e.i; n; ) {
for (;n.length > 3; ) n.pop()();
if (n[0] > n[1]) break;
e.i = n = n[2];
}
}, (he.prototype = new N).Xn = function(e) {
var t = this, n = fe(t.vn), r = t.l.get(e);
return r[0]++, a => {
var o = () => {
t.gn.Da ? (r.push(a), et(t, e, r)) : a();
};
n ? n(o) : o();
};
}, he.prototype.render = function(e) {
var t, n;
for (this.i = null, this.l = new Map, t = F(e.children), e.Da && "b" === e.Da[0] && t.reverse(), 
n = t.length; n--; ) this.l.set(t[n], this.i = [ 1, 0, this.i ]);
return e.children;
}, he.prototype.In = he.prototype.Ln = function() {
var e = this;
this.l.forEach((t, n) => {
et(e, n, t);
});
}, tt = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, 
nt = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, 
rt = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, at = /[A-Z0-9]/g, ot = "undefined" != typeof document, 
it = e => ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(e), 
N.prototype.Fa = {}, [ "componentWillMount", "componentWillReceiveProps", "componentWillUpdate" ].forEach(function(e) {
Object.defineProperty(N.prototype, e, {
configurable: !0,
get() {
return this["UNSAFE_" + e];
},
set(t) {
Object.defineProperty(this, e, {
configurable: !0,
writable: !0,
value: t
});
}
});
}), st = Me.event, Me.event = e => (st && (e = st(e)), e.persist = ge, e.Ba = me, 
e.Ia = xe, e.Ya = e), lt = {
enumerable: !1,
configurable: !0,
get() {
return this.class;
}
}, ct = Me.zn, Me.zn = e => {
"string" == typeof e.type && (e => {
var t, n, r, a = e.gn, o = e.type, i = {}, s = -1 === o.indexOf("-");
for (t in a) n = a[t], "value" === t && "defaultValue" in a && null == n || ot && "children" === t && "noscript" === o || "class" === t || "className" === t || (r = t.toLowerCase(), 
"defaultValue" === t && "value" in a && null == a.value ? t = "value" : "download" === t && !0 === n ? n = "" : "translate" === r && "no" === n ? n = !1 : "o" === r[0] && "n" === r[1] ? "ondoubleclick" === r ? t = "ondblclick" : "onchange" !== r || "input" !== o && "textarea" !== o || it(a.type) ? "onfocus" === r ? t = "onfocusin" : "onblur" === r ? t = "onfocusout" : rt.test(t) && (t = r) : r = t = "oninput" : s && nt.test(t) ? t = t.replace(at, "-$&").toLowerCase() : null === n && (n = void 0), 
"oninput" === r && i[t = r] && (t = "oninputCapture"), i[t] = n);
"select" == o && i.multiple && Array.isArray(i.value) && (i.value = F(a.children).forEach(e => {
e.gn.selected = -1 != i.value.indexOf(e.gn.value);
})), "select" == o && null != i.defaultValue && (i.value = F(a.children).forEach(e => {
e.gn.selected = i.multiple ? -1 != i.defaultValue.indexOf(e.gn.value) : i.defaultValue == e.gn.value;
})), a.class && !a.className ? (i.class = a.class, Object.defineProperty(i, "className", lt)) : (a.className && !a.class || a.class && a.className) && (i.class = i.className = a.className), 
e.gn = i;
})(e), e.$$typeof = tt, ct && ct(e);
}, dt = Me.Sn, Me.Sn = e => {
dt && dt(e);
}, ut = Me.Gn, Me.Gn = e => {
ut && ut(e);
var t = e.gn, n = e.wn;
null != n && "textarea" === e.type && "value" in t && t.value !== n.value && (n.value = t.value ?? "");
}, bt = C, pt = {
createRoot: ye,
hydrateRoot: (e, t) => (((e, t) => {
Z(e, t);
})(t, e), ye(e))
};

const Jr = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Qr = e => {
const t = (e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()))(e);
return t.charAt(0).toUpperCase() + t.slice(1);
}, ea = (...e) => e.filter((e, t, n) => !!e && "" !== e.trim() && n.indexOf(e) === t).join(" ").trim();

ft = {
xmlns: "http://www.w3.org/2000/svg",
width: 24,
height: 24,
viewBox: "0 0 24 24",
fill: "none",
stroke: "currentColor",
"stroke-width": "2",
"stroke-linecap": "round",
"stroke-linejoin": "round"
};

const ta = ({color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, children: a, iconNode: o, class: i = "", ...s}) => A("svg", {
...ft,
width: t + "",
height: t,
stroke: e,
"stroke-width": r ? 24 * +n / +t : n,
class: [ "lucide", i ].join(" "),
...s
}, [ ...o.map(([e, t]) => A(e, t)), ...F(a) ]), na = (e, t) => {
const n = ({class: n = "", children: r, ...a}) => A(ta, {
...a,
iconNode: t,
class: ea("lucide-" + Jr(Qr(e)), "lucide-" + Jr(e), n)
}, r);
return n.displayName = Qr(e), n;
}, ra = na("activity", [ [ "path", {
d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
key: "169zse"
} ] ]), aa = na("arrow-left-right", [ [ "path", {
d: "M8 3 4 7l4 4",
key: "9rb6wj"
} ], [ "path", {
d: "M4 7h16",
key: "6tx8e3"
} ], [ "path", {
d: "m16 21 4-4-4-4",
key: "siv7j2"
} ], [ "path", {
d: "M20 17H4",
key: "h6l3hr"
} ] ]), oa = na("badge-plus", [ [ "path", {
d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
key: "3c2336"
} ], [ "line", {
x1: "12",
x2: "12",
y1: "8",
y2: "16",
key: "10p56q"
} ], [ "line", {
x1: "8",
x2: "16",
y1: "12",
y2: "12",
key: "1jonct"
} ] ]), ia = na("bomb", [ [ "circle", {
cx: "11",
cy: "13",
r: "9",
key: "hd149"
} ], [ "path", {
d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",
key: "jp4j1b"
} ], [ "path", {
d: "m22 2-1.5 1.5",
key: "ay92ug"
} ] ]), sa = na("check", [ [ "path", {
d: "M20 6 9 17l-5-5",
key: "1gmf2c"
} ] ]), la = na("circle-question-mark", [ [ "circle", {
cx: "12",
cy: "12",
r: "10",
key: "1mglay"
} ], [ "path", {
d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
key: "1u773s"
} ], [ "path", {
d: "M12 17h.01",
key: "p32p05"
} ] ]), ca = na("database", [ [ "ellipse", {
cx: "12",
cy: "5",
rx: "9",
ry: "3",
key: "msslwz"
} ], [ "path", {
d: "M3 5V19A9 3 0 0 0 21 19V5",
key: "1wlel7"
} ], [ "path", {
d: "M3 12A9 3 0 0 0 21 12",
key: "mv7ke4"
} ] ]), da = na("eye", [ [ "path", {
d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
key: "1nclc0"
} ], [ "circle", {
cx: "12",
cy: "12",
r: "3",
key: "1v7zrd"
} ] ]), ua = na("flame", [ [ "path", {
d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
key: "96xj49"
} ] ]), ba = na("layers", [ [ "path", {
d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
key: "zw3jo"
} ], [ "path", {
d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
key: "1wduqc"
} ], [ "path", {
d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
key: "kqbvx6"
} ] ]), pa = na("map", [ [ "path", {
d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
key: "169xi5"
} ], [ "path", {
d: "M15 5.764v15",
key: "1pn4in"
} ], [ "path", {
d: "M9 3.236v15",
key: "1uimfh"
} ] ]), fa = na("package", [ [ "path", {
d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
key: "1a0edw"
} ], [ "path", {
d: "M12 22V12",
key: "d0xqtd"
} ], [ "polyline", {
points: "3.29 7 12 12 20.71 7",
key: "ousv84"
} ], [ "path", {
d: "m7.5 4.27 9 5.15",
key: "1c824w"
} ] ]), ha = na("pen-line", [ [ "path", {
d: "M13 21h8",
key: "1jsn5i"
} ], [ "path", {
d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
key: "1a8usu"
} ] ]), ga = na("radio", [ [ "path", {
d: "M16.247 7.761a6 6 0 0 1 0 8.478",
key: "1fwjs5"
} ], [ "path", {
d: "M19.075 4.933a10 10 0 0 1 0 14.134",
key: "ehdyv1"
} ], [ "path", {
d: "M4.925 19.067a10 10 0 0 1 0-14.134",
key: "1q22gi"
} ], [ "path", {
d: "M7.753 16.239a6 6 0 0 1 0-8.478",
key: "r2q7qm"
} ], [ "circle", {
cx: "12",
cy: "12",
r: "2",
key: "1c9p78"
} ] ]), ma = na("rocket", [ [ "path", {
d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
key: "m3kijz"
} ], [ "path", {
d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
key: "1fmvmk"
} ], [ "path", {
d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
key: "1f8sc4"
} ], [ "path", {
d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
key: "qeys4"
} ] ]), xa = na("rotate-cw", [ [ "path", {
d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
key: "1p45f6"
} ], [ "path", {
d: "M21 3v5h-5",
key: "1q7to0"
} ] ]), ya = na("sword", [ [ "polyline", {
points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5",
key: "1hfsw2"
} ], [ "line", {
x1: "13",
x2: "19",
y1: "19",
y2: "13",
key: "1vrmhu"
} ], [ "line", {
x1: "16",
x2: "20",
y1: "16",
y2: "20",
key: "1bron3"
} ], [ "line", {
x1: "19",
x2: "21",
y1: "21",
y2: "19",
key: "13pww6"
} ] ]), wa = na("target", [ [ "circle", {
cx: "12",
cy: "12",
r: "10",
key: "1mglay"
} ], [ "circle", {
cx: "12",
cy: "12",
r: "6",
key: "1vlfrh"
} ], [ "circle", {
cx: "12",
cy: "12",
r: "2",
key: "1c9p78"
} ] ]), ka = na("x", [ [ "path", {
d: "M18 6 6 18",
key: "1bl5f8"
} ], [ "path", {
d: "m6 6 12 12",
key: "d8bk6v"
} ] ]);

ht = 0;

const va = {
Ka: wa,
Ga: ya,
$a: aa,
Ha: ma,
qa: fa,
Ua: da,
Va: ga,
Wa: la,
Za: ca,
Xa: pa,
Ja: fa,
Qa: oa,
eo: e => we(ha, {
...e,
strokeWidth: "2.5"
}),
no: ua,
ro: da,
ao: ba,
oo: xa,
io: ra,
so: ia
}, Ma = ({onMouseDown: e, version: t, lo: n}) => we("div", {
className: "titlebar",
onMouseDown(t) {
e(t);
},
children: [ we("div", {
className: "titlebar-content",
children: [ we(va.Qa, {
className: "menu-icon"
}), we("div", {
className: "titlebar-text",
children: [ we("div", {
className: "title",
children: "SurMinus(dev version)"
}), we("div", {
className: "credit",
children: "by shiroko"
}) ]
}) ]
}), t && we("div", {
className: "version-text",
children: t
}), we("button", {
className: "close-btn",
onClick: n,
children: "×"
}) ]
}), za = ({activeTab: e, onTabChange: t}) => we("div", {
className: "sidebar",
children: we("div", {
className: "sidebar-tabs",
children: [ {
id: "main",
label: "Main",
icon: va.no
}, {
id: "visuals",
label: "Visuals",
icon: va.ro
}, {
id: "misc",
label: "Misc",
icon: va.ao
}, {
id: "help",
label: "Help",
icon: va.Wa
} ].map(n => we("button", {
className: "sidebar-tab " + (e === n.id ? "active" : ""),
"data-tab": n.id,
onClick: () => t(n.id),
title: n.label,
children: [ we(n.icon, {
className: "tab-icon"
}), we("span", {
className: "tab-label",
children: n.label
}) ]
}, n.id))
})
}), _a = ({id: e, label: t, checked: n, onChange: r, style: a = {}, warning: o = !1}) => we("div", {
className: "checkbox-item",
style: a,
onClick(e) {
"checkbox" !== e.target.type && r(!n);
},
children: [ we("input", {
type: "checkbox",
id: e,
checked: n,
onChange(e) {
e.stopPropagation(), r(e.target.checked);
},
className: "checkbox " + (n ? "checkbox-checked" : "")
}), we("label", {
htmlFor: e,
className: "checkbox-item-label",
onClick: e => e.stopPropagation(),
children: t
}), o && we("span", {
className: "risky-label",
style: {
marginLeft: "0.5rem"
},
children: "RISKY!!!"
}) ]
}), Aa = e => {
const t = e.checked;
return we(_a, {
...e,
warning: e.shouldWarning?.(t) ?? !1
});
}, Sa = ({id: e, label: t, value: n, min: r = 0, max: a = 100, warning: o = !1, onChange: i}) => {
const [s, l] = J(!1), c = ee(null), d = (n - r) / (a - r) * 100, u = {
background: `linear-gradient(to right, #6edb72 0%, #58c05c ${d}%, #333 ${d}%, #333 100%)`
}, b = e => {
e.stopPropagation(), i(parseInt(e.target.value));
}, p = e => {
e.stopPropagation();
}, f = ne(() => l(!0), []), h = ne(() => l(!1), []), g = ne(e => {
e.stopPropagation(), f();
}, [ f ]), m = ne(e => {
e.stopPropagation(), f();
}, [ f ]), x = ne(e => {
e && e.stopPropagation(), h();
}, [ h ]), y = ne(e => {
e && e.stopPropagation(), h();
}, [ h ]);
return we("div", {
className: "checkbox-item slider-container",
onClick: p,
children: [ we("label", {
htmlFor: e,
style: {
color: "#ddd",
fontSize: "0.8125rem",
cursor: "default",
pointerEvents: "none"
},
children: t
}), we("input", {
ref: c,
type: "range",
className: "slider " + (s ? "slider-dragging" : ""),
id: e,
min: r,
max: a,
value: n,
onChange: b,
onInput: b,
onClick: p,
onMouseDown: g,
onMouseUp: x,
onMouseLeave: x,
onTouchStart: m,
onTouchEnd: y,
onTouchCancel: y,
style: u
}), o && we("span", {
className: "risky-label",
style: {
marginLeft: "0.5rem"
},
children: "RISKY!!!"
}) ]
});
}, Ca = ({keybind: e, mode: t = "single", style: n = {}, onClick: r, editable: a = !1}) => {
const [o, i] = J(!1);
if ("multiple" === t && Array.isArray(e)) return we("div", {
className: "keybind-slot-container",
style: n,
children: e.map((t, n) => we(bt, {
children: [ we("div", {
className: "keybind-slot",
children: t
}), e.length - 1 > n && we("span", {
className: "keybind-slot-separator",
children: "+"
}) ]
}, n))
});
const s = o ? "..." : (e => {
const t = {
ShiftRight: "Right Shift",
ShiftLeft: "Left Shift",
ControlRight: "Right Ctrl",
ControlLeft: "Left Ctrl",
AltRight: "Right Alt",
AltLeft: "Left Alt",
Space: "Space",
Enter: "Enter",
Escape: "Escape"
};
return t[e] ? t[e] : e.startsWith("Key") ? e.slice(3) : e.startsWith("Digit") ? e.slice(5) : e;
})(e);
return we("div", {
className: `keybind-slot ${a ? "keybind-slot-editable" : ""} ${o ? "keybind-slot-waiting" : ""}`,
style: n,
onClick(e) {
if (!a || !r) return;
e.stopPropagation(), i(!0);
const t = e => {
e.preventDefault(), e.stopPropagation(), r(e.code), i(!1), Reflect.apply(It, xt, [ "keydown", t, !0 ]);
};
Reflect.apply(Dt, xt, [ "keydown", t, !0 ]);
},
children: [ s, a && !o && we(va.eo, {
className: "keybind-pen-icon"
}) ]
});
}, Na = ({icon: e, label: t, keybind: n, keybindMode: r, keybindEditable: a, onKeybindChange: o, enabled: i, onEnabledChange: s, warning: l = !1}) => we("div", {
className: "section-title",
children: [ e && we(e, {
size: 16
}), we("div", {
className: "section-title-container",
children: [ t, l && we("span", {
className: "risky-label",
style: {
marginLeft: "0.5rem"
},
children: "RISKY!!!"
}) ]
}), n && we(Ca, {
keybind: n,
mode: r,
editable: a,
onClick: o
}), we(_a, {
id: t.toLowerCase().replace(/\s+/g, "-") + "-enable",
label: "Enabled",
checked: i,
onChange(e) {
s(e), yt.dispatchEvent(new CustomEvent("featureToggled", {
detail: {
featureName: t,
enabled: e
}
}));
},
style: {
border: "none",
background: "none",
padding: "4px 6px",
margin: 0
}
}) ]
}), Pa = ({co: e, do: t}) => we("div", {
className: "section",
children: [ we(Na, {
icon: va.Ka,
label: "Aimbot",
keybind: e.gr.yr,
keybindEditable: !0,
onKeybindChange: e => t(t => t.gr.yr = e),
enabled: e.kt.Pe,
onEnabledChange: e => t(t => t.kt.Pe = e)
}), we("div", {
className: "group " + (e.kt.Pe ? "" : "hidden"),
children: [ we(_a, {
id: "target-knocked",
label: "Target Knocked",
checked: e.kt.Tt,
onChange: e => t(t => t.kt.Tt = e)
}), we(_a, {
id: "aimbot-show-dot",
label: "Aimbot Dot",
checked: e.kt.tr,
onChange: e => t(t => t.kt.tr = e)
}), we(_a, {
id: "aimbot-hud",
label: "TargetHUD",
checked: e.hr.Pe,
onChange: e => t(t => t.hr.Pe = e)
}), we(Aa, {
id: "aimbot-wallcheck",
label: "Wallcheck",
checked: e.kt.Yt,
onChange: e => t(t => t.kt.Yt = e),
shouldWarning: e => !e
}), we("div", {
style: {
display: "flex",
flexDirection: "column"
},
children: we(Aa, {
id: "aimbot-aim-allies",
label: "Aim Allies (Aim Teammates)",
checked: e.kt.Et,
onChange: e => t(t => t.kt.Et = e),
shouldWarning: e => e
})
}), we("div", {
style: {
display: "flex",
alignItems: "center",
gap: "0.625rem"
},
children: [ we(_a, {
id: "aimbot-automatic",
label: "Blatant",
checked: e.kt.Nt,
onChange: e => t(t => t.kt.Nt = e),
warning: !0
}), we(Ca, {
keybind: e.gr.wr,
editable: !0,
onClick: e => t(t => t.gr.wr = e)
}) ]
}) ]
}), we(Na, {
icon: va.Ga,
label: "Melee Lock",
enabled: e.vt.Pe,
onEnabledChange: e => t(t => t.vt.Pe = e),
warning: !0
}), we("div", {
className: "group " + (e.vt.Pe ? "" : "hidden"),
children: [ we(_a, {
id: "auto-melee",
label: "Auto Melee",
checked: e.vt.Ft,
onChange: e => t(t => t.vt.Ft = e)
}), we(_a, {
id: "attack-allies",
label: "Attack Allies",
checked: e.vt.Pt,
onChange: e => t(t => t.vt.Pt = e),
warning: !0
}) ]
}), we(Na, {
icon: va.$a,
label: "Auto Switch",
enabled: e.dr.Pe,
onEnabledChange: e => t(t => t.dr.Pe = e)
}), we("div", {
className: "group " + (e.dr.Pe ? "" : "hidden"),
children: we(_a, {
id: "useonegun",
label: "Use One Gun",
checked: e.dr.ur,
onChange: e => t(t => t.dr.ur = e)
})
}), we(Na, {
icon: va.Ha,
label: "Semi Auto",
enabled: e.nr.Pe,
onEnabledChange: e => t(t => t.nr.Pe = e)
}), we(Na, {
icon: va.io,
label: "Auto Heal",
enabled: e.Jt.Pe,
onEnabledChange: e => t(t => t.Jt.Pe = e)
}), we("div", {
className: "group " + (e.Jt.Pe ? "" : "hidden"),
children: [ we(Sa, {
id: "autoheal-bandage",
label: "Bandage Threshold",
value: e.Jt.nn,
min: 0,
max: 100,
onChange: e => t(t => t.Jt.nn = e)
}), we(Sa, {
id: "autoheal-kit",
label: "Healthkit Threshold",
value: e.Jt.rn,
min: 0,
max: 100,
onChange: e => t(t => t.Jt.rn = e)
}), we(Sa, {
id: "autoheal-boost-thresh",
label: "Boost Threshold",
value: e.Jt.an,
min: 0,
max: 100,
onChange: e => t(t => t.Jt.an = e)
}), we(_a, {
id: "autoheal-enemy-check",
label: "Enemy Check",
checked: e.Jt.Qt,
onChange: e => t(t => t.Jt.Qt = e)
}), we(Sa, {
id: "autoheal-enemy-dist",
label: "Enemy Distance",
value: e.Jt.en,
min: 5,
max: 200,
onChange: e => t(t => t.Jt.en = e)
}), we(_a, {
id: "autoheal-move-check",
label: "Movement Check",
checked: e.Jt.tn,
onChange: e => t(t => t.Jt.tn = e)
}), we(_a, {
id: "autoheal-boost-keep",
label: "Auto Boost (Keep Max)",
checked: e.Jt.sn,
onChange: e => t(t => t.Jt.sn = e)
}) ]
}), we(Na, {
icon: va.qa,
label: "Desync",
enabled: e.br.Pe,
onEnabledChange: e => t(t => t.br.Pe = e)
}) ]
}), ja = ({co: e, do: t}) => we("div", {
className: "section",
children: [ we(Na, {
icon: va.Ua,
label: "X-Ray",
enabled: e.Ee.Pe,
onEnabledChange: e => t(t => t.Ee.Pe = e)
}), we("div", {
className: "group " + (e.Ee.Pe ? "" : "hidden"),
children: [ we(_a, {
id: "remove-ceilings",
label: "Remove Ceilings",
checked: e.Ee.Le,
onChange: e => t(t => t.Ee.Le = e)
}), we(_a, {
id: "darker-smokes",
label: "Darker Smokes",
checked: e.Ee.De,
onChange: e => t(t => t.Ee.De = e)
}), we(Sa, {
id: "smoke-opacity",
label: "Smoke Opacity",
value: e.Ee.Fe,
onChange: e => t(t => t.Ee.Fe = e)
}), we(Sa, {
id: "tree-opacity",
label: "Tree Opacity",
value: e.Ee.Be,
onChange: e => t(t => t.Ee.Be = e)
}) ]
}), we(Na, {
icon: va.Va,
label: "ESP",
enabled: e.Je.Pe,
onEnabledChange: e => t(t => t.Je.Pe = e)
}), we("div", {
className: "group " + (e.Je.Pe ? "" : "hidden"),
children: [ we(_a, {
id: "visible-nametags",
label: "Visible Nametags",
checked: e.Je.Qe,
onChange: e => t(t => t.Je.Qe = e)
}), we(_a, {
id: "player-esp",
label: "Player Lines",
checked: e.Je.et,
onChange: e => t(t => t.Je.et = e)
}), we("div", {
className: "section-title",
children: "Grenades"
}), we("div", {
className: "subgroup",
children: [ we(_a, {
id: "grenade-esp",
label: "Explosions",
checked: e.Je.nt.tt,
onChange: e => t(t => t.Je.nt.tt = e),
style: {
marginRight: "0.375rem"
}
}), we(_a, {
id: "grenade-trajectory",
label: "Trajectory",
checked: e.Je.nt.rt,
onChange: e => t(t => t.Je.nt.rt = e),
style: {
marginRight: "0.375rem"
}
}) ]
}), we("div", {
className: "section-title",
children: "Flashlights"
}), we("div", {
className: "subgroup",
children: [ we(_a, {
id: "own-flashlight",
label: "Own",
checked: e.Je.st.lt,
onChange: e => t(t => t.Je.st.lt = e),
style: {
marginRight: "0.375rem"
}
}), we(_a, {
id: "others-flashlight",
label: "Others",
checked: e.Je.st.h,
onChange: e => t(t => t.Je.st.h = e),
style: {
marginRight: "0.375rem"
}
}) ]
}) ]
}), we(Na, {
icon: va.oo,
label: "Spinbot",
keybind: e.gr.kr,
keybindEditable: !0,
onKeybindChange: e => t(t => t.gr.kr = e),
enabled: e.dn.Pe,
onEnabledChange: e => t(t => t.dn.Pe = e)
}), we("div", {
className: "group " + (e.dn.Pe ? "" : "hidden"),
children: [ we(Sa, {
id: "spinbot-speed",
label: "Speed",
min: 0,
max: 100,
value: e.dn.pr,
onChange: e => t(t => t.dn.pr = e)
}), we(_a, {
id: "spinbot-realistic",
label: "Realistic",
checked: e.dn.cn,
onChange(e) {
t(e ? e => {
e.dn.cn = !0, e.dn.un = !1, e.dn.pn = !1, e.dn.bn = !1;
} : e => e.dn.cn = !1);
}
}), we(_a, {
id: "spinbot-two-directions",
label: "Spin 2 Directions (Horizontal)",
checked: e.dn.un,
onChange(e) {
t(e ? e => {
e.dn.un = !0, e.dn.pn = !1, e.dn.bn = !1;
} : e => e.dn.un = !1);
}
}), we(_a, {
id: "spinbot-three-directions",
label: "Spin 3 Directions (Triangle)",
checked: e.dn.pn,
onChange(e) {
t(e ? e => {
e.dn.pn = !0, e.dn.un = !1, e.dn.bn = !1;
} : e => e.dn.pn = !1);
}
}), we(_a, {
id: "spinbot-all-directions",
label: "Spin 4 Directions (Square)",
checked: e.dn.bn,
onChange(e) {
t(e ? e => {
e.dn.bn = !0, e.dn.un = !1, e.dn.pn = !1;
} : e => e.dn.bn = !1);
}
}) ]
}) ]
}), Oa = ({co: e, do: t}) => we("div", {
className: "section",
children: [ we(Na, {
icon: va.Xa,
label: "Map Highlights",
enabled: e.ir.Pe,
onEnabledChange: e => t(t => t.ir.Pe = e)
}), we("div", {
className: "group " + (e.ir.Pe ? "" : "hidden"),
children: we(_a, {
id: "smaller-trees",
label: "Smaller Trees",
checked: e.ir.sr,
onChange: e => t(t => t.ir.sr = e)
})
}), we(Na, {
icon: va.Ja,
label: "Auto Loot",
enabled: e.cr.Pe,
onEnabledChange: e => t(t => t.cr.Pe = e)
}), we(Na, {
icon: va.so,
label: "Anti Explosion",
enabled: e.vt.Mt,
onEnabledChange: e => t(t => t.vt.Mt = e)
}) ]
}), Ra = ({co: e}) => we("div", {
className: "section help-section",
children: [ we("div", {
className: "help-title",
children: [ we(va.Wa, {
size: 16
}), we("span", {
children: "Controls & Information"
}) ]
}), we("div", {
className: "help-panel",
style: {
marginBottom: "0.75rem"
},
children: [ we("div", {
style: {
display: "flex",
alignItems: "center",
marginBottom: "0.375rem"
},
children: [ we(Ca, {
keybind: e?.gr?.mr || "ShiftRight"
}), we("span", {
className: "keybind-description",
children: "Show/Hide Menu"
}) ]
}), we("p", {
className: "keybind-help-text",
children: "Toggle the menu visibility at any time using this keybind."
}) ]
}), we("div", {
className: "section-subtitle",
children: "Feature Keybinds"
}), we("div", {
className: "help-panel",
children: [ we("p", {
className: "keybind-help-text",
style: {
marginBottom: "0.5rem"
},
children: "Keybinds can be customized next to each feature in their respective tabs:"
}), we("div", {
className: "features-container",
children: [ we("div", {
className: "feature-item",
children: [ we("span", {
className: "feature-name",
children: "Aimbot"
}), we(Ca, {
keybind: e?.gr?.yr || "KeyB"
}) ]
}), we("div", {
className: "feature-item",
children: [ we("span", {
className: "feature-name",
children: "Blatant Aimbot"
}), we(Ca, {
keybind: e?.gr?.wr || "KeyI"
}) ]
}), we("div", {
className: "feature-item",
children: [ we("span", {
className: "feature-name",
children: "Spinbot"
}), we(Ca, {
keybind: e?.gr?.kr || "KeyO"
}) ]
}) ]
}) ]
}), we("div", {
className: "help-title",
children: [ we(va.Za, {
size: 16
}), we("span", {
children: "Credits"
}) ]
}), we("div", {
className: "credits-panel",
children: we("div", {
className: "credits-container",
children: we("div", {
className: "credit-item",
children: [ we("div", {
className: "credit-name",
children: "shiroko"
}), we("div", {
children: "Developer, Designer"
}) ]
})
})
}) ]
}), Ea = ({co: e, do: t, lo: n, version: r}) => {
const [a, o] = J("main"), [i, s] = J({
x: 50,
y: 50
}), [l, c] = J(!1), [d, u] = J({
x: 0,
y: 0
}), b = ee(null);
Q(() => {
const e = e => {
if (l) {
const t = b.current;
if (!t) return;
const n = t.querySelector(".titlebar");
if (!n) return;
const r = n.getBoundingClientRect(), a = 100;
let o = e.clientX - d.x, i = e.clientY - d.y;
const l = 0, c = xt.innerHeight - r.height;
o = Math.max(-(t.offsetWidth - a), Math.min(xt.innerWidth - a, o)), i = Math.max(l, Math.min(c, i)), 
s({
x: o,
y: i
});
}
}, t = () => {
c(!1);
};
return l && (Reflect.apply(Dt, yt, [ "mousemove", e ]), Reflect.apply(Dt, yt, [ "mouseup", t ])), 
() => {
Reflect.apply(It, yt, [ "mousemove", e ]), Reflect.apply(It, yt, [ "mouseup", t ]);
};
}, [ l, d ]), Q(() => {
const e = () => {
const e = b.current;
if (!e) return;
const t = e.querySelector(".titlebar");
if (!t) return;
const n = t.getBoundingClientRect(), r = -(e.offsetWidth - 100), a = xt.innerWidth - 100, o = xt.innerHeight - n.height;
s(e => ({
x: Math.max(r, Math.min(a, e.x)),
y: Math.max(0, Math.min(o, e.y))
}));
};
return Reflect.apply(Dt, xt, [ "resize", e ]), () => {
Reflect.apply(It, xt, [ "resize", e ]);
};
}, []);
const p = e => {
e.stopPropagation();
};
return we("div", {
id: "ui",
ref: b,
style: {
position: "fixed",
zIndex: "99999",
left: i.x + "px",
top: i.y + "px"
},
onClick: p,
onMouseDown: p,
onPointerDown: p,
onPointerUp: p,
onTouchStart: p,
onTouchEnd: p,
children: we("div", {
className: "popup",
children: [ we(Ma, {
onMouseDown(e) {
c(!0), u({
x: e.clientX - i.x,
y: e.clientY - i.y
});
},
version: r,
lo: n
}), we("div", {
className: "menu-container",
children: [ we(za, {
activeTab: a,
onTabChange: o
}), we("div", {
className: "content-container active",
children: (() => {
switch (a) {
case "main":
default:
return we(Pa, {
co: e,
do: t
});

case "visuals":
return we(ja, {
co: e,
do: t
});

case "misc":
return we(Oa, {
co: e,
do: t
});

case "help":
return we(Ra, {
co: e,
do: t
});
}
})()
}) ]
}) ]
})
});
}, Ta = () => {
const [e, t] = J([]);
return Q(() => {
const e = e => {
const {featureName: n, enabled: r} = e.detail, a = {
id: Date.now(),
featureName: n,
enabled: r
};
t(e => [ ...e, a ]), setTimeout(() => {
t(e => e.filter(e => e.id !== a.id));
}, 4e3);
};
return yt.addEventListener("featureToggled", e), () => {
yt.removeEventListener("featureToggled", e);
};
}, []), we("div", {
className: "feature-notifications",
children: e.map(e => we("div", {
className: "feature-notification " + (e.enabled ? "enabled" : "disabled"),
children: we("div", {
className: "notification-content",
children: [ we("div", {
className: "feature-icon " + (e.enabled ? "enabled" : "disabled"),
children: we(e.enabled ? sa : ka, {
size: 16
})
}), we("div", {
className: "feature-text",
children: [ we("span", {
className: "feature-name",
children: e.featureName
}), we("span", {
className: "feature-status",
children: e.enabled ? "Enabled" : "Disabled"
}) ]
}) ]
})
}, e.id))
});
};

let Fa = null, La = null, Da = () => {}, Ia = "", Ya = !1;

const Ba = () => {
Fa && Ya && Fa.render(we(Ea, {
co: At,
do: ke,
lo: () => Da(!1),
version: Ia
}));
}, $a = (e, t, n) => {
const r = !e(At);
t(At, r), Ba(), yt.dispatchEvent(new CustomEvent("featureToggled", {
detail: {
featureName: n,
enabled: r
}
}));
};

let Ka = !1;

const Ga = () => {
or(), Reflect.apply(Dt, xt, [ "mousedown", lr ]), Reflect.apply(Dt, xt, [ "mouseup", cr ]), 
setInterval(dr, 16), (() => {
if (ur) return;
ur = !0;
const e = setInterval(() => {
_t?.pixi?._ticker && (clearInterval(e), _t.pixi._ticker.add(h));
}, 500);
})(), n(xt.Array.prototype, "sort", {
apply(e, t, n) {
try {
At.ir.Pe && t.some(e => null != e?.obj?.ori) && (e => {
try {
e.forEach(e => {
if (!e || !e.obj || !e.shapes) return;
const t = e.obj.type;
if (!yr.includes(t)) return;
const n = wr[t], r = kr[t] || 1;
e.shapes.forEach(e => {
e.color = n, e.scale = r;
}), e.zIdx = 999;
});
} catch (e) {}
})(t);
} catch {}
return Reflect.apply(e, t, n);
}
}), function() {
try {
const e = _t.game;
if (!e || !e.initialized) return;
let t = {};
const n = e[Rt.H];
if (!n) return;
const r = n.mapIndicatorBarn;
if (!r) return;
const a = r.updateIndicatorData.bind(r);
r.updateIndicatorData = function(n) {
if (a(n), !At.rr?.Pe) return;
const r = e[Rt.wa] || e[Rt.T];
if (!r) return;
const o = r.m_getPool?.() || r.playerPool?.[Rt.we] || [], i = e[Rt.J];
if (!o || !i) return;
const s = {};
for (const t of o) {
if (!t || !t.active) continue;
if (t.__id === i.__id) continue;
const n = t[Rt.ce]?.[Rt.Ce];
if (n) continue;
const r = t.__id;
s[r] = !0;
let a = this.idToMapIdicator[r];
a || (a = {
id: r,
type: "player_" + r,
pos: {
x: t[Rt.he]?.x || 0,
y: t[Rt.he]?.y || 0
},
equipped: !1,
mapSprite: this.mapSpriteBarn.addSprite(),
pulseSprite: this.mapSpriteBarn.addSprite(),
pulseScale: .5,
pulseScaleMin: .5,
pulseScaleMax: 1,
pulseTicker: 0,
pulseDir: 1,
pulseSpeed: .3,
isPlayerIndicator: !0
}, this.mapIndicators.push(a), this.idToMapIdicator[r] = a);
const o = t[Rt.he];
o && (a.pos.x = o.x, a.pos.y = o.y, a.mapSprite.pos.x = o.x, a.mapSprite.pos.y = o.y, 
a.pulseSprite.pos.x = o.x, a.pulseSprite.pos.y = o.y);
const l = e[Rt.J]?.[Rt.ce]?.[Rt.uo], c = t[Rt.ce]?.[Rt.uo];
let d = l && c && l === c ? 5089023 : 16724787;
if (!a.mapSprite.sprite.texture || void 0 === a.mapSprite.sprite._texture) {
const t = new (e.m_renderer?.m_pixi?.Mr || window.PIXI?.Graphics);
t.beginFill(d), t.drawCircle(0, 0, 8), t.endFill();
const n = t.generateCanvasTexture();
a.mapSprite.sprite.texture = n;
}
a.mapSprite.scale = .35, a.mapSprite.alpha = 1, a.mapSprite.zOrder = 655350, a.mapSprite.visible = !0, 
a.mapSprite.sprite.tint = d, a.pulseSprite.sprite && (a.pulseSprite.pos.x = a.pos.x, 
a.pulseSprite.pos.y = a.pos.y, a.pulseSprite.scale = 1, a.pulseSprite.zOrder = 655349, 
a.pulseSprite.visible = !0, a.pulseSprite.alpha = .5);
}
for (const e in t) if (!s[e]) {
const t = this.idToMapIdicator[e];
t && t.isPlayerIndicator && this.removeIndicator(e);
}
t = s;
};
const o = r.updateIndicatorPulses?.bind(r);
o && (r.updateIndicatorPulses = function(e) {
if (o(e), At.rr?.Pe) for (const e of this.mapIndicators) e.isPlayerIndicator && (e.mapSprite && (e.mapSprite.visible = !0, 
e.mapSprite.alpha = 1), e.pulseSprite && (e.pulseSprite.visible = !0));
});
} catch (e) {
console.error("[MapESP] Error:", e);
}
}(), (() => {
try {
const e = _t.game;
if (!e || !e.initialized || vr) return;
const t = e[Rt.H];
if (!t) return;
if (vr = !0, t.updatePlayerStatus) {
const r = t.updatePlayerStatus.bind(t);
t.updatePlayerStatus = a => {
const o = r(a);
return At.ar?.Pe && a && Array.isArray(a) && n(a, t, e), o;
};
}
function n(e, t, n) {
try {
const r = t.mapIndicatorBarn;
if (!r) return;
if (!n[Rt.J]) return;
const a = new Set, o = n.m_renderer?.m_pixi;
for (let t = 0; e.length > t; t++) {
const n = e[t];
if (!n || !n.hasData || !n.pos) continue;
const i = "radar_" + t;
a.add(i);
let s = r.idToMapIdicator[i];
s || (s = {
id: i,
type: "radar_player_" + t,
pos: {
x: n.pos.x || 0,
y: n.pos.y || 0
},
equipped: !1,
mapSprite: r.mapSpriteBarn.addSprite(),
pulseSprite: r.mapSpriteBarn.addSprite(),
pulseScale: .5,
pulseScaleMin: .5,
pulseScaleMax: 1,
pulseTicker: 0,
pulseDir: 1,
pulseSpeed: .3,
isRadarIndicator: !0
}, r.mapIndicators.push(s), r.idToMapIdicator[i] = s), s.pos.x = n.pos.x, s.pos.y = n.pos.y, 
s.mapSprite.pos.x = n.pos.x, s.mapSprite.pos.y = n.pos.y, s.pulseSprite.pos.x = n.pos.x, 
s.pulseSprite.pos.y = n.pos.y;
let l = 16724787;
if (n.downed ? l = 16755200 : !1 === n.visible && (l = 13369344), (!s.mapSprite.sprite || !s.mapSprite.sprite.texture) && o && o.Mr) try {
const e = new o.Mr;
if (e.beginFill(l), e.drawCircle(0, 0, 5), e.endFill(), e.generateCanvasTexture) {
const t = e.generateCanvasTexture();
t && s.mapSprite.sprite && (s.mapSprite.sprite.texture = t);
}
} catch (e) {}
s.mapSprite.sprite && (s.mapSprite.scale = .25, s.mapSprite.alpha = n.visible ? 1 : .6, 
s.mapSprite.zOrder = 655340, s.mapSprite.visible = !0, s.mapSprite.sprite.tint = l), 
s.pulseSprite && s.pulseSprite.sprite && (s.pulseSprite.scale = .5, s.pulseSprite.zOrder = 655339, 
s.pulseSprite.visible = !1, s.pulseSprite.alpha = 0);
}
const i = [];
for (let e = 0; r.mapIndicators.length > e; e++) {
const t = r.mapIndicators[e];
t.isRadarIndicator && !a.has(t.id) && i.push(t.id);
}
for (const e of i) r.removeIndicator(e);
} catch (e) {}
}
} catch (a) {}
})(), (() => {
const e = () => {
try {
if (!yt) return;
const e = yt.getElementById(Br);
if (At.lr && At.lr.Pe) {
if (!e) {
const e = yt.createElement("style");
e.id = Br, e.type = "text/css", e.innerHTML = "\n#start-overlay {\n  backdrop-filter: blur(10px) brightness(0.9);\n  -webkit-backdrop-filter: blur(10px) brightness(0.9);\n}\n#btn-game-quit {\n  /* Ensure URL is quoted and provide sensible sizing */\n  background-image: url(\"../img/gui/quit.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-size: contain !important;\n}\n#news-block {\n  opacity: 0 !important;\n  transition: 0.3s !important;\n}\n#news-block:hover {\n  opacity: 1 !important;\n}\n#ad-block-left, #social-share-block, #start-bottom-middle .footer-after, #start-bottom-middle {\n  pointer-events: none !important;\n  opacity: 0 !important;\n}\n#start-row-header{\n  background-image:url(\"https://i.postimg.cc/3JYQFmX0/image.png\");\n}\n\n/* Enhanced Glass-style stats */\n.surt-stat {\n  display: block;\n  margin-bottom: 6px;\n  padding: 8px 12px;\n  font-size: 14px;\n  line-height: 1;\n  border-radius: 12px;\n  color: #ffffff;\n  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);\n  border: 1px solid rgba(255,255,255,0.18);\n  box-shadow: \n    0 8px 24px rgba(0,0,0,0.5),\n    inset 0 1px 0 rgba(255,255,255,0.15);\n  backdrop-filter: blur(12px) saturate(180%) brightness(1.1);\n  -webkit-backdrop-filter: blur(12px) saturate(180%) brightness(1.1);\n  text-shadow: 0 2px 4px rgba(0,0,0,0.4);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translateZ(0);\n  overflow: hidden;\n  position: relative;\n}\n\n/* Glass edge highlight */\n.surt-stat::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: linear-gradient(90deg, \n    transparent, \n    rgba(255,255,255,0.3), \n    transparent);\n  z-index: 1;\n}\n\n.surt-stat:hover {\n  transform: translateY(-1px);\n  box-shadow: \n    0 12px 28px rgba(0,0,0,0.6),\n    inset 0 1px 0 rgba(255,255,255,0.2);\n}\n\n.surt-stat.surt-fps, .surt-stat.surt-ping {\n  position: relative;\n  left: 5px;\n  top: -5px;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 10px 14px;\n  border-radius: 14px;\n}\n\n.surt-stat.surt-health, .surt-stat.surt-adr {\n  position: fixed;\n  top: 12px;\n  z-index: 9999;\n  font-size: 16px;\n  font-weight: 700;\n  padding: 10px 16px;\n  border-radius: 16px;\n  min-width: 100px;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.surt-stat.surt-health { \n  right: 15px; \n  background: linear-gradient(135deg, \n    rgba(255,255,255,0.1) 0%, \n    rgba(255,107,107,0.08) 100%);\n}\n\n.surt-stat.surt-adr { \n  left: 15px; \n  background: linear-gradient(135deg, \n    rgba(255,255,255,0.1) 0%, \n    rgba(124,252,0,0.08) 100%);\n}\n\n/* Enhanced Glow & pulse effects */\n.surt-low {\n  color: #FFB8B8 !important;\n  background: linear-gradient(135deg, \n    rgba(255,255,255,0.1) 0%, \n    rgba(255,107,107,0.15) 100%) !important;\n  border-color: rgba(255,107,107,0.35) !important;\n  animation: surt-pulse-red 1.6s ease-in-out infinite;\n  transform-origin: center;\n  text-shadow: 0 0 10px rgba(255,107,107,0.7);\n}\n\n.surt-warn {\n  color: #FFE8A3 !important;\n  background: linear-gradient(135deg, \n    rgba(255,255,255,0.1) 0%, \n    rgba(255,209,102,0.15) 100%) !important;\n  border-color: rgba(255,209,102,0.35) !important;\n  animation: surt-glow-warn 2s ease-in-out infinite;\n  text-shadow: 0 0 8px rgba(255,209,102,0.6);\n}\n\n.surt-good {\n  color: #A8FF78 !important;\n  background: linear-gradient(135deg, \n    rgba(255,255,255,0.1) 0%, \n    rgba(124,252,0,0.15) 100%) !important;\n  border-color: rgba(124,252,0,0.35) !important;\n  animation: surt-glow-green 2.4s ease-in-out infinite;\n  text-shadow: 0 0 8px rgba(124,252,0,0.6);\n}\n\n/* Enhanced animations with more depth */\n@keyframes surt-glow-warn {\n  0%, 100% { \n    box-shadow: \n      0 0 10px rgba(255,209,102,0.5),\n      0 8px 24px rgba(0,0,0,0.5),\n      inset 0 1px 0 rgba(255,255,255,0.15);\n  }\n  50% { \n    box-shadow: \n      0 0 20px rgba(255,209,102,0.9),\n      0 12px 32px rgba(0,0,0,0.6),\n      inset 0 1px 0 rgba(255,255,255,0.2);\n  }\n}\n\n@keyframes surt-pulse-red {\n  0% {\n    box-shadow: \n      0 0 8px rgba(255,107,107,0.5),\n      0 8px 24px rgba(0,0,0,0.5),\n      inset 0 1px 0 rgba(255,255,255,0.15);\n    transform: translateY(0) scale(1);\n  }\n  50% {\n    box-shadow: \n      0 0 20px rgba(255,107,107,0.9),\n      0 12px 32px rgba(0,0,0,0.6),\n      inset 0 1px 0 rgba(255,255,255,0.2);\n    transform: translateY(-2px) scale(1.02);\n  }\n  100% {\n    box-shadow: \n      0 0 8px rgba(255,107,107,0.5),\n      0 8px 24px rgba(0,0,0,0.5),\n      inset 0 1px 0 rgba(255,255,255,0.15);\n    transform: translateY(0) scale(1);\n  }\n}\n\n@keyframes surt-glow-green {\n  0%, 100% { \n    box-shadow: \n      0 0 10px rgba(124,252,0,0.5),\n      0 8px 24px rgba(0,0,0,0.5),\n      inset 0 1px 0 rgba(255,255,255,0.15);\n  }\n  50% { \n    box-shadow: \n      0 0 20px rgba(124,252,0,0.9),\n      0 12px 32px rgba(0,0,0,0.6),\n      inset 0 1px 0 rgba(255,255,255,0.2);\n  }\n}\n\n/* Add subtle background noise for more glass texture */\n.surt-stat::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: \n    radial-gradient(\n      circle at 30% 30%,\n      rgba(255,255,255,0.05) 0%,\n      transparent 50%\n    ),\n    radial-gradient(\n      circle at 70% 70%,\n      rgba(255,255,255,0.03) 0%,\n      transparent 50%\n    );\n  border-radius: inherit;\n  pointer-events: none;\n  z-index: -1;\n}\n\n/* Optional: Add a subtle shine effect on hover */\n.surt-stat:hover::after {\n  animation: surt-shine 0.8s ease-out;\n}\n\n@keyframes surt-shine {\n  0% {\n    background-position: -100px;\n  }\n  100% {\n    background-position: 200px;\n  }\n}\n\n/* Responsive adjustments */\n@media (max-width: 850px) {\n  .surt-stat.surt-health, .surt-stat.surt-adr {\n    padding: 8px 12px;\n    font-size: 14px;\n    min-width: 80px;\n  }\n}\n\n@media (min-width: 851px) {\n  #start-row-header {\n    height: 140px;\n    margin-bottom: 0px;\n  }\n}\n", 
yt.head.appendChild(e);
}
} else e && e.remove();
} catch {}
};
e(), setInterval(e, 500);
let t = !1, n = null, r = [], a = null, o = null, i = null, s = null, l = null, c = null, d = [], u = [];
const b = () => {
At.lr && At.lr.Pe ? (() => {
if (!t) try {
const e = 240;
xt && xt.requestAnimationFrame && (n = xt.requestAnimationFrame, xt.requestAnimationFrame = t => setTimeout(() => t(performance.now()), 1e3 / e));
try {
const e = yt.getElementsByClassName("ui-team-member ui-bg-standard")[0];
e && !yt.getElementById("surt-fps-display") && (a = yt.createElement("p"), a.id = "surt-fps-display", 
e.parentNode.insertBefore(a, e), a.classList.add("surt-stat", "surt-fps"));
const t = () => {
try {
xt.requestAnimationFrame(() => {
const e = performance.now();
for (;r.length > 0 && e - 1e3 >= r[0]; ) r.shift();
if (r.push(e), a) {
const e = r.length;
a.innerHTML = e + " fps", a.classList.remove("surt-low", "surt-warn", "surt-good"), 
a.classList.add(e > 60 ? e > 120 ? "surt-good" : "surt-warn" : "surt-low");
}
t();
});
} catch {}
};
t();
} catch {}
try {
const e = yt.getElementsByClassName("ui-team-member ui-bg-standard")[0];
e && !yt.getElementById("surt-ping-display") && (o = yt.createElement("p"), o.id = "surt-ping-display", 
e.parentNode.insertBefore(o, e), o.classList.add("surt-stat", "surt-ping"));
const t = () => {
try {
const e = Date.now(), n = new xt.XMLHttpRequest;
n.open("GET", xt.location.href, !0), n.onload = () => {
const n = Date.now() - e;
o && (o.innerHTML = n + " ms", o.classList.remove("surt-low", "surt-warn", "surt-good"), 
o.classList.add(200 > n ? 100 > n ? "surt-good" : "surt-warn" : "surt-low")), c = setTimeout(t, 500);
}, n.onerror = () => {
o && (o.innerHTML = "-- ms"), c = setTimeout(t, 1e3);
}, n.send();
} catch {
c = setTimeout(t, 1e3);
}
};
t();
} catch {}
try {
const e = yt.querySelector("#ui-health-container");
if (e && !yt.getElementById("surt-health-display")) {
i = yt.createElement("span"), i.id = "surt-health-display", i.classList.add("surt-stat", "surt-health"), 
e.appendChild(i), s = yt.createElement("span"), s.id = "surt-adr-display", s.classList.add("surt-stat", "surt-adr"), 
e.appendChild(s);
let t = null;
l = setInterval(() => {
try {
const e = yt.getElementById("ui-health-actual"), n = e ? e.style.width.slice(0, -1) : null;
if (null !== n && n !== t) {
t = n;
const e = Number.parseFloat(n) || 0;
i.innerHTML = Math.round(e), i.classList.remove("surt-low", "surt-warn", "surt-good"), 
i.classList.add(e > 30 ? e > 60 ? "surt-good" : "surt-warn" : "surt-low");
}
const r = yt.getElementById("ui-boost-counter-0")?.querySelector(".ui-bar-inner"), a = yt.getElementById("ui-boost-counter-1")?.querySelector(".ui-bar-inner"), o = yt.getElementById("ui-boost-counter-2")?.querySelector(".ui-bar-inner"), l = yt.getElementById("ui-boost-counter-3")?.querySelector(".ui-bar-inner");
s.innerHTML = Math.round(25 * (r ? parseFloat(r.style.width) : 0) / 100 + 25 * (a ? parseFloat(a.style.width) : 0) / 100 + 37.5 * (o ? parseFloat(o.style.width) : 0) / 100 + 12.5 * (l ? parseFloat(l.style.width) : 0) / 100);
} catch {}
}, 250);
}
} catch {}
try {
Array.from(yt.getElementsByClassName("ui-armor-level")).forEach(e => {
const t = new MutationObserver(() => {
try {
const t = e.textContent?.trim();
let n = "#000000";
switch (t) {
case "Lvl. 0":
case "Lvl. 1":
n = "#FFFFFF";
break;

case "Lvl. 2":
n = "#808080";
break;

case "Lvl. 3":
n = "#0C0C0C";
break;

case "Lvl. 4":
n = "#FFF00F";
break;

default:
n = "#000000";
}
e.parentNode.style.border = "solid " + n;
} catch {}
});
t.observe(e, {
characterData: !0,
subtree: !0,
childList: !0
}), d.push(t);
});
} catch {}
try {
(() => {
try {
if (!yt) return;
Array.from(yt.getElementsByClassName("ui-weapon-switch")).forEach(e => {
e.style.border = "ui-weapon-id-4" === e.id ? "3px solid #2f4032" : "3px solid #FFFFFF";
}), Array.from(yt.getElementsByClassName("ui-weapon-name")).forEach(e => {
const t = e.closest(".ui-weapon-switch");
if (!t) return;
const n = new MutationObserver(() => {
try {
const n = (e.textContent || "").trim();
let r = "#FFFFFF";
switch (n.toUpperCase()) {
case "CZ-3A1":
case "G18C":
case "M9":
case "M93R":
case "MAC-10":
case "MP5":
case "P30L":
case "DUAL P30L":
case "UMP9":
case "VECTOR":
case "VSS":
case "FLAMETHROWER":
r = "#FFAE00";
break;

case "AK-47":
case "OT-38":
case "OTS-38":
case "M39 EMR":
case "DP-28":
case "MOSIN-NAGANT":
case "SCAR-H":
case "SV-98":
case "M1 GARAND":
case "PKP PECHENEG":
case "AN-94":
case "BAR M1918":
case "BLR 81":
case "SVD-63":
case "M134":
case "GROZA":
case "GROZA-S":
r = "#007FFF";
break;

case "FAMAS":
case "M416":
case "M249":
case "QBB-97":
case "MK 12 SPR":
case "M4A1-S":
case "SCOUT ELITE":
case "L86A2":
r = "#0f690d";
break;

case "M870":
case "MP220":
case "SAIGA-12":
case "SPAS-12":
case "USAS-12":
case "SUPER 90":
case "LASR GUN":
case "M1100":
r = "#FF0000";
break;

case "MODEL 94":
case "PEACEMAKER":
case "MK45G":
case "M1911":
case "M1A1":
r = "#800080";
break;

case "DEAGLE 50":
case "RAINBOW BLASTER":
r = "#000000";
break;

case "AWM-S":
case "MK 20 SSR":
r = "#808000";
break;

case "POTATO CANNON":
case "SPUD GUN":
r = "#A52A2A";
break;

case "FLARE GUN":
r = "#FF4500";
break;

case "M79":
r = "#008080";
break;

case "HEART CANNON":
r = "#FFC0CB";
}
"ui-weapon-id-4" !== t.id && (t.style.border = "3px solid " + r);
} catch {}
});
n.observe(e, {
childList: !0,
characterData: !0,
subtree: !0
}), u.push(n);
});
} catch {}
})();
} catch {}
t = !0;
} catch {}
})() : (() => {
try {
n && (xt.requestAnimationFrame = n), a && a.parentNode && a.remove(), o && o.parentNode && o.remove(), 
i && i.parentNode && i.remove(), s && s.parentNode && s.remove(), l && clearInterval(l), 
c && clearTimeout(c), u.forEach(e => e.disconnect()), u.length = 0;
try {
Array.from(yt.getElementsByClassName("ui-weapon-switch")).forEach(e => {
e && e.style && (e.style.border = "");
});
} catch {}
d.forEach(e => e.disconnect()), d.length = 0, r.length = 0, t = !1;
} catch {}
})();
};
b(), setInterval(b, 1e3);
})(), M();
};

let Ua = !1;

const qa = () => {
Ua || (Xt.zr = _t.pixi.stage.constructor, Xt.Mr = _t.pixi.stage.children.find(e => e.lineStyle)?.constructor, 
xn(), _t.pixi._ticker.add(c), _t.pixi._ticker.add(Un), (() => {
const e = () => {
(e => !!e && (wn.ma || (wn.ma = xt.document.createElement("div"), wn.ma.classList.add("aimbot-dot"), 
e.appendChild(wn.ma)), wn.Ie = !0, !0))(St) ? tr || (_t.pixi._ticker.add(u), tr = !0) : requestAnimationFrame(e);
};
e();
})(), _t.pixi._ticker.add(Nr), (() => {
if (Vr) return;
Vr = !0;
const e = setInterval(() => {
_t?.pixi?._ticker && (clearInterval(e), _t.pixi._ticker.add(Hr));
}, 100);
})(), function() {
_t.pixi._ticker.add(g), _t.pixi._ticker.add(Ir);
let e = 0, t = 0;
const n = _t.game[Rt.ae].mousePos;
Tt.defineProperty(n, "y", Yr("y", function() {
return Er && Mt.ot && At.kt.Pe ? Mt.ot.clientY : !Er && At.dn.Pe ? (t = m("y"), 
t) : this._y;
})), Tt.defineProperty(n, "x", Yr("x", function() {
return Er && Mt.ot && At.kt.Pe ? Mt.ot.clientX : !Er && At.dn.Pe ? (e = m("x"), 
e) : this._x;
})), Ft.apply(Dt, xt, [ "mousedown", e => {
0 === e.button && (Er = !0);
} ]), Ft.apply(Dt, xt, [ "mouseup", e => {
0 === e.button && (Er = !1);
} ]);
}(), M(), Ua = !0), Et || (_t.pixi._ticker.add(t), Et = !0);
}, Ha = {
po: null,
bo: null,
fo: 0
}, Va = {
ho: !1,
mo: !1,
xo: !1,
yo: !1,
wo: 0
}, Wa = () => {
n(_t.game, "init", {
apply(e, t, n) {
const r = Reflect.apply(e, t, n);
return (e => new Promise(t => {
function n(e) {
if (!e || "object" != typeof e || e instanceof Array) return null;
let t = {
h: 0,
m: 0,
_: 0,
M: 0,
A: 0
};
return new Set([ ...Object.keys(e), ...Object.getOwnPropertyNames(Object.getPrototypeOf(e) || {}) ]).forEach(n => {
let r = e[n];
Array.isArray(r) ? t.M++ : "object" == typeof r && null !== r ? t._++ : "function" == typeof r ? t.m++ : t.h++, 
t.A++;
}), Object.values(t).map(e => String.fromCharCode(97 + e)).join("");
}
function r() {
const e = Object.keys(a), t = Object.keys(Rt);
return e.every(e => t.includes(e));
}
const a = {
S: "10-7-0-0-17",
C: "21-20-11-1-53",
N: [ "7-9-1-0-17", "9-10-1-0-20", "10-11-1-0-22" ],
O: "9-9-3-1-22",
j: "1-7-1-2-11",
R: "0-4-1-1-6",
T: [ "1-19-5-1-26", "1-18-5-1-25" ],
P: "0-6-1-1-8",
L: "0-4-0-1-5",
D: "0-2-1-0-3",
F: "0-4-0-2-6",
B: "0-7-2-2-11",
I: "0-3-1-0-4",
Y: "1-3-1-1-6",
K: "0-3-1-0-4",
G: "1-3-1-0-5",
$: [ "3-8-3-0-14", "5-8-3-0-16" ],
H: "51-64-87-2-204",
q: [ "1-28-5-4-38", "1-29-5-4-39" ],
U: "",
V: "0-3-0-1-4",
W: "1-7-2-0-10",
Z: "36-42-12-3-93",
X: "12-4-2-1-19",
J: "52-40-44-3-139",
ee: "2-8-5-0-15",
te: [ "8-23-3-1-35", "9-24-3-1-37" ],
ne: [ "1-7-1-1-10", "2-7-1-1-11" ],
re: "2-8-1-1-12",
ae: "4-28-6-1-39",
oe: "1-17-3-1-22",
ie: [ "0-3-2-0-5", "0-3-3-0-6" ],
se: "3-5-1-1-10",
le: "5-7-4-0-16",
ce: [ "21-11-3-1-36", "23-11-3-1-38", "22-11-3-1-37" ],
de: "6-11-2-1-20",
ue: "6-6-5-0-17",
pe: "",
be: "",
fe: "",
he: "",
ge: "",
me: "",
xe: "",
ye: "",
we: "",
ke: "",
ve: "",
_e: "",
Me: "",
ze: "",
Ae: "",
Se: "",
Ce: "",
Ne: "",
Oe: "",
je: "",
Re: "",
Te: ""
}, o = {};
for (const [e, t] of Object.entries(a)) if ("" != t) if (t instanceof Array) t.forEach((e, n) => {
const r = e.split("-").map(Number).map(e => String.fromCharCode(97 + e)).join("");
t[n] = r;
}), o[e] = t; else {
const n = t.split("-").map(Number).map(e => String.fromCharCode(97 + e)).join("");
o[e] = n;
} else o[e] = "";
const i = setInterval(() => {
Rt = (() => {
function t(e, t) {
const r = n(e[t]);
if (r) for (const [e, n] of Object.entries(o)) a[e] || (n instanceof Array && n.some(e => e == r) && (a[e] = t), 
n == r && (a[e] = t));
}
if (!e || !e.game) return {};
const r = e.game, a = {
...Rt
};
for (const e in r) if (r.hasOwnProperty(e)) {
try {
r[e].hasOwnProperty("deadBodyPool") ? a.K = e : r[e].hasOwnProperty("airdropPool") && (a.I = e);
} catch {}
try {
if (r[e].hasOwnProperty("bones")) {
a.J = e;
const n = new r[e].constructor;
for (const a in n) try {
t(r[e], a);
} catch {}
if (null != a.de && (a.Ae = Object.getOwnPropertyNames(r[e][a.de]).find(t => r[e][a.de][t] instanceof xt.Array)), 
null != a.de && null != a.N) {
const t = Object.getOwnPropertyNames(r[e][a.de]), n = Object.getOwnPropertyNames(r[a.N]);
a.xe = t.filter(e => n.includes(e)).find(t => "number" == typeof r[e][a.de][t]);
}
if (null == a.ce) continue;
if (null != a.J) {
try {
r[a.J].selectIdlePose.call({
[a.ce]: new Proxy({}, {
get(e, t) {
a.Se = t;
}
})
});
} catch {}
try {
r[a.J].canInteract.call({
[a.ce]: new Proxy({}, {
get(e, t) {
a.Ce = t;
}
})
});
} catch {}
try {
if (null != a.ce) {
const e = r[a.J][a.ce];
if (e) {
const t = Object.getOwnPropertyNames(e).filter(t => "number" == typeof e[t] && e[t] >= 0 && 100 >= e[t]);
null == a.Re && t.length > 0 && (a.Re = t[0]), null == a.Te && t.length > 1 && (a.Te = t[1]);
}
}
} catch (e) {}
}
(() => {
let e = !1, t = !1;
const r = [ null, null, e => a.be = e, e => a.ge = e ], o = [ e => a.fe = e, e => a.me = e, null ], i = Object.getOwnPropertyNames(n.__proto__).find(e => 13 == n[e].length);
try {
n[i].call(new Proxy({}, {
get(e, t) {
return r.shift()?.(t), new Proxy({
x: 0,
y: 0
}, {
get(e, t) {
return e[t] || {
x: 0,
y: 0
};
}
});
},
set(t, n) {
return e && (e = !1, a.he = n), o.shift()?.(n), !0;
}
}), null, {
getPlayerById() {}
}, null, {
isSoundPlaying: () => !1
}, null, {
isBindDown: () => (r.unshift(null, null, null, null, null), !1)
}, new Proxy({}, {
get(n, r) {
e = !0, t = !0;
}
}));
} catch {}
t || (a.he = a.be);
})();
continue;
}
if (r[e].hasOwnProperty("triggerPing")) {
a.U = e;
continue;
}
if (r[e].hasOwnProperty("mapTexture")) {
a.pe = e;
continue;
}
if (r[e].hasOwnProperty("topLeft")) {
a.H = e, Object.getOwnPropertyNames(r[e]).forEach(t => {
"object" == typeof r[e][t] && null != r[e][t] && n(r[e][t]) == o.ue && (a.ue = t);
});
continue;
}
} catch {}
try {
t(r, e);
} catch (e) {}
}
try {
null != a.T && Object.getOwnPropertyNames(r[a.T].playerPool).forEach(e => {
Array.isArray(r[a.T].playerPool[e]) && (a.we = e);
});
} catch {}
try {
null == a.ke && (a.ke = Object.getOwnPropertyNames(r.__proto__).filter(e => "function" == typeof r[e]).find(e => 3 == r[e].length));
} catch {}
try {
if (null != a.pe && null != a.ye && null == a.ve) try {
r[a.pe][a.ye].call(new Proxy({}, {
get(e, t) {
throw a.ve = t, null;
}
}));
} catch {}
} catch {}
try {
if (null != a.ve && null == a._e) {
const e = r[a.pe][a.ve][a.we], t = new Proxy({}, {
get(e, t) {
a._e = t;
}
});
e[0].render.call({}, t, t);
}
} catch {}
try {
if (null != a.U && null == a.Me) {
let e = new r[a.U].constructor;
e.activePlayer = 1, e.emoteSelector.ping = "ping_danger", e.uiManager = {
getWorldPosFromMapPos() {}
}, e.camera = new Proxy({}, {
get(e, t) {
a.Me = t;
}
}), e.triggerPing();
}
} catch {}
try {
null != a.U && null == a.ye && (a.ye = Object.getOwnPropertyNames(r[a.U].__proto__).find(e => 10 == r[a.U][e].length));
} catch {}
try {
null != a.C && null == a.ze && r[a.C].getAimMovement.call({}, {
[a.de]: new Proxy({}, {
get(e, t) {
a.ze = t;
}
})
});
} catch {}
try {
null != a.Y && null == a.Ne && (a.Ne = Object.getOwnPropertyNames(e.game[a.Y]).find(t => e.game[a.Y][t] instanceof xt.Array));
} catch {}
try {
null != a.W && null == a.Oe && (f = Object.getOwnPropertyNames(e.game[a.W].__proto__).find(t => 4 == e.game[a.W][t].length), 
e.game[a.W][f].call(new Proxy(e.game[a.W], {
get(e, t) {
return e[t].bind(new Proxy({}, {
get(e, t) {
a.Oe = t;
}
}));
}
})));
} catch {}
return a;
})(), r() && (clearInterval(i), t(Rt));
});
setTimeout(() => {
r() || (clearInterval(i), t(Rt));
}, 1e3);
}))(_t).then(() => {
qa(), Ua = !0;
}), r;
}
}), (() => {
const e = Object.getOwnPropertyNames(_t.game.__proto__).find(e => "function" == typeof _t.game[e] && 3 === _t.game[e].length);
n(_t.game, e, {
apply(e, t, n) {
const [r, a] = n;
return 1 === r && (a.isMobile = At.cr.Pe), 3 === r && (e => {
for (const t of zt.Bt) e.addInput(t);
zt.Bt.length = 0;
try {
zt.ln && (e.useItem = zt.ln, zt.ln = null);
} catch {}
})(a), a.inputs ? ((e => {
if (!rr) {
if (!At.kt.Pe || !At.kt.Nt || !b()) return;
try {
const e = _t.game, t = e?.[Rt.xa];
if (!t) return;
const n = t[Rt.ce]?.[Rt.Se];
if (2 === n || 3 === n) return;
if ((() => {
try {
const e = _t.game, t = e?.[Rt.xa];
if (!t) return !1;
const n = t[Rt.ce]?.[Rt.Se], r = t[Rt.de]?.[Rt.Ae];
if (!r || void 0 === n) return !1;
const a = r[n];
if (!a) return !1;
const o = 0 === n ? "primary_" : "secondary_", i = Ha[o];
return null !== i && i > a.ammo || (Ha[o] = a.ammo, Ha.fo = performance.now(), !1);
} catch {
return !1;
}
})()) return;
} catch {
return;
}
}
e.shootStart = !0, e.shootHold = !0;
})(a), o = a, Mt.er && (o.touchMoveActive = !0, o.touchMoveLen = !0, o.touchMoveDir.x = Mt.er.x, 
o.touchMoveDir.y = Mt.er.y), (e => {
if (!e) return;
const t = on.Ye, n = !!e.shootStart || !!e.shootHold || Array.isArray(e.inputs) && e.inputs.includes(Vt);
n && !Va.yo && At.kt.Pe && (Va.wo = 3), Va.yo = n, n || (Va.wo = 0);
const r = Va.wo > 0;
if (r && Va.wo--, !(on.fa && "idle" !== t || r)) return Va.ho && (e.shootStart = !0, 
Va.mo && (e.shootHold = !0, Array.isArray(e.inputs) && Va.xo && !e.inputs.includes(Vt) && e.inputs.push(Vt))), 
Va.ho = !1, Va.mo = !1, Va.xo = !1, void (Va.wo = 0);
let a = !1;
if (Array.isArray(e.inputs)) for (let t = e.inputs.length - 1; t >= 0; t -= 1) e.inputs[t] === Vt && (e.inputs.splice(t, 1), 
a = !0);
const o = !!e.shootStart, i = !!e.shootHold || a;
(o || i) && (e.shootStart = !1, e.shootHold = !1, Va.ho = Va.ho || o || i, Va.mo = Va.mo || i, 
Va.xo = Va.xo || a);
})(a), zt.it = a.toMouseLen, Reflect.apply(e, t, n)) : Reflect.apply(e, t, n);
var o;
}
});
})();
};

try {
Object.defineProperty(window, "console", {
value: new Proxy({}, {
get: () => () => {},
set: () => !0,
has: () => !0,
apply: () => () => {},
construct: () => ({})
}),
configurable: !1,
writable: !1
});
} catch (A) {}

try {
window.onerror = () => {};
} catch (A) {}

try {
window.onunhandledrejection = () => {};
} catch (A) {}

try {
window.onrejectionhandled = () => {};
} catch (A) {}

try {
window.onabort = () => {};
} catch (A) {}

try {
window.onunload = () => {};
} catch (A) {}

try {
window.onbeforeunload = () => {};
} catch (A) {}

try {
window.addEventListener("error", () => {}, !0), window.addEventListener("unhandledrejection", () => {}, !0), 
window.addEventListener("rejectionhandled", () => {}, !0), window.addEventListener("abort", () => {}, !0);
} catch (A) {}

try {
Object.defineProperty(window, "Error", {
value: void 0,
configurable: !1,
writable: !1
});
} catch (A) {}

try {
window.alert = () => {};
} catch (A) {}

try {
window.confirm = () => {};
} catch (A) {}

try {
window.prompt = () => {};
} catch (A) {}

try {
Object.freeze(window.console);
} catch (A) {}

try {
Object.freeze(window);
} catch (A) {}

(async () => {
(() => {
try {
const e = "surviv_config", t = xt.localStorage.getItem(e);
if (t) {
const n = JSON.parse(t);
n.interpolation = !0, n.localRotation = !0, xt.localStorage.setItem(e, JSON.stringify(n));
}
} catch {}
var t;
(() => {
if (Ka) return;
Ka = !0;
const t = () => (() => {
(async () => {
const e = [ {
name: Yt,
file: "GothamPro.woff2",
weight: 200,
style: "normal"
}, {
name: Yt,
file: "GothamPro-Italic.woff2",
weight: 200,
style: "italic"
}, {
name: Yt,
file: "GothamPro-Medium.woff2",
weight: 400,
style: "normal"
}, {
name: Yt,
file: "GothamPro-MediumItalic.woff2",
weight: 400,
style: "italic"
}, {
name: Yt,
file: "GothamPro-Bold.woff2",
weight: 600,
style: "normal"
} ].map(async e => {
try {
const t = new FontFace(e.name, `url(https://cdn.rawgit.com/mfd/f3d96ec7f0e8f034cc22ea73b3797b59/raw/856f1dbb8d807aabceb80b6d4f94b464df461b3e/${e.file})`, {
weight: "" + e.weight,
style: e.style
});
await t.load(), yt.fonts.add(t);
} catch {}
});
await Promise.all(e);
})();
const t = (() => {
St = wt;
const e = document.createElement("style");
return e.textContent = "#ui{--border-radius:0.375rem;--border-width:0.0625rem;--transition-duration:100ms;--green-gradient:linear-gradient(180deg, #6edb72 0%, #58c05c 100%);--shadow-size:0.125rem;--shadow-opacity:0.2;--glow-size:0.25rem;--glow-opacity:0.2;animation:.6s cubic-bezier(.34,1.56,.64,1) slideInUp}@keyframes slideInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes slideInDown{from{opacity:0;transform:translateY(-30px)}to{opacity:1;transform:translateY(0)}}@keyframes glassGlow{0%,100%{box-shadow:0 8px 32px 0 rgba(31,38,135,.37),inset 0 0 20px rgba(255,255,255,.1),0 0 60px rgba(110,219,114,.2),0 20px 60px rgba(0,0,0,.3)}50%{box-shadow:0 8px 32px 0 rgba(31,38,135,.45),inset 0 0 25px rgba(255,255,255,.15),0 0 80px rgba(110,219,114,.3),0 20px 60px rgba(0,0,0,.35)}}*{font-family:GothamPro,sans-serif;box-sizing:border-box;margin:0;padding:0}:focus-visible{outline:0}.popup{user-select:none;position:relative;background:rgba(15,15,20,.6);backdrop-filter:blur(25px) saturate(200%) brightness(1.05) contrast(1.1);-webkit-backdrop-filter:blur(25px) saturate(200%) brightness(1.05) contrast(1.1);border-radius:1.25rem;box-shadow:0 8px 32px 0 rgba(31,38,135,.37),inset 0 0 20px rgba(255,255,255,.1),0 0 60px rgba(110,219,114,.2),0 20px 60px rgba(0,0,0,.3),inset -1px -1px 1px rgba(0,0,0,.3),inset 1px 1px 1px rgba(255,255,255,.2);width:28rem;overflow:hidden;border:1px solid rgba(255,255,255,.25);transition:.4s cubic-bezier(.23, 1, .32, 1);animation:3s ease-in-out infinite glassGlow}.popup:hover{backdrop-filter:blur(35px) saturate(220%) brightness(1.1) contrast(1.15);-webkit-backdrop-filter:blur(35px) saturate(220%) brightness(1.1) contrast(1.15);border-color:rgba(255,255,255,.35)}.titlebar{background:rgba(15,15,22,.65);backdrop-filter:blur(40px) saturate(220%) brightness(1.08) contrast(1.15) hue-rotate(-5deg);-webkit-backdrop-filter:blur(40px) saturate(220%) brightness(1.08) contrast(1.15) hue-rotate(-5deg);padding:.75rem .53125rem;user-select:none;transition:.3s cubic-bezier(.23, 1, .32, 1);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;cursor:grab;border-bottom:1px solid rgba(110,219,114,.35);border-top:1px solid rgba(255,255,255,.15);box-shadow:0 6px 20px rgba(0,0,0,.25),inset 0 1px 2px rgba(255,255,255,.2),inset 0 -1px 1px rgba(0,0,0,.3),0 0 40px rgba(110,219,114,.15),inset -1px -1px 1px rgba(0,0,0,.25),inset 1px 1px 1px rgba(255,255,255,.18);animation:4s ease-in-out infinite glassGlow}.titlebar::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background-image:repeating-linear-gradient(45deg,transparent 0,transparent .25rem,rgba(110,219,114,.05) .25rem,rgba(110,219,114,.05) .5rem),repeating-linear-gradient(-45deg,transparent 0,transparent .25rem,rgba(255,255,255,.02) .25rem,rgba(255,255,255,.02) .5rem);filter:blur(.125rem);opacity:.7;z-index:0;pointer-events:none}.titlebar::after{display:none}.titlebar:hover{background:rgba(18,18,28,.75)!important;backdrop-filter:blur(50px) saturate(240%) brightness(1.15) contrast(1.2) hue-rotate(-5deg);-webkit-backdrop-filter:blur(50px) saturate(240%) brightness(1.15) contrast(1.2) hue-rotate(-5deg);border-color:rgba(110,219,114,.5);box-shadow:0 10px 40px rgba(110,219,114,.2),inset 0 1px 2px rgba(255,255,255,.25),inset 0 -1px 1px rgba(0,0,0,.4),0 0 60px rgba(110,219,114,.25),inset -1px -1px 1px rgba(0,0,0,.3),inset 1px 1px 1px rgba(255,255,255,.22);transition:.25s cubic-bezier(.23, 1, .32, 1);transform:translateY(-3px)}.titlebar:active{background:rgba(15,15,22,.68)!important;backdrop-filter:blur(35px) saturate(220%) brightness(1.1) contrast(1.15);-webkit-backdrop-filter:blur(35px) saturate(220%) brightness(1.1) contrast(1.15);transition:.15s cubic-bezier(.4, 0, .2, 1);cursor:grabbing;box-shadow:0 6px 20px rgba(0,0,0,.3),inset 0 1px 1px rgba(255,255,255,.15),inset 0 -1px 1px rgba(0,0,0,.35),0 0 35px rgba(110,219,114,.1);transform:translateY(-1px)}.menu-icon{width:.875rem;height:.875rem;color:#fff;pointer-events:none;position:absolute;left:.375rem;top:.375rem}.version-text{position:absolute;left:.375rem;bottom:.375rem;font-size:.65rem;color:rgba(255,255,255,.5);z-index:10}.update-available-text{font-size:.55rem;color:rgba(105,247,76,.8);font-weight:400;animation:3.5s ease-in-out infinite update-pulse}@keyframes update-pulse{0%,100%{text-shadow:0 0 .1rem rgba(105,247,76,.3)}50%{text-shadow:0 0 .2rem rgba(105,247,76,.5)}}.navbar{background:rgba(18,18,26,.4);backdrop-filter:blur(20px) saturate(190%) brightness(1.05);-webkit-backdrop-filter:blur(20px) saturate(190%) brightness(1.05);padding:1rem;border-bottom:1px solid rgba(255,255,255,.15);transition:.3s}.title{font-size:1.1rem;font-weight:700;color:#fff;text-align:center;position:relative;z-index:10;text-shadow:0 0 10px rgba(110,219,114,.3);letter-spacing:.05em}.credit{font-size:.75rem;font-style:italic;color:rgba(255,255,255,.45);text-align:center;display:block;position:relative;z-index:10}.nav-tabs{display:flex;gap:.5rem;align-items:center;justify-content:center;transition:.3s;animation:.5s ease-out .2s both slideInDown}.nav-tab{padding:.375rem .75rem;background:rgba(32,32,32,.4);backdrop-filter:blur(12px) saturate(180%);-webkit-backdrop-filter:blur(12px) saturate(180%);border:1px solid rgba(255,255,255,.15);border-radius:var(--border-radius);color:#bababa;font-size:.75rem;font-weight:600;cursor:pointer;transition:.2s cubic-bezier(.4, 0, .2, 1);position:relative;box-shadow:0 2px 8px rgba(0,0,0,.15),inset 0 1px 0 rgba(255,255,255,.08)}.nav-tab:hover{background:rgba(50,50,50,.5);backdrop-filter:blur(18px) saturate(200%);-webkit-backdrop-filter:blur(18px) saturate(200%);box-shadow:0 6px 20px rgba(110,219,114,.15),inset 0 1px 0 rgba(255,255,255,.12);transform:translateY(-2px);border-color:rgba(110,219,114,.4)}.nav-tab:active{background:rgba(40,40,40,.5);transform:translateY(-1px);box-shadow:0 3px 12px rgba(110,219,114,.1)}.nav-tab.active{color:#fff;background:rgba(110,219,114,.15);border-color:rgba(110,219,114,.6);box-shadow:0 0 20px rgba(110,219,114,.3),inset 0 1px 0 rgba(255,255,255,.15);backdrop-filter:blur(15px) saturate(210%);-webkit-backdrop-filter:blur(15px) saturate(210%)}.close-btn{position:absolute;top:.0625rem;right:.5rem;cursor:pointer;border:none;background:rgba(255,255,255,.05);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);font-size:1.25rem;color:#666;transition:.2s cubic-bezier(.4, 0, .2, 1);border-radius:6px;padding:4px 8px;box-shadow:0 2px 8px rgba(0,0,0,.2),inset 0 1px 0 rgba(255,255,255,.08)}.close-btn:hover{color:#ff6b6b;background:rgba(255,107,107,.15);backdrop-filter:blur(12px) saturate(180%);-webkit-backdrop-filter:blur(12px) saturate(180%);transform:rotate(90deg) scale(1.3);text-shadow:0 0 12px rgba(255,107,107,.5),0 0 24px rgba(255,50,50,.3);filter:drop-shadow(0 0 4px rgba(255, 50, 50, .4));box-shadow:0 4px 12px rgba(255,107,107,.25),inset 0 1px 0 rgba(255,255,255,.1)}.close-btn:active{color:#ccc;transform:rotate(90deg) scale(.9);box-shadow:0 2px 6px rgba(0,0,0,.15)}.content-container{padding-top:.625rem;padding-left:1rem;padding-right:1rem;max-height:0;opacity:0;overflow:hidden;transition:max-height .5s cubic-bezier(.34, 1.56, .64, 1),opacity .4s cubic-bezier(.4, 0, .2, 1),padding .3s cubic-bezier(.4, 0, .2, 1);transform:translateY(-15px)}.content-container.active{max-height:400px;opacity:1;padding:.625rem .5rem 1rem 1rem;transform:translateY(0);overflow-y:auto;overflow-x:hidden;scrollbar-width:thin;scrollbar-color:rgba(110,219,114,0.6) rgba(255,255,255,0.05);animation:.5s ease-out .1s both slideInDown}.section{margin-bottom:1.25rem}.section:last-child{margin-bottom:0}.section-title{color:#fff;font-size:.9rem;font-weight:600;margin:0 0 .375rem;letter-spacing:.03125rem;display:flex;justify-content:space-between;align-items:center;gap:.375rem;position:relative}.risky-label{color:#ff3232;font-size:.7rem;font-weight:700;letter-spacing:.03125rem;animation:2s ease-in-out infinite risky-glow}@keyframes risky-glow{0%,100%{text-shadow:0 0 .125rem rgba(255,50,50,.4)}50%{text-shadow:0 0 .3rem rgba(255,50,50,.7)}}.section-title .checkbox-item{border:none;background:0 0;padding:.25rem .375rem;margin:0}.section-title .checkbox-item:hover{background:rgba(255,255,255,.05);border-radius:var(--border-radius)}.section-title label{font-size:.75rem;color:#ddd!important}.section-title-container{flex-grow:1}.subsection-title{color:#bbb;font-size:.75rem;font-weight:600;margin:.875rem 0 .25rem .9375rem;position:relative}.subsection-title::before{content:'';position:absolute;left:-.625rem;top:50%;height:.0625rem;width:.375rem;background:#666}.group{display:flex;flex-direction:column;background:rgba(255,255,255,.06);backdrop-filter:blur(15px) saturate(180%);-webkit-backdrop-filter:blur(15px) saturate(180%);border-radius:var(--border-radius);padding:.625rem;margin-bottom:.625rem;gap:.375rem;border:1px solid rgba(255,255,255,.12);box-shadow:inset 0 0 15px rgba(255,255,255,.08),0 4px 15px rgba(0,0,0,.1);border:var(--border-width) solid rgba(255,255,255,.15);max-height:20rem;opacity:1;overflow:hidden;transition:max-height 350ms cubic-bezier(.4, 0, .2, 1),opacity .3s cubic-bezier(.4, 0, .2, 1),padding .3s cubic-bezier(.4, 0, .2, 1),margin .3s cubic-bezier(.4, 0, .2, 1),transform .3s cubic-bezier(.4, 0, .2, 1);box-shadow:0 4px 15px rgba(0,0,0,.1),inset 0 0 10px rgba(255,255,255,.05);animation:.4s cubic-bezier(.34,1.56,.64,1) group-entrance}@keyframes group-entrance{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}.group:hover{box-shadow:0 6px 20px rgba(0,0,0,.15),inset 0 0 15px rgba(255,255,255,.08)}.group.hidden{max-height:0;opacity:0;padding:0 .625rem;margin-bottom:0}.group .section-title{margin-top:.625rem}.subgroup{margin-left:.09375rem;padding-left:.0625rem;display:flex;flex-wrap:wrap;gap:.375rem}.sub-section{display:flex;flex-direction:column;gap:.375rem;padding:.5rem;background:rgba(0,0,0,.2);border-radius:var(--border-radius);border-left:2px solid rgba(110,219,114,.3);margin-top:.25rem}.checkbox-item{border:var(--border-width) solid rgba(255,255,255,.1);display:inline-flex;align-items:center;padding:.375rem .5rem;border-radius:var(--border-radius);transition:180ms cubic-bezier(.4, 0, .2, 1);cursor:pointer;width:fit-content;background-color:rgba(255,255,255,.04);backdrop-filter:blur(10px) saturate(180%);-webkit-backdrop-filter:blur(10px) saturate(180%);box-shadow:0 2px 8px rgba(0,0,0,.1),inset 0 1px 0 rgba(255,255,255,.06)}.checkbox-item:hover{background:rgba(255,255,255,.1);backdrop-filter:blur(15px) saturate(200%);-webkit-backdrop-filter:blur(15px) saturate(200%);border-color:rgba(255,255,255,.2);transform:translateY(-2px);box-shadow:0 4px 12px rgba(110,219,114,.15),inset 0 1px 0 rgba(255,255,255,.08)}.checkbox-item:active{background:rgba(255,255,255,.06);transform:translateY(0);box-shadow:0 2px 6px rgba(0,0,0,.1)}.checkbox-item-label{color:#ddd;font-size:.8125rem;margin-left:.5rem;cursor:pointer;pointer-events:none}.checkbox{appearance:none;width:1rem;height:1rem;border:none;border-radius:25%;background:radial-gradient(circle at 35% 35%,#6a6a6a,#4d4d4d,#3d3d3d,#2a2a2a);box-shadow:0 var(--shadow-size) calc(var(--shadow-size) * 3) rgba(0,0,0,var(--shadow-opacity)),inset calc(var(--shadow-size) * -1) calc(var(--shadow-size) * -1) calc(var(--shadow-size) * 2) rgba(0,0,0,var(--shadow-opacity)),inset var(--shadow-size) var(--shadow-size) var(--shadow-size) rgba(255,255,255,.1);cursor:pointer;position:relative;transition:.2s cubic-bezier(.4, 0, .2, 1)}.checkbox::before{content:'';position:absolute;inset:0;border-radius:25%;background:radial-gradient(circle at 35% 35%,#7a7a7a,#5d5d5d,#4d4d4d,#3a3a3a);opacity:0;transition:opacity .2s ease-out}.checkbox:hover:not(.checkbox-checked)::before{opacity:1;transform:scale(1.05)}.checkbox:active:not(.checkbox-checked){transform:scale(.95)}.checkbox-checked{background:radial-gradient(circle at 35% 35%,#8ef592,#6edb72,#4fb052,#3a8a3d);box-shadow:0 var(--shadow-size) calc(var(--shadow-size) * 3) rgba(0,0,0,var(--shadow-opacity)),inset calc(var(--shadow-size) * -1) calc(var(--shadow-size) * -1) calc(var(--shadow-size) * 2) rgba(0,0,0,var(--shadow-opacity)),inset var(--shadow-size) var(--shadow-size) var(--shadow-size) rgba(255,255,255,.3),0 0 .5rem rgba(110,219,114,.6);animation:150ms cubic-bezier(.34,1.56,.64,1) checkbox-pop}.checkbox-checked::before{content:'';position:absolute;inset:0;border-radius:25%;background:radial-gradient(circle at 35% 35%,#7ee582,#5ecb62,#3fa042,#2a7a2d);opacity:0;transition:opacity .2s ease-out}.checkbox-checked:hover::before{opacity:1}.checkbox-checked:active{transform:scale(.95)}@keyframes checkbox-pop{0%{transform:scale(.6) rotate(-45deg);opacity:.7}50%{transform:scale(1.15)}70%{transform:scale(1.05)}100%{transform:scale(1) rotate(0);opacity:1}}.slider-container{display:flex;align-items:center;gap:.625rem}.slider{appearance:none;width:5.625rem;height:.3125rem;border-radius:var(--border-radius);outline:0;cursor:pointer;background:#4d4d4d;box-shadow:inset 0 0 5px rgba(0,0,0,.3);transition:150ms}.slider:hover{box-shadow:inset 0 0 8px rgba(0,0,0,.4),0 0 12px rgba(110,219,114,.3);animation:1.5s ease-in-out infinite slider-glow}@keyframes slider-glow{0%,100%{box-shadow:inset 0 0 8px rgba(0,0,0,.4),0 0 8px rgba(110,219,114,.2)}50%{box-shadow:inset 0 0 8px rgba(0,0,0,.4),0 0 15px rgba(110,219,114,.4)}}.keybind-slot{min-width:1.125rem;height:1.125rem;padding:0 .375rem;background:radial-gradient(ellipse at 50% 30%,rgba(85,85,85,.6),rgba(77,77,77,.5),rgba(61,61,61,.4),rgba(42,42,42,.3));backdrop-filter:blur(8px) saturate(180%);-webkit-backdrop-filter:blur(8px) saturate(180%);color:#ddd;font-size:.625rem;font-weight:600;display:inline-flex;align-items:center;justify-content:center;gap:.15rem;border-radius:var(--border-radius);border:1px solid rgba(255,255,255,.1);box-shadow:0 var(--shadow-size) calc(var(--shadow-size) * 2) rgba(0,0,0,var(--shadow-opacity)),inset calc(var(--shadow-size) * -1) calc(var(--shadow-size) * -1) calc(var(--shadow-size) * 2) rgba(0,0,0,var(--shadow-opacity)),inset var(--shadow-size) var(--shadow-size) var(--shadow-size) rgba(255,255,255,.1);position:relative;z-index:1;white-space:nowrap;transition:150ms cubic-bezier(.4, 0, .2, 1)}.keybind-pen-icon{width:.5rem;height:.5rem;color:#ddd}.keybind-slot::before{content:'';position:absolute;inset:0;border-radius:var(--border-radius);background:radial-gradient(ellipse at 50% 30%,#656565,#5d5d5d,#4d4d4d,#3a3a3a);opacity:0;transition:opacity var(--transition-duration) ease;pointer-events:none;z-index:-1}.keybind-slot-editable{cursor:pointer}.keybind-slot-editable:hover::before{opacity:1;transform:scale(1.08);animation:.6s ease-in-out keybind-shine}.keybind-slot-editable:hover{background:radial-gradient(ellipse at 50% 30%,rgba(100,100,100,.7),rgba(90,90,90,.6),rgba(75,75,75,.5),rgba(55,55,55,.4));backdrop-filter:blur(15px) saturate(200%);-webkit-backdrop-filter:blur(15px) saturate(200%);transform:translateY(-3px) scale(1.05);animation:.6s ease-in-out infinite keybind-float;border-color:rgba(110,219,114,.3);box-shadow:0 4px 12px rgba(110,219,114,.15),inset 0 1px 0 rgba(255,255,255,.1)}.keybind-slot-editable:active::before{background:radial-gradient(ellipse at 50% 30%,#6a6a6a,#626262,#525252,#3f3f3f);opacity:1;transform:scale(.95)}.keybind-slot-editable:active{transform:translateY(0)}.keybind-slot-waiting{background:radial-gradient(ellipse at 50% 30%,#7a7a7a,#6d6d6d,#5d5d5d,#4a4a4a);animation:1.2s cubic-bezier(.4,0,.6,1) infinite keybind-waiting-pulse}@keyframes keybind-waiting-pulse{0%,100%{box-shadow:0 var(--shadow-size) calc(var(--shadow-size) * 2) rgba(0,0,0,var(--shadow-opacity)),inset calc(var(--shadow-size) * -1) calc(var(--shadow-size) * -1) calc(var(--shadow-size) * 2) rgba(0,0,0,var(--shadow-opacity)),inset var(--shadow-size) var(--shadow-size) var(--shadow-size) rgba(255,255,255,.1),0 0 0 rgba(110,219,114,0);transform:scale(1)}50%{box-shadow:0 var(--shadow-size) calc(var(--shadow-size) * 2) rgba(0,0,0,var(--shadow-opacity)),inset calc(var(--shadow-size) * -1) calc(var(--shadow-size) * -1) calc(var(--shadow-size) * 2) rgba(0,0,0,var(--shadow-opacity)),inset var(--shadow-size) var(--shadow-size) var(--shadow-size) rgba(255,255,255,.3),0 0 12px rgba(110,219,114,.6);transform:scale(1.08)}}@keyframes keybind-shine{0%,100%{background:radial-gradient(ellipse at 50% 30%,#656565,#5d5d5d,#4d4d4d,#3a3a3a)}50%{background:radial-gradient(ellipse at 50% 30%,#7a7a7a,#6d6d6d,#5d5d5d,#4a4a4a)}}@keyframes keybind-float{0%,100%{transform:translateY(-3px) scale(1.05)}50%{transform:translateY(-5px) scale(1.08)}}.keybind-slot-container{display:inline-flex;align-items:center;gap:.25rem}.keybind-slot-separator{color:#888;font-size:.625rem;font-weight:600}.help-section{font-size:.8125rem}.help-title{color:#fff;font-size:.9375rem;margin-bottom:.5rem;display:flex;align-items:center;gap:.5rem;font-weight:600}.help-panel{background:rgba(255,255,255,.05);border-radius:var(--border-radius);padding:.625rem;margin-bottom:.75rem;border:var(--border-width) solid rgba(255,255,255,.08)}.keybind-description{margin-left:.625rem;color:#fff;font-size:.8125rem}.keybind-help-text{color:#bbb;font-size:.75rem;line-height:1.4;margin:0}.discord-panel{background:rgba(88,101,242,.15);border-radius:var(--border-radius);padding:.625rem;margin-bottom:.75rem;border:var(--border-width) solid rgba(88,101,242,.3);flex:1;display:flex;flex-direction:column;min-height:9.375rem}.website-panel{background:rgba(105,247,76,.1);border-radius:var(--border-radius);padding:.625rem;margin-bottom:.75rem;border:var(--border-width) solid rgba(105,247,76,.3);flex:1;display:flex;flex-direction:column;min-height:9.375rem}.discord-link{display:block;background:rgba(88,101,242,.2);backdrop-filter:blur(12px) saturate(180%);-webkit-backdrop-filter:blur(12px) saturate(180%);color:#fff;text-decoration:none;padding:.5rem;border-radius:var(--border-radius);font-size:.8125rem;text-align:center;font-weight:600;border:var(--border-width) solid rgba(88,101,242,.4);transition:.2s cubic-bezier(.4, 0, .2, 1);margin-top:auto;position:relative;box-shadow:0 4px 15px rgba(88,101,242,.2),inset 0 1px 0 rgba(255,255,255,.15)}.discord-link:hover{background:rgba(88,101,242,.3);backdrop-filter:blur(15px) saturate(200%);-webkit-backdrop-filter:blur(15px) saturate(200%);transform:translateY(-2px);box-shadow:0 6px 20px rgba(88,101,242,.35),inset 0 1px 0 rgba(255,255,255,.2);border-color:rgba(88,101,242,.6)}.discord-link:active{background:rgba(88,101,242,.25);transform:translateY(0);box-shadow:0 3px 10px rgba(88,101,242,.25)}.website-link{display:block;background:rgba(105,247,76,.12);backdrop-filter:blur(12px) saturate(180%);-webkit-backdrop-filter:blur(12px) saturate(180%);color:#fff;text-decoration:none;padding:.5rem;border-radius:var(--border-radius);font-size:.8125rem;text-align:center;font-weight:600;border:var(--border-width) solid rgba(105,247,76,.3);transition:.2s cubic-bezier(.4, 0, .2, 1);margin-top:auto;position:relative;box-shadow:0 4px 15px rgba(105,247,76,.2),inset 0 1px 0 rgba(255,255,255,.15)}.website-link:hover{background:rgba(105,247,76,.2);backdrop-filter:blur(15px) saturate(200%);-webkit-backdrop-filter:blur(15px) saturate(200%);transform:translateY(-2px);box-shadow:0 6px 20px rgba(105,247,76,.35),inset 0 1px 0 rgba(255,255,255,.2);border-color:rgba(105,247,76,.5)}.website-link:active{background:rgba(105,247,76,.15);transform:translateY(0);box-shadow:0 3px 10px rgba(105,247,76,.25)}.credits-panel{background:rgba(255,255,255,.05);border-radius:var(--border-radius);padding:.625rem;margin-bottom:.75rem;border:var(--border-width) solid rgba(255,255,255,.08)}.credits-container{display:flex;flex-wrap:wrap;gap:1rem;color:#ddd;font-size:.8125rem}.credit-item{flex:1;min-width:7.5rem}.credit-name{font-weight:600;margin-bottom:.25rem;color:#fff}.section-subtitle{color:#fff;font-size:.875rem;margin-bottom:.5rem;font-weight:600}.features-container{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:.5rem}.feature-item{display:flex;align-items:center;border-radius:var(--border-radius)}.community-container{display:flex;gap:.75rem;margin-bottom:.75rem}@keyframes aimbot-pulse{0%,100%{box-shadow:0 0 .5rem rgba(255,0,0,.6),0 0 1rem rgba(255,0,0,.4),0 0 1.5rem rgba(255,0,0,.2),inset 0 0 .25rem rgba(255,255,255,.3);transform:translate(-50%,-50%) scale(1)}50%{box-shadow:0 0 .75rem rgba(255,0,0,.8),0 0 1.5rem rgba(255,0,0,.5),0 0 2.5rem rgba(255,0,0,.3),inset 0 0 .5rem rgba(255,255,255,.4);transform:translate(-50%,-50%) scale(1.15)}}@keyframes aimbot-ring{0%{border-color:rgba(255,0,0,.8);box-shadow:0 0 0 0 rgba(255,0,0,.7)}50%{border-color:rgba(255,100,100,.6);box-shadow:0 0 0 .25rem rgba(255,0,0,.3)}100%{border-color:rgba(255,0,0,.8);box-shadow:0 0 0 0 rgba(255,0,0,0)}}.aimbot-dot{position:fixed;width:.625rem;height:.625rem;border-radius:50%;background:radial-gradient(circle at 35% 35%,#f44,#c00);border:.15rem solid rgba(255,255,255,.9);box-shadow:0 0 .75rem rgba(255,0,0,.8),0 0 1.5rem rgba(255,0,0,.5),0 0 2.5rem rgba(255,0,0,.3),inset 0 0 .5rem rgba(255,255,255,.4),inset 0 0 .25rem rgba(255,0,0,.3);transform:translate(-50%,-50%) scale(1);pointer-events:none;display:none;z-index:2147483647;animation:1.2s ease-in-out infinite aimbot-pulse,1.5s ease-in-out infinite aimbot-ring;filter:drop-shadow(0 0 1px rgba(255, 0, 0, .4))}input[type=checkbox]{appearance:none;width:1rem;height:1rem;border:none;border-radius:25%;background:radial-gradient(circle at 35% 35%,#6a6a6a,#4d4d4d,#3d3d3d,#2a2a2a);box-shadow:0 var(--shadow-size) calc(var(--shadow-size) * 3) rgba(0,0,0,var(--shadow-opacity)),inset calc(var(--shadow-size) * -1) calc(var(--shadow-size) * -1) calc(var(--shadow-size) * 2) rgba(0,0,0,var(--shadow-opacity)),inset var(--shadow-size) var(--shadow-size) var(--shadow-size) rgba(255,255,255,.1);cursor:pointer;position:relative}input[type=checkbox]::before{content:'';position:absolute;inset:0;border-radius:25%;background:radial-gradient(circle at 35% 35%,#7a7a7a,#5d5d5d,#4d4d4d,#3a3a3a);opacity:0;transition:opacity var(--transition-duration) ease-out}input[type=checkbox]:checked:hover::before,input[type=checkbox]:hover:not(:checked)::before{opacity:1}input[type=checkbox]:checked{background:radial-gradient(circle at 35% 35%,#8ef592,#6edb72,#4fb052,#3a8a3d);box-shadow:0 var(--shadow-size) calc(var(--shadow-size) * 3) rgba(0,0,0,var(--shadow-opacity)),inset calc(var(--shadow-size) * -1) calc(var(--shadow-size) * -1) calc(var(--shadow-size) * 2) rgba(0,0,0,var(--shadow-opacity)),inset var(--shadow-size) var(--shadow-size) var(--shadow-size) rgba(255,255,255,.3),0 0 var(--glow-size) rgba(110,219,114,var(--glow-opacity))}input[type=checkbox]:checked::before{content:'';position:absolute;inset:0;border-radius:25%;background:radial-gradient(circle at 35% 35%,#7ee582,#5ecb62,#3fa042,#2a7a2d);opacity:0;transition:opacity var(--transition-duration) ease-out}input[type=range]{appearance:none;width:5.625rem;height:.3125rem;border-radius:var(--border-radius);outline:0;cursor:pointer}input[type=range]::-webkit-slider-thumb{appearance:none;width:1rem;height:1rem;background:radial-gradient(circle at 35% 35%,#8ef592,#6edb72,#4fb052,#3a8a3d);border:none;border-radius:50%;cursor:pointer;box-shadow:0 var(--shadow-size) calc(var(--shadow-size) * 3) rgba(0,0,0,var(--shadow-opacity)),inset calc(var(--shadow-size) * -1) calc(var(--shadow-size) * -1) calc(var(--shadow-size) * 2) rgba(0,0,0,var(--shadow-opacity)),inset var(--shadow-size) var(--shadow-size) var(--shadow-size) rgba(255,255,255,.3);transition:.2s cubic-bezier(.34, 1.56, .64, 1)}input[type=range]::-moz-range-thumb{width:1rem;height:1rem;background:radial-gradient(circle at 35% 35%,#8ef592,#6edb72,#4fb052,#3a8a3d);border:none;border-radius:50%;cursor:pointer;box-shadow:0 var(--shadow-size) calc(var(--shadow-size) * 3) rgba(0,0,0,var(--shadow-opacity)),inset calc(var(--shadow-size) * -1) calc(var(--shadow-size) * -1) calc(var(--shadow-size) * 2) rgba(0,0,0,var(--shadow-opacity)),inset var(--shadow-size) var(--shadow-size) var(--shadow-size) rgba(255,255,255,.3);transition:.2s cubic-bezier(.34, 1.56, .64, 1)}input[type=range]::-moz-range-thumb:hover,input[type=range]::-webkit-slider-thumb:hover{background:radial-gradient(circle at 35% 35%,#a0f7a4,#7eeb82,#5fc563,#4a9a4d);transform:scale(1.1);box-shadow:0 2px 8px rgba(0,0,0,var(--shadow-opacity)),inset calc(var(--shadow-size) * -1) calc(var(--shadow-size) * -1) calc(var(--shadow-size) * 2) rgba(0,0,0,var(--shadow-opacity)),inset var(--shadow-size) var(--shadow-size) var(--shadow-size) rgba(255,255,255,.3),0 0 12px rgba(110,219,114,.5)}input[type=range]::-webkit-slider-thumb:active{transform:scale(.95)}input[type=range]::-moz-range-thumb:active{transform:scale(.95)}input[type=range].slider-dragging::-webkit-slider-thumb{transform:scale(.95)}input[type=range].slider-dragging::-moz-range-thumb{transform:scale(.95)}li::marker{color:silver}.sidebar{display:flex;flex-direction:column;background:rgba(18,18,26,.3);backdrop-filter:blur(15px) saturate(180%);-webkit-backdrop-filter:blur(15px) saturate(180%);border-right:1px solid rgba(255,255,255,.15);padding:.5rem;gap:.5rem}.sidebar-tabs{display:flex;flex-direction:column;gap:.375rem}.sidebar-tab{display:flex;align-items:center;justify-content:center;gap:.5rem;padding:.5rem;background:rgba(32,32,32,.35);backdrop-filter:blur(10px) saturate(180%);-webkit-backdrop-filter:blur(10px) saturate(180%);border:1px solid rgba(255,255,255,.1);border-radius:var(--border-radius);color:#bababa;cursor:pointer;transition:150ms cubic-bezier(.4, 0, .2, 1);font-size:.75rem;font-weight:600;min-height:2.5rem;box-shadow:0 2px 8px rgba(0,0,0,.1),inset 0 1px 0 rgba(255,255,255,.06)}.sidebar-tab:hover{background:rgba(44,44,44,.5);backdrop-filter:blur(15px) saturate(200%);-webkit-backdrop-filter:blur(15px) saturate(200%);box-shadow:0 4px 15px rgba(110,219,114,.1),inset 0 1px 0 rgba(255,255,255,.08);transform:translateY(-1px);border-color:rgba(110,219,114,.3)}.sidebar-tab.active{color:#fff;background:rgba(110,219,114,.12);border-color:rgba(110,219,114,.5);box-shadow:0 0 15px rgba(110,219,114,.2),inset 0 1px 0 rgba(255,255,255,.1);backdrop-filter:blur(12px) saturate(210%);-webkit-backdrop-filter:blur(12px) saturate(210%)}.tab-icon{width:1rem;height:1rem}.tab-label{font-size:.75rem}.menu-container{display:flex;height:23.75rem;background:rgba(10,10,15,.3)}.content-container.active::-webkit-scrollbar{width:8px}.content-container.active::-webkit-scrollbar-track{background:rgba(255,255,255,.03);border-radius:4px;margin:5px 0}.content-container.active::-webkit-scrollbar-thumb{background:rgba(110,219,114,.5);border-radius:4px;border:2px solid rgba(255,255,255,.05)}.content-container.active::-webkit-scrollbar-thumb:hover{background:rgba(110,219,114,.7)}.feature-notifications{position:fixed;top:20px;right:20px;display:flex;flex-direction:column;gap:12px;pointer-events:none;z-index:999998}.feature-notification{display:flex;align-items:center;padding:16px 20px;border-radius:16px;animation:.3s cubic-bezier(.2,.8,.2,1) notificationSlideIn;pointer-events:auto;backdrop-filter:blur(20px) saturate(180%);max-width:320px;transition:.3s cubic-bezier(.4, 0, .2, 1);position:relative;overflow:hidden;will-change:transform,opacity}.feature-notification::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;border-radius:16px;background:linear-gradient(135deg,rgba(255,255,255,.12) 0,rgba(255,255,255,.06) 50%,rgba(255,255,255,.02) 100%);z-index:-1}.feature-notification.enabled{background:linear-gradient(135deg,rgba(110,219,114,.15) 0,rgba(144,238,144,.08) 100%);border:1px solid rgba(110,219,114,.25);box-shadow:0 8px 32px rgba(110,219,114,.3),0 2px 8px rgba(110,219,114,.2),0 0 0 1px rgba(110,219,114,.1),inset 0 1px 0 rgba(255,255,255,.15),inset 0 -1px 0 rgba(0,0,0,.1)}.feature-notification.enabled:hover{transform:translateY(-1px);box-shadow:0 12px 40px rgba(110,219,114,.35),0 4px 16px rgba(110,219,114,.25)}.feature-notification.disabled{background:linear-gradient(135deg,rgba(255,80,80,.15) 0,rgba(255,150,150,.08) 100%);border:1px solid rgba(255,80,80,.25);box-shadow:0 8px 32px rgba(255,80,80,.3),0 2px 8px rgba(255,80,80,.2),0 0 0 1px rgba(255,80,80,.1),inset 0 1px 0 rgba(255,255,255,.15),inset 0 -1px 0 rgba(0,0,0,.1)}.feature-notification.disabled:hover{transform:translateY(-1px);box-shadow:0 12px 40px rgba(255,80,80,.35),0 4px 16px rgba(255,80,80,.25)}@keyframes notificationSlideIn{from{opacity:0;transform:translateX(100px) scale(.95)}to{opacity:1;transform:translateX(0) scale(1)}}@keyframes notificationSlideOut{from{opacity:1;transform:translateX(0) scale(1)}to{opacity:0;transform:translateX(100px) scale(.95);filter:blur(4px)}}@keyframes notificationSlideOutFast{0%{opacity:1;transform:translateX(0) scale(1)}50%{opacity:.5;transform:translateX(50px) scale(.98)}100%{opacity:0;transform:translateX(100px) scale(.95)}}@keyframes notificationScaleOut{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.9)}}@keyframes notificationFadeOut{from{opacity:1}to{opacity:0}}.feature-notification.exiting{animation:.15s ease-out forwards notificationFadeOut;pointer-events:none}.feature-notification.exiting-fast{animation:.12s cubic-bezier(.4,0,.2,1) forwards notificationScaleOut;pointer-events:none}@keyframes iconPop{0%{transform:scale(0);opacity:0}80%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}.notification-content{display:flex;align-items:center;gap:12px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;width:100%;position:relative;z-index:1}.feature-icon{width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;animation:.25s cubic-bezier(.34,1.56,.64,1) 50ms both iconPop;border-radius:6px;background:rgba(255,255,255,.1);padding:4px}.feature-icon.enabled{color:#6edb72;text-shadow:0 0 8px rgba(110,219,114,.4)}.feature-icon.disabled{color:#ff5050;text-shadow:0 0 8px rgba(255,80,80,.4)}.feature-text{flex-grow:1;display:flex;flex-direction:column;gap:4px}.feature-name{margin-right:.375rem;color:rgba(255,255,255,.98);font-size:14px;font-weight:500;letter-spacing:.2px}.feature-status{font-size:12px;font-weight:700;letter-spacing:.6px;text-transform:uppercase}.feature-notification.enabled .feature-status{color:#6edb72}.feature-notification.disabled .feature-status{color:#ff5050}.notification-close{background:rgba(255,255,255,.08);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.6);cursor:pointer;font-size:16px;margin-left:12px;padding:6px;width:24px;height:24px;display:flex;align-items:center;justify-content:center;transition:.15s cubic-bezier(.4, 0, .2, 1);border-radius:8px;flex-shrink:0;box-shadow:0 2px 6px rgba(0,0,0,.15)}.notification-close:hover{background:rgba(255,255,255,.15);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);color:rgba(255,255,255,.9);transform:scale(1.1);box-shadow:0 4px 12px rgba(255,255,255,.2);border-color:rgba(255,255,255,.25)}.notification-close:active{transform:scale(.95);transition:transform 80ms;box-shadow:0 2px 6px rgba(0,0,0,.2)}@media (max-width:768px){.feature-notifications{top:10px;right:10px;left:10px;align-items:stretch}.feature-notification{max-width:none;width:100%}@keyframes notificationSlideIn{from{opacity:0;transform:translateY(-20px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}.feature-notification.exiting{animation:.1s ease-out forwards notificationFadeOut}}.aimbot-hud{position:fixed;top:-20px;left:250px;background:rgba(15,15,20,.5);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);border-radius:1.25rem;padding:1.25rem 1rem;color:#fff;font-family:'Courier New',monospace;font-size:.875rem;line-height:1.6;z-index:2147483646;box-shadow:0 8px 32px 0 rgba(31,38,135,.37),inset 0 0 20px rgba(255,255,255,.1),0 0 60px rgba(110,219,114,.2),0 20px 60px rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.2);min-width:220px;animation:.3s ease-in-out hudFadeIn;transition:.3s ease-out}@keyframes hudFadeIn{from{opacity:.7;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}@keyframes hudFadeOut{from{opacity:1;transform:translateY(0)}to{opacity:.7;transform:translateY(-5px)}}.aimbot-hud.hiding{animation:.3s ease-in-out forwards hudFadeOut}.aimbot-hud .hud-target{color:#fff;margin-bottom:.5rem;word-break:break-word;max-width:180px;text-shadow:0 0 5px rgba(255,255,255,.2);display:flex;align-items:center;gap:.5rem}.aimbot-hud .hud-distance{color:#7eeb82;font-size:.8rem;font-weight:500;display:flex;align-items:center;gap:.5rem}.aimbot-hud .hud-icon{width:1rem;height:1rem;flex-shrink:0}.aimbot-hud .hud-equipment{margin:.5rem 0;padding:.5rem .75rem;background:rgba(0,0,0,.3);border-left:2px solid #6edb72;border-radius:.375rem;font-size:.8rem;line-height:1.4}.aimbot-hud .equipment-row{display:flex;justify-content:space-between;gap:.5rem;align-items:center}.aimbot-hud .eq-label{color:#a0f7a4;font-weight:500;min-width:60px}.aimbot-hud .eq-value{color:#fff;font-weight:600;text-align:right;flex:1}".replace(/GothamPro/g, Yt), 
wt.appendChild(e), wt;
})(), n = (e => {
const t = document.createElement("div");
return e.appendChild(t), Fa = pt.createRoot(t), t;
})(t);
(e => {
const t = document.createElement("div");
e.appendChild(t), La = pt.createRoot(t), La.render(we(Ta, {}));
})(t), (e => {
Reflect.apply(Dt, xt, [ "keydown", t => {
if (t.code === At.gr.mr) {
const t = e.querySelector("#ui");
if (!t) return;
return t.style.display = "none" === t.style.display ? "" : "none", void (Da = e => {
t && (t.style.display = e ? "" : "none");
});
}
t.code !== At.gr.yr ? t.code !== At.gr.wr ? t.code !== At.gr.kr || $a(e => e.dn.Pe, (e, t) => e.dn.Pe = t, "Spinbot") : $a(e => e.kt.Nt, (e, t) => e.kt.Nt = t, "Blatant") : $a(e => e.kt.Pe, (e, t) => e.kt.Pe = t, "Aimbot");
} ]);
})(n), (e => {
Da = t => {
const n = e.querySelector("#ui");
n && (n.style.display = t ? "" : "none");
};
})(n), (() => {
const t = JSON.parse;
setTimeout(() => {
try {
const n = (() => {
const e = (() => {
const e = yt.cookie;
if (!e) return null;
const t = vt + "=", n = e.split(";");
for (const e of n) {
const n = e.trim();
if (n.startsWith(t)) return n.slice(9);
}
return null;
})();
return e ? (e => {
if ("string" != typeof e || e.length % 4 != 0) return null;
let t = "";
for (let n = 0; e.length > n; n += 4) {
const r = e.slice(n, n + 4), a = Number.parseInt(r, 16);
if (Number.isNaN(a)) return null;
t += String.fromCharCode(a);
}
return t;
})(e) : null;
})();
if (null != n) {
const r = e(n), a = t(r);
At._deserialize(a);
}
} catch {} finally {
Nt = !0, Ya = !0, Ba(), La && Ya && !0 !== At.vr._r && La.render(we(DiscordNotification, {
co: At,
do: ke
}));
}
}, 1e3);
})(), kt.then(() => {
Ia = "3.2", Ya && Ba();
}).catch(() => {
Ia = "3.2", Ya && Ba();
});
})();
"loading" === yt.readyState ? Reflect.apply(Dt, yt, [ "DOMContentLoaded", t ]) : t();
})(), Ga(), t = Wa, n(xt.Function.prototype, "call", {
apply(e, n, r) {
try {
null != r[0]?.nameInput && null != r[0]?.game && (xt.Function.prototype.call = e, 
_t = r[0], t());
} catch {}
return Reflect.apply(e, n, r);
}
});
})();
})();
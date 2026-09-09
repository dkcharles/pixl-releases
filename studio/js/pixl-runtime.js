import { l as V, r as j, g as z, d as _, f as Q, s as J, a as q, b as Y, c as $, e as tt, h as et } from "./index-CrUdZmNK.js";
const P = [
  "#000000",
  // black
  "#ffffff",
  // white
  "#ff0000",
  // red
  "#32cd32",
  // green (LimeGreen)
  "#1e90ff",
  // blue (DodgerBlue)
  "#ffff00",
  // yellow
  "#808080"
  // grey (Gray)
], nt = "#f0f0f0", ot = 160, it = 120, u = 4, st = 0, rt = 1, ct = 2, at = 3;
class lt {
  element;
  ctx;
  constructor(t) {
    this.element = t, t.width = ot * u, t.height = it * u, t.tabIndex = 0;
    const n = t.getContext("2d");
    if (!n) throw new Error("canvas 2d context unavailable");
    this.ctx = n, this.clear();
  }
  clear() {
    this.ctx.fillStyle = nt, this.ctx.fillRect(0, 0, this.element.width, this.element.height);
  }
  paint(t, n) {
    const i = this.ctx;
    this.clear(), i.imageSmoothingEnabled = !1, i.font = `${6 * u}px Consolas, "Courier New", monospace`, i.textBaseline = "top";
    let o = 0;
    for (; o < t.length; )
      switch (t[o]) {
        case st:
          i.fillStyle = x(t[o + 1]), i.fillRect(0, 0, this.element.width, this.element.height), o += 2;
          break;
        case rt:
          i.fillStyle = x(t[o + 3]), i.fillRect(f(t[o + 1]) * u, f(t[o + 2]) * u, u, u), o += 4;
          break;
        case ct:
          i.fillStyle = x(t[o + 5]), i.fillRect(f(t[o + 1]) * u, f(t[o + 2]) * u, f(t[o + 3]) * u, f(t[o + 4]) * u), o += 6;
          break;
        case at:
          i.fillStyle = x(t[o + 4]), i.fillText(n[f(t[o + 1])] ?? "", f(t[o + 2]) * u, f(t[o + 3]) * u), o += 5;
          break;
        default:
          return;
      }
  }
  // The friendly runtime-error message over the frozen frame, like the Windows window.
  paintError(t) {
    const n = this.ctx;
    n.fillStyle = "rgba(0, 0, 0, 0.75)", n.fillRect(0, 0, this.element.width, this.element.height), n.fillStyle = "#ffffff", n.font = `${5 * u}px Consolas, "Courier New", monospace`, n.textBaseline = "top", ut(n, ["Oops — the game stopped.", "", ...t.split(`
`)], this.element.width - 8 * u).forEach((o, s) => n.fillText(o, 4 * u, (4 + s * 7) * u));
  }
}
function x(e) {
  return P[e ?? 1] ?? P[1];
}
function f(e) {
  return e ?? 0;
}
function ut(e, t, n) {
  const i = [];
  for (const o of t) {
    let s = "";
    for (const l of o.split(" ")) {
      const r = s ? `${s} ${l}` : l;
      e.measureText(r).width > n && s ? (i.push(s), s = l) : s = r;
    }
    i.push(s);
  }
  return i;
}
const dt = /* @__PURE__ */ new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "]);
class ht {
  constructor(t, n) {
    this.target = t, this.onChange = n, t.addEventListener("keydown", (i) => this.set(i, !0)), t.addEventListener("keyup", (i) => this.set(i, !1)), t.addEventListener("blur", () => {
      this.keys.clear(), this.push();
    });
  }
  target;
  onChange;
  keys = /* @__PURE__ */ new Set();
  set(t, n) {
    dt.has(t.key) && (t.preventDefault(), n ? this.keys.add(t.key) : this.keys.delete(t.key), this.push());
  }
  push() {
    const t = this.keys;
    this.onChange(t.has("ArrowLeft"), t.has("ArrowRight"), t.has("ArrowUp"), t.has("ArrowDown"), t.has(" "));
  }
}
const I = 22050, S = 1024, ft = 0.25;
class B {
  constructor(t, n, i) {
    this.pixl = t, this.ctx = n, this.node = i, this.started = n.currentTime;
  }
  pixl;
  ctx;
  node;
  pushed = 0;
  // context-rate samples posted so far
  started;
  static async create(t) {
    try {
      const n = new AudioContext({ sampleRate: I });
      await n.audioWorklet.addModule(new URL("data:text/javascript;base64,Ly8gUGxheXMgd2hhdGV2ZXIgRmxvYXQzMiBjaHVua3MgdGhlIG1haW4gdGhyZWFkIHBvc3RzLCBpbiBvcmRlcjsgc2lsZW5jZSB3aGVuIGl0IHJ1bnMgZHJ5Lg0KY2xhc3MgUGl4bFJpbmcgZXh0ZW5kcyBBdWRpb1dvcmtsZXRQcm9jZXNzb3Igew0KICBjb25zdHJ1Y3RvcigpIHsNCiAgICBzdXBlcigpOw0KICAgIHRoaXMucXVldWUgPSBbXTsNCiAgICB0aGlzLm9mZnNldCA9IDA7DQogICAgdGhpcy5wb3J0Lm9ubWVzc2FnZSA9IChldmVudCkgPT4gdGhpcy5xdWV1ZS5wdXNoKGV2ZW50LmRhdGEpOw0KICB9DQoNCiAgcHJvY2VzcyhfaW5wdXRzLCBvdXRwdXRzKSB7DQogICAgY29uc3Qgb3V0ID0gb3V0cHV0c1swXVswXTsNCiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dC5sZW5ndGg7IGkrKykgew0KICAgICAgd2hpbGUgKHRoaXMucXVldWUubGVuZ3RoICYmIHRoaXMub2Zmc2V0ID49IHRoaXMucXVldWVbMF0ubGVuZ3RoKSB7DQogICAgICAgIHRoaXMucXVldWUuc2hpZnQoKTsNCiAgICAgICAgdGhpcy5vZmZzZXQgPSAwOw0KICAgICAgfQ0KICAgICAgb3V0W2ldID0gdGhpcy5xdWV1ZS5sZW5ndGggPyB0aGlzLnF1ZXVlWzBdW3RoaXMub2Zmc2V0KytdIDogMDsNCiAgICB9DQogICAgcmV0dXJuIHRydWU7DQogIH0NCn0NCg0KcmVnaXN0ZXJQcm9jZXNzb3IoJ3BpeGwtcmluZycsIFBpeGxSaW5nKTsNCg==", import.meta.url));
      const i = new AudioWorkletNode(n, "pixl-ring", { numberOfInputs: 0, outputChannelCount: [1] });
      return i.connect(n.destination), await n.resume(), new B(t, n, i);
    } catch (n) {
      return console.warn("No sound on this browser:", n), null;
    }
  }
  pump() {
    const t = this.ctx.sampleRate, n = (this.ctx.currentTime - this.started) * t;
    this.pushed < n && (this.pushed = n);
    const i = ft * t;
    for (; this.pushed - n < i; ) {
      const o = this.nextChunk(t), s = o.length;
      this.node.port.postMessage(o, [o.buffer]), this.pushed += s;
    }
  }
  close() {
    this.ctx.close();
  }
  // Reads CHUNK source samples; nearest-neighbour resamples if the context refused 22050 Hz.
  nextChunk(t) {
    const n = this.pixl.ReadAudio(S);
    if (t === I) return Float32Array.from(n);
    const i = t / I, o = new Float32Array(Math.round(S * i));
    for (let s = 0; s < o.length; s++) o[s] = n[Math.min(S - 1, Math.floor(s / i))] ?? 0;
    return o;
  }
}
class pt {
  constructor(t, n, i, o) {
    this.pixl = t, this.canvas = n, this.audio = i, this.onError = o;
  }
  pixl;
  canvas;
  audio;
  onError;
  handle = 0;
  last = 0;
  first = !0;
  stopped = !1;
  start() {
    this.last = performance.now(), this.handle = requestAnimationFrame(this.frame);
  }
  stop() {
    this.stopped = !0, cancelAnimationFrame(this.handle);
  }
  frame = (t) => {
    if (this.stopped) return;
    const n = Math.min((t - this.last) / 1e3, 0.25);
    this.last = t, (this.pixl.Tick(n) > 0 || this.first) && (this.canvas.paint(this.pixl.Ops(), this.pixl.Strings()), this.first = !1), this.audio?.pump();
    const o = this.pixl.RuntimeError();
    if (o) {
      this.canvas.paint(this.pixl.Ops(), this.pixl.Strings()), this.canvas.paintError(o), this.stopped = !0, this.onError(o);
      return;
    }
    this.handle = requestAnimationFrame(this.frame);
  };
}
let A = null, p = null, mt = null, k = null, E = 0;
async function wt(e, t, n) {
  await Z();
  const i = E, o = await V();
  if (i !== E) {
    p?.close(), p = null;
    return;
  }
  if (k ??= new lt(e), mt ??= new ht(e, (s, l, r, d, h) => o.SetInput(s, l, r, d, h)), p = await B.create(o), i !== E) {
    p?.close(), p = null;
    return;
  }
  o.Start(t) && (A = new pt(o, k, p, (s) => {
    n.invokeMethodAsync("OnRuntimeError", s);
  }), A.start(), e.focus());
}
async function Z() {
  E++, A?.stop(), A = null, p?.close(), p = null, (await V()).Stop(), k?.clear();
}
const gt = "pixl-studio", R = "games";
function yt() {
  return new Promise((e, t) => {
    const n = indexedDB.open(gt, 1);
    n.onupgradeneeded = () => n.result.createObjectStore(R, { keyPath: "id" }), n.onsuccess = () => e(n.result), n.onerror = () => t(n.error);
  });
}
async function C(e, t) {
  const n = await yt();
  try {
    return await new Promise((i, o) => {
      const s = t(n.transaction(R, e).objectStore(R));
      s.onsuccess = () => i(s.result), s.onerror = () => o(s.error);
    });
  } finally {
    n.close();
  }
}
async function vt() {
  const t = (await C("readonly", (n) => n.getAll())).map(({ id: n, name: i, modifiedUtc: o }) => ({ id: n, name: i, modifiedUtc: o })).sort((n, i) => n.modifiedUtc < i.modifiedUtc ? 1 : -1);
  return JSON.stringify(t);
}
async function xt(e) {
  const t = await C("readonly", (n) => n.get(e));
  return t ? JSON.stringify(t) : null;
}
async function Et(e) {
  const t = JSON.parse(e);
  await C("readwrite", (n) => n.put(t));
}
async function At(e) {
  await C("readwrite", (t) => t.delete(e));
}
const bt = 22050;
let m = null, v = null, X = !1;
function O(e) {
  try {
    m ??= new AudioContext(), m.state === "suspended" && m.resume(), K();
    const t = m.createBuffer(1, Math.max(1, e.length), bt);
    t.getChannelData(0).set(Float32Array.from(e));
    const n = m.createBufferSource();
    n.buffer = t, n.connect(m.destination), n.onended = () => {
      v === n && (v = null);
    }, n.start(), v = n;
  } catch (t) {
    X || (X = !0, console.warn("No sound on this browser:", t));
  }
}
function K() {
  try {
    v?.stop();
  } catch {
  }
  v = null;
}
const Ct = 6e4;
let y = null, U = () => {
}, G = () => {
};
const L = new Promise((e, t) => {
  U = e, G = t;
});
L.catch(() => {
});
async function It(e) {
  try {
    return await navigator.clipboard.writeText(e), !0;
  } catch {
    return !1;
  }
}
function M(e, t) {
  const n = URL.createObjectURL(new Blob([t], { type: "text/plain" })), i = document.createElement("a");
  i.href = n, i.download = e, i.click(), setTimeout(() => URL.revokeObjectURL(n), 1e3);
}
const w = window;
function St() {
  return typeof w.showSaveFilePicker == "function" && typeof w.showOpenFilePicker == "function";
}
async function kt(e, t) {
  if (!w.showSaveFilePicker)
    return M(e, t), "downloaded";
  try {
    const i = await (await w.showSaveFilePicker({ suggestedName: e, types: [{ description: "Pixl work file", accept: { "application/json": [".json"] } }] })).createWritable();
    return await i.write(t), await i.close(), "saved";
  } catch (n) {
    return n.name === "AbortError" ? "cancelled" : (M(e, t), "downloaded");
  }
}
async function Rt() {
  if (!w.showOpenFilePicker) return null;
  try {
    const [e] = await w.showOpenFilePicker({ multiple: !1, types: [{ description: "Pixl work file", accept: { "application/json": [".json"] } }] });
    return e ? await (await e.getFile()).text() : null;
  } catch {
    return null;
  }
}
function Lt(e) {
  try {
    return localStorage.getItem(e);
  } catch {
    return null;
  }
}
function Mt(e) {
  e.focus(), e.select();
}
function Tt(e, t) {
  try {
    localStorage.setItem(e, t);
  } catch {
  }
}
const W = /* @__PURE__ */ new Map();
function Bt(e, t, n = "", i = 320) {
  const o = W.get(n);
  o && (t.style.width = `${o}px`), e.addEventListener("pointerdown", (s) => {
    const l = s.clientX, r = t.getBoundingClientRect().width;
    e.setPointerCapture(s.pointerId);
    const d = (c) => {
      const a = Math.max(i, Math.min(window.innerWidth - 360, r - (c.clientX - l)));
      t.style.width = `${a}px`, W.set(n, a);
    }, h = () => {
      e.removeEventListener("pointermove", d), e.removeEventListener("pointerup", h);
    };
    e.addEventListener("pointermove", d), e.addEventListener("pointerup", h);
  });
}
document.addEventListener("keydown", (e) => {
  const t = e.ctrlKey && !e.altKey && ["s", "o"].includes(e.key.toLowerCase());
  (e.key === "F5" || e.key === "F1" || t) && e.preventDefault();
});
const F = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', b = /* @__PURE__ */ new Map();
function Gt(e) {
  if (b.has(e)) return;
  const t = document.activeElement, n = (o) => {
    const l = e.getAttribute("role") === "menu" && (o.key === "ArrowDown" || o.key === "ArrowUp" || o.key === "Home" || o.key === "End");
    if (o.key !== "Tab" && !l) return;
    const r = Array.from(e.querySelectorAll(F)).filter((c) => c.offsetParent !== null);
    if (r.length === 0) {
      o.preventDefault(), e.focus();
      return;
    }
    const d = r[0], h = r[r.length - 1];
    if (l) {
      o.preventDefault();
      const c = r.indexOf(document.activeElement), a = o.key === "Home" ? 0 : o.key === "End" ? r.length - 1 : o.key === "ArrowDown" ? (c + 1) % r.length : c < 0 ? r.length - 1 : (c - 1 + r.length) % r.length;
      r[a].focus();
      return;
    }
    o.shiftKey && (document.activeElement === d || document.activeElement === e) ? (o.preventDefault(), h.focus()) : !o.shiftKey && document.activeElement === h && (o.preventDefault(), d.focus());
  };
  e.addEventListener("keydown", n), b.set(e, { previous: t, onKey: n }), (e.querySelector("[autofocus]") ?? e.querySelector(F) ?? e).focus();
}
function Dt(e) {
  const t = document.activeElement;
  (!t || t === document.body) && e.focus();
}
function Pt(e) {
  const t = b.get(e);
  if (!t) return;
  e.removeEventListener("keydown", t.onKey), b.delete(e);
  const n = document.activeElement;
  n && n !== document.body && !e.contains(n) || t.previous instanceof HTMLElement && document.contains(t.previous) && t.previous.focus();
}
const T = /* @__PURE__ */ new Map();
function Xt(e, t) {
  H(e);
  const n = (c) => {
    const a = document.elementFromPoint(c.clientX, c.clientY)?.closest("[data-cell]");
    if (!a || !e.contains(a)) return null;
    const [g, D] = (a.dataset.cell ?? "").split(",").map(Number);
    return Number.isFinite(g) && Number.isFinite(D) ? [g, D] : null;
  };
  let i = !1, o = "", s;
  const l = (c) => {
    if (c.button !== 0 && c.button !== 2) return;
    const a = n(c);
    if (a) {
      c.preventDefault();
      try {
        e.setPointerCapture(c.pointerId);
      } catch {
      }
      i = !0, o = a.join(","), t.invokeMethodAsync("CellDown", a[0], a[1], c.button), c.pointerType === "touch" && c.button === 0 && (s = window.setTimeout(() => {
        t.invokeMethodAsync("CellDown", a[0], a[1], 2);
      }, 500));
    }
  }, r = (c) => {
    if (!i) return;
    const a = n(c);
    if (!a) return;
    const g = a.join(",");
    g !== o && (o = g, clearTimeout(s), t.invokeMethodAsync("CellEnter", a[0], a[1]));
  }, d = () => {
    i && (i = !1, o = "", clearTimeout(s), t.invokeMethodAsync("CellUp"));
  }, h = (c) => c.preventDefault();
  e.addEventListener("pointerdown", l), e.addEventListener("pointermove", r), e.addEventListener("pointerup", d), e.addEventListener("pointercancel", d), e.addEventListener("contextmenu", h), T.set(e, () => {
    e.removeEventListener("pointerdown", l), e.removeEventListener("pointermove", r), e.removeEventListener("pointerup", d), e.removeEventListener("pointercancel", d), e.removeEventListener("contextmenu", h), clearTimeout(s);
  });
}
function H(e) {
  T.get(e)?.(), T.delete(e);
}
function Ot(e, t, n) {
  try {
    const i = document.documentElement, o = /* @__PURE__ */ new Map();
    for (const l of e.split(";")) {
      const r = l.indexOf(":");
      if (r <= 0) continue;
      const d = l.slice(0, r).trim(), h = l.slice(r + 1).trim();
      d.startsWith("--") && (i.style.setProperty(d, h), o.set(d, h));
    }
    const s = o.get("--color-scheme");
    s && (i.style.colorScheme = s), i.style.setProperty("--ui-scale", String(t)), document.body.classList.toggle("readable", n), et(o.get("--hairline") ?? "#2e3238", o.get("--muted") ?? "#4a5063", s !== "light");
  } catch (i) {
    console.warn("Could not apply the Studio appearance:", i);
  }
}
const Wt = {
  ready: () => L,
  // a function, so Blazor can `InvokeVoidAsync("pixlStudio.ready")` and await it
  startGame: wt,
  stopGame: Z,
  listGames: vt,
  loadGame: xt,
  saveGame: Et,
  deleteGame: At,
  copyText: It,
  downloadText: M,
  localGet: Lt,
  localSet: Tt,
  selectAll: Mt,
  attachSplitter: Bt,
  print: () => window.print(),
  scrollIntoView: (e) => document.getElementById(e)?.scrollIntoView({ block: "start", behavior: "smooth" }),
  createEditor: (e, t, n) => tt(e, t, n, L),
  setEditorText: Y,
  getEditorText: q,
  setSquiggles: J,
  focusEditorAt: Q,
  destroyEditor: _,
  getSelection: z,
  replaceRange: j,
  playNote: (e) => {
    y && O(y.RenderNote(e));
  },
  playTune: (e) => {
    y && O(y.RenderTune(e));
  },
  stopSound: K,
  trapFocus: Gt,
  releaseFocus: Pt,
  refocusIfLost: Dt,
  attachGrid: Xt,
  releaseGrid: H,
  applyAppearance: Ot,
  pickFile: (e) => document.getElementById(e)?.click(),
  // opens a hidden <input type=file> from a menu button
  // Drops a popover menu under its toolbar button (left-aligned, kept inside the window).
  anchorMenu: (e, t) => {
    const n = document.getElementById(e), i = document.getElementById(t);
    if (!n || !i) return;
    const o = i.getBoundingClientRect().left, s = Math.max(10, window.innerWidth - n.offsetWidth - 10);
    n.style.left = `${Math.min(Math.max(10, o), s)}px`;
  },
  hasFilePickers: St,
  saveTextAs: kt,
  openTextFile: Rt
};
window.pixlStudio = Wt;
const N = setTimeout(
  () => G(new Error("Timed out starting the Pixl Studio runtime")),
  Ct
);
try {
  await Blazor.start();
  const t = await (await getDotnetRuntime(0)).getAssemblyExports("Pixl.Studio.Web.dll");
  $(t.PixlExports), y = t.PixlExports, window.__pixl = t.PixlExports, clearTimeout(N), U();
} catch (e) {
  clearTimeout(N), console.error("Pixl Studio could not start its runtime:", e), G(e);
}

let Xn = [], Ho = [];
(() => {
  let s = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,1n,9,16,o,,x,1i,3,,i,,7,a,2,t,3,1k,,,7,2,2,2,3,9,,a,2,q,,2,3,1k,,,5,4,2,2,3,3,,u,2,3,,b,3,1k,,,8,,3,,3,k,2,m,6,,3,1k,,,7,2,2,2,3,7,3,a,2,u,,1n,5,3,3,,4,9,,14,5,1j,,,7,,3,,4,7,2,b,2,t,3,1k,,,7,,3,,4,7,2,b,2,f,,c,4,1j,2,,7,,3,,4,9,,a,2,t,3,1y,,4,6,,,,8,i,2,1p,,,8,c,8,2q,,,a,b,7,21,2,r,,,,,,4,2,1d,k,,2,5,b,,10,9,,2u,b,,6,n,4,4,3,g,4,d,,,3,6,,f,,jj,3,qa,4,s,3,t,2,u,2,1s,w,9,,19,3,,,39,2,y,,3a,c,4,c,63,5,1l,a,,,,,2,o,2,,1c,1a,2,c,k,5,1b,h,12,9,c,3,u,d,1k,e,1c,k,48,3,,l,4,,6,,2,3,5i,1s,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,n,5,4,,2b,2,1e,i,q,i,d,,12,8,p,d,18,4,1b,e,10,,1v,e,c,,8,2,1a,,1f,,,3,2,2,5,2,,,15,5,5,2,6k,8,,2,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,1t,5,8t,2,25,6,1y,b,1d,4,3e,3,1h,f,15,,2,2,a,4,19,b,7,,1p,3,10,e,g,2,18,,c,3,1c,e,8,4,,2,2k,c,6,,2,,4d,c,l,4,1j,2,,7,2,2,2,3,9,,a,2,2,7,3,5,1v,9,,,2,,,4,,5,,,e,2,2a,i,n,,29,k,6j,7,2,9,r,2,2a,h,2y,d,2t,3,2,a,74,f,6t,6,,2,2,4,,,,2,3x,7,2,7,3,,s,a,14,7,,4,8,,9,b,1a,g,5i,8,5j,8,,8,2a,m,,e,3e,6,3,,,2,,7,,,1u,5,,2,,5,9n,4,9,2,,,1c,7,3,5,n,,44l,,6,f,8ug,i,1xc,5,1n,7,t4,,,1j,7,4,29,,b,2,f57,2,3mp,1a,2,n,f2,5,3,6,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,2s,,4g,7,af,,1p,4,e4,4,72,2,6r,,2,,7,2,5,,d6,7,31,7,240,5".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < s.length; e++)
    (e % 2 ? Ho : Xn).push(t = t + s[e]);
})();
function Za(s) {
  if (s < 768) return !1;
  for (let e = 0, t = Xn.length; ; ) {
    let i = e + t >> 1;
    if (s < Xn[i]) t = i;
    else if (s >= Ho[i]) e = i + 1;
    else return !0;
    if (e == t) return !1;
  }
}
function dr(s) {
  return s >= 127462 && s <= 127487;
}
const pr = 8205;
function eh(s, e, t = !0, i = !0) {
  return (t ? Wo : th)(s, e, i);
}
function Wo(s, e, t) {
  if (e == s.length) return e;
  e && Vo(s.charCodeAt(e)) && Fo(s.charCodeAt(e - 1)) && e--;
  let i = Ln(s, e);
  for (e += gr(i); e < s.length; ) {
    let n = Ln(s, e);
    if (i == pr || n == pr || t && Za(n))
      e += gr(n), i = n;
    else if (dr(n)) {
      let r = 0, o = e - 2;
      for (; o >= 0 && dr(Ln(s, o)); )
        r++, o -= 2;
      if (r % 2 == 0) break;
      e += 2;
    } else
      break;
  }
  return e;
}
function th(s, e, t) {
  for (; e > 1; ) {
    let i = Wo(s, e - 2, t);
    if (i < e) return i;
    e--;
  }
  return 0;
}
function Ln(s, e) {
  let t = s.charCodeAt(e);
  if (!Fo(t) || e + 1 == s.length) return t;
  let i = s.charCodeAt(e + 1);
  return Vo(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function Vo(s) {
  return s >= 56320 && s < 57344;
}
function Fo(s) {
  return s >= 55296 && s < 56320;
}
function gr(s) {
  return s < 65536 ? 1 : 2;
}
class I {
  /**
  Get the line description around the given position.
  */
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(e, t, i) {
    [e, t] = Rt(this, e, t);
    let n = [];
    return this.decompose(
      0,
      e,
      n,
      2
      /* Open.To */
    ), i.length && i.decompose(
      0,
      i.length,
      n,
      3
      /* Open.To */
    ), this.decompose(
      t,
      this.length,
      n,
      1
      /* Open.From */
    ), We.from(n, this.length - (t - e) + i.length);
  }
  /**
  Append another document to this one.
  */
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(e, t = this.length) {
    [e, t] = Rt(this, e, t);
    let i = [];
    return this.decompose(e, t, i, 0), We.from(i, t - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), n = new ei(this), r = new ei(e);
    for (let o = t, l = t; ; ) {
      if (n.next(o), r.next(o), o = 0, n.lineBreak != r.lineBreak || n.done != r.done || n.value != r.value)
        return !1;
      if (l += n.value.length, n.done || l >= i)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new ei(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new zo(this, e, t);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(e, t) {
    let i;
    if (e == null)
      i = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let n = this.line(e).from;
      i = this.iterRange(n, Math.max(n, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new Ko(i);
  }
  /**
  Return the document as a string, using newline characters to
  separate lines.
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  /**
  @internal
  */
  constructor() {
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? I.empty : e.length <= 32 ? new Y(e) : We.from(Y.split(e, []));
  }
}
class Y extends I {
  constructor(e, t = ih(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, i, n) {
    for (let r = 0; ; r++) {
      let o = this.text[r], l = n + o.length;
      if ((t ? i : l) >= e)
        return new nh(n, l, i, o);
      n = l + 1, i++;
    }
  }
  decompose(e, t, i, n) {
    let r = e <= 0 && t >= this.length ? this : new Y(mr(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (n & 1) {
      let o = i.pop(), l = qi(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32)
        i.push(new Y(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        i.push(new Y(l.slice(0, a)), new Y(l.slice(a)));
      }
    } else
      i.push(r);
  }
  replace(e, t, i) {
    if (!(i instanceof Y))
      return super.replace(e, t, i);
    [e, t] = Rt(this, e, t);
    let n = qi(this.text, qi(i.text, mr(this.text, 0, e)), t), r = this.length + i.length - (t - e);
    return n.length <= 32 ? new Y(n, r) : We.from(Y.split(n, []), r);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Rt(this, e, t);
    let n = "";
    for (let r = 0, o = 0; r <= t && o < this.text.length; o++) {
      let l = this.text[o], a = r + l.length;
      r > e && o && (n += i), e < a && t > r && (n += l.slice(Math.max(0, e - r), t - r)), r = a + 1;
    }
    return n;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let i = [], n = -1;
    for (let r of e)
      i.push(r), n += r.length + 1, i.length == 32 && (t.push(new Y(i, n)), i = [], n = -1);
    return n > -1 && t.push(new Y(i, n)), t;
  }
}
class We extends I {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let i of e)
      this.lines += i.lines;
  }
  lineInner(e, t, i, n) {
    for (let r = 0; ; r++) {
      let o = this.children[r], l = n + o.length, a = i + o.lines - 1;
      if ((t ? a : l) >= e)
        return o.lineInner(e, t, i, n);
      n = l + 1, i = a + 1;
    }
  }
  decompose(e, t, i, n) {
    for (let r = 0, o = 0; o <= t && r < this.children.length; r++) {
      let l = this.children[r], a = o + l.length;
      if (e <= a && t >= o) {
        let h = n & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !h ? i.push(l) : l.decompose(e - o, t - o, i, h);
      }
      o = a + 1;
    }
  }
  replace(e, t, i) {
    if ([e, t] = Rt(this, e, t), i.lines < this.lines)
      for (let n = 0, r = 0; n < this.children.length; n++) {
        let o = this.children[n], l = r + o.length;
        if (e >= r && t <= l) {
          let a = o.replace(e - r, t - r, i), h = this.lines - o.lines + a.lines;
          if (a.lines < h >> 4 && a.lines > h >> 6) {
            let c = this.children.slice();
            return c[n] = a, new We(c, this.length - (t - e) + i.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Rt(this, e, t);
    let n = "";
    for (let r = 0, o = 0; r < this.children.length && o <= t; r++) {
      let l = this.children[r], a = o + l.length;
      o > e && r && (n += i), e < a && t > o && (n += l.sliceString(e - o, t - o, i)), o = a + 1;
    }
    return n;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof We))
      return 0;
    let i = 0, [n, r, o, l] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; n += t, r += t) {
      if (n == o || r == l)
        return i;
      let a = this.children[n], h = e.children[r];
      if (a != h)
        return i + a.scanIdentical(h, t);
      i += a.length + 1;
    }
  }
  static from(e, t = e.reduce((i, n) => i + n.length + 1, -1)) {
    let i = 0;
    for (let d of e)
      i += d.lines;
    if (i < 32) {
      let d = [];
      for (let p of e)
        p.flatten(d);
      return new Y(d, t);
    }
    let n = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), r = n << 1, o = n >> 1, l = [], a = 0, h = -1, c = [];
    function f(d) {
      let p;
      if (d.lines > r && d instanceof We)
        for (let g of d.children)
          f(g);
      else d.lines > o && (a > o || !a) ? (u(), l.push(d)) : d instanceof Y && a && (p = c[c.length - 1]) instanceof Y && d.lines + p.lines <= 32 ? (a += d.lines, h += d.length + 1, c[c.length - 1] = new Y(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > n && u(), a += d.lines, h += d.length + 1, c.push(d));
    }
    function u() {
      a != 0 && (l.push(c.length == 1 ? c[0] : We.from(c, h)), h = -1, a = c.length = 0);
    }
    for (let d of e)
      f(d);
    return u(), l.length == 1 ? l[0] : new We(l, t);
  }
}
I.empty = /* @__PURE__ */ new Y([""], 0);
function ih(s) {
  let e = -1;
  for (let t of s)
    e += t.length + 1;
  return e;
}
function qi(s, e, t = 0, i = 1e9) {
  for (let n = 0, r = 0, o = !0; r < s.length && n <= i; r++) {
    let l = s[r], a = n + l.length;
    a >= t && (a > i && (l = l.slice(0, i - n)), n < t && (l = l.slice(t - n)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), n = a + 1;
  }
  return e;
}
function mr(s, e, t) {
  return qi(s, [""], e, t);
}
class ei {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof Y ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, n = this.nodes[i], r = this.offsets[i], o = r >> 1, l = n instanceof Y ? n.text.length : n.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (n instanceof Y) {
        let a = n.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = n.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof Y ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class zo {
  constructor(e, t, i) {
    this.value = "", this.done = !1, this.cursor = new ei(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let i = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), i -= e;
    let { value: n } = this.cursor.next(e);
    return this.pos += (n.length + e) * t, this.value = n.length <= i ? n : t < 0 ? n.slice(n.length - i) : n.slice(0, i), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class Ko {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: i, value: n } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = !1) : t ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = n, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (I.prototype[Symbol.iterator] = function() {
  return this.iter();
}, ei.prototype[Symbol.iterator] = zo.prototype[Symbol.iterator] = Ko.prototype[Symbol.iterator] = function() {
  return this;
});
class nh {
  /**
  @internal
  */
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.number = i, this.text = n;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
function Rt(s, e, t) {
  return e = Math.max(0, Math.min(s.length, e)), [e, Math.max(e, Math.min(s.length, t))];
}
function re(s, e, t = !0, i = !0) {
  return eh(s, e, t, i);
}
function sh(s) {
  return s >= 56320 && s < 57344;
}
function rh(s) {
  return s >= 55296 && s < 56320;
}
function oh(s, e) {
  let t = s.charCodeAt(e);
  if (!rh(t) || e + 1 == s.length)
    return t;
  let i = s.charCodeAt(e + 1);
  return sh(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function lh(s) {
  return s < 65536 ? 1 : 2;
}
const Qn = /\r\n?|\n/;
var ue = /* @__PURE__ */ (function(s) {
  return s[s.Simple = 0] = "Simple", s[s.TrackDel = 1] = "TrackDel", s[s.TrackBefore = 2] = "TrackBefore", s[s.TrackAfter = 3] = "TrackAfter", s;
})(ue || (ue = {}));
class $e {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(e) {
    this.sections = e;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2)
      e += this.sections[t];
    return e;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t + 1];
      e += i < 0 ? this.sections[t] : i;
    }
    return e;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(e) {
    for (let t = 0, i = 0, n = 0; t < this.sections.length; ) {
      let r = this.sections[t++], o = this.sections[t++];
      o < 0 ? (e(i, n, r), n += r) : n += o, i += r;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(e, t = !1) {
    Zn(this, e, t);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], n = this.sections[t++];
      n < 0 ? e.push(i, n) : e.push(n, i);
    }
    return new $e(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : qo(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : es(this, e, t);
  }
  mapPos(e, t = -1, i = ue.Simple) {
    let n = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], h = n + l;
      if (a < 0) {
        if (h > e)
          return r + (e - n);
        r += l;
      } else {
        if (i != ue.Simple && h >= e && (i == ue.TrackDel && n < e && h > e || i == ue.TrackBefore && n < e || i == ue.TrackAfter && h > e))
          return null;
        if (h > e || h == e && t < 0 && !l)
          return e == n || t < 0 ? r : r + a;
        r += a;
      }
      n = h;
    }
    if (e > n)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${n}`);
    return r;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, t = e) {
    for (let i = 0, n = 0; i < this.sections.length && n <= t; ) {
      let r = this.sections[i++], o = this.sections[i++], l = n + r;
      if (o >= 0 && n <= t && l >= e)
        return n < e && l > t ? "cover" : !0;
      n = l;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], n = this.sections[t++];
      e += (e ? " " : "") + i + (n >= 0 ? ":" + n : "");
    }
    return e;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new $e(e);
  }
  /**
  @internal
  */
  static create(e) {
    return new $e(e);
  }
}
class X extends $e {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return Zn(this, (t, i, n, r, o) => e = e.replace(n, n + (i - t), o), !1), e;
  }
  mapDesc(e, t = !1) {
    return es(this, e, t, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(e) {
    let t = this.sections.slice(), i = [];
    for (let n = 0, r = 0; n < t.length; n += 2) {
      let o = t[n], l = t[n + 1];
      if (l >= 0) {
        t[n] = l, t[n + 1] = o;
        let a = n >> 1;
        for (; i.length < a; )
          i.push(I.empty);
        i.push(o ? e.slice(r, r + o) : I.empty);
      }
      r += o;
    }
    return new X(t, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : qo(this, e, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(e, t = !1) {
    return e.empty ? this : es(this, e, t, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(e, t = !1) {
    Zn(this, e, t);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return $e.create(this.sections);
  }
  /**
  @internal
  */
  filter(e) {
    let t = [], i = [], n = [], r = new li(this);
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++];
      for (; l < a || l == a && r.len == 0; ) {
        if (r.done)
          break e;
        let c = Math.min(r.len, a - l);
        se(n, c, -1);
        let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
        se(t, c, f), f > 0 && it(i, t, r.text), r.forward(c), l += c;
      }
      let h = e[o++];
      for (; l < h; ) {
        if (r.done)
          break e;
        let c = Math.min(r.len, h - l);
        se(t, c, -1), se(n, c, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(c), l += c;
      }
    }
    return {
      changes: new X(t, i),
      filtered: $e.create(n)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t], n = this.sections[t + 1];
      n < 0 ? e.push(i) : n == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, t, i) {
    let n = [], r = [], o = 0, l = null;
    function a(c = !1) {
      if (!c && !n.length)
        return;
      o < t && se(n, t - o, -1);
      let f = new X(n, r);
      l = l ? l.compose(f.map(l)) : f, n = [], r = [], o = 0;
    }
    function h(c) {
      if (Array.isArray(c))
        for (let f of c)
          h(f);
      else if (c instanceof X) {
        if (c.length != t)
          throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${t})`);
        a(), l = l ? l.compose(c.map(l)) : c;
      } else {
        let { from: f, to: u = f, insert: d } = c;
        if (f > u || f < 0 || u > t)
          throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${t})`);
        let p = d ? typeof d == "string" ? I.of(d.split(i || Qn)) : d : I.empty, g = p.length;
        if (f == u && g == 0)
          return;
        f < o && a(), f > o && se(n, f - o, -1), se(n, u - f, g), it(r, n, p), o = u;
      }
    }
    return h(e), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new X(e ? [e, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], i = [];
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (typeof r == "number")
        t.push(r, -1);
      else {
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1)
          t.push(r[0], 0);
        else {
          for (; i.length < n; )
            i.push(I.empty);
          i[n] = I.of(r.slice(1)), t.push(r[0], i[n].length);
        }
      }
    }
    return new X(t, i);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new X(e, t);
  }
}
function se(s, e, t, i = !1) {
  if (e == 0 && t <= 0)
    return;
  let n = s.length - 2;
  n >= 0 && t <= 0 && t == s[n + 1] ? s[n] += e : n >= 0 && e == 0 && s[n] == 0 ? s[n + 1] += t : i ? (s[n] += e, s[n + 1] += t) : s.push(e, t);
}
function it(s, e, t) {
  if (t.length == 0)
    return;
  let i = e.length - 2 >> 1;
  if (i < s.length)
    s[s.length - 1] = s[s.length - 1].append(t);
  else {
    for (; s.length < i; )
      s.push(I.empty);
    s.push(t);
  }
}
function Zn(s, e, t) {
  let i = s.inserted;
  for (let n = 0, r = 0, o = 0; o < s.sections.length; ) {
    let l = s.sections[o++], a = s.sections[o++];
    if (a < 0)
      n += l, r += l;
    else {
      let h = n, c = r, f = I.empty;
      for (; h += l, c += a, a && i && (f = f.append(i[o - 2 >> 1])), !(t || o == s.sections.length || s.sections[o + 1] < 0); )
        l = s.sections[o++], a = s.sections[o++];
      e(n, h, r, c, f), n = h, r = c;
    }
  }
}
function es(s, e, t, i = !1) {
  let n = [], r = i ? [] : null, o = new li(s), l = new li(e);
  for (let a = -1; ; ) {
    if (o.done && l.len || l.done && o.len)
      throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      se(n, h, -1), o.forward(h), l.forward(h);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let h = l.len;
      for (se(n, l.ins, -1); h; ) {
        let c = Math.min(o.len, h);
        o.ins >= 0 && a < o.i && o.len <= c && (se(n, 0, o.ins), r && it(r, n, o.text), a = o.i), o.forward(c), h -= c;
      }
      l.next();
    } else if (o.ins >= 0) {
      let h = 0, c = o.len;
      for (; c; )
        if (l.ins == -1) {
          let f = Math.min(c, l.len);
          h += f, c -= f, l.forward(f);
        } else if (l.ins == 0 && l.len < c)
          c -= l.len, l.next();
        else
          break;
      se(n, h, a < o.i ? o.ins : 0), r && a < o.i && it(r, n, o.text), a = o.i, o.forward(o.len - c);
    } else {
      if (o.done && l.done)
        return r ? X.createSet(n, r) : $e.create(n);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function qo(s, e, t = !1) {
  let i = [], n = t ? [] : null, r = new li(s), o = new li(e);
  for (let l = !1; ; ) {
    if (r.done && o.done)
      return n ? X.createSet(i, n) : $e.create(i);
    if (r.ins == 0)
      se(i, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done)
      se(i, 0, o.ins, l), n && it(n, i, o.text), o.next();
    else {
      if (r.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len), h = i.length;
        if (r.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          se(i, a, c, l), n && c && it(n, i, o.text);
        } else o.ins == -1 ? (se(i, r.off ? 0 : r.len, a, l), n && it(n, i, r.textBit(a))) : (se(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), n && !o.off && it(n, i, o.text));
        l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > h), r.forward2(a), o.forward(a);
      }
    }
  }
}
class li {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, t = this.i - 2 >> 1;
    return t >= e.length ? I.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, i = this.i - 2 >> 1;
    return i >= t.length && !e ? I.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class et {
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.flags = i, this.goalColumn = n;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  /**
  A flag that, when set, makes some selection-extending commands
  treat the range's head and anchor as exchangeable, so that for
  example Shift-ArrowUp will make the lower side of the selection
  the anchor, even if that was the head before. Used to implement
  MacOS-style undirectional selections.
  */
  get undirectional() {
    return (this.flags & 64) > 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(e, t = -1) {
    let i, n;
    return this.empty ? i = n = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), n = e.mapPos(this.to, -1)), i == this.from && n == this.to ? this : new et(i, n, this.flags, this.goalColumn);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e, i = 0) {
    if (e <= this.anchor && t >= this.anchor)
      return w.range(e, t, void 0, void 0, i);
    let n = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return w.range(this.anchor, n, void 0, void 0, i);
  }
  /**
  Compare this range to another range.
  */
  eq(e, t = !1) {
    return this.anchor == e.anchor && this.head == e.head && this.goalColumn == e.goalColumn && (!t || !this.empty || this.assoc == e.assoc);
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return w.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, t, i, n) {
    return new et(e, t, i, n);
  }
}
class w {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, t = -1) {
    return e.empty ? this : w.create(this.ranges.map((i) => i.map(e, t)), this.mainIndex);
  }
  /**
  Compare this selection to another selection. By default, ranges
  are compared only by position. When `includeAssoc` is true,
  cursor ranges must also have the same
  [`assoc`](https://codemirror.net/6/docs/ref/#state.SelectionRange.assoc) value.
  */
  eq(e, t = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let i = 0; i < this.ranges.length; i++)
      if (!this.ranges[i].eq(e.ranges[i], t))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new w([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, t = !0) {
    return w.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice();
    return i[t] = e, w.create(i, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new w(e.ranges.map((t) => et.fromJSON(t)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, t = e) {
    return new w([w.range(e, t)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, n = 0; n < e.length; n++) {
      let r = e[n];
      if (r.empty ? r.from <= i : r.from < i)
        return w.normalized(e.slice(), t);
      i = r.to;
    }
    return new w(e, t);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, t = 0, i, n) {
    return et.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)), n);
  }
  /**
  Create a selection range.
  */
  static range(e, t, i, n, r) {
    let o = n == null ? 7 : Math.min(6, n);
    return !r && e != t && (r = t < e ? 1 : -1), r && (o |= r < 0 ? 8 : 16), t < e ? et.create(t, e, o | 32, i) : et.create(e, t, o, i);
  }
  /**
  Create an [undirectional](https://codemirror.net/6/docs/ref/#state.SelectionRange.undirectional)
  selection range.
  */
  static undirectionalRange(e, t) {
    return et.create(e, t, 64, void 0);
  }
  /**
  @internal
  */
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((n, r) => n.from - r.from), t = e.indexOf(i);
    for (let n = 1; n < e.length; n++) {
      let r = e[n], o = e[n - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from, a = Math.max(r.to, o.to);
        n <= t && t--, e.splice(--n, 2, r.anchor > r.head ? w.range(a, l) : w.range(l, a));
      }
    }
    return new w(e, t);
  }
}
function $o(s, e) {
  for (let t of s.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let Ks = 0;
class M {
  constructor(e, t, i, n, r) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = n, this.id = Ks++, this.default = e([]), this.extensions = typeof r == "function" ? r(this) : r;
  }
  /**
  Returns a facet reader for this facet, which can be used to
  [read](https://codemirror.net/6/docs/ref/#state.EditorState.facet) it but not to define values for it.
  */
  get reader() {
    return this;
  }
  /**
  Define a new facet.
  */
  static define(e = {}) {
    return new M(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : qs), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new $i([], this, 0, e);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new $i(e, this, 1, t);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new $i(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function qs(s, e) {
  return s == e || s.length == e.length && s.every((t, i) => t === e[i]);
}
class $i {
  constructor(e, t, i, n) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = n, this.id = Ks++;
  }
  dynamicSlot(e) {
    var t;
    let i = this.value, n = this.facet.compareInput, r = this.id, o = e[r] >> 1, l = this.type == 2, a = !1, h = !1, c = [];
    for (let f of this.dependencies)
      f == "doc" ? a = !0 : f == "selection" ? h = !0 : (((t = e[f.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && c.push(e[f.id]);
    return {
      create(f) {
        return f.values[o] = i(f), 1;
      },
      update(f, u) {
        if (a && u.docChanged || h && (u.docChanged || u.selection) || ts(f, c)) {
          let d = i(f);
          if (l ? !yr(d, f.values[o], n) : !n(d, f.values[o]))
            return f.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: (f, u) => {
        let d, p = u.config.address[r];
        if (p != null) {
          let g = Zi(u, p);
          if (this.dependencies.every((m) => m instanceof M ? u.facet(m) === f.facet(m) : m instanceof je ? u.field(m, !1) == f.field(m, !1) : !0) || (l ? yr(d = i(f), g, n) : n(d = i(f), g)))
            return f.values[o] = g, 0;
        } else
          d = i(f);
        return f.values[o] = d, 1;
      }
    };
  }
  get extension() {
    return this;
  }
}
function yr(s, e, t) {
  if (s.length != e.length)
    return !1;
  for (let i = 0; i < s.length; i++)
    if (!t(s[i], e[i]))
      return !1;
  return !0;
}
function ts(s, e) {
  let t = !1;
  for (let i of e)
    ti(s, i) & 1 && (t = !0);
  return t;
}
function ah(s, e, t) {
  let i = t.map((a) => s[a.id]), n = t.map((a) => a.type), r = i.filter((a) => !(a & 1)), o = s[e.id] >> 1;
  function l(a) {
    let h = [];
    for (let c = 0; c < i.length; c++) {
      let f = Zi(a, i[c]);
      if (n[c] == 2)
        for (let u of f)
          h.push(u);
      else
        h.push(f);
    }
    return e.combine(h);
  }
  return {
    create(a) {
      for (let h of i)
        ti(a, h);
      return a.values[o] = l(a), 1;
    },
    update(a, h) {
      if (!ts(a, r))
        return 0;
      let c = l(a);
      return e.compare(c, a.values[o]) ? 0 : (a.values[o] = c, 1);
    },
    reconfigure(a, h) {
      let c = ts(a, i), f = h.config.facets[e.id], u = h.facet(e);
      if (f && !c && qs(t, f))
        return a.values[o] = u, 0;
      let d = l(a);
      return e.compare(d, u) ? (a.values[o] = u, 0) : (a.values[o] = d, 1);
    }
  };
}
const vi = /* @__PURE__ */ M.define({ static: !0 });
class je {
  constructor(e, t, i, n, r) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = n, this.spec = r, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new je(Ks++, e.create, e.update, e.compare || ((i, n) => i === n), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(vi).find((i) => i.field == this);
    return (t?.create || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (i) => (i.values[t] = this.create(i), 1),
      update: (i, n) => {
        let r = i.values[t], o = this.updateF(r, n);
        return this.compareF(r, o) ? 0 : (i.values[t] = o, 1);
      },
      reconfigure: (i, n) => {
        let r = i.facet(vi), o = n.facet(vi), l;
        return (l = r.find((a) => a.field == this)) && l != o.find((a) => a.field == this) ? (i.values[t] = l.create(i), 1) : n.config.address[this.id] != null ? (i.values[t] = n.field(this), 0) : (i.values[t] = this.create(i), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, vi.of({ field: this, create: e })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
}
const gt = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function Ut(s) {
  return (e) => new jo(e, s);
}
const $s = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ Ut(gt.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ Ut(gt.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ Ut(gt.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ Ut(gt.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ Ut(gt.lowest)
};
class jo {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
  get extension() {
    return this;
  }
}
class qt {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new is(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return qt.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class is {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
  get extension() {
    return this;
  }
}
class Qi {
  constructor(e, t, i, n, r, o) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = i, this.address = n, this.staticValues = r, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, i) {
    let n = [], r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let u of hh(e, t, o))
      u instanceof je ? n.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let l = /* @__PURE__ */ Object.create(null), a = [], h = [];
    for (let u of n)
      l[u.id] = h.length << 1, h.push((d) => u.slot(d));
    let c = i?.config.facets;
    for (let u in r) {
      let d = r[u], p = d[0].facet, g = c && c[u] || [];
      if (d.every(
        (m) => m.type == 0
        /* Provider.Static */
      ))
        if (l[p.id] = a.length << 1 | 1, qs(g, d))
          a.push(i.facet(p));
        else {
          let m = p.combine(d.map((y) => y.value));
          a.push(i && p.compare(m, i.facet(p)) ? i.facet(p) : m);
        }
      else {
        for (let m of d)
          m.type == 0 ? (l[m.id] = a.length << 1 | 1, a.push(m.value)) : (l[m.id] = h.length << 1, h.push((y) => m.dynamicSlot(y)));
        l[p.id] = h.length << 1, h.push((m) => ah(m, p, d));
      }
    }
    let f = h.map((u) => u(l));
    return new Qi(e, o, f, l, a, r);
  }
}
function hh(s, e, t) {
  let i = [[], [], [], [], []], n = /* @__PURE__ */ new Map();
  function r(o, l) {
    let a = n.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let h = i[a].indexOf(o);
      h > -1 && i[a].splice(h, 1), o instanceof is && t.delete(o.compartment);
    }
    if (n.set(o, l), Array.isArray(o))
      for (let h of o)
        r(h, l);
    else if (o instanceof is) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = e.get(o.compartment) || o.inner;
      t.set(o.compartment, h), r(h, l);
    } else if (o instanceof jo)
      r(o.inner, o.prec);
    else if (o instanceof je)
      i[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof $i)
      i[l].push(o), o.facet.extensions && r(o.facet.extensions, gt.default);
    else {
      let h = o.extension;
      if (!h)
        throw new Error(`Unrecognized extension value in extension set (${o}).`);
      if (h == o)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(h, l);
    }
  }
  return r(s, gt.default), i.reduce((o, l) => o.concat(l));
}
function ti(s, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, i = s.status[t];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  s.status[t] = 4;
  let n = s.computeSlot(s, s.config.dynamicSlots[t]);
  return s.status[t] = 2 | n;
}
function Zi(s, e) {
  return e & 1 ? s.config.staticValues[e >> 1] : s.values[e >> 1];
}
const Uo = /* @__PURE__ */ M.define(), ns = /* @__PURE__ */ M.define({
  combine: (s) => s.some((e) => e),
  static: !0
}), Go = /* @__PURE__ */ M.define({
  combine: (s) => s.length ? s[0] : void 0,
  static: !0
}), _o = /* @__PURE__ */ M.define(), Yo = /* @__PURE__ */ M.define(), Jo = /* @__PURE__ */ M.define(), Xo = /* @__PURE__ */ M.define({
  combine: (s) => s.length ? s[0] : !1
});
class ct {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new ch();
  }
}
class ch {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new ct(this, e);
  }
}
class fh {
  /**
  @internal
  */
  constructor(e) {
    this.map = e;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(e) {
    return new q(this, e);
  }
}
class q {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new q(this.type, t);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(e) {
    return this.type == e;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds. It should be a type that
  doesn't include `undefined`, since that is used in
  [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
  removed.
  */
  static define(e = {}) {
    return new fh(e.map || ((t) => t));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let i = [];
    for (let n of e) {
      let r = n.map(t);
      r && i.push(r);
    }
    return i;
  }
}
q.reconfigure = /* @__PURE__ */ q.define();
q.appendConfig = /* @__PURE__ */ q.define();
class Q {
  constructor(e, t, i, n, r, o) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = n, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, i && $o(i, t.newLength), r.some((l) => l.type == Q.time) || (this.annotations = r.concat(Q.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, i, n, r, o) {
    return new Q(e, t, i, n, r, o);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(e) {
    for (let t of this.annotations)
      if (t.type == e)
        return t.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(e) {
    let t = this.annotation(Q.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
Q.time = /* @__PURE__ */ ct.define();
Q.userEvent = /* @__PURE__ */ ct.define();
Q.addToHistory = /* @__PURE__ */ ct.define();
Q.remote = /* @__PURE__ */ ct.define();
function uh(s, e) {
  let t = [];
  for (let i = 0, n = 0; ; ) {
    let r, o;
    if (i < s.length && (n == e.length || e[n] >= s[i]))
      r = s[i++], o = s[i++];
    else if (n < e.length)
      r = e[n++], o = e[n++];
    else
      return t;
    !t.length || t[t.length - 1] < r ? t.push(r, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function Qo(s, e, t) {
  var i;
  let n, r, o;
  return t ? (n = e.changes, r = X.empty(e.changes.length), o = s.changes.compose(e.changes)) : (n = e.changes.map(s.changes), r = s.changes.mapDesc(e.changes, !0), o = s.changes.compose(n)), {
    changes: o,
    selection: e.selection ? e.selection.map(r) : (i = s.selection) === null || i === void 0 ? void 0 : i.map(n),
    effects: q.mapEffects(s.effects, n).concat(q.mapEffects(e.effects, r)),
    annotations: s.annotations.length ? s.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: s.scrollIntoView || e.scrollIntoView
  };
}
function ss(s, e, t) {
  let i = e.selection, n = Bt(e.annotations);
  return e.userEvent && (n = n.concat(Q.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof X ? e.changes : X.of(e.changes || [], t, s.facet(Go)),
    selection: i && (i instanceof w ? i : w.single(i.anchor, i.head)),
    effects: Bt(e.effects),
    annotations: n,
    scrollIntoView: !!e.scrollIntoView
  };
}
function Zo(s, e, t) {
  let i = ss(s, e.length ? e[0] : {}, s.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (t = !1);
    let o = !!e[r].sequential;
    i = Qo(i, ss(s, e[r], o ? i.changes.newLength : s.doc.length), o);
  }
  let n = Q.create(s, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return ph(t ? dh(n) : n);
}
function dh(s) {
  let e = s.startState, t = !0;
  for (let n of e.facet(_o)) {
    let r = n(s);
    if (r === !1) {
      t = !1;
      break;
    }
    Array.isArray(r) && (t = t === !0 ? r : uh(t, r));
  }
  if (t !== !0) {
    let n, r;
    if (t === !1)
      r = s.changes.invertedDesc, n = X.empty(e.doc.length);
    else {
      let o = s.changes.filter(t);
      n = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    s = Q.create(e, n, s.selection && s.selection.map(r), q.mapEffects(s.effects, r), s.annotations, s.scrollIntoView);
  }
  let i = e.facet(Yo);
  for (let n = i.length - 1; n >= 0; n--) {
    let r = i[n](s);
    r instanceof Q ? s = r : Array.isArray(r) && r.length == 1 && r[0] instanceof Q ? s = r[0] : s = Zo(e, Bt(r), !1);
  }
  return s;
}
function ph(s) {
  let e = s.startState, t = e.facet(Jo), i = s;
  for (let n = t.length - 1; n >= 0; n--) {
    let r = t[n](s);
    r && Object.keys(r).length && (i = Qo(i, ss(e, r, s.changes.newLength), !0));
  }
  return i == s ? s : Q.create(e, s.changes, s.selection, i.effects, i.annotations, i.scrollIntoView);
}
const gh = [];
function Bt(s) {
  return s == null ? gh : Array.isArray(s) ? s : [s];
}
var _e = /* @__PURE__ */ (function(s) {
  return s[s.Word = 0] = "Word", s[s.Space = 1] = "Space", s[s.Other = 2] = "Other", s;
})(_e || (_e = {}));
const mh = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let rs;
try {
  rs = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function yh(s) {
  if (rs)
    return rs.test(s);
  for (let e = 0; e < s.length; e++) {
    let t = s[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || mh.test(t)))
      return !0;
  }
  return !1;
}
function bh(s) {
  return (e) => {
    if (!/\S/.test(e))
      return _e.Space;
    if (yh(e))
      return _e.Word;
    for (let t = 0; t < s.length; t++)
      if (e.indexOf(s[t]) > -1)
        return _e.Word;
    return _e.Other;
  };
}
class V {
  constructor(e, t, i, n, r, o) {
    this.config = e, this.doc = t, this.selection = i, this.values = n, this.status = e.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      ti(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return ti(this, i), Zi(this, i);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...e) {
    return Zo(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: n } = t;
    for (let l of e.effects)
      l.is(qt.reconfigure) ? (t && (n = /* @__PURE__ */ new Map(), t.compartments.forEach((a, h) => n.set(h, a)), t = null), n.set(l.value.compartment, l.value.extension)) : l.is(q.reconfigure) ? (t = null, i = l.value) : l.is(q.appendConfig) && (t = null, i = Bt(i).concat(l.value));
    let r;
    t ? r = e.startState.values.slice() : (t = Qi.resolve(i, n, this), r = new V(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (a, h) => h.reconfigure(a, this), null).values);
    let o = e.startState.facet(ns) ? e.newSelection : e.newSelection.asSingle();
    new V(t, e.newDoc, o, r, (l, a) => a.update(l, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: w.cursor(t.from + e.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(e) {
    let t = this.selection, i = e(t.ranges[0]), n = this.changes(i.changes), r = [i.range], o = Bt(i.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), h = this.changes(a.changes), c = h.map(n);
      for (let u = 0; u < l; u++)
        r[u] = r[u].map(c);
      let f = n.mapDesc(h, !0);
      r.push(a.range.map(f)), n = n.compose(c), o = q.mapEffects(o, c).concat(q.mapEffects(Bt(a.effects), f));
    }
    return {
      changes: n,
      selection: w.create(r, t.mainIndex),
      effects: o
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof X ? e : X.of(e, this.doc.length, this.facet(V.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return I.of(e.split(this.facet(V.lineSeparator) || Qn));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (ti(this, t), Zi(this, t));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(e) {
    let t = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let i in e) {
        let n = e[i];
        n instanceof je && this.config.address[n.id] != null && (t[i] = n.spec.toJSON(this.field(e[i]), this));
      }
    return t;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(e, t = {}, i) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let n = [];
    if (i) {
      for (let r in i)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          let o = i[r], l = e[r];
          n.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return V.create({
      doc: e.doc,
      selection: w.fromJSON(e.selection),
      extensions: t.extensions ? n.concat([t.extensions]) : n
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = Qi.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof I ? e.doc : I.of((e.doc || "").split(t.staticFacet(V.lineSeparator) || Qn)), n = e.selection ? e.selection instanceof w ? e.selection : w.single(e.selection.anchor, e.selection.head) : w.single(0);
    return $o(n, i.length), t.staticFacet(ns) || (n = n.asSingle()), new V(t, i, n, t.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(V.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(V.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(Xo);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(e, ...t) {
    for (let i of this.facet(V.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (i, n) => {
      if (n == "$")
        return "$";
      let r = +(n || 1);
      return !r || r > t.length ? i : t[r - 1];
    })), e;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(e, t, i = -1) {
    let n = [];
    for (let r of this.facet(Uo))
      for (let o of r(this, t, i))
        Object.prototype.hasOwnProperty.call(o, e) && n.push(o[e]);
    return n;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(e) {
    let t = this.languageDataAt("wordChars", e);
    return bh(t.length ? t[0] : "");
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: t, from: i, length: n } = this.doc.lineAt(e), r = this.charCategorizer(e), o = e - i, l = e - i;
    for (; o > 0; ) {
      let a = re(t, o, !1);
      if (r(t.slice(a, o)) != _e.Word)
        break;
      o = a;
    }
    for (; l < n; ) {
      let a = re(t, l);
      if (r(t.slice(l, a)) != _e.Word)
        break;
      l = a;
    }
    return o == l ? null : w.range(o + i, l + i);
  }
}
V.allowMultipleSelections = ns;
V.tabSize = /* @__PURE__ */ M.define({
  combine: (s) => s.length ? s[0] : 4
});
V.lineSeparator = Go;
V.readOnly = Xo;
V.phrases = /* @__PURE__ */ M.define({
  compare(s, e) {
    let t = Object.keys(s), i = Object.keys(e);
    return t.length == i.length && t.every((n) => s[n] == e[n]);
  }
});
V.languageData = Uo;
V.changeFilter = _o;
V.transactionFilter = Yo;
V.transactionExtender = Jo;
qt.reconfigure = /* @__PURE__ */ q.define();
function $t(s, e, t = {}) {
  let i = {};
  for (let n of s)
    for (let r of Object.keys(n)) {
      let o = n[r], l = i[r];
      if (l === void 0)
        i[r] = o;
      else if (!(l === o || o === void 0)) if (Object.hasOwnProperty.call(t, r))
        i[r] = t[r](l, o);
      else
        throw new Error("Config merge conflict for field " + r);
    }
  for (let n in e)
    i[n] === void 0 && (i[n] = e[n]);
  return i;
}
class xt {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(e) {
    return this == e;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(e, t = e) {
    return os.create(e, t, this);
  }
}
xt.prototype.startSide = xt.prototype.endSide = 0;
xt.prototype.point = !1;
xt.prototype.mapMode = ue.TrackDel;
function js(s, e) {
  return s == e || s.constructor == e.constructor && s.eq(e);
}
let os = class el {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new el(e, t, i);
  }
};
function ls(s, e) {
  return s.from - e.from || s.value.startSide - e.value.startSide;
}
class Us {
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.value = i, this.maxPoint = n;
  }
  get length() {
    return At(this.to);
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, t, i, n = 0) {
    let r = i ? this.to : this.from;
    for (let o = n, l = r.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, h = r[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o)
        return h >= 0 ? o : l;
      h >= 0 ? l = a : o = a + 1;
    }
  }
  between(e, t, i, n) {
    for (let r = this.findIndex(t, -1e9, !0), o = this.findIndex(i, 1e9, !1, r); r < o; r++)
      if (n(this.from[r] + e, this.to[r] + e, this.value[r]) === !1)
        return !1;
  }
  map(e, t, i, n, r) {
    let o = [], l = [], a = [], h = -1, c = -1;
    e: for (let f = 0; f < this.value.length; f++) {
      let u = this.value[f], d = this.from[f] + e, p = this.to[f] + e, g, m;
      if (d == p) {
        let y = t.mapPos(d, u.startSide, u.mapMode);
        if (y == null || (g = m = y, u.startSide != u.endSide && (m = t.mapPos(d, u.endSide), m < g)))
          continue;
      } else if (g = t.mapPos(d, u.startSide), m = t.mapPos(p, u.endSide), g > m || g == m && u.startSide > 0 && u.endSide <= 0)
        continue;
      if (!((m - g || u.endSide - u.startSide) < 0))
        if (h < 0 && (h = g), u.point && (c = Math.max(c, m - g)), (g - i || u.startSide - n) >= 0)
          o.push(u), l.push(g - h), a.push(m - h), i = m, n = u.endSide;
        else {
          if (g == m)
            for (let y = o.length; y > 0; y--) {
              if ((g - (a[y - 1] + h) || u.startSide - o[y - 1].endSide) >= 0) {
                o.splice(y, 0, u), l.splice(y, 0, g - h), a.splice(y, 0, m - h);
                continue e;
              }
              if ((g - (l[y - 1] + h) || u.endSide - o[y - 1].startSide) > 0)
                break;
            }
          r(g, m, u);
        }
    }
    return { mapped: o.length ? new Us(l, a, o, c) : null, pos: h };
  }
}
class P {
  constructor(e, t, i, n) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = n;
  }
  /**
  @internal
  */
  static create(e, t, i, n) {
    return new P(e, t, i, n);
  }
  /**
  @internal
  */
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk)
      e += t.value.length;
    return e;
  }
  /**
  @internal
  */
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(e) {
    let { add: t = [], sort: i = !1, filterFrom: n = 0, filterTo: r = this.length } = e, o = e.filter;
    if (t.length == 0 && !o)
      return this;
    if (i && (t = t.slice().sort(ls)), this.isEmpty)
      return t.length ? P.of(t) : this;
    let l = new tl(this, null, -1).goto(0), a = 0, h = [], c = new st();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let f = t[a++];
        c.addInner(f.from, f.to, f.value, !1) || h.push(f);
      } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || n > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || n > l.to || r < l.from || o(l.from, l.to, l.value)) && (c.addInner(l.from, l.to, l.value, !1) || h.push(os.create(l.from, l.to, l.value))), l.next());
    return c.finishInner(this.nextLayer.isEmpty && !h.length ? P.empty : this.nextLayer.update({ add: h, filter: o, filterFrom: n, filterTo: r }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], i = [], n = -1, r, o = (a, h, c) => {
      r || (r = new st()), r.addRange(a, h, c, !1);
    };
    for (let a = 0; a < this.chunk.length; a++) {
      let h = this.chunkPos[a], c = this.chunk[a], f = e.touchesRange(h, h + c.length);
      if (f === !1)
        n = Math.max(n, c.maxPoint), t.push(c), i.push(e.mapPos(h));
      else if (f === !0) {
        let [u, d] = t.length ? [At(i) + At(t).length, At(At(t).value).endSide] : [-1, -1], { mapped: p, pos: g } = c.map(h, e, u, d, o);
        p && (n = Math.max(n, p.maxPoint), t.push(p), i.push(g));
      }
    }
    let l = this.nextLayer.map(e);
    return r && (l = r.finishInner(l)), t.length == 0 ? l : new P(i, t, l || P.empty, n);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let n = 0; n < this.chunk.length; n++) {
        let r = this.chunkPos[n], o = this.chunk[n];
        if (t >= r && e <= r + o.length && o.between(r, e - r, t - r, i) === !1)
          return;
      }
      this.nextLayer.between(e, t, i);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(e = 0) {
    return ai.from([this]).goto(e);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(e, t = 0) {
    return ai.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, i, n, r = -1) {
    let o = e.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), l = t.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), a = br(o, l, i), h = new Gt(o, a, r), c = new Gt(l, a, r);
    i.iterGaps((f, u, d) => wr(h, f, c, u, d, n)), i.empty && i.length == 0 && wr(h, 0, c, 0, 0, n);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, t, i = 0, n) {
    n == null && (n = 999999999);
    let r = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0), o = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0);
    if (r.length != o.length)
      return !1;
    if (!r.length)
      return !0;
    let l = br(r, o), a = new Gt(r, l, 0).goto(i), h = new Gt(o, l, 0).goto(i);
    for (; ; ) {
      if (a.to != h.to || !as(a.active, h.active) || a.point && (!h.point || !js(a.point, h.point)))
        return !1;
      if (a.to > n)
        return !0;
      a.next(), h.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(e, t, i, n, r = -1) {
    let o = new Gt(e, null, r).goto(t), l = t, a = o.openStart;
    for (; ; ) {
      let h = Math.min(o.to, i);
      if (o.point) {
        let c = o.activeForPoint(o.to), f = o.pointFrom < t ? c.length + 1 : o.point.startSide < 0 ? c.length : Math.min(c.length, a);
        n.point(l, h, o.point, c, f, o.pointRank), a = Math.min(o.openEnd(h), c.length);
      } else h > l && (n.span(l, h, o.active, a), a = o.openEnd(h));
      if (o.to > i)
        return a + (o.point && o.to > i ? 1 : 0);
      l = o.to, o.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(e, t = !1) {
    let i = new st();
    for (let n of e instanceof os ? [e] : t ? wh(e) : e)
      i.add(n.from, n.to, n.value);
    return i.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return P.empty;
    let t = At(e);
    for (let i = e.length - 2; i >= 0; i--)
      for (let n = e[i]; n != P.empty; n = n.nextLayer)
        t = new P(n.chunkPos, n.chunk, t, Math.max(n.maxPoint, t.maxPoint));
    return t;
  }
}
P.empty = /* @__PURE__ */ new P([], [], null, -1);
function At(s) {
  return s[s.length - 1];
}
function wh(s) {
  if (s.length > 1)
    for (let e = s[0], t = 1; t < s.length; t++) {
      let i = s[t];
      if (ls(e, i) > 0)
        return s.slice().sort(ls);
      e = i;
    }
  return s;
}
P.empty.nextLayer = P.empty;
class st {
  finishChunk(e) {
    this.chunks.push(new Us(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(e, t, i) {
    this.addRange(e, t, i, !0);
  }
  /**
  @internal
  */
  addRange(e, t, i, n) {
    this.addInner(e, t, i, n) || (this.nextLayer || (this.nextLayer = new st())).addRange(e, t, i, n);
  }
  /**
  @internal
  */
  addInner(e, t, i, n) {
    let r = e - this.lastTo || i.startSide - this.last.endSide;
    if (n && r <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return r < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = i, this.lastFrom = e, this.lastTo = t, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
  }
  /**
  @internal
  */
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let i = t.value.length - 1;
    return this.last = t.value[i], this.lastFrom = t.from[i] + e, this.lastTo = t.to[i] + e, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(P.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = P.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function br(s, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let r of s)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && i.set(r.chunk[o], r.chunkPos[o]);
  let n = /* @__PURE__ */ new Set();
  for (let r of e)
    for (let o = 0; o < r.chunk.length; o++) {
      let l = i.get(r.chunk[o]);
      l != null && (t ? t.mapPos(l) : l) == r.chunkPos[o] && !t?.touchesRange(l, l + r.chunk[o].length) && n.add(r.chunk[o]);
    }
  return n;
}
class tl {
  constructor(e, t, i, n = 0) {
    this.layer = e, this.skip = t, this.minPoint = i, this.rank = n;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
  }
  gotoInner(e, t, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let n = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(n) || this.layer.chunkEnd(this.chunkIndex) < e || n.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let n = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!i || this.rangeIndex < n) && this.setRangeIndex(n);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], i = e + t.from[this.rangeIndex];
        if (this.from = i, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class ai {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let n = [];
    for (let r = 0; r < e.length; r++)
      for (let o = e[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= i && n.push(new tl(o, t, i, r));
    return n.length == 1 ? n[0] : new ai(n);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap)
      i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      En(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap)
      i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      En(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), En(this.heap, 0);
    }
  }
}
function En(s, e) {
  for (let t = s[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= s.length)
      break;
    let n = s[i];
    if (i + 1 < s.length && n.compare(s[i + 1]) >= 0 && (n = s[i + 1], i++), t.compare(n) < 0)
      break;
    s[i] = t, s[e] = n, e = i;
  }
}
class Gt {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = ai.from(e, t, i);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    ki(this.active, e), ki(this.activeTo, e), ki(this.activeRank, e), this.minActive = xr(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: n, rank: r } = this.cursor;
    for (; t < this.activeRank.length && (r - this.activeRank[t] || n - this.activeTo[t]) > 0; )
      t++;
    Si(this.active, t, i), Si(this.activeTo, t, n), Si(this.activeRank, t, r), e && Si(e, t, this.cursor.from), this.minActive = xr(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let n = this.minActive;
      if (n > -1 && (this.activeTo[n] - this.cursor.from || this.active[n].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[n] > e) {
          this.to = this.activeTo[n], this.endSide = this.active[n].endSide;
          break;
        }
        this.removeActive(n), i && ki(i, n);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let r = this.cursor.value;
          if (!r.point)
            this.addActive(i), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let n = i.length - 1; n >= 0 && i[n] < e; n--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let t = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > e || this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide) && t.push(this.active[i]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--)
      t++;
    return t;
  }
}
function wr(s, e, t, i, n, r) {
  s.goto(e), t.goto(i);
  let o = i + n, l = i, a = i - e, h = !!r.boundChange;
  for (let c = !1; ; ) {
    let f = s.to + a - t.to, u = f || s.endSide - t.endSide, d = u < 0 ? s.to + a : t.to, p = Math.min(d, o);
    if (s.point || t.point ? (s.point && t.point && js(s.point, t.point) && as(s.activeForPoint(s.to), t.activeForPoint(t.to)) || r.comparePoint(l, p, s.point, t.point), c = !1) : (c && r.boundChange(l), p > l && !as(s.active, t.active) && r.compareRange(l, p, s.active, t.active), h && p < o && (f || s.openEnd(d) != t.openEnd(d)) && (c = !0)), d > o)
      break;
    l = d, u <= 0 && s.next(), u >= 0 && t.next();
  }
}
function as(s, e) {
  if (s.length != e.length)
    return !1;
  for (let t = 0; t < s.length; t++)
    if (s[t] != e[t] && !js(s[t], e[t]))
      return !1;
  return !0;
}
function ki(s, e) {
  for (let t = e, i = s.length - 1; t < i; t++)
    s[t] = s[t + 1];
  s.pop();
}
function Si(s, e, t) {
  for (let i = s.length - 1; i >= e; i--)
    s[i + 1] = s[i];
  s[e] = t;
}
function xr(s, e) {
  let t = -1, i = 1e9;
  for (let n = 0; n < e.length; n++)
    (e[n] - i || s[n].endSide - s[t].endSide) < 0 && (t = n, i = e[n]);
  return t;
}
function bn(s, e, t = s.length) {
  let i = 0;
  for (let n = 0; n < t && n < s.length; )
    s.charCodeAt(n) == 9 ? (i += e - i % e, n++) : (i++, n = re(s, n));
  return i;
}
function xh(s, e, t, i) {
  for (let n = 0, r = 0; ; ) {
    if (r >= e)
      return n;
    if (n == s.length)
      break;
    r += s.charCodeAt(n) == 9 ? t - r % t : 1, n = re(s, n);
  }
  return s.length;
}
const hs = "ͼ", vr = typeof Symbol > "u" ? "__" + hs : Symbol.for(hs), cs = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : /* @__PURE__ */ Symbol("styleSet"), kr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Pt {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, t) {
    this.rules = [];
    let { finish: i } = t || {};
    function n(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function r(o, l, a, h) {
      let c = [], f = /^@(\w+)\b/.exec(o[0]), u = f && f[1] == "keyframes";
      if (f && l == null) return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          r(
            d.split(/,\s*/).map((g) => o.map((m) => g.replace(/&/, m))).reduce((g, m) => g.concat(m)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!f) throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          r(n(d), p, c, u);
        } else p != null && c.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (g) => "-" + g.toLowerCase()) + ": " + p + ";");
      }
      (c.length || u) && a.push((i && !f && !h ? o.map(i) : o).join(", ") + " {" + c.join(" ") + "}");
    }
    for (let o in e) r(n(o), e[o], this.rules);
  }
  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() {
    return this.rules.join(`
`);
  }
  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let e = kr[vr] || 1;
    return kr[vr] = e + 1, hs + e.toString(36);
  }
  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>, ?{nonce: ?string})
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  //
  // If a Content Security Policy nonce is provided, it is added to
  // the `<style>` tag generated by the library.
  static mount(e, t, i) {
    let n = e[cs], r = i && i.nonce;
    n ? r && n.setNonce(r) : n = new vh(e, r), n.mount(Array.isArray(t) ? t : [t], e);
  }
}
let Sr = /* @__PURE__ */ new Map();
class vh {
  constructor(e, t) {
    let i = e.ownerDocument || e, n = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && n.CSSStyleSheet) {
      let r = Sr.get(i);
      if (r) return e[cs] = r;
      this.sheet = new n.CSSStyleSheet(), Sr.set(i, this);
    } else
      this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[cs] = this;
  }
  mount(e, t) {
    let i = this.sheet, n = 0, r = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = this.modules.indexOf(l);
      if (a < r && a > -1 && (this.modules.splice(a, 1), r--, a = -1), a == -1) {
        if (this.modules.splice(r++, 0, l), i) for (let h = 0; h < l.rules.length; h++)
          i.insertRule(l.rules[h], n++);
      } else {
        for (; r < a; ) n += this.modules[r++].rules.length;
        n += l.rules.length, r++;
      }
    }
    if (i)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++)
        o += this.modules[a].getRules() + `
`;
      this.styleTag.textContent = o;
      let l = t.head || t;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var rt = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, hi = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, kh = typeof navigator < "u" && /Mac/.test(navigator.platform), Sh = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var te = 0; te < 10; te++) rt[48 + te] = rt[96 + te] = String(te);
for (var te = 1; te <= 24; te++) rt[te + 111] = "F" + te;
for (var te = 65; te <= 90; te++)
  rt[te] = String.fromCharCode(te + 32), hi[te] = String.fromCharCode(te);
for (var Rn in rt) hi.hasOwnProperty(Rn) || (hi[Rn] = rt[Rn]);
function Ch(s) {
  var e = kh && s.metaKey && s.shiftKey && !s.ctrlKey && !s.altKey || Sh && s.shiftKey && s.key && s.key.length == 1 || s.key == "Unidentified", t = !e && s.key || (s.shiftKey ? hi : rt)[s.keyCode] || s.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
function Ve() {
  var s = arguments[0];
  typeof s == "string" && (s = document.createElement(s));
  var e = 1, t = arguments[1];
  if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
    for (var i in t) if (Object.prototype.hasOwnProperty.call(t, i)) {
      var n = t[i];
      typeof n == "string" ? s.setAttribute(i, n) : n != null && (s[i] = n);
    }
    e++;
  }
  for (; e < arguments.length; e++) il(s, arguments[e]);
  return s;
}
function il(s, e) {
  if (typeof e == "string")
    s.appendChild(document.createTextNode(e));
  else if (e != null) if (e.nodeType != null)
    s.appendChild(e);
  else if (Array.isArray(e))
    for (var t = 0; t < e.length; t++) il(s, e[t]);
  else
    throw new RangeError("Unsupported child node: " + e);
}
let ae = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, fs = typeof document < "u" ? document : { documentElement: { style: {} } };
const us = /* @__PURE__ */ /Edge\/(\d+)/.exec(ae.userAgent), nl = /* @__PURE__ */ /MSIE \d/.test(ae.userAgent), ds = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ae.userAgent), wn = !!(nl || ds || us), Cr = !wn && /* @__PURE__ */ /gecko\/(\d+)/i.test(ae.userAgent), Pn = !wn && /* @__PURE__ */ /Chrome\/(\d+)/.exec(ae.userAgent), Ar = "webkitFontSmoothing" in fs.documentElement.style, ps = !wn && /* @__PURE__ */ /Apple Computer/.test(ae.vendor), Mr = ps && (/* @__PURE__ */ /Mobile\/\w+/.test(ae.userAgent) || ae.maxTouchPoints > 2);
var S = {
  mac: Mr || /* @__PURE__ */ /Mac/.test(ae.platform),
  windows: /* @__PURE__ */ /Win/.test(ae.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(ae.platform),
  ie: wn,
  ie_version: nl ? fs.documentMode || 6 : ds ? +ds[1] : us ? +us[1] : 0,
  gecko: Cr,
  gecko_version: Cr ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(ae.userAgent) || [0, 0])[1] : 0,
  chrome: !!Pn,
  chrome_version: Pn ? +Pn[1] : 0,
  ios: Mr,
  android: /* @__PURE__ */ /Android\b/.test(ae.userAgent),
  webkit: Ar,
  webkit_version: Ar ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(ae.userAgent) || [0, 0])[1] : 0,
  safari: ps,
  safari_version: ps ? +(/* @__PURE__ */ /\bVersion\/(\d+(\.\d+)?)/.exec(ae.userAgent) || [0, 0])[1] : 0,
  tabSize: fs.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
function Gs(s, e) {
  for (let t in s)
    t == "class" && e.class ? e.class += " " + s.class : t == "style" && e.style ? e.style += ";" + s.style : e[t] = s[t];
  return e;
}
const en = /* @__PURE__ */ Object.create(null);
function _s(s, e, t) {
  if (s == e)
    return !0;
  s || (s = en), e || (e = en);
  let i = Object.keys(s), n = Object.keys(e);
  if (i.length - 0 != n.length - 0)
    return !1;
  for (let r of i)
    if (r != t && (n.indexOf(r) == -1 || s[r] !== e[r]))
      return !1;
  return !0;
}
function Ah(s, e) {
  for (let t = s.attributes.length - 1; t >= 0; t--) {
    let i = s.attributes[t].name;
    e[i] == null && s.removeAttribute(i);
  }
  for (let t in e) {
    let i = e[t];
    t == "style" ? s.style.cssText = i : s.getAttribute(t) != i && s.setAttribute(t, i);
  }
}
function Tr(s, e, t) {
  let i = !1;
  if (e)
    for (let n in e)
      t && n in t || (i = !0, n == "style" ? s.style.cssText = "" : s.removeAttribute(n));
  if (t)
    for (let n in t)
      e && e[n] == t[n] || (i = !0, n == "style" ? s.style.cssText = t[n] : s.setAttribute(n, t[n]));
  return i;
}
function Mh(s) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < s.attributes.length; t++) {
    let i = s.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class gi {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(e) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(e, t, i) {
    return !1;
  }
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  For inline widgets that are displayed inline (as opposed to
  `inline-block`) and introduce line breaks (through `<br>` tags
  or textual newlines), this must indicate the amount of line
  breaks they introduce. Defaults to 0.
  */
  get lineBreaks() {
    return 0;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(e) {
    return !0;
  }
  /**
  Override the way screen coordinates for positions at/in the
  widget are found. `pos` will be the offset into the widget, and
  `side` the side of the position that is being queried—less than
  zero for before, greater than zero for after, and zero for
  directly at that position.
  */
  coordsAt(e, t, i) {
    return null;
  }
  /**
  @internal
  */
  get isHidden() {
    return !1;
  }
  /**
  @internal
  */
  get editable() {
    return !1;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(e) {
  }
}
var ne = /* @__PURE__ */ (function(s) {
  return s[s.Text = 0] = "Text", s[s.WidgetBefore = 1] = "WidgetBefore", s[s.WidgetAfter = 2] = "WidgetAfter", s[s.WidgetRange = 3] = "WidgetRange", s;
})(ne || (ne = {}));
class W extends xt {
  constructor(e, t, i, n) {
    super(), this.startSide = e, this.endSide = t, this.widget = i, this.spec = n;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(e) {
    return new mi(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return t += i && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new vt(e, t, t, i, e.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(e) {
    let t = !!e.block, i, n;
    if (e.isBlockGap)
      i = -5e8, n = 4e8;
    else {
      let { start: r, end: o } = sl(e, t);
      i = (r ? t ? -3e8 : -1 : 5e8) - 1, n = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new vt(e, i, n, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new yi(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, t = !1) {
    return P.of(e, t);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
W.none = P.empty;
class mi extends W {
  constructor(e) {
    let { start: t, end: i } = sl(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.attrs = e.class && e.attributes ? Gs(e.attributes, { class: e.class }) : e.class ? { class: e.class } : e.attributes || en;
  }
  eq(e) {
    return this == e || e instanceof mi && this.tagName == e.tagName && _s(this.attrs, e.attrs);
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
mi.prototype.point = !1;
class yi extends W {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof yi && this.spec.class == e.spec.class && _s(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
yi.prototype.mapMode = ue.TrackBefore;
yi.prototype.point = !0;
class vt extends W {
  constructor(e, t, i, n, r, o) {
    super(t, i, r, e), this.block = n, this.isReplace = o, this.mapMode = n ? t <= 0 ? ue.TrackBefore : ue.TrackAfter : ue.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? ne.WidgetRange : this.startSide <= 0 ? ne.WidgetBefore : ne.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof vt && Th(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
vt.prototype.point = !0;
function sl(s, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = s;
  return t == null && (t = s.inclusive), i == null && (i = s.inclusive), { start: t ?? e, end: i ?? e };
}
function Th(s, e) {
  return s == e || !!(s && e && s.compare(e));
}
function Dt(s, e, t, i = 0) {
  let n = t.length - 1;
  n >= 0 && t[n] + i >= s ? t[n] = Math.max(t[n], e) : t.push(s, e);
}
class ci extends xt {
  constructor(e, t, i) {
    super(), this.tagName = e, this.attributes = t, this.rank = i;
  }
  eq(e) {
    return e == this || e instanceof ci && this.tagName == e.tagName && _s(this.attributes, e.attributes);
  }
  /**
  Create a block wrapper object with the given tag name and
  attributes.
  */
  static create(e) {
    return new ci(e.tagName, e.attributes || en, e.rank == null ? 50 : Math.max(0, Math.min(e.rank, 100)));
  }
  /**
  Create a range set from the given block wrapper ranges.
  */
  static set(e, t = !1) {
    return P.of(e, t);
  }
}
ci.prototype.startSide = ci.prototype.endSide = -1;
function fi(s) {
  let e;
  return s.nodeType == 11 ? e = s.getSelection ? s : s.ownerDocument : e = s, e.getSelection();
}
function gs(s, e) {
  return e ? s == e || s.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function ii(s, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return gs(s, e.anchorNode);
  } catch {
    return !1;
  }
}
function ji(s) {
  return s.nodeType == 3 ? ui(s, 0, s.nodeValue.length).getClientRects() : s.nodeType == 1 ? s.getClientRects() : [];
}
function ni(s, e, t, i) {
  return t ? Or(s, e, t, i, -1) || Or(s, e, t, i, 1) : !1;
}
function ot(s) {
  for (var e = 0; ; e++)
    if (s = s.previousSibling, !s)
      return e;
}
function tn(s) {
  return s.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(s.nodeName);
}
function Or(s, e, t, i, n) {
  for (; ; ) {
    if (s == t && e == i)
      return !0;
    if (e == (n < 0 ? 0 : Xe(s))) {
      if (s.nodeName == "DIV")
        return !1;
      let r = s.parentNode;
      if (!r || r.nodeType != 1)
        return !1;
      e = ot(s) + (n < 0 ? 0 : 1), s = r;
    } else if (s.nodeType == 1) {
      if (s = s.childNodes[e + (n < 0 ? -1 : 0)], s.nodeType == 1 && s.contentEditable == "false")
        return !1;
      e = n < 0 ? Xe(s) : 0;
    } else
      return !1;
  }
}
function Xe(s) {
  return s.nodeType == 3 ? s.nodeValue.length : s.childNodes.length;
}
function nn(s, e) {
  let { left: t, right: i } = s;
  if (t == i)
    return s;
  let n = e ? t : i;
  return { left: n, right: n, top: s.top, bottom: s.bottom };
}
function Oh(s) {
  let e = s.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: s.innerWidth,
    top: 0,
    bottom: s.innerHeight
  };
}
function rl(s, e) {
  let t = e.width / s.offsetWidth, i = e.height / s.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - s.offsetWidth) < 1) && (t = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - s.offsetHeight) < 1) && (i = 1), { scaleX: t, scaleY: i };
}
function Bh(s, e, t, i, n, r, o, l) {
  let a = s.ownerDocument, h = a.defaultView || window;
  for (let c = s, f = !1; c && !f; )
    if (c.nodeType == 1) {
      let u, d = c == a.body, p = 1, g = 1;
      if (d)
        u = Oh(h);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (f = !0), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let A = c.getBoundingClientRect();
        ({ scaleX: p, scaleY: g } = rl(c, A)), u = {
          left: A.left,
          right: A.left + c.clientWidth * p,
          top: A.top,
          bottom: A.top + c.clientHeight * g
        };
      }
      let m = 0, y = 0;
      if (n == "nearest")
        e.top < u.top + o ? (y = e.top - (u.top + o), t > 0 && e.bottom > u.bottom + y && (y = e.bottom - u.bottom + o)) : e.bottom > u.bottom - o && (y = e.bottom - u.bottom + o, t < 0 && e.top - y < u.top && (y = e.top - (u.top + o)));
      else {
        let A = e.bottom - e.top, b = u.bottom - u.top;
        y = (n == "center" && A <= b ? e.top + A / 2 - b / 2 : n == "start" || n == "center" && t < 0 ? e.top - o : e.bottom - b + o) - u.top;
      }
      if (i == "nearest" ? e.left < u.left + r ? (m = e.left - (u.left + r), t > 0 && e.right > u.right + m && (m = e.right - u.right + r)) : e.right > u.right - r && (m = e.right - u.right + r, t < 0 && e.left < u.left + m && (m = e.left - (u.left + r))) : m = (i == "center" ? e.left + (e.right - e.left) / 2 - (u.right - u.left) / 2 : i == "start" == l ? e.left - r : e.right - (u.right - u.left) + r) - u.left, m || y)
        if (d)
          h.scrollBy(m, y);
        else {
          let A = 0, b = 0;
          if (y) {
            let T = c.scrollTop;
            c.scrollTop += y / g, b = (c.scrollTop - T) * g;
          }
          if (m) {
            let T = c.scrollLeft;
            c.scrollLeft += m / p, A = (c.scrollLeft - T) * p;
          }
          e = {
            left: e.left - A,
            top: e.top - b,
            right: e.right - A,
            bottom: e.bottom - b
          }, A && Math.abs(A - m) < 1 && (i = "nearest"), b && Math.abs(b - y) < 1 && (n = "nearest");
        }
      if (d)
        break;
      (e.top < u.top || e.bottom > u.bottom || e.left < u.left || e.right > u.right) && (e = {
        left: Math.max(e.left, u.left),
        right: Math.min(e.right, u.right),
        top: Math.max(e.top, u.top),
        bottom: Math.min(e.bottom, u.bottom)
      }), c = c.assignedSlot || c.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
}
function ol(s, e = !0) {
  let t = s.ownerDocument, i = null, n = null;
  for (let r = s.parentNode; r && !(r == t.body || (!e || i) && n); )
    if (r.nodeType == 1)
      !n && r.scrollHeight > r.clientHeight && (n = r), e && !i && r.scrollWidth > r.clientWidth && (i = r), r = r.assignedSlot || r.parentNode;
    else if (r.nodeType == 11)
      r = r.host;
    else
      break;
  return { x: i, y: n };
}
class Dh {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: i } = e;
    this.set(t, Math.min(e.anchorOffset, t ? Xe(t) : 0), i, Math.min(e.focusOffset, i ? Xe(i) : 0));
  }
  set(e, t, i, n) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = i, this.focusOffset = n;
  }
}
function ll(s) {
  let e = [];
  for (let t = s; t; t = t.nodeType == 11 ? t.host : t.parentNode)
    t.nodeType == 1 && e.push({ node: t, left: t.scrollLeft, top: t.scrollTop });
  return e;
}
function al(s, e = !0) {
  for (let { node: t, left: i, top: n } of s)
    e && t.scrollTop != n && (t.scrollTop = n), t.scrollLeft != i && (t.scrollLeft = i);
}
let pt = null;
S.safari && S.safari_version >= 26 && (pt = !1);
function hl(s) {
  if (s.setActive)
    return s.setActive();
  if (pt)
    return s.focus(pt);
  let e = ll(s);
  s.focus(pt == null ? {
    get preventScroll() {
      return pt = { preventScroll: !0 }, !0;
    }
  } : void 0), pt || (pt = !1, al(e));
}
let Br;
function ui(s, e, t = e) {
  let i = Br || (Br = document.createRange());
  return i.setEnd(s, t), i.setStart(s, e), i;
}
function Lt(s, e, t, i) {
  let n = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  i && ({ altKey: n.altKey, ctrlKey: n.ctrlKey, shiftKey: n.shiftKey, metaKey: n.metaKey } = i);
  let r = new KeyboardEvent("keydown", n);
  r.synthetic = !0, s.dispatchEvent(r);
  let o = new KeyboardEvent("keyup", n);
  return o.synthetic = !0, s.dispatchEvent(o), r.defaultPrevented || o.defaultPrevented;
}
function Lh(s) {
  for (; s; ) {
    if (s && (s.nodeType == 9 || s.nodeType == 11 && s.host))
      return s;
    s = s.assignedSlot || s.parentNode;
  }
  return null;
}
function Eh(s, e) {
  let t = e.focusNode, i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i)
    return !1;
  for (i = Math.min(i, Xe(t)); ; )
    if (i) {
      if (t.nodeType != 1)
        return !1;
      let n = t.childNodes[i - 1];
      n.contentEditable == "false" ? i-- : (t = n, i = Xe(t));
    } else {
      if (t == s)
        return !0;
      i = ot(t), t = t.parentNode;
    }
}
function cl(s) {
  return s instanceof Window ? s.pageYOffset > Math.max(0, s.document.documentElement.scrollHeight - s.innerHeight - 4) : s.scrollTop > Math.max(1, s.scrollHeight - s.clientHeight - 4);
}
function fl(s, e) {
  for (let t = s, i = e; ; ) {
    if (t.nodeType == 3 && i > 0)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i - 1], i = Xe(t);
    } else if (t.parentNode && !tn(t))
      i = ot(t), t = t.parentNode;
    else
      return null;
  }
}
function ul(s, e) {
  for (let t = s, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i], i = 0;
    } else if (t.parentNode && !tn(t))
      i = ot(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
class Me {
  constructor(e, t, i = !0) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new Me(e.parentNode, ot(e), t);
  }
  static after(e, t) {
    return new Me(e.parentNode, ot(e) + 1, t);
  }
}
var U = /* @__PURE__ */ (function(s) {
  return s[s.LTR = 0] = "LTR", s[s.RTL = 1] = "RTL", s;
})(U || (U = {}));
const kt = U.LTR, Ys = U.RTL;
function dl(s) {
  let e = [];
  for (let t = 0; t < s.length; t++)
    e.push(1 << +s[t]);
  return e;
}
const Rh = /* @__PURE__ */ dl("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), Ph = /* @__PURE__ */ dl("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), ms = /* @__PURE__ */ Object.create(null), Pe = [];
for (let s of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ s.charCodeAt(0), t = /* @__PURE__ */ s.charCodeAt(1);
  ms[e] = t, ms[t] = -e;
}
function pl(s) {
  return s <= 247 ? Rh[s] : 1424 <= s && s <= 1524 ? 2 : 1536 <= s && s <= 1785 ? Ph[s - 1536] : 1774 <= s && s <= 2220 ? 4 : 8192 <= s && s <= 8204 ? 256 : 64336 <= s && s <= 65023 ? 4 : 1;
}
const Ih = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class ze {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? Ys : kt;
  }
  /**
  @internal
  */
  constructor(e, t, i) {
    this.from = e, this.to = t, this.level = i;
  }
  /**
  @internal
  */
  side(e, t) {
    return this.dir == t == e ? this.to : this.from;
  }
  /**
  @internal
  */
  forward(e, t) {
    return e == (this.dir == t);
  }
  /**
  @internal
  */
  static find(e, t, i, n) {
    let r = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == i)
          return o;
        (r < 0 || (n != 0 ? n < 0 ? l.from < t : l.to > t : e[r].level > l.level)) && (r = o);
      }
    }
    if (r < 0)
      throw new RangeError("Index out of range");
    return r;
  }
}
function gl(s, e) {
  if (s.length != e.length)
    return !1;
  for (let t = 0; t < s.length; t++) {
    let i = s[t], n = e[t];
    if (i.from != n.from || i.to != n.to || i.direction != n.direction || !gl(i.inner, n.inner))
      return !1;
  }
  return !0;
}
const K = [];
function Nh(s, e, t, i, n) {
  for (let r = 0; r <= i.length; r++) {
    let o = r ? i[r - 1].to : e, l = r < i.length ? i[r].from : t, a = r ? 256 : n;
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = pl(s.charCodeAt(h));
      u == 512 ? u = c : u == 8 && f == 4 && (u = 16), K[h] = u == 4 ? 2 : u, u & 7 && (f = u), c = u;
    }
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = K[h];
      if (u == 128)
        h < l - 1 && c == K[h + 1] && c & 24 ? u = K[h] = c : K[h] = 256;
      else if (u == 64) {
        let d = h + 1;
        for (; d < l && K[d] == 64; )
          d++;
        let p = h && c == 8 || d < t && K[d] == 8 ? f == 1 ? 1 : 8 : 256;
        for (let g = h; g < d; g++)
          K[g] = p;
        h = d - 1;
      } else u == 8 && f == 1 && (K[h] = 1);
      c = u, u & 7 && (f = u);
    }
  }
}
function Hh(s, e, t, i, n) {
  let r = n == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let h = o ? i[o - 1].to : e, c = o < i.length ? i[o].from : t;
    for (let f = h, u, d, p; f < c; f++)
      if (d = ms[u = s.charCodeAt(f)])
        if (d < 0) {
          for (let g = l - 3; g >= 0; g -= 3)
            if (Pe[g + 1] == -d) {
              let m = Pe[g + 2], y = m & 2 ? n : m & 4 ? m & 1 ? r : n : 0;
              y && (K[f] = K[Pe[g]] = y), l = g;
              break;
            }
        } else {
          if (Pe.length == 189)
            break;
          Pe[l++] = f, Pe[l++] = u, Pe[l++] = a;
        }
      else if ((p = K[f]) == 2 || p == 1) {
        let g = p == n;
        a = g ? 0 : 1;
        for (let m = l - 3; m >= 0; m -= 3) {
          let y = Pe[m + 2];
          if (y & 2)
            break;
          if (g)
            Pe[m + 2] |= 2;
          else {
            if (y & 4)
              break;
            Pe[m + 2] |= 4;
          }
        }
      }
  }
}
function Wh(s, e, t, i) {
  for (let n = 0, r = i; n <= t.length; n++) {
    let o = n ? t[n - 1].to : s, l = n < t.length ? t[n].from : e;
    for (let a = o; a < l; ) {
      let h = K[a];
      if (h == 256) {
        let c = a + 1;
        for (; ; )
          if (c == l) {
            if (n == t.length)
              break;
            c = t[n++].to, l = n < t.length ? t[n].from : e;
          } else if (K[c] == 256)
            c++;
          else
            break;
        let f = r == 1, u = (c < e ? K[c] : i) == 1, d = f == u ? f ? 1 : 2 : i;
        for (let p = c, g = n, m = g ? t[g - 1].to : s; p > a; )
          p == m && (p = t[--g].from, m = g ? t[g - 1].to : s), K[--p] = d;
        a = c;
      } else
        r = h, a++;
    }
  }
}
function ys(s, e, t, i, n, r, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == n % 2)
    for (let a = e, h = 0; a < t; ) {
      let c = !0, f = !1;
      if (h == r.length || a < r[h].from) {
        let g = K[a];
        g != l && (c = !1, f = g == 16);
      }
      let u = !c && l == 1 ? [] : null, d = c ? i : i + 1, p = a;
      e: for (; ; )
        if (h < r.length && p == r[h].from) {
          if (f)
            break e;
          let g = r[h];
          if (!c)
            for (let m = g.to, y = h + 1; ; ) {
              if (m == t)
                break e;
              if (y < r.length && r[y].from == m)
                m = r[y++].to;
              else {
                if (K[m] == l)
                  break e;
                break;
              }
            }
          if (h++, u)
            u.push(g);
          else {
            g.from > a && o.push(new ze(a, g.from, d));
            let m = g.direction == kt != !(d % 2);
            bs(s, m ? i + 1 : i, n, g.inner, g.from, g.to, o), a = g.to;
          }
          p = g.to;
        } else {
          if (p == t || (c ? K[p] != l : K[p] == l))
            break;
          p++;
        }
      u ? ys(s, a, p, i + 1, n, u, o) : a < p && o.push(new ze(a, p, d)), a = p;
    }
  else
    for (let a = t, h = r.length; a > e; ) {
      let c = !0, f = !1;
      if (!h || a > r[h - 1].to) {
        let g = K[a - 1];
        g != l && (c = !1, f = g == 16);
      }
      let u = !c && l == 1 ? [] : null, d = c ? i : i + 1, p = a;
      e: for (; ; )
        if (h && p == r[h - 1].to) {
          if (f)
            break e;
          let g = r[--h];
          if (!c)
            for (let m = g.from, y = h; ; ) {
              if (m == e)
                break e;
              if (y && r[y - 1].to == m)
                m = r[--y].from;
              else {
                if (K[m - 1] == l)
                  break e;
                break;
              }
            }
          if (u)
            u.push(g);
          else {
            g.to < a && o.push(new ze(g.to, a, d));
            let m = g.direction == kt != !(d % 2);
            bs(s, m ? i + 1 : i, n, g.inner, g.from, g.to, o), a = g.from;
          }
          p = g.from;
        } else {
          if (p == e || (c ? K[p - 1] != l : K[p - 1] == l))
            break;
          p--;
        }
      u ? ys(s, p, a, i + 1, n, u, o) : p < a && o.push(new ze(p, a, d)), a = p;
    }
}
function bs(s, e, t, i, n, r, o) {
  let l = e % 2 ? 2 : 1;
  Nh(s, n, r, i, l), Hh(s, n, r, i, l), Wh(n, r, i, l), ys(s, n, r, e, t, i, o);
}
function Vh(s, e, t) {
  if (!s)
    return [new ze(0, 0, e == Ys ? 1 : 0)];
  if (e == kt && !t.length && !Ih.test(s))
    return ml(s.length);
  if (t.length)
    for (; s.length > K.length; )
      K[K.length] = 256;
  let i = [], n = e == kt ? 0 : 1;
  return bs(s, n, n, t, 0, s.length, i), i;
}
function ml(s) {
  return [new ze(0, s, 0)];
}
let yl = "";
function Fh(s, e, t, i, n) {
  var r;
  let o = i.head - s.from, l = ze.find(e, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc), a = e[l], h = a.side(n, t);
  if (o == h) {
    let u = l += n ? 1 : -1;
    if (u < 0 || u >= e.length)
      return null;
    a = e[l = u], o = a.side(!n, t), h = a.side(n, t);
  }
  let c = re(s.text, o, a.forward(n, t));
  (c < a.from || c > a.to) && (c = h), yl = s.text.slice(Math.min(o, c), Math.max(o, c));
  let f = l == (n ? e.length - 1 : 0) ? null : e[l + (n ? 1 : -1)];
  return f && c == h && f.level + (n ? 0 : 1) < a.level ? w.cursor(f.side(!n, t) + s.from, f.forward(n, t) ? 1 : -1, f.level) : w.cursor(c + s.from, a.forward(n, t) ? -1 : 1, a.level);
}
function zh(s, e, t) {
  for (let i = e; i < t; i++) {
    let n = pl(s.charCodeAt(i));
    if (n == 1)
      return kt;
    if (n == 2 || n == 4)
      return Ys;
  }
  return kt;
}
const bl = /* @__PURE__ */ M.define(), wl = /* @__PURE__ */ M.define(), xl = /* @__PURE__ */ M.define(), vl = /* @__PURE__ */ M.define(), ws = /* @__PURE__ */ M.define(), kl = /* @__PURE__ */ M.define(), Sl = /* @__PURE__ */ M.define(), Js = /* @__PURE__ */ M.define(), Xs = /* @__PURE__ */ M.define(), Cl = /* @__PURE__ */ M.define({
  combine: (s) => s.some((e) => e)
}), Al = /* @__PURE__ */ M.define({
  combine: (s) => s.some((e) => e)
}), Ml = /* @__PURE__ */ M.define();
class Et {
  constructor(e, t, i, n, r, o = !1) {
    this.range = e, this.y = t, this.x = i, this.yMargin = n, this.xMargin = r, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new Et(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new Et(w.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Ci = /* @__PURE__ */ q.define({ map: (s, e) => s.map(e) }), Tl = /* @__PURE__ */ q.define();
function Te(s, e, t) {
  let i = s.facet(vl);
  i.length ? i[0](e) : window.onerror && window.onerror(String(e), t, void 0, void 0, e) || (t ? console.error(t + ":", e) : console.error(e));
}
const Ge = /* @__PURE__ */ M.define({ combine: (s) => s.length ? s[0] : !0 });
let Kh = 0;
const Tt = /* @__PURE__ */ M.define({
  combine(s) {
    return s.filter((e, t) => {
      for (let i = 0; i < t; i++)
        if (s[i].plugin == e.plugin)
          return !1;
      return !0;
    });
  }
});
class ce {
  constructor(e, t, i, n, r) {
    this.id = e, this.create = t, this.domEventHandlers = i, this.domEventObservers = n, this.baseExtensions = r(this), this.extension = this.baseExtensions.concat(Tt.of({ plugin: this, arg: void 0 }));
  }
  /**
  Create an extension for this plugin with the given argument.
  */
  of(e) {
    return this.baseExtensions.concat(Tt.of({ plugin: this, arg: e }));
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, t) {
    const { eventHandlers: i, eventObservers: n, provide: r, decorations: o } = t || {};
    return new ce(Kh++, e, i, n, (l) => {
      let a = [];
      return o && a.push(xn.of((h) => {
        let c = h.plugin(l);
        return c ? o(c) : W.none;
      })), r && a.push(r(l)), a;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, t) {
    return ce.define((i, n) => new e(i, n), t);
  }
}
class In {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  get plugin() {
    return this.spec && this.spec.plugin;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(t);
          } catch (i) {
            if (Te(t.state, i, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.plugin.create(e, this.spec.arg);
      } catch (t) {
        Te(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        Te(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Ol = /* @__PURE__ */ M.define(), Qs = /* @__PURE__ */ M.define(), xn = /* @__PURE__ */ M.define(), Bl = /* @__PURE__ */ M.define(), Zs = /* @__PURE__ */ M.define(), bi = /* @__PURE__ */ M.define(), Dl = /* @__PURE__ */ M.define();
function Dr(s, e) {
  let t = s.state.facet(Dl);
  if (!t.length)
    return t;
  let i = t.map((r) => r instanceof Function ? r(s) : r), n = [];
  return P.spans(i, e.from, e.to, {
    point() {
    },
    span(r, o, l, a) {
      let h = r - e.from, c = o - e.from, f = n;
      for (let u = l.length - 1; u >= 0; u--, a--) {
        let d = l[u].spec.bidiIsolate, p;
        if (d == null && (d = zh(e.text, h, c)), a > 0 && f.length && (p = f[f.length - 1]).to == h && p.direction == d)
          p.to = c, f = p.inner;
        else {
          let g = { from: h, to: c, direction: d, inner: [] };
          f.push(g), f = g.inner;
        }
      }
    }
  }), n;
}
const Ll = /* @__PURE__ */ M.define();
function er(s) {
  let e = 0, t = 0, i = 0, n = 0;
  for (let r of s.state.facet(Ll)) {
    let o = r(s);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (n = Math.max(n, o.bottom)));
  }
  return { left: e, right: t, top: i, bottom: n };
}
const Xt = /* @__PURE__ */ M.define();
class xe {
  constructor(e, t, i, n) {
    this.fromA = e, this.toA = t, this.fromB = i, this.toB = n;
  }
  join(e) {
    return new xe(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, i = this;
    for (; t > 0; t--) {
      let n = e[t - 1];
      if (!(n.fromA > i.toA)) {
        if (n.toA < i.fromA)
          break;
        i = i.join(n), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, i), e;
  }
  // Extend a set to cover all the content in `ranges`, which is a
  // flat array with each pair of numbers representing fromB/toB
  // positions. These pairs are generated in unchanged ranges, so the
  // offset between doc A and doc B is the same for their start and
  // end points.
  static extendWithRanges(e, t) {
    if (t.length == 0)
      return e;
    let i = [];
    for (let n = 0, r = 0, o = 0; ; ) {
      let l = n < e.length ? e[n].fromB : 1e9, a = r < t.length ? t[r] : 1e9, h = Math.min(l, a);
      if (h == 1e9)
        break;
      let c = h + o, f = h, u = c;
      for (; ; )
        if (r < t.length && t[r] <= f) {
          let d = t[r + 1];
          r += 2, f = Math.max(f, d);
          for (let p = n; p < e.length && e[p].fromB <= f; p++)
            o = e[p].toA - e[p].toB;
          u = Math.max(u, d + o);
        } else if (n < e.length && e[n].fromB <= f) {
          let d = e[n++];
          f = Math.max(f, d.toB), u = Math.max(u, d.toA), o = d.toA - d.toB;
        } else
          break;
      i.push(new xe(c, u, h, f));
    }
    return i;
  }
}
class sn {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = X.empty(this.startState.doc.length);
    for (let r of i)
      this.changes = this.changes.compose(r.changes);
    let n = [];
    this.changes.iterChangedRanges((r, o, l, a) => n.push(new xe(r, o, l, a))), this.changedRanges = n;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new sn(e, t, i);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Returns true when
  [`viewportChanged`](https://codemirror.net/6/docs/ref/#view.ViewUpdate.viewportChanged) is true
  and the viewport change is not just the result of mapping it in
  response to document changes.
  */
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
const qh = [];
class _ {
  constructor(e, t, i = 0) {
    this.dom = e, this.length = t, this.flags = i, this.parent = null, e.cmTile = this;
  }
  get breakAfter() {
    return this.flags & 1;
  }
  get children() {
    return qh;
  }
  isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  isComposite() {
    return !1;
  }
  isLine() {
    return !1;
  }
  isText() {
    return !1;
  }
  isBlock() {
    return !1;
  }
  get domAttrs() {
    return null;
  }
  sync(e) {
    if (this.flags |= 2, this.flags & 4) {
      this.flags &= -5;
      let t = this.domAttrs;
      t && Ah(this.dom, t);
    }
  }
  toString() {
    return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "");
  }
  destroy() {
    this.parent = null;
  }
  setDOM(e) {
    this.dom = e, e.cmTile = this;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e, t = this.posAtStart) {
    let i = t;
    for (let n of this.children) {
      if (n == e)
        return i;
      i += n.length + n.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  covers(e) {
    return !0;
  }
  coordsIn(e, t, i) {
    return null;
  }
  domPosFor(e, t) {
    let i = ot(this.dom), n = this.length ? e > 0 : t > 0;
    return new Me(this.parent.dom, i + (n ? 1 : 0), e == 0 || e == this.length);
  }
  markDirty(e) {
    this.flags &= -3, e && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(!1);
  }
  get overrideDOMText() {
    return null;
  }
  get root() {
    for (let e = this; e; e = e.parent)
      if (e instanceof kn)
        return e;
    return null;
  }
  static get(e) {
    return e.cmTile;
  }
}
class vn extends _ {
  constructor(e) {
    super(e, 0), this._children = [];
  }
  isComposite() {
    return !0;
  }
  get children() {
    return this._children;
  }
  get lastChild() {
    return this.children.length ? this.children[this.children.length - 1] : null;
  }
  append(e) {
    this.children.push(e), e.parent = this;
  }
  sync(e) {
    if (this.flags & 2)
      return;
    super.sync(e);
    let t = this.dom, i = null, n, r = e?.node == t ? e : null, o = 0;
    for (let l of this.children) {
      if (l.sync(e), o += l.length + l.breakAfter, n = i ? i.nextSibling : t.firstChild, r && n != l.dom && (r.written = !0), l.dom.parentNode == t)
        for (; n && n != l.dom; )
          n = Lr(n);
      else
        t.insertBefore(l.dom, n);
      i = l.dom;
    }
    for (n = i ? i.nextSibling : t.firstChild, r && n && (r.written = !0); n; )
      n = Lr(n);
    this.length = o;
  }
}
function Lr(s) {
  let e = s.nextSibling;
  return s.parentNode.removeChild(s), e;
}
class kn extends vn {
  constructor(e, t) {
    super(t), this.view = e;
  }
  owns(e) {
    for (; e; e = e.parent)
      if (e == this)
        return !0;
    return !1;
  }
  isBlock() {
    return !0;
  }
  nearest(e) {
    for (; ; ) {
      if (!e)
        return null;
      let t = _.get(e);
      if (t && this.owns(t))
        return t;
      e = e.parentNode;
    }
  }
  blockTiles(e) {
    for (let t = [], i = this, n = 0, r = 0; ; )
      if (n == i.children.length) {
        if (!t.length)
          return;
        i = i.parent, i.breakAfter && r++, n = t.pop();
      } else {
        let o = i.children[n++];
        if (o instanceof Je)
          t.push(n), i = o, n = 0;
        else {
          let l = r + o.length, a = e(o, r);
          if (a !== void 0)
            return a;
          r = l + o.breakAfter;
        }
      }
  }
  // Find the block at the given position. If side < -1, make sure to
  // stay before block widgets at that position, if side > 1, after
  // such widgets (used for selection drawing, which needs to be able
  // to get coordinates for positions that aren't valid cursor positions).
  resolveBlock(e, t) {
    let i, n = -1, r, o = -1;
    if (this.blockTiles((l, a) => {
      let h = a + l.length;
      if (e >= a && e <= h) {
        if (l.isWidget() && t >= -1 && t <= 1) {
          if (l.flags & 32)
            return !0;
          l.flags & 16 && (i = void 0);
        }
        (a < e || e == h && (t < -1 ? l.length : l.covers(1))) && (!i || !l.isWidget() && i.isWidget()) && (i = l, n = e - a), (h > e || e == a && (t > 1 ? l.length : l.covers(-1))) && (!r || !l.isWidget() && r.isWidget()) && (r = l, o = e - a);
      }
    }), !i && !r)
      throw new Error("No tile at position " + e);
    return i && t < 0 || !r ? { tile: i, offset: n } : { tile: r, offset: o };
  }
}
class Je extends vn {
  constructor(e, t) {
    super(e), this.wrapper = t;
  }
  isBlock() {
    return !0;
  }
  covers(e) {
    return this.children.length ? e < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1) : !1;
  }
  get domAttrs() {
    return this.wrapper.attributes;
  }
  static of(e, t) {
    let i = new Je(t || document.createElement(e.tagName), e);
    return t || (i.flags |= 4), i;
  }
}
class It extends vn {
  constructor(e, t) {
    super(e), this.attrs = t;
  }
  isLine() {
    return !0;
  }
  static start(e, t, i) {
    let n = new It(t || document.createElement("div"), e);
    return (!t || !i) && (n.flags |= 4), n;
  }
  get domAttrs() {
    return this.attrs;
  }
  // Find the tile associated with a given position in this line.
  // Side -2/2 is handled specially, in that it allows the position
  // returned to be before (-2) or after (2) widgets that would always
  // be after/before a cursor position.
  resolveInline(e, t, i) {
    let n = null, r = -1, o = null, l = -1;
    function a(c, f) {
      for (let u = 0, d = 0; u < c.children.length && d <= f; u++) {
        let p = c.children[u], g = d + p.length;
        g >= f && (p.isComposite() ? a(p, f - d) : (!o || o.isHidden && (t > 0 && !(o.flags & 32) || i && jh(o, p))) && (g > f || p.flags & 32 && t <= 1) ? (o = p, l = f - d) : (d < f || p.flags & 16 && !p.isHidden && t >= -1) && (n = p, r = f - d)), d = g;
      }
    }
    a(this, e);
    let h = (t < 0 ? n : o) || n || o;
    return h ? { tile: h, offset: h == n ? r : l } : null;
  }
  coordsIn(e, t, i) {
    let n = this.resolveInline(e, t, !0);
    return n ? n.tile.coordsIn(Math.max(0, n.offset), t, i) : $h(this);
  }
  domIn(e, t) {
    let i = this.resolveInline(e, t);
    if (i) {
      let { tile: n, offset: r } = i;
      if (this.dom.contains(n.dom))
        return n.isText() ? new Me(n.dom, Math.min(n.dom.nodeValue.length, r)) : n.domPosFor(r, n.flags & 16 ? 1 : n.flags & 32 ? -1 : t);
      let o = i.tile.parent, l = !1;
      for (let a of o.children) {
        if (l)
          return new Me(a.dom, 0);
        a == i.tile && (l = !0);
      }
    }
    return new Me(this.dom, 0);
  }
}
function $h(s) {
  let e = s.dom.lastChild;
  if (!e)
    return s.dom.getBoundingClientRect();
  let t = ji(e);
  return t[t.length - 1] || null;
}
function jh(s, e) {
  let t = s.coordsIn(0, 1), i = e.coordsIn(0, 1);
  return t && i && i.top < t.bottom;
}
class de extends vn {
  constructor(e, t) {
    super(e), this.mark = t;
  }
  get domAttrs() {
    return this.mark.attrs;
  }
  static of(e, t) {
    let i = new de(t || document.createElement(e.tagName), e);
    return t || (i.flags |= 4), i;
  }
}
class yt extends _ {
  constructor(e, t) {
    super(e, t.length), this.text = t;
  }
  sync(e) {
    this.flags & 2 || (super.sync(e), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = !0), this.dom.nodeValue = this.text));
  }
  isText() {
    return !0;
  }
  toString() {
    return JSON.stringify(this.text);
  }
  coordsIn(e, t, i) {
    let n = this.dom.nodeValue.length;
    e > n && (e = n);
    let r = e, o = e, l = 0;
    e == 0 && t < 0 || e == n && t >= 0 ? S.chrome || S.gecko || (e ? (r--, l = 1) : o < n && (o++, l = -1)) : t < 0 ? r-- : o < n && o++;
    let a = ui(this.dom, r, o).getClientRects();
    if (!a.length)
      return null;
    let h = a[(l ? l < 0 : t >= 0) ? 0 : a.length - 1];
    return S.safari && !l && h.width == 0 && (h = Array.prototype.find.call(a, (c) => c.width) || h), i == null ? h : nn(h, (l ? l > 0 : t < 0) == i);
  }
  static of(e, t) {
    let i = new yt(t || document.createTextNode(e), e);
    return t || (i.flags |= 2), i;
  }
}
class St extends _ {
  constructor(e, t, i, n) {
    super(e, t, n), this.widget = i;
  }
  isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  covers(e) {
    return this.flags & 48 ? !1 : (this.flags & (e < 0 ? 64 : 128)) > 0;
  }
  coordsIn(e, t) {
    return this.coordsInWidget(e, t, !1);
  }
  coordsInWidget(e, t, i) {
    let n = this.widget.coordsAt(this.dom, e, t);
    if (n)
      return n;
    if (i)
      return nn(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0);
    {
      let r = this.dom.getClientRects(), o = null;
      if (!r.length)
        return null;
      let l = this.flags & 16 ? !0 : this.flags & 32 ? !1 : e > 0;
      for (let a = l ? r.length - 1 : 0; o = r[a], !(e > 0 ? a == 0 : a == r.length - 1 || o.top < o.bottom); a += l ? -1 : 1)
        ;
      return nn(o, !l);
    }
  }
  get overrideDOMText() {
    if (!this.length)
      return I.empty;
    let { root: e } = this;
    if (!e)
      return I.empty;
    let t = this.posAtStart;
    return e.view.state.doc.slice(t, t + this.length);
  }
  destroy() {
    super.destroy(), this.widget.destroy(this.dom);
  }
  static of(e, t, i, n, r) {
    return r || (r = e.toDOM(t), e.editable || (r.contentEditable = "false")), new St(r, i, e, n);
  }
}
class rn extends _ {
  constructor(e) {
    let t = document.createElement("img");
    t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), super(t, 0, e);
  }
  get isHidden() {
    return !0;
  }
  get overrideDOMText() {
    return I.empty;
  }
  coordsIn(e, t, i) {
    let n = this.dom.getBoundingClientRect();
    return i == null ? n : nn(n, t > 0 == i);
  }
}
class Uh {
  constructor(e) {
    this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = e;
  }
  // Advance by the given distance. If side is -1, stop leaving or
  // entering tiles, or skipping zero-length tiles, once the distance
  // has been traversed. When side is 1, leave, enter, or skip
  // everything at the end position.
  advance(e, t, i) {
    let { tile: n, index: r, beforeBreak: o, parents: l } = this;
    for (; e || t > 0; )
      if (n.isComposite())
        if (o) {
          if (!e)
            break;
          i && i.break(), e--, o = !1;
        } else if (r == n.children.length) {
          if (!e && !l.length)
            break;
          i && i.leave(n), o = !!n.breakAfter, { tile: n, index: r } = l.pop(), r++;
        } else {
          let a = n.children[r], h = a.breakAfter;
          (t > 0 ? a.length <= e : a.length < e) && (!i || i.skip(a, 0, a.length) !== !1 || !a.isComposite) ? (o = !!h, r++, e -= a.length) : (l.push({ tile: n, index: r }), n = a, r = 0, i && a.isComposite() && i.enter(a));
        }
      else {
        let a = n.length;
        if (r < a && e) {
          let h = Math.min(e, a - r);
          i && i.skip(n, r, r + h), e -= h, r += h;
        }
        if (r == a)
          o = !!n.breakAfter, { tile: n, index: r } = l.pop(), r++;
        else if (!e)
          break;
      }
    return this.tile = n, this.index = r, this.beforeBreak = o, this;
  }
  get root() {
    return this.parents.length ? this.parents[0].tile : this.tile;
  }
}
class Gh {
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.wrapper = i, this.rank = n;
  }
}
class _h {
  constructor(e, t, i) {
    this.cache = e, this.root = t, this.blockWrappers = i, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
  }
  addText(e, t, i, n) {
    var r;
    this.flushBuffer();
    let o = this.ensureMarks(t, i), l = o.lastChild;
    if (l && l.isText() && !(l.flags & 8) && l.length + e.length < 512) {
      this.cache.reused.set(
        l,
        2
        /* Reused.DOM */
      );
      let a = o.children[o.children.length - 1] = new yt(l.dom, l.text + e);
      a.parent = o;
    } else
      o.append(n || yt.of(e, (r = this.cache.find(yt)) === null || r === void 0 ? void 0 : r.dom));
    this.pos += e.length, this.afterWidget = null;
  }
  addComposition(e, t) {
    let i = this.curLine;
    i.dom != t.line.dom && (i.setDOM(this.cache.reused.has(t.line) ? Nn(t.line.dom) : t.line.dom), this.cache.reused.set(
      t.line,
      2
      /* Reused.DOM */
    ));
    let n = i;
    for (let l = t.marks.length - 1; l >= 0; l--) {
      let a = t.marks[l], h = n.lastChild;
      if (h instanceof de && h.mark.eq(a.mark))
        h.dom != a.dom && h.setDOM(Nn(a.dom)), n = h;
      else {
        if (this.cache.reused.get(a)) {
          let f = _.get(a.dom);
          f && f.setDOM(Nn(a.dom));
        }
        let c = de.of(a.mark, a.dom);
        n.append(c), n = c;
      }
      this.cache.reused.set(
        a,
        2
        /* Reused.DOM */
      );
    }
    let r = _.get(e.text);
    r && this.cache.reused.set(
      r,
      2
      /* Reused.DOM */
    );
    let o = new yt(e.text, e.text.nodeValue);
    o.flags |= 8, this.pos = e.range.toB, n.append(o);
  }
  addInlineWidget(e, t, i) {
    let n = this.afterWidget && e.flags & 48 && (this.afterWidget.flags & 48) == (e.flags & 48);
    n || this.flushBuffer();
    let r = this.ensureMarks(t, i);
    !n && !(e.flags & 16) && r.append(this.getBuffer(1)), r.append(e), this.pos += e.length, this.afterWidget = e;
  }
  addMark(e, t, i) {
    this.flushBuffer(), this.ensureMarks(t, i).append(e), this.pos += e.length, this.afterWidget = null;
  }
  addBlockWidget(e) {
    this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
  }
  continueWidget(e) {
    let t = this.afterWidget || this.lastBlock;
    t.length += e, this.pos += e;
  }
  addLineStart(e, t) {
    var i;
    e || (e = El);
    let n = It.start(e, t || ((i = this.cache.find(It)) === null || i === void 0 ? void 0 : i.dom), !!t);
    this.getBlockPos().append(this.lastBlock = this.curLine = n);
  }
  addLine(e) {
    this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
  }
  addBreak() {
    this.lastBlock.flags |= 1, this.endLine(), this.pos++;
  }
  addLineStartIfNotCovered(e) {
    this.blockPosCovered() || this.addLineStart(e);
  }
  ensureLine(e) {
    this.curLine || this.addLineStart(e);
  }
  ensureMarks(e, t) {
    var i;
    let n = this.curLine;
    for (let r = e.length - 1; r >= 0; r--) {
      let o = e[r], l;
      if (t > 0 && (l = n.lastChild) && l instanceof de && l.mark.eq(o))
        n = l, t--;
      else {
        let a = de.of(o, (i = this.cache.find(de, (h) => h.mark.eq(o))) === null || i === void 0 ? void 0 : i.dom);
        n.append(a), n = a, t = 0;
      }
    }
    return n;
  }
  endLine() {
    if (this.curLine) {
      this.flushBuffer();
      let e = this.curLine.lastChild;
      (!e || !Er(this.curLine, !1) || e.dom.nodeName != "BR" && e.isWidget() && !(S.ios && Er(this.curLine, !0))) && this.curLine.append(this.cache.findWidget(
        Hn,
        0,
        32
        /* TileFlag.After */
      ) || new St(
        Hn.toDOM(),
        0,
        Hn,
        32
        /* TileFlag.After */
      )), this.curLine = this.afterWidget = null;
    }
  }
  updateBlockWrappers() {
    this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
    for (let e = this.wrappers.length - 1; e >= 0; e--)
      this.wrappers[e].to < this.pos && this.wrappers.splice(e, 1);
    for (let e = this.blockWrappers; e.value && e.from <= this.pos; e.next())
      if (e.to >= this.pos) {
        let t = e.rank * 102 + e.value.rank, i = new Gh(e.from, e.to, e.value, t), n = this.wrappers.length;
        for (; n > 0 && (this.wrappers[n - 1].rank - i.rank || this.wrappers[n - 1].to - i.to) < 0; )
          n--;
        this.wrappers.splice(n, 0, i);
      }
    this.wrapperPos = this.pos;
  }
  getBlockPos() {
    var e;
    this.updateBlockWrappers();
    let t = this.root;
    for (let i of this.wrappers) {
      let n = t.lastChild;
      if (i.from < this.pos && n instanceof Je && n.wrapper.eq(i.wrapper))
        t = n;
      else {
        let r = Je.of(i.wrapper, (e = this.cache.find(Je, (o) => o.wrapper.eq(i.wrapper))) === null || e === void 0 ? void 0 : e.dom);
        t.append(r), t = r;
      }
    }
    return t;
  }
  blockPosCovered() {
    let e = this.lastBlock;
    return e != null && !e.breakAfter && (!e.isWidget() || (e.flags & 160) > 0);
  }
  getBuffer(e) {
    let t = 2 | (e < 0 ? 16 : 32), i = this.cache.find(
      rn,
      void 0,
      1
      /* Reused.Full */
    );
    return i && (i.flags = t), i || new rn(t);
  }
  flushBuffer() {
    this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
  }
}
class Yh {
  constructor(e) {
    this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = e.iter();
  }
  skip(e) {
    this.textOff + e <= this.text.length ? this.textOff += e : (this.skipCount += e - (this.text.length - this.textOff), this.text = "", this.textOff = 0);
  }
  next(e) {
    if (this.textOff == this.text.length) {
      let { value: n, lineBreak: r, done: o } = this.cursor.next(this.skipCount);
      if (this.skipCount = 0, o)
        throw new Error("Ran out of text content when drawing inline views");
      this.text = n;
      let l = this.textOff = Math.min(e, n.length);
      return r ? null : n.slice(0, l);
    }
    let t = Math.min(this.text.length, this.textOff + e), i = this.text.slice(this.textOff, t);
    return this.textOff = t, i;
  }
}
const on = [St, It, yt, de, rn, Je, kn];
for (let s = 0; s < on.length; s++)
  on[s].bucket = s;
class Jh {
  constructor(e) {
    this.view = e, this.buckets = on.map(() => []), this.index = on.map(() => 0), this.reused = /* @__PURE__ */ new Map();
  }
  // Put a tile in the cache.
  add(e) {
    let t = e.constructor.bucket, i = this.buckets[t];
    i.length < 6 ? i.push(e) : i[
      this.index[t] = (this.index[t] + 1) % 6
      /* C.Bucket */
    ] = e;
  }
  find(e, t, i = 2) {
    let n = e.bucket, r = this.buckets[n], o = this.index[n];
    for (let l = 0; l < r.length; l++) {
      let a = (l + o) % r.length, h = r[a];
      if ((!t || t(h)) && !this.reused.has(h))
        return r.splice(a, 1), a < o && this.index[n]--, this.reused.set(h, i), h;
    }
    return null;
  }
  findWidget(e, t, i) {
    let n = this.buckets[0];
    if (n.length)
      for (let r = 0, o = 0; ; r++) {
        if (r == n.length) {
          if (o)
            return null;
          o = 1, r = 0;
        }
        let l = n[r];
        if (!this.reused.has(l) && (o == 0 ? l.widget.compare(e) : l.widget.constructor == e.constructor && e.updateDOM(l.dom, this.view, l.widget)))
          return n.splice(r, 1), r < this.index[0] && this.index[0]--, l.widget == e && l.length == t && (l.flags & 497) == i ? (this.reused.set(
            l,
            1
            /* Reused.Full */
          ), l) : (this.reused.set(
            l,
            2
            /* Reused.DOM */
          ), new St(l.dom, t, e, l.flags & -498 | i));
      }
  }
  reuse(e) {
    return this.reused.set(
      e,
      1
      /* Reused.Full */
    ), e;
  }
  maybeReuse(e, t = 2) {
    if (!this.reused.has(e))
      return this.reused.set(e, t), e.dom;
  }
  clear() {
    for (let e = 0; e < this.buckets.length; e++)
      this.buckets[e].length = this.index[e] = 0;
  }
}
class Xh {
  constructor(e, t, i, n, r) {
    this.view = e, this.decorations = n, this.disallowBlockEffectsFor = r, this.openWidget = !1, this.openMarks = 0, this.cache = new Jh(e), this.text = new Yh(e.state.doc), this.builder = new _h(this.cache, new kn(e, e.contentDOM), P.iter(i)), this.cache.reused.set(
      t,
      2
      /* Reused.DOM */
    ), this.old = new Uh(t), this.reuseWalker = {
      skip: (o, l, a) => {
        if (this.cache.add(o), o.isComposite())
          return !1;
      },
      enter: (o) => this.cache.add(o),
      leave: () => {
      },
      break: () => {
      }
    };
  }
  run(e, t) {
    let i = t && this.getCompositionContext(t.text);
    for (let n = 0, r = 0, o = 0; ; ) {
      let l = o < e.length ? e[o++] : null, a = l ? l.fromA : this.old.root.length;
      if (a > n) {
        let h = a - n;
        this.preserve(h, !o, !l), n = a, r += h;
      }
      if (!l)
        break;
      t && l.fromA <= t.range.fromA && l.toA >= t.range.toA ? (this.forward(l.fromA, t.range.fromA, t.range.fromA < t.range.toA ? 1 : -1), this.emit(r, t.range.fromB), this.builder.flushBuffer(), this.cache.clear(), this.builder.addComposition(t, i), this.text.skip(t.range.toB - t.range.fromB), this.forward(t.range.fromA, l.toA), this.emit(t.range.toB, l.toB)) : (this.forward(l.fromA, l.toA), this.emit(r, l.toB)), r = l.toB, n = l.toA;
    }
    return this.builder.curLine && this.builder.endLine(), this.builder.root;
  }
  preserve(e, t, i) {
    let n = ec(this.old), r = this.openMarks;
    this.old.advance(e, i ? 1 : -1, {
      skip: (o, l, a) => {
        if (o.isWidget())
          if (this.openWidget)
            this.builder.continueWidget(a - l);
          else {
            let h = a > 0 || l < o.length ? St.of(o.widget, this.view, a - l, o.flags & 496, this.cache.maybeReuse(o)) : this.cache.reuse(o);
            h.flags & 256 ? (h.flags &= -2, this.builder.addBlockWidget(h)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(h, n, r), r = n.length);
          }
        else if (o.isText())
          this.builder.ensureLine(null), !l && a == o.length && !this.cache.reused.has(o) ? this.builder.addText(o.text, n, r, this.cache.reuse(o)) : (this.cache.add(o), this.builder.addText(o.text.slice(l, a), n, r)), r = n.length;
        else if (o.isLine())
          o.flags &= -2, this.cache.reused.set(
            o,
            1
            /* Reused.Full */
          ), this.builder.addLine(o);
        else if (o instanceof rn)
          this.cache.add(o);
        else if (o instanceof de)
          this.builder.ensureLine(null), this.builder.addMark(o, n, r), this.cache.reused.set(
            o,
            1
            /* Reused.Full */
          ), r = n.length;
        else
          return !1;
        this.openWidget = !1;
      },
      enter: (o) => {
        o.isLine() ? this.builder.addLineStart(o.attrs, this.cache.maybeReuse(o)) : (this.cache.add(o), o instanceof de && n.unshift(o.mark)), this.openWidget = !1;
      },
      leave: (o) => {
        o.isLine() ? n.length && (n.length = r = 0) : o instanceof de && (n.shift(), r = Math.min(r, n.length));
      },
      break: () => {
        this.builder.addBreak(), this.openWidget = !1;
      }
    }), this.text.skip(e);
  }
  emit(e, t) {
    let i = null, n = this.builder, r = -1, o = P.spans(this.decorations, e, t, {
      point: (l, a, h, c, f, u) => {
        if (h instanceof vt) {
          if (this.disallowBlockEffectsFor[u]) {
            if (h.block)
              throw new RangeError("Block decorations may not be specified via plugins");
            if (a > this.view.state.doc.lineAt(l).to)
              throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
          }
          if (r = c.length, f > c.length)
            n.continueWidget(a - l);
          else {
            let d = h.widget || (h.block ? Nt.block : Nt.inline), p = Qh(h), g = this.cache.findWidget(d, a - l, p) || St.of(d, this.view, a - l, p);
            h.block ? (h.startSide > 0 && n.addLineStartIfNotCovered(i), n.addBlockWidget(g)) : (n.ensureLine(i), n.addInlineWidget(g, c, f));
          }
          i = null;
        } else
          i = Zh(i, h);
        a > l && this.text.skip(a - l);
      },
      span: (l, a, h, c) => {
        for (let f = l; f < a; ) {
          let u = this.text.next(Math.min(512, a - f));
          u == null ? (n.addLineStartIfNotCovered(i), n.addBreak(), f++) : (n.ensureLine(i), n.addText(u, h, f == l ? c : h.length), f += u.length), i = null;
        }
        r = h.length;
      }
    });
    r > -1 && (this.openWidget = o > r), this.openWidget || n.addLineStartIfNotCovered(i), this.openMarks = o;
  }
  forward(e, t, i = 1) {
    t - e <= 10 ? this.old.advance(t - e, i, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(t - e - 10, -1), this.old.advance(5, i, this.reuseWalker));
  }
  getCompositionContext(e) {
    let t = [], i = null;
    for (let n = e.parentNode; ; n = n.parentNode) {
      let r = _.get(n);
      if (n == this.view.contentDOM)
        break;
      r instanceof de ? t.push(r) : r?.isLine() ? i = r : r instanceof Je || (n.nodeName == "DIV" && !i && n != this.view.contentDOM ? i = new It(n, El) : i || t.push(de.of(new mi({ tagName: n.nodeName.toLowerCase(), attributes: Mh(n) }), n)));
    }
    return { line: i, marks: t };
  }
}
function Er(s, e) {
  let t = (i) => {
    for (let n of i.children)
      if ((e ? n.isText() : n.length) || t(n))
        return !0;
    return !1;
  };
  return t(s);
}
function Qh(s) {
  let e = s.isReplace ? (s.startSide < 0 ? 64 : 0) | (s.endSide > 0 ? 128 : 0) : s.startSide > 0 ? 32 : 16;
  return s.block && (e |= 256), e;
}
const El = { class: "cm-line" };
function Zh(s, e) {
  let t = e.spec.attributes, i = e.spec.class;
  return !t && !i || (s || (s = { class: "cm-line" }), t && Gs(t, s), i && (s.class += " " + i)), s;
}
function ec(s) {
  let e = [];
  for (let t = s.parents.length; t > 1; t--) {
    let i = t == s.parents.length ? s.tile : s.parents[t].tile;
    i instanceof de && e.push(i.mark);
  }
  return e;
}
function Nn(s) {
  let e = _.get(s);
  return e && e.setDOM(s.cloneNode()), s;
}
class Nt extends gi {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
Nt.inline = /* @__PURE__ */ new Nt("span");
Nt.block = /* @__PURE__ */ new Nt("div");
const Hn = /* @__PURE__ */ new class extends gi {
  toDOM() {
    return document.createElement("br");
  }
  get isHidden() {
    return !0;
  }
  get editable() {
    return !0;
  }
}();
class Rr {
  constructor(e) {
    this.view = e, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = W.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new kn(e, e.contentDOM), this.updateInner([new xe(0, 0, 0, e.state.doc.length)], null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: c, toA: f }) => f < this.minWidthFrom || c > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let n = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? n = this.domChanged.newSel.head : !hc(e.changes, this.hasComposition) && !e.selectionSet && (n = e.state.selection.main.head));
    let r = n > -1 ? ic(this.view, e.changes, n) : null;
    if (this.domChanged = null, this.hasComposition) {
      let { from: c, to: f } = this.hasComposition;
      i = new xe(c, f, e.changes.mapPos(c, -1), e.changes.mapPos(f, 1)).addToSet(i.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (S.ie || S.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, l = this.blockWrappers;
    this.updateDeco();
    let a = rc(o, this.decorations, e.changes);
    a.length && (i = xe.extendWithRanges(i, a));
    let h = lc(l, this.blockWrappers, e.changes);
    return h.length && (i = xe.extendWithRanges(i, h)), r && !i.some((c) => c.fromA <= r.range.fromA && c.toA >= r.range.toA) && (i = r.range.addToSet(i.slice())), this.tile.flags & 2 && i.length == 0 ? !1 : (this.updateInner(i, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t) {
    this.view.viewState.mustMeasureContent = !0;
    let { observer: i } = this.view;
    i.ignore(() => {
      if (t || e.length) {
        let o = this.tile, l = new Xh(this.view, o, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
        t && _.get(t.text) && l.cache.reused.set(
          _.get(t.text),
          2
          /* Reused.DOM */
        ), this.tile = l.run(e, t), xs(o, l.cache.reused);
      }
      this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let r = S.chrome || S.ios ? { node: i.selectionRange.focusNode, written: !1 } : void 0;
      this.tile.sync(r), r && (r.written || i.selectionRange.focusNode != r.node || !this.tile.dom.contains(r.node)) && (this.forceSelection = !0), this.tile.dom.style.height = "";
    });
    let n = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let r of this.tile.children)
        r.isWidget() && r.widget instanceof Wn && n.push(r.dom);
    i.updateGaps(n);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(Tl) && (this.editContextFormatting = i.value);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let { dom: i } = this.tile, n = this.view.root.activeElement, r = n == i, o = !r && !(this.view.state.facet(Ge) || i.tabIndex > -1) && ii(i, this.view.observer.selectionRange) && !(n && i.contains(n));
    if (!(r || t || o))
      return;
    let l = this.forceSelection;
    this.forceSelection = !1;
    let a = this.view.state.selection.main, h, c;
    if (a.empty ? c = h = this.inlineDOMNearPos(a.anchor, a.assoc || 1) : (c = this.inlineDOMNearPos(a.head, a.head == a.from ? 1 : -1), h = this.inlineDOMNearPos(a.anchor, a.anchor == a.from ? 1 : -1)), S.gecko && a.empty && !this.hasComposition && tc(h)) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => h.node.insertBefore(u, h.node.childNodes[h.offset] || null)), h = c = new Me(u, 0), l = !0;
    }
    let f = this.view.observer.selectionRange;
    (l || !f.focusNode || (!ni(h.node, h.offset, f.anchorNode, f.anchorOffset) || !ni(c.node, c.offset, f.focusNode, f.focusOffset)) && !this.suppressWidgetCursorChange(f, a)) && (this.view.observer.ignore(() => {
      S.android && S.chrome && i.contains(f.focusNode) && ac(f.focusNode, i) && (i.blur(), i.focus({ preventScroll: !0 }));
      let u = fi(this.view.root);
      if (u) if (a.empty) {
        if (S.gecko) {
          let d = nc(h.node, h.offset);
          if (d && d != 3) {
            let p = (d == 1 ? fl : ul)(h.node, h.offset);
            p && (h = new Me(p.node, p.offset));
          }
        }
        u.collapse(h.node, h.offset), a.bidiLevel != null && u.caretBidiLevel !== void 0 && (u.caretBidiLevel = a.bidiLevel);
      } else if (u.extend) {
        u.collapse(h.node, h.offset);
        try {
          u.extend(c.node, c.offset);
        } catch {
        }
      } else {
        let d = document.createRange();
        a.anchor > a.head && ([h, c] = [c, h]), d.setEnd(c.node, c.offset), d.setStart(h.node, h.offset), u.removeAllRanges(), u.addRange(d);
      }
      o && this.view.root.activeElement == i && (i.blur(), n && n.focus());
    }), this.view.observer.setSelectionRange(h, c)), this.impreciseAnchor = h.precise ? null : new Me(f.anchorNode, f.anchorOffset), this.impreciseHead = c.precise ? null : new Me(f.focusNode, f.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && ni(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, i = fi(e.root), { anchorNode: n, anchorOffset: r } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify)
      return;
    let o = this.lineAt(t.head, t.assoc);
    if (!o)
      return;
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length)
      return;
    let a = this.coordsAt(t.head, -1), h = this.coordsAt(t.head, 1);
    if (!a || !h || a.bottom > h.top)
      return;
    let c = this.domAtPos(t.head + t.assoc, t.assoc);
    i.collapse(c.node, c.offset), i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let f = e.observer.selectionRange;
    e.docView.posFromDOM(f.anchorNode, f.anchorOffset) != t.from && i.collapse(n, r);
  }
  posFromDOM(e, t) {
    let i = this.tile.nearest(e);
    if (!i)
      return this.tile.dom.compareDocumentPosition(e) & 2 ? 0 : this.view.state.doc.length;
    let n = i.posAtStart;
    if (i.isComposite()) {
      let r;
      if (e == i.dom)
        r = i.dom.childNodes[t];
      else {
        let o = Xe(e) == 0 ? 0 : t == 0 ? -1 : 1;
        for (; ; ) {
          let l = e.parentNode;
          if (l == i.dom)
            break;
          o == 0 && l.firstChild != l.lastChild && (e == l.firstChild ? o = -1 : o = 1), e = l;
        }
        o < 0 ? r = e : r = e.nextSibling;
      }
      if (r == i.dom.firstChild)
        return n;
      for (; r && !_.get(r); )
        r = r.nextSibling;
      if (!r)
        return n + i.length;
      for (let o = 0, l = n; ; o++) {
        let a = i.children[o];
        if (a.dom == r)
          return l;
        l += a.length + a.breakAfter;
      }
    } else return i.isText() ? e == i.dom ? n + t : n + (t ? i.length : 0) : n;
  }
  domAtPos(e, t) {
    let { tile: i, offset: n } = this.tile.resolveBlock(e, t);
    return i.isWidget() ? i.domPosFor(n, t) : i.domIn(n, t);
  }
  inlineDOMNearPos(e, t) {
    let i, n = -1, r = !1, o, l = -1, a = !1;
    return this.tile.blockTiles((h, c) => {
      if (h.isWidget()) {
        if (h.flags & 32 && c >= e)
          return !0;
        h.flags & 16 && (r = !0);
      } else {
        let f = c + h.length;
        if (c <= e && (i = h, n = e - c, r = f < e), f >= e && !o && (o = h, l = e - c, a = c > e), c > e && o)
          return !0;
      }
    }), !i && !o ? this.domAtPos(e, t) : (r && o ? i = null : a && i && (o = null), i && t < 0 || !o ? i.domIn(n, t) : o.domIn(l, t));
  }
  // Get the coord of the element at the given side of the given
  // position. If rtl is given, flatten it using that text direction.
  coordsAt(e, t, i) {
    let { tile: n, offset: r } = this.tile.resolveBlock(e, t);
    return n.isWidget() ? n.widget instanceof Wn ? null : n.coordsInWidget(r, t, !0) : n.coordsIn(r, t, i);
  }
  lineAt(e, t) {
    let { tile: i } = this.tile.resolveBlock(e, t);
    return i.isLine() ? i : null;
  }
  coordsForChar(e) {
    let { tile: t, offset: i } = this.tile.resolveBlock(e, 1);
    if (!t.isLine())
      return null;
    function n(r, o) {
      if (r.isComposite())
        for (let l of r.children) {
          if (l.length >= o) {
            let a = n(l, o);
            if (a)
              return a;
          }
          if (o -= l.length, o < 0)
            break;
        }
      else if (r.isText() && o < r.length) {
        let l = re(r.text, o);
        if (l == o)
          return null;
        let a = ui(r.dom, o, l).getClientRects();
        for (let h = 0; h < a.length; h++) {
          let c = a[h];
          if (h == a.length - 1 || c.top < c.bottom && c.left < c.right)
            return c;
        }
      }
      return null;
    }
    return n(t, i);
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: i, to: n } = e, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == U.LTR, h = 0, c = (f, u, d) => {
      for (let p = 0; p < f.children.length && !(u > n); p++) {
        let g = f.children[p], m = u + g.length, y = g.dom.getBoundingClientRect(), { height: A } = y;
        if (d && !p && (h += y.top - d.top), g instanceof Je)
          m > i && c(g, u, y);
        else if (u >= i && (h > 0 && t.push(-h), t.push(A + h), h = 0, o)) {
          let b = g.dom.lastChild, T = b ? ji(b) : [];
          if (T.length) {
            let C = T[T.length - 1], v = a ? C.right - y.left : y.right - C.left;
            v > l && (l = v, this.minWidth = r, this.minWidthFrom = u, this.minWidthTo = m);
          }
        }
        d && p == f.children.length - 1 && (h += d.bottom - y.bottom), u = m + g.breakAfter;
      }
    };
    return c(this.tile, 0, null), t;
  }
  textDirectionAt(e) {
    let { tile: t } = this.tile.resolveBlock(e, 1);
    return getComputedStyle(t.dom).direction == "rtl" ? U.RTL : U.LTR;
  }
  measureTextSize() {
    let e = this.tile.blockTiles((o) => {
      if (o.isLine() && o.children.length && o.length <= 20) {
        let l = 0, a;
        for (let h of o.children) {
          if (!h.isText() || /[^ -~]/.test(h.text))
            return;
          let c = ji(h.dom);
          if (c.length != 1)
            return;
          l += c[0].width, a = c[0].height;
        }
        if (l)
          return {
            lineHeight: o.dom.getBoundingClientRect().height,
            charWidth: l / o.length,
            textHeight: a
          };
      }
    });
    if (e)
      return e;
    let t = document.createElement("div"), i, n, r;
    return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.tile.dom.appendChild(t);
      let o = ji(t.firstChild)[0];
      i = t.getBoundingClientRect().height, n = o && o.width ? o.width / 27 : 7, r = o && o.height ? o.height : i, t.remove();
    }), { lineHeight: i, charWidth: n, textHeight: r };
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, n = 0; ; n++) {
      let r = n == t.viewports.length ? null : t.viewports[n], o = r ? r.from - 1 : this.view.state.doc.length;
      if (o > i) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(W.replace({
          widget: new Wn(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, o));
      }
      if (!r)
        break;
      i = r.to + 1;
    }
    return W.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(xn).map((r) => (this.dynamicDecorationMap[e++] = typeof r == "function") ? r(this.view) : r), i = !1, n = this.view.state.facet(Zs).map((r, o) => {
      let l = typeof r == "function";
      return l && (i = !0), l ? r(this.view) : r;
    });
    for (n.length && (this.dynamicDecorationMap[e++] = i, t.push(P.join(n))), this.decorations = [
      this.editContextFormatting,
      ...t,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; e < this.decorations.length; )
      this.dynamicDecorationMap[e++] = !1;
    this.blockWrappers = this.view.state.facet(Bl).map((r) => typeof r == "function" ? r(this.view) : r);
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = h.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let h of this.view.state.facet(Ml))
      try {
        if (h(this.view, e.range, e))
          return !0;
      } catch (c) {
        Te(this.view.state, c, "scroll handler");
      }
    let { range: t } = e, i = this.coordsAt(t.head, t.assoc || (t.head > t.anchor ? -1 : 1)), n;
    if (!i)
      return;
    !t.empty && (n = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (i = {
      left: Math.min(i.left, n.left),
      top: Math.min(i.top, n.top),
      right: Math.max(i.right, n.right),
      bottom: Math.max(i.bottom, n.bottom)
    });
    let r = er(this.view), o = {
      left: i.left - r.left,
      top: i.top - r.top,
      right: i.right + r.right,
      bottom: i.bottom + r.bottom
    }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    if (Bh(this.view.scrollDOM, o, t.head < t.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, a), -a), this.view.textDirection == U.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (i.top > window.visualViewport.offsetTop + window.visualViewport.height || i.bottom < window.visualViewport.offsetTop)) {
      let h = this.view.docView.lineAt(t.head, 1);
      if (h) {
        let c = ll(h.dom);
        h.dom.scrollIntoView({ block: "nearest" }), al(c, !1);
      }
    }
  }
  lineHasWidget(e) {
    let t = (i) => i.isWidget() || i.children.some(t);
    return t(this.tile.resolveBlock(e, 1).tile);
  }
  destroy() {
    xs(this.tile);
  }
}
function xs(s, e) {
  let t = e?.get(s);
  if (t != 1) {
    t == null && s.destroy();
    for (let i of s.children)
      xs(i, e);
  }
}
function tc(s) {
  return s.node.nodeType == 1 && s.node.firstChild && (s.offset == 0 || s.node.childNodes[s.offset - 1].contentEditable == "false") && (s.offset == s.node.childNodes.length || s.node.childNodes[s.offset].contentEditable == "false");
}
function Rl(s, e) {
  let t = s.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let i = fl(t.focusNode, t.focusOffset), n = ul(t.focusNode, t.focusOffset), r = i || n;
  if (n && i && n.node != i.node) {
    let l = _.get(n.node);
    if (!l || l.isText() && l.text != n.node.nodeValue)
      r = n;
    else if (s.docView.lastCompositionAfterCursor) {
      let a = _.get(i.node);
      !a || a.isText() && a.text != i.node.nodeValue || (r = n);
    }
  }
  if (s.docView.lastCompositionAfterCursor = r != i, !r)
    return null;
  let o = e - r.offset;
  return { from: o, to: o + r.node.nodeValue.length, node: r.node };
}
function ic(s, e, t) {
  let i = Rl(s, t);
  if (!i)
    return null;
  let { node: n, from: r, to: o } = i, l = n.nodeValue;
  if (/[\n\r]/.test(l) || s.state.doc.sliceString(i.from, i.to) != l)
    return null;
  let a = e.invertedDesc;
  return { range: new xe(a.mapPos(r), a.mapPos(o), r, o), text: n };
}
function nc(s, e) {
  return s.nodeType != 1 ? 0 : (e && s.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < s.childNodes.length && s.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let sc = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    Dt(e, t, this.changes);
  }
  comparePoint(e, t) {
    Dt(e, t, this.changes);
  }
  boundChange(e) {
    Dt(e, e, this.changes);
  }
};
function rc(s, e, t) {
  let i = new sc();
  return P.compare(s, e, t, i), i.changes;
}
class oc {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    Dt(e, t, this.changes);
  }
  comparePoint() {
  }
  boundChange(e) {
    Dt(e, e, this.changes);
  }
}
function lc(s, e, t) {
  let i = new oc();
  return P.compare(s, e, t, i), i.changes;
}
function ac(s, e) {
  for (let t = s; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function hc(s, e) {
  let t = !1;
  return e && s.iterChangedRanges((i, n) => {
    i < e.to && n > e.from && (t = !0);
  }), t;
}
class Wn extends gi {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return e.className = "cm-gap", this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
function cc(s, e, t = 1) {
  let i = s.charCategorizer(e), n = s.doc.lineAt(e), r = e - n.from;
  if (n.length == 0)
    return w.cursor(e);
  r == 0 ? t = 1 : r == n.length && (t = -1);
  let o = r, l = r;
  t < 0 ? o = re(n.text, r, !1) : l = re(n.text, r);
  let a = i(n.text.slice(o, l));
  for (; o > 0; ) {
    let h = re(n.text, o, !1);
    if (i(n.text.slice(h, o)) != a)
      break;
    o = h;
  }
  for (; l < n.length; ) {
    let h = re(n.text, l);
    if (i(n.text.slice(l, h)) != a)
      break;
    l = h;
  }
  return w.undirectionalRange(o + n.from, l + n.from);
}
function fc(s, e, t, i, n) {
  let r = Math.round((i - e.left) * s.defaultCharacterWidth);
  if (s.lineWrapping && t.height > s.defaultLineHeight * 1.5) {
    let l = s.viewState.heightOracle.textHeight, a = Math.floor((n - t.top - (s.defaultLineHeight - l) * 0.5) / l);
    r += a * s.viewState.heightOracle.lineLength;
  }
  let o = s.state.sliceDoc(t.from, t.to);
  return t.from + xh(o, r, s.state.tabSize);
}
function vs(s, e, t) {
  let i = s.lineBlockAt(e);
  if (Array.isArray(i.type)) {
    let n;
    for (let r of i.type) {
      if (r.from > e)
        break;
      if (!(r.to < e)) {
        if (r.from < e && r.to > e)
          return r;
        (!n || r.type == ne.Text && (n.type != r.type || (t < 0 ? r.from < e : r.to > e))) && (n = r);
      }
    }
    return n || i;
  }
  return i;
}
function uc(s, e, t, i) {
  let n = vs(s, e.head, e.assoc || -1), r = !i || n.type != ne.Text || !(s.lineWrapping || n.widgetLineBreaks) ? null : s.coordsAtPos(e.assoc < 0 && e.head > n.from ? e.head - 1 : e.head);
  if (r) {
    let o = s.dom.getBoundingClientRect(), l = s.textDirectionAt(n.from), a = s.posAtCoords({
      x: t == (l == U.LTR) ? o.right - 1 : o.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (a != null)
      return w.cursor(a, t ? -1 : 1);
  }
  return w.cursor(t ? n.to : n.from, t ? -1 : 1);
}
function Pr(s, e, t, i) {
  let n = s.state.doc.lineAt(e.head), r = s.bidiSpans(n), o = s.textDirectionAt(n.from);
  for (let l = e, a = null; ; ) {
    let h = Fh(n, r, o, l, t), c = yl;
    if (!h) {
      if (n.number == (t ? s.state.doc.lines : 1))
        return l;
      c = `
`, n = s.state.doc.line(n.number + (t ? 1 : -1)), r = s.bidiSpans(n), h = s.visualLineSide(n, !t);
    }
    if (a) {
      if (!a(c))
        return l;
    } else {
      if (!i)
        return h;
      a = i(c);
    }
    l = h;
  }
}
function dc(s, e, t) {
  let i = s.state.charCategorizer(e), n = i(t);
  return (r) => {
    let o = i(r);
    return n == _e.Space && (n = o), n == o;
  };
}
function pc(s, e, t, i) {
  let n = e.head, r = t ? 1 : -1;
  if (n == (t ? s.state.doc.length : 0))
    return w.cursor(n, e.assoc);
  let o = e.goalColumn, l, a = s.contentDOM.getBoundingClientRect(), h = s.coordsAtPos(n, e.assoc || ((e.empty ? t : e.head == e.from) ? 1 : -1)), c = s.documentTop;
  if (h)
    o == null && (o = h.left - a.left), l = r < 0 ? h.top : h.bottom;
  else {
    let p = s.viewState.lineBlockAt(n);
    o == null && (o = Math.min(a.right - a.left, s.defaultCharacterWidth * (n - p.from))), l = (r < 0 ? p.top : p.bottom) + c;
  }
  let f = a.left + o, u = s.viewState.heightOracle.textHeight >> 1, d = i ?? u;
  for (let p = 0; ; p += u) {
    let g = l + (d + p) * r, m = ks(s, { x: f, y: g }, !1, r);
    if (t ? g > a.bottom : g < a.top)
      return w.cursor(m.pos, m.assoc);
    let y = s.coordsAtPos(m.pos, m.assoc), A = y ? (y.top + y.bottom) / 2 : 0;
    if (!y || (t ? A > l : A < l))
      return w.cursor(m.pos, m.assoc, void 0, o);
  }
}
function si(s, e, t) {
  for (; ; ) {
    let i = 0;
    for (let n of s)
      n.between(e - 1, e + 1, (r, o, l) => {
        if (e > r && e < o) {
          let a = i || t || (e - r < o - e ? -1 : 1);
          e = a < 0 ? r : o, i = a;
        }
      });
    if (!i)
      return e;
  }
}
function Pl(s, e) {
  let t = null;
  for (let i = 0; i < e.ranges.length; i++) {
    let n = e.ranges[i], r = null;
    if (n.empty) {
      let o = si(s, n.from, 0);
      o != n.from && (r = w.cursor(o, -1));
    } else {
      let o = si(s, n.from, -1), l = si(s, n.to, 1);
      (o != n.from || l != n.to) && (n.undirectional ? r = w.undirectionalRange(n.from, n.to) : r = w.range(n.from == n.anchor ? o : l, n.from == n.head ? o : l));
    }
    r && (t || (t = e.ranges.slice()), t[i] = r);
  }
  return t ? w.create(t, e.mainIndex) : e;
}
function Vn(s, e, t) {
  let i = si(s.state.facet(bi).map((n) => n(s)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : w.cursor(i, i < t.from ? 1 : -1);
}
class Fe {
  constructor(e, t) {
    this.pos = e, this.assoc = t;
  }
}
function ks(s, e, t, i) {
  let n = s.contentDOM.getBoundingClientRect(), r = n.top + s.viewState.paddingTop, { x: o, y: l } = e, a = l - r, h;
  for (; ; ) {
    if (a < 0)
      return new Fe(0, 1);
    if (a > s.viewState.docHeight)
      return new Fe(s.state.doc.length, -1);
    if (h = s.elementAtHeight(a), i == null)
      break;
    if (h.type == ne.Text) {
      if (i < 0 ? h.to < s.viewport.from : h.from > s.viewport.to)
        break;
      let u = s.docView.coordsAt(i < 0 ? h.from : h.to, i > 0 ? -1 : 1);
      if (u && (i < 0 ? u.top <= a + r : u.bottom >= a + r))
        break;
    }
    let f = s.viewState.heightOracle.textHeight / 2;
    a = i > 0 ? h.bottom + f : h.top - f;
  }
  if (s.viewport.from >= h.to || s.viewport.to <= h.from) {
    if (t)
      return null;
    if (h.type == ne.Text) {
      let f = fc(s, n, h, o, l);
      return new Fe(f, f == h.from ? 1 : -1);
    }
  }
  if (h.type != ne.Text)
    return a < (h.top + h.bottom) / 2 ? new Fe(h.from, 1) : new Fe(h.to, -1);
  let c = s.docView.lineAt(h.from, 2);
  return (!c || c.length != h.length) && (c = s.docView.lineAt(h.from, -2)), new gc(s, o, l, s.textDirectionAt(h.from)).scanTile(c, h.from);
}
class gc {
  constructor(e, t, i, n) {
    this.view = e, this.x = t, this.y = i, this.baseDir = n, this.line = null, this.spans = null;
  }
  bidiSpansAt(e) {
    return (!this.line || this.line.from > e || this.line.to < e) && (this.line = this.view.state.doc.lineAt(e), this.spans = this.view.bidiSpans(this.line)), this;
  }
  baseDirAt(e, t) {
    let { line: i, spans: n } = this.bidiSpansAt(e);
    return n[ze.find(n, e - i.from, -1, t)].level == this.baseDir;
  }
  dirAt(e, t) {
    let { line: i, spans: n } = this.bidiSpansAt(e);
    return n[ze.find(n, e - i.from, -1, t)].dir;
  }
  // Used to short-circuit bidi tests for content with a uniform direction
  bidiIn(e, t) {
    let { spans: i, line: n } = this.bidiSpansAt(e);
    return i.length > 1 || i.length && (i[0].level != this.baseDir || i[0].to + n.from < t);
  }
  // Scan through the rectangles for the content of a tile with inline
  // content, looking for one that overlaps the queried position
  // vertically and is closest horizontally. The caller is responsible
  // for dividing its content into N pieces, and pass an array with
  // N+1 positions (including the position after the last piece). For
  // a text tile, these will be character clusters, for a composite
  // tile, these will be child tiles.
  scan(e, t, i = !1) {
    let n = 0, r = e.length - 1, o = /* @__PURE__ */ new Set(), l = this.bidiIn(e[0], e[r]), a, h, c = -1, f = 1e9, u;
    e: for (; n < r; ) {
      let p = r - n, g = n + r >> 1;
      t: if (o.has(g)) {
        for (let A = 1; A < p; A++) {
          let b = g + A;
          if (b >= r && (b -= p), !o.has(b)) {
            g = b;
            break t;
          }
        }
        break e;
      }
      o.add(g);
      let m = t(g), y = 0;
      if (m)
        for (let A = 0; A < m.length; A++) {
          let b = m[A];
          if (!(b.width == 0 && m.length > 1))
            if (b.bottom < this.y)
              (!a || a.bottom < b.bottom) && (a = b), y = 1;
            else if (b.top > this.y)
              (!h || h.top > b.top) && (h = b), y = -1;
            else {
              let T = b.left > this.x ? this.x - b.left : b.right < this.x ? this.x - b.right : 0, C = Math.abs(T);
              C < f && (c = g, f = C, u = b), T && (y = T < 0 == (this.baseDir == U.LTR) ? -1 : 1);
            }
        }
      y == -1 && (!l || this.baseDirAt(e[g], 1)) ? r = g : y == 1 && (!l || this.baseDirAt(e[g + 1], -1)) && (n = g + 1);
    }
    if (!u) {
      if (!h && !a)
        return { i: 0, after: !1 };
      let p = a && (!h || this.y - a.bottom < h.top - this.y) ? a : h;
      return this.y = (p.top + p.bottom) / 2, this.scan(e, t, !0);
    }
    if (f && !i) {
      let { top: p, bottom: g } = u;
      if (a && a.bottom > (p + p + g) / 3)
        return this.y = a.bottom - 1, this.scan(e, t, !0);
      if (h && h.top < (p + g + g) / 3)
        return this.y = h.top + 1, this.scan(e, t, !0);
    }
    let d = (l ? this.dirAt(e[c], 1) : this.baseDir) == U.LTR;
    return {
      i: c,
      // Test whether x is closes to the start or end of this element
      after: this.x > (u.left + u.right) / 2 == d
    };
  }
  scanText(e, t) {
    let i = [];
    for (let r = 0; r < e.length; r = re(e.text, r))
      i.push(t + r);
    i.push(t + e.length);
    let n = this.scan(i, (r) => {
      let o = i[r] - t, l = i[r + 1] - t;
      return ui(e.dom, o, l).getClientRects();
    });
    return n.after ? new Fe(i[n.i + 1], -1) : new Fe(i[n.i], 1);
  }
  scanTile(e, t) {
    if (!e.length)
      return new Fe(t, 1);
    if (e.children.length == 1) {
      let l = e.children[0];
      if (l.isText())
        return this.scanText(l, t);
      if (l.isComposite())
        return this.scanTile(l, t);
    }
    let i = [t];
    for (let l = 0, a = t; l < e.children.length; l++)
      i.push(a += e.children[l].length);
    let n = this.scan(i, (l) => {
      let a = e.children[l];
      return a.flags & 48 ? null : (a.dom.nodeType == 1 ? a.dom : ui(a.dom, 0, a.length)).getClientRects();
    }), r = e.children[n.i], o = i[n.i];
    return r.isText() ? this.scanText(r, o) : r.isComposite() ? this.scanTile(r, o) : n.after ? new Fe(i[n.i + 1], -1) : new Fe(o, 1);
  }
}
const Mt = "￿";
class mc {
  constructor(e, t) {
    this.points = e, this.view = t, this.text = "", this.lineSeparator = t.state.facet(V.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += Mt;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let i = e.parentNode;
    for (let n = e; ; ) {
      this.findPointBefore(i, n);
      let r = this.text.length;
      this.readNode(n);
      let o = _.get(n), l = n.nextSibling;
      if (l == t) {
        o?.breakAfter && !l && i != this.view.contentDOM && this.lineBreak();
        break;
      }
      let a = _.get(l);
      (o && a ? o.breakAfter : (o ? o.breakAfter : tn(n)) || tn(l) && (n.nodeName != "BR" || o?.isWidget()) && this.text.length > r) && !bc(l, t) && this.lineBreak(), n = l;
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, n = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1, o = 1, l;
      if (this.lineSeparator ? (r = t.indexOf(this.lineSeparator, i), o = this.lineSeparator.length) : (l = n.exec(t)) && (r = l.index, o = l[0].length), this.append(t.slice(i, r < 0 ? t.length : r)), r < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      i = r + o;
    }
  }
  readNode(e) {
    let t = _.get(e), i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let n = i.iter(); !n.next().done; )
        n.lineBreak ? this.lineBreak() : this.append(n.value);
    } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (yc(e, i.node, i.offset) ? t : 0));
  }
}
function yc(s, e, t) {
  for (; ; ) {
    if (!e || t < Xe(e))
      return !1;
    if (e == s)
      return !0;
    t = ot(e) + 1, e = e.parentNode;
  }
}
function bc(s, e) {
  let t;
  for (; !(s == e || !s); s = s.nextSibling) {
    let i = _.get(s);
    if (!i?.isWidget())
      return !1;
    i && (t || (t = [])).push(i);
  }
  if (t)
    for (let i of t) {
      let n = i.overrideDOMText;
      if (n?.length)
        return !1;
    }
  return !0;
}
class Ir {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class wc {
  constructor(e, t, i, n) {
    this.typeOver = n, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: r, impreciseAnchor: o } = e.docView, l = e.state.selection;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = Il(e.docView.tile, t, i, 0))) {
      let a = r || o ? [] : vc(e), h = new mc(a, e);
      h.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = h.text, this.newSel = kc(a, this.bounds.from);
    } else {
      let a = e.observer.selectionRange, h = r && r.node == a.focusNode && r.offset == a.focusOffset || !gs(e.contentDOM, a.focusNode) ? l.main.head : e.docView.posFromDOM(a.focusNode, a.focusOffset), c = o && o.node == a.anchorNode && o.offset == a.anchorOffset || !gs(e.contentDOM, a.anchorNode) ? l.main.anchor : e.docView.posFromDOM(a.anchorNode, a.anchorOffset), f = e.viewport;
      if ((S.ios || S.chrome) && h != c && Math.min(h, c) <= l.main.from && Math.max(h, c) >= l.main.to && (f.from > 0 || f.to < e.state.doc.length)) {
        let u = Math.min(h, c), d = Math.max(h, c), p = f.from - u, g = f.to - d;
        (p == 0 || p == 1 || u == 0) && (g == 0 || g == -1 || d == e.state.doc.length) && (h = 0, c = e.state.doc.length);
      }
      if (e.inputState.composing > -1 && l.ranges.length > 1)
        this.newSel = l.replaceRange(w.range(c, h));
      else if (e.lineWrapping && c == h && !(l.main.empty && l.main.head == h) && e.inputState.lastTouchTime > Date.now() - 100) {
        let u = e.coordsAtPos(h, -1), d = 0;
        u && (d = e.inputState.lastTouchY <= u.bottom ? -1 : 1), this.newSel = w.create([w.cursor(h, d)]);
      } else
        this.newSel = w.single(c, h);
    }
  }
}
function Il(s, e, t, i) {
  if (s.isComposite()) {
    let n = -1, r = -1, o = -1, l = -1;
    for (let a = 0, h = i, c = i; a < s.children.length; a++) {
      let f = s.children[a], u = h + f.length;
      if (h < e && u > t)
        return Il(f, e, t, h);
      if (u >= e && n == -1 && (n = a, r = h), h > t && f.dom.parentNode == s.dom) {
        o = a, l = c;
        break;
      }
      c = u, h = u + f.breakAfter;
    }
    return {
      from: r,
      to: l < 0 ? i + s.length : l,
      startDOM: (n ? s.children[n - 1].dom.nextSibling : null) || s.dom.firstChild,
      endDOM: o < s.children.length && o >= 0 ? s.children[o].dom : null
    };
  } else return s.isText() ? { from: i, to: i + s.length, startDOM: s.dom, endDOM: s.dom.nextSibling } : null;
}
function Nl(s, e) {
  let t, { newSel: i } = e, { state: n } = s, r = n.selection.main, o = s.inputState.lastKeyTime > Date.now() - 100 ? s.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: l, to: a } = e.bounds, h = r.from, c = null;
    (o === 8 || S.android && e.text.length < a - l) && (h = r.to, c = "end");
    let f = n.doc.sliceString(l, a, Mt), u, d;
    !r.empty && r.from >= l && r.to <= a && (e.typeOver || f != e.text) && f.slice(0, r.from - l) == e.text.slice(0, r.from - l) && f.slice(r.to - l) == e.text.slice(u = e.text.length - (f.length - (r.to - l))) ? t = {
      from: r.from,
      to: r.to,
      insert: I.of(e.text.slice(r.from - l, u).split(Mt))
    } : (d = Hl(f, e.text, h - l, c)) && (S.chrome && o == 13 && d.toB == d.from + 2 && e.text.slice(d.from, d.toB) == Mt + Mt && d.toB--, t = {
      from: l + d.from,
      to: l + d.toA,
      insert: I.of(e.text.slice(d.from, d.toB).split(Mt))
    });
  } else i && (!s.hasFocus && n.facet(Ge) || ln(i, r)) && (i = null);
  if (!t && !i)
    return !1;
  if ((S.mac || S.android) && t && t.from == t.to && t.from == r.head - 1 && /^\. ?$/.test(t.insert.toString()) && s.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = w.single(i.main.anchor - 1, i.main.head - 1)), t = { from: t.from, to: t.to, insert: I.of([t.insert.toString().replace(".", " ")]) }) : n.doc.lineAt(r.from).to < r.to && s.docView.lineHasWidget(r.to) && s.inputState.insertingTextAt > Date.now() - 50 ? t = {
    from: r.from,
    to: r.to,
    insert: n.toText(s.inputState.insertingText)
  } : S.chrome && t && t.from == t.to && t.from == r.head && t.insert.toString() == `
 ` && s.lineWrapping && (i && (i = w.single(i.main.anchor - 1, i.main.head - 1)), t = { from: r.from, to: r.to, insert: I.of([" "]) }), t)
    return tr(s, t, i, o);
  if (i && !ln(i, r)) {
    let l = !1, a = "select";
    return s.inputState.lastSelectionTime > Date.now() - 50 && (s.inputState.lastSelectionOrigin == "select" && (l = !0), a = s.inputState.lastSelectionOrigin, a == "select.pointer" && (i = Pl(n.facet(bi).map((h) => h(s)), i))), s.dispatch({ selection: i, scrollIntoView: l, userEvent: a }), !0;
  } else
    return !1;
}
function tr(s, e, t, i = -1) {
  if (S.ios && s.inputState.flushIOSKey(e))
    return !0;
  let n = s.state.selection.main;
  if (S.android && (e.to == n.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == n.from || e.from == n.from - 1 && s.state.sliceDoc(e.from, n.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && Lt(s.contentDOM, "Enter", 13) || (e.from == n.from - 1 && e.to == n.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > n.head) && Lt(s.contentDOM, "Backspace", 8) || e.from == n.from && e.to == n.to + 1 && e.insert.length == 0 && Lt(s.contentDOM, "Delete", 46)))
    return !0;
  let r = e.insert.toString();
  s.inputState.composing >= 0 && s.inputState.composing++;
  let o, l = () => o || (o = xc(s, e, t));
  return s.state.facet(kl).some((a) => a(s, e.from, e.to, r, l)) || s.dispatch(l()), !0;
}
function xc(s, e, t) {
  let i, n = s.state, r = n.selection.main, o = -1;
  if (e.from == e.to && e.from < r.from || e.from > r.to) {
    let a = e.from < r.from ? -1 : 1, h = a < 0 ? r.from : r.to, c = si(n.facet(bi).map((f) => f(s)), h, a);
    e.from == c && (o = c);
  }
  if (o > -1)
    i = {
      changes: e,
      selection: w.cursor(e.from + e.insert.length, -1)
    };
  else if (e.from >= r.from && e.to <= r.to && e.to - e.from >= (r.to - r.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && s.inputState.composing < 0) {
    let a = r.from < e.from ? n.sliceDoc(r.from, e.from) : "", h = r.to > e.to ? n.sliceDoc(e.to, r.to) : "";
    i = n.replaceSelection(s.state.toText(a + e.insert.sliceString(0, void 0, s.state.lineBreak) + h));
  } else {
    let a = n.changes(e), h = t && t.main.to <= a.newLength ? t.main : void 0;
    if (n.selection.ranges.length > 1 && (s.inputState.composing >= 0 || s.inputState.compositionPendingChange) && e.to <= r.to + 10 && e.to >= r.to - 10) {
      let c = s.state.sliceDoc(e.from, e.to), f, u = t && Rl(s, t.main.head);
      if (u) {
        let p = e.insert.length - (e.to - e.from);
        f = { from: u.from, to: u.to - p };
      } else
        f = s.state.doc.lineAt(r.head);
      let d = r.to - e.to;
      i = n.changeByRange((p) => {
        if (p.from == r.from && p.to == r.to)
          return { changes: a, range: h || p.map(a) };
        let g = p.to - d, m = g - c.length;
        if (s.state.sliceDoc(m, g) != c || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        g >= f.from && m <= f.to)
          return { range: p };
        let y = n.changes({ from: m, to: g, insert: e.insert }), A = p.to - r.to;
        return {
          changes: y,
          range: h ? w.range(Math.max(0, h.anchor + A), Math.max(0, h.head + A)) : p.map(y)
        };
      });
    } else
      i = {
        changes: a,
        selection: h && n.selection.replaceRange(h)
      };
  }
  let l = "input.type";
  return (s.composing || s.inputState.compositionPendingChange && s.inputState.compositionEndedAt > Date.now() - 50) && (s.inputState.compositionPendingChange = !1, l += ".compose", s.inputState.compositionFirstChange && (l += ".start", s.inputState.compositionFirstChange = !1)), n.update(i, { userEvent: l, scrollIntoView: !0 });
}
function Hl(s, e, t, i) {
  let n = Math.min(s.length, e.length), r = 0;
  for (; r < n && s.charCodeAt(r) == e.charCodeAt(r); )
    r++;
  if (r == n && s.length == e.length)
    return null;
  let o = s.length, l = e.length;
  for (; o > 0 && l > 0 && s.charCodeAt(o - 1) == e.charCodeAt(l - 1); )
    o--, l--;
  if (i == "end") {
    let a = Math.max(0, r - Math.min(o, l));
    t -= o + a - r;
  }
  if (o < r && s.length < e.length) {
    let a = t <= r && t >= o ? r - t : 0;
    r -= a, l = r + (l - o), o = r;
  } else if (l < r) {
    let a = t <= r && t >= l ? r - t : 0;
    r -= a, o = r + (o - l), l = r;
  }
  return { from: r, toA: o, toB: l };
}
function vc(s) {
  let e = [];
  if (s.root.activeElement != s.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: i, focusNode: n, focusOffset: r } = s.observer.selectionRange;
  return t && (e.push(new Ir(t, i)), (n != t || r != i) && e.push(new Ir(n, r))), e;
}
function kc(s, e) {
  if (s.length == 0)
    return null;
  let t = s[0].pos, i = s.length == 2 ? s[1].pos : t;
  return t > -1 && i > -1 ? w.single(t + e, i + e) : null;
}
function ln(s, e) {
  return e.head == s.main.head && e.anchor == s.main.anchor;
}
class Sc {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.touchActive = !1, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.lastIOSMomentumScroll = 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, S.safari && e.contentDOM.addEventListener("input", () => null), S.gecko && Vc(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !Ec(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
  }
  runHandlers(e, t) {
    let i = this.handlers[e];
    if (i) {
      for (let n of i.observers)
        n(this.view, t);
      for (let n of i.handlers) {
        if (t.defaultPrevented)
          break;
        if (n(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = Ac(e), i = this.handlers, n = this.view.contentDOM;
    for (let r in t)
      if (r != "scroll") {
        let o = !t[r].handlers.length, l = i[r];
        l && o != !l.handlers.length && (n.removeEventListener(r, this.handleEvent), l = null), l || n.addEventListener(r, this.handleEvent, { passive: o });
      }
    for (let r in i)
      r != "scroll" && !t[r] && n.removeEventListener(r, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && Vl.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), S.android && S.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    if (S.ios && !e.synthetic && !e.altKey && !e.metaKey && (Wl.some((t) => t.keyCode == e.keyCode) && !e.ctrlKey || Mc.indexOf(e.key) > -1 && e.ctrlKey)) {
      let t = { ctrlKey: e.ctrlKey, altKey: e.altKey, metaKey: e.metaKey, shiftKey: e.shiftKey };
      return t.shiftKey && S.ios && !/^(off|none)$/.test(this.view.contentDOM.autocapitalize) && Cc(this.view.win) && (t.shiftKey = !1), this.pendingIOSKey = { key: e.key, keyCode: e.keyCode, mods: t }, setTimeout(() => this.flushIOSKey(), 50), !0;
    }
    return e.keyCode != 229 && this.view.observer.forceFlush(), !1;
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || this.view.observer.pendingRecords().length || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, Lt(this.view.contentDOM, t.key, t.keyCode, t.mods));
  }
  ignoreDuringComposition(e) {
    return !/^key/.test(e.type) || e.synthetic ? !1 : this.composing > 0 ? !0 : S.safari && !S.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.view.observer.update(e), this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function Cc(s) {
  return s.visualViewport ? s.visualViewport.height * s.visualViewport.scale / s.document.documentElement.clientHeight < 0.85 : !1;
}
function Nr(s, e) {
  return (t, i) => {
    try {
      return e.call(s, i, t);
    } catch (n) {
      Te(t.state, n);
    }
  };
}
function Ac(s) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of s) {
    let n = i.spec, r = n && n.plugin.domEventHandlers, o = n && n.plugin.domEventObservers;
    if (r)
      for (let l in r) {
        let a = r[l];
        a && t(l).handlers.push(Nr(i.value, a));
      }
    if (o)
      for (let l in o) {
        let a = o[l];
        a && t(l).observers.push(Nr(i.value, a));
      }
  }
  for (let i in Be)
    t(i).handlers.push(Be[i]);
  for (let i in fe)
    t(i).observers.push(fe[i]);
  return e;
}
const Wl = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], Mc = "dthko", Vl = [16, 17, 18, 20, 91, 92, 224, 225], Ai = 6;
function Mi(s) {
  return Math.max(0, s) * 0.7 + 8;
}
function Tc(s, e) {
  return Math.max(Math.abs(s.clientX - e.clientX), Math.abs(s.clientY - e.clientY));
}
class Oc {
  constructor(e, t, i, n) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = n, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = ol(e.contentDOM), this.atoms = e.state.facet(bi).map((o) => o(e));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(V.allowMultipleSelections) && Bc(e, t), this.dragging = Lc(e, t) && Kl(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && Tc(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, i = 0, n = 0, r = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: n, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: r, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = er(this.view);
    e.clientX - a.left <= n + Ai ? t = -Mi(n - e.clientX) : e.clientX + a.right >= o - Ai && (t = Mi(e.clientX - o)), e.clientY - a.top <= r + Ai ? i = -Mi(r - e.clientY) : e.clientY + a.bottom >= l - Ai && (i = Mi(e.clientY - l)), this.setScrollSpeed(t, i);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = { x: e, y: t }, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: e, y: t } = this.scrollSpeed;
    e && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e, e = 0), t && this.scrollParents.y && (this.scrollParents.y.scrollTop += t, t = 0), (e || t) && this.view.win.scrollBy(e, t), this.dragging === !1 && this.select(this.lastEvent);
  }
  select(e) {
    let { view: t } = this, i = Pl(this.atoms, this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function Bc(s, e) {
  let t = s.state.facet(bl);
  return t.length ? t[0](e) : S.mac ? e.metaKey : e.ctrlKey;
}
function Dc(s, e) {
  let t = s.state.facet(wl);
  return t.length ? t[0](e) : S.mac ? !e.altKey : !e.ctrlKey;
}
function Lc(s, e) {
  let { main: t } = s.state.selection;
  if (t.empty)
    return !1;
  let i = fi(s.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let n = i.getRangeAt(0).getClientRects();
  for (let r = 0; r < n.length; r++) {
    let o = n[r];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function Ec(s, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, i; t != s.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (i = _.get(t)) && i.isWidget() && !i.isHidden && i.widget.ignoreEvent(e))
      return !1;
  return !0;
}
const Be = /* @__PURE__ */ Object.create(null), fe = /* @__PURE__ */ Object.create(null), Fl = S.ie && S.ie_version < 15 || S.ios && S.webkit_version < 604;
function Rc(s) {
  let e = s.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    s.focus(), t.remove(), zl(s, t.value);
  }, 50);
}
function Sn(s, e, t) {
  for (let i of s.facet(e))
    t = i(t, s);
  return t;
}
function zl(s, e) {
  e = Sn(s.state, Js, e);
  let { state: t } = s, i, n = 1, r = t.toText(e), o = r.lines == t.selection.ranges.length;
  if (Ss != null && t.selection.ranges.every((a) => a.empty) && Ss == r.toString()) {
    let a = -1;
    i = t.changeByRange((h) => {
      let c = t.doc.lineAt(h.from);
      if (c.from == a)
        return { range: h };
      a = c.from;
      let f = t.toText((o ? r.line(n++).text : e) + t.lineBreak);
      return {
        changes: { from: c.from, insert: f },
        range: w.cursor(h.from + f.length)
      };
    });
  } else o ? i = t.changeByRange((a) => {
    let h = r.line(n++);
    return {
      changes: { from: a.from, to: a.to, insert: h.text },
      range: w.cursor(a.from + h.length)
    };
  }) : i = t.replaceSelection(r);
  s.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
fe.scroll = (s) => {
  let e = s.inputState;
  e.lastScrollTop = s.scrollDOM.scrollTop, e.lastScrollLeft = s.scrollDOM.scrollLeft, S.ios && !e.touchActive && (e.lastIOSMomentumScroll = Date.now());
};
fe.wheel = fe.mousewheel = (s) => {
  s.inputState.lastWheelEvent = Date.now();
};
Be.keydown = (s, e) => (s.inputState.setSelectionOrigin("select"), e.keyCode == 27 && s.inputState.tabFocusMode != 0 && (s.inputState.tabFocusMode = Date.now() + 2e3), !1);
fe.touchstart = (s, e) => {
  let t = s.inputState, i = e.targetTouches[0];
  t.touchActive = !0, t.lastTouchTime = Date.now(), i && (t.lastTouchX = i.clientX, t.lastTouchY = i.clientY), t.setSelectionOrigin("select.pointer");
};
fe.touchmove = (s) => {
  s.inputState.setSelectionOrigin("select.pointer");
};
fe.touchend = (s, e) => {
  s.inputState.touchActive = !1;
};
Be.mousedown = (s, e) => {
  if (s.observer.flush(), s.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let i of s.state.facet(xl))
    if (t = i(s, e), t)
      break;
  if (!t && e.button == 0 && (t = Ic(s, e)), t) {
    let i = !s.hasFocus;
    s.inputState.startMouseSelection(new Oc(s, e, t, i)), i && s.observer.ignore(() => {
      hl(s.contentDOM);
      let r = s.root.activeElement;
      r && !r.contains(s.contentDOM) && r.blur();
    });
    let n = s.inputState.mouseSelection;
    if (n)
      return n.start(e), n.dragging === !1;
  } else
    s.inputState.setSelectionOrigin("select.pointer");
  return !1;
};
function Hr(s, e, t, i) {
  if (i == 1)
    return w.cursor(e, t);
  if (i == 2)
    return cc(s.state, e, t);
  {
    let n = s.docView.lineAt(e, t), r = s.state.doc.lineAt(n ? n.posAtEnd : e), o = n ? n.posAtStart : r.from, l = n ? n.posAtEnd : r.to;
    return l < s.state.doc.length && l == r.to && l++, w.undirectionalRange(o, l);
  }
}
const Pc = S.ie && S.ie_version <= 11;
let Wr = null, Vr = 0, Fr = 0;
function Kl(s) {
  if (!Pc)
    return s.detail;
  let e = Wr, t = Fr;
  return Wr = s, Fr = Date.now(), Vr = !e || t > Date.now() - 400 && Math.abs(e.clientX - s.clientX) < 2 && Math.abs(e.clientY - s.clientY) < 2 ? (Vr + 1) % 3 : 1;
}
function Ic(s, e) {
  let t = s.posAndSideAtCoords({ x: e.clientX, y: e.clientY }, !1), i = Kl(e), n = s.state.selection;
  return {
    update(r) {
      r.docChanged && (t.pos = r.changes.mapPos(t.pos), n = n.map(r.changes));
    },
    get(r, o, l) {
      let a = s.posAndSideAtCoords({ x: r.clientX, y: r.clientY }, !1), h, c = Hr(s, a.pos, a.assoc, i);
      if (t.pos != a.pos && !o) {
        let f = Hr(s, t.pos, t.assoc, i), u = Math.min(f.from, c.from), d = Math.max(f.to, c.to);
        c = u < c.from ? w.range(u, d, c.assoc) : w.range(d, u, c.assoc);
      }
      return o ? n.replaceRange(n.main.extend(c.from, c.to, c.assoc)) : l && i == 1 && n.ranges.length > 1 && (h = Nc(n, a.pos)) ? h : l ? n.addRange(c) : w.create([c]);
    }
  };
}
function Nc(s, e) {
  for (let t = 0; t < s.ranges.length; t++) {
    let { from: i, to: n } = s.ranges[t];
    if (i <= e && n >= e)
      return w.create(s.ranges.slice(0, t).concat(s.ranges.slice(t + 1)), s.mainIndex == t ? 0 : s.mainIndex - (s.mainIndex > t ? 1 : 0));
  }
  return null;
}
Be.dragstart = (s, e) => {
  let { selection: { main: t } } = s.state;
  if (e.target.draggable) {
    let n = s.docView.tile.nearest(e.target);
    if (n && n.isWidget()) {
      let r = n.posAtStart, o = r + n.length;
      (r >= t.to || o <= t.from) && (t = w.undirectionalRange(r, o));
    }
  }
  let { inputState: i } = s;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", Sn(s.state, Xs, s.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
Be.dragend = (s) => (s.inputState.draggedContent = null, !1);
function zr(s, e, t, i) {
  if (t = Sn(s.state, Js, t), !t)
    return;
  let n = s.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: r } = s.inputState, o = i && r && Dc(s, e) ? { from: r.from, to: r.to } : null, l = { from: n, insert: t }, a = s.state.changes(o ? [o, l] : l);
  s.focus(), s.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(n, -1), head: a.mapPos(n, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  }), s.inputState.draggedContent = null;
}
Be.drop = (s, e) => {
  if (!e.dataTransfer)
    return !1;
  if (s.state.readOnly)
    return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length), n = 0, r = () => {
      ++n == t.length && zr(s, e, i.filter((o) => o != null).join(s.state.lineBreak), !1);
    };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      l.onerror = r, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), r();
      }, l.readAsText(t[o]);
    }
    return !0;
  } else {
    let i = e.dataTransfer.getData("Text");
    if (i)
      return zr(s, e, i, !0), !0;
  }
  return !1;
};
Be.paste = (s, e) => {
  if (s.state.readOnly)
    return !0;
  s.observer.flush();
  let t = Fl ? null : e.clipboardData;
  return t ? (zl(s, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (Rc(s), !1);
};
function Hc(s, e) {
  let t = s.dom.parentNode;
  if (!t)
    return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), s.focus();
  }, 50);
}
function Wc(s) {
  let e = [], t = [], i = !1;
  for (let n of s.selection.ranges)
    n.empty || (e.push(s.sliceDoc(n.from, n.to)), t.push(n));
  if (!e.length) {
    let n = -1;
    for (let { from: r } of s.selection.ranges) {
      let o = s.doc.lineAt(r);
      o.number > n && (e.push(o.text), t.push({ from: o.from, to: Math.min(s.doc.length, o.to + 1) })), n = o.number;
    }
    i = !0;
  }
  return { text: Sn(s, Xs, e.join(s.lineBreak)), ranges: t, linewise: i };
}
let Ss = null;
Be.copy = Be.cut = (s, e) => {
  if (!ii(s.contentDOM, s.observer.selectionRange))
    return !1;
  let { text: t, ranges: i, linewise: n } = Wc(s.state);
  if (!t && !n)
    return !1;
  Ss = n ? t : null, e.type == "cut" && !s.state.readOnly && s.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let r = Fl ? null : e.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", t), !0) : (Hc(s, t), !1);
};
const ql = /* @__PURE__ */ ct.define();
function $l(s, e) {
  let t = [];
  for (let i of s.facet(Sl)) {
    let n = i(s, e);
    n && t.push(n);
  }
  return t.length ? s.update({ effects: t, annotations: ql.of(!0) }) : null;
}
function jl(s) {
  setTimeout(() => {
    let e = s.hasFocus;
    if (e != s.inputState.notifiedFocused) {
      let t = $l(s.state, e);
      t ? s.dispatch(t) : s.update([]);
    }
  }, 10);
}
fe.focus = (s) => {
  s.inputState.lastFocusTime = Date.now(), !s.scrollDOM.scrollTop && (s.inputState.lastScrollTop || s.inputState.lastScrollLeft) && (s.scrollDOM.scrollTop = s.inputState.lastScrollTop, s.scrollDOM.scrollLeft = s.inputState.lastScrollLeft), jl(s);
};
fe.blur = (s) => {
  s.observer.clearSelectionRange(), jl(s);
};
fe.compositionstart = fe.compositionupdate = (s) => {
  s.observer.editContext || (s.inputState.compositionFirstChange == null && (s.inputState.compositionFirstChange = !0), s.inputState.composing < 0 && (s.inputState.composing = 0));
};
fe.compositionend = (s) => {
  s.observer.editContext || (s.inputState.composing = -1, s.inputState.compositionEndedAt = Date.now(), s.inputState.compositionPendingKey = !0, s.inputState.compositionPendingChange = s.observer.pendingRecords().length > 0, s.inputState.compositionFirstChange = null, S.chrome && S.android ? s.observer.flushSoon() : s.inputState.compositionPendingChange ? Promise.resolve().then(() => s.observer.flush()) : setTimeout(() => {
    s.inputState.composing < 0 && s.docView.hasComposition && s.update([]);
  }, 50));
};
fe.contextmenu = (s) => {
  s.inputState.lastContextMenu = Date.now();
};
Be.beforeinput = (s, e) => {
  var t, i;
  if ((e.inputType == "insertText" || e.inputType == "insertCompositionText") && (s.inputState.insertingText = e.data, s.inputState.insertingTextAt = Date.now()), e.inputType == "insertReplacementText" && s.observer.editContext) {
    let r = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), o = e.getTargetRanges();
    if (r && o.length) {
      let l = o[0], a = s.posAtDOM(l.startContainer, l.startOffset), h = s.posAtDOM(l.endContainer, l.endOffset);
      return tr(s, { from: a, to: h, insert: s.state.toText(r) }, null), !0;
    }
  }
  let n;
  if (S.chrome && S.android && (n = Wl.find((r) => r.inputType == e.inputType)) && (s.observer.delayAndroidKey(n.key, n.keyCode), n.key == "Backspace" || n.key == "Delete")) {
    let r = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > r + 10 && s.hasFocus && (s.contentDOM.blur(), s.focus());
    }, 100);
  }
  return S.ios && e.inputType == "deleteContentForward" && s.observer.flushSoon(), S.safari && e.inputType == "insertText" && s.inputState.composing >= 0 && setTimeout(() => fe.compositionend(s, e), 20), !1;
};
const Kr = /* @__PURE__ */ new Set();
function Vc(s) {
  Kr.has(s) || (Kr.add(s), s.addEventListener("copy", () => {
  }), s.addEventListener("cut", () => {
  }));
}
const qr = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let Ht = !1;
function $r() {
  Ht = !1;
}
class Fc {
  constructor(e) {
    this.lineWrapping = e, this.doc = I.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(e, t) {
    let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return qr.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let i = 0; i < e.length; i++) {
      let n = e[i];
      n < 0 ? i++ : this.heightSamples[Math.floor(n * 10)] || (t = !0, this.heightSamples[Math.floor(n * 10)] = !0);
    }
    return t;
  }
  refresh(e, t, i, n, r, o) {
    let l = qr.indexOf(e) > -1, a = Math.abs(t - this.lineHeight) > 0.3 || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = t, this.charWidth = i, this.textHeight = n, this.lineLength = r, a) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let c = o[h];
        c < 0 ? h++ : this.heightSamples[Math.floor(c * 10)] = !0;
      }
    }
    return a;
  }
}
class zc {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Ae {
  /**
  @internal
  */
  constructor(e, t, i, n, r) {
    this.from = e, this.length = t, this.top = i, this.height = n, this._content = r;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? ne.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  If this is a widget block, this will return the widget
  associated with it.
  */
  get widget() {
    return this._content instanceof vt ? this._content.widget : null;
  }
  /**
  If this is a textblock, this holds the number of line breaks
  that appear in widgets inside the block.
  */
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  /**
  @internal
  */
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new Ae(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var j = /* @__PURE__ */ (function(s) {
  return s[s.ByPos = 0] = "ByPos", s[s.ByHeight = 1] = "ByHeight", s[s.ByPosNoHeight = 2] = "ByPosNoHeight", s;
})(j || (j = {}));
const Ui = 1e-3;
class he {
  constructor(e, t, i = 2) {
    this.length = e, this.height = t, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > Ui && (Ht = !0), this.height = e);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, t, i) {
    return he.of(i);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, i, n) {
    let r = this, o = i.doc;
    for (let l = n.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: c, toB: f } = n[l], u = r.lineAt(a, j.ByPosNoHeight, i.setDoc(t), 0, 0), d = u.to >= h ? u : r.lineAt(h, j.ByPosNoHeight, i, 0, 0);
      for (f += d.to - h, h = d.to; l > 0 && u.from <= n[l - 1].toA; )
        a = n[l - 1].fromA, c = n[l - 1].fromB, l--, a < u.from && (u = r.lineAt(a, j.ByPosNoHeight, i, 0, 0));
      c += u.from - a, a = u.from;
      let p = ir.build(i.setDoc(o), e, c, f);
      r = an(r, r.replace(a, h, p));
    }
    return r.updateHeight(i, 0);
  }
  static empty() {
    return new me(0, 0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(e) {
    if (e.length == 1)
      return e[0];
    let t = 0, i = e.length, n = 0, r = 0;
    for (; ; )
      if (t == i)
        if (n > r * 2) {
          let l = e[t - 1];
          l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right), i += 1 + l.break, n -= l.size;
        } else if (r > n * 2) {
          let l = e[i];
          l.break ? e.splice(i, 1, l.left, null, l.right) : e.splice(i, 1, l.left, l.right), i += 2 + l.break, r -= l.size;
        } else
          break;
      else if (n < r) {
        let l = e[t++];
        l && (n += l.size);
      } else {
        let l = e[--i];
        l && (r += l.size);
      }
    let o = 0;
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, i++), new qc(he.of(e.slice(0, t)), o, he.of(e.slice(i)));
  }
}
function an(s, e) {
  return s == e ? s : (s.constructor != e.constructor && (Ht = !0), e);
}
he.prototype.size = 1;
const Kc = /* @__PURE__ */ W.replace({});
class Ul extends he {
  constructor(e, t, i) {
    super(e, t), this.deco = i, this.spaceAbove = 0;
  }
  mainBlock(e, t) {
    return new Ae(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
  }
  blockAt(e, t, i, n) {
    return this.spaceAbove && e < i + this.spaceAbove ? new Ae(n, 0, i, this.spaceAbove, Kc) : this.mainBlock(i, n);
  }
  lineAt(e, t, i, n, r) {
    let o = this.mainBlock(n, r);
    return this.spaceAbove ? this.blockAt(0, i, n, r).join(o) : o;
  }
  forEachLine(e, t, i, n, r, o) {
    e <= r + this.length && t >= r && o(this.lineAt(0, j.ByPos, i, n, r));
  }
  setMeasuredHeight(e) {
    let t = e.heights[e.index++];
    t < 0 ? (this.spaceAbove = -t, t = e.heights[e.index++]) : this.spaceAbove = 0, this.setHeight(t);
  }
  updateHeight(e, t = 0, i = !1, n) {
    return n && n.from <= t && n.more && this.setMeasuredHeight(n), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class me extends Ul {
  constructor(e, t, i) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = i;
  }
  mainBlock(e, t) {
    return new Ae(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
  }
  replace(e, t, i) {
    let n = i[0];
    return i.length == 1 && (n instanceof me || n instanceof ee && n.flags & 4) && Math.abs(this.length - n.length) < 10 ? (n instanceof ee ? n = new me(n.length, this.height, this.spaceAbove) : n.height = this.height, this.outdated || (n.outdated = !1), n) : he.of(i);
  }
  updateHeight(e, t = 0, i = !1, n) {
    return n && n.from <= t && n.more ? this.setMeasuredHeight(n) : (i || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight)), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class ee extends he {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let i = e.doc.lineAt(t).number, n = e.doc.lineAt(t + this.length).number, r = n - i + 1, o, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * r);
      o = a / r, this.length > r + 1 && (l = (this.height - a) / (this.length - r - 1));
    } else
      o = this.height / r;
    return { firstLine: i, lastLine: n, perLine: o, perChar: l };
  }
  blockAt(e, t, i, n) {
    let { firstLine: r, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(t, n);
    if (t.lineWrapping) {
      let h = n + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)), c = t.doc.lineAt(h), f = l + c.length * a, u = Math.max(i, e - f / 2);
      return new Ae(c.from, c.length, u, f, 0);
    } else {
      let h = Math.max(0, Math.min(o - r, Math.floor((e - i) / l))), { from: c, length: f } = t.doc.line(r + h);
      return new Ae(c, f, i + l * h, l, 0);
    }
  }
  lineAt(e, t, i, n, r) {
    if (t == j.ByHeight)
      return this.blockAt(e, i, n, r);
    if (t == j.ByPosNoHeight) {
      let { from: d, to: p } = i.doc.lineAt(e);
      return new Ae(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, r), h = i.doc.lineAt(e), c = l + h.length * a, f = h.number - o, u = n + l * f + a * (h.from - r - f);
    return new Ae(h.from, h.length, Math.max(n, Math.min(u, n + this.height - c)), c, 0);
  }
  forEachLine(e, t, i, n, r, o) {
    e = Math.max(e, r), t = Math.min(t, r + this.length);
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(i, r);
    for (let c = e, f = n; c <= t; ) {
      let u = i.doc.lineAt(c);
      if (c == e) {
        let p = u.number - l;
        f += a * p + h * (e - r - p);
      }
      let d = a + h * u.length;
      o(new Ae(u.from, u.length, f, d, 0)), f += d, c = u.to + 1;
    }
  }
  replace(e, t, i) {
    let n = this.length - t;
    if (n > 0) {
      let r = i[i.length - 1];
      r instanceof ee ? i[i.length - 1] = new ee(r.length + n) : i.push(null, new ee(n - 1));
    }
    if (e > 0) {
      let r = i[0];
      r instanceof ee ? i[0] = new ee(e + r.length) : i.unshift(new ee(e - 1), null);
    }
    return he.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new ee(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new ee(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = !1, n) {
    let r = t + this.length;
    if (n && n.from <= t + this.length && n.more) {
      let o = [], l = Math.max(t, n.from), a = -1;
      for (n.from > t && o.push(new ee(n.from - t - 1).updateHeight(e, t)); l <= r && n.more; ) {
        let c = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let f = n.heights[n.index++], u = 0;
        f < 0 && (u = -f, f = n.heights[n.index++]), a == -1 ? a = f : Math.abs(f - a) >= Ui && (a = -2);
        let d = new me(c, f, u);
        d.outdated = !1, o.push(d), l += c + 1;
      }
      l <= r && o.push(null, new ee(r - l).updateHeight(e, l));
      let h = he.of(o);
      return (a < 0 || Math.abs(h.height - this.height) >= Ui || Math.abs(a - this.heightMetrics(e, t).perLine) >= Ui) && (Ht = !0), an(this, h);
    } else (i || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class qc extends he {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)), this.left = e, this.right = i, this.size = e.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, i, n) {
    let r = i + this.left.height;
    return e < r ? this.left.blockAt(e, t, i, n) : this.right.blockAt(e, t, r, n + this.left.length + this.break);
  }
  lineAt(e, t, i, n, r) {
    let o = n + this.left.height, l = r + this.left.length + this.break, a = t == j.ByHeight ? e < o : e < l, h = a ? this.left.lineAt(e, t, i, n, r) : this.right.lineAt(e, t, i, o, l);
    if (this.break || (a ? h.to < l : h.from > l))
      return h;
    let c = t == j.ByPosNoHeight ? j.ByPosNoHeight : j.ByPos;
    return a ? h.join(this.right.lineAt(l, c, i, o, l)) : this.left.lineAt(l, c, i, n, r).join(h);
  }
  forEachLine(e, t, i, n, r, o) {
    let l = n + this.left.height, a = r + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, i, n, r, o), t >= a && this.right.forEachLine(e, t, i, l, a, o);
    else {
      let h = this.lineAt(a, j.ByPos, i, n, r);
      e < h.from && this.left.forEachLine(e, h.from - 1, i, n, r, o), h.to >= e && h.from <= t && o(h), t > h.to && this.right.forEachLine(h.to + 1, t, i, l, a, o);
    }
  }
  replace(e, t, i) {
    let n = this.left.length + this.break;
    if (t < n)
      return this.balanced(this.left.replace(e, t, i), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - n, t - n, i));
    let r = [];
    e > 0 && this.decomposeLeft(e, r);
    let o = r.length;
    for (let l of i)
      r.push(l);
    if (e > 0 && jr(r, o - 1), t < this.length) {
      let l = r.length;
      this.decomposeRight(t, r), jr(r, l);
    }
    return he.of(r);
  }
  decomposeLeft(e, t) {
    let i = this.left.length;
    if (e <= i)
      return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (i++, e >= i && t.push(null)), e > i && this.right.decomposeLeft(e - i, t);
  }
  decomposeRight(e, t) {
    let i = this.left.length, n = i + this.break;
    if (e >= n)
      return this.right.decomposeRight(e - n, t);
    e < i && this.left.decomposeRight(e, t), this.break && e < n && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? he.of(this.break ? [e, null, t] : [e, t]) : (this.left = an(this.left, e), this.right = an(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = !1, n) {
    let { left: r, right: o } = this, l = t + r.length + this.break, a = null;
    return n && n.from <= t + r.length && n.more ? a = r = r.updateHeight(e, t, i, n) : r.updateHeight(e, t, i), n && n.from <= l + o.length && n.more ? a = o = o.updateHeight(e, l, i, n) : o.updateHeight(e, l, i), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function jr(s, e) {
  let t, i;
  s[e] == null && (t = s[e - 1]) instanceof ee && (i = s[e + 1]) instanceof ee && s.splice(e - 1, 3, new ee(t.length + 1 + i.length));
}
const $c = 5;
class ir {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), n = this.nodes[this.nodes.length - 1];
      n instanceof me ? n.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new me(i - this.pos, -1, 0)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let n = i.widget ? i.widget.estimatedHeight : 0, r = i.widget ? i.widget.lineBreaks : 0;
      n < 0 && (n = this.oracle.lineHeight);
      let o = t - e;
      i.block ? this.addBlock(new Ul(o, n, i)) : (o || r || n >= $c) && this.addLineDeco(n, r, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new me(this.pos - e, -1, 0)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new ee(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof me)
      return e;
    let t = new me(0, -1, 0);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, i) {
    let n = this.ensureLine();
    n.length += i, n.collapsed += i, n.widgetHeight = Math.max(n.widgetHeight, e), n.breaks += t, this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof me) && !this.isCovered ? this.nodes.push(new me(0, -1, 0)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let n of this.nodes)
      n instanceof me && n.updateHeight(this.oracle, i), i += n ? n.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, i, n) {
    let r = new ir(i, e);
    return P.spans(t, i, n, r, 0), r.finish(i);
  }
}
function jc(s, e, t) {
  let i = new Uc();
  return P.compare(s, e, t, i, 0), i.changes;
}
class Uc {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, n) {
    (e < t || i && i.heightRelevant || n && n.heightRelevant) && Dt(e, t, this.changes, 5);
  }
}
function Gc(s, e) {
  let t = s.getBoundingClientRect(), i = s.ownerDocument, n = i.defaultView || window, r = Math.max(0, t.left), o = Math.min(n.innerWidth, t.right), l = Math.max(0, t.top), a = Math.min(n.innerHeight, t.bottom);
  for (let h = s.parentNode; h && h != i.body; )
    if (h.nodeType == 1) {
      let c = h, f = window.getComputedStyle(c);
      if ((c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) && f.overflow != "visible") {
        let u = c.getBoundingClientRect();
        r = Math.max(r, u.left), o = Math.min(o, u.right), l = Math.max(l, u.top), a = Math.min(h == s.parentNode ? n.innerHeight : a, u.bottom);
      }
      h = f.position == "absolute" || f.position == "fixed" ? c.offsetParent : c.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
  return {
    left: r - t.left,
    right: Math.max(r, o) - t.left,
    top: l - (t.top + e),
    bottom: Math.max(l, a) - (t.top + e)
  };
}
function _c(s) {
  let e = s.getBoundingClientRect(), t = s.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function Yc(s, e) {
  let t = s.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class Fn {
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.size = i, this.displaySize = n;
  }
  static same(e, t) {
    if (e.length != t.length)
      return !1;
    for (let i = 0; i < e.length; i++) {
      let n = e[i], r = t[i];
      if (n.from != r.from || n.to != r.to || n.size != r.size)
        return !1;
    }
    return !0;
  }
  draw(e, t) {
    return W.replace({
      widget: new Jc(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class Jc extends gi {
  constructor(e, t) {
    super(), this.size = e, this.vertical = t;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class Ur {
  constructor(e, t) {
    this.view = e, this.state = t, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Gr, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = U.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let i = t.facet(Qs).some((n) => typeof n != "function" && n.class == "cm-lineWrapping");
    this.heightOracle = new Fc(i), this.stateDeco = _r(t), this.heightMap = he.empty().applyChanges(this.stateDeco, I.empty, this.heightOracle.setDoc(t.doc), [new xe(0, 0, 0, t.doc.length)]);
    for (let n = 0; n < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); n++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = W.set(this.lineGaps.map((n) => n.draw(this, !1))), this.scrollParent = e.scrollDOM, this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let n = i ? t.head : t.anchor;
      if (!e.some(({ from: r, to: o }) => n >= r && n <= o)) {
        let { from: r, to: o } = this.lineBlockAt(n);
        e.push(new Ti(r, o));
      }
    }
    return this.viewports = e.sort((i, n) => i.from - n.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? Gr : new nr(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(Qt(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = _r(this.state);
    let n = e.changedRanges, r = xe.extendWithRanges(n, jc(i, this.stateDeco, e ? e.changes : X.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
    $r(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), r), (this.heightMap.height != o || Ht) && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = o);
    let a = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (h || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && (e.selectionSet || e.focusChanged) && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(Al) && (this.mustEnforceCursorAssoc = !0);
  }
  measure() {
    let { view: e } = this, t = e.contentDOM, i = window.getComputedStyle(t), n = this.heightOracle, r = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? U.RTL : U.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r) || this.mustMeasureContent === "refresh", l = t.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let h = 0, c = 0;
    if (l.width && l.height) {
      let { scaleX: C, scaleY: v } = rl(t, l);
      (C > 5e-3 && Math.abs(this.scaleX - C) > 5e-3 || v > 5e-3 && Math.abs(this.scaleY - v) > 5e-3) && (this.scaleX = C, this.scaleY = v, h |= 16, o = a = !0);
    }
    let f = (parseInt(i.paddingTop) || 0) * this.scaleY, u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != f || this.paddingBottom != u) && (this.paddingTop = f, this.paddingBottom = u, h |= 18), this.editorWidth != e.scrollDOM.clientWidth && (n.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, h |= 16);
    let d = ol(this.view.contentDOM, !1).y;
    d != this.scrollParent && (this.scrollParent = d, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
    let p = this.getScrollOffset();
    this.scrollOffset != p && (this.scrollAnchorHeight = -1, this.scrollOffset = p), this.scrolledToBottom = cl(this.scrollParent || e.win);
    let g = (this.printing ? Yc : Gc)(t, this.paddingTop), m = g.top - this.pixelViewport.top, y = g.bottom - this.pixelViewport.bottom;
    this.pixelViewport = g;
    let A = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (A != this.inView && (this.inView = A, A && (a = !0)), !this.inView && !this.scrollTarget && !_c(e.dom))
      return 0;
    let b = l.width;
    if ((this.contentDOMWidth != b || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, h |= 16), a) {
      let C = e.docView.measureVisibleLineHeights(this.viewport);
      if (n.mustRefreshForHeights(C) && (o = !0), o || n.lineWrapping && Math.abs(b - this.contentDOMWidth) > n.charWidth) {
        let { lineHeight: v, charWidth: k, textHeight: D } = e.docView.measureTextSize();
        o = v > 0 && n.refresh(r, v, k, D, Math.max(5, b / k), C), o && (e.docView.minWidth = 0, h |= 16);
      }
      m > 0 && y > 0 ? c = Math.max(m, y) : m < 0 && y < 0 && (c = Math.min(m, y)), $r();
      for (let v of this.viewports) {
        let k = v.from == this.viewport.from ? C : e.docView.measureVisibleLineHeights(v);
        this.heightMap = (o ? he.empty().applyChanges(this.stateDeco, I.empty, this.heightOracle, [new xe(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(n, 0, o, new zc(v.from, k));
      }
      Ht && (h |= 2);
    }
    let T = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return T && (h & 2 && (h |= this.updateScaler()), this.viewport = this.getViewport(c, this.scrollTarget), h |= this.updateForViewport()), (h & 2 || T) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), n = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new Ti(n.lineAt(o - i * 1e3, j.ByHeight, r, 0, 0).from, n.lineAt(l + (1 - i) * 1e3, j.ByHeight, r, 0, 0).to);
    if (t) {
      let { head: h } = t.range;
      if (h < a.from || h > a.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), f = n.lineAt(h, j.ByPos, r, 0, 0), u;
        t.y == "center" ? u = (f.top + f.bottom) / 2 - c / 2 : t.y == "start" || t.y == "nearest" && h < a.from ? u = f.top : u = f.bottom - c, a = new Ti(n.lineAt(u - 1e3 / 2, j.ByHeight, r, 0, 0).from, n.lineAt(u + c + 1e3 / 2, j.ByHeight, r, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), n = t.mapPos(e.to, 1);
    return new Ti(this.heightMap.lineAt(i, j.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(n, j.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: n } = this.heightMap.lineAt(e, j.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(t, j.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || n <= o - Math.max(10, Math.min(
      -i,
      250
      /* VP.MaxCoverMargin */
    ))) && (t == this.state.doc.length || r >= l + Math.max(10, Math.min(
      i,
      250
      /* VP.MaxCoverMargin */
    ))) && n > o - 2 * 1e3 && r < l + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let i = [];
    for (let n of e)
      t.touchesRange(n.from, n.to) || i.push(new Fn(t.mapPos(n.from), t.mapPos(n.to), n.size, n.displaySize));
    return i;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping, n = i ? 1e4 : 2e3, r = n >> 1, o = n << 1;
    if (this.defaultTextDirection != U.LTR && !i)
      return [];
    let l = [], a = (c, f, u, d) => {
      if (f - c < r)
        return;
      let p = this.state.selection.main, g = [p.from];
      p.empty || g.push(p.to);
      for (let y of g)
        if (y > c && y < f) {
          a(c, y - 10, u, d), a(y + 10, f, u, d);
          return;
        }
      let m = Qc(e, (y) => y.from >= u.from && y.to <= u.to && Math.abs(y.from - c) < r && Math.abs(y.to - f) < r && !g.some((A) => y.from < A && y.to > A));
      if (!m) {
        if (f < u.to && t && i && t.visibleRanges.some((b) => b.from <= f && b.to >= f)) {
          let b = t.moveToLineBoundary(w.cursor(f), !1, !0).head;
          b > c && (f = b);
        }
        let y = this.gapSize(u, c, f, d), A = i || y < 2e6 ? y : 2e6;
        m = new Fn(c, f, y, A);
      }
      l.push(m);
    }, h = (c) => {
      if (c.length < o || c.type != ne.Text)
        return;
      let f = Xc(c.from, c.to, this.stateDeco);
      if (f.total < o)
        return;
      let u = this.scrollTarget ? this.scrollTarget.range.head : null, d, p;
      if (i) {
        let g = n / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, y;
        if (u != null) {
          let A = Bi(f, u), b = ((this.visibleBottom - this.visibleTop) / 2 + g) / c.height;
          m = A - b, y = A + b;
        } else
          m = (this.visibleTop - c.top - g) / c.height, y = (this.visibleBottom - c.top + g) / c.height;
        d = Oi(f, m), p = Oi(f, y);
      } else {
        let g = f.total * this.heightOracle.charWidth, m = n * this.heightOracle.charWidth, y = 0;
        if (g > 2e6)
          for (let v of e)
            v.from >= c.from && v.from < c.to && v.size != v.displaySize && v.from * this.heightOracle.charWidth + y < this.pixelViewport.left && (y = v.size - v.displaySize);
        let A = this.pixelViewport.left + y, b = this.pixelViewport.right + y, T, C;
        if (u != null) {
          let v = Bi(f, u), k = ((b - A) / 2 + m) / g;
          T = v - k, C = v + k;
        } else
          T = (A - m) / g, C = (b + m) / g;
        d = Oi(f, T), p = Oi(f, C);
      }
      d > c.from && a(c.from, d, c, f), p < c.to && a(p, c.to, c, f);
    };
    for (let c of this.viewportLines)
      Array.isArray(c.type) ? c.type.forEach(h) : h(c);
    return l;
  }
  gapSize(e, t, i, n) {
    let r = Bi(n, i) - Bi(n, t);
    return this.heightOracle.lineWrapping ? e.height * r : n.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    Fn.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = W.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let i = [];
    P.spans(t, this.viewport.from, this.viewport.to, {
      span(r, o) {
        i.push({ from: r, to: o });
      },
      point() {
      }
    }, 20);
    let n = 0;
    if (i.length != this.visibleRanges.length)
      n = 12;
    else
      for (let r = 0; r < i.length && !(n & 8); r++) {
        let o = this.visibleRanges[r], l = i[r];
        (o.from != l.from || o.to != l.to) && (n |= 4, e && e.mapPos(o.from, -1) == l.from && e.mapPos(o.to, 1) == l.to || (n |= 8));
      }
    return this.visibleRanges = i, n;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || Qt(this.heightMap.lineAt(e, j.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || Qt(this.heightMap.lineAt(this.scaler.fromDOM(e), j.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  getScrollOffset() {
    return this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop * this.scaleY : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top;
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return Qt(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Ti {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function Xc(s, e, t) {
  let i = [], n = s, r = 0;
  return P.spans(t, s, e, {
    span() {
    },
    point(o, l) {
      o > n && (i.push({ from: n, to: o }), r += o - n), n = l;
    }
  }, 20), n < e && (i.push({ from: n, to: e }), r += e - n), { total: r, ranges: i };
}
function Oi({ total: s, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let i = Math.floor(s * t);
  for (let n = 0; ; n++) {
    let { from: r, to: o } = e[n], l = o - r;
    if (i <= l)
      return r + i;
    i -= l;
  }
}
function Bi(s, e) {
  let t = 0;
  for (let { from: i, to: n } of s.ranges) {
    if (e <= n) {
      t += e - i;
      break;
    }
    t += n - i;
  }
  return t / s.total;
}
function Qc(s, e) {
  for (let t of s)
    if (e(t))
      return t;
}
const Gr = {
  toDOM(s) {
    return s;
  },
  fromDOM(s) {
    return s;
  },
  scale: 1,
  eq(s) {
    return s == this;
  }
};
function _r(s) {
  let e = s.facet(xn).filter((i) => typeof i != "function"), t = s.facet(Zs).filter((i) => typeof i != "function");
  return t.length && e.push(P.join(t)), e;
}
class nr {
  constructor(e, t, i) {
    let n = 0, r = 0, o = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let h = t.lineAt(l, j.ByPos, e, 0, 0).top, c = t.lineAt(a, j.ByPos, e, 0, 0).bottom;
      return n += c - h, { from: l, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - n) / (t.height - n);
    for (let l of this.viewports)
      l.domTop = o + (l.top - r) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), r = l.bottom;
  }
  toDOM(e) {
    for (let t = 0, i = 0, n = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.top)
        return n + (e - i) * this.scale;
      if (e <= r.bottom)
        return r.domTop + (e - r.top);
      i = r.bottom, n = r.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, n = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.domTop)
        return i + (e - n) / this.scale;
      if (e <= r.domBottom)
        return r.top + (e - r.domTop);
      i = r.bottom, n = r.domBottom;
    }
  }
  eq(e) {
    return e instanceof nr ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to) : !1;
  }
}
function Qt(s, e) {
  if (e.scale == 1)
    return s;
  let t = e.toDOM(s.top), i = e.toDOM(s.bottom);
  return new Ae(s.from, s.length, t, i - t, Array.isArray(s._content) ? s._content.map((n) => Qt(n, e)) : s._content);
}
const Di = /* @__PURE__ */ M.define({ combine: (s) => s.join(" ") }), Cs = /* @__PURE__ */ M.define({ combine: (s) => s.indexOf(!0) > -1 }), As = /* @__PURE__ */ Pt.newName(), Gl = /* @__PURE__ */ Pt.newName(), _l = /* @__PURE__ */ Pt.newName(), Yl = { "&light": "." + Gl, "&dark": "." + _l };
function Ms(s, e, t) {
  return new Pt(e, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (n) => {
        if (n == "&")
          return s;
        if (!t || !t[n])
          throw new RangeError(`Unsupported selector: ${n}`);
        return t[n];
      }) : s + " " + i;
    }
  });
}
const Zc = /* @__PURE__ */ Ms("." + As, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    // Issue #456
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    // For IE
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    // For Safari, which doesn't support overflow-wrap: anywhere
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    userSelect: "none",
    // #1708
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#ddd"
  },
  ".cm-selectionHandle": {
    backgroundColor: "currentColor",
    width: "1.5px"
  },
  ".cm-selectionHandle-start::before, .cm-selectionHandle-end::before": {
    content: '""',
    backgroundColor: "inherit",
    borderRadius: "50%",
    width: "8px",
    height: "8px",
    position: "absolute",
    left: "-3.25px"
  },
  ".cm-selectionHandle-start::before": { top: "-8px" },
  ".cm-selectionHandle-end::before": { bottom: "-8px" },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": { display: "none" }
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    zIndex: 200
  },
  ".cm-gutters-before": { insetInlineStart: 0 },
  ".cm-gutters-after": { insetInlineEnd: 0 },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    border: "0px solid #ddd",
    "&.cm-gutters-before": { borderRightWidth: "1px" },
    "&.cm-gutters-after": { borderLeftWidth: "1px" }
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    // Necessary -- prevents margin collapsing
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  ".cm-panels-top": { top: "0" },
  ".cm-panels-bottom": { bottom: "0" },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-dialog": {
    padding: "2px 19px 4px 6px",
    position: "relative",
    "& label": { fontSize: "80%" }
  },
  ".cm-dialog-close": {
    position: "absolute",
    top: "3px",
    right: "4px",
    backgroundColor: "inherit",
    border: "none",
    font: "inherit",
    fontSize: "14px",
    padding: "0"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top",
    userSelect: "none"
  },
  ".cm-highlightSpace": {
    background: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 0) no-repeat",
    backgroundSize: ".4em",
    backgroundPosition: "calc(min(50%, 0px)) center"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, Yl), ef = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, zn = S.ie && S.ie_version <= 11;
class tf {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new Dh(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t)
        this.queue.push(i);
      (S.ie && S.ie_version <= 11 || S.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && S.android && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(S.chrome && S.chrome_version < 126) && (this.editContext = new sf(e), e.state.facet(Ge) && (e.contentDOM.editContext = this.editContext.editContext)), zn && (this.onCharData = (t) => {
      this.queue.push({
        target: t.target,
        type: "characterData",
        oldValue: t.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var t;
      ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((t) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t) => {
      t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(e) {
    (e.type == "change" || !e.type) && !e.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))) {
      this.gapIntersection.disconnect();
      for (let t of e)
        this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, n = this.selectionRange;
    if (i.state.facet(Ge) ? i.root.activeElement != this.dom : !ii(this.dom, n))
      return;
    let r = n.anchorNode && i.docView.tile.nearest(n.anchorNode);
    if (r && r.isWidget() && r.widget.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (S.ie && S.ie_version <= 11 || S.android && S.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    n.focusNode && ni(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = fi(e.root);
    if (!t)
      return !1;
    let i = S.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && nf(this.view, t) || t;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let n = ii(this.dom, i);
    return n && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && Eh(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), n && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, t = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == i ? e++ : t || (t = this.scrollTargets.slice(0, e)), t && t.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = t)
        i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active)
      return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, ef), zn && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), zn && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(e, t) {
    var i;
    if (!this.delayedAndroidKey) {
      let n = () => {
        let r = this.delayedAndroidKey;
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && Lt(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(n);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
      key: e,
      keyCode: t,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords())
      this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1, i = -1, n = !1;
    for (let r of e) {
      let o = this.readMutation(r);
      o && (o.typeOver && (n = !0), t == -1 ? { from: t, to: i } = o : (t = Math.min(o.from, t), i = Math.max(o.to, i)));
    }
    return { from: t, to: i, typeOver: n };
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(), n = this.selectionChanged && ii(this.dom, this.selectionRange);
    if (e < 0 && !n)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let r = new wc(this.view, e, t, i);
    return this.view.docView.domChanged = { newSel: r.newSel ? r.newSel.main : null }, r;
  }
  // Apply pending changes, if any
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t)
      return this.view.requestMeasure(), !1;
    let i = this.view.state, n = Nl(this.view, t);
    return this.view.state == i && (t.domChanged || t.newSel && !ln(this.view.state.selection, t.newSel.main)) && this.view.update([]), n;
  }
  readMutation(e) {
    let t = this.view.docView.tile.nearest(e.target);
    if (!t || t.isWidget())
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "childList") {
      let i = Yr(t, e.previousSibling || e.target.previousSibling, -1), n = Yr(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: i ? t.posAfter(i) : t.posAtStart,
        to: n ? t.posBefore(n) : t.posAtEnd,
        typeOver: !1
      };
    } else return e.type == "characterData" ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext && (this.editContext.update(e), e.startState.facet(Ge) != e.state.facet(Ge) && (e.view.contentDOM.editContext = e.state.facet(Ge) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, i;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let n of this.scrollTargets)
      n.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function Yr(s, e, t) {
  for (; e; ) {
    let i = _.get(e);
    if (i && i.parent == s)
      return i;
    let n = e.parentNode;
    e = n != s.dom ? n : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Jr(s, e) {
  let t = e.startContainer, i = e.startOffset, n = e.endContainer, r = e.endOffset, o = s.docView.domAtPos(s.state.selection.main.anchor, 1);
  return ni(o.node, o.offset, n, r) && ([t, i, n, r] = [n, r, t, i]), { anchorNode: t, anchorOffset: i, focusNode: n, focusOffset: r };
}
function nf(s, e) {
  if (e.getComposedRanges) {
    let n = e.getComposedRanges(s.root)[0];
    if (n)
      return Jr(s, n);
  }
  let t = null;
  function i(n) {
    n.preventDefault(), n.stopImmediatePropagation(), t = n.getTargetRanges()[0];
  }
  return s.contentDOM.addEventListener("beforeinput", i, !0), s.dom.ownerDocument.execCommand("indent"), s.contentDOM.removeEventListener("beforeinput", i, !0), t ? Jr(s, t) : null;
}
class sf {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (i) => {
      let n = e.state.selection.main, { anchor: r, head: o } = n, l = this.toEditorPos(i.updateRangeStart), a = this.toEditorPos(i.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: l, drifted: !1 });
      let h = a - l > i.text.length;
      l == this.from && r < this.from ? l = r : a == this.to && r > this.to && (a = r);
      let c = Hl(e.state.sliceDoc(l, a), i.text, (h ? n.from : n.to) - l, h ? "end" : null);
      if (!c) {
        let u = w.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        ln(u, n) || e.dispatch({ selection: u, userEvent: "select" });
        return;
      }
      let f = {
        from: c.from + l,
        to: c.toA + l,
        insert: I.of(i.text.slice(c.from, c.toB).split(`
`))
      };
      if ((S.mac || S.android) && f.from == o - 1 && /^\. ?$/.test(i.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (f = { from: l, to: a, insert: I.of([i.text.replace(".", " ")]) }), this.pendingContextChange = f, !e.state.readOnly) {
        let u = this.to - this.from + (f.to - f.from + f.insert.length);
        tr(e, f, w.single(this.toEditorPos(i.selectionStart, u), this.toEditorPos(i.selectionEnd, u)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)), f.from < f.to && !f.insert.length && e.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0, i.updateRangeStart - 1), Math.min(t.text.length, i.updateRangeStart + 1))) && this.handlers.compositionend(i);
    }, this.handlers.characterboundsupdate = (i) => {
      let n = [], r = null;
      for (let o = this.toEditorPos(i.rangeStart), l = this.toEditorPos(i.rangeEnd); o < l; o++) {
        let a = e.coordsForChar(o);
        r = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || r || new DOMRect(), n.push(r);
      }
      t.updateCharacterBounds(i.rangeStart, n);
    }, this.handlers.textformatupdate = (i) => {
      let n = [];
      for (let r of i.getTextFormats()) {
        let o = r.underlineStyle, l = r.underlineThickness;
        if (!/none/i.test(o) && !/none/i.test(l)) {
          let a = this.toEditorPos(r.rangeStart), h = this.toEditorPos(r.rangeEnd);
          if (a < h) {
            let c = `text-decoration: underline ${/^[a-z]/.test(o) ? o + " " : o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${/thin/i.test(l) ? 1 : 2}px`;
            n.push(W.mark({ attributes: { style: c } }).range(a, h));
          }
        }
      }
      e.dispatch({ effects: Tl.of(W.set(n)) });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: i } = this.composing;
        this.composing = null, i && this.reset(e.state);
      }
    };
    for (let i in this.handlers)
      t.addEventListener(i, this.handlers[i]);
    this.measureReq = { read: (i) => {
      let n = fi(i.root);
      n && n.rangeCount && this.editContext.updateSelectionBounds(n.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let t = 0, i = !1, n = this.pendingContextChange;
    return e.changes.iterChanges((r, o, l, a, h) => {
      if (i)
        return;
      let c = h.length - (o - r);
      if (n && o >= n.to)
        if (n.from == r && n.to == o && n.insert.eq(h)) {
          n = this.pendingContextChange = null, t += c, this.to += c;
          return;
        } else
          n = null, this.revertPending(e.state);
      if (r += t, o += t, o <= this.from)
        this.from += c, this.to += c;
      else if (r < this.to) {
        if (r < this.from || o > this.to || this.to - this.from + h.length > 3e4) {
          i = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(r), this.toContextPos(o), h.toString()), this.to += c;
      }
      t += c;
    }), n && !i && this.revertPending(e.state), !i;
  }
  update(e) {
    let t = this.pendingContextChange, i = e.startState.selection.main;
    this.composing && (this.composing.drifted || !e.changes.touchesRange(i.from, i.to) && e.transactions.some((n) => !n.isUserEvent("input.type") && n.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: t } = e.selection.main;
    this.from = Math.max(
      0,
      t - 1e4
      /* CxVp.Margin */
    ), this.to = Math.min(
      e.doc.length,
      t + 1e4
      /* CxVp.Margin */
    );
  }
  reset(e) {
    this.resetRange(e), this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)), this.setSelection(e);
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(t.from), this.toContextPos(t.from + t.insert.length), e.doc.sliceString(t.from, t.to));
  }
  setSelection(e) {
    let { main: t } = e.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), n = this.toContextPos(t.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != n) && this.editContext.updateSelection(i, n);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(this.from > 0 && t - this.from < 500 || this.to < e.doc.length && this.to - t < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(e, t = this.to - this.from) {
    e = Math.min(e, t);
    let i = this.composing;
    return i && i.drifted ? i.editorBase + (e - i.contextBase) : e + this.from;
  }
  toContextPos(e) {
    let t = this.composing;
    return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from;
  }
  destroy() {
    for (let e in this.handlers)
      this.editContext.removeEventListener(e, this.handlers[e]);
  }
}
class O {
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return !!this.inputState && this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return !!this.inputState && this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(e = {}) {
    var t;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
    let { dispatch: i } = e;
    this.dispatchTransactions = e.dispatchTransactions || i && ((n) => n.forEach((r) => i(r, this))) || ((n) => this.update(n)), this.dispatch = this.dispatch.bind(this), this._root = e.root || Lh(e.parent) || document, this.viewState = new Ur(this, e.state || V.create(e)), e.scrollTo && e.scrollTo.is(Ci) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Tt).map((n) => new In(n));
    for (let n of this.plugins)
      n.update(this);
    this.observer = new tf(this), this.inputState = new Sc(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Rr(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => {
      this.viewState.mustMeasureContent = "refresh", this.requestMeasure();
    });
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof Q ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t = !1, i = !1, n, r = this.state;
    for (let u of e) {
      if (u.startState != r)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    e.some((u) => u.annotation(ql)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = $l(r, o), a || (l = 1));
    let h = this.observer.delayedAndroidKey, c = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (c = null)) : this.observer.clear(), r.facet(V.phrases) != this.state.facet(V.phrases))
      return this.setState(r);
    n = sn.create(this, r, e), n.flags |= l;
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        if (f && (f = f.map(u.changes)), u.scrollIntoView) {
          let { main: d } = u.state.selection, { x: p, y: g } = this.state.facet(O.cursorScrollMargin);
          f = new Et(d.empty ? d : w.cursor(d.head, d.head > d.anchor ? -1 : 1), "nearest", "nearest", g, p);
        }
        for (let d of u.effects)
          d.is(Ci) && (f = d.value.clip(this.state));
      }
      this.viewState.update(n, f), this.bidiCache = hn.update(this.bidiCache, n.changes), n.empty || (this.updatePlugins(n), this.inputState.update(n)), t = this.docView.update(n), this.state.facet(Xt) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (n.startState.facet(Di) != n.state.facet(Di) && (this.viewState.mustMeasureContent = !0), (t || i || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !n.empty)
      for (let u of this.state.facet(ws))
        try {
          u(n);
        } catch (d) {
          Te(this.state, d, "update listener");
        }
    (a || c) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), c && !Nl(this, c) && h.force && Lt(this.contentDOM, h.key, h.keyCode);
    });
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new Ur(this, e), this.plugins = e.facet(Tt).map((i) => new In(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new Rr(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(Tt), i = e.state.facet(Tt);
    if (t != i) {
      let n = [];
      for (let r of i) {
        let o = t.indexOf(r);
        if (o < 0)
          n.push(new In(r));
        else {
          let l = this.plugins[o];
          l.mustUpdate = e, n.push(l);
        }
      }
      for (let r of this.plugins)
        r.mustUpdate != e && r.destroy(this);
      this.plugins = n, this.pluginMap.clear();
    } else
      for (let n of this.plugins)
        n.mustUpdate = e;
    for (let n = 0; n < this.plugins.length; n++)
      this.plugins[n].update(this);
    t != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (i) {
          Te(this.state, i, "doc view update listener");
        }
    }
  }
  /**
  @internal
  */
  measure(e = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, e && this.observer.forceFlush();
    let t = null, i = this.viewState.scrollParent, n = this.viewState.getScrollOffset(), { scrollAnchorPos: r, scrollAnchorHeight: o, scaleY: l } = this.viewState;
    Math.abs(n - this.viewState.scrollOffset) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let a = 0; ; a++) {
        if (o < 0) {
          if (cl(i || this.win))
            r = -1, o = this.viewState.heightMap.height / this.viewState.scaleY;
          else {
            let p = this.viewState.scrollAnchorAt(n);
            r = p.from, o = p.top;
          }
          l = this.viewState.scaleY;
        }
        this.updateState = 1;
        let h = this.viewState.measure();
        if (!h && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (a > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let c = [];
        h & 4 || ([this.measureRequests, c] = [c, this.measureRequests]);
        let f = c.map((p) => {
          try {
            return p.read(this);
          } catch (g) {
            return Te(this.state, g), Xr;
          }
        }), u = sn.create(this, this.state, []), d = !1;
        u.flags |= h, t ? t.flags |= h : t = u, this.updateState = 2, u.empty || (this.updatePlugins(u), this.inputState.update(u), this.updateAttrs(), d = this.docView.update(u), d && this.docViewUpdate());
        for (let p = 0; p < c.length; p++)
          if (f[p] != Xr)
            try {
              let g = c[p];
              g.write && g.write(f[p], this);
            } catch (g) {
              Te(this.state, g);
            }
        if (d && this.docView.updateSelection(!0), !u.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
              continue;
            } else {
              let g = (r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) / this.viewState.scaleY - o / l;
              if ((g > 1 || g < -1) && !(S.ios && this.inputState.lastIOSMomentumScroll > Date.now() - 100) && (i == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                n = n + g, i ? r < 0 ? i.scrollTop = i.scrollHeight : i.scrollTop += g : this.win.scrollBy(0, g), o = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty)
      for (let a of this.state.facet(ws))
        a(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return As + " " + (this.state.facet(Cs) ? _l : Gl) + " " + this.state.facet(Di);
  }
  updateAttrs() {
    let e = Qr(this, Ol, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), t = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(Ge) ? "true" : "false",
      class: "cm-content",
      style: `${S.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (t["aria-readonly"] = "true"), Qr(this, Qs, t);
    let i = this.observer.ignore(() => {
      let n = Tr(this.contentDOM, this.contentAttrs, t), r = Tr(this.dom, this.editorAttrs, e);
      return n || r;
    });
    return this.editorAttrs = e, this.contentAttrs = t, i;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let i of e)
      for (let n of i.effects)
        if (n.is(O.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = n.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Xt);
    let e = this.state.facet(O.cspNonce);
    Pt.mount(this.root, this.styleModules.concat(Zc).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1)
        return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (t === void 0 || t && t.plugin != e) && this.pluginMap.set(e, t = this.plugins.find((i) => i.plugin == e) || null), t && t.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  If the editor is transformed with CSS, this provides the scale
  along the X axis. Otherwise, it will just be 1. Note that
  transforms other than translation and scaling are not supported.
  */
  get scaleX() {
    return this.viewState.scaleX;
  }
  /**
  Provide the CSS transformed scale along the Y axis.
  */
  get scaleY() {
    return this.viewState.scaleY;
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt)) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line break, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(e, t, i) {
    return Vn(this, e, Pr(this, e, t, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return Vn(this, e, Pr(this, e, t, (i) => dc(this, e.head, i)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(e, t) {
    let i = this.bidiSpans(e), n = this.textDirectionAt(e.from), r = i[t ? i.length - 1 : 0];
    return w.cursor(r.side(t, n) + e.from, r.forward(!t, n) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, t, i = !0) {
    return uc(this, e, t, i);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(e, t, i) {
    return Vn(this, e, pc(this, e, t, i));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(e, t = 1) {
    return this.docView.domAtPos(e, t);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    this.readMeasured();
    let i = ks(this, e, t);
    return i && i.pos;
  }
  posAndSideAtCoords(e, t = !0) {
    return this.readMeasured(), ks(this, e, t);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let i = this.state.doc.lineAt(e), n = this.bidiSpans(i), r = n[ze.find(n, e - i.from, -1, t)];
    return this.docView.coordsAt(e, t, r.dir == U.RTL);
  }
  /**
  Return the rectangle around a given character. If `pos` does not
  point in front of a character that is in the viewport and
  rendered (i.e. not replaced, not a line break), this will return
  null. For space characters that are a line wrap point, this will
  return the position before the line break.
  */
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(e) {
    return !this.state.facet(Cl) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(e) {
    if (e.length > rf)
      return ml(e.length);
    let t = this.textDirectionAt(e.from), i;
    for (let r of this.bidiCache)
      if (r.from == e.from && r.dir == t && (r.fresh || gl(r.isolates, i = Dr(this, e))))
        return r.order;
    i || (i = Dr(this, e));
    let n = Vh(e.text, t, i);
    return this.bidiCache.push(new hn(e.from, e.to, t, i, !0, n)), n;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || S.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      hl(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins)
      e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(e, t = {}) {
    var i, n, r, o;
    return Ci.of(new Et(typeof e == "number" ? w.cursor(e) : e, (i = t.y) !== null && i !== void 0 ? i : "nearest", (n = t.x) !== null && n !== void 0 ? n : "nearest", (r = t.yMargin) !== null && r !== void 0 ? r : 5, (o = t.xMargin) !== null && o !== void 0 ? o : 5));
  }
  /**
  Return an effect that resets the editor to its current (at the
  time this method was called) scroll position. Note that this
  only affects the editor's own scrollable element, not parents.
  See also
  [`EditorViewConfig.scrollTo`](https://codemirror.net/6/docs/ref/#view.EditorViewConfig.scrollTo).
  
  The effect should be used with a document identical to the one
  it was created for. Failing to do so is not an error, but may
  not scroll to the expected position. You can
  [map](https://codemirror.net/6/docs/ref/#state.StateEffect.map) the effect to account for changes.
  */
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM, i = this.viewState.scrollAnchorAt(e);
    return Ci.of(new Et(w.cursor(i.from), "start", "start", i.top - e, t, !0));
  }
  /**
  Enable or disable tab-focus mode, which disables key bindings
  for Tab and Shift-Tab, letting the browser's default
  focus-changing behavior go through instead. This is useful to
  prevent trapping keyboard users in your editor.
  
  Without argument, this toggles the mode. With a boolean, it
  enables (true) or disables it (false). Given a number, it
  temporarily enables the mode until that number of milliseconds
  have passed or another non-Tab key is pressed.
  */
  setTabFocusMode(e) {
    e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == "boolean" ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(e) {
    return ce.define(() => ({}), { eventHandlers: e });
  }
  /**
  Create an extension that registers DOM event observers. Contrary
  to event [handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers),
  observers can't be prevented from running by a higher-precedence
  handler returning true. They also don't prevent other handlers
  and observers from running when they return true, and should not
  call `preventDefault`.
  */
  static domEventObservers(e) {
    return ce.define(() => ({}), { eventObservers: e });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://code.haverbeke.berlin/marijn/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(e, t) {
    let i = Pt.newName(), n = [Di.of(i), Xt.of(Ms(`.${i}`, e))];
    return t && t.dark && n.push(Cs.of(!0)), n;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return $s.lowest(Xt.of(Ms("." + As, e, Yl)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), n = i && _.get(i) || _.get(e);
    return ((t = n?.root) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
O.styleModule = Xt;
O.inputHandler = kl;
O.clipboardInputFilter = Js;
O.clipboardOutputFilter = Xs;
O.scrollHandler = Ml;
O.focusChangeEffect = Sl;
O.perLineTextDirection = Cl;
O.exceptionSink = vl;
O.updateListener = ws;
O.editable = Ge;
O.mouseSelectionStyle = xl;
O.dragMovesSelection = wl;
O.clickAddsSelectionRange = bl;
O.decorations = xn;
O.blockWrappers = Bl;
O.outerDecorations = Zs;
O.atomicRanges = bi;
O.bidiIsolatedRanges = Dl;
O.cursorScrollMargin = /* @__PURE__ */ M.define({
  combine: (s) => {
    let e = 5, t = 5;
    for (let i of s)
      typeof i == "number" ? e = t = i : { x: e, y: t } = i;
    return { x: e, y: t };
  }
});
O.scrollMargins = Ll;
O.darkTheme = Cs;
O.cspNonce = /* @__PURE__ */ M.define({ combine: (s) => s.length ? s[0] : "" });
O.contentAttributes = Qs;
O.editorAttributes = Ol;
O.lineWrapping = /* @__PURE__ */ O.contentAttributes.of({ class: "cm-lineWrapping" });
O.announce = /* @__PURE__ */ q.define();
const rf = 4096, Xr = {};
class hn {
  constructor(e, t, i, n, r, o) {
    this.from = e, this.to = t, this.dir = i, this.isolates = n, this.fresh = r, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((r) => r.fresh))
      return e;
    let i = [], n = e.length ? e[e.length - 1].dir : U.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r];
      o.dir == n && !t.touchesRange(o.from, o.to) && i.push(new hn(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return i;
  }
}
function Qr(s, e, t) {
  for (let i = s.state.facet(e), n = i.length - 1; n >= 0; n--) {
    let r = i[n], o = typeof r == "function" ? r(s) : r;
    o && Gs(o, t);
  }
  return t;
}
const of = S.mac ? "mac" : S.windows ? "win" : S.linux ? "linux" : "key";
function lf(s, e) {
  const t = s.split(/-(?!$)/);
  let i = t[t.length - 1];
  i == "Space" && (i = " ");
  let n, r, o, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const h = t[a];
    if (/^(cmd|meta|m)$/i.test(h))
      l = !0;
    else if (/^a(lt)?$/i.test(h))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(h))
      r = !0;
    else if (/^s(hift)?$/i.test(h))
      o = !0;
    else if (/^mod$/i.test(h))
      e == "mac" ? l = !0 : r = !0;
    else
      throw new Error("Unrecognized modifier name: " + h);
  }
  return n && (i = "Alt-" + i), r && (i = "Ctrl-" + i), l && (i = "Meta-" + i), o && (i = "Shift-" + i), i;
}
function Li(s, e, t) {
  return e.altKey && (s = "Alt-" + s), e.ctrlKey && (s = "Ctrl-" + s), e.metaKey && (s = "Meta-" + s), t !== !1 && e.shiftKey && (s = "Shift-" + s), s;
}
const af = /* @__PURE__ */ $s.default(/* @__PURE__ */ O.domEventHandlers({
  keydown(s, e) {
    return uf(hf(e.state), s, e, "editor");
  }
})), Jl = /* @__PURE__ */ M.define({ enables: af }), Zr = /* @__PURE__ */ new WeakMap();
function hf(s) {
  let e = s.facet(Jl), t = Zr.get(e);
  return t || Zr.set(e, t = ff(e.reduce((i, n) => i.concat(n), []))), t;
}
let tt = null;
const cf = 4e3;
function ff(s, e = of) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), n = (o, l) => {
    let a = i[o];
    if (a == null)
      i[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (o, l, a, h, c) => {
    var f, u;
    let d = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((y) => lf(y, e));
    for (let y = 1; y < p.length; y++) {
      let A = p.slice(0, y).join(" ");
      n(A, !0), d[A] || (d[A] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(b) => {
          let T = tt = { view: b, prefix: A, scope: o };
          return setTimeout(() => {
            tt == T && (tt = null);
          }, cf), !0;
        }]
      });
    }
    let g = p.join(" ");
    n(g, !1);
    let m = d[g] || (d[g] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((u = (f = d._any) === null || f === void 0 ? void 0 : f.run) === null || u === void 0 ? void 0 : u.slice()) || []
    });
    a && m.run.push(a), h && (m.preventDefault = !0), c && (m.stopPropagation = !0);
  };
  for (let o of s) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let h of l) {
        let c = t[h] || (t[h] = /* @__PURE__ */ Object.create(null));
        c._any || (c._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: f } = o;
        for (let u in c)
          c[u].run.push((d) => f(d, Ts));
      }
    let a = o[e] || o.key;
    if (a)
      for (let h of l)
        r(h, a, o.run, o.preventDefault, o.stopPropagation), o.shift && r(h, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
let Ts = null;
function uf(s, e, t, i) {
  Ts = e;
  let n = Ch(e), r = oh(n, 0), o = lh(r) == n.length && n != " ", l = "", a = !1, h = !1, c = !1;
  tt && tt.view == t && tt.scope == i && (l = tt.prefix + " ", Vl.indexOf(e.keyCode) < 0 && (h = !0, tt = null));
  let f = /* @__PURE__ */ new Set(), u = (m) => {
    if (m) {
      for (let y of m.run)
        if (!f.has(y) && (f.add(y), y(t)))
          return m.stopPropagation && (c = !0), !0;
      m.preventDefault && (m.stopPropagation && (c = !0), h = !0);
    }
    return !1;
  }, d = s[i], p, g;
  return d && (u(d[l + Li(n, e, !o)]) ? a = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(S.windows && e.ctrlKey && e.altKey) && // Alt-combinations on macOS tend to be typed characters
  !(S.mac && e.altKey && !(e.ctrlKey || e.metaKey)) && (p = rt[e.keyCode]) && p != n ? (u(d[l + Li(p, e, !0)]) || e.shiftKey && (g = hi[e.keyCode]) != n && g != p && u(d[l + Li(g, e, !1)])) && (a = !0) : o && e.shiftKey && u(d[l + Li(n, e, !0)]) && (a = !0), !a && u(d._any) && (a = !0)), h && (a = !0), a && c && e.stopPropagation(), Ts = null, a;
}
class bt {
  /**
  Create a marker with the given class and dimensions. If `width`
  is null, the DOM element will get no width style.
  */
  constructor(e, t, i, n, r) {
    this.className = e, this.left = t, this.top = i, this.width = n, this.height = r;
  }
  draw() {
    let e = document.createElement("div");
    return e.className = this.className, this.adjust(e), e;
  }
  update(e, t) {
    return t.className != this.className ? !1 : (this.adjust(e), !0);
  }
  adjust(e) {
    e.style.left = this.left + "px", e.style.top = this.top + "px", this.width != null && (e.style.width = this.width + "px"), e.style.height = this.height + "px";
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
  }
  /**
  Create a set of rectangles for the given selection range,
  assigning them theclass`className`. Will create a single
  rectangle for empty ranges, and a set of selection-style
  rectangles covering the range's content (in a bidi-aware
  way) for non-empty ones.
  */
  static forRange(e, t, i) {
    if (i.empty) {
      let n = e.coordsAtPos(i.head, i.assoc || 1);
      if (!n)
        return [];
      let r = Xl(e);
      return [new bt(t, n.left - r.left, n.top - r.top, null, n.bottom - n.top)];
    } else
      return df(e, t, i);
  }
}
function Xl(s) {
  let e = s.scrollDOM.getBoundingClientRect();
  return { left: (s.textDirection == U.LTR ? e.left : e.right - s.scrollDOM.clientWidth * s.scaleX) - s.scrollDOM.scrollLeft * s.scaleX, top: e.top - s.scrollDOM.scrollTop * s.scaleY };
}
function eo(s, e, t, i) {
  let n = s.coordsAtPos(e, t * 2);
  if (!n)
    return i;
  let r = s.dom.getBoundingClientRect(), o = (n.top + n.bottom) / 2, l = s.posAtCoords({ x: r.left + 1, y: o }), a = s.posAtCoords({ x: r.right - 1, y: o });
  return l == null || a == null ? i : { from: Math.max(i.from, Math.min(l, a)), to: Math.min(i.to, Math.max(l, a)) };
}
function df(s, e, t) {
  if (t.to <= s.viewport.from || t.from >= s.viewport.to)
    return [];
  let i = Math.max(t.from, s.viewport.from), n = Math.min(t.to, s.viewport.to), r = s.textDirection == U.LTR, o = s.contentDOM, l = o.getBoundingClientRect(), a = Xl(s), h = o.querySelector(".cm-line"), c = h && window.getComputedStyle(h), f = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0), u = l.right - (c ? parseInt(c.paddingRight) : 0), d = vs(s, i, 1), p = vs(s, n, -1), g = d.type == ne.Text ? d : null, m = p.type == ne.Text ? p : null;
  if (g && (s.lineWrapping || d.widgetLineBreaks) && (g = eo(s, i, 1, g)), m && (s.lineWrapping || p.widgetLineBreaks) && (m = eo(s, n, -1, m)), g && m && g.from == m.from && g.to == m.to)
    return A(b(t.from, t.to, g));
  {
    let C = g ? b(t.from, null, g) : T(d, !1), v = m ? b(null, t.to, m) : T(p, !0), k = [];
    return (g || d).to < (m || p).from - (g && m ? 1 : 0) || d.widgetLineBreaks > 1 && C.bottom + s.defaultLineHeight / 2 < v.top ? k.push(y(f, C.bottom, u, v.top)) : C.bottom < v.top && s.elementAtHeight((C.bottom + v.top) / 2).type == ne.Text && (C.bottom = v.top = (C.bottom + v.top) / 2), A(C).concat(k).concat(A(v));
  }
  function y(C, v, k, D) {
    return new bt(e, C - a.left, v - a.top, Math.max(0, k - C), D - v);
  }
  function A({ top: C, bottom: v, horizontal: k }) {
    let D = [];
    for (let R = 0; R < k.length; R += 2)
      D.push(y(k[R], C, k[R + 1], v));
    return D;
  }
  function b(C, v, k) {
    let D = 1e9, R = -1e9, z = [];
    function E(H, $, le, ge, Ee) {
      let Z = s.coordsAtPos(H, H == k.to ? -2 : 2), ye = s.coordsAtPos(le, le == k.from ? 2 : -2);
      !Z || !ye || (D = Math.min(Z.top, ye.top, D), R = Math.max(Z.bottom, ye.bottom, R), Ee == U.LTR ? z.push(r && $ ? f : Z.left, r && ge ? u : ye.right) : z.push(!r && ge ? f : ye.left, !r && $ ? u : Z.right));
    }
    let B = C ?? k.from, F = v ?? k.to;
    for (let H of s.visibleRanges)
      if (H.to > B && H.from < F)
        for (let $ = Math.max(H.from, B), le = Math.min(H.to, F); ; ) {
          let ge = s.state.doc.lineAt($);
          for (let Ee of s.bidiSpans(ge)) {
            let Z = Ee.from + ge.from, ye = Ee.to + ge.from;
            if (Z >= le)
              break;
            ye > $ && E(Math.max(Z, $), C == null && Z <= B, Math.min(ye, le), v == null && ye >= F, Ee.dir);
          }
          if ($ = ge.to + 1, $ >= le)
            break;
        }
    return z.length == 0 && E(B, C == null, F, v == null, s.textDirection), { top: D, bottom: R, horizontal: z };
  }
  function T(C, v) {
    let k = l.top + (v ? C.top : C.bottom);
    return { top: k, bottom: k, horizontal: [] };
  }
}
function pf(s, e) {
  return s.constructor == e.constructor && s.eq(e);
}
class gf {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(Gi) != e.state.facet(Gi) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== !1 && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0, i = e.facet(Gi);
    for (; t < i.length && i[t] != this.layer; )
      t++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: e, scaleY: t } = this.view;
    (e != this.scaleX || t != this.scaleY) && (this.scaleX = e, this.scaleY = t, this.dom.style.transform = `scale(${1 / e}, ${1 / t})`);
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((t, i) => !pf(t, this.drawn[i]))) {
      let t = this.dom.firstChild, i = 0;
      for (let n of e)
        n.update && t && n.constructor && this.drawn[i].constructor && n.update(t, this.drawn[i]) ? (t = t.nextSibling, i++) : this.dom.insertBefore(n.draw(), t);
      for (; t; ) {
        let n = t.nextSibling;
        t.remove(), t = n;
      }
      this.drawn = e, S.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none");
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const Gi = /* @__PURE__ */ M.define();
function Ql(s) {
  return [
    ce.define((e) => new gf(e, s)),
    Gi.of(s)
  ];
}
const Wt = /* @__PURE__ */ M.define({
  combine(s) {
    return $t(s, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0,
      iosSelectionHandles: !0
    }, {
      cursorBlinkRate: (e, t) => Math.min(e, t),
      drawRangeCursor: (e, t) => e || t
    });
  }
});
function mf(s = {}) {
  return [
    Wt.of(s),
    yf,
    bf,
    xf,
    Al.of(!0)
  ];
}
function Zl(s) {
  return s.startState.facet(Wt) != s.state.facet(Wt);
}
const yf = /* @__PURE__ */ Ql({
  above: !0,
  markers(s) {
    let { state: e } = s, t = e.facet(Wt), i = [];
    for (let n of e.selection.ranges) {
      let r = n == e.selection.main;
      if (n.empty || t.drawRangeCursor && !(r && S.ios && t.iosSelectionHandles)) {
        let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = n.empty ? n : w.cursor(n.head, n.assoc);
        for (let a of bt.forRange(s, o, l))
          i.push(a);
      }
    }
    return i;
  },
  update(s, e) {
    s.transactions.some((i) => i.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = Zl(s);
    return t && to(s.state, e), s.docChanged || s.selectionSet || t;
  },
  mount(s, e) {
    to(e.state, s);
  },
  class: "cm-cursorLayer"
});
function to(s, e) {
  e.style.animationDuration = s.facet(Wt).cursorBlinkRate + "ms";
}
const bf = /* @__PURE__ */ Ql({
  above: !1,
  markers(s) {
    let e = [], { main: t, ranges: i } = s.state.selection;
    for (let n of i)
      if (!n.empty)
        for (let r of bt.forRange(s, "cm-selectionBackground", n))
          e.push(r);
    if (S.ios && !t.empty && s.state.facet(Wt).iosSelectionHandles) {
      for (let n of bt.forRange(s, "cm-selectionHandle cm-selectionHandle-start", w.cursor(t.from, 1)))
        e.push(n);
      for (let n of bt.forRange(s, "cm-selectionHandle cm-selectionHandle-end", w.cursor(t.to, 1)))
        e.push(n);
    }
    return e;
  },
  update(s, e) {
    return s.docChanged || s.selectionSet || s.viewportChanged || Zl(s);
  },
  class: "cm-selectionLayer"
}), wf = S.gecko && S.gecko_version == 153 ? "#ffffff01" : "transparent", xf = /* @__PURE__ */ $s.highest(/* @__PURE__ */ O.theme({
  ".cm-line": {
    "& ::selection, &::selection": { backgroundColor: `${wf} !important` },
    caretColor: "transparent !important"
  },
  ".cm-content": {
    caretColor: "transparent !important",
    "& :focus": {
      caretColor: "initial !important",
      "&::selection, & ::selection": {
        backgroundColor: "Highlight !important"
      }
    }
  }
}));
function vf() {
  return Sf;
}
const kf = /* @__PURE__ */ W.line({ class: "cm-activeLine" }), Sf = /* @__PURE__ */ ce.fromClass(class {
  constructor(s) {
    this.decorations = this.getDeco(s);
  }
  update(s) {
    (s.docChanged || s.selectionSet) && (this.decorations = this.getDeco(s.view));
  }
  getDeco(s) {
    let e = -1, t = [];
    for (let i of s.state.selection.ranges) {
      let n = s.lineBlockAt(i.head);
      n.from > e && (t.push(kf.range(n.from)), e = n.from);
    }
    return W.set(t);
  }
}, {
  decorations: (s) => s.decorations
}), Ei = "-10000px";
class ea {
  constructor(e, t, i, n) {
    this.facet = t, this.createTooltipView = i, this.removeTooltipView = n, this.input = e.state.facet(t), this.tooltips = this.input.filter((o) => o);
    let r = null;
    this.tooltipViews = this.tooltips.map((o) => r = i(o, r));
  }
  update(e, t) {
    var i;
    let n = e.state.facet(this.facet), r = n.filter((a) => a);
    if (n === this.input) {
      for (let a of this.tooltipViews)
        a.update && a.update(e);
      return !1;
    }
    let o = [], l = t ? [] : null;
    for (let a = 0; a < r.length; a++) {
      let h = r[a], c = -1;
      if (h) {
        for (let f = 0; f < this.tooltips.length; f++) {
          let u = this.tooltips[f];
          u && u.create == h.create && (c = f);
        }
        if (c < 0)
          o[a] = this.createTooltipView(h, a ? o[a - 1] : null), l && (l[a] = !!h.above);
        else {
          let f = o[a] = this.tooltipViews[c];
          l && (l[a] = t[c]), f.update && f.update(e);
        }
      }
    }
    for (let a of this.tooltipViews)
      o.indexOf(a) < 0 && (this.removeTooltipView(a), (i = a.destroy) === null || i === void 0 || i.call(a));
    return t && (l.forEach((a, h) => t[h] = a), t.length = l.length), this.input = n, this.tooltips = r, this.tooltipViews = o, !0;
  }
}
function Cf(s) {
  let e = s.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: e.clientHeight, right: e.clientWidth };
}
const Kn = /* @__PURE__ */ M.define({
  combine: (s) => {
    var e, t, i;
    return {
      position: S.ios ? "absolute" : ((e = s.find((n) => n.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((t = s.find((n) => n.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
      tooltipSpace: ((i = s.find((n) => n.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || Cf
    };
  }
}), io = /* @__PURE__ */ new WeakMap(), ta = /* @__PURE__ */ ce.fromClass(class {
  constructor(s) {
    this.view = s, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = s.state.facet(Kn);
    this.position = e.position, this.parent = e.parent, this.classes = s.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new ea(s, ia, (t, i) => this.createTooltip(t, i), (t) => {
      this.resizeObserver && this.resizeObserver.unobserve(t.dom), t.dom.remove();
    }), this.above = this.manager.tooltips.map((t) => !!t.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((t) => {
      Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), s.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let s of this.manager.tooltipViews)
        this.intersectionObserver.observe(s.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(s) {
    s.transactions.length && (this.lastTransaction = Date.now());
    let e = this.manager.update(s, this.above);
    e && this.observeIntersection();
    let t = e || s.geometryChanged, i = s.state.facet(Kn);
    if (i.position != this.position && !this.madeAbsolute) {
      this.position = i.position;
      for (let n of this.manager.tooltipViews)
        n.dom.style.position = this.position;
      t = !0;
    }
    if (i.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
      for (let n of this.manager.tooltipViews)
        this.container.appendChild(n.dom);
      t = !0;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    t && this.maybeMeasure();
  }
  createTooltip(s, e) {
    let t = s.create(this.view), i = e ? e.dom : null;
    if (t.dom.classList.add("cm-tooltip"), s.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let n = document.createElement("div");
      n.className = "cm-tooltip-arrow", t.dom.appendChild(n);
    }
    return t.dom.style.position = this.position, t.dom.style.top = Ei, t.dom.style.left = "0px", this.container.insertBefore(t.dom, i), t.mount && t.mount(this.view), this.resizeObserver && this.resizeObserver.observe(t.dom), t;
  }
  destroy() {
    var s, e, t;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let i of this.manager.tooltipViews)
      i.dom.remove(), (s = i.destroy) === null || s === void 0 || s.call(i);
    this.parent && this.container.remove(), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), (t = this.intersectionObserver) === null || t === void 0 || t.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let s = 1, e = 1, t = !1;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: r } = this.manager.tooltipViews[0];
      if (S.safari) {
        let o = r.getBoundingClientRect();
        t = Math.abs(o.top + 1e4) > 1 || Math.abs(o.left) > 1;
      } else
        t = !!r.offsetParent && r.offsetParent != this.container.ownerDocument.body;
    }
    if (t || this.position == "absolute")
      if (this.parent) {
        let r = this.parent.getBoundingClientRect();
        r.width && r.height && (s = r.width / this.parent.offsetWidth, e = r.height / this.parent.offsetHeight);
      } else
        ({ scaleX: s, scaleY: e } = this.view.viewState);
    let i = this.view.scrollDOM.getBoundingClientRect(), n = er(this.view);
    return {
      visible: {
        left: i.left + n.left,
        top: i.top + n.top,
        right: i.right - n.right,
        bottom: i.bottom - n.bottom
      },
      parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
      pos: this.manager.tooltips.map((r, o) => {
        let l = this.manager.tooltipViews[o];
        return l.getCoords ? l.getCoords(r.pos) : this.view.coordsAtPos(r.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: r }) => r.getBoundingClientRect()),
      space: this.view.state.facet(Kn).tooltipSpace(this.view),
      scaleX: s,
      scaleY: e,
      makeAbsolute: t
    };
  }
  writeMeasure(s) {
    var e;
    if (s.makeAbsolute) {
      this.madeAbsolute = !0, this.position = "absolute";
      for (let l of this.manager.tooltipViews)
        l.dom.style.position = "absolute";
    }
    let { visible: t, space: i, scaleX: n, scaleY: r } = s, o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], h = this.manager.tooltipViews[l], { dom: c } = h, f = s.pos[l], u = s.size[l];
      if (!f || a.clip !== !1 && (f.bottom <= Math.max(t.top, i.top) || f.top >= Math.min(t.bottom, i.bottom) || f.right < Math.max(t.left, i.left) - 0.1 || f.left > Math.min(t.right, i.right) + 0.1)) {
        c.style.top = Ei;
        continue;
      }
      let d = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null, p = d ? 7 : 0, g = u.right - u.left, m = (e = io.get(h)) !== null && e !== void 0 ? e : u.bottom - u.top, y = h.offset || Mf, A = this.view.textDirection == U.LTR, b = u.width > i.right - i.left ? A ? i.left : i.right - u.width : A ? Math.max(i.left, Math.min(f.left - (d ? 14 : 0) + y.x, i.right - g)) : Math.min(Math.max(i.left, f.left - g + (d ? 14 : 0) - y.x), i.right - g), T = this.above[l];
      !a.strictSide && (T ? f.top - m - p - y.y < i.top : f.bottom + m + p + y.y > i.bottom) && T == i.bottom - f.bottom > f.top - i.top && (T = this.above[l] = !T);
      let C = (T ? f.top - i.top : i.bottom - f.bottom) - p;
      if (C < m && h.resize !== !1) {
        if (C < this.view.defaultLineHeight) {
          c.style.top = Ei;
          continue;
        }
        io.set(h, m), c.style.height = (m = C) / r + "px";
      } else c.style.height && (c.style.height = "");
      let v = T ? f.top - m - p - y.y : f.bottom + p + y.y, k = b + g;
      if (h.overlap !== !0)
        for (let D of o)
          D.left < k && D.right > b && D.top < v + m && D.bottom > v && (v = T ? D.top - m - 2 - p : D.bottom + p + 2);
      if (this.position == "absolute" ? (c.style.top = (v - s.parent.top) / r + "px", no(c, (b - s.parent.left) / n)) : (c.style.top = v / r + "px", no(c, b / n)), d) {
        let D = f.left + (A ? y.x : -y.x) - (b + 14 - 7);
        d.style.left = D / n + "px";
      }
      h.overlap !== !0 && o.push({ left: b, top: v, right: k, bottom: v + m }), c.classList.toggle("cm-tooltip-above", T), c.classList.toggle("cm-tooltip-below", !T), h.positioned && h.positioned(s.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let s of this.manager.tooltipViews)
        s.dom.style.top = Ei;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
function no(s, e) {
  let t = parseInt(s.style.left, 10);
  (isNaN(t) || Math.abs(e - t) > 1) && (s.style.left = e + "px");
}
const Af = /* @__PURE__ */ O.baseTheme({
  ".cm-tooltip": {
    zIndex: 500,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: "7px",
    width: "14px",
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent"
    },
    ".cm-tooltip-above &": {
      bottom: "-7px",
      "&:before": {
        borderTop: "7px solid #bbb"
      },
      "&:after": {
        borderTop: "7px solid #f5f5f5",
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: "-7px",
      "&:before": {
        borderBottom: "7px solid #bbb"
      },
      "&:after": {
        borderBottom: "7px solid #f5f5f5",
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
}), Mf = { x: 0, y: 0 }, ia = /* @__PURE__ */ M.define({
  enables: [ta, Af]
}), cn = /* @__PURE__ */ M.define({
  combine: (s) => s.reduce((e, t) => e.concat(t), [])
});
class Cn {
  // Needs to be static so that host tooltip instances always match
  static create(e) {
    return new Cn(e);
  }
  constructor(e) {
    this.view = e, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new ea(e, cn, (t, i) => this.createHostedView(t, i), (t) => t.dom.remove());
  }
  createHostedView(e, t) {
    let i = e.create(this.view);
    return i.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(i.dom, t ? t.dom.nextSibling : this.dom.firstChild), this.mounted && i.mount && i.mount(this.view), i;
  }
  mount(e) {
    for (let t of this.manager.tooltipViews)
      t.mount && t.mount(e);
    this.mounted = !0;
  }
  positioned(e) {
    for (let t of this.manager.tooltipViews)
      t.positioned && t.positioned(e);
  }
  update(e) {
    this.manager.update(e);
  }
  destroy() {
    var e;
    for (let t of this.manager.tooltipViews)
      (e = t.destroy) === null || e === void 0 || e.call(t);
  }
  passProp(e) {
    let t;
    for (let i of this.manager.tooltipViews) {
      let n = i[e];
      if (n !== void 0) {
        if (t === void 0)
          t = n;
        else if (t !== n)
          return;
      }
    }
    return t;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const Tf = /* @__PURE__ */ ia.compute([cn], (s) => {
  let e = s.facet(cn);
  return e.length === 0 ? null : {
    pos: Math.min(...e.map((t) => t.pos)),
    end: Math.max(...e.map((t) => {
      var i;
      return (i = t.end) !== null && i !== void 0 ? i : t.pos;
    })),
    create: Cn.create,
    above: e[0].above,
    arrow: e.some((t) => t.arrow)
  };
}), Of = /* @__PURE__ */ M.define();
class Bf {
  constructor(e, t, i, n, r, o) {
    this.view = e, this.source = t, this.field = i, this.locked = n, this.setHover = r, this.hoverTime = o, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update(e) {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active.length)
      return;
    let e = Date.now() - this.lastMove.time;
    e < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: e, lastMove: t } = this, i = e.docView.tile.nearest(t.target);
    if (!i)
      return;
    let n, r = 1;
    if (i.isWidget())
      n = i.posAtStart;
    else {
      if (n = e.posAtCoords(t), n == null)
        return;
      let o = e.coordsAtPos(n);
      if (!o || t.y < o.top || t.y > o.bottom || t.x < o.left - e.defaultCharacterWidth || t.x > o.right + e.defaultCharacterWidth)
        return;
      let l = e.bidiSpans(e.state.doc.lineAt(n)).find((h) => h.from <= n && h.to >= n), a = l && l.dir == U.RTL ? -1 : 1;
      r = t.x < o.left ? -a : a;
    }
    this.activateHover(e, n, r);
  }
  activateHover(e, t, i, n) {
    let r = this.source(e, t, i), o = (l) => {
      if (l && !(Array.isArray(l) && !l.length)) {
        let a = Array.isArray(l) ? l : [l];
        n && this.locked.set(a, n), e.dispatch({ effects: this.setHover.of(a) });
      }
    };
    if (r && "then" in r) {
      let l = this.pending = { pos: t };
      r.then((a) => {
        this.pending == l && (this.pending = null, o(a));
      }, (a) => Te(e.state, a, "hover tooltip"));
    } else
      o(r);
  }
  get tooltip() {
    let e = this.view.plugin(ta), t = e ? e.manager.tooltips.findIndex((i) => i.create == Cn.create) : -1;
    return t > -1 ? e.manager.tooltipViews[t] : null;
  }
  mousemove(e) {
    var t, i;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: n, tooltip: r } = this;
    if (n.length && !this.locked.has(n) && r && !Df(r.dom, e) || this.pending) {
      let { pos: o } = n[0] || this.pending, l = (i = (t = n[0]) === null || t === void 0 ? void 0 : t.end) !== null && i !== void 0 ? i : o;
      (o == l ? this.view.posAtCoords(this.lastMove) != o : !Lf(this.view, o, l, e.clientX, e.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
    let { active: t } = this;
    if (t.length && !this.locked.has(t)) {
      let { tooltip: i } = this;
      i && i.dom.contains(e.relatedTarget) ? this.watchTooltipLeave(i.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(e) {
    let t = (i) => {
      e.removeEventListener("mouseleave", t);
      let { active: n } = this;
      n.length && !this.locked.has(n) && !this.view.dom.contains(i.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
    };
    e.addEventListener("mouseleave", t);
  }
  destroy() {
    clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const Ri = 4;
function Df(s, e) {
  let { left: t, right: i, top: n, bottom: r } = s.getBoundingClientRect(), o;
  if (o = s.querySelector(".cm-tooltip-arrow")) {
    let l = o.getBoundingClientRect();
    n = Math.min(l.top, n), r = Math.max(l.bottom, r);
  }
  return e.clientX >= t - Ri && e.clientX <= i + Ri && e.clientY >= n - Ri && e.clientY <= r + Ri;
}
function Lf(s, e, t, i, n, r) {
  let o = s.scrollDOM.getBoundingClientRect(), l = s.documentTop + s.documentPadding.top + s.contentHeight;
  if (o.left > i || o.right < i || o.top > n || Math.min(o.bottom, l) < n)
    return !1;
  let a = s.posAtCoords({ x: i, y: n }, !1);
  return a >= e && a <= t;
}
function Ef(s, e = {}) {
  let t = q.define(), i = /* @__PURE__ */ new WeakMap(), n = je.define({
    create() {
      return [];
    },
    update(o, l) {
      let a = i.get(o);
      if (o.length && (e.hideOnChange && (l.docChanged || l.selection) ? o = [] : a && a(l) ? o = [] : e.hideOn && (o = o.filter((h) => !e.hideOn(l, h)))), l.docChanged && o.length) {
        let h = [];
        for (let c of o) {
          let f = l.changes.mapPos(c.pos, -1, ue.TrackDel);
          if (f != null) {
            let u = Object.assign(/* @__PURE__ */ Object.create(null), c);
            u.pos = f, u.end != null && (u.end = l.changes.mapPos(u.end)), h.push(u);
          }
        }
        o = h;
      }
      for (let h of l.effects)
        h.is(t) && (o = h.value, a = void 0), (h.is(Rf) && !h.value || h.value == n) && (o = []);
      return o.length && a && i.set(o, a), o;
    },
    provide: (o) => cn.from(o)
  });
  const r = ce.define((o) => new Bf(
    o,
    s,
    n,
    i,
    t,
    e.hoverTime || 300
    /* Hover.Time */
  ));
  return {
    active: n,
    extension: [
      n,
      r,
      Of.of(r),
      Tf
    ]
  };
}
const Rf = /* @__PURE__ */ q.define(), so = /* @__PURE__ */ M.define({
  combine(s) {
    let e, t;
    for (let i of s)
      e = e || i.topContainer, t = t || i.bottomContainer;
    return { topContainer: e, bottomContainer: t };
  }
}), Pf = /* @__PURE__ */ ce.fromClass(class {
  constructor(s) {
    this.input = s.state.facet(Os), this.specs = this.input.filter((t) => t), this.panels = this.specs.map((t) => t(s));
    let e = s.state.facet(so);
    this.top = new Pi(s, !0, e.topContainer), this.bottom = new Pi(s, !1, e.bottomContainer), this.top.sync(this.panels.filter((t) => t.top)), this.bottom.sync(this.panels.filter((t) => !t.top));
    for (let t of this.panels)
      t.dom.classList.add("cm-panel"), t.mount && t.mount();
  }
  update(s) {
    let e = s.state.facet(so);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new Pi(s.view, !0, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new Pi(s.view, !1, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let t = s.state.facet(Os);
    if (t != this.input) {
      let i = t.filter((a) => a), n = [], r = [], o = [], l = [];
      for (let a of i) {
        let h = this.specs.indexOf(a), c;
        h < 0 ? (c = a(s.view), l.push(c)) : (c = this.panels[h], c.update && c.update(s)), n.push(c), (c.top ? r : o).push(c);
      }
      this.specs = i, this.panels = n, this.top.sync(r), this.bottom.sync(o);
      for (let a of l)
        a.dom.classList.add("cm-panel"), a.mount && a.mount();
    } else
      for (let i of this.panels)
        i.update && i.update(s);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, {
  provide: (s) => O.scrollMargins.of((e) => {
    let t = e.plugin(s);
    return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() };
  })
});
class Pi {
  constructor(e, t, i) {
    this.view = e, this.top = t, this.container = i, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(e) {
    for (let t of this.panels)
      t.destroy && e.indexOf(t) < 0 && t.destroy();
    this.panels = e, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom";
      let t = this.container || this.view.dom;
      t.insertBefore(this.dom, this.top ? t.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let t of this.panels)
      if (t.dom.parentNode == this.dom) {
        for (; e != t.dom; )
          e = ro(e);
        e = e.nextSibling;
      } else
        this.dom.insertBefore(t.dom, e);
    for (; e; )
      e = ro(e);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let e of this.classes.split(" "))
        e && this.container.classList.remove(e);
      for (let e of (this.classes = this.view.themeClasses).split(" "))
        e && this.container.classList.add(e);
    }
  }
}
function ro(s) {
  let e = s.nextSibling;
  return s.remove(), e;
}
const Os = /* @__PURE__ */ M.define({
  enables: Pf
});
class lt extends xt {
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(e) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(e) {
  }
}
lt.prototype.elementClass = "";
lt.prototype.toDOM = void 0;
lt.prototype.mapMode = ue.TrackBefore;
lt.prototype.startSide = lt.prototype.endSide = -1;
lt.prototype.point = !0;
const _i = /* @__PURE__ */ M.define(), If = /* @__PURE__ */ M.define(), Yi = /* @__PURE__ */ M.define(), oo = /* @__PURE__ */ M.define({
  combine: (s) => s.some((e) => e)
});
function Nf(s) {
  return [
    Hf
  ];
}
const Hf = /* @__PURE__ */ ce.fromClass(class {
  constructor(s) {
    this.view = s, this.domAfter = null, this.prevViewport = s.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = s.state.facet(Yi).map((e) => new ao(s, e)), this.fixed = !s.state.facet(oo);
    for (let e of this.gutters)
      e.config.side == "after" ? this.getDOMAfter().appendChild(e.dom) : this.dom.appendChild(e.dom);
    this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), s.scrollDOM.insertBefore(this.dom, s.contentDOM);
  }
  getDOMAfter() {
    return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter;
  }
  update(s) {
    if (this.updateGutters(s)) {
      let e = this.prevViewport, t = s.view.viewport, i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(i < (t.to - t.from) * 0.8);
    }
    if (s.geometryChanged) {
      let e = this.view.contentHeight / this.view.scaleY + "px";
      this.dom.style.minHeight = e, this.domAfter && (this.domAfter.style.minHeight = e);
    }
    this.view.state.facet(oo) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = s.view.viewport;
  }
  syncGutters(s) {
    let e = this.dom.nextSibling;
    s && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let t = P.iter(this.view.state.facet(_i), this.view.viewport.from), i = [], n = this.gutters.map((r) => new Wf(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(r.type)) {
        let o = !0;
        for (let l of r.type)
          if (l.type == ne.Text && o) {
            Bs(t, i, l.from);
            for (let a of n)
              a.line(this.view, l, i);
            o = !1;
          } else if (l.widget)
            for (let a of n)
              a.widget(this.view, l);
      } else if (r.type == ne.Text) {
        Bs(t, i, r.from);
        for (let o of n)
          o.line(this.view, r, i);
      } else if (r.widget)
        for (let o of n)
          o.widget(this.view, r);
    for (let r of n)
      r.finish();
    s && (this.view.scrollDOM.insertBefore(this.dom, e), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(s) {
    let e = s.startState.facet(Yi), t = s.state.facet(Yi), i = s.docChanged || s.heightChanged || s.viewportChanged || !P.eq(s.startState.facet(_i), s.state.facet(_i), s.view.viewport.from, s.view.viewport.to);
    if (e == t)
      for (let n of this.gutters)
        n.update(s) && (i = !0);
    else {
      i = !0;
      let n = [];
      for (let r of t) {
        let o = e.indexOf(r);
        o < 0 ? n.push(new ao(this.view, r)) : (this.gutters[o].update(s), n.push(this.gutters[o]));
      }
      for (let r of this.gutters)
        r.dom.remove(), n.indexOf(r) < 0 && r.destroy();
      for (let r of n)
        r.config.side == "after" ? this.getDOMAfter().appendChild(r.dom) : this.dom.appendChild(r.dom);
      this.gutters = n;
    }
    return i;
  }
  destroy() {
    for (let s of this.gutters)
      s.destroy();
    this.dom.remove(), this.domAfter && this.domAfter.remove();
  }
}, {
  provide: (s) => O.scrollMargins.of((e) => {
    let t = e.plugin(s);
    if (!t || t.gutters.length == 0 || !t.fixed)
      return null;
    let i = t.dom.offsetWidth * e.scaleX, n = t.domAfter ? t.domAfter.offsetWidth * e.scaleX : 0;
    return e.textDirection == U.LTR ? { left: i, right: n } : { right: i, left: n };
  })
});
function lo(s) {
  return Array.isArray(s) ? s : [s];
}
function Bs(s, e, t) {
  for (; s.value && s.from <= t; )
    s.from == t && e.push(s.value), s.next();
}
class Wf {
  constructor(e, t, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = P.iter(e.markers, t.from);
  }
  addElement(e, t, i) {
    let { gutter: n } = this, r = (t.top - this.height) / e.scaleY, o = t.height / e.scaleY;
    if (this.i == n.elements.length) {
      let l = new na(e, o, r, i);
      n.elements.push(l), n.dom.appendChild(l.dom);
    } else
      n.elements[this.i].update(e, o, r, i);
    this.height = t.bottom, this.i++;
  }
  line(e, t, i) {
    let n = [];
    Bs(this.cursor, n, t.from), i.length && (n = n.concat(i));
    let r = this.gutter.config.lineMarker(e, t, n);
    r && n.unshift(r);
    let o = this.gutter;
    n.length == 0 && !o.config.renderEmptyElements || this.addElement(e, t, n);
  }
  widget(e, t) {
    let i = this.gutter.config.widgetMarker(e, t.widget, t), n = i ? [i] : null;
    for (let r of e.state.facet(If)) {
      let o = r(e, t.widget, t);
      o && (n || (n = [])).push(o);
    }
    n && this.addElement(e, t, n);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class ao {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in t.domEventHandlers)
      this.dom.addEventListener(i, (n) => {
        let r = n.target, o;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; )
            r = r.parentNode;
          let a = r.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else
          o = n.clientY;
        let l = e.lineBlockAtHeight(o - e.documentTop);
        t.domEventHandlers[i](e, l, n) && n.preventDefault();
      });
    this.markers = lo(t.markers(e)), t.initialSpacer && (this.spacer = new na(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = lo(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let n = this.config.updateSpacer(this.spacer.markers[0], e);
      n != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [n]);
    }
    let i = e.view.viewport;
    return !P.eq(this.markers, t, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class na {
  constructor(e, t, i, n) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, i, n);
  }
  update(e, t, i, n) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), Vf(this.markers, n) || this.setMarkers(e, n);
  }
  setMarkers(e, t) {
    let i = "cm-gutterElement", n = this.dom.firstChild;
    for (let r = 0, o = 0; ; ) {
      let l = o, a = r < t.length ? t[r++] : null, h = !1;
      if (a) {
        let c = a.elementClass;
        c && (i += " " + c);
        for (let f = o; f < this.markers.length; f++)
          if (this.markers[f].compare(a)) {
            l = f, h = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; o < l; ) {
        let c = this.markers[o++];
        if (c.toDOM) {
          c.destroy(n);
          let f = n.nextSibling;
          n.remove(), n = f;
        }
      }
      if (!a)
        break;
      a.toDOM && (h ? n = n.nextSibling : this.dom.insertBefore(a.toDOM(e), n)), h && o++;
    }
    this.dom.className = i, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function Vf(s, e) {
  if (s.length != e.length)
    return !1;
  for (let t = 0; t < s.length; t++)
    if (!s[t].compare(e[t]))
      return !1;
  return !0;
}
const Ff = /* @__PURE__ */ M.define(), zf = /* @__PURE__ */ M.define(), Ot = /* @__PURE__ */ M.define({
  combine(s) {
    return $t(s, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, t) {
        let i = Object.assign({}, e);
        for (let n in t) {
          let r = i[n], o = t[n];
          i[n] = r ? (l, a, h) => r(l, a, h) || o(l, a, h) : o;
        }
        return i;
      }
    });
  }
});
class qn extends lt {
  constructor(e) {
    super(), this.number = e;
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function $n(s, e) {
  return s.state.facet(Ot).formatNumber(e, s.state);
}
const Kf = /* @__PURE__ */ Yi.compute([Ot], (s) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(Ff);
  },
  lineMarker(e, t, i) {
    return i.some((n) => n.toDOM) ? null : new qn($n(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: (e, t, i) => {
    for (let n of e.state.facet(zf)) {
      let r = n(e, t, i);
      if (r)
        return r;
    }
    return null;
  },
  lineMarkerChange: (e) => e.startState.facet(Ot) != e.state.facet(Ot),
  initialSpacer(e) {
    return new qn($n(e, ho(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let i = $n(t.view, ho(t.view.state.doc.lines));
    return i == e.number ? e : new qn(i);
  },
  domEventHandlers: s.facet(Ot).domEventHandlers,
  side: "before"
}));
function qf(s = {}) {
  return [
    Ot.of(s),
    Nf(),
    Kf
  ];
}
function ho(s) {
  let e = 9;
  for (; e < s; )
    e = e * 10 + 9;
  return e;
}
const $f = /* @__PURE__ */ new class extends lt {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), jf = /* @__PURE__ */ _i.compute(["selection"], (s) => {
  let e = [], t = -1;
  for (let i of s.selection.ranges) {
    let n = s.doc.lineAt(i.head).from;
    n > t && (t = n, e.push($f.range(n)));
  }
  return P.of(e);
});
function Uf() {
  return jf;
}
const Gf = 1024;
let _f = 0;
class jn {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class N {
  /**
  Create a new node prop type.
  */
  constructor(e = {}) {
    this.id = _f++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    }), this.combine = e.combine || null;
  }
  /**
  This is meant to be used with
  [`NodeSet.extend`](#common.NodeSet.extend) or
  [`LRParser.configure`](#lr.ParserConfig.props) to compute
  prop values for each node type in the set. Takes a [match
  object](#common.NodeType^match) or function that returns undefined
  if the node type doesn't get this prop, and the prop's value if
  it does.
  */
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = Se.match(e)), (t) => {
      let i = e(t);
      return i === void 0 ? null : [this, i];
    };
  }
}
N.closedBy = new N({ deserialize: (s) => s.split(" ") });
N.openedBy = new N({ deserialize: (s) => s.split(" ") });
N.group = new N({ deserialize: (s) => s.split(" ") });
N.isolate = new N({ deserialize: (s) => {
  if (s && s != "rtl" && s != "ltr" && s != "auto")
    throw new RangeError("Invalid value for isolate: " + s);
  return s || "auto";
} });
N.contextHash = new N({ perNode: !0 });
N.lookAhead = new N({ perNode: !0 });
N.mounted = new N({ perNode: !0 });
class ri {
  constructor(e, t, i, n = !1) {
    this.tree = e, this.overlay = t, this.parser = i, this.bracketed = n;
  }
  /**
  @internal
  */
  static get(e) {
    return e && e.props && e.props[N.mounted.id];
  }
}
const Yf = /* @__PURE__ */ Object.create(null);
class Se {
  /**
  @internal
  */
  constructor(e, t, i, n = 0) {
    this.name = e, this.props = t, this.id = i, this.flags = n;
  }
  /**
  Define a node type.
  */
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : Yf, i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), n = new Se(e.name || "", t, e.id, i);
    if (e.props) {
      for (let r of e.props)
        if (Array.isArray(r) || (r = r(n)), r) {
          if (r[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[r[0].id] = r[1];
        }
    }
    return n;
  }
  /**
  Retrieves a node prop for this type. Will return `undefined` if
  the prop isn't present on this node.
  */
  prop(e) {
    return this.props[e.id];
  }
  /**
  True when this is the top node of a grammar.
  */
  get isTop() {
    return (this.flags & 1) > 0;
  }
  /**
  True when this node is produced by a skip rule.
  */
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  /**
  Indicates whether this is an error node.
  */
  get isError() {
    return (this.flags & 4) > 0;
  }
  /**
  When true, this node type doesn't correspond to a user-declared
  named node, for example because it is used to cache repetition.
  */
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  /**
  Returns true when this node's name or one of its
  [groups](#common.NodeProp^group) matches the given string.
  */
  is(e) {
    if (typeof e == "string") {
      if (this.name == e)
        return !0;
      let t = this.prop(N.group);
      return t ? t.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  /**
  Create a function from node types to arbitrary values by
  specifying an object whose property names are node or
  [group](#common.NodeProp^group) names. Often useful with
  [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  names, separated by spaces, in a single property name to map
  multiple node names to a single value.
  */
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e)
      for (let n of i.split(" "))
        t[n] = e[i];
    return (i) => {
      for (let n = i.prop(N.group), r = -1; r < (n ? n.length : 0); r++) {
        let o = t[r < 0 ? i.name : n[r]];
        if (o)
          return o;
      }
    };
  }
}
Se.none = new Se(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
const Ii = /* @__PURE__ */ new WeakMap(), co = /* @__PURE__ */ new WeakMap();
var J;
(function(s) {
  s[s.ExcludeBuffers = 1] = "ExcludeBuffers", s[s.IncludeAnonymous = 2] = "IncludeAnonymous", s[s.IgnoreMounts = 4] = "IgnoreMounts", s[s.IgnoreOverlays = 8] = "IgnoreOverlays", s[s.EnterBracketed = 16] = "EnterBracketed";
})(J || (J = {}));
class ie {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(e, t, i, n, r) {
    if (this.type = e, this.children = t, this.positions = i, this.length = n, this.props = null, r && r.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of r)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  /**
  @internal
  */
  toString() {
    let e = ri.get(this);
    if (e && !e.overlay)
      return e.tree.toString();
    let t = "";
    for (let i of this.children) {
      let n = i.toString();
      n && (t && (t += ","), t += n);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(e = 0) {
    return new Ls(this.topNode, e);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(e, t = 0, i = 0) {
    let n = Ii.get(this) || this.topNode, r = new Ls(n);
    return r.moveTo(e, t), Ii.set(this, r._tree), r;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new ke(this, 0, 0, null);
  }
  /**
  Get the [syntax node](#common.SyntaxNode) at the given position.
  If `side` is -1, this will move into nodes that end at the
  position. If 1, it'll move into nodes that start at the
  position. With 0, it'll only enter nodes that cover the position
  from both sides.
  
  Note that this will not enter
  [overlays](#common.MountedTree.overlay), and you often want
  [`resolveInner`](#common.Tree.resolveInner) instead.
  */
  resolve(e, t = 0) {
    let i = di(Ii.get(this) || this.topNode, e, t, !1);
    return Ii.set(this, i), i;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(e, t = 0) {
    let i = di(co.get(this) || this.topNode, e, t, !0);
    return co.set(this, i), i;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(e, t = 0) {
    return Qf(this, e, t);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(e) {
    let { enter: t, leave: i, from: n = 0, to: r = this.length } = e, o = e.mode || 0, l = (o & J.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | J.IncludeAnonymous); ; ) {
      let h = !1;
      if (a.from <= r && a.to >= n && (!l && a.type.isAnonymous || t(a) !== !1)) {
        if (a.firstChild())
          continue;
        h = !0;
      }
      for (; h && i && (l || !a.type.isAnonymous) && i(a), !a.nextSibling(); ) {
        if (!a.parent())
          return;
        h = !0;
      }
    }
  }
  /**
  Get the value of the given [node prop](#common.NodeProp) for this
  node. Works with both per-node and per-type props.
  */
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  /**
  Returns the node's [per-node props](#common.NodeProp.perNode) in a
  format that can be passed to the [`Tree`](#common.Tree)
  constructor.
  */
  get propValues() {
    let e = [];
    if (this.props)
      for (let t in this.props)
        e.push([+t, this.props[t]]);
    return e;
  }
  /**
  Balance the direct children of this tree, producing a copy of
  which may have children grouped into subtrees with type
  [`NodeType.none`](#common.NodeType^none).
  */
  balance(e = {}) {
    return this.children.length <= 8 ? this : or(Se.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, i, n) => new ie(this.type, t, i, n, this.propValues), e.makeTree || ((t, i, n) => new ie(Se.none, t, i, n)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(e) {
    return Zf(e);
  }
}
ie.empty = new ie(Se.none, [], [], 0);
class sr {
  constructor(e, t) {
    this.buffer = e, this.index = t;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new sr(this.buffer, this.index);
  }
}
class at {
  /**
  Create a tree buffer.
  */
  constructor(e, t, i) {
    this.buffer = e, this.length = t, this.set = i;
  }
  /**
  @internal
  */
  get type() {
    return Se.none;
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; )
      e.push(this.childString(t)), t = this.buffer[t + 3];
    return e.join(",");
  }
  /**
  @internal
  */
  childString(e) {
    let t = this.buffer[e], i = this.buffer[e + 3], n = this.set.types[t], r = n.name;
    if (/\W/.test(r) && !n.isError && (r = JSON.stringify(r)), e += 4, i == e)
      return r;
    let o = [];
    for (; e < i; )
      o.push(this.childString(e)), e = this.buffer[e + 3];
    return r + "(" + o.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(e, t, i, n, r) {
    let { buffer: o } = this, l = -1;
    for (let a = e; a != t && !(sa(r, n, o[a + 1], o[a + 2]) && (l = a, i > 0)); a = o[a + 3])
      ;
    return l;
  }
  /**
  @internal
  */
  slice(e, t, i) {
    let n = this.buffer, r = new Uint16Array(t - e), o = 0;
    for (let l = e, a = 0; l < t; ) {
      r[a++] = n[l++], r[a++] = n[l++] - i;
      let h = r[a++] = n[l++] - i;
      r[a++] = n[l++] - e, o = Math.max(o, h);
    }
    return new at(r, o, this.set);
  }
}
function sa(s, e, t, i) {
  switch (s) {
    case -2:
      return t < e;
    case -1:
      return i >= e && t < e;
    case 0:
      return t < e && i > e;
    case 1:
      return t <= e && i > e;
    case 2:
      return i > e;
    case 4:
      return !0;
  }
}
function di(s, e, t, i) {
  for (var n; s.from == s.to || (t < 1 ? s.from >= e : s.from > e) || (t > -1 ? s.to <= e : s.to < e); ) {
    let o = !i && s instanceof ke && s.index < 0 ? null : s.parent;
    if (!o)
      return s;
    s = o;
  }
  let r = i ? 0 : J.IgnoreOverlays;
  if (i)
    for (let o = s, l = o.parent; l; o = l, l = o.parent)
      o instanceof ke && o.index < 0 && ((n = l.enter(e, t, r)) === null || n === void 0 ? void 0 : n.from) != o.from && (s = l);
  for (; ; ) {
    let o = s.enter(e, t, r);
    if (!o)
      return s;
    s = o;
  }
}
class ra {
  cursor(e = 0) {
    return new Ls(this, e);
  }
  getChild(e, t = null, i = null) {
    let n = fo(this, e, t, i);
    return n.length ? n[0] : null;
  }
  getChildren(e, t = null, i = null) {
    return fo(this, e, t, i);
  }
  resolve(e, t = 0) {
    return di(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return di(this, e, t, !0);
  }
  matchContext(e) {
    return Ds(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e), i = this;
    for (; t; ) {
      let n = t.lastChild;
      if (!n || n.to != t.to)
        break;
      n.type.isError && n.from == n.to ? (i = t, t = n.prevSibling) : t = n;
    }
    return i;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class ke extends ra {
  constructor(e, t, i, n) {
    super(), this._tree = e, this.from = t, this.index = i, this._parent = n;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, i, n, r = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, h = t > 0 ? l.length : -1; e != h; e += t) {
        let c = l[e], f = a[e] + o.from, u;
        if (!(!(r & J.EnterBracketed && c instanceof ie && (u = ri.get(c)) && !u.overlay && u.bracketed && i >= f && i <= f + c.length) && !sa(n, i, f, f + c.length))) {
          if (c instanceof at) {
            if (r & J.ExcludeBuffers)
              continue;
            let d = c.findChild(0, c.buffer.length, t, i - f, n);
            if (d > -1)
              return new nt(new Jf(o, c, e, f), null, d);
          } else if (r & J.IncludeAnonymous || !c.type.isAnonymous || rr(c)) {
            let d;
            if (!(r & J.IgnoreMounts) && (d = ri.get(c)) && !d.overlay)
              return new ke(d.tree, f, e, o);
            let p = new ke(c, f, e, o);
            return r & J.IncludeAnonymous || !p.type.isAnonymous ? p : p.nextChild(t < 0 ? c.children.length - 1 : 0, t, i, n, r);
          }
        }
      }
      if (r & J.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + t : e = t < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(
      0,
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.nextChild(
      0,
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  prop(e) {
    return this._tree.prop(e);
  }
  enter(e, t, i = 0) {
    let n;
    if (!(i & J.IgnoreOverlays) && (n = ri.get(this._tree)) && n.overlay) {
      let r = e - this.from, o = i & J.EnterBracketed && n.bracketed;
      for (let { from: l, to: a } of n.overlay)
        if ((t > 0 || o ? l <= r : l < r) && (t < 0 || o ? a >= r : a > r))
          return new ke(n.tree, n.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, i);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; )
      e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index + 1,
      1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  /**
  @internal
  */
  toString() {
    return this._tree.toString();
  }
}
function fo(s, e, t, i) {
  let n = s.cursor(), r = [];
  if (!n.firstChild())
    return r;
  if (t != null) {
    for (let o = !1; !o; )
      if (o = n.type.is(t), !n.nextSibling())
        return r;
  }
  for (; ; ) {
    if (i != null && n.type.is(i))
      return r;
    if (n.type.is(e) && r.push(n.node), !n.nextSibling())
      return i == null ? r : [];
  }
}
function Ds(s, e, t = e.length - 1) {
  for (let i = s; t >= 0; i = i.parent) {
    if (!i)
      return !1;
    if (!i.type.isAnonymous) {
      if (e[t] && e[t] != i.name)
        return !1;
      t--;
    }
  }
  return !0;
}
class Jf {
  constructor(e, t, i, n) {
    this.parent = e, this.buffer = t, this.index = i, this.start = n;
  }
}
class nt extends ra {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, i) {
    super(), this.context = e, this._parent = t, this.index = i, this.type = e.buffer.set.types[e.buffer.buffer[i]];
  }
  child(e, t, i) {
    let { buffer: n } = this.context, r = n.findChild(this.index + 4, n.buffer[this.index + 3], e, t - this.context.start, i);
    return r < 0 ? null : new nt(this.context, this, r);
  }
  get firstChild() {
    return this.child(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.child(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.child(
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.child(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  prop(e) {
    return this.type.prop(e);
  }
  enter(e, t, i = 0) {
    if (i & J.ExcludeBuffers)
      return null;
    let { buffer: n } = this.context, r = n.findChild(this.index + 4, n.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return r < 0 ? null : new nt(this.context, this, r);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + e,
      e,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer: e } = this.context, t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new nt(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new nt(this.context, this._parent, e.findChild(
      t,
      this.index,
      -1,
      0,
      4
      /* Side.DontCare */
    ));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], t = [], { buffer: i } = this.context, n = this.index + 4, r = i.buffer[this.index + 3];
    if (r > n) {
      let o = i.buffer[this.index + 1];
      e.push(i.slice(n, r, o)), t.push(0);
    }
    return new ie(this.type, e, t, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function oa(s) {
  if (!s.length)
    return null;
  let e = 0, t = s[0];
  for (let r = 1; r < s.length; r++) {
    let o = s[r];
    (o.from > t.from || o.to < t.to) && (t = o, e = r);
  }
  let i = t instanceof ke && t.index < 0 ? null : t.parent, n = s.slice();
  return i ? n[e] = i : n.splice(e, 1), new Xf(n, t);
}
class Xf {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return oa(this.heads);
  }
}
function Qf(s, e, t) {
  let i = s.resolveInner(e, t), n = null;
  for (let r = i instanceof ke ? i : i.context.parent; r; r = r.parent)
    if (r.index < 0) {
      let o = r.parent;
      (n || (n = [i])).push(o.resolve(e, t)), r = o;
    } else {
      let o = ri.get(r.tree);
      if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
        let l = new ke(o.tree, o.overlay[0].from + r.from, -1, r);
        (n || (n = [i])).push(di(l, e, t, !1));
      }
    }
  return n ? oa(n) : i;
}
class Ls {
  /**
  Shorthand for `.type.name`.
  */
  get name() {
    return this.type.name;
  }
  /**
  @internal
  */
  constructor(e, t = 0) {
    if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = t & ~J.EnterBracketed, e instanceof ke)
      this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let i = e._parent; i; i = i._parent)
        this.stack.unshift(i.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: i, buffer: n } = this.buffer;
    return this.type = t || n.set.types[n.buffer[e]], this.from = i + n.buffer[e + 1], this.to = i + n.buffer[e + 2], !0;
  }
  /**
  @internal
  */
  yield(e) {
    return e ? e instanceof ke ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
  }
  /**
  @internal
  */
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  /**
  @internal
  */
  enterChild(e, t, i) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, i, this.mode));
    let { buffer: n } = this.buffer, r = n.findChild(this.index + 4, n.buffer[this.index + 3], e, t - this.buffer.start, i);
    return r < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(r));
  }
  /**
  Move the cursor to this node's first child. When this returns
  false, the node has no child, and the cursor has not been moved.
  */
  firstChild() {
    return this.enterChild(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to this node's last child.
  */
  lastChild() {
    return this.enterChild(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to the first child that ends after `pos`.
  */
  childAfter(e) {
    return this.enterChild(
      1,
      e,
      2
      /* Side.After */
    );
  }
  /**
  Move to the last child that starts before `pos`.
  */
  childBefore(e) {
    return this.enterChild(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  /**
  Move the cursor to the child around `pos`. If side is -1 the
  child may end at that position, when 1 it may start there. This
  will also enter [overlaid](#common.MountedTree.overlay)
  [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  set to false.
  */
  enter(e, t, i = this.mode) {
    return this.buffer ? i & J.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, i));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & J.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & J.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  /**
  @internal
  */
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
    let { buffer: t } = this.buffer, i = this.stack.length - 1;
    if (e < 0) {
      let n = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != n)
        return this.yieldBuf(t.findChild(
          n,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let n = t.buffer[this.index + 3];
      if (n < (i < 0 ? t.buffer.length : t.buffer[this.stack[i] + 3]))
        return this.yieldBuf(n);
    }
    return i < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
  }
  /**
  Move to this node's next sibling, if any.
  */
  nextSibling() {
    return this.sibling(1);
  }
  /**
  Move to this node's previous sibling, if any.
  */
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t, i, { buffer: n } = this;
    if (n) {
      if (e > 0) {
        if (this.index < n.buffer.buffer.length)
          return !1;
      } else
        for (let r = 0; r < this.index; r++)
          if (n.buffer.buffer[r + 3] < this.index)
            return !1;
      ({ index: t, parent: i } = n);
    } else
      ({ index: t, _parent: i } = this._tree);
    for (; i; { index: t, _parent: i } = i)
      if (t > -1)
        for (let r = t + e, o = e < 0 ? -1 : i._tree.children.length; r != o; r += e) {
          let l = i._tree.children[r];
          if (this.mode & J.IncludeAnonymous || l instanceof at || !l.type.isAnonymous || rr(l))
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(
      e,
      0,
      4
      /* Side.DontCare */
    ))
      return !0;
    for (; ; ) {
      if (this.sibling(e))
        return !0;
      if (this.atLastNode(e) || !this.parent())
        return !1;
    }
  }
  /**
  Move to the next node in a
  [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  traversal, going from a node to its first child or, if the
  current node is empty or `enter` is false, its next sibling or
  the next sibling of the first parent node that has one.
  */
  next(e = !0) {
    return this.move(1, e);
  }
  /**
  Move to the next node in a last-to-first pre-order traversal. A
  node is followed by its last child or, if it has none, its
  previous sibling or the previous sibling of the first parent
  node that has one.
  */
  prev(e = !0) {
    return this.move(-1, e);
  }
  /**
  Move the cursor to the innermost node that covers `pos`. If
  `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  it will enter nodes that start at `pos`.
  */
  moveTo(e, t = 0) {
    for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(); )
      ;
    for (; this.enterChild(1, e, t); )
      ;
    return this;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) at the cursor's current
  position.
  */
  get node() {
    if (!this.buffer)
      return this._tree;
    let e = this.bufferNode, t = null, i = 0;
    if (e && e.context == this.buffer)
      e: for (let n = this.index, r = this.stack.length; r >= 0; ) {
        for (let o = e; o; o = o._parent)
          if (o.index == n) {
            if (n == this.index)
              return o;
            t = o, i = r + 1;
            break e;
          }
        n = this.stack[--r];
      }
    for (let n = i; n < this.stack.length; n++)
      t = new nt(this.buffer, t, this.stack[n]);
    return this.bufferNode = new nt(this.buffer, t, this.index);
  }
  /**
  Get the [tree](#common.Tree) that represents the current node, if
  any. Will return null when the node is in a [tree
  buffer](#common.TreeBuffer).
  */
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  /**
  Iterate over the current node and all its descendants, calling
  `enter` when entering a node and `leave`, if given, when leaving
  one. When `enter` returns `false`, any children of that node are
  skipped, and `leave` isn't called for it.
  */
  iterate(e, t) {
    for (let i = 0; ; ) {
      let n = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (n = !0);
      }
      for (; ; ) {
        if (n && t && t(this), n = this.type.isAnonymous, !i)
          return;
        if (this.nextSibling())
          break;
        this.parent(), i--, n = !0;
      }
    }
  }
  /**
  Test whether the current node matches a given context—a sequence
  of direct parent node names. Empty strings in the context array
  are treated as wildcards.
  */
  matchContext(e) {
    if (!this.buffer)
      return Ds(this.node.parent, e);
    let { buffer: t } = this.buffer, { types: i } = t.set;
    for (let n = e.length - 1, r = this.stack.length - 1; n >= 0; r--) {
      if (r < 0)
        return Ds(this._tree, e, n);
      let o = i[t.buffer[this.stack[r]]];
      if (!o.isAnonymous) {
        if (e[n] && e[n] != o.name)
          return !1;
        n--;
      }
    }
    return !0;
  }
}
function rr(s) {
  return s.children.some((e) => e instanceof at || !e.type.isAnonymous || rr(e));
}
function Zf(s) {
  var e;
  let { buffer: t, nodeSet: i, maxBufferLength: n = Gf, reused: r = [], minRepeatType: o = i.types.length } = s, l = Array.isArray(t) ? new sr(t, t.length) : t, a = i.types, h = 0, c = 0;
  function f(C, v, k, D, R, z) {
    let { id: E, start: B, end: F, size: H } = l, $ = c, le = h;
    if (H < 0)
      if (l.next(), H == -1) {
        let Ue = r[E];
        k.push(Ue), D.push(B - C);
        return;
      } else if (H == -3) {
        h = E;
        return;
      } else if (H == -4) {
        c = E;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${H}`);
    let ge = a[E], Ee, Z, ye = B - C;
    if (F - B <= n && (Z = m(l.pos - v, R))) {
      let Ue = new Uint16Array(Z.size - Z.skip), be = l.pos - Z.size, Re = Ue.length;
      for (; l.pos > be; )
        Re = y(Z.start, Ue, Re);
      Ee = new at(Ue, F - Z.start, i), ye = Z.start - C;
    } else {
      let Ue = l.pos - H;
      l.next();
      let be = [], Re = [], ut = E >= o ? E : -1, Ct = 0, xi = F;
      for (; l.pos > Ue; )
        ut >= 0 && l.id == ut && l.size >= 0 ? (l.end <= xi - n && (p(be, Re, B, Ct, l.end, xi, ut, $, le), Ct = be.length, xi = l.end), l.next()) : z > 2500 ? u(B, Ue, be, Re) : f(B, Ue, be, Re, ut, z + 1);
      if (ut >= 0 && Ct > 0 && Ct < be.length && p(be, Re, B, Ct, B, xi, ut, $, le), be.reverse(), Re.reverse(), ut > -1 && Ct > 0) {
        let ur = d(ge, le);
        Ee = or(ge, be, Re, 0, be.length, 0, F - B, ur, ur);
      } else
        Ee = g(ge, be, Re, F - B, $ - F, le);
    }
    k.push(Ee), D.push(ye);
  }
  function u(C, v, k, D) {
    let R = [], z = 0, E = -1;
    for (; l.pos > v; ) {
      let { id: B, start: F, end: H, size: $ } = l;
      if ($ > 4)
        l.next();
      else {
        if (E > -1 && F < E)
          break;
        E < 0 && (E = H - n), R.push(B, F, H), z++, l.next();
      }
    }
    if (z) {
      let B = new Uint16Array(z * 4), F = R[R.length - 2];
      for (let H = R.length - 3, $ = 0; H >= 0; H -= 3)
        B[$++] = R[H], B[$++] = R[H + 1] - F, B[$++] = R[H + 2] - F, B[$++] = $;
      k.push(new at(B, R[2] - F, i)), D.push(F - C);
    }
  }
  function d(C, v) {
    return (k, D, R) => {
      let z = 0, E = k.length - 1, B, F;
      if (E >= 0 && (B = k[E]) instanceof ie) {
        if (!E && B.type == C && B.length == R)
          return B;
        (F = B.prop(N.lookAhead)) && (z = D[E] + B.length + F);
      }
      return g(C, k, D, R, z, v);
    };
  }
  function p(C, v, k, D, R, z, E, B, F) {
    let H = [], $ = [];
    for (; C.length > D; )
      H.push(C.pop()), $.push(v.pop() + k - R);
    C.push(g(i.types[E], H, $, z - R, B - z, F)), v.push(R - k);
  }
  function g(C, v, k, D, R, z, E) {
    if (z) {
      let B = [N.contextHash, z];
      E = E ? [B].concat(E) : [B];
    }
    if (R > 25) {
      let B = [N.lookAhead, R];
      E = E ? [B].concat(E) : [B];
    }
    return new ie(C, v, k, D, E);
  }
  function m(C, v) {
    let k = l.fork(), D = 0, R = 0, z = 0, E = k.end - n, B = { size: 0, start: 0, skip: 0 };
    e: for (let F = k.pos - C; k.pos > F; ) {
      let H = k.size;
      if (k.id == v && H >= 0) {
        B.size = D, B.start = R, B.skip = z, z += 4, D += 4, k.next();
        continue;
      }
      let $ = k.pos - H;
      if (H < 0 || $ < F || k.start < E)
        break;
      let le = k.id >= o ? 4 : 0, ge = k.start;
      for (k.next(); k.pos > $; ) {
        if (k.size < 0)
          if (k.size == -3 || k.size == -4)
            le += 4;
          else
            break e;
        else k.id >= o && (le += 4);
        k.next();
      }
      R = ge, D += H, z += le;
    }
    return (v < 0 || D == C) && (B.size = D, B.start = R, B.skip = z), B.size > 4 ? B : void 0;
  }
  function y(C, v, k) {
    let { id: D, start: R, end: z, size: E } = l;
    if (l.next(), E >= 0 && D < o) {
      let B = k;
      if (E > 4) {
        let F = l.pos - (E - 4);
        for (; l.pos > F; )
          k = y(C, v, k);
      }
      v[--k] = B, v[--k] = z - C, v[--k] = R - C, v[--k] = D;
    } else E == -3 ? h = D : E == -4 && (c = D);
    return k;
  }
  let A = [], b = [];
  for (; l.pos > 0; )
    f(s.start || 0, s.bufferStart || 0, A, b, -1, 0);
  let T = (e = s.length) !== null && e !== void 0 ? e : A.length ? b[0] + A[0].length : 0;
  return new ie(a[s.topID], A.reverse(), b.reverse(), T);
}
const uo = /* @__PURE__ */ new WeakMap();
function Ji(s, e) {
  if (!s.isAnonymous || e instanceof at || e.type != s)
    return 1;
  let t = uo.get(e);
  if (t == null) {
    t = 1;
    for (let i of e.children) {
      if (i.type != s || !(i instanceof ie)) {
        t = 1;
        break;
      }
      t += Ji(s, i);
    }
    uo.set(e, t);
  }
  return t;
}
function or(s, e, t, i, n, r, o, l, a) {
  let h = 0;
  for (let p = i; p < n; p++)
    h += Ji(s, e[p]);
  let c = Math.ceil(
    h * 1.5 / 8
    /* Balance.BranchFactor */
  ), f = [], u = [];
  function d(p, g, m, y, A) {
    for (let b = m; b < y; ) {
      let T = b, C = g[b], v = Ji(s, p[b]);
      for (b++; b < y; b++) {
        let k = Ji(s, p[b]);
        if (v + k >= c)
          break;
        v += k;
      }
      if (b == T + 1) {
        if (v > c) {
          let k = p[T];
          d(k.children, k.positions, 0, k.children.length, g[T] + A);
          continue;
        }
        f.push(p[T]);
      } else {
        let k = g[b - 1] + p[b - 1].length - C;
        f.push(or(s, p, g, T, b, C, k, null, a));
      }
      u.push(C + A - r);
    }
  }
  return d(e, t, i, n, 0), (l || a)(f, u, o);
}
class wt {
  /**
  Construct a tree fragment. You'll usually want to use
  [`addTree`](#common.TreeFragment^addTree) and
  [`applyChanges`](#common.TreeFragment^applyChanges) instead of
  calling this directly.
  */
  constructor(e, t, i, n, r = !1, o = !1) {
    this.from = e, this.to = t, this.tree = i, this.offset = n, this.open = (r ? 1 : 0) | (o ? 2 : 0);
  }
  /**
  Whether the start of the fragment represents the start of a
  parse, or the end of a change. (In the second case, it may not
  be safe to reuse some nodes at the start, depending on the
  parsing algorithm.)
  */
  get openStart() {
    return (this.open & 1) > 0;
  }
  /**
  Whether the end of the fragment represents the end of a
  full-document parse, or the start of a change.
  */
  get openEnd() {
    return (this.open & 2) > 0;
  }
  /**
  Create a set of fragments from a freshly parsed tree, or update
  an existing set of fragments by replacing the ones that overlap
  with a tree with content from the new tree. When `partial` is
  true, the parse is treated as incomplete, and the resulting
  fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
  true.
  */
  static addTree(e, t = [], i = !1) {
    let n = [new wt(0, e.length, e, 0, !1, i)];
    for (let r of t)
      r.to > e.length && n.push(r);
    return n;
  }
  /**
  Apply a set of edits to an array of fragments, removing or
  splitting fragments as necessary to remove edited ranges, and
  adjusting offsets for fragments that moved.
  */
  static applyChanges(e, t, i = 128) {
    if (!t.length)
      return e;
    let n = [], r = 1, o = e.length ? e[0] : null;
    for (let l = 0, a = 0, h = 0; ; l++) {
      let c = l < t.length ? t[l] : null, f = c ? c.fromA : 1e9;
      if (f - a >= i)
        for (; o && o.from < f; ) {
          let u = o;
          if (a >= u.from || f <= u.to || h) {
            let d = Math.max(u.from, a) - h, p = Math.min(u.to, f) - h;
            u = d >= p ? null : new wt(d, p, u.tree, u.offset + h, l > 0, !!c);
          }
          if (u && n.push(u), o.to > f)
            break;
          o = r < e.length ? e[r++] : null;
        }
      if (!c)
        break;
      a = c.toA, h = c.toA - c.toB;
    }
    return n;
  }
}
class eu {
  /**
  Start a parse, returning a [partial parse](#common.PartialParse)
  object. [`fragments`](#common.TreeFragment) can be passed in to
  make the parse incremental.
  
  By default, the entire input is parsed. You can pass `ranges`,
  which should be a sorted array of non-empty, non-overlapping
  ranges, to parse only those ranges. The tree returned in that
  case will start at `ranges[0].from`.
  */
  startParse(e, t, i) {
    return typeof e == "string" && (e = new tu(e)), i = i ? i.length ? i.map((n) => new jn(n.from, n.to)) : [new jn(0, 0)] : [new jn(0, e.length)], this.createParse(e, t || [], i);
  }
  /**
  Run a full parse, returning the resulting tree.
  */
  parse(e, t, i) {
    let n = this.startParse(e, t, i);
    for (; ; ) {
      let r = n.advance();
      if (r)
        return r;
    }
  }
}
class tu {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
new N({ perNode: !0 });
let iu = 0;
class we {
  /**
  @internal
  */
  constructor(e, t, i, n) {
    this.name = e, this.set = t, this.base = i, this.modified = n, this.id = iu++;
  }
  toString() {
    let { name: e } = this;
    for (let t of this.modified)
      t.name && (e = `${t.name}(${e})`);
    return e;
  }
  static define(e, t) {
    let i = typeof e == "string" ? e : "?";
    if (e instanceof we && (t = e), t?.base)
      throw new Error("Can not derive from a modified tag");
    let n = new we(i, [], null, []);
    if (n.set.push(n), t)
      for (let r of t.set)
        n.set.push(r);
    return n;
  }
  /**
  Define a tag _modifier_, which is a function that, given a tag,
  will return a tag that is a subtag of the original. Applying the
  same modifier to a twice tag will return the same value (`m1(t1)
  == m1(t1)`) and applying multiple modifiers will, regardless or
  order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  
  When multiple modifiers are applied to a given base tag, each
  smaller set of modifiers is registered as a parent, so that for
  example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  `m1(m3(t1)`, and so on.
  */
  static defineModifier(e) {
    let t = new fn(e);
    return (i) => i.modified.indexOf(t) > -1 ? i : fn.get(i.base || i, i.modified.concat(t).sort((n, r) => n.id - r.id));
  }
}
let nu = 0;
class fn {
  constructor(e) {
    this.name = e, this.instances = [], this.id = nu++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let i = t[0].instances.find((l) => l.base == e && su(t, l.modified));
    if (i)
      return i;
    let n = [], r = new we(e.name, n, e, t);
    for (let l of t)
      l.instances.push(r);
    let o = ru(t);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of o)
          n.push(fn.get(l, a));
    return r;
  }
}
function su(s, e) {
  return s.length == e.length && s.every((t, i) => t == e[i]);
}
function ru(s) {
  let e = [[]];
  for (let t = 0; t < s.length; t++)
    for (let i = 0, n = e.length; i < n; i++)
      e.push(e[i].concat(s[t]));
  return e.sort((t, i) => i.length - t.length);
}
function ou(s) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in s) {
    let i = s[t];
    Array.isArray(i) || (i = [i]);
    for (let n of t.split(" "))
      if (n) {
        let r = [], o = 2, l = n;
        for (let f = 0; ; ) {
          if (l == "..." && f > 0 && f + 3 == n.length) {
            o = 1;
            break;
          }
          let u = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!u)
            throw new RangeError("Invalid path: " + n);
          if (r.push(u[0] == "*" ? "" : u[0][0] == '"' ? JSON.parse(u[0]) : u[0]), f += u[0].length, f == n.length)
            break;
          let d = n[f++];
          if (f == n.length && d == "!") {
            o = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + n);
          l = n.slice(f);
        }
        let a = r.length - 1, h = r[a];
        if (!h)
          throw new RangeError("Invalid path: " + n);
        let c = new un(i, o, a > 0 ? r.slice(0, a) : null);
        e[h] = c.sort(e[h]);
      }
  }
  return lu.add(e);
}
const lu = new N({
  combine(s, e) {
    let t, i, n;
    for (; s || e; ) {
      if (!s || e && s.depth >= e.depth ? (n = e, e = e.next) : (n = s, s = s.next), t && t.mode == n.mode && !n.context && !t.context)
        continue;
      let r = new un(n.tags, n.mode, n.context);
      t ? t.next = r : i = r, t = r;
    }
    return i;
  }
});
class un {
  constructor(e, t, i, n) {
    this.tags = e, this.mode = t, this.context = i, this.next = n;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
un.empty = new un([], 2, null);
function au(s, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r of s)
    if (!Array.isArray(r.tag))
      t[r.tag.id] = r.class;
    else
      for (let o of r.tag)
        t[o.id] = r.class;
  let { scope: i, all: n = null } = {};
  return {
    style: (r) => {
      let o = n;
      for (let l of r)
        for (let a of l.set) {
          let h = t[a.id];
          if (h) {
            o = o ? o + " " + h : h;
            break;
          }
        }
      return o;
    },
    scope: i
  };
}
const x = we.define, Ni = x(), Qe = x(), po = x(Qe), go = x(Qe), Ze = x(), Hi = x(Ze), Un = x(Ze), He = x(), dt = x(He), Ie = x(), Ne = x(), Es = x(), _t = x(Es), Wi = x(), L = {
  /**
  A comment.
  */
  comment: Ni,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: x(Ni),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: x(Ni),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: x(Ni),
  /**
  Any kind of identifier.
  */
  name: Qe,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: x(Qe),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: po,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: x(po),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: go,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: x(go),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: x(Qe),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: x(Qe),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: x(Qe),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: x(Qe),
  /**
  A literal value.
  */
  literal: Ze,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: Hi,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: x(Hi),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: x(Hi),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: x(Hi),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: Un,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: x(Un),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: x(Un),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: x(Ze),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: x(Ze),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: x(Ze),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: x(Ze),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: x(Ze),
  /**
  A language keyword.
  */
  keyword: Ie,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: x(Ie),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: x(Ie),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: x(Ie),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: x(Ie),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: x(Ie),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: x(Ie),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: x(Ie),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: x(Ie),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: x(Ie),
  /**
  An operator.
  */
  operator: Ne,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: x(Ne),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: x(Ne),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: x(Ne),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: x(Ne),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: x(Ne),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: x(Ne),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: x(Ne),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: x(Ne),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: x(Ne),
  /**
  Program or markup punctuation.
  */
  punctuation: Es,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: x(Es),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: _t,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: x(_t),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: x(_t),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: x(_t),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: x(_t),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: He,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: dt,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: x(dt),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: x(dt),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: x(dt),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: x(dt),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: x(dt),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: x(dt),
  /**
  A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
  */
  contentSeparator: x(He),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: x(He),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: x(He),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: x(He),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: x(He),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: x(He),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: x(He),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: x(He),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: x(),
  /**
  Deleted text.
  */
  deleted: x(),
  /**
  Changed text.
  */
  changed: x(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: x(),
  /**
  Metadata or meta-instruction.
  */
  meta: Wi,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: x(Wi),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: x(Wi),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: x(Wi),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: we.defineModifier("definition"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: we.defineModifier("constant"),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: we.defineModifier("function"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: we.defineModifier("standard"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: we.defineModifier("local"),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: we.defineModifier("special")
};
for (let s in L) {
  let e = L[s];
  e instanceof we && (e.name = s);
}
au([
  { tag: L.link, class: "tok-link" },
  { tag: L.heading, class: "tok-heading" },
  { tag: L.emphasis, class: "tok-emphasis" },
  { tag: L.strong, class: "tok-strong" },
  { tag: L.keyword, class: "tok-keyword" },
  { tag: L.atom, class: "tok-atom" },
  { tag: L.bool, class: "tok-bool" },
  { tag: L.url, class: "tok-url" },
  { tag: L.labelName, class: "tok-labelName" },
  { tag: L.inserted, class: "tok-inserted" },
  { tag: L.deleted, class: "tok-deleted" },
  { tag: L.literal, class: "tok-literal" },
  { tag: L.string, class: "tok-string" },
  { tag: L.number, class: "tok-number" },
  { tag: [L.regexp, L.escape, L.special(L.string)], class: "tok-string2" },
  { tag: L.variableName, class: "tok-variableName" },
  { tag: L.local(L.variableName), class: "tok-variableName tok-local" },
  { tag: L.definition(L.variableName), class: "tok-variableName tok-definition" },
  { tag: L.special(L.variableName), class: "tok-variableName2" },
  { tag: L.definition(L.propertyName), class: "tok-propertyName tok-definition" },
  { tag: L.typeName, class: "tok-typeName" },
  { tag: L.namespace, class: "tok-namespace" },
  { tag: L.className, class: "tok-className" },
  { tag: L.macroName, class: "tok-macroName" },
  { tag: L.propertyName, class: "tok-propertyName" },
  { tag: L.operator, class: "tok-operator" },
  { tag: L.comment, class: "tok-comment" },
  { tag: L.meta, class: "tok-meta" },
  { tag: L.invalid, class: "tok-invalid" },
  { tag: L.punctuation, class: "tok-punctuation" }
]);
var Gn;
const Vi = /* @__PURE__ */ new N(), hu = /* @__PURE__ */ new N();
class Ye {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(e, t, i = [], n = "") {
    this.data = e, this.name = n, V.prototype.hasOwnProperty("tree") || Object.defineProperty(V.prototype, "tree", { get() {
      return ht(this);
    } }), this.parser = t, this.extension = [
      Ft.of(this),
      V.languageData.of((r, o, l) => {
        let a = mo(r, o, l), h = a.type.prop(Vi);
        if (!h)
          return [];
        let c = r.facet(h), f = a.type.prop(hu);
        if (f) {
          let u = a.resolve(o - a.from, l);
          for (let d of f)
            if (d.test(u, r)) {
              let p = r.facet(d.facet);
              return d.type == "replace" ? p : p.concat(c);
            }
        }
        return c;
      })
    ].concat(i);
  }
  /**
  Query whether this language is active at the given position.
  */
  isActiveAt(e, t, i = -1) {
    return mo(e, t, i).type.prop(Vi) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(e) {
    let t = e.facet(Ft);
    if (t?.data == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting)
      return [];
    let i = [], n = (r, o) => {
      if (r.prop(Vi) == this.data) {
        i.push({ from: o, to: o + r.length });
        return;
      }
      let l = r.prop(N.mounted);
      if (l) {
        if (l.tree.prop(Vi) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              i.push({ from: a.from + o, to: a.to + o });
          else
            i.push({ from: o, to: o + r.length });
          return;
        } else if (l.overlay) {
          let a = i.length;
          if (n(l.tree, l.overlay[0].from + o), i.length > a)
            return;
        }
      }
      for (let a = 0; a < r.children.length; a++) {
        let h = r.children[a];
        h instanceof ie && n(h, r.positions[a] + o);
      }
    };
    return n(ht(e), 0), i;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
Ye.setState = /* @__PURE__ */ q.define();
function mo(s, e, t) {
  let i = s.facet(Ft), n = ht(s).topNode;
  if (!i || i.allowsNesting)
    for (let r = n; r; r = r.enter(e, t, J.ExcludeBuffers | J.EnterBracketed))
      r.type.isTop && (n = r);
  return n;
}
function ht(s) {
  let e = s.field(Ye.state, !1);
  return e ? e.tree : ie.empty;
}
class cu {
  /**
  Create an input object for the given document.
  */
  constructor(e) {
    this.doc = e, this.cursorPos = 0, this.string = "", this.cursor = e.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(e, t) {
    let i = this.cursorPos - this.string.length;
    return e < i || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - i, t - i);
  }
}
let Yt = null;
class dn {
  constructor(e, t, i = [], n, r, o, l, a) {
    this.parser = e, this.state = t, this.fragments = i, this.tree = n, this.treeLen = r, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new dn(e, t, [], ie.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new cu(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != ie.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var i;
      if (typeof e == "number") {
        let n = Date.now() + e;
        e = () => Date.now() > n;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let n = this.parse.advance();
        if (n)
          if (this.fragments = this.withoutTempSkipped(wt.addTree(n, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = n, this.parse = null, this.treeLen < (t ?? this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (e())
          return !1;
      }
    });
  }
  /**
  @internal
  */
  takeTree() {
    let e, t;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(t = this.parse.advance()); )
        ;
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(wt.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let t = Yt;
    Yt = this;
    try {
      return e();
    } finally {
      Yt = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); )
      e = yo(e, t.from, t.to);
    return e;
  }
  /**
  @internal
  */
  changes(e, t) {
    let { fragments: i, tree: n, treeLen: r, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((h, c, f, u) => a.push({ fromA: h, toA: c, fromB: f, toB: u })), i = wt.applyChanges(i, a), n = ie.empty, r = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let h of this.skipped) {
          let c = e.mapPos(h.from, 1), f = e.mapPos(h.to, -1);
          c < f && l.push({ from: c, to: f });
        }
      }
    }
    return new dn(this.parser, t, i, n, r, o, l, this.scheduleOn);
  }
  /**
  @internal
  */
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return !1;
    this.viewport = e;
    let t = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: n, to: r } = this.skipped[i];
      n < e.to && r > e.from && (this.fragments = yo(this.fragments, n, r), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= t ? !1 : (this.reset(), !0);
  }
  /**
  @internal
  */
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  /**
  Notify the parse scheduler that the given region was skipped
  because it wasn't in view, and the parse should be restarted
  when it comes into view.
  */
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  /**
  Returns a parser intended to be used as placeholder when
  asynchronously loading a nested parser. It'll skip its input and
  mark it as not-really-parsed, so that the next update will parse
  it again.
  
  When `until` is given, a reparse will be scheduled when that
  promise resolves.
  */
  static getSkippingParser(e) {
    return new class extends eu {
      createParse(t, i, n) {
        let r = n[0].from, o = n[n.length - 1].to;
        return {
          parsedPos: r,
          advance() {
            let a = Yt;
            if (a) {
              for (let h of n)
                a.tempSkipped.push(h);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return this.parsedPos = o, new ie(Se.none, [], [], o - r);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  /**
  @internal
  */
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  /**
  Get the context for the current parse, or `null` if no editor
  parse is in progress.
  */
  static get() {
    return Yt;
  }
}
function yo(s, e, t) {
  return wt.applyChanges(s, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class Vt {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), i = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, i) || t.takeTree(), new Vt(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), i = dn.create(e.facet(Ft).parser, e, { from: 0, to: t });
    return i.work(20, t) || i.takeTree(), new Vt(i);
  }
}
Ye.state = /* @__PURE__ */ je.define({
  create: Vt.init,
  update(s, e) {
    for (let t of e.effects)
      if (t.is(Ye.setState))
        return t.value;
    return e.startState.facet(Ft) != e.state.facet(Ft) ? Vt.init(e.state) : s.apply(e);
  }
});
let la = (s) => {
  let e = setTimeout(
    () => s(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (la = (s) => {
  let e = -1, t = setTimeout(
    () => {
      e = requestIdleCallback(s, {
        timeout: 400
        /* Work.MinPause */
      });
    },
    100
    /* Work.MinPause */
  );
  return () => e < 0 ? clearTimeout(t) : cancelIdleCallback(e);
});
const _n = typeof navigator < "u" && (!((Gn = navigator.scheduling) === null || Gn === void 0) && Gn.isInputPending) ? () => navigator.scheduling.isInputPending() : null, fu = /* @__PURE__ */ ce.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(Ye.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, t = e.field(Ye.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = la(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: n } } = this.view, r = i.field(Ye.state);
    if (r.tree == r.context.tree && r.context.isDone(
      n + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !_n ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = r.context.treeLen < n && i.doc.length > n + 1e3, a = r.context.work(() => _n && _n() || Date.now() > o, n + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (r.context.takeTree(), this.view.dispatch({ effects: Ye.setState.of(new Vt(r.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(r.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => Te(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), Ft = /* @__PURE__ */ M.define({
  combine(s) {
    return s.length ? s[0] : null;
  },
  enables: (s) => [
    Ye.state,
    fu,
    O.contentAttributes.compute([s], (e) => {
      let t = e.facet(s);
      return t && t.name ? { "data-language": t.name } : {};
    })
  ]
}), uu = /* @__PURE__ */ M.define(), An = /* @__PURE__ */ M.define({
  combine: (s) => {
    if (!s.length)
      return "  ";
    let e = s[0];
    if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(s[0]));
    return e;
  }
});
function zt(s) {
  let e = s.facet(An);
  return e.charCodeAt(0) == 9 ? s.tabSize * e.length : e.length;
}
function pn(s, e) {
  let t = "", i = s.tabSize, n = s.facet(An)[0];
  if (n == "	") {
    for (; e >= i; )
      t += "	", e -= i;
    n = " ";
  }
  for (let r = 0; r < e; r++)
    t += n;
  return t;
}
function aa(s, e) {
  s instanceof V && (s = new Mn(s));
  for (let i of s.state.facet(uu)) {
    let n = i(s, e);
    if (n !== void 0)
      return n;
  }
  let t = ht(s.state);
  return t.length >= e ? pu(s, t, e) : null;
}
class Mn {
  /**
  Create an indent context.
  */
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = zt(e);
  }
  /**
  Get a description of the line at the given position, taking
  [simulated line
  breaks](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  into account. If there is such a break at `pos`, the `bias`
  argument determines whether the part of the line line before or
  after the break is used.
  */
  lineAt(e, t = 1) {
    let i = this.state.doc.lineAt(e), { simulateBreak: n, simulateDoubleBreak: r } = this.options;
    return n != null && n >= i.from && n <= i.to ? r && n == e ? { text: "", from: e } : (t < 0 ? n < e : n <= e) ? { text: i.text.slice(n - i.from), from: n } : { text: i.text.slice(0, n - i.from), from: i.from } : i;
  }
  /**
  Get the text directly after `pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: i, from: n } = this.lineAt(e, t);
    return i.slice(e - n, Math.min(i.length, e + 100 - n));
  }
  /**
  Find the column for the given position.
  */
  column(e, t = 1) {
    let { text: i, from: n } = this.lineAt(e, t), r = this.countColumn(i, e - n), o = this.options.overrideIndentation ? this.options.overrideIndentation(n) : -1;
    return o > -1 && (r += o - this.countColumn(i, i.search(/\S|$/))), r;
  }
  /**
  Find the column position (taking tabs into account) of the given
  position in the given string.
  */
  countColumn(e, t = e.length) {
    return bn(e, this.state.tabSize, t);
  }
  /**
  Find the indentation column of the line at the given point.
  */
  lineIndent(e, t = 1) {
    let { text: i, from: n } = this.lineAt(e, t), r = this.options.overrideIndentation;
    if (r) {
      let o = r(n);
      if (o > -1)
        return o;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  /**
  Returns the [simulated line
  break](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  for this context, if any.
  */
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const du = /* @__PURE__ */ new N();
function pu(s, e, t) {
  let i = e.resolveStack(t), n = e.resolveInner(t, -1).resolve(t, 0).enterUnfinishedNodesBefore(t);
  if (n != i.node) {
    let r = [];
    for (let o = n; o && !(o.from < i.node.from || o.to > i.node.to || o.from == i.node.from && o.type == i.node.type); o = o.parent)
      r.push(o);
    for (let o = r.length - 1; o >= 0; o--)
      i = { node: r[o], next: i };
  }
  return ha(i, s, t);
}
function ha(s, e, t) {
  for (let i = s; i; i = i.next) {
    let n = mu(i.node);
    if (n)
      return n(lr.create(e, t, i));
  }
  return 0;
}
function gu(s) {
  return s.pos == s.options.simulateBreak && s.options.simulateDoubleBreak;
}
function mu(s) {
  let e = s.type.prop(du);
  if (e)
    return e;
  let t = s.firstChild, i;
  if (t && (i = t.type.prop(N.closedBy))) {
    let n = s.lastChild, r = n && i.indexOf(n.name) > -1;
    return (o) => xu(o, !0, 1, void 0, r && !gu(o) ? n.from : void 0);
  }
  return s.parent == null ? yu : null;
}
function yu() {
  return 0;
}
class lr extends Mn {
  constructor(e, t, i) {
    super(e.state, e.options), this.base = e, this.pos = t, this.context = i;
  }
  /**
  The syntax tree node to which the indentation strategy
  applies.
  */
  get node() {
    return this.context.node;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new lr(e, t, i);
  }
  /**
  Get the text directly after `this.pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  /**
  Get the indentation at the reference line for `this.node`, which
  is the line on which it starts, unless there is a node that is
  _not_ a parent of this node covering the start of that line. If
  so, the line at the start of that node is tried, again skipping
  on if it is covered by another such node.
  */
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  /**
  Get the indentation for the reference line of the given node
  (see [`baseIndent`](https://codemirror.net/6/docs/ref/#language.TreeIndentContext.baseIndent)).
  */
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    for (; ; ) {
      let i = e.resolve(t.from);
      for (; i.parent && i.parent.from == i.from; )
        i = i.parent;
      if (bu(i, e))
        break;
      t = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(t.from);
  }
  /**
  Continue looking for indentations in the node's parent nodes,
  and return the result of that.
  */
  continue() {
    return ha(this.context.next, this.base, this.pos);
  }
}
function bu(s, e) {
  for (let t = e; t; t = t.parent)
    if (s == t)
      return !0;
  return !1;
}
function wu(s) {
  let e = s.node, t = e.childAfter(e.from), i = e.lastChild;
  if (!t)
    return null;
  let n = s.options.simulateBreak, r = s.state.doc.lineAt(t.from), o = n == null || n <= r.from ? r.to : Math.min(r.to, n);
  for (let l = t.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == i)
      return null;
    if (!a.type.isSkipped) {
      if (a.from >= o)
        return null;
      let h = /^ */.exec(r.text.slice(t.to - r.from))[0].length;
      return { from: t.from, to: t.to + h };
    }
    l = a.to;
  }
}
function xu(s, e, t, i, n) {
  let r = s.textAfter, o = r.match(/^\s*/)[0].length, l = i && r.slice(o, o + i.length) == i || n == s.pos + o, a = wu(s);
  return a ? l ? s.column(a.from) : s.column(a.to) : s.baseIndent + (l ? 0 : s.unit * t);
}
const vu = /* @__PURE__ */ O.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), ca = 1e4, fa = "()[]{}", ua = /* @__PURE__ */ M.define({
  combine(s) {
    return $t(s, {
      afterCursor: !0,
      brackets: fa,
      maxScanDistance: ca,
      renderMatch: Cu
    });
  }
}), ku = /* @__PURE__ */ W.mark({ class: "cm-matchingBracket" }), Su = /* @__PURE__ */ W.mark({ class: "cm-nonmatchingBracket" });
function Cu(s) {
  let e = [], t = s.matched ? ku : Su;
  return e.push(t.range(s.start.from, s.start.to)), s.end && e.push(t.range(s.end.from, s.end.to)), e;
}
function bo(s) {
  let e = [], t = s.facet(ua);
  for (let i of s.selection.ranges) {
    if (!i.empty)
      continue;
    let n = Ke(s, i.head, -1, t) || i.head > 0 && Ke(s, i.head - 1, 1, t) || t.afterCursor && (Ke(s, i.head, 1, t) || i.head < s.doc.length && Ke(s, i.head + 1, -1, t));
    n && (e = e.concat(t.renderMatch(n, s)));
  }
  return W.set(e, !0);
}
const Au = /* @__PURE__ */ ce.fromClass(class {
  constructor(s) {
    this.paused = !1, this.decorations = bo(s.state);
  }
  update(s) {
    (s.docChanged || s.selectionSet || this.paused) && (s.view.composing ? (this.decorations = this.decorations.map(s.changes), this.paused = !0) : (this.decorations = bo(s.state), this.paused = !1));
  }
}, {
  decorations: (s) => s.decorations
}), Mu = [
  Au,
  vu
];
function Tu(s = {}) {
  return [ua.of(s), Mu];
}
const Ou = /* @__PURE__ */ new N();
function Rs(s, e, t) {
  let i = s.prop(e < 0 ? N.openedBy : N.closedBy);
  if (i)
    return i;
  if (s.name.length == 1) {
    let n = t.indexOf(s.name);
    if (n > -1 && n % 2 == (e < 0 ? 1 : 0))
      return [t[n + e]];
  }
  return null;
}
function Ps(s) {
  let e = s.type.prop(Ou);
  return e ? e(s.node) : s;
}
function Ke(s, e, t, i = {}) {
  let n = i.maxScanDistance || ca, r = i.brackets || fa, o = ht(s), l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let h = Rs(a.type, t, r);
    if (h && a.from < a.to) {
      let c = Ps(a);
      if (c && (t > 0 ? e >= c.from && e < c.to : e > c.from && e <= c.to))
        return Bu(s, e, t, a, c, h, r);
    }
  }
  return Du(s, e, t, o, l.type, n, r);
}
function Bu(s, e, t, i, n, r, o) {
  let l = i.parent, a = { from: n.from, to: n.to }, h = 0, c = l?.cursor();
  if (c && (t < 0 ? c.childBefore(i.from) : c.childAfter(i.to)))
    do
      if (t < 0 ? c.to <= i.from : c.from >= i.to) {
        if (h == 0 && r.indexOf(c.type.name) > -1 && c.from < c.to) {
          let f = Ps(c);
          return { start: a, end: f ? { from: f.from, to: f.to } : void 0, matched: !0 };
        } else if (Rs(c.type, t, o))
          h++;
        else if (Rs(c.type, -t, o)) {
          if (h == 0) {
            let f = Ps(c);
            return {
              start: a,
              end: f && f.from < f.to ? { from: f.from, to: f.to } : void 0,
              matched: !1
            };
          }
          h--;
        }
      }
    while (t < 0 ? c.prevSibling() : c.nextSibling());
  return { start: a, matched: !1 };
}
function Du(s, e, t, i, n, r, o) {
  if (t < 0 ? !e : e == s.doc.length)
    return null;
  let l = t < 0 ? s.sliceDoc(e - 1, e) : s.sliceDoc(e, e + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0)
    return null;
  let h = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, c = s.doc.iterRange(e, t > 0 ? s.doc.length : 0), f = 0;
  for (let u = 0; !c.next().done && u <= r; ) {
    let d = c.value;
    t < 0 && (u += d.length);
    let p = e + u * t;
    for (let g = t > 0 ? 0 : d.length - 1, m = t > 0 ? d.length : -1; g != m; g += t) {
      let y = o.indexOf(d[g]);
      if (!(y < 0 || i.resolveInner(p + g, 1).type != n))
        if (y % 2 == 0 == t > 0)
          f++;
        else {
          if (f == 1)
            return { start: h, end: { from: p + g, to: p + g + 1 }, matched: y >> 1 == a >> 1 };
          f--;
        }
    }
    t > 0 && (u += d.length);
  }
  return c.done ? { start: h, matched: !1 } : null;
}
const Lu = /* @__PURE__ */ Object.create(null), wo = [Se.none], xo = [], vo = /* @__PURE__ */ Object.create(null), Eu = /* @__PURE__ */ Object.create(null);
for (let [s, e] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  Eu[s] = /* @__PURE__ */ Ru(Lu, e);
function Yn(s, e) {
  xo.indexOf(s) > -1 || (xo.push(s), console.warn(e));
}
function Ru(s, e) {
  let t = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let h of l.split(".")) {
      let c = s[h] || L[h];
      c ? typeof c == "function" ? a.length ? a = a.map(c) : Yn(h, `Modifier ${h} used at start of tag`) : a.length ? Yn(h, `Tag ${h} used as modifier`) : a = Array.isArray(c) ? c : [c] : Yn(h, `Unknown highlighting tag ${h}`);
    }
    for (let h of a)
      t.push(h);
  }
  if (!t.length)
    return 0;
  let i = e.replace(/ /g, "_"), n = i + " " + t.map((l) => l.id), r = vo[n];
  if (r)
    return r.id;
  let o = vo[n] = Se.define({
    id: wo.length,
    name: i,
    props: [ou({ [i]: t })]
  });
  return wo.push(o), o.id;
}
U.RTL, U.LTR;
const Pu = (s) => {
  let { state: e } = s, t = e.doc.lineAt(e.selection.main.from), i = hr(s.state, t.from);
  return i.line ? Iu(s) : i.block ? Hu(s) : !1;
};
function ar(s, e) {
  return ({ state: t, dispatch: i }) => {
    if (t.readOnly)
      return !1;
    let n = s(e, t);
    return n ? (i(t.update(n)), !0) : !1;
  };
}
const Iu = /* @__PURE__ */ ar(
  Fu,
  0
  /* CommentOption.Toggle */
), Nu = /* @__PURE__ */ ar(
  da,
  0
  /* CommentOption.Toggle */
), Hu = /* @__PURE__ */ ar(
  (s, e) => da(s, e, Vu(e)),
  0
  /* CommentOption.Toggle */
);
function hr(s, e) {
  let t = s.languageDataAt("commentTokens", e, 1);
  return t.length ? t[0] : {};
}
const Jt = 50;
function Wu(s, { open: e, close: t }, i, n) {
  let r = s.sliceDoc(i - Jt, i), o = s.sliceDoc(n, n + Jt), l = /\s*$/.exec(r)[0].length, a = /^\s*/.exec(o)[0].length, h = r.length - l;
  if (r.slice(h - e.length, h) == e && o.slice(a, a + t.length) == t)
    return {
      open: { pos: i - l, margin: l && 1 },
      close: { pos: n + a, margin: a && 1 }
    };
  let c, f;
  n - i <= 2 * Jt ? c = f = s.sliceDoc(i, n) : (c = s.sliceDoc(i, i + Jt), f = s.sliceDoc(n - Jt, n));
  let u = /^\s*/.exec(c)[0].length, d = /\s*$/.exec(f)[0].length, p = f.length - d - t.length;
  return c.slice(u, u + e.length) == e && f.slice(p, p + t.length) == t ? {
    open: {
      pos: i + u + e.length,
      margin: /\s/.test(c.charAt(u + e.length)) ? 1 : 0
    },
    close: {
      pos: n - d - t.length,
      margin: /\s/.test(f.charAt(p - 1)) ? 1 : 0
    }
  } : null;
}
function Vu(s) {
  let e = [];
  for (let t of s.selection.ranges) {
    let i = s.doc.lineAt(t.from), n = t.to <= i.to ? i : s.doc.lineAt(t.to);
    n.from > i.from && n.from == t.to && (n = t.to == i.to + 1 ? i : s.doc.lineAt(t.to - 1));
    let r = e.length - 1;
    r >= 0 && e[r].to > i.from ? e[r].to = n.to : e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: n.to });
  }
  return e;
}
function da(s, e, t = e.selection.ranges) {
  let i = t.map((r) => hr(e, r.from).block);
  if (!i.every((r) => r))
    return null;
  let n = t.map((r, o) => Wu(e, i[o], r.from, r.to));
  if (s != 2 && !n.every((r) => r))
    return { changes: e.changes(t.map((r, o) => n[o] ? [] : [{ from: r.from, insert: i[o].open + " " }, { from: r.to, insert: " " + i[o].close }])) };
  if (s != 1 && n.some((r) => r)) {
    let r = [];
    for (let o = 0, l; o < n.length; o++)
      if (l = n[o]) {
        let a = i[o], { open: h, close: c } = l;
        r.push({ from: h.pos - a.open.length, to: h.pos + h.margin }, { from: c.pos - c.margin, to: c.pos + a.close.length });
      }
    return { changes: r };
  }
  return null;
}
function Fu(s, e, t = e.selection.ranges) {
  let i = [], n = -1;
  e: for (let { from: r, to: o } of t) {
    let l = i.length, a = 1e9, h;
    for (let c = r; c <= o; ) {
      let f = e.doc.lineAt(c);
      if (h == null && (h = hr(e, f.from).line, !h))
        continue e;
      if (f.from > n && (r == o || o > f.from)) {
        n = f.from;
        let u = /^\s*/.exec(f.text)[0].length, d = u == f.length, p = f.text.slice(u, u + h.length) == h ? u : -1;
        u < f.text.length && u < a && (a = u), i.push({ line: f, comment: p, token: h, indent: u, empty: d, single: !1 });
      }
      c = f.to + 1;
    }
    if (a < 1e9)
      for (let c = l; c < i.length; c++)
        i[c].indent < i[c].line.text.length && (i[c].indent = a);
    i.length == l + 1 && (i[l].single = !0);
  }
  if (s != 2 && i.some((r) => r.comment < 0 && (!r.empty || r.single))) {
    let r = [];
    for (let { line: l, token: a, indent: h, empty: c, single: f } of i)
      (f || !c) && r.push({ from: l.from + h, insert: a + " " });
    let o = e.changes(r);
    return { changes: o, selection: e.selection.map(o, 1) };
  } else if (s != 1 && i.some((r) => r.comment >= 0)) {
    let r = [];
    for (let { line: o, comment: l, token: a } of i)
      if (l >= 0) {
        let h = o.from + l, c = h + a.length;
        o.text[c - o.from] == " " && c++, r.push({ from: h, to: c });
      }
    return { changes: r };
  }
  return null;
}
const Is = /* @__PURE__ */ ct.define(), zu = /* @__PURE__ */ ct.define(), Ku = /* @__PURE__ */ M.define(), pa = /* @__PURE__ */ M.define({
  combine(s) {
    return $t(s, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (e, t) => t
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (e, t) => (i, n) => e(i, n) || t(i, n)
    });
  }
}), ga = /* @__PURE__ */ je.define({
  create() {
    return qe.empty;
  },
  update(s, e) {
    let t = e.state.facet(pa), i = e.annotation(Is);
    if (i) {
      let a = pe.fromTransaction(e, i.selection), h = i.side, c = h == 0 ? s.undone : s.done;
      return a ? c = gn(c, c.length, t.minDepth, a) : c = ba(c, e.startState.selection), new qe(h == 0 ? i.rest : c, h == 0 ? c : i.rest);
    }
    let n = e.annotation(zu);
    if ((n == "full" || n == "before") && (s = s.isolate()), e.annotation(Q.addToHistory) === !1)
      return e.changes.empty ? s : s.addMapping(e.changes.desc);
    let r = pe.fromTransaction(e), o = e.annotation(Q.time), l = e.annotation(Q.userEvent);
    return r ? s = s.addChanges(r, o, l, t, e) : e.selection && (s = s.addSelection(e.startState.selection, o, l, t.newGroupDelay)), (n == "full" || n == "after") && (s = s.isolate()), s;
  },
  toJSON(s) {
    return { done: s.done.map((e) => e.toJSON()), undone: s.undone.map((e) => e.toJSON()) };
  },
  fromJSON(s) {
    return new qe(s.done.map(pe.fromJSON), s.undone.map(pe.fromJSON));
  }
});
function qu(s = {}) {
  return [
    ga,
    pa.of(s),
    O.domEventHandlers({
      beforeinput(e, t) {
        let i = e.inputType == "historyUndo" ? ma : e.inputType == "historyRedo" ? Ns : null;
        return i ? (e.preventDefault(), i(t)) : !1;
      }
    })
  ];
}
function Tn(s, e) {
  return function({ state: t, dispatch: i }) {
    if (!e && t.readOnly)
      return !1;
    let n = t.field(ga, !1);
    if (!n)
      return !1;
    let r = n.pop(s, t, e);
    return r ? (i(r), !0) : !1;
  };
}
const ma = /* @__PURE__ */ Tn(0, !1), Ns = /* @__PURE__ */ Tn(1, !1), $u = /* @__PURE__ */ Tn(0, !0), ju = /* @__PURE__ */ Tn(1, !0);
class pe {
  constructor(e, t, i, n, r) {
    this.changes = e, this.effects = t, this.mapped = i, this.startSelection = n, this.selectionsAfter = r;
  }
  setSelAfter(e) {
    return new pe(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, i;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
      startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(),
      selectionsAfter: this.selectionsAfter.map((n) => n.toJSON())
    };
  }
  static fromJSON(e) {
    return new pe(e.changes && X.fromJSON(e.changes), [], e.mapped && $e.fromJSON(e.mapped), e.startSelection && w.fromJSON(e.startSelection), e.selectionsAfter.map(w.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(e, t) {
    let i = ve;
    for (let n of e.startState.facet(Ku)) {
      let r = n(e);
      r.length && (i = i.concat(r));
    }
    return !i.length && e.changes.empty ? null : new pe(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, ve);
  }
  static selection(e) {
    return new pe(void 0, ve, void 0, void 0, e);
  }
}
function gn(s, e, t, i) {
  let n = e + 1 > t + 20 ? e - t - 1 : 0, r = s.slice(n, e);
  return r.push(i), r;
}
function Uu(s, e) {
  let t = [], i = !1;
  return s.iterChangedRanges((n, r) => t.push(n, r)), e.iterChangedRanges((n, r, o, l) => {
    for (let a = 0; a < t.length; ) {
      let h = t[a++], c = t[a++];
      l >= h && o <= c && (i = !0);
    }
  }), i;
}
function Gu(s, e) {
  return s.ranges.length == e.ranges.length && s.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0;
}
function ya(s, e) {
  return s.length ? e.length ? s.concat(e) : s : e;
}
const ve = [], _u = 200;
function ba(s, e) {
  if (s.length) {
    let t = s[s.length - 1], i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - _u));
    return i.length && i[i.length - 1].eq(e) ? s : (i.push(e), gn(s, s.length - 1, 1e9, t.setSelAfter(i)));
  } else
    return [pe.selection([e])];
}
function Yu(s) {
  let e = s[s.length - 1], t = s.slice();
  return t[s.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function Jn(s, e) {
  if (!s.length)
    return s;
  let t = s.length, i = ve;
  for (; t; ) {
    let n = Ju(s[t - 1], e, i);
    if (n.changes && !n.changes.empty || n.effects.length) {
      let r = s.slice(0, t);
      return r[t - 1] = n, r;
    } else
      e = n.mapped, t--, i = n.selectionsAfter;
  }
  return i.length ? [pe.selection(i)] : ve;
}
function Ju(s, e, t) {
  let i = ya(s.selectionsAfter.length ? s.selectionsAfter.map((l) => l.map(e)) : ve, t);
  if (!s.changes)
    return pe.selection(i);
  let n = s.changes.map(e), r = e.mapDesc(s.changes, !0), o = s.mapped ? s.mapped.composeDesc(r) : r;
  return new pe(n, q.mapEffects(s.effects, e), o, s.startSelection.map(r), i);
}
const Xu = /^(input\.type|delete)($|\.)/;
class qe {
  constructor(e, t, i = 0, n = void 0) {
    this.done = e, this.undone = t, this.prevTime = i, this.prevUserEvent = n;
  }
  isolate() {
    return this.prevTime ? new qe(this.done, this.undone) : this;
  }
  addChanges(e, t, i, n, r) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!i || Xu.test(i)) && (!l.selectionsAfter.length && t - this.prevTime < n.newGroupDelay && n.joinToEvent(r, Uu(l.changes, e.changes)) || // For compose (but not compose.start) events, always join with previous event
    i == "input.type.compose") ? o = gn(o, o.length - 1, n.minDepth, new pe(e.changes.compose(l.changes), ya(q.mapEffects(e.effects, l.changes), l.effects), l.mapped, l.startSelection, ve)) : o = gn(o, o.length, n.minDepth, e), new qe(o, ve, t, i);
  }
  addSelection(e, t, i, n) {
    let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : ve;
    return r.length > 0 && t - this.prevTime < n && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && Gu(r[r.length - 1], e) ? this : new qe(ba(this.done, e), this.undone, t, i);
  }
  addMapping(e) {
    return new qe(Jn(this.done, e), Jn(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, i) {
    let n = e == 0 ? this.done : this.undone;
    if (n.length == 0)
      return null;
    let r = n[n.length - 1], o = r.selectionsAfter[0] || (r.startSelection ? r.startSelection.map(r.changes.invertedDesc, 1) : t.selection);
    if (i && r.selectionsAfter.length)
      return t.update({
        selection: r.selectionsAfter[r.selectionsAfter.length - 1],
        annotations: Is.of({ side: e, rest: Yu(n), selection: o }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (r.changes) {
      let l = n.length == 1 ? ve : n.slice(0, n.length - 1);
      return r.mapped && (l = Jn(l, r.mapped)), t.update({
        changes: r.changes,
        selection: r.startSelection,
        effects: r.effects,
        annotations: Is.of({ side: e, rest: l, selection: o }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
qe.empty = /* @__PURE__ */ new qe(ve, ve);
const Qu = [
  { key: "Mod-z", run: ma, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: Ns, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: Ns, preventDefault: !0 },
  { key: "Mod-u", run: $u, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: ju, preventDefault: !0 }
];
function jt(s, e) {
  return w.create(s.ranges.map(e), s.mainIndex);
}
function De(s, e) {
  return s.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function Le({ state: s, dispatch: e }, t) {
  let i = jt(s.selection, t);
  return i.eq(s.selection, !0) ? !1 : (e(De(s, i)), !0);
}
function On(s, e) {
  return w.cursor(e ? s.to : s.from);
}
function wa(s, e) {
  return Le(s, (t) => t.empty ? s.moveByChar(t, e) : On(t, e));
}
function oe(s) {
  return s.textDirectionAt(s.state.selection.main.head) == U.LTR;
}
const xa = (s) => wa(s, !oe(s)), va = (s) => wa(s, oe(s));
function ka(s, e) {
  return Le(s, (t) => t.empty ? s.moveByGroup(t, e) : On(t, e));
}
const Zu = (s) => ka(s, !oe(s)), ed = (s) => ka(s, oe(s));
function td(s, e, t) {
  if (e.type.prop(t))
    return !0;
  let i = e.to - e.from;
  return i && (i > 2 || /[^\s,.;:]/.test(s.sliceDoc(e.from, e.to))) || e.firstChild;
}
function Bn(s, e, t) {
  let i = ht(s).resolveInner(e.head), n = t ? N.closedBy : N.openedBy;
  for (let a = e.head; ; ) {
    let h = t ? i.childAfter(a) : i.childBefore(a);
    if (!h)
      break;
    td(s, h, n) ? i = h : a = t ? h.to : h.from;
  }
  let r = i.type.prop(n), o, l;
  return r && (o = t ? Ke(s, i.from, 1) : Ke(s, i.to, -1)) && o.matched ? l = t ? o.end.to : o.end.from : l = t ? i.to : i.from, w.cursor(l, t ? -1 : 1);
}
const id = (s) => Le(s, (e) => Bn(s.state, e, !oe(s))), nd = (s) => Le(s, (e) => Bn(s.state, e, oe(s)));
function Sa(s, e) {
  return Le(s, (t) => {
    if (!t.empty)
      return On(t, e);
    let i = s.moveVertically(t, e);
    return i.head != t.head ? i : s.moveToLineBoundary(t, e);
  });
}
const Ca = (s) => Sa(s, !1), Aa = (s) => Sa(s, !0);
function Ma(s) {
  let e = s.scrollDOM.clientHeight < s.scrollDOM.scrollHeight - 2, t = 0, i = 0, n;
  if (e) {
    for (let r of s.state.facet(O.scrollMargins)) {
      let o = r(s);
      o?.top && (t = Math.max(o?.top, t)), o?.bottom && (i = Math.max(o?.bottom, i));
    }
    n = s.scrollDOM.clientHeight - t - i;
  } else
    n = (s.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: t,
    marginBottom: i,
    selfScroll: e,
    height: Math.max(s.defaultLineHeight, n - 5)
  };
}
function Ta(s, e) {
  let t = Ma(s), { state: i } = s, n = jt(i.selection, (o) => o.empty ? s.moveVertically(o, e, t.height) : On(o, e));
  if (n.eq(i.selection))
    return !1;
  let r;
  if (t.selfScroll) {
    let o = s.coordsAtPos(i.selection.main.head), l = s.scrollDOM.getBoundingClientRect(), a = l.top + t.marginTop, h = l.bottom - t.marginBottom;
    o && o.top > a && o.bottom < h && (r = O.scrollIntoView(n.main.head, { y: "start", yMargin: o.top - a }));
  }
  return s.dispatch(De(i, n), { effects: r }), !0;
}
const ko = (s) => Ta(s, !1), Hs = (s) => Ta(s, !0);
function ft(s, e, t) {
  let i = s.lineBlockAt(e.head), n = s.moveToLineBoundary(e, t);
  if (n.head == e.head && n.head != (t ? i.to : i.from) && (n = s.moveToLineBoundary(e, t, !1)), !t && n.head == i.from && i.length) {
    let r = /^\s*/.exec(s.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    r && e.head != i.from + r && (n = w.cursor(i.from + r));
  }
  return n;
}
const sd = (s) => Le(s, (e) => ft(s, e, !0)), rd = (s) => Le(s, (e) => ft(s, e, !1)), od = (s) => Le(s, (e) => ft(s, e, !oe(s))), ld = (s) => Le(s, (e) => ft(s, e, oe(s))), ad = (s) => Le(s, (e) => w.cursor(s.lineBlockAt(e.head).from, 1)), hd = (s) => Le(s, (e) => w.cursor(s.lineBlockAt(e.head).to, -1));
function cd(s, e, t) {
  let i = !1, n = jt(s.selection, (r) => {
    let o = Ke(s, r.head, -1) || Ke(s, r.head, 1) || r.head > 0 && Ke(s, r.head - 1, 1) || r.head < s.doc.length && Ke(s, r.head + 1, -1);
    if (!o || !o.end)
      return r;
    i = !0;
    let l = o.start.from == r.head ? o.end.to : o.end.from;
    return w.cursor(l);
  });
  return i ? (e(De(s, n)), !0) : !1;
}
const fd = ({ state: s, dispatch: e }) => cd(s, e);
function Ce(s, e, t) {
  let i = jt(s.state.selection, (n) => {
    n.undirectional && n.head >= n.anchor != e && (n = w.range(n.head, n.anchor));
    let r = t(n);
    return w.range(n.anchor, r.head, r.goalColumn, r.bidiLevel || void 0, r.assoc);
  });
  return i.eq(s.state.selection) ? !1 : (s.dispatch(De(s.state, i)), !0);
}
function Oa(s, e) {
  return Ce(s, e, (t) => s.moveByChar(t, e));
}
const Ba = (s) => Oa(s, !oe(s)), Da = (s) => Oa(s, oe(s));
function La(s, e) {
  return Ce(s, e, (t) => s.moveByGroup(t, e));
}
const ud = (s) => La(s, !oe(s)), dd = (s) => La(s, oe(s)), pd = (s) => {
  let e = !oe(s);
  return Ce(s, e, (t) => Bn(s.state, t, e));
}, gd = (s) => {
  let e = oe(s);
  return Ce(s, e, (t) => Bn(s.state, t, e));
};
function Ea(s, e) {
  return Ce(s, e, (t) => s.moveVertically(t, e));
}
const Ra = (s) => Ea(s, !1), Pa = (s) => Ea(s, !0);
function Ia(s, e) {
  return Ce(s, e, (t) => s.moveVertically(t, e, Ma(s).height));
}
const So = (s) => Ia(s, !1), Co = (s) => Ia(s, !0), md = (s) => Ce(s, !0, (e) => ft(s, e, !0)), yd = (s) => Ce(s, !1, (e) => ft(s, e, !1)), bd = (s) => {
  let e = !oe(s);
  return Ce(s, e, (t) => ft(s, t, e));
}, wd = (s) => {
  let e = oe(s);
  return Ce(s, e, (t) => ft(s, t, e));
}, xd = (s) => Ce(s, !1, (e) => w.cursor(s.lineBlockAt(e.head).from)), vd = (s) => Ce(s, !0, (e) => w.cursor(s.lineBlockAt(e.head).to)), Ao = ({ state: s, dispatch: e }) => (e(De(s, { anchor: 0 })), !0), Mo = ({ state: s, dispatch: e }) => (e(De(s, { anchor: s.doc.length })), !0), To = ({ state: s, dispatch: e }) => (e(De(s, { anchor: s.selection.main.anchor, head: 0 })), !0), Oo = ({ state: s, dispatch: e }) => (e(De(s, { anchor: s.selection.main.anchor, head: s.doc.length })), !0), kd = ({ state: s, dispatch: e }) => (e(s.update({ selection: { anchor: 0, head: s.doc.length }, userEvent: "select" })), !0), Sd = ({ state: s, dispatch: e }) => {
  let t = Dn(s).map(({ from: i, to: n }) => w.undirectionalRange(i, Math.min(n + 1, s.doc.length)));
  return e(s.update({ selection: w.create(t), userEvent: "select" })), !0;
}, Cd = ({ state: s, dispatch: e }) => {
  let t = jt(s.selection, (i) => {
    let n = ht(s), r = n.resolveStack(i.from, 1);
    if (i.empty) {
      let o = n.resolveStack(i.from, -1);
      o.node.from >= r.node.from && o.node.to <= r.node.to && (r = o);
    }
    for (let o = r; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < i.from && l.to >= i.to || l.to > i.to && l.from <= i.from) && o.next)
        return w.undirectionalRange(l.from, l.to);
    }
    return i;
  });
  return t.eq(s.selection) ? !1 : (e(De(s, t)), !0);
};
function Na(s, e) {
  let { state: t } = s, i = t.selection, n = t.selection.ranges.slice();
  for (let r of t.selection.ranges) {
    let o = t.doc.lineAt(r.head);
    if (e ? o.to < s.state.doc.length : o.from > 0)
      for (let l = r; ; ) {
        let a = s.moveVertically(l, e);
        if (a.head < o.from || a.head > o.to) {
          n.some((h) => h.head == a.head) || n.push(a);
          break;
        } else {
          if (a.head == l.head)
            break;
          l = a;
        }
      }
  }
  return n.length == i.ranges.length ? !1 : (s.dispatch(De(t, w.create(n, n.length - 1))), !0);
}
const Ad = (s) => Na(s, !1), Md = (s) => Na(s, !0), Td = ({ state: s, dispatch: e }) => {
  let t = s.selection, i = null;
  return t.ranges.length > 1 ? i = w.create([t.main]) : t.main.empty || (i = w.create([w.cursor(t.main.head)])), i ? (e(De(s, i)), !0) : !1;
};
function wi(s, e) {
  if (s.state.readOnly)
    return !1;
  let t = "delete.selection", { state: i } = s, n = i.changeByRange((r) => {
    let { from: o, to: l } = r;
    if (o == l) {
      let a = e(r);
      a < o ? (t = "delete.backward", a = Fi(s, a, !1)) : a > o && (t = "delete.forward", a = Fi(s, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = Fi(s, o, !1), l = Fi(s, l, !0);
    return o == l ? { range: r } : { changes: { from: o, to: l }, range: w.cursor(o, o < r.head ? -1 : 1) };
  });
  return n.changes.empty ? !1 : (s.dispatch(i.update(n, {
    scrollIntoView: !0,
    userEvent: t,
    effects: t == "delete.selection" ? O.announce.of(i.phrase("Selection deleted")) : void 0
  })), !0);
}
function Fi(s, e, t) {
  if (s instanceof O)
    for (let i of s.state.facet(O.atomicRanges).map((n) => n(s)))
      i.between(e, e, (n, r) => {
        n < e && r > e && (e = t ? r : n);
      });
  return e;
}
const Ha = (s, e, t) => wi(s, (i) => {
  let n = i.from, { state: r } = s, o = r.doc.lineAt(n), l, a;
  if (t && !e && n > o.from && n < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, n - o.from))) {
    if (l[l.length - 1] == "	")
      return n - 1;
    let h = bn(l, r.tabSize), c = h % zt(r) || zt(r);
    for (let f = 0; f < c && l[l.length - 1 - f] == " "; f++)
      n--;
    a = n;
  } else
    a = re(o.text, n - o.from, e, e) + o.from, a == n && o.number != (e ? r.doc.lines : 1) ? a += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, n - o.from)) && (a = re(o.text, a - o.from, !1, !1) + o.from);
  return a;
}), Ws = (s) => Ha(s, !1, !0), Wa = (s) => Ha(s, !0, !1), Va = (s, e) => wi(s, (t) => {
  let i = t.head, { state: n } = s, r = n.doc.lineAt(i), o = n.charCategorizer(i);
  for (let l = null; ; ) {
    if (i == (e ? r.to : r.from)) {
      i == t.head && r.number != (e ? n.doc.lines : 1) && (i += e ? 1 : -1);
      break;
    }
    let a = re(r.text, i - r.from, e) + r.from, h = r.text.slice(Math.min(i, a) - r.from, Math.max(i, a) - r.from), c = o(h);
    if (l != null && c != l)
      break;
    (h != " " || i != t.head) && (l = c), i = a;
  }
  return i;
}), Fa = (s) => Va(s, !1), Od = (s) => Va(s, !0), Bd = (s) => wi(s, (e) => {
  let t = s.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(s.state.doc.length, e.head + 1);
}), Dd = (s) => wi(s, (e) => {
  let t = s.moveToLineBoundary(e, !1).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}), Ld = (s) => wi(s, (e) => {
  let t = s.moveToLineBoundary(e, !0).head;
  return e.head < t ? t : Math.min(s.state.doc.length, e.head + 1);
}), Ed = ({ state: s, dispatch: e }) => {
  if (s.readOnly)
    return !1;
  let t = s.changeByRange((i) => ({
    changes: { from: i.from, to: i.to, insert: I.of(["", ""]) },
    range: w.cursor(i.from)
  }));
  return e(s.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
}, Rd = ({ state: s, dispatch: e }) => {
  if (s.readOnly)
    return !1;
  let t = s.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == s.doc.length)
      return { range: i };
    let n = i.from, r = s.doc.lineAt(n), o = n == r.from ? n - 1 : re(r.text, n - r.from, !1) + r.from, l = n == r.to ? n + 1 : re(r.text, n - r.from, !0) + r.from;
    return {
      changes: { from: o, to: l, insert: s.doc.slice(n, l).append(s.doc.slice(o, n)) },
      range: w.cursor(l)
    };
  });
  return t.changes.empty ? !1 : (e(s.update(t, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function Dn(s) {
  let e = [], t = -1;
  for (let i of s.selection.ranges) {
    let n = s.doc.lineAt(i.from), r = s.doc.lineAt(i.to);
    if (!i.empty && i.to == r.from && (r = s.doc.lineAt(i.to - 1)), t >= n.number) {
      let o = e[e.length - 1];
      o.to = r.to, o.ranges.push(i);
    } else
      e.push({ from: n.from, to: r.to, ranges: [i] });
    t = r.number + 1;
  }
  return e;
}
function za(s, e, t) {
  if (s.readOnly)
    return !1;
  let i = [], n = [];
  for (let r of Dn(s)) {
    if (t ? r.to == s.doc.length : r.from == 0)
      continue;
    let o = s.doc.lineAt(t ? r.to + 1 : r.from - 1), l = o.length + 1;
    if (t) {
      i.push({ from: r.to, to: o.to }, { from: r.from, insert: o.text + s.lineBreak });
      for (let a of r.ranges)
        n.push(w.range(Math.min(s.doc.length, a.anchor + l), Math.min(s.doc.length, a.head + l)));
    } else {
      i.push({ from: o.from, to: r.from }, { from: r.to, insert: s.lineBreak + o.text });
      for (let a of r.ranges)
        n.push(w.range(a.anchor - l, a.head - l));
    }
  }
  return i.length ? (e(s.update({
    changes: i,
    scrollIntoView: !0,
    selection: w.create(n, s.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const Pd = ({ state: s, dispatch: e }) => za(s, e, !1), Id = ({ state: s, dispatch: e }) => za(s, e, !0);
function Ka(s, e, t) {
  if (s.readOnly)
    return !1;
  let i = [];
  for (let r of Dn(s))
    t ? i.push({ from: r.from, insert: s.doc.slice(r.from, r.to) + s.lineBreak }) : i.push({ from: r.to, insert: s.lineBreak + s.doc.slice(r.from, r.to) });
  let n = s.changes(i);
  return e(s.update({
    changes: n,
    selection: s.selection.map(n, t ? 1 : -1),
    scrollIntoView: !0,
    userEvent: "input.copyline"
  })), !0;
}
const Nd = ({ state: s, dispatch: e }) => Ka(s, e, !1), Hd = ({ state: s, dispatch: e }) => Ka(s, e, !0), Wd = (s) => {
  if (s.state.readOnly)
    return !1;
  let { state: e } = s, t = e.changes(Dn(e).map(({ from: n, to: r }) => (n > 0 ? n-- : r < e.doc.length && r++, { from: n, to: r }))), i = jt(e.selection, (n) => {
    let r;
    if (s.lineWrapping) {
      let o = s.lineBlockAt(n.head), l = s.coordsAtPos(n.head, n.assoc || 1);
      l && (r = o.bottom + s.documentTop - l.bottom + s.defaultLineHeight / 2);
    }
    return s.moveVertically(n, !0, r);
  }).map(t);
  return s.dispatch({ changes: t, selection: i, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function Vd(s, e) {
  if (/\(\)|\[\]|\{\}/.test(s.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = ht(s).resolveInner(e), i = t.childBefore(e), n = t.childAfter(e), r;
  return i && n && i.to <= e && n.from >= e && (r = i.type.prop(N.closedBy)) && r.indexOf(n.name) > -1 && s.doc.lineAt(i.to).from == s.doc.lineAt(n.from).from && !/\S/.test(s.sliceDoc(i.to, n.from)) ? { from: i.to, to: n.from } : null;
}
const Bo = /* @__PURE__ */ qa(!1), Fd = /* @__PURE__ */ qa(!0);
function qa(s) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly)
      return !1;
    let i = e.changeByRange((n) => {
      let { from: r, to: o } = n, l = e.doc.lineAt(r), a = !s && r == o && Vd(e, r);
      s && (r = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let h = new Mn(e, { simulateBreak: r, simulateDoubleBreak: !!a }), c = aa(h, r);
      for (c == null && (c = bn(/^\s*/.exec(e.doc.lineAt(r).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: r, to: o } = a : r > l.from && r < l.from + 100 && !/\S/.test(l.text.slice(0, r)) && (r = l.from);
      let f = ["", pn(e, c)];
      return a && f.push(pn(e, h.lineIndent(l.from, -1))), {
        changes: { from: r, to: o, insert: I.of(f) },
        range: w.cursor(r + 1 + f[1].length)
      };
    });
    return t(e.update(i, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function cr(s, e) {
  let t = -1;
  return s.changeByRange((i) => {
    let n = [];
    for (let o = i.from; o <= i.to; ) {
      let l = s.doc.lineAt(o);
      l.number > t && (i.empty || i.to > l.from) && (e(l, n, i), t = l.number), o = l.to + 1;
    }
    let r = s.changes(n);
    return {
      changes: n,
      range: w.range(r.mapPos(i.anchor, 1), r.mapPos(i.head, 1))
    };
  });
}
const zd = ({ state: s, dispatch: e }) => {
  if (s.readOnly)
    return !1;
  let t = /* @__PURE__ */ Object.create(null), i = new Mn(s, { overrideIndentation: (r) => {
    let o = t[r];
    return o ?? -1;
  } }), n = cr(s, (r, o, l) => {
    let a = aa(i, r.from);
    if (a == null)
      return;
    /\S/.test(r.text) || (a = 0);
    let h = /^\s*/.exec(r.text)[0], c = pn(s, a);
    (h != c || l.from < r.from + h.length) && (t[r.from] = a, o.push({ from: r.from, to: r.from + h.length, insert: c }));
  });
  return n.changes.empty || e(s.update(n, { userEvent: "indent" })), !0;
}, $a = ({ state: s, dispatch: e }) => s.readOnly ? !1 : (e(s.update(cr(s, (t, i) => {
  i.push({ from: t.from, insert: s.facet(An) });
}), { userEvent: "input.indent" })), !0), ja = ({ state: s, dispatch: e }) => s.readOnly ? !1 : (e(s.update(cr(s, (t, i) => {
  let n = /^\s*/.exec(t.text)[0];
  if (!n)
    return;
  let r = bn(n, s.tabSize), o = 0, l = pn(s, Math.max(0, r - zt(s)));
  for (; o < n.length && o < l.length && n.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  i.push({ from: t.from + o, to: t.from + n.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), Kd = (s) => (s.setTabFocusMode(), !0), qd = [
  { key: "Ctrl-b", run: xa, shift: Ba, preventDefault: !0 },
  { key: "Ctrl-f", run: va, shift: Da },
  { key: "Ctrl-p", run: Ca, shift: Ra },
  { key: "Ctrl-n", run: Aa, shift: Pa },
  { key: "Ctrl-a", run: ad, shift: xd },
  { key: "Ctrl-e", run: hd, shift: vd },
  { key: "Ctrl-d", run: Wa },
  { key: "Ctrl-h", run: Ws },
  { key: "Ctrl-k", run: Bd },
  { key: "Ctrl-Alt-h", run: Fa },
  { key: "Ctrl-o", run: Ed },
  { key: "Ctrl-t", run: Rd },
  { key: "Ctrl-v", run: Hs }
], $d = /* @__PURE__ */ [
  { key: "ArrowLeft", run: xa, shift: Ba, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: Zu, shift: ud, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: od, shift: bd, preventDefault: !0 },
  { key: "ArrowRight", run: va, shift: Da, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: ed, shift: dd, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: ld, shift: wd, preventDefault: !0 },
  { key: "ArrowUp", run: Ca, shift: Ra, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: Ao, shift: To },
  { mac: "Ctrl-ArrowUp", run: ko, shift: So },
  { key: "ArrowDown", run: Aa, shift: Pa, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: Mo, shift: Oo },
  { mac: "Ctrl-ArrowDown", run: Hs, shift: Co },
  { key: "PageUp", run: ko, shift: So },
  { key: "PageDown", run: Hs, shift: Co },
  { key: "Home", run: rd, shift: yd, preventDefault: !0 },
  { key: "Mod-Home", run: Ao, shift: To },
  { key: "End", run: sd, shift: md, preventDefault: !0 },
  { key: "Mod-End", run: Mo, shift: Oo },
  { key: "Enter", run: Bo, shift: Bo },
  { key: "Mod-a", run: kd },
  { key: "Backspace", run: Ws, shift: Ws, preventDefault: !0 },
  { key: "Delete", run: Wa, preventDefault: !0 },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: Fa, preventDefault: !0 },
  { key: "Mod-Delete", mac: "Alt-Delete", run: Od, preventDefault: !0 },
  { mac: "Mod-Backspace", run: Dd, preventDefault: !0 },
  { mac: "Mod-Delete", run: Ld, preventDefault: !0 }
].concat(/* @__PURE__ */ qd.map((s) => ({ mac: s.key, run: s.run, shift: s.shift }))), jd = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: id, shift: pd },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: nd, shift: gd },
  { key: "Alt-ArrowUp", run: Pd },
  { key: "Shift-Alt-ArrowUp", run: Nd },
  { key: "Alt-ArrowDown", run: Id },
  { key: "Shift-Alt-ArrowDown", run: Hd },
  { key: "Mod-Alt-ArrowUp", run: Ad },
  { key: "Mod-Alt-ArrowDown", run: Md },
  { key: "Escape", run: Td },
  { key: "Mod-Enter", run: Fd },
  { key: "Alt-l", mac: "Ctrl-l", run: Sd },
  { key: "Mod-i", run: Cd, preventDefault: !0 },
  { key: "Mod-[", run: ja },
  { key: "Mod-]", run: $a },
  { key: "Mod-Alt-\\", run: zd },
  { key: "Shift-Mod-k", run: Wd },
  { key: "Shift-Mod-\\", run: fd },
  { key: "Mod-/", run: Pu },
  { key: "Alt-A", mac: "Ctrl-A", run: Nu },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: Kd }
].concat($d), Ud = { key: "Tab", run: $a, shift: ja };
class Do {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.diagnostic = i;
  }
}
class mt {
  constructor(e, t, i) {
    this.diagnostics = e, this.panel = t, this.selected = i;
  }
  static init(e, t, i) {
    let n = i.facet(pi).markerFilter;
    n && (e = n(e, i));
    let r = e.slice().sort((d, p) => d.from - p.from || d.to - p.to), o = new st(), l = [], a = 0, h = i.doc.iter(), c = 0, f = i.doc.length;
    for (let d = 0; ; ) {
      let p = d == r.length ? null : r[d];
      if (!p && !l.length)
        break;
      let g, m;
      if (l.length)
        g = a, m = l.reduce((b, T) => Math.min(b, T.to), p && p.from > g ? p.from : 1e8);
      else {
        if (g = p.from, g > f)
          break;
        m = p.to, l.push(p), d++;
      }
      for (; d < r.length; ) {
        let b = r[d];
        if (b.from == g && (b.to > b.from || b.to == g))
          l.push(b), d++, m = Math.min(b.to, m);
        else {
          m = Math.min(b.from, m);
          break;
        }
      }
      m = Math.min(m, f);
      let y = !1;
      if (l.some((b) => b.from == g && (b.to == m || m == f)) && (y = g == m, !y && m - g < 10)) {
        let b = g - (c + h.value.length);
        b > 0 && (h.next(b), c = g);
        for (let T = g; ; ) {
          if (T >= m) {
            y = !0;
            break;
          }
          if (!h.lineBreak && c + h.value.length > T)
            break;
          T = c + h.value.length, c += h.value.length, h.next();
        }
      }
      let A = np(l);
      if (y)
        o.add(g, g, W.widget({
          widget: new Zd(A),
          diagnostics: l.slice()
        }));
      else {
        let b = l.reduce((T, C) => C.markClass ? T + " " + C.markClass : T, "");
        o.add(g, m, W.mark({
          class: "cm-lintRange cm-lintRange-" + A + b,
          diagnostics: l.slice(),
          inclusiveEnd: l.some((T) => T.to > m)
        }));
      }
      if (a = m, a == f)
        break;
      for (let b = 0; b < l.length; b++)
        l[b].to <= a && l.splice(b--, 1);
    }
    let u = o.finish();
    return new mt(u, t, Kt(u));
  }
}
function Kt(s, e = null, t = 0) {
  let i = null;
  return s.between(t, 1e9, (n, r, { spec: o }) => {
    if (!(e && o.diagnostics.indexOf(e) < 0))
      if (!i)
        i = new Do(n, r, e || o.diagnostics[0]);
      else {
        if (o.diagnostics.indexOf(i.diagnostic) < 0)
          return !1;
        i = new Do(i.from, r, i.diagnostic);
      }
  }), i;
}
function Gd(s, e) {
  let t = e.pos, i = e.end || t, n = s.state.facet(pi).hideOn(s, t, i);
  if (n != null)
    return n;
  let r = s.startState.doc.lineAt(e.pos);
  return !!(s.effects.some((o) => o.is(fr)) || s.changes.touchesRange(r.from, Math.max(r.to, i)));
}
function _d(s, e) {
  return s.field(Oe, !1) ? e : e.concat(q.appendConfig.of(rp));
}
function Yd(s, e) {
  return {
    effects: _d(s, [fr.of(e)])
  };
}
const fr = /* @__PURE__ */ q.define(), Ua = /* @__PURE__ */ q.define(), Ga = /* @__PURE__ */ q.define(), Oe = /* @__PURE__ */ je.define({
  create() {
    return new mt(W.none, null, null);
  },
  update(s, e) {
    if (e.docChanged && s.diagnostics.size) {
      let t = s.diagnostics.map(e.changes), i = null, n = s.panel;
      if (s.selected) {
        let r = e.changes.mapPos(s.selected.from, 1);
        i = Kt(t, s.selected.diagnostic, r) || Kt(t, null, r);
      }
      !t.size && n && e.state.facet(pi).autoPanel && (n = null), s = new mt(t, n, i);
    }
    for (let t of e.effects)
      if (t.is(fr)) {
        let i = e.state.facet(pi).autoPanel ? t.value.length ? mn.open : null : s.panel;
        s = mt.init(t.value, i, e.state);
      } else t.is(Ua) ? s = new mt(s.diagnostics, t.value ? mn.open : null, s.selected) : t.is(Ga) && (s = new mt(s.diagnostics, s.panel, t.value));
    return s;
  },
  provide: (s) => [
    Os.from(s, (e) => e.panel),
    O.decorations.from(s, (e) => e.diagnostics)
  ]
}), Jd = /* @__PURE__ */ W.mark({ class: "cm-lintRange cm-lintRange-active" });
function Xd(s, e, t) {
  let { diagnostics: i } = s.state.field(Oe), n, r = -1, o = -1;
  i.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, h, { spec: c }) => {
    if (e >= a && e <= h && (a == h || (e > a || t > 0) && (e < h || t < 0)))
      return n = c.diagnostics, r = a, o = h, !1;
  });
  let l = s.state.facet(pi).tooltipFilter;
  return n && l && (n = l(n, s.state)), n ? {
    pos: r,
    end: o,
    above: !0,
    create() {
      return { dom: Qd(s, n) };
    }
  } : null;
}
function Qd(s, e) {
  return Ve("ul", { class: "cm-tooltip-lint" }, e.map((t) => Ya(s, t, !1)));
}
const Lo = (s) => {
  let e = s.state.field(Oe, !1);
  return !e || !e.panel ? !1 : (s.dispatch({ effects: Ua.of(!1) }), !0);
}, pi = /* @__PURE__ */ M.define({
  combine(s) {
    return {
      sources: s.map((e) => e.source).filter((e) => e != null),
      ...$t(s.map((e) => e.config), {
        delay: 750,
        markerFilter: null,
        tooltipFilter: null,
        needsRefresh: null,
        hideOn: () => null
      }, {
        delay: Math.max,
        markerFilter: Eo,
        tooltipFilter: Eo,
        needsRefresh: (e, t) => e ? t ? (i) => e(i) || t(i) : e : t,
        hideOn: (e, t) => e ? t ? (i, n, r) => e(i, n, r) || t(i, n, r) : e : t,
        autoPanel: (e, t) => e || t
      })
    };
  }
});
function Eo(s, e) {
  return s ? e ? (t, i) => e(s(t, i), i) : s : e;
}
function _a(s) {
  let e = [];
  if (s)
    e: for (let { name: t } of s) {
      for (let i = 0; i < t.length; i++) {
        let n = t[i];
        if (/[a-zA-Z]/.test(n) && !e.some((r) => r.toLowerCase() == n.toLowerCase())) {
          e.push(n);
          continue e;
        }
      }
      e.push("");
    }
  return e;
}
function Ya(s, e, t) {
  var i;
  let n = t ? _a(e.actions) : [];
  return Ve("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, Ve("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage(s) : e.message), (i = e.actions) === null || i === void 0 ? void 0 : i.map((r, o) => {
    let l = !1, a = (d) => {
      if (d.preventDefault(), l)
        return;
      l = !0;
      let p = Kt(s.state.field(Oe).diagnostics, e);
      p && r.apply(s, p.from, p.to);
    }, { name: h } = r, c = n[o] ? h.indexOf(n[o]) : -1, f = c < 0 ? h : [
      h.slice(0, c),
      Ve("u", h.slice(c, c + 1)),
      h.slice(c + 1)
    ], u = r.markClass ? " " + r.markClass : "";
    return Ve("button", {
      type: "button",
      class: "cm-diagnosticAction" + u,
      onclick: a,
      onmousedown: a,
      "aria-label": ` Action: ${h}${c < 0 ? "" : ` (access key "${n[o]})"`}.`
    }, f);
  }), e.source && Ve("div", { class: "cm-diagnosticSource" }, e.source));
}
class Zd extends gi {
  constructor(e) {
    super(), this.sev = e;
  }
  eq(e) {
    return e.sev == this.sev;
  }
  toDOM() {
    return Ve("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
  }
}
class Ro {
  constructor(e, t) {
    this.diagnostic = t, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = Ya(e, t, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class mn {
  constructor(e) {
    this.view = e, this.items = [];
    let t = (n) => {
      if (!(n.ctrlKey || n.altKey || n.metaKey)) {
        if (n.keyCode == 27)
          Lo(this.view), this.view.focus();
        else if (n.keyCode == 38 || n.keyCode == 33)
          this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
        else if (n.keyCode == 40 || n.keyCode == 34)
          this.moveSelection((this.selectedIndex + 1) % this.items.length);
        else if (n.keyCode == 36)
          this.moveSelection(0);
        else if (n.keyCode == 35)
          this.moveSelection(this.items.length - 1);
        else if (n.keyCode == 13)
          this.view.focus();
        else if (n.keyCode >= 65 && n.keyCode <= 90 && this.selectedIndex >= 0) {
          let { diagnostic: r } = this.items[this.selectedIndex], o = _a(r.actions);
          for (let l = 0; l < o.length; l++)
            if (o[l].toUpperCase().charCodeAt(0) == n.keyCode) {
              let a = Kt(this.view.state.field(Oe).diagnostics, r);
              a && r.actions[l].apply(e, a.from, a.to);
            }
        } else
          return;
        n.preventDefault();
      }
    }, i = (n) => {
      for (let r = 0; r < this.items.length; r++)
        this.items[r].dom.contains(n.target) && this.moveSelection(r);
    };
    this.list = Ve("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: t,
      onclick: i
    }), this.dom = Ve("div", { class: "cm-panel-lint" }, this.list, Ve("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => Lo(this.view)
    }, "×")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(Oe).selected;
    if (!e)
      return -1;
    for (let t = 0; t < this.items.length; t++)
      if (this.items[t].diagnostic == e.diagnostic)
        return t;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(Oe), i = 0, n = !1, r = null, o = /* @__PURE__ */ new Set();
    for (e.between(0, this.view.state.doc.length, (l, a, { spec: h }) => {
      for (let c of h.diagnostics) {
        if (o.has(c))
          continue;
        o.add(c);
        let f = -1, u;
        for (let d = i; d < this.items.length; d++)
          if (this.items[d].diagnostic == c) {
            f = d;
            break;
          }
        f < 0 ? (u = new Ro(this.view, c), this.items.splice(i, 0, u), n = !0) : (u = this.items[f], f > i && (this.items.splice(i, f - i), n = !0)), t && u.diagnostic == t.diagnostic ? u.dom.hasAttribute("aria-selected") || (u.dom.setAttribute("aria-selected", "true"), r = u) : u.dom.hasAttribute("aria-selected") && u.dom.removeAttribute("aria-selected"), i++;
      }
    }); i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      n = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new Ro(this.view, {
      from: -1,
      to: -1,
      severity: "info",
      message: this.view.state.phrase("No diagnostics")
    })), n = !0), r ? (this.list.setAttribute("aria-activedescendant", r.id), this.view.requestMeasure({
      key: this,
      read: () => ({ sel: r.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }),
      write: ({ sel: l, panel: a }) => {
        let h = a.height / this.list.offsetHeight;
        l.top < a.top ? this.list.scrollTop -= (a.top - l.top) / h : l.bottom > a.bottom && (this.list.scrollTop += (l.bottom - a.bottom) / h);
      }
    })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), n && this.sync();
  }
  sync() {
    let e = this.list.firstChild;
    function t() {
      let i = e;
      e = i.nextSibling, i.remove();
    }
    for (let i of this.items)
      if (i.dom.parentNode == this.list) {
        for (; e != i.dom; )
          t();
        e = i.dom.nextSibling;
      } else
        this.list.insertBefore(i.dom, e);
    for (; e; )
      t();
  }
  moveSelection(e) {
    if (this.selectedIndex < 0)
      return;
    let t = this.view.state.field(Oe), i = Kt(t.diagnostics, this.items[e].diagnostic);
    i && this.view.dispatch({
      selection: { anchor: i.from, head: i.to },
      scrollIntoView: !0,
      effects: Ga.of(i)
    });
  }
  static open(e) {
    return new mn(e);
  }
}
function ep(s, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(s)}</svg>')`;
}
function zi(s) {
  return ep(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${s}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const tp = /* @__PURE__ */ O.baseTheme({
  ".cm-diagnostic": {
    padding: "3px 6px 3px 8px",
    marginLeft: "-1px",
    display: "block",
    whiteSpace: "pre-wrap"
  },
  ".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
  ".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
  ".cm-diagnostic-info": { borderLeft: "5px solid #999" },
  ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" },
  ".cm-diagnosticAction": {
    font: "inherit",
    border: "none",
    padding: "2px 4px",
    backgroundColor: "#444",
    color: "white",
    borderRadius: "3px",
    marginLeft: "8px",
    cursor: "pointer"
  },
  ".cm-diagnosticSource": {
    fontSize: "70%",
    opacity: 0.7
  },
  ".cm-lintRange": {
    backgroundPosition: "left bottom",
    backgroundRepeat: "repeat-x",
    paddingBottom: "0.7px"
  },
  ".cm-lintRange-error": { backgroundImage: /* @__PURE__ */ zi("#f11") },
  ".cm-lintRange-warning": { backgroundImage: /* @__PURE__ */ zi("orange") },
  ".cm-lintRange-info": { backgroundImage: /* @__PURE__ */ zi("#999") },
  ".cm-lintRange-hint": { backgroundImage: /* @__PURE__ */ zi("#66d") },
  ".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
  ".cm-tooltip-lint": {
    padding: 0,
    margin: 0
  },
  ".cm-lintPoint": {
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-2px",
      borderLeft: "3px solid transparent",
      borderRight: "3px solid transparent",
      borderBottom: "4px solid #d11"
    }
  },
  ".cm-lintPoint-warning": {
    "&:after": { borderBottomColor: "orange" }
  },
  ".cm-lintPoint-info": {
    "&:after": { borderBottomColor: "#999" }
  },
  ".cm-lintPoint-hint": {
    "&:after": { borderBottomColor: "#66d" }
  },
  ".cm-panel.cm-panel-lint": {
    position: "relative",
    "& ul": {
      maxHeight: "100px",
      overflowY: "auto",
      "& [aria-selected]": {
        backgroundColor: "#ddd",
        "& u": { textDecoration: "underline" }
      },
      "&:focus [aria-selected]": {
        background_fallback: "#bdf",
        backgroundColor: "Highlight",
        color_fallback: "white",
        color: "HighlightText"
      },
      "& u": { textDecoration: "none" },
      padding: 0,
      margin: 0
    },
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "2px",
      background: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    }
  },
  "&dark .cm-lintRange-active": { backgroundColor: "#86714a80" },
  "&dark .cm-panel.cm-panel-lint ul": {
    "& [aria-selected]": {
      backgroundColor: "#2e343e"
    }
  }
});
function ip(s) {
  return s == "error" ? 4 : s == "warning" ? 3 : s == "info" ? 2 : 1;
}
function np(s) {
  let e = "hint", t = 1;
  for (let i of s) {
    let n = ip(i.severity);
    n > t && (t = n, e = i.severity);
  }
  return e;
}
const sp = /* @__PURE__ */ Ef(Xd, { hideOn: Gd }), rp = [
  Oe,
  /* @__PURE__ */ O.decorations.compute([Oe], (s) => {
    let { selected: e, panel: t } = s.field(Oe);
    return !e || !t || e.from == e.to ? W.none : W.set([
      Jd.range(e.from, e.to)
    ]);
  }),
  sp,
  tp
];
function op(s, e = s.state) {
  const t = /* @__PURE__ */ new Set();
  for (const { from: i, to: n } of s.visibleRanges) {
    let r = i;
    for (; r <= n; ) {
      const o = e.doc.lineAt(r);
      t.has(o) || t.add(o), r = o.to + 1;
    }
  }
  return t;
}
function Vs(s) {
  const e = s.selection.main.head;
  return s.doc.lineAt(e);
}
function Po(s, e) {
  let t = 0;
  e: for (let i = 0; i < s.length; i++)
    switch (s[i]) {
      case " ":
      case " ": {
        t += 1;
        continue e;
      }
      case "	": {
        t += e - t % e;
        continue e;
      }
      case "\r":
        continue e;
      default:
        break e;
    }
  return t;
}
const yn = /* @__PURE__ */ M.define({
  combine(s) {
    return $t(s, {
      highlightActiveBlock: !0,
      hideFirstIndent: !1,
      markerType: "fullScope",
      thickness: 1
    });
  }
});
class lp {
  /**
   * @param lines - The set of lines to get the indentation map for.
   * @param state - The {@link EditorState} to derive the indentation map from.
   * @param unitWidth - The width of the editor's indent unit.
   * @param markerType - The type of indentation to use (terminate at end of scope vs last line of code in scope)
   */
  constructor(e, t, i, n) {
    this.lines = e, this.state = t, this.map = /* @__PURE__ */ new Map(), this.unitWidth = i, this.markerType = n;
    for (const r of this.lines)
      this.add(r);
    this.state.facet(yn).highlightActiveBlock && this.findAndSetActiveLines();
  }
  /**
   * Checks if the indentation map has an entry for the given line.
   *
   * @param line - The {@link Line} or line number to check for.
   */
  has(e) {
    return this.map.has(typeof e == "number" ? e : e.number);
  }
  /**
   * Returns the {@link IndentEntry} for the given line.
   *
   * Note that this function will throw an error if the line does not exist in the map.
   *
   * @param line - The {@link Line} or line number to get the entry for.
   */
  get(e) {
    const t = this.map.get(typeof e == "number" ? e : e.number);
    if (!t)
      throw new Error("Line not found in indentation map");
    return t;
  }
  /**
   * Sets the {@link IndentEntry} for the given line.
   *
   * @param line - The {@link Line} to set the entry for.
   * @param col - The visual beginning whitespace width of the line.
   * @param level - The indentation level of the line.
   */
  set(e, t, i) {
    const n = !e.text.trim().length, r = { line: e, col: t, level: i, empty: n };
    return this.map.set(r.line.number, r), r;
  }
  /**
   * Adds a line to the indentation map.
   *
   * @param line - The {@link Line} to add to the map.
   */
  add(e) {
    if (this.has(e))
      return this.get(e);
    if (!e.length || !e.text.trim().length) {
      if (e.number === 1)
        return this.set(e, 0, 0);
      if (e.number === this.state.doc.lines) {
        const o = this.closestNonEmpty(e, -1);
        return this.set(e, 0, o.level);
      }
      const n = this.closestNonEmpty(e, -1), r = this.closestNonEmpty(e, 1);
      return n.level >= r.level && this.markerType !== "codeOnly" ? this.set(e, 0, n.level) : n.empty && n.level === 0 && r.level !== 0 ? this.set(e, 0, 0) : r.level > n.level ? this.set(e, 0, n.level + 1) : this.set(e, 0, r.level);
    }
    const t = Po(e.text, this.state.tabSize), i = Math.floor(t / this.unitWidth);
    return this.set(e, t, i);
  }
  /**
   * Finds the closest non-empty line, starting from the given line.
   *
   * @param from - The {@link Line} to start from.
   * @param dir - The direction to search in. Either `1` or `-1`.
   */
  closestNonEmpty(e, t) {
    let i = e.number + t;
    for (; t === -1 ? i >= 1 : i <= this.state.doc.lines; ) {
      if (this.has(i)) {
        const o = this.get(i);
        if (!o.empty)
          return o;
      }
      const r = this.state.doc.line(i);
      if (r.text.trim().length) {
        const o = Po(r.text, this.state.tabSize), l = Math.floor(o / this.unitWidth);
        return this.set(r, o, l);
      }
      i += t;
    }
    const n = this.state.doc.line(t === -1 ? 1 : this.state.doc.lines);
    return this.set(n, 0, 0);
  }
  /**
   * Finds the state's active block (via the current selection) and sets all
   * the active indent level for the lines in the block.
   */
  findAndSetActiveLines() {
    const e = Vs(this.state);
    if (!this.has(e))
      return;
    let t = this.get(e);
    if (this.has(t.line.number + 1)) {
      const r = this.get(t.line.number + 1);
      r.level > t.level && (t = r);
    }
    if (this.has(t.line.number - 1)) {
      const r = this.get(t.line.number - 1);
      r.level > t.level && (t = r);
    }
    if (t.level === 0)
      return;
    t.active = t.level;
    let i, n;
    for (i = t.line.number; i > 1; i--) {
      if (!this.has(i - 1))
        continue;
      const r = this.get(i - 1);
      if (r.level < t.level)
        break;
      r.active = t.level;
    }
    for (n = t.line.number; n < this.state.doc.lines; n++) {
      if (!this.has(n + 1))
        continue;
      const r = this.get(n + 1);
      if (r.level < t.level)
        break;
      r.active = t.level;
    }
  }
}
function ap(s) {
  const e = {
    light: "#F0F1F2",
    dark: "#2B3245",
    activeLight: "#E4E5E6",
    activeDark: "#3C445C"
  };
  let t = e;
  return s && (t = Object.assign(Object.assign({}, e), s)), O.baseTheme({
    "&light": {
      "--indent-marker-bg-color": t.light,
      "--indent-marker-active-bg-color": t.activeLight
    },
    "&dark": {
      "--indent-marker-bg-color": t.dark,
      "--indent-marker-active-bg-color": t.activeDark
    },
    ".cm-line": {
      position: "relative"
    },
    // this pseudo-element is used to draw the indent markers,
    // while still allowing the line to have its own background.
    ".cm-indent-markers::before": {
      content: '""',
      position: "absolute",
      top: 0,
      // .cm-line has a padding of 2px 
      // https://github.com/codemirror/view/blob/1c0a0880fc904714339f059658f3ba3a88bb8e6e/src/theme.ts#L85
      left: "2px",
      right: 0,
      bottom: 0,
      background: "var(--indent-markers)",
      pointerEvents: "none",
      zIndex: "-1"
    }
  });
}
function Ki(s, e, t, i, n) {
  return `${`repeating-linear-gradient(to right, var(${s}) 0 ${e}px, transparent ${e}px ${t}ch)`} ${i * t}.5ch/calc(${t * n}ch - 1px) no-repeat`;
}
function hp(s, e, t, i, n) {
  const { level: r, active: o } = s;
  if (n = n ?? i, t && r === 0)
    return [];
  const l = t ? 1 : 0, a = [];
  if (o !== void 0) {
    const h = o - l - 1;
    h > 0 && a.push(Ki("--indent-marker-bg-color", i, e, l, h)), a.push(Ki("--indent-marker-active-bg-color", n, e, o - 1, 1)), o !== r && a.push(Ki("--indent-marker-bg-color", i, e, o, r - o));
  } else
    a.push(Ki("--indent-marker-bg-color", i, e, l, r - l));
  return a.join(",");
}
class cp {
  constructor(e) {
    this.view = e, this.unitWidth = zt(e.state), this.currentLineNumber = Vs(e.state).number, this.generate(e.state);
  }
  update(e) {
    const t = zt(e.state), i = t !== this.unitWidth;
    i && (this.unitWidth = t);
    const n = Vs(e.state).number, r = n !== this.currentLineNumber;
    this.currentLineNumber = n;
    const o = e.state.facet(yn).highlightActiveBlock && r;
    (e.docChanged || e.viewportChanged || i || o) && this.generate(e.state);
  }
  generate(e) {
    const t = new st(), i = op(this.view, e), { hideFirstIndent: n, markerType: r, thickness: o, activeThickness: l } = e.facet(yn), a = new lp(i, e, this.unitWidth, r);
    for (const h of i) {
      const c = a.get(h.number);
      if (!c?.level)
        continue;
      const f = hp(c, this.unitWidth, n, o, l);
      t.add(h.from, h.from, W.line({
        class: "cm-indent-markers",
        attributes: {
          style: `--indent-markers: ${f}`
        }
      }));
    }
    this.decorations = t.finish();
  }
}
function fp(s = {}) {
  return [
    yn.of(s),
    ap(s.colors),
    ce.fromClass(cp, {
      decorations: (e) => e.decorations
    })
  ];
}
const up = 3e4;
let Xi;
function kp(s) {
  Xi = Promise.resolve(s);
}
function dp() {
  return Xi ??= pp(
    (async () => {
      const s = "/_framework/dotnet.js", { dotnet: e } = await gp(s), t = await e.withDiagnosticTracing(!1).create();
      return (await t.getAssemblyExports(t.getConfig().mainAssemblyName)).PixlExports;
    })()
  ).catch((s) => {
    throw Xi = void 0, s;
  }), Xi;
}
function pp(s) {
  return new Promise((e, t) => {
    const i = setTimeout(() => {
      t(new Error("Timed out loading the Pixl runtime"));
    }, up);
    s.then(
      (n) => {
        clearTimeout(i), e(n);
      },
      (n) => {
        clearTimeout(i), t(n);
      }
    );
  });
}
function gp(s) {
  return new Promise((e, t) => {
    const i = `__pixlImport${Math.random().toString(36).slice(2)}`, n = () => {
      delete window[i], r.remove();
    };
    window[i] = (o) => {
      n(), e(o);
    };
    const r = document.createElement("script");
    r.type = "module", r.textContent = `import * as module_ from ${JSON.stringify(s)}; window.${i}(module_);`, r.addEventListener("error", () => {
      n(), t(new Error(`Could not load ${s}`));
    }), document.head.appendChild(r);
  });
}
const mp = ["", "px-keyword", "px-command", "px-text", "px-number", "px-builtin", "px-comment", "px-name"];
function yp(s) {
  const e = (t) => {
    const i = s();
    if (!i) return W.none;
    const n = t.state.doc.toString(), r = i.Highlight(n), o = new st();
    for (let l = 0; l + 2 < r.length; l += 3) {
      const a = r[l] ?? 0, h = r[l + 1] ?? 0, c = mp[r[l + 2] ?? 0];
      !c || h <= 0 || a + h > n.length || o.add(a, a + h, W.mark({ class: c }));
    }
    return o.finish();
  };
  return ce.fromClass(
    class {
      decorations;
      constructor(t) {
        this.decorations = e(t);
      }
      update(t) {
        (t.docChanged || this.decorations === W.none) && (this.decorations = e(t.view));
      }
    },
    { decorations: (t) => t.decorations }
  );
}
const Io = 'var(--code-font, Consolas, "Cascadia Mono", monospace)', bp = O.theme(
  {
    "&": { backgroundColor: "var(--editor-bg, #17191d)", color: "var(--px-default, #d6d8de)", height: "100%", fontSize: "calc(14px * var(--ui-scale, 1))" },
    ".cm-content": { fontFamily: Io, caretColor: "var(--px-default, #d6d8de)" },
    ".cm-scroller": { fontFamily: Io },
    ".cm-gutters": { backgroundColor: "var(--editor-bg, #17191d)", color: "var(--px-comment, #7e88a0)", border: "none" },
    ".cm-activeLine": { backgroundColor: "var(--editor-active, #1f2228)" },
    ".cm-activeLineGutter": { backgroundColor: "var(--editor-active, #1f2228)" },
    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground": { backgroundColor: "var(--selection, #283042)" },
    ".cm-cursor": { borderLeftColor: "var(--px-default, #d6d8de)" },
    ".px-keyword": { color: "var(--px-keyword, #7aa2f7)" },
    ".px-command": { color: "var(--px-command, #bb9af7)" },
    ".px-text": { color: "var(--px-text, #9ece6a)" },
    ".px-number": { color: "var(--px-number, #ff9e64)" },
    ".px-builtin": { color: "var(--px-builtin, #7dcfff)" },
    ".px-comment": { color: "var(--px-comment, #7e88a0)", fontStyle: "italic" },
    ".px-name": { color: "var(--px-name, #c0caf5)" },
    ".cm-lintRange-error": { backgroundImage: "none", borderBottom: "2px wavy var(--error, #f7768e)" },
    ".cm-tooltip": { backgroundColor: "var(--chrome, #212429)", color: "var(--on-surface, #d6d8de)", border: "1px solid var(--hairline, #2e3238)" }
  }
  // The dark/light flag lives in the editor's `scheme` compartment (index.ts), driven by --color-scheme.
);
let G = null, No = null, oi = null, Fs = !1;
const Ja = new qt(), Xa = new qt();
let zs = !0, Zt = { hairline: "#2e3238", active: "#4a5063" };
function Qa() {
  return fp({
    thickness: 1,
    colors: { light: Zt.hairline, dark: Zt.hairline, activeLight: Zt.active, activeDark: Zt.active }
  });
}
function Sp(s, e, t = !0) {
  Zt = { hairline: s, active: e }, zs = t, G?.dispatch({ effects: [Ja.reconfigure(Qa()), Xa.reconfigure(O.darkTheme.of(zs))] });
}
async function Cp(s, e, t, i) {
  const n = oi ?? e;
  wp(), await i, No = await dp();
  const r = oi ?? n;
  let o = -1, l = -1;
  G = new O({
    parent: s,
    state: V.create({
      doc: r,
      extensions: [
        qf(),
        Uf(),
        vf(),
        mf(),
        qu(),
        Tu(),
        An.of("  "),
        Jl.of([...jd, ...Qu, Ud]),
        yp(() => No),
        bp,
        Ja.of(Qa()),
        Xa.of(O.darkTheme.of(zs)),
        O.updateListener.of((a) => {
          const h = a.state.selection.main.head, c = a.state.doc.lineAt(h).number;
          Fs || (a.docChanged ? t.invokeMethodAsync("OnEditorChanged", a.state.doc.toString(), c, h) : a.selectionSet && (c !== o || h !== l) && t.invokeMethodAsync("OnEditorCaretMoved", c, h)), o = c, l = h;
        })
      ]
    })
  }), oi = null;
}
function Ap(s) {
  if (!G) {
    oi = s;
    return;
  }
  Fs = !0;
  try {
    G.dispatch({ changes: { from: 0, to: G.state.doc.length, insert: s } });
  } finally {
    Fs = !1;
  }
}
function Mp() {
  return G?.state.doc.toString() ?? "";
}
function Tp(s) {
  if (!G) return;
  const e = JSON.parse(s), t = G.state.doc.length, i = e.filter((n) => n.from >= 0 && n.from <= t).map((n) => ({ from: n.from, to: Math.min(Math.max(n.to, n.from + 1), t), severity: "error", message: n.message }));
  G.dispatch(Yd(G.state, i));
}
function Op(s) {
  if (!G) return;
  const e = Math.max(0, Math.min(s, G.state.doc.length));
  G.dispatch({ selection: { anchor: e }, scrollIntoView: !0 }), G.focus();
}
function Bp() {
  if (!G) return JSON.stringify({ caret: 0, from: 0, to: 0 });
  const s = G.state.selection.main;
  return JSON.stringify({ caret: s.head, from: s.from, to: s.to });
}
function Dp(s, e, t, i) {
  if (!G) return;
  const n = G.state.doc.length, r = Math.max(0, Math.min(s, n)), o = Math.max(r, Math.min(e, n)), l = n - (o - r) + t.length, a = Math.max(0, Math.min(i, l));
  G.dispatch({ changes: { from: r, to: o, insert: t }, selection: { anchor: a }, scrollIntoView: !0 }), G.focus();
}
function wp() {
  G?.destroy(), G = null, oi = null;
}
export {
  Mp as a,
  Ap as b,
  kp as c,
  wp as d,
  Cp as e,
  Op as f,
  Bp as g,
  Sp as h,
  dp as l,
  Dp as r,
  Tp as s
};

! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    var n = [],
        r = n.slice,
        i = n.concat,
        o = n.push,
        a = n.indexOf,
        s = {},
        l = s.toString,
        u = s.hasOwnProperty,
        c = {},
        d = "1.11.1",
        f = function(e, t) {
            return new f.fn.init(e, t)
        },
        p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        h = /^-ms-/,
        m = /-([\da-z])/gi,
        g = function(e, t) {
            return t.toUpperCase()
        };

    function v(e) {
        var t = e.length,
            n = f.type(e);
        return "function" !== n && !f.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    f.fn = f.prototype = {
        jquery: d,
        constructor: f,
        selector: "",
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : r.call(this)
        },
        pushStack: function(e) {
            var t = f.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return f.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(f.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: o,
        sort: n.sort,
        splice: n.splice
    }, f.extend = f.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || f.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], n = i[r], a !== n && (u && n && (f.isPlainObject(n) || (t = f.isArray(n))) ? (t ? (t = !1, o = e && f.isArray(e) ? e : []) : o = e && f.isPlainObject(e) ? e : {}, a[r] = f.extend(u, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, f.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === f.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === f.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !f.isArray(e) && e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== f.type(e) || e.nodeType || f.isWindow(e)) return !1;
            try {
                if (e.constructor && !u.call(e, "constructor") && !u.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (c.ownLast)
                for (t in e) return u.call(e, t);
            for (t in e);
            return void 0 === t || u.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? s[l.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && f.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(h, "ms-").replace(m, g)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = v(e);
            if (n) {
                if (a)
                    for (; o > i && !1 !== (r = t.apply(e[i], n)); i++);
                else
                    for (i in e)
                        if (r = t.apply(e[i], n), !1 === r) break
            } else if (a)
                for (; o > i && !1 !== (r = t.call(e[i], i, e[i])); i++);
            else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), !1 === r) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (v(Object(e)) ? f.merge(n, "string" == typeof e ? [e] : e) : o.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (a) return a.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
            if (n != n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, o = 0,
                a = e.length,
                s = [];
            if (v(e))
                for (; a > o; o++) r = t(e[o], o, n), null != r && s.push(r);
            else
                for (o in e) r = t(e[o], o, n), null != r && s.push(r);
            return i.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (o = e[t], t = e, e = o), f.isFunction(e) ? (n = r.call(arguments, 2), (i = function() {
                return e.apply(t || this, n.concat(r.call(arguments)))
            }).guid = e.guid = e.guid || f.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: c
    }), f.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        s["[object " + t + "]"] = t.toLowerCase()
    });
    var y = function(e) {
        var t, n, r, i, o, a, s, l, u, c, d, f, p, h, m, g, v, y, b, x = "sizzle" + -new Date,
            w = e.document,
            T = 0,
            C = 0,
            N = oe(),
            E = oe(),
            k = oe(),
            S = function(e, t) {
                return e === t && (d = !0), 0
            },
            A = "undefined",
            D = 1 << 31,
            j = {}.hasOwnProperty,
            L = [],
            H = L.pop,
            _ = L.push,
            q = L.push,
            M = L.slice,
            O = L.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            B = "[\\x20\\t\\r\\n\\f]",
            P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            R = P.replace("w", "w#"),
            W = "\\[" + B + "*(" + P + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + B + "*\\]",
            $ = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            z = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
            I = new RegExp("^" + B + "*," + B + "*"),
            X = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
            U = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
            V = new RegExp($),
            J = new RegExp("^" + R + "$"),
            Y = {
                ID: new RegExp("^#(" + P + ")"),
                CLASS: new RegExp("^\\.(" + P + ")"),
                TAG: new RegExp("^(" + P.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + $),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + F + ")$", "i"),
                needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = /'|\\/g,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
            re = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            q.apply(L = M.call(w.childNodes), w.childNodes), L[w.childNodes.length].nodeType
        } catch (e) {
            q = {
                apply: L.length ? function(e, t) {
                    _.apply(e, M.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function ie(e, t, r, i) {
            var o, s, u, c, d, h, v, y, T, C;
            if ((t ? t.ownerDocument || t : w) !== p && f(t), t = t || p, r = r || [], !e || "string" != typeof e) return r;
            if (1 !== (c = t.nodeType) && 9 !== c) return [];
            if (m && !i) {
                if (o = Z.exec(e))
                    if (u = o[1]) {
                        if (9 === c) {
                            if (!(s = t.getElementById(u)) || !s.parentNode) return r;
                            if (s.id === u) return r.push(s), r
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(u)) && b(t, s) && s.id === u) return r.push(s), r
                    } else {
                        if (o[2]) return q.apply(r, t.getElementsByTagName(e)), r;
                        if ((u = o[3]) && n.getElementsByClassName && t.getElementsByClassName) return q.apply(r, t.getElementsByClassName(u)), r
                    }
                if (n.qsa && (!g || !g.test(e))) {
                    if (y = v = x, T = t, C = 9 === c && e, 1 === c && "object" !== t.nodeName.toLowerCase()) {
                        for (h = a(e), (v = t.getAttribute("id")) ? y = v.replace(te, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", d = h.length; d--;) h[d] = y + me(h[d]);
                        T = ee.test(e) && pe(t.parentNode) || t, C = h.join(",")
                    }
                    if (C) try {
                        return q.apply(r, T.querySelectorAll(C)), r
                    } catch (e) {} finally {
                        v || t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(z, "$1"), t, r, i)
        }

        function oe() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function ae(e) {
            return e[x] = !0, e
        }

        function se(e) {
            var t = p.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) r.attrHandle[n[i]] = t
        }

        function ue(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ce(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function de(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function fe(e) {
            return ae(function(t) {
                return t = +t, ae(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function pe(e) {
            return e && typeof e.getElementsByTagName !== A && e
        }
        n = ie.support = {}, o = ie.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, f = ie.setDocument = function(e) {
            var t, i = e ? e.ownerDocument || e : w,
                a = i.defaultView;
            return i !== p && 9 === i.nodeType && i.documentElement ? (p = i, h = i.documentElement, m = !o(i), a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function() {
                f()
            }, !1) : a.attachEvent && a.attachEvent("onunload", function() {
                f()
            })), n.attributes = se(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = se(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = K.test(i.getElementsByClassName) && se(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), n.getById = se(function(e) {
                return h.appendChild(e).id = x, !i.getElementsByName || !i.getElementsByName(x).length
            }), n.getById ? (r.find.ID = function(e, t) {
                if (typeof t.getElementById !== A && m) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, r.filter.ID = function(e) {
                var t = e.replace(ne, re);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete r.find.ID, r.filter.ID = function(e) {
                var t = e.replace(ne, re);
                return function(e) {
                    var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== A ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== A && m ? t.getElementsByClassName(e) : void 0
            }, v = [], g = [], (n.qsa = K.test(i.querySelectorAll)) && (se(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && g.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + B + "*(?:value|" + F + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
            }), se(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + B + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && se(function(e) {
                n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), v.push("!=", $)
            }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(h.compareDocumentPosition), b = t || K.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, S = t ? function(e, t) {
                if (e === t) return d = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === i || e.ownerDocument === w && b(w, e) ? -1 : t === i || t.ownerDocument === w && b(w, t) ? 1 : c ? O.call(c, e) - O.call(c, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return d = !0, 0;
                var n, r = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    s = [e],
                    l = [t];
                if (!o || !a) return e === i ? -1 : t === i ? 1 : o ? -1 : a ? 1 : c ? O.call(c, e) - O.call(c, t) : 0;
                if (o === a) return ue(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[r] === l[r];) r++;
                return r ? ue(s[r], l[r]) : s[r] === w ? -1 : l[r] === w ? 1 : 0
            }, i) : p
        }, ie.matches = function(e, t) {
            return ie(e, null, null, t)
        }, ie.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== p && f(e), t = t.replace(U, "='$1']"), !(!n.matchesSelector || !m || v && v.test(t) || g && g.test(t))) try {
                var r = y.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return ie(t, p, null, [e]).length > 0
        }, ie.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && f(e), b(e, t)
        }, ie.attr = function(e, t) {
            (e.ownerDocument || e) !== p && f(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && j.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
            return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, ie.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ie.uniqueSort = function(e) {
            var t, r = [],
                i = 0,
                o = 0;
            if (d = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(S), d) {
                for (; t = e[o++];) t === e[o] && (i = r.push(o));
                for (; i--;) e.splice(r[i], 1)
            }
            return c = null, e
        }, i = ie.getText = function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[r++];) n += i(t);
            return n
        }, (r = ie.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ne, re), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, re), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ne, re).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = N[e + " "];
                    return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && N(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = ie.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (p = (u = (c = g[x] || (g[x] = {}))[e] || [])[0] === T && u[1], f = u[0] === T && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++f && d === t) {
                                        c[e] = [T, p, f];
                                        break
                                    }
                            } else if (y && (u = (t[x] || (t[x] = {}))[e]) && u[0] === T) f = u[1];
                            else
                                for (;
                                    (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[x] || (d[x] = {}))[e] = [T, f]), d !== t)););
                            return (f -= i) === r || f % r == 0 && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                    return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
                        for (var r, o = i(e, t), a = o.length; a--;) r = O.call(e, o[a]), e[r] = !(n[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: ae(function(e) {
                    var t = [],
                        n = [],
                        r = s(e.replace(z, "$1"));
                    return r[x] ? ae(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }),
                has: ae(function(e) {
                    return function(t) {
                        return ie(e, t).length > 0
                    }
                }),
                contains: ae(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }),
                lang: ae(function(e) {
                    return J.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(ne, re).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return Q.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: fe(function() {
                    return [0]
                }),
                last: fe(function(e, t) {
                    return [t - 1]
                }),
                eq: fe(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: fe(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: fe(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: fe(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: fe(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = ce(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = de(t);

        function he() {}

        function me(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function ge(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = C++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, l, u = [T, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if ((s = (l = t[x] || (t[x] = {}))[r]) && s[0] === T && s[1] === o) return u[2] = s[2];
                            if (l[r] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function ve(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function ye(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }

        function be(e, t, n, r, i, o) {
            return r && !r[x] && (r = be(r)), i && !i[x] && (i = be(i, o)), ae(function(o, a, s, l) {
                var u, c, d, f = [],
                    p = [],
                    h = a.length,
                    m = o || function(e, t, n) {
                        for (var r = 0, i = t.length; i > r; r++) ie(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    g = !e || !o && t ? m : ye(m, f, e, s, l),
                    v = n ? i || (o ? e : h || r) ? [] : a : g;
                if (n && n(g, v, s, l), r)
                    for (u = ye(v, p), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (v[p[c]] = !(g[p[c]] = d));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (u = [], c = v.length; c--;)(d = v[c]) && u.push(g[c] = d);
                            i(null, v = [], u, l)
                        }
                        for (c = v.length; c--;)(d = v[c]) && (u = i ? O.call(o, d) : f[c]) > -1 && (o[u] = !(a[u] = d))
                    }
                } else v = ye(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, l) : q.apply(a, v)
            })
        }

        function xe(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], l = a ? 1 : 0, c = ge(function(e) {
                    return e === t
                }, s, !0), d = ge(function(e) {
                    return O.call(t, e) > -1
                }, s, !0), f = [function(e, n, r) {
                    return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : d(e, n, r))
                }]; o > l; l++)
                if (n = r.relative[e[l].type]) f = [ge(ve(f), n)];
                else {
                    if ((n = r.filter[e[l].type].apply(null, e[l].matches))[x]) {
                        for (i = ++l; o > i && !r.relative[e[i].type]; i++);
                        return be(l > 1 && ve(f), l > 1 && me(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(z, "$1"), n, i > l && xe(e.slice(l, i)), o > i && xe(e = e.slice(i)), o > i && me(e))
                    }
                    f.push(n)
                }
            return ve(f)
        }
        return he.prototype = r.filters = r.pseudos, r.setFilters = new he, a = ie.tokenize = function(e, t) {
            var n, i, o, a, s, l, u, c = E[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, l = [], u = r.preFilter; s;) {
                (!n || (i = I.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), n = !1, (i = X.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(z, " ")
                }), s = s.slice(n.length));
                for (a in r.filter) !(i = Y[a].exec(s)) || u[a] && !(i = u[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? ie.error(e) : E(e, l).slice(0)
        }, s = ie.compile = function(e, t) {
            var n, i, o, s, l, c, d = [],
                f = [],
                h = k[e + " "];
            if (!h) {
                for (t || (t = a(e)), n = t.length; n--;) h = xe(t[n]), h[x] ? d.push(h) : f.push(h);
                (h = k(e, (i = f, s = (o = d).length > 0, l = i.length > 0, c = function(e, t, n, a, c) {
                    var d, f, h, m = 0,
                        g = "0",
                        v = e && [],
                        y = [],
                        b = u,
                        x = e || l && r.find.TAG("*", c),
                        w = T += null == b ? 1 : Math.random() || .1,
                        C = x.length;
                    for (c && (u = t !== p && t); g !== C && null != (d = x[g]); g++) {
                        if (l && d) {
                            for (f = 0; h = i[f++];)
                                if (h(d, t, n)) {
                                    a.push(d);
                                    break
                                }
                            c && (T = w)
                        }
                        s && ((d = !h && d) && m--, e && v.push(d))
                    }
                    if (m += g, s && g !== m) {
                        for (f = 0; h = o[f++];) h(v, y, t, n);
                        if (e) {
                            if (m > 0)
                                for (; g--;) v[g] || y[g] || (y[g] = H.call(a));
                            y = ye(y)
                        }
                        q.apply(a, y), c && !e && y.length > 0 && m + o.length > 1 && ie.uniqueSort(a)
                    }
                    return c && (T = w, u = b), v
                }, s ? ae(c) : c))).selector = e
            }
            return h
        }, l = ie.select = function(e, t, i, o) {
            var l, u, c, d, f, p = "function" == typeof e && e,
                h = !o && a(e = p.selector || e);
            if (i = i || [], 1 === h.length) {
                if ((u = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && n.getById && 9 === t.nodeType && m && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(c.matches[0].replace(ne, re), t) || [])[0])) return i;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                for (l = Y.needsContext.test(e) ? 0 : u.length; l-- && (c = u[l], !r.relative[d = c.type]);)
                    if ((f = r.find[d]) && (o = f(c.matches[0].replace(ne, re), ee.test(u[0].type) && pe(t.parentNode) || t))) {
                        if (u.splice(l, 1), !(e = o.length && me(u))) return q.apply(i, o), i;
                        break
                    }
            }
            return (p || s(e, h))(o, t, !m, i, ee.test(e) && pe(t.parentNode) || t), i
        }, n.sortStable = x.split("").sort(S).join("") === x, n.detectDuplicates = !!d, f(), n.sortDetached = se(function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("div"))
        }), se(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && se(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), se(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(F, function(e, t, n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), ie
    }(e);
    f.find = y, f.expr = y.selectors, f.expr[":"] = f.expr.pseudos, f.unique = y.uniqueSort, f.text = y.getText, f.isXMLDoc = y.isXML, f.contains = y.contains;
    var b = f.expr.match.needsContext,
        x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function T(e, t, n) {
        if (f.isFunction(t)) return f.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return f.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (w.test(t)) return f.filter(t, e, n);
            t = f.filter(t, e)
        }
        return f.grep(e, function(e) {
            return f.inArray(e, t) >= 0 !== n
        })
    }
    f.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? f.find.matchesSelector(r, e) ? [r] : [] : f.find.matches(e, f.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, f.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(f(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (f.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) f.find(e, r[t], n);
            return (n = this.pushStack(i > 1 ? f.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(T(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(T(this, e || [], !0))
        },
        is: function(e) {
            return !!T(this, "string" == typeof e && b.test(e) ? f(e) : e || [], !1).length
        }
    });
    var C, N = e.document,
        E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (f.fn.init = function(e, t) {
        var n, r;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : E.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || C).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof f ? t[0] : t, f.merge(this, f.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : N, !0)), x.test(n[1]) && f.isPlainObject(t))
                    for (n in t) f.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if ((r = N.getElementById(n[2])) && r.parentNode) {
                if (r.id !== n[2]) return C.find(e);
                this.length = 1, this[0] = r
            }
            return this.context = N, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : f.isFunction(e) ? void 0 !== C.ready ? C.ready(e) : e(f) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), f.makeArray(e, this))
    }).prototype = f.fn, C = f(N);
    var k = /^(?:parents|prev(?:Until|All))/,
        S = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function A(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }
    f.extend({
        dir: function(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !f(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), f.fn.extend({
        has: function(e) {
            var t, n = f(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (f.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = b.test(e) || "string" != typeof e ? f(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && f.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? f.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? f.inArray(this[0], f(e)) : f.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(f.unique(f.merge(this.get(), f(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), f.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return f.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return f.dir(e, "parentNode", n)
        },
        next: function(e) {
            return A(e, "nextSibling")
        },
        prev: function(e) {
            return A(e, "previousSibling")
        },
        nextAll: function(e) {
            return f.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return f.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return f.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return f.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return f.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return f.sibling(e.firstChild)
        },
        contents: function(e) {
            return f.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : f.merge([], e.childNodes)
        }
    }, function(e, t) {
        f.fn[e] = function(n, r) {
            var i = f.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = f.filter(r, i)), this.length > 1 && (S[e] || (i = f.unique(i)), k.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var D, j = /\S+/g,
        L = {};

    function H() {
        N.addEventListener ? (N.removeEventListener("DOMContentLoaded", _, !1), e.removeEventListener("load", _, !1)) : (N.detachEvent("onreadystatechange", _), e.detachEvent("onload", _))
    }

    function _() {
        (N.addEventListener || "load" === event.type || "complete" === N.readyState) && (H(), f.ready())
    }
    f.Callbacks = function(e) {
        var t, n, r, i, o, a, s, l, u = [],
            c = !(e = "string" == typeof e ? L[e] || (n = L[t = e] = {}, f.each(t.match(j) || [], function(e, t) {
                n[t] = !0
            }), n) : f.extend({}, e)).once && [],
            d = function(t) {
                for (i = e.memory && t, o = !0, s = l || 0, l = 0, a = u.length, r = !0; u && a > s; s++)
                    if (!1 === u[s].apply(t[0], t[1]) && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                r = !1, u && (c ? c.length && d(c.shift()) : i ? u = [] : p.disable())
            },
            p = {
                add: function() {
                    if (u) {
                        var t = u.length;
                        ! function t(n) {
                            f.each(n, function(n, r) {
                                var i = f.type(r);
                                "function" === i ? e.unique && p.has(r) || u.push(r) : r && r.length && "string" !== i && t(r)
                            })
                        }(arguments), r ? a = u.length : i && (l = t, d(i))
                    }
                    return this
                },
                remove: function() {
                    return u && f.each(arguments, function(e, t) {
                        for (var n;
                            (n = f.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (a >= n && a--, s >= n && s--)
                    }), this
                },
                has: function(e) {
                    return e ? f.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], a = 0, this
                },
                disable: function() {
                    return u = c = i = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return c = void 0, i || p.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return !u || o && !c || (t = [e, (t = t || []).slice ? t.slice() : t], r ? c.push(t) : d(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return p
    }, f.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", f.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", f.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", f.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return f.Deferred(function(n) {
                            f.each(t, function(t, o) {
                                var a = f.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && f.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? f.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, f.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, i, o = 0,
                a = r.call(arguments),
                s = a.length,
                l = 1 !== s || e && f.isFunction(e.promise) ? s : 0,
                u = 1 === l ? e : f.Deferred(),
                c = function(e, n, i) {
                    return function(o) {
                        n[e] = this, i[e] = arguments.length > 1 ? r.call(arguments) : o, i === t ? u.notifyWith(n, i) : --l || u.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) a[o] && f.isFunction(a[o].promise) ? a[o].promise().done(c(o, i, a)).fail(u.reject).progress(c(o, n, t)) : --l;
            return l || u.resolveWith(i, a), u.promise()
        }
    }), f.fn.ready = function(e) {
        return f.ready.promise().done(e), this
    }, f.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? f.readyWait++ : f.ready(!0)
        },
        ready: function(e) {
            if (!0 === e ? !--f.readyWait : !f.isReady) {
                if (!N.body) return setTimeout(f.ready);
                f.isReady = !0, !0 !== e && --f.readyWait > 0 || (D.resolveWith(N, [f]), f.fn.triggerHandler && (f(N).triggerHandler("ready"), f(N).off("ready")))
            }
        }
    }), f.ready.promise = function(t) {
        if (!D)
            if (D = f.Deferred(), "complete" === N.readyState) setTimeout(f.ready);
            else if (N.addEventListener) N.addEventListener("DOMContentLoaded", _, !1), e.addEventListener("load", _, !1);
        else {
            N.attachEvent("onreadystatechange", _), e.attachEvent("onload", _);
            var n = !1;
            try {
                n = null == e.frameElement && N.documentElement
            } catch (e) {}
            n && n.doScroll && function e() {
                if (!f.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(e, 50)
                    }
                    H(), f.ready()
                }
            }()
        }
        return D.promise(t)
    };
    var q, M = "undefined";
    for (q in f(c)) break;
    c.ownLast = "0" !== q, c.inlineBlockNeedsLayout = !1, f(function() {
            var e, t, n, r;
            (n = N.getElementsByTagName("body")[0]) && n.style && (t = N.createElement("div"), (r = N.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== M && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", c.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function() {
            var e = N.createElement("div");
            if (null == c.deleteExpando) {
                c.deleteExpando = !0;
                try {
                    delete e.test
                } catch (e) {
                    c.deleteExpando = !1
                }
            }
            e = null
        }(), f.acceptData = function(e) {
            var t = f.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        };
    var O = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        F = /([A-Z])/g;

    function B(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(F, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : O.test(n) ? f.parseJSON(n) : n)
                } catch (e) {}
                f.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function P(e) {
        var t;
        for (t in e)
            if (("data" !== t || !f.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function R(e, t, r, i) {
        if (f.acceptData(e)) {
            var o, a, s = f.expando,
                l = e.nodeType,
                u = l ? f.cache : e,
                c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || void 0 !== r || "string" != typeof t) return c || (c = l ? e[s] = n.pop() || f.guid++ : s), u[c] || (u[c] = l ? {} : {
                toJSON: f.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? u[c] = f.extend(u[c], t) : u[c].data = f.extend(u[c].data, t)), a = u[c], i || (a.data || (a.data = {}), a = a.data), void 0 !== r && (a[f.camelCase(t)] = r), "string" == typeof t ? (o = a[t], null == o && (o = a[f.camelCase(t)])) : o = a, o
        }
    }

    function W(e, t, n) {
        if (f.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? f.cache : e,
                s = o ? e[f.expando] : f.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    i = (t = f.isArray(t) ? t.concat(f.map(t, f.camelCase)) : t in r ? [t] : (t = f.camelCase(t)) in r ? [t] : t.split(" ")).length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !P(r) : !f.isEmptyObject(r)) return
                }(n || (delete a[s].data, P(a[s]))) && (o ? f.cleanData([e], !0) : c.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    f.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? f.cache[e[f.expando]] : e[f.expando]) && !P(e)
        },
        data: function(e, t, n) {
            return R(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        }
    }), f.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = f.data(o), 1 === o.nodeType && !f._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = f.camelCase(r.slice(5)), B(o, r, i[r])));
                    f._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                f.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                f.data(this, e, t)
            }) : o ? B(o, e, f.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                f.removeData(this, e)
            })
        }
    }), f.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = f._data(e, t), n && (!r || f.isArray(n) ? r = f._data(e, t, f.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = f.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = f._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                f.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return f._data(e, n) || f._data(e, n, {
                empty: f.Callbacks("once memory").add(function() {
                    f._removeData(e, t + "queue"), f._removeData(e, n)
                })
            })
        }
    }), f.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? f.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = f.queue(this, e, t);
                f._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && f.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                f.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = f.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = f._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        z = ["Top", "Right", "Bottom", "Left"],
        I = function(e, t) {
            return e = t || e, "none" === f.css(e, "display") || !f.contains(e.ownerDocument, e)
        },
        X = f.access = function(e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === f.type(n)) {
                i = !0;
                for (s in n) f.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, f.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(f(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        U = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = N.createElement("input"),
            t = N.createElement("div"),
            n = N.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c.leadingWhitespace = 3 === t.firstChild.nodeType, c.tbody = !t.getElementsByTagName("tbody").length, c.htmlSerialize = !!t.getElementsByTagName("link").length, c.html5Clone = "<:nav></:nav>" !== N.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), c.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", c.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", c.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, c.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                c.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == c.deleteExpando) {
            c.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                c.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, r = N.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (c[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), c[t + "Bubbles"] = !1 === r.attributes[n].expando);
        r = null
    }();
    var V = /^(?:input|select|textarea)$/i,
        J = /^key/,
        Y = /^(?:mouse|pointer|contextmenu)|click/,
        G = /^(?:focusinfocus|focusoutblur)$/,
        Q = /^([^.]*)(?:\.(.+)|)$/;

    function K() {
        return !0
    }

    function Z() {
        return !1
    }

    function ee() {
        try {
            return N.activeElement
        } catch (e) {}
    }

    function te(e) {
        var t = ne.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }
    f.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, l, u, c, d, p, h, m, g, v = f._data(e);
            if (v) {
                for (n.handler && (n = (l = n).handler, i = l.selector), n.guid || (n.guid = f.guid++), (a = v.events) || (a = v.events = {}), (c = v.handle) || ((c = v.handle = function(e) {
                        return typeof f === M || e && f.event.triggered === e.type ? void 0 : f.event.dispatch.apply(c.elem, arguments)
                    }).elem = e), s = (t = (t || "").match(j) || [""]).length; s--;) o = Q.exec(t[s]) || [], h = g = o[1], m = (o[2] || "").split(".").sort(), h && (u = f.event.special[h] || {}, h = (i ? u.delegateType : u.bindType) || h, u = f.event.special[h] || {}, d = f.extend({
                    type: h,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && f.expr.match.needsContext.test(i),
                    namespace: m.join(".")
                }, l), (p = a[h]) || (p = a[h] = [], p.delegateCount = 0, u.setup && !1 !== u.setup.call(e, r, m, c) || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, d) : p.push(d), f.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, d, p, h, m, g, v = f.hasData(e) && f._data(e);
            if (v && (c = v.events)) {
                for (u = (t = (t || "").match(j) || [""]).length; u--;)
                    if (s = Q.exec(t[u]) || [], h = g = s[1], m = (s[2] || "").split(".").sort(), h) {
                        for (d = f.event.special[h] || {}, p = c[h = (r ? d.delegateType : d.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) a = p[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !p.length && (d.teardown && !1 !== d.teardown.call(e, m, v.handle) || f.removeEvent(e, h, v.handle), delete c[h])
                    } else
                        for (h in c) f.event.remove(e, h + t[u], n, r, !0);
                f.isEmptyObject(c) && (delete v.handle, f._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, l, c, d, p, h = [r || N],
                m = u.call(t, "type") ? t.type : t,
                g = u.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = d = r = r || N, 3 !== r.nodeType && 8 !== r.nodeType && !G.test(m + f.event.triggered) && (m.indexOf(".") >= 0 && (m = (g = m.split(".")).shift(), g.sort()), a = m.indexOf(":") < 0 && "on" + m, (t = t[f.expando] ? t : new f.Event(m, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : f.makeArray(n, [t]), c = f.event.special[m] || {}, i || !c.trigger || !1 !== c.trigger.apply(r, n))) {
                if (!i && !c.noBubble && !f.isWindow(r)) {
                    for (l = c.delegateType || m, G.test(l + m) || (s = s.parentNode); s; s = s.parentNode) h.push(s), d = s;
                    d === (r.ownerDocument || N) && h.push(d.defaultView || d.parentWindow || e)
                }
                for (p = 0;
                    (s = h[p++]) && !t.isPropagationStopped();) t.type = p > 1 ? l : c.bindType || m, o = (f._data(s, "events") || {})[t.type] && f._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && f.acceptData(s) && (t.result = o.apply(s, n), !1 === t.result && t.preventDefault());
                if (t.type = m, !i && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(h.pop(), n)) && f.acceptData(r) && a && r[m] && !f.isWindow(r)) {
                    (d = r[a]) && (r[a] = null), f.event.triggered = m;
                    try {
                        r[m]()
                    } catch (e) {}
                    f.event.triggered = void 0, d && (r[a] = d)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = f.event.fix(e);
            var t, n, i, o, a, s = [],
                l = r.call(arguments),
                u = (f._data(this, "events") || {})[e.type] || [],
                c = f.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (s = f.event.handlers.call(this, e, u), t = 0;
                    (o = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, a = 0;
                        (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((f.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), void 0 !== n && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? f(n, this).index(l) >= 0 : f.find(n, this, null, [l]).length), i[n] && i.push(r);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[f.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Y.test(i) ? this.mouseHooks : J.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new f.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || N), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = (r = e.target.ownerDocument || N).documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ee() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ee() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return f.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return f.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = f.extend(new f.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? f.event.trigger(i, null, t) : f.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, f.removeEvent = N.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === M && (e[r] = null), e.detachEvent(r, n))
    }, f.Event = function(e, t) {
        return this instanceof f.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? K : Z) : this.type = e, t && f.extend(this, t), this.timeStamp = e && e.timeStamp || f.now(), void(this[f.expando] = !0)) : new f.Event(e, t)
    }, f.Event.prototype = {
        isDefaultPrevented: Z,
        isPropagationStopped: Z,
        isImmediatePropagationStopped: Z,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = K, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = K, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = K, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        f.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return (!r || r !== this && !f.contains(this, r)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), c.submitBubbles || (f.event.special.submit = {
        setup: function() {
            return !f.nodeName(this, "form") && void f.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = f.nodeName(t, "input") || f.nodeName(t, "button") ? t.form : void 0;
                n && !f._data(n, "submitBubbles") && (f.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), f._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && f.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return !f.nodeName(this, "form") && void f.event.remove(this, "._submit")
        }
    }), c.changeBubbles || (f.event.special.change = {
        setup: function() {
            return V.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (f.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), f.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), f.event.simulate("change", this, e, !0)
            })), !1) : void f.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                V.test(t.nodeName) && !f._data(t, "changeBubbles") && (f.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || f.event.simulate("change", this.parentNode, e, !0)
                }), f._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return f.event.remove(this, "._change"), !V.test(this.nodeName)
        }
    }), c.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            f.event.simulate(t, e.target, f.event.fix(e), !0)
        };
        f.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = f._data(r, t);
                i || r.addEventListener(e, n, !0), f._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = f._data(r, t) - 1;
                i ? f._data(r, t, i) : (r.removeEventListener(e, n, !0), f._removeData(r, t))
            }
        }
    }), f.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), !1 === r) r = Z;
            else if (!r) return this;
            return 1 === i && (a = r, (r = function(e) {
                return f().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = f.guid++)), this.each(function() {
                f.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, f(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = Z), this.each(function() {
                f.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                f.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? f.event.trigger(e, t, n, !0) : void 0
        }
    });
    var ne = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        re = / jQuery\d+="(?:null|\d+)"/g,
        ie = new RegExp("<(?:" + ne + ")[\\s/>]", "i"),
        oe = /^\s+/,
        ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        se = /<([\w:]+)/,
        le = /<tbody/i,
        ue = /<|&#?\w+;/,
        ce = /<(?:script|style|link)/i,
        de = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fe = /^$|\/(?:java|ecma)script/i,
        pe = /^true\/(.*)/,
        he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        me = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: c.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        ge = te(N).appendChild(N.createElement("div"));

    function ve(e, t) {
        var n, r, i = 0,
            o = typeof e.getElementsByTagName !== M ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== M ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || f.nodeName(r, t) ? o.push(r) : f.merge(o, ve(r, t));
        return void 0 === t || t && f.nodeName(e, t) ? f.merge([e], o) : o
    }

    function ye(e) {
        U.test(e.type) && (e.defaultChecked = e.checked)
    }

    function be(e, t) {
        return f.nodeName(e, "table") && f.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function xe(e) {
        return e.type = (null !== f.find.attr(e, "type")) + "/" + e.type, e
    }

    function we(e) {
        var t = pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Te(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) f._data(n, "globalEval", !t || f._data(t[r], "globalEval"))
    }

    function Ce(e, t) {
        if (1 === t.nodeType && f.hasData(e)) {
            var n, r, i, o = f._data(e),
                a = f._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) f.event.add(t, n, s[n][r])
            }
            a.data && (a.data = f.extend({}, a.data))
        }
    }

    function Ne(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !c.noCloneEvent && t[f.expando]) {
                i = f._data(t);
                for (r in i.events) f.removeEvent(t, r, i.handle);
                t.removeAttribute(f.expando)
            }
            "script" === n && t.text !== e.text ? (xe(t).text = e.text, we(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), c.html5Clone && e.innerHTML && !f.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && U.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, f.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = f.contains(e.ownerDocument, e);
            if (c.html5Clone || f.isXMLDoc(e) || !ie.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ge.innerHTML = e.outerHTML, ge.removeChild(o = ge.firstChild)), !(c.noCloneEvent && c.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || f.isXMLDoc(e)))
                for (r = ve(o), s = ve(e), a = 0; null != (i = s[a]); ++a) r[a] && Ne(i, r[a]);
            if (t)
                if (n)
                    for (s = s || ve(e), r = r || ve(o), a = 0; null != (i = s[a]); a++) Ce(i, r[a]);
                else Ce(e, o);
            return (r = ve(o, "script")).length > 0 && Te(r, !l && ve(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, l, u, d, p = e.length, h = te(t), m = [], g = 0; p > g; g++)
                if (o = e[g], o || 0 === o)
                    if ("object" === f.type(o)) f.merge(m, o.nodeType ? [o] : o);
                    else if (ue.test(o)) {
                for (s = s || h.appendChild(t.createElement("div")), l = (se.exec(o) || ["", ""])[1].toLowerCase(), d = me[l] || me._default, s.innerHTML = d[1] + o.replace(ae, "<$1></$2>") + d[2], i = d[0]; i--;) s = s.lastChild;
                if (!c.leadingWhitespace && oe.test(o) && m.push(t.createTextNode(oe.exec(o)[0])), !c.tbody)
                    for (i = (o = "table" !== l || le.test(o) ? "<table>" !== d[1] || le.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; i--;) f.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (f.merge(m, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = h.lastChild
            } else m.push(t.createTextNode(o));
            for (s && h.removeChild(s), c.appendChecked || f.grep(ve(m, "input"), ye), g = 0; o = m[g++];)
                if ((!r || -1 === f.inArray(o, r)) && (a = f.contains(o.ownerDocument, o), s = ve(h.appendChild(o), "script"), a && Te(s), n))
                    for (i = 0; o = s[i++];) fe.test(o.type || "") && n.push(o);
            return s = null, h
        },
        cleanData: function(e, t) {
            for (var r, i, o, a, s = 0, l = f.expando, u = f.cache, d = c.deleteExpando, p = f.event.special; null != (r = e[s]); s++)
                if ((t || f.acceptData(r)) && (o = r[l], a = o && u[o])) {
                    if (a.events)
                        for (i in a.events) p[i] ? f.event.remove(r, i) : f.removeEvent(r, i, a.handle);
                    u[o] && (delete u[o], d ? delete r[l] : typeof r.removeAttribute !== M ? r.removeAttribute(l) : r[l] = null, n.push(o))
                }
        }
    }), f.fn.extend({
        text: function(e) {
            return X(this, function(e) {
                return void 0 === e ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || N).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || be(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = be(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? f.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || f.cleanData(ve(n)), n.parentNode && (t && f.contains(n.ownerDocument, n) && Te(ve(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && f.cleanData(ve(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && f.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return f.clone(this, e, t)
            })
        },
        html: function(e) {
            return X(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(re, "") : void 0;
                if (!("string" != typeof e || ce.test(e) || !c.htmlSerialize && ie.test(e) || !c.leadingWhitespace && oe.test(e) || me[(se.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(ae, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (f.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, f.cleanData(ve(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = i.apply([], e);
            var n, r, o, a, s, l, u = 0,
                d = this.length,
                p = this,
                h = d - 1,
                m = e[0],
                g = f.isFunction(m);
            if (g || d > 1 && "string" == typeof m && !c.checkClone && de.test(m)) return this.each(function(n) {
                var r = p.eq(n);
                g && (e[0] = m.call(this, n, r.html())), r.domManip(e, t)
            });
            if (d && (n = (l = f.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === l.childNodes.length && (l = n), n)) {
                for (o = (a = f.map(ve(l, "script"), xe)).length; d > u; u++) r = l, u !== h && (r = f.clone(r, !0, !0), o && f.merge(a, ve(r, "script"))), t.call(this[u], r, u);
                if (o)
                    for (s = a[a.length - 1].ownerDocument, f.map(a, we), u = 0; o > u; u++) r = a[u], fe.test(r.type || "") && !f._data(r, "globalEval") && f.contains(s, r) && (r.src ? f._evalUrl && f._evalUrl(r.src) : f.globalEval((r.text || r.textContent || r.innerHTML || "").replace(he, "")));
                l = n = null
            }
            return this
        }
    }), f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        f.fn[e] = function(e) {
            for (var n, r = 0, i = [], a = f(e), s = a.length - 1; s >= r; r++) n = r === s ? this : this.clone(!0), f(a[r])[t](n), o.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Ee, ke, Se = {};

    function Ae(t, n) {
        var r, i = f(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : f.css(i[0], "display");
        return i.detach(), o
    }

    function De(e) {
        var t = N,
            n = Se[e];
        return n || ("none" !== (n = Ae(e, t)) && n || ((t = ((Ee = (Ee || f("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ee[0].contentDocument).document).write(), t.close(), n = Ae(e, t), Ee.detach()), Se[e] = n), n
    }
    c.shrinkWrapBlocks = function() {
        return null != ke ? ke : (ke = !1, (t = N.getElementsByTagName("body")[0]) && t.style ? (e = N.createElement("div"), (n = N.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), typeof e.style.zoom !== M && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(N.createElement("div")).style.width = "5px", ke = 3 !== e.offsetWidth), t.removeChild(n), ke) : void 0);
        var e, t, n
    };
    var je, Le, He = /^margin/,
        _e = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
        qe = /^(top|right|bottom|left)$/;

    function Me(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    e.getComputedStyle ? (je = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, Le = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return a = (n = n || je(e)) ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || f.contains(e.ownerDocument, e) || (a = f.style(e, t)), _e.test(a) && He.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
        }) : N.documentElement.currentStyle && (je = function(e) {
            return e.currentStyle
        }, Le = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return null == (a = (n = n || je(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]), _e.test(a) && !qe.test(t) && (r = s.left, (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
        }),
        function() {
            var t, n, r, i, o, a, s;
            if ((t = N.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = (r = t.getElementsByTagName("a")[0]) && r.style) {
                function l() {
                    var t, n, r, l;
                    (n = N.getElementsByTagName("body")[0]) && n.style && (t = N.createElement("div"), (r = N.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i = o = !1, s = !0, e.getComputedStyle && (i = "1%" !== (e.getComputedStyle(t, null) || {}).top, o = "4px" === (e.getComputedStyle(t, null) || {
                        width: "4px"
                    }).width, (l = t.appendChild(N.createElement("div"))).style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", l.style.marginRight = l.style.width = "0", t.style.width = "1px", s = !parseFloat((e.getComputedStyle(l, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (l = t.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === l[0].offsetHeight) && (l[0].style.display = "", l[1].style.display = "none", a = 0 === l[0].offsetHeight), n.removeChild(r))
                }
                n.cssText = "float:left;opacity:.5", c.opacity = "0.5" === n.opacity, c.cssFloat = !!n.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = "content-box" === t.style.backgroundClip, c.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, f.extend(c, {
                    reliableHiddenOffsets: function() {
                        return null == a && l(), a
                    },
                    boxSizingReliable: function() {
                        return null == o && l(), o
                    },
                    pixelPosition: function() {
                        return null == i && l(), i
                    },
                    reliableMarginRight: function() {
                        return null == s && l(), s
                    }
                })
            }
        }(), f.swap = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };
    var Oe = /alpha\([^)]*\)/i,
        Fe = /opacity\s*=\s*([^)]*)/,
        Be = /^(none|table(?!-c[ea]).+)/,
        Pe = new RegExp("^(" + $ + ")(.*)$", "i"),
        Re = new RegExp("^([+-])=(" + $ + ")", "i"),
        We = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $e = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ze = ["Webkit", "O", "Moz", "ms"];

    function Ie(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = ze.length; i--;)
            if (t = ze[i] + n, t in e) return t;
        return r
    }

    function Xe(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = f._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && I(r) && (o[a] = f._data(r, "olddisplay", De(r.nodeName)))) : (i = I(r), (n && "none" !== n || !i) && f._data(r, "olddisplay", i ? n : f.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function Ue(e, t, n) {
        var r = Pe.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function Ve(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += f.css(e, n + z[o], !0, i)), r ? ("content" === n && (a -= f.css(e, "padding" + z[o], !0, i)), "margin" !== n && (a -= f.css(e, "border" + z[o] + "Width", !0, i))) : (a += f.css(e, "padding" + z[o], !0, i), "padding" !== n && (a += f.css(e, "border" + z[o] + "Width", !0, i)));
        return a
    }

    function Je(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = je(e),
            a = c.boxSizing && "border-box" === f.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if ((0 > (i = Le(e, t, o)) || null == i) && (i = e.style[t]), _e.test(i)) return i;
            r = a && (c.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Ve(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function Ye(e, t, n, r, i) {
        return new Ye.prototype.init(e, t, n, r, i)
    }
    f.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Le(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: c.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = f.camelCase(t),
                    l = e.style;
                if (t = f.cssProps[s] || (f.cssProps[s] = Ie(l, s)), a = f.cssHooks[t] || f.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                if ("string" == (o = typeof n) && (i = Re.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(f.css(e, t)), o = "number"), null != n && n == n && ("number" !== o || f.cssNumber[s] || (n += "px"), c.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    l[t] = n
                } catch (e) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = f.camelCase(t);
            return t = f.cssProps[s] || (f.cssProps[s] = Ie(e.style, s)), (a = f.cssHooks[t] || f.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Le(e, t, r)), "normal" === o && t in $e && (o = $e[t]), "" === n || n ? (i = parseFloat(o), !0 === n || f.isNumeric(i) ? i || 0 : o) : o
        }
    }), f.each(["height", "width"], function(e, t) {
        f.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? Be.test(f.css(e, "display")) && 0 === e.offsetWidth ? f.swap(e, We, function() {
                    return Je(e, t, r)
                }) : Je(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && je(e);
                return Ue(0, n, r ? Ve(e, t, r, c.boxSizing && "border-box" === f.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), c.opacity || (f.cssHooks.opacity = {
        get: function(e, t) {
            return Fe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = f.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === f.trim(o.replace(Oe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Oe.test(o) ? o.replace(Oe, i) : o + " " + i)
        }
    }), f.cssHooks.marginRight = Me(c.reliableMarginRight, function(e, t) {
        return t ? f.swap(e, {
            display: "inline-block"
        }, Le, [e, "marginRight"]) : void 0
    }), f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        f.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + z[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, He.test(e) || (f.cssHooks[e + t].set = Ue)
    }), f.fn.extend({
        css: function(e, t) {
            return X(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (f.isArray(t)) {
                    for (r = je(e), i = t.length; i > a; a++) o[t[a]] = f.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? f.style(e, t, n) : f.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return Xe(this, !0)
        },
        hide: function() {
            return Xe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                I(this) ? f(this).show() : f(this).hide()
            })
        }
    }), f.Tween = Ye, Ye.prototype = {
        constructor: Ye,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (f.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ye.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ye.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ye.propHooks[this.prop];
            return this.pos = t = this.options.duration ? f.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ye.propHooks._default.set(this), this
        }
    }, Ye.prototype.init.prototype = Ye.prototype, Ye.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = f.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                f.fx.step[e.prop] ? f.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[f.cssProps[e.prop]] || f.cssHooks[e.prop]) ? f.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Ye.propHooks.scrollTop = Ye.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, f.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, f.fx = Ye.prototype.init, f.fx.step = {};
    var Ge, Qe, Ke, Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
        it = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
        ot = /queueHooks$/,
        at = [function(e, t, n) {
            var r, i, o, a, s, l, u, d = this,
                p = {},
                h = e.style,
                m = e.nodeType && I(e),
                g = f._data(e, "fxshow");
            n.queue || (null == (s = f._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--, f.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (u = f.css(e, "display")) ? f._data(e, "olddisplay") || De(e.nodeName) : u) && "none" === f.css(e, "float") && (c.inlineBlockNeedsLayout && "inline" !== De(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", c.shrinkWrapBlocks() || d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (r in t)
                if (i = t[r], rt.exec(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r]) continue;
                        m = !0
                    }
                    p[r] = g && g[r] || f.style(e, r)
                } else u = void 0;
            if (f.isEmptyObject(p)) "inline" === ("none" === u ? De(e.nodeName) : u) && (h.display = u);
            else {
                g ? "hidden" in g && (m = g.hidden) : g = f._data(e, "fxshow", {}), o && (g.hidden = !m), m ? f(e).show() : d.done(function() {
                    f(e).hide()
                }), d.done(function() {
                    var t;
                    f._removeData(e, "fxshow");
                    for (t in p) f.style(e, t, p[t])
                });
                for (r in p) a = ct(m ? g[r] : 0, r, d), r in g || (g[r] = a.start, m && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }],
        st = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = it.exec(t),
                    o = i && i[3] || (f.cssNumber[e] ? "" : "px"),
                    a = (f.cssNumber[e] || "px" !== o && +r) && it.exec(f.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do {
                        a /= s = s || ".5", f.style(n.elem, e, a + o)
                    } while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };

    function lt() {
        return setTimeout(function() {
            Ge = void 0
        }), Ge = f.now()
    }

    function ut(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = z[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function ct(e, t, n) {
        for (var r, i = (st[t] || []).concat(st["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function dt(e, t, n) {
        var r, i, o = 0,
            a = at.length,
            s = f.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var t = Ge || lt(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; a > o; o++) u.tweens[o].run(r);
                return s.notifyWith(e, [u, r, n]), 1 > r && a ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: f.extend({}, t),
                opts: f.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ge || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = f.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (r = f.camelCase(n), i = t[r], o = e[n], f.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = f.cssHooks[r], a && "expand" in a) {
                        o = a.expand(o), delete e[r];
                        for (n in o) n in e || (e[n] = o[n], t[n] = i)
                    } else t[r] = i
            }(c, u.opts.specialEasing); a > o; o++)
            if (r = at[o].call(u, e, c, u.opts)) return r;
        return f.map(c, ct, u), f.isFunction(u.opts.start) && u.opts.start.call(e, u), f.fx.timer(f.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    f.Animation = f.extend(dt, {
        tweener: function(e, t) {
            f.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], st[n] = st[n] || [], st[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? at.unshift(e) : at.push(e)
        }
    }), f.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? f.extend({}, e) : {
            complete: n || !n && t || f.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !f.isFunction(t) && t
        };
        return r.duration = f.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in f.fx.speeds ? f.fx.speeds[r.duration] : f.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            f.isFunction(r.old) && r.old.call(this), r.queue && f.dequeue(this, r.queue)
        }, r
    }, f.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(I).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = f.isEmptyObject(e),
                o = f.speed(t, n, r),
                a = function() {
                    var t = dt(this, f.extend({}, e), o);
                    (i || f._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = f.timers,
                    a = f._data(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                (t || !n) && f.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = f._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = f.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, f.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), f.each(["toggle", "show", "hide"], function(e, t) {
        var n = f.fn[t];
        f.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
        }
    }), f.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        f.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), f.timers = [], f.fx.tick = function() {
        var e, t = f.timers,
            n = 0;
        for (Ge = f.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || f.fx.stop(), Ge = void 0
    }, f.fx.timer = function(e) {
        f.timers.push(e), e() ? f.fx.start() : f.timers.pop()
    }, f.fx.interval = 13, f.fx.start = function() {
        Qe || (Qe = setInterval(f.fx.tick, f.fx.interval))
    }, f.fx.stop = function() {
        clearInterval(Qe), Qe = null
    }, f.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, f.fn.delay = function(e, t) {
        return e = f.fx && f.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    }, (Ze = N.createElement("div")).setAttribute("className", "t"), Ze.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", tt = Ze.getElementsByTagName("a")[0], nt = (et = N.createElement("select")).appendChild(N.createElement("option")), Ke = Ze.getElementsByTagName("input")[0], tt.style.cssText = "top:1px", c.getSetAttribute = "t" !== Ze.className, c.style = /top/.test(tt.getAttribute("style")), c.hrefNormalized = "/a" === tt.getAttribute("href"), c.checkOn = !!Ke.value, c.optSelected = nt.selected, c.enctype = !!N.createElement("form").enctype, et.disabled = !0, c.optDisabled = !nt.disabled, (Ke = N.createElement("input")).setAttribute("value", ""), c.input = "" === Ke.getAttribute("value"), Ke.value = "t", Ke.setAttribute("type", "radio"), c.radioValue = "t" === Ke.value;
    var ft = /\r/g;
    f.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = f.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, f(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : f.isArray(i) && (i = f.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (t = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = f.valHooks[i.type] || f.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(ft, "") : null == n ? "" : n : void 0
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = f.find.attr(e, "value");
                    return null != t ? t : f.trim(f.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (c.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && f.nodeName(n.parentNode, "optgroup"))) {
                            if (t = f(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = f.makeArray(t), a = i.length; a--;)
                        if (r = i[a], f.inArray(f.valHooks.option.get(r), o) >= 0) try {
                            r.selected = n = !0
                        } catch (e) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            set: function(e, t) {
                return f.isArray(t) ? e.checked = f.inArray(f(e).val(), t) >= 0 : void 0
            }
        }, c.checkOn || (f.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var pt, ht, mt = f.expr.attrHandle,
        gt = /^(?:checked|selected)$/i,
        vt = c.getSetAttribute,
        yt = c.input;
    f.fn.extend({
        attr: function(e, t) {
            return X(this, f.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                f.removeAttr(this, e)
            })
        }
    }), f.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === M ? f.prop(e, t, n) : (1 === o && f.isXMLDoc(e) || (t = t.toLowerCase(), r = f.attrHooks[t] || (f.expr.match.bool.test(t) ? ht : pt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = f.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void f.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(j);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = f.propFix[n] || n, f.expr.match.bool.test(n) ? yt && vt || !gt.test(n) ? e[r] = !1 : e[f.camelCase("default-" + n)] = e[r] = !1 : f.attr(e, n, ""), e.removeAttribute(vt ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!c.radioValue && "radio" === t && f.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), ht = {
        set: function(e, t, n) {
            return !1 === t ? f.removeAttr(e, n) : yt && vt || !gt.test(n) ? e.setAttribute(!vt && f.propFix[n] || n, n) : e[f.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, f.each(f.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = mt[t] || f.find.attr;
        mt[t] = yt && vt || !gt.test(t) ? function(e, t, r) {
            var i, o;
            return r || (o = mt[t], mt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, mt[t] = o), i
        } : function(e, t, n) {
            return n ? void 0 : e[f.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), yt && vt || (f.attrHooks.value = {
        set: function(e, t, n) {
            return f.nodeName(e, "input") ? void(e.defaultValue = t) : pt && pt.set(e, t, n)
        }
    }), vt || (pt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, mt.id = mt.name = mt.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, f.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: pt.set
    }, f.attrHooks.contenteditable = {
        set: function(e, t, n) {
            pt.set(e, "" !== t && t, n)
        }
    }, f.each(["width", "height"], function(e, t) {
        f.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), c.style || (f.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var bt = /^(?:input|select|textarea|button|object)$/i,
        xt = /^(?:a|area)$/i;
    f.fn.extend({
        prop: function(e, t) {
            return X(this, f.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = f.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {}
            })
        }
    }), f.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !f.isXMLDoc(e), o && (t = f.propFix[t] || t, i = f.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = f.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), c.hrefNormalized || f.each(["href", "src"], function(e, t) {
        f.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), c.optSelected || (f.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), f.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        f.propFix[this.toLowerCase()] = this
    }), c.enctype || (f.propFix.enctype = "encoding");
    var wt = /[\t\r\n\f]/g;
    f.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                l = this.length,
                u = "string" == typeof e && e;
            if (f.isFunction(e)) return this.each(function(t) {
                f(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(j) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = f.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (f.isFunction(e)) return this.each(function(t) {
                f(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(j) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = e ? f.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(f.isFunction(e) ? function(n) {
                f(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, i = f(this), o = e.match(j) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === M || "boolean" === n) && (this.className && f._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : f._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(wt, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        f.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), f.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Tt = f.now(),
        Ct = /\?/,
        Nt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    f.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = f.trim(t + "");
        return i && !f.trim(i.replace(Nt, function(e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : f.error("Invalid JSON: " + t)
    }, f.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : ((n = new ActiveXObject("Microsoft.XMLDOM")).async = "false", n.loadXML(t))
        } catch (e) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || f.error("Invalid XML: " + t), n
    };
    var Et, kt, St = /#.*$/,
        At = /([?&])_=[^&]*/,
        Dt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        jt = /^(?:GET|HEAD)$/,
        Lt = /^\/\//,
        Ht = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        _t = {},
        qt = {},
        Mt = "*/".concat("*");
    try {
        kt = location.href
    } catch (e) {
        (kt = N.createElement("a")).href = "", kt = kt.href
    }

    function Ot(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(j) || [];
            if (f.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Ft(e, t, n, r) {
        var i = {},
            o = e === qt;

        function a(s) {
            var l;
            return i[s] = !0, f.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || o || i[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1)
            }), l
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function Bt(e, t) {
        var n, r, i = f.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && f.extend(!0, e, n), e
    }
    Et = Ht.exec(kt.toLowerCase()) || [], f.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kt,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Mt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Bt(Bt(e, f.ajaxSettings), t) : Bt(f.ajaxSettings, e)
        },
        ajaxPrefilter: Ot(_t),
        ajaxTransport: Ot(qt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, r, i, o, a, s, l, u, c = f.ajaxSetup({}, t),
                d = c.context || c,
                p = c.context && (d.nodeType || d.jquery) ? f(d) : f.event,
                h = f.Deferred(),
                m = f.Callbacks("once memory"),
                g = c.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!u)
                                for (u = {}; t = Dt.exec(o);) u[t[1].toLowerCase()] = t[2];
                            t = u[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (c.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return l && l.abort(t), T(0, t), this
                    }
                };
            if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, c.url = ((e || c.url || kt) + "").replace(St, "").replace(Lt, Et[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = f.trim(c.dataType || "*").toLowerCase().match(j) || [""], null == c.crossDomain && (n = Ht.exec(c.url.toLowerCase()), c.crossDomain = !(!n || n[1] === Et[1] && n[2] === Et[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Et[3] || ("http:" === Et[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = f.param(c.data, c.traditional)), Ft(_t, c, t, w), 2 === b) return w;
            (s = c.global) && 0 == f.active++ && f.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !jt.test(c.type), i = c.url, c.hasContent || (c.data && (i = c.url += (Ct.test(i) ? "&" : "?") + c.data, delete c.data), !1 === c.cache && (c.url = At.test(i) ? i.replace(At, "$1_=" + Tt++) : i + (Ct.test(i) ? "&" : "?") + "_=" + Tt++)), c.ifModified && (f.lastModified[i] && w.setRequestHeader("If-Modified-Since", f.lastModified[i]), f.etag[i] && w.setRequestHeader("If-None-Match", f.etag[i])), (c.data && c.hasContent && !1 !== c.contentType || t.contentType) && w.setRequestHeader("Content-Type", c.contentType), w.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : c.accepts["*"]);
            for (r in c.headers) w.setRequestHeader(r, c.headers[r]);
            if (c.beforeSend && (!1 === c.beforeSend.call(d, w, c) || 2 === b)) return w.abort();
            x = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[r](c[r]);
            if (l = Ft(qt, c, t, w)) {
                w.readyState = 1, s && p.trigger("ajaxSend", [w, c]), c.async && c.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, c.timeout));
                try {
                    b = 1, l.send(v, T)
                } catch (e) {
                    if (!(2 > b)) throw e;
                    T(-1, e)
                }
            } else T(-1, "No Transport");

            function T(e, t, n, r) {
                var u, v, y, x, T, C = t;
                2 !== b && (b = 2, a && clearTimeout(a), l = void 0, o = r || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (x = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (a in s)
                            if (s[a] && s[a].test(i)) {
                                l.unshift(a);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (a in n) {
                            if (!l[0] || e.converters[a + " " + l[0]]) {
                                o = a;
                                break
                            }
                            r || (r = a)
                        }
                        o = o || r
                    }
                    return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
                }(c, w, n)), x = function(e, t, n, r) {
                    var i, o, a, s, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(a = u[l + " " + o] || u["* " + o]))
                            for (i in u)
                                if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(c, x, w, u), u ? (c.ifModified && ((T = w.getResponseHeader("Last-Modified")) && (f.lastModified[i] = T), (T = w.getResponseHeader("etag")) && (f.etag[i] = T)), 204 === e || "HEAD" === c.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state, v = x.data, u = !(y = x.error))) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", u ? h.resolveWith(d, [v, C, w]) : h.rejectWith(d, [w, C, y]), w.statusCode(g), g = void 0, s && p.trigger(u ? "ajaxSuccess" : "ajaxError", [w, c, u ? v : y]), m.fireWith(d, [w, C]), s && (p.trigger("ajaxComplete", [w, c]), --f.active || f.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(e, t, n) {
            return f.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return f.get(e, void 0, t, "script")
        }
    }), f.each(["get", "post"], function(e, t) {
        f[t] = function(e, n, r, i) {
            return f.isFunction(n) && (i = i || r, r = n, n = void 0), f.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), f.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        f.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), f._evalUrl = function(e) {
        return f.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, f.fn.extend({
        wrapAll: function(e) {
            if (f.isFunction(e)) return this.each(function(t) {
                f(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = f(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(f.isFunction(e) ? function(t) {
                f(this).wrapInner(e.call(this, t))
            } : function() {
                var t = f(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = f.isFunction(e);
            return this.each(function(n) {
                f(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        }
    }), f.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !c.reliableHiddenOffsets() && "none" === (e.style && e.style.display || f.css(e, "display"))
    }, f.expr.filters.visible = function(e) {
        return !f.expr.filters.hidden(e)
    };
    var Pt = /%20/g,
        Rt = /\[\]$/,
        Wt = /\r?\n/g,
        $t = /^(?:submit|button|image|reset|file)$/i,
        zt = /^(?:input|select|textarea|keygen)/i;

    function It(e, t, n, r) {
        var i;
        if (f.isArray(t)) f.each(t, function(t, i) {
            n || Rt.test(e) ? r(e, i) : It(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== f.type(t)) r(e, t);
        else
            for (i in t) It(e + "[" + i + "]", t[i], n, r)
    }
    f.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = f.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = f.ajaxSettings && f.ajaxSettings.traditional), f.isArray(e) || e.jquery && !f.isPlainObject(e)) f.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) It(n, e[n], t, i);
        return r.join("&").replace(Pt, "+")
    }, f.fn.extend({
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = f.prop(this, "elements");
                return e ? f.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !f(this).is(":disabled") && zt.test(this.nodeName) && !$t.test(e) && (this.checked || !U.test(e))
            }).map(function(e, t) {
                var n = f(this).val();
                return null == n ? null : f.isArray(n) ? f.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Wt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Wt, "\r\n")
                }
            }).get()
        }
    }), f.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Jt() || function() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }()
    } : Jt;
    var Xt = 0,
        Ut = {},
        Vt = f.ajaxSettings.xhr();

    function Jt() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    e.ActiveXObject && f(e).on("unload", function() {
        for (var e in Ut) Ut[e](void 0, !0)
    }), c.cors = !!Vt && "withCredentials" in Vt, (Vt = c.ajax = !!Vt) && f.ajaxTransport(function(e) {
        var t;
        if (!e.crossDomain || c.cors) return {
            send: function(n, r) {
                var i, o = e.xhr(),
                    a = ++Xt;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                o.send(e.hasContent && e.data || null), t = function(n, i) {
                    var s, l, u;
                    if (t && (i || 4 === o.readyState))
                        if (delete Ut[a], t = void 0, o.onreadystatechange = f.noop, i) 4 !== o.readyState && o.abort();
                        else {
                            u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                            try {
                                l = o.statusText
                            } catch (e) {
                                l = ""
                            }
                            s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                        }
                    u && r(s, l, u, o.getAllResponseHeaders())
                }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Ut[a] = t : t()
            },
            abort: function() {
                t && t(void 0, !0)
            }
        }
    }), f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return f.globalEval(e), e
            }
        }
    }), f.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), f.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = N.head || f("head")[0] || N.documentElement;
            return {
                send: function(r, i) {
                    (t = N.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var Yt = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || f.expando + "_" + Tt++;
            return this[e] = !0, e
        }
    }), f.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Gt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = f.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Gt, "$1" + i) : !1 !== t.jsonp && (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || f.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && f.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), f.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || N;
        var r = x.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = f.buildFragment([e], t, i), i && i.length && f(i).remove(), f.merge([], r.childNodes))
    };
    var Qt = f.fn.load;
    f.fn.load = function(e, t, n) {
        if ("string" != typeof e && Qt) return Qt.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = f.trim(e.slice(s, e.length)), e = e.slice(0, s)), f.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && f.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(r ? f("<div>").append(f.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, i || [e.responseText, t, e])
        }), this
    }, f.expr.filters.animated = function(e) {
        return f.grep(f.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Kt = e.document.documentElement;

    function Zt(e) {
        return f.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    f.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, l, u = f.css(e, "position"),
                c = f(e),
                d = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), o = f.css(e, "top"), l = f.css(e, "left"), ("absolute" === u || "fixed" === u) && f.inArray("auto", [o, l]) > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), f.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : c.css(d)
        }
    }, f.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                f.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            return o ? (t = o.documentElement, f.contains(t, i) ? (typeof i.getBoundingClientRect !== M && (r = i.getBoundingClientRect()), n = Zt(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === f.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), f.nodeName(e[0], "html") || (n = e.offset()), n.top += f.css(e[0], "borderTopWidth", !0), n.left += f.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - f.css(r, "marginTop", !0),
                    left: t.left - n.left - f.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Kt; e && !f.nodeName(e, "html") && "static" === f.css(e, "position");) e = e.offsetParent;
                return e || Kt
            })
        }
    }), f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        f.fn[e] = function(r) {
            return X(this, function(e, r, i) {
                var o = Zt(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? f(o).scrollLeft() : i, n ? i : f(o).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), f.each(["top", "left"], function(e, t) {
        f.cssHooks[t] = Me(c.pixelPosition, function(e, n) {
            return n ? (n = Le(e, t), _e.test(n) ? f(e).position()[t] + "px" : n) : void 0
        })
    }), f.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        f.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            f.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === i ? "margin" : "border");
                return X(this, function(t, n, r) {
                    var i;
                    return f.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? f.css(t, n, a) : f.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), f.fn.size = function() {
        return this.length
    }, f.fn.andSelf = f.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return f
    });
    var en = e.jQuery,
        tn = e.$;
    return f.noConflict = function(t) {
        return e.$ === f && (e.$ = tn), t && e.jQuery === f && (e.jQuery = en), f
    }, typeof t === M && (e.jQuery = e.$ = f), f
});
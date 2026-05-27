import React, { useState, useEffect, useRef } from 'react';
import {
  LayoutDashboard, List, Settings,
  Plus, RefreshCw, Download, Upload, X, Search, ChevronUp, ChevronDown,
  Wallet, Building2, Trash2, Zap, Cloud, TrendingUp, TrendingDown,
  Activity, PieChart, ArrowUpRight, BarChart3, Coins, Percent, RefreshCcw, FileText, Camera, Key, User, Smartphone, Info
} from 'lucide-react';
import { auth, db, hasFirebase } from './firebase';
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { collection, doc, setDoc, deleteDoc, onSnapshot, writeBatch } from 'firebase/firestore';

// ──────────────────────────────────────────────────────────────────────────────
// TYPES
// ──────────────────────────────────────────────────────────────────────────────
interface Stock {
  id: number;
  n: string;    // name
  c: string;    // code
  yt: string;   // yahoo ticker
  t: string;    // type
  sh: number;   // shares
  bp: number;   // buy price
  inv: number;  // invested
  base: number; // base/current price (manual)
  cur: string;  // currency
  ow: string;   // owner
  ac: string;   // account type
  br: string;   // broker
}

interface Rates { USDKRW: number; JPYKRW: number; HKDKRW: number; }
interface Prices { [ticker: string]: number; }
interface Metrics { priceKRW: number; val: number; pnl: number; ret: number; }

// ──────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ──────────────────────────────────────────────────────────────────────────────
const LOCAL_KEY = 'taehyun_portfolio_v5_local';
const APP_ID    = import.meta.env.VITE_FIREBASE_APP_ID || 'portfolio-default';

const INITIAL_STOCKS: Stock[] = [
  // ── 삼성증권 (위탁) ──
  {id:1,  n:"삼성전자",          c:"005930", yt:"005930.KS", t:"국내주식",  sh:104, bp:191000,  inv:19864000, base:316000,  cur:"KRW", ow:"유태현", ac:"위탁",    br:"삼성증권"},
  {id:2,  n:"에이피알",          c:"278470", yt:"278470.KS", t:"국내주식",  sh:18,  bp:341000,  inv:6138000,  base:385000,  cur:"KRW", ow:"유태현", ac:"위탁",    br:"삼성증권"},
  {id:3,  n:"현대차",            c:"005380", yt:"005380.KS", t:"국내주식",  sh:10,  bp:500000,  inv:5000000,  base:675000,  cur:"KRW", ow:"유태현", ac:"위탁",    br:"삼성증권"},
  {id:4,  n:"로보티즈",          c:"108490", yt:"108490.KS", t:"국내주식",  sh:20,  bp:248000,  inv:4960000,  base:308000,  cur:"KRW", ow:"유태현", ac:"위탁",    br:"삼성증권"},
  {id:5,  n:"두산에너빌리티",     c:"034020", yt:"034020.KS", t:"국내주식",  sh:46,  bp:107200,  inv:4931200,  base:110800,  cur:"KRW", ow:"유태현", ac:"위탁",    br:"삼성증권"},
  {id:6,  n:"LG에너지솔루션",    c:"373220", yt:"373220.KS", t:"국내주식",  sh:13,  bp:361000,  inv:4693000,  base:392500,  cur:"KRW", ow:"유태현", ac:"위탁",    br:"삼성증권"},
  {id:7,  n:"LS ELECTRIC",     c:"010120", yt:"010120.KS", t:"국내주식",  sh:5,   bp:850000,  inv:4250000,  base:267500,  cur:"KRW", ow:"유태현", ac:"위탁",    br:"삼성증권"},
  {id:8,  n:"SK아이이테크놀로지", c:"361610", yt:"361610.KS", t:"국내주식",  sh:1,   bp:105000,  inv:105000,   base:19250,   cur:"KRW", ow:"유태현", ac:"위탁",    br:"삼성증권"},
  {id:9,  n:"카카오페이",        c:"377300", yt:"377300.KS", t:"국내주식",  sh:2,   bp:90000,   inv:180000,   base:46950,   cur:"KRW", ow:"유태현", ac:"위탁",    br:"삼성증권"},
  // ── 삼성증권 (연금) ──
  {id:10, n:"TIGER 차이나LCSI300",            c:"371160", yt:"371160.KS", t:"국내ETF", sh:53,   bp:11673,   inv:618710,   base:14335,  cur:"KRW", ow:"유태현", ac:"연금", br:"삼성증권"},
  {id:11, n:"ACE 미국S&P500",                c:"360200", yt:"360200.KS", t:"국내ETF", sh:754,  bp:14660,   inv:11053955, base:28320,  cur:"KRW", ow:"유태현", ac:"연금", br:"삼성증권"},
  {id:12, n:"ACE 미국나스닥100",              c:"367380", yt:"367380.KS", t:"국내ETF", sh:1399, bp:17359,   inv:24286500, base:34300,  cur:"KRW", ow:"유태현", ac:"연금", br:"삼성증권"},
  {id:13, n:"TIGER 인도니프티50",             c:"453870", yt:"453870.KS", t:"국내ETF", sh:95,   bp:13045,   inv:1239355,  base:12455,  cur:"KRW", ow:"유태현", ac:"연금", br:"삼성증권"},
  {id:14, n:"TIGER 미국배당다우존스",          c:"458730", yt:"458730.KS", t:"국내ETF", sh:83,   bp:13000,   inv:1079000,  base:15600,  cur:"KRW", ow:"유태현", ac:"연금", br:"삼성증권"},
  // ── 한국투자증권 (ISA중개형) ──
  {id:15, n:"TIGER 코리아배당다우존스",        c:"439870", yt:"439870.KS", t:"국내ETF", sh:114,  bp:12329,   inv:1405525,  base:16220,  cur:"KRW", ow:"유태현", ac:"ISA", br:"한국투자증권"},
  {id:16, n:"TIGER 코리아시전력기기TOP3플러스",c:"-",      yt:"",          t:"국내ETF", sh:165,  bp:18617,   inv:3071910,  base:26115,  cur:"KRW", ow:"유태현", ac:"ISA", br:"한국투자증권"},
  {id:17, n:"KODEX 미국우주항공",             c:"-",      yt:"",          t:"국내ETF", sh:56,   bp:10368,   inv:580650,   base:15055,  cur:"KRW", ow:"유태현", ac:"ISA", br:"한국투자증권"},
  {id:18, n:"KODEX 반도체",                  c:"091230", yt:"091230.KS", t:"국내ETF", sh:17,   bp:59175,   inv:1005975,  base:163570, cur:"KRW", ow:"유태현", ac:"ISA", br:"한국투자증권"},
  {id:19, n:"ACE 미국S&P500",                c:"360200", yt:"360200.KS", t:"국내ETF", sh:179,  bp:22810,   inv:4083160,  base:28320,  cur:"KRW", ow:"유태현", ac:"ISA", br:"한국투자증권"},
  {id:20, n:"ACE 미국나스닥100",              c:"367380", yt:"367380.KS", t:"국내ETF", sh:20,   bp:22485,   inv:449700,   base:34300,  cur:"KRW", ow:"유태현", ac:"ISA", br:"한국투자증권"},
  {id:21, n:"TIGER 미국필라델피아반도체나스닥",c:"381180", yt:"381180.KS", t:"국내ETF", sh:9,    bp:30308,   inv:272780,   base:50735,  cur:"KRW", ow:"유태현", ac:"ISA", br:"한국투자증권"},
  {id:22, n:"ACE 미국배당다우존스",            c:"460330", yt:"460330.KS", t:"국내ETF", sh:100,  bp:13035,   inv:1303500,  base:15840,  cur:"KRW", ow:"유태현", ac:"ISA", br:"한국투자증권"},
  {id:23, n:"SOL 미국배당다우존스",            c:"446720", yt:"446720.KS", t:"국내ETF", sh:22,   bp:12587,   inv:276930,   base:14295,  cur:"KRW", ow:"유태현", ac:"ISA", br:"한국투자증권"},
  {id:24, n:"ACE 미국30년국채액티브(H)",       c:"453850", yt:"453850.KS", t:"국내ETF", sh:12,   bp:7569,    inv:90830,    base:7420,   cur:"KRW", ow:"유태현", ac:"ISA", br:"한국투자증권"},
  {id:25, n:"TIGER 미국배당다우존스",          c:"458730", yt:"458730.KS", t:"국내ETF", sh:328,  bp:12454,   inv:4085151,  base:15600,  cur:"KRW", ow:"유태현", ac:"ISA", br:"한국투자증권"},
  // ── 한국투자증권 (IRP) ──
  {id:26, n:"1Q 미국나스닥100미국채혼합50액티브", c:"449250", yt:"449250.KS", t:"국내ETF", sh:1,  bp:2991040, inv:2991040,  base:3120075, cur:"KRW", ow:"유태현", ac:"IRP", br:"한국투자증권"},
  {id:27, n:"ACE 미국S&P500",                c:"360200", yt:"360200.KS", t:"국내ETF", sh:0,   bp:2026300, inv:2026300,  base:3678635, cur:"KRW", ow:"유태현", ac:"IRP", br:"한국투자증권"},
  {id:28, n:"ACE 미국나스닥100",              c:"367380", yt:"367380.KS", t:"국내ETF", sh:0,   bp:2712605, inv:2712605,  base:5161260, cur:"KRW", ow:"유태현", ac:"IRP", br:"한국투자증권"},
  {id:29, n:"KODEX 미국S&P500",              c:"379780", yt:"379780.KS", t:"국내ETF", sh:0,   bp:203775,  inv:203775,   base:214830,  cur:"KRW", ow:"유태현", ac:"IRP", br:"한국투자증권"},
  {id:30, n:"KODEX 미국나스닥100",            c:"379810", yt:"379810.KS", t:"국내ETF", sh:0,   bp:167565,  inv:167565,   base:186165,  cur:"KRW", ow:"유태현", ac:"IRP", br:"한국투자증권"},
  {id:31, n:"TIGER 미국배당다우존스",          c:"458730", yt:"458730.KS", t:"국내ETF", sh:0,   bp:2738340, inv:2738340,  base:3374910, cur:"KRW", ow:"유태현", ac:"IRP", br:"한국투자증권"},
  {id:32, n:"SOL 미국배당미국채혼합50",        c:"464360", yt:"464360.KS", t:"국내ETF", sh:0,   bp:1985090, inv:1985090,  base:2168850, cur:"KRW", ow:"유태현", ac:"IRP", br:"한국투자증권"},
  {id:33, n:"현금성자산(IRP)",                c:"-",      yt:"",          t:"예금/현금", sh:0,  bp:6527,    inv:6527,     base:6527,    cur:"KRW", ow:"유태현", ac:"IRP", br:"한국투자증권"},
  // ── 미래에셋증권 (위탁) ──
  {id:34, n:"SK아이이테크놀로지",              c:"361610", yt:"361610.KS", t:"국내주식",  sh:1,  bp:105000,  inv:105000,   base:26350,  cur:"KRW", ow:"유태현", ac:"위탁",    br:"미래에셋증권"},
  {id:35, n:"INVESCO NASDAQ 100",            c:"QQQM",   yt:"QQQM",      t:"미국ETF",  sh:1,  bp:207.86,  inv:313240,   base:260.57, cur:"USD", ow:"유태현", ac:"해외위탁", br:"미래에셋증권"},
  {id:36, n:"테슬라",                         c:"TSLA",   yt:"TSLA",      t:"미국주식", sh:3,  bp:333.10,  inv:1506818,  base:383.90, cur:"USD", ow:"유태현", ac:"해외위탁", br:"미래에셋증권"},
  {id:37, n:"미국달러(USD)",                  c:"-",      yt:"",          t:"예금/현금", sh:0,  bp:1594,    inv:1594,     base:1594,   cur:"KRW", ow:"유태현", ac:"위탁",    br:"미래에셋증권"},
  // ── 미래에셋증권 (연금저축계좌) ──
  {id:38, n:"ACE 미국S&P500",                c:"360200", yt:"360200.KS", t:"국내ETF", sh:227, bp:23072,   inv:5237170,  base:26325,  cur:"KRW", ow:"유태현", ac:"연금", br:"미래에셋증권"},
  {id:39, n:"ACE 미국나스닥100",              c:"367380", yt:"367380.KS", t:"국내ETF", sh:178, bp:25384,   inv:4518390,  base:29925,  cur:"KRW", ow:"유태현", ac:"연금", br:"미래에셋증권"},
  {id:40, n:"TIGER 미국테크TOP10 INDXX",      c:"381170", yt:"381170.KS", t:"국내ETF", sh:18,  bp:29187,   inv:525360,   base:31740,  cur:"KRW", ow:"유태현", ac:"연금", br:"미래에셋증권"},
  {id:41, n:"SOL 미국배당다우존스",            c:"446720", yt:"446720.KS", t:"국내ETF", sh:43,  bp:13149,   inv:565410,   base:13325,  cur:"KRW", ow:"유태현", ac:"연금", br:"미래에셋증권"},
  {id:42, n:"ACE 미국30년국채액티브(H)",       c:"453850", yt:"453850.KS", t:"국내ETF", sh:57,  bp:7644,    inv:435708,   base:7560,   cur:"KRW", ow:"유태현", ac:"연금", br:"미래에셋증권"},
];

const TABS = [
  { id: 'dashboard', label: '대시보드',  icon: LayoutDashboard },
  { id: 'allstocks', label: '전체 자산', icon: List },
  { id: 'settings',  label: '설정',      icon: Settings },
];
const ACCOUNT_GROUPS = ['위탁', 'ISA', '해외위탁', '연금', 'IRP'];
const BROKER_GROUPS  = ['한국투자증권', '미래에셋증권', '삼성증권', '키움증권', 'KB증권', 'NH투자증권'];
const ASSET_TYPES    = ['국내주식', '국내ETF', '미국주식', '미국ETF', '예금/현금'];

// ──────────────────────────────────────────────────────────────────────────────
// UTILS
// ──────────────────────────────────────────────────────────────────────────────
const comma  = (n: number) => Math.round(n || 0).toLocaleString('ko-KR');
const fmtW   = (n: number) => {
  const abs = Math.abs(n || 0), sg = n < 0 ? '-' : '';
  if (abs >= 1e8) return `${sg}${(abs / 1e8).toFixed(1)}억`;
  if (abs >= 1e4) return `${sg}${Math.round(abs / 1e4).toLocaleString()}만`;
  return `${sg}${Math.round(abs).toLocaleString()}`;
};
const fmtP   = (n: number) => `${n >= 0 ? '+' : ''}${(n || 0).toFixed(2)}%`;

const pnlColor = (n: number) => n > 0 ? 'text-[#FF3D00]' : n < 0 ? 'text-[#2979FF]' : 'text-slate-400';
const pnlBg    = (n: number) => n > 0 ? 'bg-[#FF3D00]/10 text-[#FF3D00]' : n < 0 ? 'bg-[#2979FF]/10 text-[#2979FF]' : 'bg-slate-800 text-slate-300';
const pnlSign  = (n: number) => n > 0 ? '+' : '';

const getRate    = (cur: string, r: Rates) => cur === 'USD' ? r.USDKRW : cur === 'JPY' ? r.JPYKRW : cur === 'HKD' ? r.HKDKRW : 1;

const getMetrics = (s: Stock, prices: Prices, rates: Rates): Metrics => {
  let priceKRW = s.base;
  if (s.yt && s.sh > 0 && prices[s.yt]) priceKRW = Math.round(prices[s.yt] * getRate(s.cur, rates));
  else if (s.cur === 'USD')              priceKRW = Math.round(s.base * getRate(s.cur, rates));
  if (!s.yt || s.sh === 0) {
    const pnl = priceKRW - s.inv, ret = s.inv > 0 ? (pnl / s.inv) * 100 : 0;
    return { priceKRW, val: priceKRW, pnl, ret };
  }
  const val = priceKRW * s.sh, pnl = val - s.inv, ret = s.inv > 0 ? (pnl / s.inv) * 100 : 0;
  return { priceKRW, val, pnl, ret };
};

const getTotals = (arr: Stock[], prices: Prices, rates: Rates) =>
  arr.reduce((a, s) => { const m = getMetrics(s, prices, rates); return { inv: a.inv + s.inv, val: a.val + m.val, pnl: a.pnl + m.pnl }; }, { inv: 0, val: 0, pnl: 0 });

// ──────────────────────────────────────────────────────────────────────────────
// Badge
// ──────────────────────────────────────────────────────────────────────────────
const BADGE_COLORS: Record<string, string> = {
  '국내주식': 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
  '국내ETF':  'bg-purple-500/10 text-purple-400 border border-purple-500/20',
  '미국주식': 'bg-amber-500/10  text-amber-400  border border-amber-500/20',
  '미국ETF':  'bg-orange-500/10 text-orange-400 border border-orange-500/20',
  'ISA':      'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20',
  '위탁':     'bg-slate-700/30  text-slate-300  border border-slate-700/40',
  '해외위탁': 'bg-rose-500/10   text-rose-400   border border-rose-500/20',
  '예금/현금':'bg-slate-700/50  text-slate-400  border border-slate-700/40',
  '연금':     'bg-pink-500/10   text-pink-400   border border-pink-500/20',
  'IRP':      'bg-sky-500/10    text-sky-400    border border-sky-500/20',
};
const Badge = ({ type }: { type: string }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-extrabold tracking-wide whitespace-nowrap ${BADGE_COLORS[type] || 'bg-slate-700/30 text-slate-400 border border-slate-700/40'}`}>{type}</span>
);

// ──────────────────────────────────────────────────────────────────────────────
// DonutChart (SVG)
// ──────────────────────────────────────────────────────────────────────────────
const DonutChart = ({ segments }: { segments: { hex: string; value: number }[] }) => {
  const r = 42;
  const C = 2 * Math.PI * r;
  const total = segments.reduce((s, d) => s + d.value, 0);
  if (total === 0) return null;
  let acc = 0;
  return (
    <svg viewBox="0 0 100 100" className="w-28 h-28 flex-shrink-0 -rotate-90">
      <circle cx="50" cy="50" r={r} fill="none" stroke="#1e293b" strokeWidth="14" />
      {segments.map((seg, i) => {
        const pct  = seg.value / total;
        const dash = pct * C;
        const rot  = (acc / total) * 360;
        acc += seg.value;
        return (
          <circle key={i} cx="50" cy="50" r={r} fill="none"
            stroke={seg.hex} strokeWidth="14"
            strokeDasharray={`${dash} ${C}`}
            transform={`rotate(${rot} 50 50)`}
            style={{ transition: 'all 0.5s ease' }}
          />
        );
      })}
    </svg>
  );
};

// ──────────────────────────────────────────────────────────────────────────────
// DASHBOARD
// ──────────────────────────────────────────────────────────────────────────────
type GroupItem = { name: string; count: number; t: { val: number; pnl: number }; r: number; pct: number; iconCol: string; barCol: string };

const GroupCard = ({ item, onClick, accentCls }: { item: GroupItem; onClick: () => void; accentCls: string }) => (
  <div onClick={onClick}
    className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-[#131B2E]/60 to-[#0F172A]/80 p-5 transition-all hover:border-slate-700/80 hover:bg-[#131B2E] shadow-lg hover:shadow-xl active:scale-[0.99]">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-2xl font-black text-base shadow-inner ${item.iconCol}`}>{item.name.charAt(0)}</div>
        <div>
          <h3 className={`text-sm font-extrabold text-white ${accentCls} transition-colors`}>{item.name}</h3>
          <p className="text-[11px] text-slate-500 font-bold">{item.count}개 종목</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[10px] text-slate-500 uppercase tracking-tighter mb-0.5">평가</p>
        <p className="text-lg font-black text-white">₩{fmtW(item.t.val)}</p>
      </div>
    </div>
    <div className="flex justify-between text-[11px] font-extrabold uppercase tracking-widest text-slate-500 mb-1.5">
      <span>비중 {item.pct.toFixed(1)}%</span>
      <span className={pnlColor(item.r)}>{fmtP(item.r)}</span>
    </div>
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-900/50">
      <div className={`h-full rounded-full transition-all duration-1000 ease-out ${item.barCol}`} style={{ width: `${item.pct}%` }} />
    </div>
  </div>
);

const DashboardView = ({
  stocks, prices, rates, setTab, setFilterBroker, setFilterAcct, ownerName,
}: {
  stocks: Stock[]; prices: Prices; rates: Rates;
  setTab: (t: string) => void; setFilterBroker: (b: string) => void;
  setFilterAcct: (a: string) => void; ownerName: string;
}) => {
  const all = getTotals(stocks, prices, rates);
  const ret = all.inv > 0 ? (all.pnl / all.inv) * 100 : 0;

  const ACCT_CFG: Record<string, { icon: string; bar: string; hex: string }> = {
    '위탁':   { icon: 'bg-blue-500/10   text-blue-400   border border-blue-500/20',    bar: 'bg-blue-500',    hex: '#3b82f6' },
    'ISA':    { icon: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20', bar: 'bg-emerald-400', hex: '#34d399' },
    '해외위탁':{ icon: 'bg-rose-500/10   text-rose-400   border border-rose-500/20',    bar: 'bg-rose-500',    hex: '#f43f5e' },
    '연금':   { icon: 'bg-pink-500/10    text-pink-400   border border-pink-500/20',    bar: 'bg-pink-500',    hex: '#ec4899' },
    'IRP':    { icon: 'bg-sky-500/10     text-sky-400    border border-sky-500/20',     bar: 'bg-sky-400',     hex: '#38bdf8' },
  };
  const BR_CFG: Record<string, { icon: string; bar: string; hex: string }> = {
    '미래에셋증권': { icon: 'bg-orange-500/10 text-orange-400 border border-orange-500/20', bar: 'bg-orange-500', hex: '#f97316' },
    '삼성증권':    { icon: 'bg-indigo-500/10  text-indigo-400 border border-indigo-500/20', bar: 'bg-indigo-500', hex: '#818cf8' },
    '한국투자증권': { icon: 'bg-blue-500/10    text-blue-400   border border-blue-500/20',   bar: 'bg-blue-400',  hex: '#60a5fa' },
  };

  const accounts = ACCOUNT_GROUPS
    .map(name => {
      const arr = stocks.filter(s => s.ac === name);
      if (!arr.length) return null;
      const t = getTotals(arr, prices, rates);
      const r = t.inv > 0 ? (t.pnl / t.inv) * 100 : 0;
      const pct = all.val > 0 ? (t.val / all.val) * 100 : 0;
      const cfg = ACCT_CFG[name] || { icon: 'bg-slate-500/10 text-slate-400 border border-slate-700', bar: 'bg-slate-500' };
      return { name, count: arr.length, t, r, pct, iconCol: cfg.icon, barCol: cfg.bar };
    })
    .filter(Boolean) as GroupItem[];

  const brokers = BROKER_GROUPS
    .map(name => {
      const arr = stocks.filter(s => s.br === name);
      if (!arr.length) return null;
      const t = getTotals(arr, prices, rates);
      const r = t.inv > 0 ? (t.pnl / t.inv) * 100 : 0;
      const pct = all.val > 0 ? (t.val / all.val) * 100 : 0;
      const cfg = BR_CFG[name] || { icon: 'bg-slate-500/10 text-slate-400 border border-slate-700', bar: 'bg-slate-500' };
      return { name, count: arr.length, t, r, pct, iconCol: cfg.icon, barCol: cfg.bar };
    })
    .filter(Boolean) as GroupItem[];

  const ranked = stocks
    .filter(s => s.sh > 0)
    .map(s => ({ s, m: getMetrics(s, prices, rates) }))
    .sort((a, b) => b.m.ret - a.m.ret);
  const topGainers = ranked.slice(0, 3);
  const topLosers  = ranked.slice(-3).reverse();

  return (
    <div className="space-y-8 pb-12 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-gradient-to-br from-[#121B2E] via-[#0F172A] to-[#0A0E1A] shadow-2xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="relative p-6 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 px-3 py-1 text-[11px] font-extrabold tracking-widest text-emerald-400 border border-emerald-500/20">
                <PieChart size={12} /> {ownerName || '유태현'} PREMIUM ASSETS
              </div>
              <p className="text-xs font-bold text-slate-500 tracking-wider uppercase">총 평가 잔고</p>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">₩{comma(all.val)}</h1>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 backdrop-blur-md border border-white/5 font-bold ${pnlColor(all.pnl)}`}>
                {all.pnl >= 0 ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
                <span className="text-base">{pnlSign(all.pnl)}₩{comma(all.pnl)}</span>
                <span className="text-slate-500/50">|</span>
                <span className="px-2 py-0.5 bg-white/5 rounded-xl text-sm">{fmtP(ret)}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:flex md:flex-col gap-3 w-full md:w-auto">
              <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-4 border border-slate-800/80 md:min-w-[175px] space-y-1">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">총 매입원금</p>
                <p className="text-xl font-black text-slate-100">₩{fmtW(all.inv)}</p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-4 border border-slate-800/80 md:min-w-[175px] space-y-1">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">운용 종목 수</p>
                <p className="text-xl font-black text-emerald-400">{stocks.length}<span className="text-sm font-semibold text-slate-400 ml-1">개</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 자산 배분 도넛 차트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { title: '계좌별 자산 배분', items: accounts, cfgMap: ACCT_CFG },
          { title: '증권사별 자산 배분', items: brokers, cfgMap: BR_CFG },
        ].map(({ title, items, cfgMap }) => {
          const segments = items.map(it => ({ hex: (cfgMap[it.name] || { hex: '#64748b' }).hex, value: it.t.val }));
          return (
            <div key={title} className="rounded-2xl border border-slate-800/80 bg-[#121B2E]/50 p-5 shadow-lg">
              <p className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">{title}</p>
              <div className="flex items-center gap-5">
                <DonutChart segments={segments} />
                <div className="flex-1 space-y-2 min-w-0">
                  {items.map(it => (
                    <div key={it.name} className="flex items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: (cfgMap[it.name] || { hex: '#64748b' }).hex }} />
                        <span className="text-slate-300 font-semibold truncate">{it.name}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-black text-white">{it.pct.toFixed(1)}%</span>
                        <span className={`font-bold ${pnlColor(it.r)}`}>{fmtP(it.r)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Broker / Account Grids */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="space-y-4">
          <div className="border-l-4 border-orange-500 pl-4 py-1">
            <h2 className="text-lg font-black text-white flex items-center gap-2"><Building2 size={18} className="text-orange-500" /> 증권사별 잔고</h2>
            <p className="text-xs text-slate-500 font-bold mt-0.5">금융 기관별 비중 · 수익률</p>
          </div>
          <div className="grid gap-3">
            {brokers.map(b => (
              <GroupCard key={b.name} item={b}
                onClick={() => { setFilterBroker(b.name); setTab('allstocks'); }}
                accentCls="group-hover:text-orange-400" />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 py-1">
            <h2 className="text-lg font-black text-white flex items-center gap-2"><Wallet size={18} className="text-blue-500" /> 계좌 유형별 잔고</h2>
            <p className="text-xs text-slate-500 font-bold mt-0.5">자산 성격별 자본 흐름</p>
          </div>
          <div className="grid gap-3">
            {accounts.map(a => (
              <GroupCard key={a.name} item={a}
                onClick={() => { setFilterAcct(a.name); setTab('allstocks'); }}
                accentCls="group-hover:text-blue-400" />
            ))}
          </div>
        </section>
      </div>

      {/* Top Gainers / Losers */}
      {ranked.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: '수익률 TOP 3', items: topGainers, positive: true },
            { title: '손실률 TOP 3', items: topLosers,  positive: false },
          ].map(({ title, items, positive }) => (
            <section key={title} className="rounded-2xl border border-slate-800/80 bg-[#121B2E]/40 p-5">
              <div className={`flex items-center gap-2 mb-4 text-sm font-black ${positive ? 'text-[#FF3D00]' : 'text-[#2979FF]'}`}>
                {positive ? <TrendingUp size={15}/> : <TrendingDown size={15}/>} {title}
              </div>
              <div className="space-y-3">
                {items.map(({ s, m }, i) => (
                  <div key={s.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-xs font-black text-slate-600 w-4">#{i+1}</span>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-200 truncate">{s.n}</p>
                        <p className="text-[11px] text-slate-500">{s.br} · {s.ac}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0 ml-3">
                      <p className={`text-sm font-black ${pnlColor(m.ret)}`}>{fmtP(m.ret)}</p>
                      <p className={`text-[11px] font-bold ${pnlColor(m.pnl)}`}>{pnlSign(m.pnl)}₩{fmtW(Math.abs(m.pnl))}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

// ──────────────────────────────────────────────────────────────────────────────
// ALL STOCKS VIEW — desktop table + mobile cards
// ──────────────────────────────────────────────────────────────────────────────
const AllStocksView = ({
  stocks, prices, rates, setEditingStock, setIsModalOpen,
  filterAcct, setFilterAcct, filterBroker, setFilterBroker,
  search, setSearch, sortKey, setSortKey, sortDir, setSortDir,
}: {
  stocks: Stock[]; prices: Prices; rates: Rates;
  setEditingStock: (s: Stock | null) => void; setIsModalOpen: (v: boolean) => void;
  filterAcct: string; setFilterAcct: (v: string) => void;
  filterBroker: string; setFilterBroker: (v: string) => void;
  search: string; setSearch: (v: string) => void;
  sortKey: string; setSortKey: (v: string) => void;
  sortDir: number; setSortDir: (v: number) => void;
}) => {
  let arr = [...stocks];
  if (filterAcct   !== '전체') arr = arr.filter(s => s.ac === filterAcct);
  if (filterBroker !== '전체') arr = arr.filter(s => s.br === filterBroker);
  if (search) {
    const q = search.toLowerCase();
    arr = arr.filter(s => s.n.toLowerCase().includes(q) || s.c.toLowerCase().includes(q) || (s.yt||'').toLowerCase().includes(q));
  }
  const totalVal = stocks.reduce((sum, s) => sum + getMetrics(s, prices, rates).val, 0);

  arr.sort((a, b) => {
    const ma = getMetrics(a, prices, rates), mb = getMetrics(b, prices, rates);
    const vals: Record<string, [number | string, number | string]> = {
      n:     [a.n, b.n], sh: [a.sh, b.sh], bp: [a.bp, b.bp], inv: [a.inv, b.inv],
      base:  [ma.priceKRW, mb.priceKRW], val: [ma.val, mb.val], pnl: [ma.pnl, mb.pnl],
      ret:   [ma.ret, mb.ret], ratio: [ma.val, mb.val],
    };
    const [va, vb] = vals[sortKey] || [ma.val, mb.val];
    return typeof va === 'string' ? (va as string).localeCompare(vb as string) * sortDir : ((va as number) - (vb as number)) * sortDir;
  });

  const accts = ['전체', ...new Set(stocks.map(s => s.ac))];
  const brks  = ['전체', ...new Set(stocks.map(s => s.br))];

  const TH = ({ label, k, align = 'text-right' }: { label: string; k: string; align?: string }) => (
    <th className={`px-3 py-3.5 text-xs font-bold text-slate-400 uppercase tracking-wider cursor-pointer hover:text-slate-200 select-none whitespace-nowrap ${align}`}
      onClick={() => { setSortDir(sortKey === k ? -sortDir : -1); setSortKey(k); }}>
      <span className={`inline-flex items-center gap-1 ${align === 'text-left' ? '' : 'justify-end'}`}>
        {label}
        {sortKey === k && (sortDir === 1 ? <ChevronUp size={13} className="text-white"/> : <ChevronDown size={13} className="text-white"/>)}
      </span>
    </th>
  );

  const Chip = ({ label, active, onClick, color = 'blue' }: { label: string; active: boolean; onClick: () => void; color?: string }) => {
    const cls = active
      ? (color === 'orange' ? 'bg-orange-600 border-orange-600 text-white' : 'bg-blue-600 border-blue-600 text-white')
      : 'bg-slate-800/40 border-slate-700/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200';
    return <button onClick={onClick} className={`px-3 py-1 rounded-full text-xs font-semibold transition-all border ${cls}`}>{label}</button>;
  };

  const openEdit = (s: Stock) => { setEditingStock(s); setIsModalOpen(true); };

  return (
    <div className="space-y-5 pb-24 md:pb-8 max-w-7xl mx-auto">
      {/* Filters */}
      <div className="rounded-2xl border border-slate-800/80 bg-[#121B2E]/60 p-4 space-y-4 shadow-lg backdrop-blur-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input type="text" placeholder="종목명, 코드, 야후 티커 검색..." value={search} onChange={e => setSearch(e.target.value)}
            className="w-full bg-[#0B0F19] border border-slate-800 text-sm text-white rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-blue-500/50 transition-colors" />
        </div>
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase w-12 shrink-0">증권사</span>
            {brks.map(b => <Chip key={b} label={b} active={filterBroker === b} onClick={() => setFilterBroker(b)} color="orange" />)}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase w-12 shrink-0">계좌</span>
            {accts.map(a => <Chip key={a} label={a} active={filterAcct === a} onClick={() => setFilterAcct(a)} />)}
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block rounded-2xl border border-slate-800/80 bg-[#121B2E]/30 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap min-w-[1000px]">
            <thead className="bg-[#0F172A] border-b border-slate-700">
              <tr>
                <TH label="종목 정보" k="n"     align="text-left" />
                <TH label="보유수량"  k="sh" />
                <TH label="매수단가"  k="bp" />
                <TH label="매수금액"  k="inv" />
                <TH label="현재가"    k="base" />
                <TH label="평가금액"  k="val" />
                <TH label="손익"      k="pnl" />
                <TH label="수익률"    k="ret" />
                <TH label="비중"      k="ratio" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {arr.map((s, idx) => {
                const m = getMetrics(s, prices, rates);
                const ratio = totalVal > 0 ? (m.val / totalVal) * 100 : 0;
                const rawPrice = prices[s.yt] || null;
                return (
                  <tr key={s.id} onClick={() => openEdit(s)}
                    className={`hover:bg-slate-700/30 cursor-pointer transition-colors ${idx % 2 === 0 ? '' : 'bg-slate-900/10'}`}>
                    <td className="px-4 py-3.5">
                      <div className="font-extrabold text-slate-100">{s.n}</div>
                      <div className="flex flex-wrap items-center gap-1.5 mt-1">
                        <span className="text-[11px] text-slate-500">코드: {s.c !== '-' ? s.c : '없음'}</span>
                        {s.yt && <><span className="text-slate-700 text-[11px]">·</span><span className="text-[11px] text-slate-500 font-mono">{s.yt}</span></>}
                        <Badge type={s.ac} /><Badge type={s.t} />
                      </div>
                    </td>
                    <td className="px-3 py-3.5 text-right font-semibold text-slate-200">{s.sh > 0 ? s.sh.toLocaleString() : '-'}</td>
                    <td className="px-3 py-3.5 text-right text-slate-400">{s.sh > 0 ? `₩${comma(s.bp)}` : '-'}</td>
                    <td className="px-3 py-3.5 text-right text-slate-400">{s.sh > 0 ? `₩${comma(s.inv)}` : '-'}</td>
                    <td className="px-3 py-3.5 text-right">
                      <div className="text-slate-300 font-semibold">{s.sh > 0 ? `₩${comma(m.priceKRW)}` : '-'}</div>
                      {rawPrice && s.cur !== 'KRW' && s.sh > 0 && (
                        <div className="text-[10px] text-slate-500 mt-0.5">{s.cur} {rawPrice.toLocaleString(undefined, { minimumFractionDigits: s.cur === 'USD' ? 2 : 0 })}</div>
                      )}
                    </td>
                    <td className="px-3 py-3.5 text-right font-black text-slate-100">₩{comma(m.val)}</td>
                    <td className="px-3 py-3.5 text-right">
                      <span className={`font-bold ${pnlColor(m.pnl)}`}>{m.pnl !== 0 ? pnlSign(m.pnl) + comma(Math.abs(m.pnl)) : '-'}</span>
                    </td>
                    <td className="px-3 py-3.5 text-right">
                      <span className={`inline-flex px-2 py-0.5 rounded text-xs font-extrabold ${m.ret !== 0 ? pnlBg(m.ret) : 'bg-slate-800 text-slate-400'}`}>
                        {m.ret !== 0 ? fmtP(m.ret) : '-'}
                      </span>
                    </td>
                    <td className="px-3 py-3.5 text-right text-slate-300 font-black text-sm">{ratio.toFixed(1)}%</td>
                  </tr>
                );
              })}
              {arr.length === 0 && <tr><td colSpan={9} className="px-4 py-10 text-center text-slate-500">등록된 자산이 없습니다.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-2.5">
        {arr.map(s => {
          const m = getMetrics(s, prices, rates);
          const ratio = totalVal > 0 ? (m.val / totalVal) * 100 : 0;
          return (
            <div key={s.id} onClick={() => openEdit(s)}
              className="rounded-2xl border border-slate-800/80 bg-[#121B2E]/60 p-4 active:bg-slate-800/60 transition-colors">
              <div className="flex items-start justify-between gap-2 mb-2.5">
                <div className="min-w-0">
                  <p className="font-extrabold text-slate-100 text-sm truncate">{s.n}</p>
                  <div className="flex items-center flex-wrap gap-1 mt-1">
                    <Badge type={s.ac} /><Badge type={s.t} />
                    <span className="text-[10px] text-slate-500">{s.br}</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-base font-black text-slate-100">₩{fmtW(m.val)}</p>
                  <span className={`inline-flex px-2 py-0.5 rounded text-xs font-extrabold ${m.ret !== 0 ? pnlBg(m.ret) : 'bg-slate-800 text-slate-400'}`}>
                    {m.ret !== 0 ? fmtP(m.ret) : '-'}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px] pt-2.5 border-t border-slate-800/60">
                <div><p className="text-slate-500 mb-0.5">보유수량</p><p className="font-bold text-slate-300">{s.sh > 0 ? s.sh.toLocaleString() : '-'}</p></div>
                <div><p className="text-slate-500 mb-0.5">매수금액</p><p className="font-bold text-slate-300">{s.sh > 0 ? `₩${fmtW(s.inv)}` : '-'}</p></div>
                <div><p className="text-slate-500 mb-0.5">손익</p><p className={`font-bold ${pnlColor(m.pnl)}`}>{m.pnl !== 0 ? pnlSign(m.pnl) + fmtW(Math.abs(m.pnl)) : '-'}</p></div>
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-slate-600">
                <span>비중 {ratio.toFixed(1)}%</span>
                <span>현재가 ₩{comma(m.priceKRW)}</span>
              </div>
            </div>
          );
        })}
        {arr.length === 0 && (
          <div className="rounded-2xl border border-slate-800/80 bg-[#121B2E]/60 p-8 text-center text-slate-500 text-sm">등록된 자산이 없습니다.</div>
        )}
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────────────────────
// SETTINGS VIEW
// ──────────────────────────────────────────────────────────────────────────────
const SettingsView = ({
  rates, setRates, prices, lastUpdated, saveSettingsToCloud, showToast,
  handleExport, handleImport, ownerName, setOwnerName, saveOwnerName,
  stocks, setStocks,
}: {
  rates: Rates; setRates: (r: Rates) => void; prices: Prices; lastUpdated: string | null;
  saveSettingsToCloud: (p: Prices, r: Rates, t: string | null) => Promise<void>;
  showToast: (m: string) => void; handleExport: () => void;
  handleImport: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ownerName: string; setOwnerName: (v: string) => void; saveOwnerName: () => void;
  stocks: Stock[]; setStocks: (s: Stock[]) => void;
}) => {
  const [geminiKey, setGeminiKey] = useState(() => localStorage.getItem('gemini_api_key') || '');
  const [csvText, setCsvText]     = useState('');
  const [ocrScanning, setOcrScanning] = useState(false);
  const [ocrStep, setOcrStep]     = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const siteUrl = window.location.href.split('?')[0];

  const saveGeminiKey = () => { localStorage.setItem('gemini_api_key', geminiKey); showToast('Gemini API Key 저장 완료'); };

  const handleResetStocks = () => {
    if (!window.confirm('⚠️ 모든 자산 데이터를 삭제하시겠습니까?')) return;
    setStocks([]);
    localStorage.setItem(LOCAL_KEY, JSON.stringify({ stocks: [], prices, rates, lastUpdated }));
    showToast('자산 데이터가 삭제되었습니다.');
  };
  const handleRestoreDemo = () => {
    if (!window.confirm('데모 데이터(유태현 포트폴리오)를 복원하시겠습니까?')) return;
    setStocks(INITIAL_STOCKS);
    localStorage.setItem(LOCAL_KEY, JSON.stringify({ stocks: INITIAL_STOCKS, prices, rates, lastUpdated }));
    showToast('데모 데이터가 복원되었습니다.');
  };

  const handleParseCsv = () => {
    if (!csvText.trim()) return showToast('텍스트를 입력해주세요.');
    try {
      const lines = csvText.split('\n').map(l => l.trim()).filter(Boolean);
      const baseId = stocks.reduce((m, s) => s.id > m ? s.id : m, 0) + 100;
      const parsed: Stock[] = lines.flatMap((line, idx) => {
        const p = line.split(/[\t,]/).map(x => x.trim());
        if (p.length < 2) return [];
        const sh = Number(p[1].replace(/[^0-9.]/g, '')) || 1;
        const bp = Number(p[2]?.replace(/[^0-9.]/g, '')) || 0;
        const inv = p[3] ? Number(p[3].replace(/[^0-9.]/g, '')) : sh * bp;
        const base = p[4] ? Number(p[4].replace(/[^0-9.]/g, '')) : bp;
        return [{ id: baseId + idx, n: p[0], c: '-', yt: '', t: '국내ETF', sh, bp, inv, base, cur: 'KRW', ow: ownerName, ac: '위탁', br: '한국투자증권' }];
      });
      if (!parsed.length) return showToast('데이터를 해석하지 못했습니다.');
      const merged = [...stocks, ...parsed];
      setStocks(merged);
      localStorage.setItem(LOCAL_KEY, JSON.stringify({ stocks: merged, prices, rates, lastUpdated }));
      setCsvText('');
      showToast(`${parsed.length}개 종목을 추가했습니다.`);
    } catch { showToast('파싱 오류가 발생했습니다.'); }
  };

  const handleOcrFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setOcrScanning(true); setOcrStep('스캔 분석 중...');
    if (geminiKey.trim()) {
      try {
        setOcrStep('Gemini Vision AI로 잔고 데이터를 분석 중...');
        const reader = new FileReader();
        reader.onload = async (evt) => {
          try {
            const base64Data = (evt.target!.result as string).split(',')[1];
            const resp = await fetch(
              `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  contents: [{ parts: [
                    { text: '이 이미지(주식/ETF 잔고 스크린샷)에서 종목명, 보유수량, 매수단가, 매수금액, 현재가를 추출하여 다음 JSON 배열만 반환하세요: [{"n":"종목명","sh":수량,"bp":매수단가,"inv":매수금액,"base":현재가}]' },
                    { inlineData: { mimeType: file.type, data: base64Data } }
                  ] }],
                  generationConfig: { responseMimeType: 'application/json' },
                }),
              }
            );
            if (!resp.ok) throw new Error('API error');
            const data = await resp.json();
            const arr: { n: string; sh: number; bp: number; inv: number; base: number }[] = JSON.parse(data.candidates?.[0]?.content?.parts?.[0]?.text);
            if (!Array.isArray(arr)) throw new Error('Not array');
            const baseId = stocks.reduce((m, s) => s.id > m ? s.id : m, 0) + 500;
            const converted: Stock[] = arr.map((item, idx) => ({
              id: baseId + idx, n: item.n || '추출 종목', c: '-', yt: '', t: '국내ETF',
              sh: Number(item.sh)||0, bp: Number(item.bp)||0,
              inv: Number(item.inv)||(Number(item.sh)*Number(item.bp))||0,
              base: Number(item.base)||Number(item.bp)||0,
              cur: 'KRW', ow: ownerName, ac: 'IRP', br: '한국투자증권',
            }));
            const merged = [...stocks, ...converted];
            setStocks(merged);
            localStorage.setItem(LOCAL_KEY, JSON.stringify({ stocks: merged, prices, rates, lastUpdated }));
            showToast(`AI OCR 완료: ${converted.length}개 자산 추가`);
          } catch { showToast('AI OCR 분석 실패. API Key 또는 이미지를 확인하세요.'); }
          finally   { setOcrScanning(false); }
        };
        reader.readAsDataURL(file);
      } catch { setOcrScanning(false); }
    } else {
      setTimeout(() => setOcrStep('격자 정렬 매칭 중...'), 800);
      setTimeout(() => setOcrStep('데이터 분할 파싱 중...'), 1800);
      setTimeout(() => {
        const demo: Stock[] = [
          { id: Date.now()+1, n:'KODEX 미국S&P500', c:'-', yt:'', t:'국내ETF', sh:150, bp:12500, inv:1875000, base:13800, cur:'KRW', ow:ownerName, ac:'위탁', br:'미래에셋증권' },
          { id: Date.now()+2, n:'ACE 글로벌반도체TOP4', c:'-', yt:'', t:'국내ETF', sh:80, bp:15400, inv:1232000, base:16900, cur:'KRW', ow:ownerName, ac:'위탁', br:'미래에셋증권' },
        ];
        const merged = [...stocks, ...demo];
        setStocks(merged);
        localStorage.setItem(LOCAL_KEY, JSON.stringify({ stocks: merged, prices, rates, lastUpdated }));
        setOcrScanning(false);
        showToast('시뮬레이터 모드: 샘플 2개 자산 추가 (API Key 없음)');
      }, 3000);
    }
    e.target.value = '';
  };

  return (
    <div className="space-y-6 pb-24 md:pb-12 max-w-4xl mx-auto">

      {/* Owner */}
      <div className="rounded-3xl border border-slate-800 bg-[#121B2E]/80 p-5 shadow-xl">
        <h3 className="text-base font-black text-white mb-1 flex items-center gap-2"><User className="text-emerald-400" size={18}/> 포트폴리오 소유자</h3>
        <p className="text-xs text-slate-400 mb-4">대시보드 상단에 표시되는 이름입니다.</p>
        <div className="flex gap-3">
          <input type="text" value={ownerName} onChange={e => setOwnerName(e.target.value)}
            className="flex-1 bg-[#0B0F19] border border-slate-700 text-sm text-white rounded-xl px-4 py-2.5 focus:border-blue-500 focus:outline-none" placeholder="소유자 이름" />
          <button onClick={saveOwnerName} className="px-5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all">저장</button>
        </div>
      </div>

      {/* Exchange Rates */}
      <div className="rounded-3xl border border-slate-800 bg-[#121B2E]/80 p-5 shadow-xl">
        <h3 className="text-base font-black text-white mb-1 flex items-center gap-2"><BarChart3 className="text-blue-400" size={18}/> 기준 환율</h3>
        <p className="text-xs text-slate-400 mb-4">외화 자산 평가금액 계산용 환율입니다. 시세 업데이트 시 자동 적용됩니다.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {([['USDKRW','USD/KRW'],['JPYKRW','JPY/KRW (1엔)'],['HKDKRW','HKD/KRW']] as [keyof Rates, string][]).map(([key, label]) => (
            <div key={key} className="bg-[#0B0F19] rounded-xl p-3 border border-slate-800">
              <label className="block text-[11px] font-bold text-slate-400 mb-1">{label}</label>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-400">₩</span>
                <input type="number" value={rates[key]}
                  onChange={e => setRates({ ...rates, [key]: Number(e.target.value) })}
                  className="w-full bg-transparent text-base font-bold text-white focus:outline-none" />
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => { saveSettingsToCloud(prices, rates, lastUpdated); showToast('환율이 저장되었습니다.'); }}
          className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-xl transition-all">
          환율 저장 및 동기화
        </button>
      </div>

      {/* AI & CSV Import */}
      <div className="rounded-3xl border border-slate-800 bg-[#121B2E]/80 p-5 shadow-xl space-y-5">
        <div>
          <h3 className="text-base font-black text-white mb-1 flex items-center gap-2"><Activity className="text-orange-500 animate-pulse" size={18}/> AI & Excel 스마트 입력</h3>
          <p className="text-xs text-slate-400">엑셀 붙여넣기 또는 스크린샷으로 종목을 일괄 등록합니다.</p>
        </div>
        {/* CSV */}
        <div className="bg-[#0B0F19] rounded-2xl p-4 border border-slate-800">
          <div className="flex items-center gap-2 mb-2 text-xs font-extrabold text-slate-300"><FileText size={13} className="text-blue-400" /> 엑셀 복사 붙여넣기</div>
          <p className="text-[11px] text-slate-500 mb-2">형식: 종목명 ↦ 수량 ↦ 매수단가 ↦ 매수금액 ↦ 현재가 (탭/쉼표 구분)</p>
          <textarea rows={3} value={csvText} onChange={e => setCsvText(e.target.value)}
            placeholder={"삼성전자\t15\t71500\t1072500\t72000\n현대차\t20\t230000\t4600000\t225000"}
            className="w-full bg-[#131B2E] border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-blue-500/50 font-mono resize-none" />
          <button onClick={handleParseCsv} className="mt-2 w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold rounded-xl transition-all">
            엑셀 데이터 가져오기
          </button>
        </div>
        {/* OCR */}
        <div className="bg-[#0B0F19] rounded-2xl p-4 border border-slate-800">
          <div className="flex items-center gap-2 mb-3 text-xs font-extrabold text-slate-300"><Camera size={13} className="text-emerald-400" /> AI OCR 스크린샷 스캔</div>
          <div className="flex gap-2 mb-3">
            <div className="relative flex-1">
              <input type="password" value={geminiKey} onChange={e => setGeminiKey(e.target.value)}
                placeholder="Google Gemini API Key (없으면 시뮬레이터 모드)"
                className="w-full bg-[#131B2E] border border-slate-800 text-xs text-slate-200 rounded-xl px-3 py-2.5 pr-8 focus:outline-none font-mono" />
              <Key size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" />
            </div>
            <button onClick={saveGeminiKey} className="px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-extrabold transition-all">저장</button>
          </div>
          <div className="flex flex-col items-center justify-center border border-dashed border-slate-700/80 rounded-2xl p-5 bg-[#131B2E]/20 min-h-[100px]">
            {ocrScanning ? (
              <div className="flex flex-col items-center space-y-3">
                <RefreshCw size={26} className="text-emerald-400 animate-spin" />
                <p className="text-xs font-extrabold text-emerald-300 animate-pulse text-center">{ocrStep}</p>
              </div>
            ) : (
              <div className="text-center space-y-3">
                <Camera size={30} className="mx-auto text-slate-500" />
                <button onClick={() => fileInputRef.current?.click()}
                  className="py-2 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl transition-all">
                  스크린샷 올리기
                </button>
                <p className="text-[10px] text-slate-500">PNG / JPG / GIF</p>
              </div>
            )}
            <input type="file" ref={fileInputRef} accept="image/*" className="hidden" onChange={handleOcrFile} />
          </div>
        </div>
      </div>

      {/* Mobile Access & Backup */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Mobile QR */}
        <div className="rounded-3xl border border-slate-800 bg-[#121B2E]/80 p-5 shadow-xl space-y-3">
          <h3 className="text-base font-black text-white flex items-center gap-2"><Smartphone className="text-blue-400" size={18}/> 모바일 · PC 연동</h3>
          <p className="text-xs text-slate-400">QR 코드를 스캔하거나 URL을 복사해서 모바일에서 접속하세요. Firebase 클라우드로 실시간 동기화됩니다.</p>
          <div className="bg-[#0B0F19] rounded-xl px-3 py-2 border border-slate-800 flex items-center gap-2">
            <span className="text-[11px] text-slate-400 truncate flex-1 font-mono">{siteUrl}</span>
            <button onClick={() => { navigator.clipboard.writeText(siteUrl); showToast('URL 복사 완료'); }}
              className="shrink-0 px-2 py-1 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded text-[11px] font-bold transition-all">복사</button>
          </div>
          <div className="flex justify-center py-1">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(siteUrl)}&bgcolor=121B2E&color=FFFFFF&format=svg`}
              alt="QR Code" className="rounded-xl border border-slate-700/50 w-36 h-36"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
          <div className={`rounded-xl p-3 flex items-start gap-2 ${hasFirebase ? 'bg-emerald-500/5 border border-emerald-500/20' : 'bg-slate-800/50 border border-slate-700'}`}>
            <Info size={13} className={`shrink-0 mt-0.5 ${hasFirebase ? 'text-emerald-400' : 'text-slate-400'}`} />
            <p className={`text-[11px] ${hasFirebase ? 'text-emerald-300' : 'text-slate-400'}`}>
              {hasFirebase ? '클라우드 연동 활성화 — 모든 기기에서 실시간 동기화' : '로컬 모드 — Firebase 환경변수 설정 시 멀티 디바이스 동기화'}
            </p>
          </div>
        </div>

        {/* Backup */}
        <div className="rounded-3xl border border-slate-800 bg-[#121B2E]/80 p-5 shadow-xl space-y-4">
          <h3 className="text-base font-black text-white flex items-center gap-2"><Cloud className="text-emerald-400" size={18}/> 데이터 백업 · 복원</h3>
          <p className="text-xs text-slate-400">포트폴리오를 JSON으로 저장하고 다른 기기에서 복원합니다.</p>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={handleExport}
              className="flex items-center justify-center gap-2 py-3 bg-[#0B0F19] border border-slate-800 hover:border-slate-500 text-white text-xs font-bold rounded-xl transition-all">
              <Download size={14}/> JSON 저장
            </button>
            <label className="flex items-center justify-center gap-2 py-3 bg-[#0B0F19] border border-slate-800 hover:border-slate-500 text-white text-xs font-bold rounded-xl transition-all cursor-pointer">
              <Upload size={14}/> 백업 복원
              <input type="file" accept=".json" className="hidden" onChange={handleImport} />
            </label>
          </div>
          <div className="h-px bg-slate-800" />
          <div className="grid grid-cols-2 gap-3">
            <button onClick={handleRestoreDemo}
              className="py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition-all">
              데모 데이터 복원
            </button>
            <button onClick={handleResetStocks}
              className="py-2.5 bg-rose-950/40 hover:bg-rose-950/60 text-rose-300 text-xs font-bold rounded-xl transition-all border border-rose-900/50">
              전체 데이터 삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────────────────────
// STOCK MODAL
// ──────────────────────────────────────────────────────────────────────────────
const StockModal = ({
  isModalOpen, setIsModalOpen, editingStock, stocks, saveStockToCloud, deleteStockFromCloud, showToast, rates,
}: {
  isModalOpen: boolean; setIsModalOpen: (v: boolean) => void;
  editingStock: Stock | null; stocks: Stock[];
  saveStockToCloud: (s: Stock) => Promise<void>;
  deleteStockFromCloud: (id: number) => Promise<void>;
  showToast: (m: string) => void; rates: Rates;
}) => {
  const isNew = !editingStock;
  const [mode, setMode]  = useState<'quick' | 'manual'>('quick');
  const [form, setForm]  = useState<Partial<Stock>>({});
  const [evalAmt, setEvalAmt] = useState(0);

  useEffect(() => {
    if (!isModalOpen) return;
    setMode(isNew ? 'quick' : 'manual');
    setForm(editingStock || { n:'', c:'', yt:'', t:'국내주식', cur:'KRW', ow:'유태현', ac:'위탁', br:'삼성증권', sh:0, bp:0, base:0, inv:0 });
    setEvalAmt(editingStock ? getMetrics(editingStock, {}, rates).val : 0);
  }, [isModalOpen, editingStock]);

  useEffect(() => {
    const sh = Number(form.sh) || 0, pr = Number(form.base) || 0;
    if (mode === 'quick')  setEvalAmt(Number(form.base) || 0);
    else if (sh > 0)       setEvalAmt(Math.round(sh * pr * (form.cur === 'USD' ? rates.USDKRW : 1)));
    else                   setEvalAmt(Number(form.inv) || 0);
  }, [form.sh, form.base, form.inv, form.cur, rates.USDKRW, mode]);

  const handleField = (id: string, val: string | number) => {
    const updated = { ...form, [id]: val };
    if (mode === 'manual' && (id === 'sh' || id === 'bp')) {
      const sh = Number(id === 'sh' ? val : updated.sh) || 0;
      const bp = Number(id === 'bp' ? val : updated.bp) || 0;
      updated.inv = Math.round(sh * bp);
    }
    setForm(updated);
  };

  const handleSave = async () => {
    if (!form.n?.trim()) return showToast('종목명을 입력해주세요.');
    const s: Stock = {
      ...(form as Stock),
      sh:  mode === 'quick' ? 1 : Number(form.sh) || 0,
      bp:  mode === 'quick' ? Number(form.inv) || 0 : Number(form.bp) || 0,
      inv: Number(form.inv) || 0,
      base:Number(form.base) || 0,
      id:  isNew ? (stocks.reduce((m, s) => s.id > m ? s.id : m, 0) + 1000) : form.id!,
    };
    await saveStockToCloud(s);
    setIsModalOpen(false);
    showToast('저장 완료');
  };

  const handleDelete = async (type: 'sell' | 'error') => {
    const msg = type === 'sell' ? '전량 매도 처리하시겠습니까?' : '입력 오류 데이터를 삭제하시겠습니까?';
    if (!window.confirm(msg)) return;
    await deleteStockFromCloud(form.id!);
    setIsModalOpen(false);
    showToast(type === 'sell' ? '전량 매도 처리 완료' : '삭제 완료');
  };

  const F = ({ label, id, type = 'text', ...rest }: { label: string; id: keyof Stock; type?: string; [k: string]: unknown }) => (
    <div>
      <label className="block text-xs font-bold text-slate-400 mb-1.5">{label}</label>
      <input type={type}
        className="w-full bg-[#0B0F19] border border-slate-700 text-sm text-white rounded-xl px-4 py-2.5 focus:border-blue-500 outline-none transition-all"
        value={form[id] !== undefined && form[id] !== null ? String(form[id]) : ''}
        onChange={e => {
          const v = type === 'number' ? (e.target.value === '' ? '' : Number(e.target.value)) : e.target.value;
          handleField(id, v as string | number);
        }} {...rest} />
    </div>
  );

  const S = ({ label, id, options }: { label: string; id: keyof Stock; options: string[] }) => (
    <div>
      <label className="block text-xs font-bold text-slate-400 mb-1.5">{label}</label>
      <select className="w-full bg-[#0B0F19] border border-slate-700 text-sm text-white rounded-xl px-4 py-2.5 focus:border-blue-500 outline-none appearance-none cursor-pointer"
        value={String(form[id] || options[0])} onChange={e => handleField(id, e.target.value)}>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-[#0B0F19]/90 backdrop-blur-sm"
      onClick={e => e.target === e.currentTarget && setIsModalOpen(false)}>
      <div className="bg-[#1E293B] border border-slate-700 rounded-t-3xl md:rounded-3xl w-full md:max-w-lg max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col custom-scrollbar">

        <div className="sticky top-0 bg-[#1E293B]/95 backdrop-blur z-10 border-b border-slate-700/50">
          <div className="flex items-center justify-between p-5 pb-3">
            <h3 className="text-lg font-black text-white">{editingStock ? `${editingStock.n} 수정` : '새 자산 추가'}</h3>
            <button onClick={() => setIsModalOpen(false)} className="p-2 text-slate-400 hover:bg-slate-700 rounded-full transition-colors"><X size={22}/></button>
          </div>
          <div className="flex px-5 pb-4 gap-2">
            <button onClick={() => setMode('quick')} className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all flex justify-center items-center gap-1.5 ${mode === 'quick' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
              <Zap size={14}/> 빠른 입력
            </button>
            <button onClick={() => setMode('manual')} className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${mode === 'manual' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
              상세 입력
            </button>
          </div>
        </div>

        <div className="p-5 space-y-4 flex-1">
          {mode === 'quick' ? (
            <div className="space-y-4">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex gap-2 items-start">
                <Info className="text-emerald-400 shrink-0 mt-0.5" size={14} />
                <p className="text-xs text-emerald-200">증권사 앱의 <b>총 매수금액</b>과 <b>총 평가금액</b>만 입력하세요.</p>
              </div>
              <F label="종목명" id="n" placeholder="예: 삼성전자" />
              <div className="grid grid-cols-2 gap-4">
                <S label="증권사" id="br" options={BROKER_GROUPS} />
                <S label="계좌 종류" id="ac" options={ACCOUNT_GROUPS} />
              </div>
              <F label="총 매수금액 (원금)" id="inv" type="number" placeholder="예: 19832800" />
              <F label="현재 총 평가금액" id="base" type="number" placeholder="예: 23556000" />
            </div>
          ) : (
            <div className="space-y-4">
              <F label="종목명" id="n" placeholder="예: 삼성전자" />
              <div className="grid grid-cols-2 gap-4">
                <F label="종목코드" id="c" placeholder="005930" />
                <F label="Yahoo 티커" id="yt" placeholder="005930.KS" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <S label="자산유형" id="t" options={ASSET_TYPES} />
                <S label="통화" id="cur" options={['KRW','USD']} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <S label="증권사" id="br" options={BROKER_GROUPS} />
                <S label="계좌 종류" id="ac" options={ACCOUNT_GROUPS} />
              </div>
              <div className="h-px bg-slate-700/50" />
              <div className="grid grid-cols-2 gap-4">
                <F label="보유 수량" id="sh" type="number" step="any" />
                <F label="매수 단가" id="bp" type="number" step="any" />
              </div>
              <F label="총 매입원금 (KRW)" id="inv" type="number" step="any" />
              <div className="grid grid-cols-2 gap-4">
                <F label="현재가 (단가)" id="base" type="number" step="any" />
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1.5">평가금액 (자동)</label>
                  <input readOnly value={comma(evalAmt)} className="w-full bg-slate-800/30 border border-slate-700 text-sm text-slate-400 font-bold rounded-xl px-4 py-2.5 cursor-not-allowed" />
                </div>
              </div>
            </div>
          )}

          {editingStock && (
            <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-4 space-y-3">
              <div className="text-rose-400 font-extrabold text-xs flex items-center gap-2"><Coins size={13}/> 자산 종결</div>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => handleDelete('sell')} className="py-2.5 bg-rose-600/20 hover:bg-rose-600/30 text-rose-200 border border-rose-500/30 text-xs font-extrabold rounded-xl transition-all flex items-center justify-center gap-1.5">
                  <Coins size={12}/> 전량 매도
                </button>
                <button onClick={() => handleDelete('error')} className="py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-extrabold rounded-xl transition-all flex items-center justify-center gap-1.5">
                  <Trash2 size={12}/> 오류 삭제
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="sticky bottom-0 bg-[#1E293B] border-t border-slate-700/50 p-4 flex gap-3">
          <button onClick={() => setIsModalOpen(false)} className="flex-1 py-3.5 text-sm font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors">취소</button>
          <button onClick={handleSave} className="flex-[2] py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-lg shadow-blue-500/20">저장</button>
        </div>
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────────────────────
// MAIN APP
// ──────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [user, setUser]           = useState<unknown>(null);
  const [tab, setTab]             = useState('dashboard');
  const [stocks, setStocks]       = useState<Stock[]>([]);
  const [prices, setPrices]       = useState<Prices>({});
  const [rates, setRates]         = useState<Rates>({ USDKRW: 1473.30, JPYKRW: 9.3, HKDKRW: 177 });
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [loading, setLoading]     = useState(false);
  const [toastMsg, setToastMsg]   = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen]   = useState(false);
  const [editingStock, setEditingStock] = useState<Stock | null>(null);
  const [ownerName, setOwnerName] = useState(() => localStorage.getItem('taehyun_ow_portfolio_name') || '유태현');
  const [sortKey, setSortKey]     = useState('val');
  const [sortDir, setSortDir]     = useState(-1);
  const [search, setSearch]       = useState('');
  const [filterAcct, setFilterAcct]     = useState('전체');
  const [filterBroker, setFilterBroker] = useState('전체');

  const showToast = (msg: string) => { setToastMsg(msg); setTimeout(() => setToastMsg(null), 3500); };
  const saveOwnerName = () => { localStorage.setItem('taehyun_ow_portfolio_name', ownerName); showToast(`소유자 [${ownerName}] 저장 완료`); };

  // Auth
  useEffect(() => {
    if (!auth) { loadFromLocal(); return; }
    (async () => { try { await signInAnonymously(auth!); } catch { loadFromLocal(); } })();
    return onAuthStateChanged(auth!, u => setUser(u));
  }, []);

  const loadFromLocal = () => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      if (raw) {
        const d = JSON.parse(raw);
        if (d.prices) setPrices(d.prices);
        if (d.rates)  setRates(prev => ({ ...prev, ...d.rates }));
        if (d.lastUpdated) setLastUpdated(d.lastUpdated);
        if (d.stocks) { setStocks(d.stocks); return; }
      }
    } catch {}
    setStocks(INITIAL_STOCKS);
  };

  // Firestore realtime sync
  useEffect(() => {
    if (!user || !db) return;
    const stocksRef   = collection(db!, 'artifacts', APP_ID, 'public', 'data', 'stocks_taehyun_v5');
    const settingsRef = doc(db!, 'artifacts', APP_ID, 'public', 'data', 'settings_taehyun_v5', 'global');

    const unsubStocks = onSnapshot(stocksRef, snap => {
      if (snap.empty) {
        const localRaw = localStorage.getItem(LOCAL_KEY);
        const seed: Stock[] = localRaw ? (JSON.parse(localRaw).stocks || INITIAL_STOCKS) : INITIAL_STOCKS;
        const batch = writeBatch(db!);
        seed.forEach(s => batch.set(doc(stocksRef, String(s.id)), s));
        batch.commit();
        setStocks(seed);
      } else {
        const loaded = snap.docs.map(d => d.data() as Stock);
        setStocks(loaded);
        localStorage.setItem(LOCAL_KEY, JSON.stringify({ stocks: loaded, prices, rates, lastUpdated }));
      }
    }, console.error);

    const unsubSettings = onSnapshot(settingsRef, snap => {
      if (snap.exists()) {
        const d = snap.data();
        if (d.prices) setPrices(d.prices);
        if (d.rates)  setRates(d.rates);
        if (d.lastUpdated) setLastUpdated(d.lastUpdated);
      } else {
        setDoc(settingsRef, { prices: {}, rates: { USDKRW: 1473.30, JPYKRW: 9.3, HKDKRW: 177 }, lastUpdated: null });
      }
    }, console.error);

    return () => { unsubStocks(); unsubSettings(); };
  }, [user]);

  // Cloud helpers
  const saveStockToCloud = async (stock: Stock) => {
    const newStocks = stocks.find(s => s.id === stock.id)
      ? stocks.map(s => s.id === stock.id ? stock : s)
      : [...stocks, stock];
    setStocks(newStocks);
    localStorage.setItem(LOCAL_KEY, JSON.stringify({ stocks: newStocks, prices, rates, lastUpdated }));
    if (user && db) await setDoc(doc(db!, 'artifacts', APP_ID, 'public', 'data', 'stocks_taehyun_v5', String(stock.id)), stock);
  };

  const deleteStockFromCloud = async (id: number) => {
    const newStocks = stocks.filter(s => s.id !== id);
    setStocks(newStocks);
    localStorage.setItem(LOCAL_KEY, JSON.stringify({ stocks: newStocks, prices, rates, lastUpdated }));
    if (user && db) await deleteDoc(doc(db!, 'artifacts', APP_ID, 'public', 'data', 'stocks_taehyun_v5', String(id)));
  };

  const saveSettingsToCloud = async (newPrices: Prices, newRates: Rates, newTs: string | null) => {
    setPrices(newPrices); setRates(newRates); setLastUpdated(newTs);
    localStorage.setItem(LOCAL_KEY, JSON.stringify({ stocks, prices: newPrices, rates: newRates, lastUpdated: newTs }));
    if (user && db) {
      const ref = doc(db!, 'artifacts', APP_ID, 'public', 'data', 'settings_taehyun_v5', 'global');
      await setDoc(ref, { prices: newPrices, rates: newRates, lastUpdated: newTs }, { merge: true });
    }
  };

  // Price sync — works with or without Firebase
  const fetchTicker = async (ticker: string): Promise<number | null> => {
    const proxies = [
      `https://corsproxy.io/?${encodeURIComponent(`https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d&range=1d`)}`,
      `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://query2.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d`)}`,
      `https://thingproxy.freeboard.io/fetch/https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d`,
    ];
    for (const url of proxies) {
      try {
        const r = await fetch(url, { signal: AbortSignal.timeout(8000) });
        if (!r.ok) continue;
        const d = await r.json();
        const p = d?.chart?.result?.[0]?.meta?.regularMarketPrice;
        if (p) return p;
      } catch {}
    }
    return null;
  };

  const syncPrices = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const tickers    = [...new Set(stocks.filter(s => s.yt && s.sh > 0).map(s => s.yt))];
      const newPrices  = { ...prices };
      const newRates   = { ...rates };
      for (let i = 0; i < tickers.length; i += 5) {
        await Promise.all(tickers.slice(i, i + 5).map(async t => {
          const p = await fetchTicker(t); if (p) newPrices[t] = p;
        }));
      }
      await Promise.all(
        ([['USDKRW','USDKRW=X'],['JPYKRW','JPYKRW=X'],['HKDKRW','HKDKRW=X']] as [keyof Rates, string][])
          .map(async ([key, t]) => { const p = await fetchTicker(t); if (p) newRates[key] = p; })
      );
      await saveSettingsToCloud(newPrices, newRates, new Date().toISOString());
      showToast('시세 및 환율 업데이트 완료');
    } catch { showToast('업데이트 중 오류 발생'); }
    setLoading(false);
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify({ stocks, prices, rates, lastUpdated }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${ownerName}_포트폴리오_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    showToast('백업 파일 다운로드 완료');
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      try {
        const data = JSON.parse(ev.target!.result as string);
        if (data.stocks) setStocks(data.stocks);
        await saveSettingsToCloud(data.prices || prices, data.rates || rates, data.lastUpdated || lastUpdated);
        if (user && db && data.stocks) {
          const batch = writeBatch(db!);
          const ref = collection(db!, 'artifacts', APP_ID, 'public', 'data', 'stocks_taehyun_v5');
          data.stocks.forEach((s: Stock) => batch.set(doc(ref, String(s.id)), s));
          await batch.commit();
        }
        showToast('백업 복원 완료');
      } catch { showToast('백업 파일 형식이 올바르지 않습니다.'); }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const isCloudActive = !loading && !!user && hasFirebase;

  return (
    <div className="flex h-screen bg-[#0B0F19] text-slate-100 font-sans overflow-hidden selection:bg-blue-500/30">

      {/* Sidebar */}
      <aside className="hidden md:flex w-60 flex-col border-r border-slate-800 bg-[#0F172A] shrink-0">
        <div className="p-6">
          <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">Asset Control</div>
          <div className="text-xl font-black tracking-tight text-white uppercase leading-none mb-2">
            {ownerName || 'PORTFOLIO'}<br/>
            <span className="text-slate-500 text-xs font-semibold tracking-normal normal-case">Portfolio Pro</span>
          </div>
          <div className={`inline-flex items-center gap-1.5 text-[10px] font-extrabold px-2.5 py-1 rounded-md border ${isCloudActive ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' : 'text-slate-400 bg-slate-800/60 border-slate-700'}`}>
            <Cloud size={10}/> {isCloudActive ? 'Cloud Sync Live' : hasFirebase ? 'Connecting...' : 'Local Mode'}
          </div>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {TABS.map(t => {
            const Icon = t.icon;
            return (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all ${tab === t.id ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'}`}>
                <Icon size={18} className={tab === t.id ? 'opacity-100' : 'opacity-70'} /> {t.label}
              </button>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-800/80">
          <button onClick={() => { setEditingStock(null); setIsModalOpen(true); }}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-2xl transition-all border border-slate-700">
            <Plus size={16}/> 새 자산 추가
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 flex items-center justify-between px-4 md:px-8 py-4 bg-[#0B0F19]/80 backdrop-blur-md border-b border-slate-800/80">
          <div className="md:hidden text-base font-black tracking-tight text-white">{ownerName} ASSETS</div>
          <div className="hidden md:block text-lg font-black text-white uppercase tracking-tight">
            {TABS.find(t => t.id === tab)?.label}
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <div className="hidden sm:flex flex-col items-end">
              <div className={`text-[11px] font-bold flex items-center gap-1.5 ${isCloudActive ? 'text-emerald-400' : 'text-slate-500'}`}>
                <span className="relative flex h-2 w-2">
                  {isCloudActive && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />}
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${loading ? 'bg-amber-400' : isCloudActive ? 'bg-emerald-500' : 'bg-slate-600'}`} />
                </span>
                {loading ? '업데이트 중...' : isCloudActive ? '클라우드 동기화 중' : '로컬 모드'}
              </div>
              {lastUpdated && (
                <div className="text-[10px] text-slate-500 mt-0.5">
                  {new Date(lastUpdated).toLocaleString('ko-KR', { month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' })}
                </div>
              )}
            </div>
            <button onClick={syncPrices} disabled={loading}
              className="flex items-center gap-1.5 bg-blue-600/10 hover:bg-blue-600/20 disabled:opacity-50 text-blue-400 text-sm font-extrabold py-2 px-4 rounded-full border border-blue-500/20 transition-all active:scale-95">
              <Zap size={14} className={loading ? 'animate-pulse text-yellow-400' : ''} />
              <span className="hidden sm:inline">시세 업데이트</span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 pb-28 md:pb-8 custom-scrollbar">
          {tab === 'dashboard' && <DashboardView stocks={stocks} prices={prices} rates={rates} setTab={setTab} setFilterAcct={setFilterAcct} setFilterBroker={setFilterBroker} ownerName={ownerName} />}
          {tab === 'allstocks' && <AllStocksView stocks={stocks} prices={prices} rates={rates} setEditingStock={setEditingStock} setIsModalOpen={setIsModalOpen} filterAcct={filterAcct} setFilterAcct={setFilterAcct} filterBroker={filterBroker} setFilterBroker={setFilterBroker} search={search} setSearch={setSearch} sortKey={sortKey} setSortKey={setSortKey} sortDir={sortDir} setSortDir={setSortDir} />}
          {tab === 'settings' && <SettingsView rates={rates} setRates={setRates} prices={prices} lastUpdated={lastUpdated} saveSettingsToCloud={saveSettingsToCloud} showToast={showToast} handleExport={handleExport} handleImport={handleImport} ownerName={ownerName} setOwnerName={setOwnerName} saveOwnerName={saveOwnerName} stocks={stocks} setStocks={setStocks} />}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F172A]/95 backdrop-blur-xl border-t border-slate-800" style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}>
        <div className="flex justify-around px-4 pt-2 pb-1">
          {TABS.map(t => {
            const Icon = t.icon;
            return (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`flex flex-col items-center py-2 px-5 transition-colors rounded-xl ${tab === t.id ? 'text-blue-500' : 'text-slate-500'}`}>
                <Icon size={22} className="mb-0.5" />
                <span className="text-[10px] font-black uppercase tracking-tighter">{t.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile FAB */}
      <button onClick={() => { setEditingStock(null); setIsModalOpen(true); }}
        className="md:hidden fixed bottom-24 right-5 z-40 bg-blue-600 text-white p-4 rounded-full shadow-2xl shadow-blue-600/40 active:scale-90 transition-all">
        <Plus size={26} />
      </button>

      <StockModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} editingStock={editingStock} stocks={stocks} saveStockToCloud={saveStockToCloud} deleteStockFromCloud={deleteStockFromCloud} showToast={showToast} rates={rates} />

      {/* Toast */}
      <div className={`fixed bottom-32 md:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-slate-800 border border-slate-700 text-white text-sm font-bold px-6 py-3 rounded-2xl shadow-2xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${toastMsg ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <Activity size={15} className="text-blue-400 shrink-0" /> {toastMsg}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #1e293b; border-radius: 20px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #334155; }
      `}</style>
    </div>
  );
}

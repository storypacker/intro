/* ───────────── 앱 페이지 광고 스위치 ─────────────
   on: false  → 모든 앱 페이지에서 광고가 나오지 않습니다 (애드센스 승인 심사 중 권장)
   on: true   → 각 앱의 광고 구역(앱 아래, '앱 안내' 위)에 애드센스 광고가 나옵니다
   특정 앱만 끄려면 그 앱의 <div class="sp-ad" ...> 에 data-off 를 붙이세요.
   ───────────────────────────────────────────── */
window.SP_ADS = {
  on: false,
  client: "ca-pub-5017353982200290",
  slot: "9844864640"
};
(function () {
  var cfg = window.SP_ADS;
  if (!cfg || !cfg.on) return;
  var boxes = [].slice.call(document.querySelectorAll(".sp-ad:not([data-off])"));
  if (!boxes.length) return;
  if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
    var s = document.createElement("script");
    s.async = true;
    s.crossOrigin = "anonymous";
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + cfg.client;
    document.head.appendChild(s);
  }
  boxes.forEach(function (box) {
    box.hidden = false;
    box.innerHTML = '<span class="sp-ad-label">광고</span>';
    var ins = document.createElement("ins");
    ins.className = "adsbygoogle";
    ins.style.display = "block";
    ins.setAttribute("data-ad-client", cfg.client);
    ins.setAttribute("data-ad-slot", box.getAttribute("data-slot") || cfg.slot);
    ins.setAttribute("data-ad-format", "auto");
    ins.setAttribute("data-full-width-responsive", "true");
    box.appendChild(ins);
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
  });
})();

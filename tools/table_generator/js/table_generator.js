//table_generator
(function() {
    var addListener = (function() { if (window.addEventListener) { return function(el, type, fn) { el.addEventListener(type, fn, false); }; } else { if (window.attachEvent) { return function(el, type, fn) { var f = function() { fn.call(el, window.event); };	el.attachEvent("on" + type, f); }; } else { return function(el, type, fn) { element["on" + type] = fn; }; } } })(),
        getByID = function(id) { return document.getElementById(id); },
        htmlEscape = (function() { var map = { "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&#39;", "\"": "&quot;", " ": "&nbsp;" }, replaceStr = function(s) { return map[s]; }; return function(str) { return str.replace(/<|>|&|'|"|\s/g, replaceStr); }; })();

    function tableGenerator() {
        var L = getByID("thLayout"),
            btn = getByID("b"),
            cbtn = getByID("cb"),
            OUTPUT1 = getByID("output1"),
            OUTPUT2 = getByID("output2");
        var idt1 = "  ",
            idt2 = "    ",
            N = "\n";
        var TS = "<table>" + N,
            TR = idt1 + "<tr>" + N,
            TH = idt2 + "<th>",
            TD = idt2 + "<td>",
            TDE = "</td>" + N,
            THE = "</th>" + N,
            TRE = idt1 + "</tr>" + N,
            TE = "</table>" + N;
        var ErrorFlg;

        function clear() { OUTPUT1.value = OUTPUT2.innerHTML = ""; }

        function gene() {
            var h = getByID("h").value,
                v = getByID("v").value,
                l = L.value;
            var FTRI = "",
                NTRI = "",
                FTRC = "",
                NTRC = "";
            var CAP = htmlEscape(getByID("tableCaption").value),
                SUM = htmlEscape(getByID("tableSummary").value);
            ((h > 100) || (v > 100) || (h <= 0) || (v <= 0) || h.match(/[\D]/g) || v.match(/[\D]/g)) ? ErrorFlg = true : ErrorFlg = false;
            if (ErrorFlg === false) {
                (CAP === "") ? CAP = "" : CAP = "  <caption>" + CAP + "</caption>" + N;
                (SUM === "") ? SUM = "" : TS = '<table summary="' + SUM + '">' + N;
                if ((l == 1) || (l == 3)) {
                    for (i = 0; i < h; i++) {
                        FTRI += TH + "" + THE;
                    }
                }
                if (l == 2) {
                    FTRI = TH + "" + THE;
                    for (i = 1; i < h; i++) {
                        FTRI += TD + "" + TDE;
                    }
                }
                if (l == 4) {
                    for (i = 0; i < h; i++) {
                        FTRI += TD + "" + TDE;
                    }
                }
                FTRC = TR + FTRI + TRE;
                delete FTRI;
                if (l == 1) {
                    for (i = 0; i < h; i++) {
                        NTRI += TD + "" + TDE;
                    }
                }
                if ((l == 2) || (l == 3)) {
                    NTRI = TH + "" + THE;
                    for (i = 1; i < h; i++) {
                        NTRI += TD + "" + TDE;
                    }
                }
                if (l == 4) {
                    for (i = 0; i < h; i++) {
                        NTRI += TD + "" + TDE;
                    }
                }
                NTRC = TR + NTRI + TRE;
                delete NTRI;
                for (i = 1; i < v; i++) {
                    FTRC += NTRC;
                }
                delete NTRC;
                FTRC = TS + CAP + FTRC + TE;
                OUTPUT1.value = OUTPUT2.innerHTML = FTRC;
                delete FTRC;
            } else {
                clear();
            }
        }
        addListener(btn, "click", gene);
        addListener(cbtn, "click", clear);
    }
    addListener(window, "load", tableGenerator);
})();



//analyzer
var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-3656453-7']);_gaq.push(['_trackPageview']);(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src=('https:'==document.location.protocol?'https://ssl':'http://www')+'.google-analytics.com/ga.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga, s);})();

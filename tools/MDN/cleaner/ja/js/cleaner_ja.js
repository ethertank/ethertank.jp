"use strict";


(function($) {



// プラグイン jQuery elastic
$('#t').css("resize","none"); // js 有効時、即ちプラグイン有効時にのみ通常の手動リサイズ機能をカット
$('#t').elastic(); // 実行
$('#t').trigger('update'); // トリガの設定



// 本体。MDN の新システム Kuma で変更された URL などを修正。
$("#c").click(function() {
	var t = $("#t")[0],
		s = t.value;


	// URL
	s = s.replace(/href=\"\/*en(-US\/docs)*\//gi, 'href="/ja/docs/');
	s = s.replace(/href=\"\/*Project\:en\//gi,'href="/ja/docs/Project:');
	s = s.replace(/Special:Tags\?tag=(.*?)(?:&|&amp;)language=en?/gi, 'ja/docs/tag/$1');

	s = s.replace(/href=\"\/*ja(\/docs)*\//gi, 'href="/ja/docs/');
	s = s.replace(/href=\"\/*Project\:ja\//gi,'href="/ja/docs/Project:');
	s = s.replace(/Special:Tags\?tag=(.*?)(?:&|&amp;)language=ja?/gi, 'ja/docs/tag/$1');

	s = s.replace(/Core_JavaScript_1\.5_/g, 'JavaScript/');
	s = s.replace(/XUL_School/g, 'XUL\/School_tutorial');
	s = s.replace(/Canvas_tutorial/g, 'HTML/Canvas/Tutorial');
	s = s.replace(/Gecko_DOM_Reference/g, 'DOM/DOM_Reference');
	s = s.replace(/docs\/CSS_Reference/gi, 'docs/CSS/CSS_Reference');
	s = s.replace(/docs\/MathML\//gi, 'docs/Web/MathML/');
	s = s.replace(/docs\/XUL_Tutorial\//gi, 'docs/XUL/Tutorial/');


	// anchor
	s = s.replace(/(categories#)f(low|orm)/g, '$1F$2');
	s = s.replace(/(categories#)p(hrasing)/g, '$1P$2');
	s = s.replace(/(categories#)s(ectioning)/g, '$1S$2');
	s = s.replace(/(categories#)h(eading)/g, '$1H$2');
	s = s.replace(/(categories#)e(mbedded)/g, '$1E$2');
	s = s.replace(/(categories#)i(nteractive)/g, '$1I$2');
	s = s.replace(/(categories#)m(etadata)/g, '$1M$2');
	s = s.replace(/(categories#)t(ransparent)/g, '$1T$2');
	s = s.replace(/(document#)s(ectioning)/g, '$1S$2');


	// title
	s = s.replace(/title=\"\/*en(-US)*\/(docs\/)*/gi, 'title="');
	s = s.replace(/title=\"\/*ja\/(docs\/)*/gi, 'title="');

	s = s.replace(/Core JavaScript 1\.5/g, 'JavaScript/');
	s = s.replace(/title=\"XUL School/g, 'title="XUL\/School_tutorial');    
	s = s.replace(/title=\"Gecko DOM Reference/g, 'title="DOM/DOM Reference');


	// id, name
	s = s.replace(/\"Browser_Compatibility\"/g, '"Browser_compatibility"');
	s = s.replace(/\"See_Also\"/g, '"See_also"');

	// id, name (ja)
	s = s.replace(/\"\.E6\.A6\.82\.E8\.A6\.81\"/g, '"Summary"'); // 概要
	s = s.replace(/\"\.E8\.AA\.AC\.E6\.98\.8E\"/g, '"Description"'); // 説明
	s = s.replace(/\"\.E6\.A7\.8B\.E6\.96\.87\"/g, '"Syntax"'); // 構文

	s = s.replace(/\"\.E3\.83\.96\.E3\.83\.A9\.E3\.82\.A6\.E3\.82\.B6\.E4\.BA\.92\.E6\.8F\.9B\.E6\.80\.A7\"/g, '"Browser_compatibility"'); // ブラウザ互換性
	s = s.replace(/\"\.E3\.83\.96\.E3\.83\.A9\.E3\.82\.A6\.E3\.82\.B6\.E3\.81\.AE\.E4\.BA\.92\.E6\.8F\.9B\.E6\.80\.A7\"/g, '"Browser_compatibility"'); //ブラウザの互換性
	s = s.replace(/\"\.E3\.83\.96\.E3\.83\.A9\.E3\.82\.A6\.E3\.82\.B6\.E6\.AF\.8E\.E3\.81\.AE\.E4\.BA\.92\.E6\.8F\.9B\.E6\.80\.A7\"/g, '"Browser_compatibility"'); //ブラウザ毎の互換性
	s = s.replace(/\"\.E3\.83\.96\.E3\.83\.A9\.E3\.82\.A6\.E3\.82\.B6\.E5\.AE\.9F\.E8\.A3\.85\.E7\.8A\.B6\.E6\.B3\.81\"/g, '"Browser_compatibility"'); // ブラウザ実装状況
	s = s.replace(/\"\.E3\.83\.96\.E3\.83\.A9\.E3\.82\.A6\.E3\.82\.B6\.E3\.81\.AE\.E5\.AE\.9F\.E8\.A3\.85\.E7\.8A\.B6\.E6\.B3\.81\"/g, '"Browser_compatibility"'); // ブラウザの実装状況

	s = s.replace(/\"\.E5\.80\.A4\"/g, '"Values"'); // 値

	s = s.replace(/\"\.E4\.BB\.95\.E6\.A7\.98\.E6\.9B\.B8\"/g, '"Specifications"'); // 仕様書
	

	s = s.replace(/\"\.E5\.8F\.82\.E7\.85\.A7\"/g, '"See_also"'); //参照
	s = s.replace(/\"\.E5\.8F\.82\.E8\.80\.83\"/g, '"See_also"'); //参考
	s = s.replace(/\"\.E5\.8F\.82\.E8\.80\.83\.E6\.83\.85\.E5\.A0\.B1\"/g, '"See_also"'); // 参考情報
	s = s.replace(/\"\.E9\.96\.A2\.E9\.80\.A3\.E6\.83\.85\.E5\.A0\.B1\"/g, '"See_also"'); // 関連情報

	s = s.replace(/\"\.E3\.82\.BB\.E3\.82\.AD\.E3\.83\.A5\.E3\.83\.AA\.E3\.83\.86\.E3\.82\.A3\"/g, '"Security"'); // セキュリティ

	
	
	// 不要になったクラス (eval, deki-transform)
	// URL 修正に伴い不要となった可能性の高いクラス(internal/external) ※"external" は必要であれば自動で付与される
	s = s.replace(/ class=\"(eval|deki-transform|internal|external)\"/g, '');


	// id / name 属性の .C2.A2 を アンダースコアに
	s = s.replace(/((?:id|name)=\".+?)\.C2\.A0(.+?\")?/g, '$1_$2');


	// テンプレートの詰め
	s = s.replace(/\{\{ /mg, '{{').replace(/ \}\}/gm, '}}').replace(/\((("|'){2})*\)\}\}/gm, '}}');


	// 空 p
	s = s.replace(/<p>(?:\s|&nbsp;)*<\/p>/gm, '');


	// p, dt, dd, li, hn の先頭および末尾スペース削除
	s = s.replace(/<(p|dt|dd|li|h[1-6])>(?:\s|&nbsp;)*/gm, '<$1>');
	s = s.replace(/(?:\s|&nbsp;)*<\/(p|dt|dd|li|h[1-6])>/gm, '</$1>');
	
	
	// headline
	s = s.replace(/(See)(?:\s|&nbsp;)A(lso<\/h)/gmi,'$1 a$2');
	s = s.replace(/(Browser)(?:\s|&nbsp;)C(ompatibility<\/h)/gmi,'$1 c$2');

	
	// よくある誤字の修正 ( http://jsfiddle.net/ethertank/eK6a2/ )
	s = s.replace(/Mozil*a/g, 'Mozilla');
	s = s.replace(/F(?:(?:ir|ie)|(?:ier)|(?:ore))(?:(?:g|f)*o*x)/g, 'Firefox');


	// 古い言語間リンク用テンプレートのマクロを削除
	s = s.replace(/<(?:p|(?:div))>\s*\{\{(\s*(wiki\.)*languages.*)\}\}\s*<\/(?:p|(?:div))>/g,'');


	// 不正な出力になる、ブロックテンプレートしか内容を持たない p の div への置換。既にdivの場合マクロ前後の改行を削除
	// パラメータ付きのものも対象にしている。パラメータが空のものは既に括弧を削除しているので、空の括弧付きのものは考慮していない。
	s = s.replace(/<(?:p|div)>\s*(\{\{\s*(cssbox|(?:CSSTutorial|MDCProjectPages|html5article|Preferences_System_)Toc|(?:css(?:om|MozExtension)*|dom|xul)ref|(?:deprecated|non-standard|obsolete|(?:js|gecko|fx|tb|sm)_minversion|HTMLVersion|MobileOnly)_header|ListSubpages|translationInProgress|翻訳中|outDated|SeeCompatTable|xpcomapi|draft|outdated|next|preview|CompatibilityTable|DOMAttributeMethods|autoPreviousNext)(?:\(.+?\))*\s*\}\})\s*<\/(?:p|div)>/gmi,'<div>$1</div>');


	// テンプレートしか内容を持たないdiv（※この様なdivの内容は全てブロックテンプレートであるとする）が連続している場合、1divに纏める
	// ※未完成（惜しいけどこれだと連打しないといけないし、前提があやしい）
	//s = s.replace(/<(?:p|div)>\s*((?:\{\{[a-zA-Z_]*\}\}?)*)<\/(?:p|div)>\s*<(?:p|div)>\s*((?:\{\{[a-zA-Z_]*\}\}?)*)\s*/gmi, '<div>$1$2');


	// 画像パスの修正（要検証） https://bugzilla.mozilla.org/show_bug.cgi?id=795841
	s = s.replace(/fileid=\"(.*)\"\s*src=\"File:en\/Media_Gallery\/(.*\"?)/g, 'src="/files/$1/$2');


	// 空の div.noinclude を削除
	s = s.replace(/<div class=\"noinclude\">(?:\s|\b|&nbsp;)*<\/div>?/gm, '');


	// <th>IE&nbsp;Phone</th>
	s = s.replace(/(<th>IE)&nbsp;(Phone<\/th>)/gi,'$1 $2');
	
	
	// <p>DOM Level 0. Not part of specification.</p>
	s = s.replace(/(<p>)DOM Level 0. Not part of specification.(<\/p>)/gi,'$1{{dom0}}$2');


	// 英文スペルミス修正
	s = s.replace(/Initial defination/gmi, 'Initial definition');
	s = s.replace(/(compatibil)(ty)/gmi, '$1i$2');


	// <hn id="xxx"> を <hn id="xxx" name="xxx"> に置換。不完全。
	s = s.replace(/(<h\d id="([^"<>]*)")>/gi, '$1 name="$2">');


	// 見出しの自動翻訳
	s = s.replace(/(<h\d[^>]*>)([^<]+)(<\/h\d>)/gi, function() {
		var a = arguments;

		return (a[1] + ({
			"Attribute" : "属性",
			"Attributes" : "属性",
			"Browser compatibility" : "ブラウザ実装状況",
			"Categories": "カテゴリ",
			"Class overview" : "クラスの概要",
			"Community" : "コミュニティ",
			"Compatibility" : "互換性",
			"Constants": "定数",
			"Constructor": "コンストラクタ",
			"Description" : "説明",
			"DOM interface" : "DOM インタフェース",
			"DOM interfaces" : "DOM インタフェース",
			"Documentation" : "ドキュメンテーション",
			"Example" : "例",
			"Examples" : "例",
			"Gecko-specific notes": "Gecko 固有の注意事項",
			"General info" : "一般情報",
			"Google Chrome notes" : "Google Chrome に関する注記",
			"Introduction": "イントロダクション",
			"Internet Explorer Notes": "Internet Explorer に関する注記",
			"Method" : "メソッド",
			"Methods" : "メソッド",
			"Method overview": "メソッドの概要",
			"Note" : "注記",
			"Notes" : "注記",
			"Object overview" : "オブジェクトの概要",
			"Other": "その他",
			"Opera notes" : "Opera に関する注記",
			"overview" : "概要",
			"Parameter" : "引数",
			"Parameters" : "引数",
			"Property" : "プロパティ",
			"Properties" : "プロパティ",
			"Return value" : "戻り値",
			"Returns" : "戻り値",
			"Related Events" : "関連イベント",
			"Related Topics" : "関連トピック",
			"Selectors": "セレクタ",
			"Summary" : "概要",
			"Syntax" : "構文",
			"Specification" : "仕様",
			"Specifications" : "仕様",
			"See also" : "関連情報",
			"source" : "ソース",
			"Tools" : "ツール",
			"Tutorial" : "チュートリアル",
			"Tutorials" : "チュートリアル",
			"Usage context" : "使用可能な場所",
			"Value" : "値",
			"Values" : "値",
			"Webkit &amp; Trident (IE)": "Webkit 及び Trident (IE)"
		}[a[2]] || a[2]) + a[3]);
	});
	

	// リンクの自動翻訳。見出しではないため全て小文字にしてから処理している。
	s = s.replace(/(<a[^>]*>)([^<]+)(<\/a>)/gi, function() {
		var a = arguments;

		return (a[1] + ({
			"flow content" : "フローコンテンツ",
			"phrasing content" : "フレージングコンテンツ",
			"listed" : "リスト化",
			"labelable": "ラベル付け可能",
			"resettable" : "リセット可能",
			"form-associated element" : "フォーム関連要素"
		}[a[2].toLowerCase()] || a[2]) + a[3]);
	});


	// th / td の自動翻訳。
	s = s.replace(/(<t(?:h|d)[^>]*>)([^<]+)(<\/t(?:h|d)>)/gi, function() {
		var a = arguments;

		return (a[1] + ({
			"action" : "動作",
			"attribute" : "属性",
			"availability": "可用性",
			"basic support" : "基本サポート",
			"comment": "コメント",
			"description" : "説明",
			"ecmascript edition" : "ECMAScript エディション",
			"feature" : "機能",
			"implemented in" : "実装されたバージョン",
			"meaning" : "意味",
			"name": "名称",
			"property" : "プロパティ",
			"return": "戻り値",
			"shared module" : "共有モジュール",
			"specification": "仕様書",
			"status": "策定状況",
			"type" : "型",
			"value" : "値",
			"values" : "値"
		}[a[2].toLowerCase()] || a[2]) + a[3]);
	});


	// dfn の自動翻訳。
	s = s.replace(/(<dfn[^>]*>)([^<]+)(<\/dfn>)/gi, function() {
		var a = arguments;

		return (a[1] + ({
			"applies to": "適用対象",
			"media": "メディア",
			"animatable": "アニメーションの可否"
		}[a[2].toLowerCase()] || a[2]) + a[3]);
	});

	s = s.replace(/(<strong>)Note:(<\/strong>)/gmi,'$1注記:$2');


	// 訳語統一
	s = s.replace(/(ブラウザ)ー/gm, '$1'); // ※公式が「ブラウザ」。旧訳語決定会よりこれを優先する。 http://www.mozilla.jp/firefox/
	s = s.replace(/(インタ)(?:ー*)(フ[ェァ])(?:ー|イ)(ス)/gm, '$1フェー$3');
	s = s.replace(/(ハード|ソフト)ウエア/gm, '$1ウェア');
	s = s.replace(/(コミュニティ|タイポグラフィ|アクセシビリティ|ユーザビリティ|セキュリティ|ユーザ|プロパティ|データ)ー/gm, '$1');
	s = s.replace(/(スマート|ヘッド|フィーチャー)ホン/gm, '$1フォン');
	s = s.replace(/ターゲッティング/gm, 'ターゲティング');
	
	
	// 確実にタイプミスであるもの
	s = s.replace(/をを/gm, 'を');
	s = s.replace(/メッセエージ/gm, 'メッセージ');
	s = s.replace(/イベンと/gm, 'イベント');
	s = s.replace(/スプリクト/gm, 'スクリプト');
	s = s.replace(/していル/gm, 'している');


	// 不完全な置換
	if($("#advanced input")[0].checked === true) {
		// <span class="comment">xxx</span> を <!-- xxx --> に置換
		// ※未完成（<span><span class="comment">XYG</span></span> で死ぬ）
		s = s.replace(/<span class="comment">(.*)<\/span>?/g, '<!-- $1 -->');
	}

	// with文　for文　while文


	s = $.trim(s); // トリミング
	t.value = s; // 出力
});



// Delete ボタン
$("#d").click(function() {
	$("#t")[0].value = "";
	$("#t").css("height","inherit");
});

$("#s").click(function(){
	$("#t").select();
});



/*
# TODO (･ω･｀)
	見出しの中の 不要な nbsp エスケープの置換とトリム

	見出しの id/name 内の".C2.A0"を"_"へ置換

	#Syntax の直後の単独の pre に ".eval" しかない場合、".syntaxbox" に。　.twopartsyntaxbox というクラスの使用条件に合致する場合処理を避けなければならない。

	見出しのキャメライズの統一、空 p に変換されてしまうコード末尾の改行コードを削除
	
	pre の 古いハイライト用のクラス名を新しいのに変えて、その pre 内部の HTML タグを除去
	
	pre 内部の 不要な nbsp を半角スペースに置換
	
	見出しの name と id が異なる場合、name の値に統一
	
	同一 id を持つ要素が重複して存在する場合、二つ目以降の id に "-2" の様な連番を振った上で内容からの自動変換を防ぐ為に同値の name 属性を設定し重複を回避。正規表現だけで出来る？

*/



})(jQuery);
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
	s = s.replace(/href=\"\/*en(-US\/docs)*\//gi, 'href="/en-US/docs/');
	s = s.replace(/href=\"\/*Project\:en\//gi,'href="/en-US/docs/Project:');
	s = s.replace(/Core_JavaScript_1\.5_/g, 'JavaScript/');    
	s = s.replace(/Special:Tags\?tag=(.*?)(?:&|&amp;)language=en?/gi, 'en-US/docs/tag/$1');
	s = s.replace(/XUL_School/g, 'XUL\/School_tutorial');    
	s = s.replace(/Canvas_tutorial/g, 'HTML/Canvas/Tutorial');    
	s = s.replace(/Gecko_DOM_Reference/g, 'DOM/DOM_Reference');
	s = s.replace(/docs\/CSS_Reference/gi, 'docs/CSS/CSS_Reference');
	s = s.replace(/docs\/MathML\//gi, 'docs/Web/MathML/');
	s = s.replace(/XUL_Tutorial\//gi, 'XUL/Tutorial/');
	s = s.replace(/Mozilla_event_reference/gi, 'Web/Reference/Events');


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

	s = s.replace(/Core JavaScript 1\.5/g, 'JavaScript/');
	s = s.replace(/title=\"XUL School/g, 'title="XUL\/School_tutorial');    
	s = s.replace(/title=\"Gecko DOM Reference/g, 'title="DOM/DOM Reference');


	// id, name
	s = s.replace(/\"Browser_Compatibility\"/g, '"Browser_compatibility"');
	s = s.replace(/\"See_Also\"/g, '"See_also"');
	
	
	// 不要になったクラス (eval, deki-transform)
	// URL 修正に伴い不要となった可能性の高いクラス(internal/external) ※"external" は必要であれば自動で付与される
	s = s.replace(/ class=\"(eval|deki-transform|internal|external)\"/g, '');

	
	// id / name 属性の .C2.A2 を アンダースコアに
	s = s.replace(/((?:id|name)=\".+?)\.C2\.A0(.+?\")?/g, '$1_$2');


	// テンプレートの詰め
	s = s.replace(/\{\{ /gm, '{{').replace(/ \}\}/gm, '}}').replace(/\((("|'){2})*\)\}\}/gm, '}}');


	// 空 p
	s = s.replace(/<p>(?:\s|&nbsp;)*<\/p>/gm, '');


	// p, dt, dd, li, hn の先頭および末尾スペース削除
	s = s.replace(/<(p|dt|dd|li|h[1-6])>(?:\s|&nbsp;)*/gm, '<$1>');
	s = s.replace(/(?:\s|&nbsp;)*<\/(p|dt|dd|li|h[1-6])>/gm, '</$1>');

	
	// headline
	s = s.replace(/(See)(?:\s|&nbsp;)A(lso<\/h)/gmi,'$1 a$2');
	s = s.replace(/(Browser)(?:\s|&nbsp;)C(ompatibility<\/h)/gmi,'$1 c$2');

	
	// よくある誤字の修正 ( http://jsfiddle.net/ethertank/eK6a2/ )
	s = s.replace(/Mozil*a/gm, 'Mozilla');
	s = s.replace(/F(?:(?:ir|ie)|(?:ier)|(?:ore))(?:(?:g|f)*o*x)/gmi, 'Firefox');


	// 古い言語間リンク用テンプレートのマクロの "<p>{{" と "}}</p>" を "<!--" と "-->" に置換
	s = s.replace(/<(?:p|(?:div))>\s*\{\{(\s*(wiki\.)*languages.*)\}\}\s*<\/(?:p|(?:div))>/g,'<!--$1-->');


	// 不正な出力になる、ブロックテンプレートしか内容を持たない p の div への置換。既にdivの場合マクロ前後の改行を削除
	// パラメータ付きのものも対象にしている。パラメータが空のものは既に括弧を削除しているので、空の括弧付きのものは考慮していない。
	s = s.replace(/<(?:p|div)>\s*(\{\{\s*(cssbox|(?:CSSTutorial|MDCProjectPages|html5article|Preferences_System_)Toc|(?:css(?:om|MozExtension)*|dom|xul)ref|(?:deprecated|non-standard|obsolete|(?:js|gecko|fx|tb|sm)_minversion|HTMLVersion|MobileOnly)_header|ListSubpages|translationInProgress|翻訳中|outDated|SeeCompatTable|xpcomapi|draft|outdated|next|preview|PreviousNext|CompatibilityTable|DOMAttributeMethods|autoPreviousNext)(?:\(.+?\))*\s*\}\})\s*<\/(?:p|div)>/gmi,'<div>$1</div>');


	// テンプレートしか内容を持たないdiv（※この様なdivの内容は全てブロックテンプレートであるとする）が連続している場合、1divに纏める
	// ※未完成（惜しいけどこれだと連打しないといけないし、前提があやしい）
	//s = s.replace(/<(?:p|div)>\s*((?:\{\{[a-zA-Z_]*\}\}?)*)<\/(?:p|div)>\s*<(?:p|div)>\s*((?:\{\{[a-zA-Z_]*\}\}?)*)\s*/gmi, '<div>$1$2');


	// 空の div.noinclude を削除
	s = s.replace(/<div class=\"noinclude\">(?:\s|\b|&nbsp;)*<\/div>?/gm, '');


	// <th>IE&nbsp;Phone</th>
	s = s.replace(/(<th>IE)&nbsp;(Phone<\/th>)/gi,'$1 $2');


	// <p>DOM Level 0. Not part of specification.</p>
	s = s.replace(/(<p>)DOM Level 0. Not part of specification.(<\/p>)/gi,'$1{{dom0}}$2');


	// 英文スペルミス修正
	s = s.replace(/Initial defination/gmi, 'Initial definition');
	s = s.replace(/(compatibil)(ty)/gmi, '$1i$2');


	// 不完全な置換
	if($("#advanced input")[0].checked === true) {
		// 画像パスの修正（要検証） https://bugzilla.mozilla.org/show_bug.cgi?id=795841
		s = s.replace(/fileid=\"(.*)\"\s*src=\"File:en\/Media_Gallery\/(.*\"?)/g, 'src="/files/$1/$2');

		
		// <span class="comment">xxx</span> を <!-- xxx --> に置換
		// ※未完成（<span><span class="comment">XYG</span></span> で死ぬ）
		s = s.replace(/<span class="comment">(.*)<\/span>?/g, '<!-- $1 -->');
	}

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
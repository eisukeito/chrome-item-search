chrome.runtime.onInstalled.addListener(function() {
	var context = "selection";
	var title = "選択したキーワードから商品検索";
	var id = chrome.contextMenus.create({"title": title, "contexts":[context],
					     "id": "context" + context});  
    });
chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info, tab) {
    var sText = info.selectionText;
    var url_yodobashi = "http://www.yodobashi.com/ec/category/index.html?word=" + encodeURIComponent(sText) + "&cate=&searchbtn=true";  
    window.open(url_yodobashi, '_blank');
    var url_rakuten = "http://search.rakuten.co.jp/search/mall/" + encodeURIComponent(sText);
    window.open(url_rakuten, '_blank');
    var url_amazon = "http://www.amazon.co.jp/s/ref=nb_sb_noss_2?__mk_ja_JP=" + encodeURIComponent(sText) + "&url=search-alias%3Daps&field-keywords=" + encodeURIComponent(sText) + "&x=0&Ay=0";
    window.open(url_amazon, '_blank');
};
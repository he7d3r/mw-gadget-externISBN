/**
 * @source: [[w:en:User:Lunchboxhero/externISBN.js]]
 * @author: [[w:en:User:Lunchboxhero]]
 */
if ( mw.config.get( 'wgCanonicalSpecialPageName' ) !== 'Booksources'
	&& $.inArray(mw.config.get('wgPageName'), [ 'Wikilivros:Fontes_de_livros', 'Wikipedia:Book sources' ]) === -1 ) {
	$(function () {
		var	book_source_URL = '//www.google.com/search?tbs=bks:1&q=isbn:MAGICNUMBER',
			magicRegex = /MAGICNUMBER/ig;
		$('#content a').each(function(){
			if ( this.href.match(/Special:BookSources\/(.*)/)) {
				$(this).attr('href', book_source_URL.replace(magicRegex, RegExp.$1.replace(/[\D]*/g, '')) );
			}
		});
	});
}
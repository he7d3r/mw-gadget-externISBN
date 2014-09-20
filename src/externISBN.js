/**
 * @source: [[w:en:User:Lunchboxhero/externISBN.js]]
 * @author: [[w:en:User:Lunchboxhero]]
 */
/*jshint laxbreak: true */
/*global jQuery, mediaWiki */
( function ( mw, $ ) {
'use strict';

if ( mw.config.get( 'wgCanonicalSpecialPageName' ) !== 'Booksources'
	&& $.inArray( mw.config.get('wgPageName'), [ 'Wikilivros:Fontes_de_livros', 'Wikipedia:Book sources' ] ) === -1
) {
	$( function () {
		var bookSourceURL = '//www.google.com/search?tbs=bks:1&q=isbn:MAGICNUMBER',
			magicRegex = /MAGICNUMBER/ig;
		$( '#content' ).find( 'a' ).each( function(){
			if ( this.href.match( /Special:BookSources\/(.*)/ ) ) {
				$( this ).attr( 'href', bookSourceURL.replace( magicRegex, RegExp.$1.replace( /[\D]*/g, '' ) ) );
			}
		} );
	} );
}

}( mediaWiki, jQuery ) );
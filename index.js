/**
 * @file mofron-comp-ttlframe/index.js
 * @brief title frame component
 * @author simpart
 */
const mf     = require('mofron');
const Frame  = require('mofron-comp-frame');
const Header = require('mofron-comp-txtheader');

mf.comp.TtlFrame = class extends Frame {
    /**
     * initialize component
     * 
     * @param (mixed) text paramter
     *                object: component option
     * @param (component) child parameter
     * @pmap text,child
     * @type private
     */
    constructor (po, p2) {
        try {
            super();
            this.name('TtlFrame');
            this.prmMap(['text', 'child']);
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private 
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.addChild(this.header());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * header component
     * 
     * @param (mofron-comp-txtheader) header component
     * @return (mofron-comp-txtheader) header component
     * @type parameter
     */
    header (prm) {
        try {
	    if (undefined !== prm) {
	        prm.option({ bind : false });
	    }
            return this.innerComp('header', prm, Header);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * title text contents
     * 
     * @param (mixed) string: title text
     *                mofron-comp-text: text component
     * @param (string (size)) margin left size
     * @return (mofron-comp-text) text component
     * @type parameter
     */
    text (prm, lft) {
        try { return this.header().text(prm, lft); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * title text contents
     * same as text parameter
     * 
     * @param (mixed) string: title text
     *                mofron-comp-text: text component
     * @param (string (size)) margin left size
     * @return (mofron-comp-text) text component
     * @type parameter
     */
    title (prm, lft) {
        try { return this.text(prm, lft); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * header background color
     * 
     * @param (mixed (color)) string: color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @param (option) style option
     * @return (string) header background color
     * @type parameter
     */
    mainColor (prm, opt) {
        try { return this.header().baseColor(prm,opt); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.TtlFrame;
/* end of file */

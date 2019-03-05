/**
 * @file   mofron-comp-{@comp-name}/index.js
 * @author simpart
 */
const mf     = require('mofron');
const Frame  = require('mofron-comp-frame');
const Header = require('mofron-comp-txtheader');

/**
 * @class mofron.comp.TtlFrame
 * @brief titile frame component for mofron
 */
mf.comp.TtlFrame = class extends Frame {
    
    /**
     * initialize component
     * 
     * @param po paramter or option
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
     * @param prm : 
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
    
    header (prm) {
        try {
            let ret = this.innerComp('header', prm, Header);
            if (undefined !== prm) {
                prm.execOption({ bind : false });
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (prm, dct) {
        try { return this.header().text(prm, dct); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    title (prm, dct) {
        try { return this.text(prm, dct); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    mainColor (prm) {
        try { return this.header().baseColor(prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.TtlFrame;
/* end of file */

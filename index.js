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
    constructor (po) {
        try {
            super();
            this.name('TtlFrame');
            this.prmMap('text');
            this.prmOpt(po);
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
            this.addChild( this.header() );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    header (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                if (undefined === this.m_header) {
                    this.header(new Header({ bind  : false }));
                }
                return this.m_header;
            }
            /* setter */
            if (true !== mf.func.isInclude(prm, 'TxtHeader')) {
                throw new Error('invalid parameter');
            }
            if (undefined !== this.m_header) {
                this.updChild(this.m_header, prm);
            }
            this.m_header = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (prm) {
        try { return this.header().text(prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }

    }
    
    //syncHeight (prm) {
    //    try {
    //        if (undefined === prm) {
    //            /* getter */
    //            return (undefined === this.m_synchei) ? false : this.m_synchei;
    //        }
    //        /* setter */
    //        if ('boolean' !== typeof prm) {
    //            throw new Error('invalid parameter');
    //        }
    //        this.m_synchei = prm;
    //        if (true === prm) {
    //            this.height(this.height());
    //        }
    //    } catch (e) {
    //        console.error(e.stack);
    //        throw e;
    //    }
    //}
    
    //height (prm) {
    //    try {
    //        let ret = super.height(prm);
    //        if ( (undefined === ret) && (true === this.syncHeight()) ) {
    //            this.child()[0].height(prm);
    //        }
    //        return ret;
    //    } catch (e) {
    //        console.error(e.stack);
    //        throw e;
    //    }
    //}
}
module.exports = mofron.comp.TtlFrame;
/* end of file */

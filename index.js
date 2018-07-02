/**
 * @file   mofron-comp-{@comp-name}/index.js
 * @author simpart
 */
let mf = require('mofron');
let Frame = require('mofron-comp-frame');
let Header = require('mofron-comp-ttlhdr');

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
    initDomConts (prm) {
        try {
            super.initDomConts();
            this.addChild(
                new Header({
                    title : (undefined !== prm) ? prm : '',
                    bind  : false
                })
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (prm) {
        try {
            return this.child()[0].title(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }

    }
    
    syncHeight (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_synchei) ? false : this.m_synchei;
            }
            /* setter */
            if ('boolean' !== typeof prm) {
                throw new Error('invalid parameter');
            }
            this.m_synchei = prm;
            if (true === prm) {
                this.height(this.height());
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height (prm) {
        try {
            let ret = super.height(prm);
            if ( (undefined === ret) && (true === this.syncHeight()) ) {
                this.child()[0].height(prm);
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.TtlFrame;
/* end of file */

if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
  if (dwr.engine._getObject("Information_Query_YCH_DWR") == undefined) {
    var p;
    
    p = {};

    /**
     * @param {int} p0 a param
     * @param {int} p1 a param
     * @param {function|Object} callback callback function or options object
     */
    p.queryOfPage = function(p0, p1, callback) {
      return dwr.engine._execute(p._path, 'Information_Query_YCH_DWR', 'queryOfPage', arguments);
    };
    
    dwr.engine._setObject("Information_Query_YCH_DWR", p);
  }
})();


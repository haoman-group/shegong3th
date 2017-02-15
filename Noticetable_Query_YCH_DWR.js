if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
  if (dwr.engine._getObject("Noticetable_Query_YCH_DWR") == undefined) {
    var p;
    
    p = {};

    /**
     * @param {int} p0 a param
     * @param {int} p1 a param
     * @param {class java.lang.String} p2 a param
     * @param {function|Object} callback callback function or options object
     */
    p.queryIndex = function(p0, p1, p2, callback) {
      return dwr.engine._execute(p._path, 'Noticetable_Query_YCH_DWR', 'queryIndex', arguments);
    };
    
    dwr.engine._setObject("Noticetable_Query_YCH_DWR", p);
  }
})();


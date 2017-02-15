if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
  if (dwr.engine._getObject("Userinfo_Update_FC_DWR") == undefined) {
    var p;
    
    p = {};

    /**
     * @param {class java.lang.String} p0 a param
     * @param {class java.lang.String} p1 a param
     * @param {function|Object} callback callback function or options object
     */
    p.updatePass = function(p0, p1, callback) {
      return dwr.engine._execute(p._path, 'Userinfo_Update_FC_DWR', 'updatePass', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.quitLogin = function(callback) {
      return dwr.engine._execute(p._path, 'Userinfo_Update_FC_DWR', 'quitLogin', arguments);
    };

    /**
     * @param {class net.sf.json.JSONObject} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.updataPerData = function(p0, callback) {
      return dwr.engine._execute(p._path, 'Userinfo_Update_FC_DWR', 'updataPerData', arguments);
    };
    
    dwr.engine._setObject("Userinfo_Update_FC_DWR", p);
  }
})();


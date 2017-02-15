if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
  if (dwr.engine._getObject("UserInfo_Query_YCH_DWR") == undefined) {
    var p;
    
    p = {};

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.queryCurrentUserinfo = function(callback) {
      return dwr.engine._execute(p._path, 'UserInfo_Query_YCH_DWR', 'queryCurrentUserinfo', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.querySpeakers = function(callback) {
      return dwr.engine._execute(p._path, 'UserInfo_Query_YCH_DWR', 'querySpeakers', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {class java.lang.String} p1 a param
     * @param {class java.lang.String} p2 a param
     * @param {function|Object} callback callback function or options object
     */
    p.queryLogin = function(p0, p1, p2, callback) {
      return dwr.engine._execute(p._path, 'UserInfo_Query_YCH_DWR', 'queryLogin', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.queryIsLogin = function(callback) {
      return dwr.engine._execute(p._path, 'UserInfo_Query_YCH_DWR', 'queryIsLogin', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.queryUserById = function(p0, callback) {
      return dwr.engine._execute(p._path, 'UserInfo_Query_YCH_DWR', 'queryUserById', arguments);
    };
    
    dwr.engine._setObject("UserInfo_Query_YCH_DWR", p);
  }
})();


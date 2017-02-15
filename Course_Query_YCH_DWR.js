if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
  if (dwr.engine._getObject("Course_Query_YCH_DWR") == undefined) {
    var p;
    
    p = {};

    /**
     * @param {class java.lang.String} p0 a param
     * @param {class java.lang.String} p1 a param
     * @param {class java.lang.String} p2 a param
     * @param {int} p3 a param
     * @param {int} p4 a param
     * @param {class java.lang.String} p5 a param
     * @param {function|Object} callback callback function or options object
     */
    p.queryCourseForCategory = function(p0, p1, p2, p3, p4, p5, callback) {
      return dwr.engine._execute(p._path, 'Course_Query_YCH_DWR', 'queryCourseForCategory', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.queryPingfen = function(p0, callback) {
      return dwr.engine._execute(p._path, 'Course_Query_YCH_DWR', 'queryPingfen', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.queryCourseInfo = function(p0, callback) {
      return dwr.engine._execute(p._path, 'Course_Query_YCH_DWR', 'queryCourseInfo', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {class java.lang.String} p1 a param
     * @param {class java.lang.String} p2 a param
     * @param {class java.lang.String} p3 a param
     * @param {function|Object} callback callback function or options object
     */
    p.queryCountForCategory = function(p0, p1, p2, p3, callback) {
      return dwr.engine._execute(p._path, 'Course_Query_YCH_DWR', 'queryCountForCategory', arguments);
    };

    /**
     * @param {int} p0 a param
     * @param {int} p1 a param
     * @param {class java.lang.String} p2 a param
     * @param {function|Object} callback callback function or options object
     */
    p.queryIndexCourses = function(p0, p1, p2, callback) {
      return dwr.engine._execute(p._path, 'Course_Query_YCH_DWR', 'queryIndexCourses', arguments);
    };
    
    dwr.engine._setObject("Course_Query_YCH_DWR", p);
  }
})();


/**
 * 日期格式化
 * @param time
 * @returns {*}
 */
function formatDate(time) {
    if (time == '' || time == null || time == undefined) return '';
    var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
    var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
    var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
    return year + "年" + month + "月" + date + "日 " + hour + ":" + minute + ":" + second;
}

/**正式名单*/
function formatUserType(type){
    if (type == '' || type == null || type == undefined) return '';
    if(type == 0){

    }
    return ;
}

/**
 * 是否格式化：1是、0否
 * @param isyes
 * @returns {*}
 */
function formatWhether(isyes) {
    if (isyes == 1) {
        return '是';
    } else if (isyes == 0) {
        return '否';
    } else {
        return '';
    }
}


/**
 * 下载文件,以POST的方式提交---同一个页面
 * @param options{url,data}
 * 使用方式
 * downLoadFile({
 *      url:'xxx.download', //请求的url
 *      data:{name:xxx,age:xxx}//要发送的数据
 *      callback:function(){}
 * });
 *
 */
var downLoadFile = function (options) {
    var config = $.extend(true, {method: 'post'}, options);
    var $form = $('<form target="_self" method="' + config.method + '" />');
    $form.attr('action', config.url);
    for (var key in config.data) {
        $form.append('<input type="hidden" name="' + key + '" value="' + config.data[key] + '" />');
    }
    $(document.body).append($form);
    if (config.callback != undefined) {
        config.callback();
    }
    $form[0].submit();
};

/**下载文件---新页面
 * options:{
 * url:‘‘,              //下载地址
 * data:{name:value},   //要发送的数据
 * method:‘post‘
 * }
 */
var DownLoadFile = function (options) {
    var config = $.extend(true, { method: 'post'}, options);
    var $iframe = $('<iframe id="down-file-iframe" />');
    var $form = $('<form target="down-file-iframe" method="' + config.method + '" />');
    $form.attr('action', config.url);
    for (var key in config.data) {
        $form.append('<input type="hidden" name="' + key + '" value="' + config.data[key] + '" />');
    }
    $iframe.append($form);
    $(document.body).append($iframe);
    $form[0].submit();
    $iframe.remove();
}



















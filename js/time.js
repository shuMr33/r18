window.onload = function() {
    // 网站开始运行时间，改成自己的网站开始运行时间
    var start = new Date("2022/05/18 00:00:00").getTime();
    // 时间更新函数，每1000毫秒运行一次
    setInterval(function() {
        // 现在时间
        var now = new Date().getTime();
        // 运行总时间
        var run = now - start;
        // 总秒数
        var sumSeconds = parseInt(run / 1000);
        // 天数
        var d = parseInt(sumSeconds / 86400);
        // 小时
        var h = parseInt(sumSeconds % 86400 / 3600);
        // 分钟
        var min = size(parseInt(sumSeconds / 60 % 60));
        // 秒
        var m = size(parseInt(sumSeconds % 60));

        /*更新锚点显示*/
        document.querySelector('#runtime').innerHTML = "本站已运行 " + d + "天 " + h + "小时 " + min + "分" + m + "秒";

        }, 1000)
    // 输出数字文本格式化：小于10的数，前边增加一个0
    function size(d) {
        return d < 10 ? '0' + d : d;
    }
    //换色部分
    rgb = new Array(255, 0, 0);
    sign = 1;

    function changeColor() {
        last = (3 + sign - 1) % 3;
        if (rgb[sign] < 255) rgb[sign] += 5;
        else if (rgb[last] > 0) rgb[last] -= 5;
        else sign = (sign + 1) % 3;
        $("#runtime").css("color", "rgb(" + rgb.join(",") + ")");
    }

    setInterval(changeColor, 10);

    var tfrow = document.getElementById('tfhover').rows.length;
    var tbRow=[];
    for (var i=1;i<tfrow;i++) {
      tbRow[i]=document.getElementById('tfhover').rows[i];
      tbRow[i].onmouseover = function(){
        this.style.backgroundColor = '#79f379d1';
      };
      tbRow[i].onmouseout = function() {
        this.style.backgroundColor = '#ffffff26';
      };
    }
};

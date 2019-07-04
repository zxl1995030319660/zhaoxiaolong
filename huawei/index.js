// 轮播图
// 获取“前一个”和“后一个”元素。querySelector只会返回一个元素。
var prev = document.querySelector('.icon-prev');
var next = document.querySelector('.icon-next');
// 获取所有的图片和“小圆点”
var img_box_a = document.querySelectorAll('.img-box a');
var pager_a = document.querySelectorAll('.pager a');
console.log(prev);

// 当前要显示的图片索引值
var index = 0;
// 最后一个图片的索引
var max_index = pager_a.length - 1;

// 循环“小圆点”，分别给它绑定事件。
/* 
把for语句分成四部分，
1. let i = 0; 初始化语句。
2. i < pager_a.length; 判断语句。
3. {
    const curr = pager_a[i];
    curr.onmouseover = function () {
        showImg(i);
    }
}  语句体（循环体）
4. i++ 累加/累减语句 （i=i+1）
第一次执行顺序：初始化语句》判断语句》循环体》累加/累减语句
第二次执行顺序：判断语句》循环体》累加/累减语句
第三次执行顺序：判断语句》循环体》累加/累减语句
......
第九次执行顺序：判断语句》循环体》累加/累减语句
第十次执行顺序：判断语句》跳出循环体

for循环了多少次？问的是循环体执行了多少次？ 9
for语句执行多少次？ 10
*/
for (let i = 0; i < pager_a.length; i++) {
    // const定义常量，值永远不变，let用来定义变量。
    const curr = pager_a[i];
    // onmouseover事件：鼠标经过元素时执行的事件。
    curr.onmouseover = function () {
        // 自已定义的函数，用来显示图片
        showImg(i);
    }
}

function showImg(i) {
    // 把当前显示的图片的索引值保存下来。
    index = i;
    // 把所有的图片隐藏，所有的“小圆点”去除白色背景。
    // 循环所有的“小圆点”  pager是每次循环中的“小圆点”,m每次循环中“小圆点”索引
    pager_a.forEach(function (pager, m) {
        // 去除当前图片的透明度
        img_box_a[m].style.opacity = "0";
        // 去除当前“小圆点”的类名current
        pager.classList.remove('current');
    })
    // 把对应索引的图片显示，对应的“小圆点”添加白色背景。
    img_box_a[i].style.opacity = "1";
    pager_a[i].classList.add('current');
}

// “前一个”点击事件
prev.onclick = function () {
    if (index != 0) {
        index = index - 1;
    } else {
        index = max_index;
    }
    showImg(index);
}

// “后一个”点击事件
next.onclick = function () {
    if (index != max_index) {
        index = index + 1;
    } else {
        index = 0;
    }
    showImg(index);
}

// 自动播放
// setInterval(函数,时间)
// 每间隔一段时间去执行一次函数。
// 时间的单位是毫秒 5000ms=5s
setInterval(function () {
    if (index != max_index) {
        index = index + 1;
    } else {
        index = 0;
    }
    showImg(index);
}, 5000);
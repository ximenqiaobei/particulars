/*

1，写出html
2, 给按钮绑定click 事件
3，在点击按钮时切换内容的显示

*/
// 
// var bindEventToggle = function(){
//     var b = e('.menu-toggle')
//     bindEvent(b, 'click', function(){
//         // log('按钮绑定成功')
//         // 找到 mennu-content
//         var c = e('.menu-content')
//         // 开关 hide class
//         toggleClass(c, 'hide')
//     })
// }

// bindEventToggle()


var bindEventToggles = function(){
    var selector = '.menu-toggle'
    bindAll(selector, 'click', function(event){
        log('按钮绑定成功')
        // 找到 自己菜单的 mennu-content
        var fu = event.target.parentElement

        var c = find(fu, '.menu-content')
        // 开关 hide class
        toggleClass(c, 'hide')
    })
}


bindEventToggles()

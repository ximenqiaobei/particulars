var log = function(){
    console.log.apply(console, arguments)
}


var e = function(selector){
    return document.querySelector(selector)
}


var appendHtml = function(element, html){
    element.insertAdjacentHTML('beforeend', html)
}


var bindEvent = function(element, eventName, callback){
    element.addEventListener(eventName, callback)
}


var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

function updateInnerHTML(selector, newValue) {
    document.querySelector(selector).innerHTML = newValue;
    
}
updateInnerHTML('h2.intro', 'Hello World');

function strong(value){
    return "<strong>" + value + "</value>";
}

var importantText;

importantText = document.querySelector('p.important').innerHTML;
importantText = strong(importantText)
updateInnerHTML('p.important', importantText);

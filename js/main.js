// my js!
let toriBtn = document.getElementById('tori-button');
let workBtn = document.getElementById('work-button');
let toriShow = true;

let viewChange = () => {
    if (toriShow === true) {
        toriShow === false;
//        removeClassName('.tori-view', '')
    } else {
       toriShow === true 
    }
};

//let addClassName = (elementName, className) => {
//    let nodes = document.querySelectorAll('${elementName}');
//    
//    for (let i = 0; i < nodes.length; i++) {
//        nodes[i].addClass('${className}');
//    }
//}
//
//let removeClassName = (elementName, className) => {
//    let nodes = document.querySelectorAll('${elementName}');
//    
//    for (let i = 0; i < nodes.length; i++) {
//        nodes[i].removeClass('${className}');
//    }
//}

toriBtn.addEventListener('mousedown', viewChange);
workBtn.addEventListener('mousedown', viewChange);
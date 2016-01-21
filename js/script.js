'use strict';

var list = document.getElementById('spisok');

list.addEventListener('click', function (e) {
    var target = e.target;

    if (e.shiftKey) {
        target.


    } else if (e.ctrlKey || e.metaKey) {
        target.classList.toggle('selected');
    } else {
        var sibl = target.parentNode.children;
        for (var i = 0; i < sibl.length; i++) {
            sibl[i].className = '';
        }
        target.className = 'selected';
    }

});



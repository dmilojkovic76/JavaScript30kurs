(function (global) {
    'use strict';
    const chkbxList = document.querySelectorAll('.inbox input[type="checkbox"]');
    let lastChecked;
    
    function handleChecked (e) {
        
        let doChecking = false;
        
        if (e.shiftKey && this.checked) {
            chkbxList.forEach(box => {
                if (box === this || box === lastChecked) {
                    doChecking = !doChecking;
                }
                
                if (doChecking) {
                    box.checked = true;
                }
            });
        }
        
        lastChecked = this;
    }
    
    chkbxList.forEach(box => box.addEventListener('click', handleChecked));
    
})();
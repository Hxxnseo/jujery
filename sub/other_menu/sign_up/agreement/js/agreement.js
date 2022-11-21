function check() {
    var frm = document.frm;
    if(!frm.term_agree1.checked) {
        alert("이용약관에 동의하세요!");
        frm.term_agree1.focus();
        return false;
    }

    if(!frm.term_agree2.checked) {
        alert("개인정보에 동의하세요!");
        frm.term_agree2.focus();
        return false;
    }
}

function allcheck() {
    with(document.frm) {
        if(all_agreement.checked) { 
            for(let i = 0; i < frm.length; i++) { 
                if(elements[i].type == "checkbox") {
                    elements[i].checked = true;
                }
            }
        } else {
            for(let i = 0; i < frm.length; i++) {
                if(elements[i].type == "checkbox") {
                    elements[i].checked = false;
                }
            }
        }
    }
};
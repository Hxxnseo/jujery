// 유효성검사
function check() {
    const frm = document.frm;
    if(!frm.user_id.value) {
        return false;
    } else if (!frm.user_id.value, frm.user_pw.value, frm.user_pw2.value) {
        return false;
    } else if (!frm.mobile.value) {
        return false;
    } else if (!frm.email.value) {
        return false;
    } return true;
};

// 공백확인 함수
function checkExistData(value, dataName) {
    if(value == "") {
        alert(dataName + "입력해주세요!");
        return false;
    }
    return true;
};
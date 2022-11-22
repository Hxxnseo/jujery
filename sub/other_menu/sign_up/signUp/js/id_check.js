//아이디 중복체크 팝업창(현재 공백문서)
function id_check() {
    window.open("", "", "width=600, height=200, left=200, top=100");
}

//이메일 옵션 선택후 주소 자동 완성
function change_email() {
    var email_add = document.getElementById("email_server1");
    var email_sel = document.getElementById("email_server2");

//지금 골라진 옵션의 순서와 값 구하기
    var idx = email_sel.options.selectedIndex;
    var val = email_sel.options[idx].value;

    email_add.value = val;
}
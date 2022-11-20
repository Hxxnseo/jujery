function loginChk() {
    var form = document.frm;
    if (!form.user_id.value) {
        alert("아이디를 입력해 주십시오.");
        form.user_id.focus();
        return;
    }

    if (!form.user_pw.value) {
        alert("비밀번호를 입력해 주십시오.");
        form.user_pw.focus();
        return;
    }
    form.action = "login_ok.php";
    form.submit();
}

onKeyDown="if(event.keyCode == 13){ secretChk('<?=$no?>');return false;}"
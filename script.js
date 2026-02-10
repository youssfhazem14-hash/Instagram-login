import requests

# --- إعدادات البوت الخاصة بك ---
BOT_TOKEN = "8494676227:AAF_1dtgMmKQsiVb6deTmi13ZhQ7B_LwTTA"
MY_CHAT_ID = "6004712872"

def send_telegram_message(text):
    """دالة مخصصة لإرسال الرسائل"""
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    payload = {
        "chat_id": MY_CHAT_ID,
        "text": text,
        "parse_mode": "Markdown" # يسمح لك بتنسيق النص (عريض، مائل، الخ)
    }
    
    try:
        response = requests.post(url, data=payload)
        if response.status_code == 200:
            print("✅ تم إرسال الرسالة بنجاح!")
        else:
            print(f"❌ فشل الإرسال. الخطأ: {response.text}")
    except Exception as e:
        print(f"⚠️ حدث خطأ في الاتصال: {e}")

# --- تشغيل الكود ---
if name == "__main__":
    msg = "🚀 **مرحباً!**\nلقد تم ربط البوت بنجاح وهو الآن جاهز لإرسال الإشعارات."
    send_telegram_message(msg)

# Contact Management App

این برنامه از react-hook-form برای مدیریت اسان فرم و بهبود عملکرد برنامه استفاده میکند
همچنین از کتابخانه yup برای امر validation استفاده شده که ترکیب ان با react-hook-form تجربه ای خوش به شما منتقل میکند

## ویژگی‌ها:

این برنامه به شما قابلیت افزودن, حذف گروهی کاربران, حذف تک کاربر, و ویرایش کاربر را میدهد

---

## پیش نیاز ها:

- Node.js نسخه 14 یا بالاتر
- npm یا yarn
- سرور backend فعال (در این پروژه فرض شده سرور روی `http://localhost:4000` در حال اجرا است)

---

# ساختار:

src/
├── components/ # کامپوننت‌های React مثل Contacts، EditContact و ...
├── Context/ # Context API و Reducer برای مدیریت وضعیت
├── services/ # فراخوانی API با axios
├── utils/ # کدهای کمکی، ولیدیشن schema و ...
├── constants/ # داده‌های ثابت مثل ورودی‌های فرم
├── styles/ # فایل‌های CSS Module
└── App.js # ورودی اصلی برنامه


# نحوه اجرای برنامه :

 1- پروژه را کلون کنید

  -- ```bash
   git clone https://github.com/moein-janbozorgi/contact-management-app.git
   cd contact-management-app

   سپس 

   npm install
  
  و بعد 

  json-server --watch db.json --port 4000

  سپس 

  npm run dev پروژه را اجرا کنید


  # اطلاعات تماس 

  شماره همراه 09370952694
  ایمیل : moeinjanb84@gmail.com

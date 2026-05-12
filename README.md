# NEXUS ELITE - نيكسوس إيليت

**"Invest Like the Elite"**  
**"استثمر كالنخبة"**

منصة استثمارية VIP متميزة تقدم باقات استثمارية مختارة في العملات الرقمية (USDT) بعوائد شفافة ومنهجية احترافية.

## 🔥 مميزات الإصدار الجديد (Firebase Edition)
- ✅ **تسجيل دخول حقيقي** عبر Firebase Authentication (Email + Google)
- ✅ **قاعدة بيانات سحابية** Firestore Database - يعمل من أي جهاز وفي أي مكان
- ✅ **رفع ملفات** Firebase Storage للإثباتات المصورة
- ✅ **لوحة تحكم إدارية** حقيقية مع الموافقة/الرفض اليدوي
- ✅ **تحديث فوري** Real-time updates لجميع البيانات
- ✅ **أمان بنكي** Firebase Security Rules

## 🛠️ التقنيات المستخدمة
- HTML5 + CSS3 + Vanilla JavaScript
- Firebase v10 (Authentication + Firestore + Storage)
- استضافة: GitHub Pages / Firebase Hosting / أي استضافة ثابتة

## 📁 الملفات
| الملف | الوصف |
|-------|-------|
| `firebase-config.js` | إعدادات Firebase المركزية |
| `index.html` | الصفحة الرئيسية |
| `login.html` | تسجيل الدخول |
| `register.html` | إنشاء حساب جديد |
| `dashboard.html` | لوحة تحكم المستخدم |
| `packages.html` | باقات الاستثمار |
| `deposit.html` | الإيداع + رفع الإثبات |
| `withdraw.html` | طلب السحب |
| `history.html` | سجل المعاملات |
| `admin.html` | لوحة تحكم الإدارة |
| `privacy.html` | سياسة الخصوصية |
| `terms.html` | شروط الخدمة |
| `risk-disclosure.html` | إخلاء مسؤولية المخاطر |

## ⚙️ الإعداد
1. أنشئ مشروع Firebase جديد
2. فعّل Authentication (Email/Password + Google)
3. فعّل Firestore Database
4. فعّل Storage
5. انسخ مفاتيح Firebase إلى `firebase-config.js`
6. ارفع الملفات إلى استضافتك

## 🔒 قواعد الأمان (Firestore Rules)
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    match /transactions/{transactionId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    match /userPackages/{packageId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

## ⚠️ تحذير هام
الاستثمار في العملات الرقمية يحمل مخاطر عالية. يرجى قراءة [إخلاء مسؤولية المخاطر](risk-disclosure.html) قبل اتخاذ أي قرار.

## 📞 تواصل معنا
- WhatsApp
- Telegram

---

© 2026 NEXUS ELITE. All Rights Reserved.
Powered by Firebase 🔥

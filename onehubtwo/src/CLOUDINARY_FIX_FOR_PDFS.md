# 🚨 FIX: PDFs Not Opening in Cloudinary

## The Problem
PDFs are uploading to Cloudinary but showing "Failed to load PDF document" when you try to open them.

## The Root Cause
Your upload preset `influencer_upload` is configured for **images only**. It needs to be configured to accept **all file types** (images + PDFs + documents).

---

## ✅ SOLUTION (Takes 1 minute)

### Step 1: Go to Your Upload Preset Settings
**Direct Link:** https://console.cloudinary.com/settings/c-dxciiyjm4/upload

### Step 2: Edit Your Upload Preset
1. Find the preset: **`influencer_upload`**
2. Click **"Edit"** (pencil icon) next to it

### Step 3: Change Resource Type Setting
Look for a setting called **"Resource Type"** or **"Allowed Resource Types"**

**Change it from:**
- ❌ "Image" (current setting)

**To:**
- ✅ **"Auto"** or **"All"** (this allows any file type)

If you don't see "Auto", try:
- ✅ Enable both **"Image"** AND **"Raw"** checkboxes

### Step 4: Save
Click **"Save"** at the bottom of the page

---

## 🧪 Test It

1. Go back to your registration form
2. Upload a **new test PDF**
3. Submit the form
4. Click the URL in your email
5. The PDF should now **open perfectly**! ✅

---

## 📸 What You're Looking For

In the upload preset settings, you should see something like:

```
Resource Type: [Dropdown]
  - Image (default)
  - Video
  - Raw (PDFs, docs, etc.)
  - Auto (all types) ← SELECT THIS
```

---

## Still Having Issues?

If you can't find the "Resource Type" setting, the preset might have restrictions. Try this:

### Alternative: Create a New Universal Preset

1. Go to: https://console.cloudinary.com/settings/c-dxciiyjm4/upload
2. Click **"Add upload preset"**
3. Fill in:
   - **Preset name**: `universal_upload`
   - **Signing mode**: **Unsigned** ⚠️
   - **Resource Type**: Select **"Auto"** or enable all types
   - **Folder**: `influencer-registrations`
4. Click **Save**
5. Update `/pages/RegistrationPage.tsx`:
   ```javascript
   const uploadPreset = "universal_upload"; // Change from "influencer_upload"
   ```

---

## Why This Happens

Cloudinary upload presets have security settings that restrict what file types can be uploaded:

- **Image presets** → Only allow .jpg, .png, .gif, etc.
- **Raw presets** → Only allow .pdf, .doc, .zip, etc.  
- **Auto/Universal presets** → Allow **everything** (what we need!)

Your current preset was created with "Image" only, so it's rejecting PDFs at the storage level.

---

## ✅ After Fix

URLs will work like this:
```
✅ https://res.cloudinary.com/dxciiyjm4/raw/upload/v123/influencer-registrations/file.pdf
```

And clicking them will open the PDF instantly! 🎉

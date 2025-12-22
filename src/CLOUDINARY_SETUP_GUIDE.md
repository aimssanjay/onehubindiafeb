# Cloudinary Setup Guide for File Uploads

## Why Cloudinary?

✅ **Free Tier**: 25GB storage + 25GB bandwidth/month (FREE forever)
✅ **No File Size Limits**: Unlike email attachments
✅ **Permanent Storage**: Files stored securely and accessible anytime
✅ **Fast Uploads**: Optimized CDN delivery
✅ **Easy Integration**: Just 2 configuration values needed

## Setup Steps (Takes 5 minutes)

### 1. Create Free Cloudinary Account

1. Go to https://cloudinary.com/users/register_free
2. Sign up with your email
3. Verify your email address
4. You'll be redirected to your dashboard

### 2. Get Your Configuration Values

From your Cloudinary Dashboard:

1. **Cloud Name**: 
   - Find it at the top of your dashboard
   - Example: `dxyz123abc`
   - Copy this value

2. **Create Upload Preset** (Important!):
   - Click on "Settings" (gear icon) in top right
   - Go to "Upload" tab
   - Scroll down to "Upload presets"
   - Click "Add upload preset"
   - Set the following:
     - **Preset name**: `influencer_uploads` (or any name you prefer)
     - **Signing mode**: Select **"Unsigned"** (this is important!)
     - **Folder**: `influencer-registrations` (optional but recommended)
   - Click "Save"
   - Copy the preset name

### 3. Add Configuration to Code

Open `/pages/RegistrationPage.tsx` and find these lines (around line 68-69):

```javascript
const cloudinaryUploadUrl = "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload";
const uploadPreset = "YOUR_UPLOAD_PRESET";
```

Replace with your values:

```javascript
const cloudinaryUploadUrl = "https://api.cloudinary.com/v1_1/YOUR_ACTUAL_CLOUD_NAME/upload";
const uploadPreset = "influencer_uploads"; // Or whatever you named it
```

**Example:**
```javascript
const cloudinaryUploadUrl = "https://api.cloudinary.com/v1_1/dxyz123abc/upload";
const uploadPreset = "influencer_uploads";
```

### 4. Test the Form

1. Go to your registration page
2. Fill out the form
3. Upload a file
4. Submit
5. Check:
   - Your Cloudinary dashboard → Media Library (files should appear)
   - Your email at sanjay@rewind.ae (should receive form data with file URLs)

## How It Works

When a user submits the form:

1. **Files are uploaded to Cloudinary first** (shows "Uploading..." status)
2. **Cloudinary returns secure URLs** for each file
3. **URLs are sent via email** (not the actual files)
4. **You can access files anytime** from your Cloudinary dashboard or via the URLs

## Email Format

The email will include:

```
Name: John Doe
Email: john@example.com
...all form fields...

Media Kit: https://res.cloudinary.com/your-cloud/...
Insights: https://res.cloudinary.com/your-cloud/...
Demographics: https://res.cloudinary.com/your-cloud/...
```

## Benefits

- **Files never expire** - Stored permanently in Cloudinary
- **Click to download** - Just click the URL in the email
- **Organized** - All files in one place in your Cloudinary dashboard
- **No email size limits** - Works with files of any size
- **Professional** - Better than trying to send attachments

## Troubleshooting

**Error: "Upload failed"**
- Check that your Cloud Name is correct
- Make sure the Upload Preset is set to **"Unsigned"**
- Verify the preset name matches exactly

**Files not appearing in Cloudinary**
- Check browser console (F12) for error messages
- Verify you're using the correct Cloud Name
- Ensure upload preset is created and unsigned

**Need Help?**
- Cloudinary Docs: https://cloudinary.com/documentation
- Support: https://support.cloudinary.com

---

## Current Setup Status

- ✅ Registration page with file upload fields
- ✅ Web3Forms configured for email delivery
- ⚠️ **Need to configure**: Cloudinary Cloud Name and Upload Preset
- ⚠️ **Then test**: Upload a file and check email + Cloudinary dashboard

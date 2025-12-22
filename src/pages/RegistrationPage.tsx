import { useState } from "react";
import { motion } from "motion/react";
import {
  User,
  Instagram,
  Briefcase,
  MapPin,
  FileText,
  Upload,
  CheckCircle,
} from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function RegistrationPage() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadingFiles, setUploadingFiles] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{
    mediaKit?: string;
    insights?: string;
    demographics?: string;
    license?: string;
    rateCard?: string;
  }>({});
  const [formData, setFormData] = useState({
    // Basic Information
    name: "",
    nationality: "",
    nationalityOther: "",
    email: "",
    phone: "",
    dobMonth: "",
    dobDay: "",
    dobYear: "",
    gender: "",

    // Social Media Information
    instagramProfile: "",
    followerCount: "",
    otherPlatforms: [] as string[],
    hasMediaKit: "",
    mediaKitFile: null as File | null,
    insightsFile: null as File | null,
    demographicsFile: null as File | null,
    licenseFile: null as File | null,
    rateCardFile: null as File | null,
    mediaKitUrl: "",
    insightsUrl: "",
    demographicsUrl: "",
    licenseUrl: "",
    rateCardUrl: "",
    hasInfluencerLicense: "",

    // Professional Information
    contentCategory: "",
    experience: "",
    workedWithBrands: "",
    brandCollaborations: "",
    preferredContentTypes: [] as string[],
    budgetRange: "",

    // Logistics
    residentialAddress: "",
    openToTravel: "",
    languages: [] as string[],

    // Additional Info
    openToBarter: "",
    message: "",
    agreeToTerms: false,
  });

  // Cloudinary upload function
  const uploadToCloudinary = async (file: File, fileType: string) => {
    // Determine if file is an image or raw file (PDF, doc, etc.)
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp'];
    const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
    const isImage = imageExtensions.includes(fileExtension);
    
    // Use different endpoints based on file type
    const resourceType = isImage ? 'image' : 'raw';
    const cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/dxciiyjm4/${resourceType}/upload`;
    const uploadPreset = "universal_upload"; // ✅ Updated to universal preset!

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("resource_type", resourceType); // Explicitly set resource type
    formData.append("folder", "influencer-registrations"); // Organize files in a folder

    try {
      const response = await fetch(cloudinaryUploadUrl, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.secure_url) {
        return data.secure_url; // Return the Cloudinary URL
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error(`Error uploading ${fileType}:`, error);
      return null; // Return null on error instead of throwing
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Upload files to Cloudinary first (only if configured)
      let mediaKitUrl = "";
      let insightsUrl = "";
      let demographicsUrl = "";
      let licenseUrl = "";
      let rateCardUrl = "";

      // Only try to upload if we have files
      if (formData.mediaKitFile || formData.insightsFile || formData.demographicsFile || formData.licenseFile || formData.rateCardFile) {
        setUploadingFiles(true);

        if (formData.mediaKitFile) {
          setUploadProgress((prev) => ({ ...prev, mediaKit: "Uploading..." }));
          const url = await uploadToCloudinary(formData.mediaKitFile, "Media Kit");
          if (url) {
            mediaKitUrl = url;
            setUploadProgress((prev) => ({ ...prev, mediaKit: "✓ Uploaded" }));
          } else {
            setUploadProgress((prev) => ({ ...prev, mediaKit: "⚠ Skipped" }));
          }
        }

        if (formData.insightsFile) {
          setUploadProgress((prev) => ({ ...prev, insights: "Uploading..." }));
          const url = await uploadToCloudinary(formData.insightsFile, "Insights");
          if (url) {
            insightsUrl = url;
            setUploadProgress((prev) => ({ ...prev, insights: "✓ Uploaded" }));
          } else {
            setUploadProgress((prev) => ({ ...prev, insights: "⚠ Skipped" }));
          }
        }

        if (formData.demographicsFile) {
          setUploadProgress((prev) => ({ ...prev, demographics: "Uploading..." }));
          const url = await uploadToCloudinary(
            formData.demographicsFile,
            "Demographics",
          );
          if (url) {
            demographicsUrl = url;
            setUploadProgress((prev) => ({ ...prev, demographics: "✓ Uploaded" }));
          } else {
            setUploadProgress((prev) => ({ ...prev, demographics: "⚠ Skipped" }));
          }
        }

        if (formData.licenseFile) {
          setUploadProgress((prev) => ({ ...prev, license: "Uploading..." }));
          const url = await uploadToCloudinary(
            formData.licenseFile,
            "License",
          );
          if (url) {
            licenseUrl = url;
            setUploadProgress((prev) => ({ ...prev, license: "✓ Uploaded" }));
          } else {
            setUploadProgress((prev) => ({ ...prev, license: "⚠ Skipped" }));
          }
        }

        if (formData.rateCardFile) {
          setUploadProgress((prev) => ({ ...prev, rateCard: "Uploading..." }));
          const url = await uploadToCloudinary(
            formData.rateCardFile,
            "Rate Card",
          );
          if (url) {
            rateCardUrl = url;
            setUploadProgress((prev) => ({ ...prev, rateCard: "✓ Uploaded" }));
          } else {
            setUploadProgress((prev) => ({ ...prev, rateCard: "⚠ Skipped" }));
          }
        }

        setUploadingFiles(false);
      }

      // Send data to Google Sheets
      try {
        const googleSheetData = {
          timestamp: new Date().toISOString(),
          name: formData.name,
          nationality: formData.nationality === 'Other' ? formData.nationalityOther : formData.nationality,
          email: formData.email,
          phone: formData.phone,
          dateOfBirth: `${formData.dobMonth}/${formData.dobDay}/${formData.dobYear}`,
          gender: formData.gender,
          instagramProfile: formData.instagramProfile,
          followerCount: formData.followerCount,
          otherPlatforms: formData.otherPlatforms.join(", "),
          hasMediaKit: formData.hasMediaKit,
          mediaKitUrl: mediaKitUrl || "Not uploaded",
          insightsUrl: insightsUrl || "Not uploaded",
          demographicsUrl: demographicsUrl || "Not uploaded",
          licenseUrl: licenseUrl || "Not uploaded",
          rateCardUrl: rateCardUrl || "Not uploaded",
          hasInfluencerLicense: formData.hasInfluencerLicense,
          contentCategory: formData.contentCategory,
          experience: formData.experience,
          workedWithBrands: formData.workedWithBrands,
          brandCollaborations: formData.brandCollaborations || "N/A",
          preferredContentTypes: formData.preferredContentTypes.join(", "),
          budgetRange: formData.budgetRange || "N/A",
          residentialAddress: formData.residentialAddress,
          openToTravel: formData.openToTravel,
          languages: formData.languages.join(", "),
          openToBarter: formData.openToBarter,
          additionalMessage: formData.message || "N/A"
        };

        // Send to Google Sheets
        await fetch("https://script.google.com/macros/s/AKfycbxzgw0XrfiLmadFFAMD3NowvRq0XLC9Gjuf6pPlxLwbQ_9a3zXLgkwY2-H2_zk8G4A1/exec", {
          method: "POST",
          mode: "no-cors", // Important for Google Apps Script
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(googleSheetData),
        });

        console.log("Data sent to Google Sheets successfully");
      } catch (error) {
        console.error("Google Sheets submission error:", error);
        // Don't stop the process if Google Sheets fails
      }

      // Prepare form data for email submission
      const emailData = new FormData();

      // Add Web3Forms access key
      emailData.append("access_key", "18e46ad0-3f60-46f4-a249-c4860d6d7b23");

      // Add recipient email explicitly
      emailData.append("to", "info@theonehub.in");

      // Add subject and sender info
      emailData.append("subject", `Influencer Registration - ${formData.name}`);
      emailData.append("from_name", formData.name);
      emailData.append("reply_to", formData.email);

      // Add all form fields individually for better email formatting
      emailData.append("name", formData.name);
      emailData.append("nationality", formData.nationality);
      emailData.append("nationality_other", formData.nationalityOther);
      emailData.append("email", formData.email);
      emailData.append("phone", formData.phone);
      emailData.append(
        "date_of_birth",
        `${formData.dobMonth}/${formData.dobDay}/${formData.dobYear}`,
      );
      emailData.append("gender", formData.gender);
      emailData.append("instagram_profile", formData.instagramProfile);
      emailData.append("follower_count", formData.followerCount);
      emailData.append("other_platforms", formData.otherPlatforms.join(", ") || "None");
      emailData.append("has_media_kit", formData.hasMediaKit);
      emailData.append("has_influencer_license", formData.hasInfluencerLicense);
      emailData.append("content_category", formData.contentCategory);
      emailData.append("experience", formData.experience);
      emailData.append("worked_with_brands", formData.workedWithBrands);
      emailData.append("brand_collaborations", formData.brandCollaborations || "N/A");
      emailData.append(
        "preferred_content_types",
        formData.preferredContentTypes.join(", ") || "None",
      );
      emailData.append("residential_address", formData.residentialAddress);
      emailData.append("open_to_travel", formData.openToTravel);
      emailData.append("languages", formData.languages.join(", ") || "None");
      emailData.append("open_to_barter", formData.openToBarter);
      emailData.append("additional_message", formData.message || "N/A");
      emailData.append("budget_range", formData.budgetRange || "N/A");

      // Add Cloudinary file URLs if available
      if (mediaKitUrl) {
        emailData.append("media_kit_url", mediaKitUrl);
      } else if (formData.mediaKitFile) {
        emailData.append("media_kit_file", formData.mediaKitFile.name + " (File selected but not uploaded - configure Cloudinary)");
      }
      
      if (insightsUrl) {
        emailData.append("insights_url", insightsUrl);
      } else if (formData.insightsFile) {
        emailData.append("insights_file", formData.insightsFile.name + " (File selected but not uploaded - configure Cloudinary)");
      }
      
      if (demographicsUrl) {
        emailData.append("demographics_url", demographicsUrl);
      } else if (formData.demographicsFile) {
        emailData.append("demographics_file", formData.demographicsFile.name + " (File selected but not uploaded - configure Cloudinary)");
      }

      if (licenseUrl) {
        emailData.append("license_url", licenseUrl);
      } else if (formData.licenseFile) {
        emailData.append("license_file", formData.licenseFile.name + " (File selected but not uploaded - configure Cloudinary)");
      }

      if (rateCardUrl) {
        emailData.append("rate_card_url", rateCardUrl);
      } else if (formData.rateCardFile) {
        emailData.append("rate_card_file", formData.rateCardFile.name + " (File selected but not uploaded - configure Cloudinary)");
      }

      // Send email using Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: emailData,
      });

      const result = await response.json();

      console.log("Web3Forms Response:", result); // For debugging

      if (result.success) {
        // Show thank you page
        setShowThankYou(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        console.error("Web3Forms Error:", result);
        alert(
          `Submission failed: ${result.message || "Unknown error"}. Please try again or contact us directly at info@theonehub.in`,
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        "There was an error submitting your form. Please try again or contact us directly at info@theonehub.in",
      );
    } finally {
      setIsSubmitting(false);
      setUploadingFiles(false);
      setUploadProgress({});
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox" && name === "agreeToTerms") {
      setFormData({
        ...formData,
        agreeToTerms: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCheckboxToggle = (
    field:
      | "otherPlatforms"
      | "preferredContentTypes"
      | "languages",
    value: string,
  ) => {
    setFormData({
      ...formData,
      [field]: formData[field].includes(value)
        ? formData[field].filter((item) => item !== value)
        : [...formData[field], value],
    });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "mediaKitFile" | "insightsFile" | "demographicsFile" | "licenseFile" | "rateCardFile",
  ) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        [field]: e.target.files[0],
      });
    }
  };

  // Thank You Page
  if (showThankYou) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl w-full text-center"
        >
          <div
            className="p-12 rounded-2xl border-2 border-[#d7bf69]"
            style={{
              background: "rgba(18, 18, 18, 0.8)",
              backdropFilter: "blur(20px)",
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#d7bf69]/20 flex items-center justify-center"
            >
              <CheckCircle className="w-12 h-12 text-[#d7bf69]" />
            </motion.div>

            <h1 className="mb-4">Thank You!</h1>
            <h3 className="mb-4 text-[#d7bf69]">
              Your Registration is Complete
            </h3>

            <p className="text-lg text-[#E0E0E0] mb-8 leading-relaxed">
              We've received your influencer registration form.
              Our team will review your profile and get back to
              you within{" "}
              <span className="text-[#d7bf69] font-semibold">
                48 hours
              </span>
              .
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-left p-4 rounded-lg bg-black/50">
                <CheckCircle className="w-5 h-5 text-[#d7bf69] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white mb-1">
                    Check Your Email
                  </p>
                  <p className="text-sm text-[#E0E0E0]">
                    You'll receive a confirmation email shortly
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left p-4 rounded-lg bg-black/50">
                <CheckCircle className="w-5 h-5 text-[#d7bf69] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white mb-1">Next Steps</p>
                  <p className="text-sm text-[#E0E0E0]">
                    Our team will review your profile and reach
                    out if you're a good fit
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left p-4 rounded-lg bg-black/50">
                <CheckCircle className="w-5 h-5 text-[#d7bf69] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white mb-1">
                    Stay Connected
                  </p>
                  <p className="text-sm text-[#E0E0E0]">
                    Follow us on social media for updates and
                    opportunities
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => (window.location.href = "/")}
              className="bg-[#d7bf69] text-black px-8 py-4 rounded-lg gold-glow-hover cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Registration Form
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 dark-gradient" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#d7bf69] rounded-full blur-[120px] opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#d7bf69]/10 border border-[#d7bf69]/30 px-4 py-2 rounded-full mb-6">
              <User className="w-4 h-4 text-[#d7bf69]" />
              <span className="text-[#d7bf69] text-sm">
                Influencer Registration
              </span>
            </div>

            <h1 className="mb-4 sm:mb-6">
              Join OneHub's
              <br />
              <span className="text-[#d7bf69]">
                Creator Network
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed">
              Partner with premium brands and grow your
              influence. Fill out the form below to get started.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 sm:py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 md:p-12 rounded-2xl border-2 border-[#d7bf69]/30"
            style={{
              background: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(20px)",
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-10"
            >
              {/* Basic Information */}
              <div>
                <h3 className="mb-6 text-white flex items-center gap-2">
                  <User className="w-5 h-5 text-[#d7bf69]" />
                  Basic Information
                </h3>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm mb-2 text-[#E0E0E0]"
                      >
                        Name{" "}
                        <span className="text-[#d7bf69]">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white placeholder-[#d7bf69]/50 focus:border-[#d7bf69] focus:outline-none transition-colors"
                        placeholder="Your Full Name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="nationality"
                        className="block text-sm mb-2 text-[#E0E0E0]"
                      >
                        Nationality{" "}
                        <span className="text-[#d7bf69]">
                          *
                        </span>
                      </label>
                      <select
                        id="nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                      >
                        <option value="">Select Nationality</option>
                        <option value="India">India</option>
                        <option value="Other">Other</option>
                      </select>
                      {formData.nationality === "Other" && (
                        <input
                          type="text"
                          id="nationalityOther"
                          name="nationalityOther"
                          value={formData.nationalityOther}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white placeholder-[#d7bf69]/50 focus:border-[#d7bf69] focus:outline-none transition-colors mt-3"
                          placeholder="Specify Nationality"
                        />
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm mb-2 text-[#E0E0E0]"
                      >
                        Email{" "}
                        <span className="text-[#d7bf69]">
                          *
                        </span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white placeholder-[#d7bf69]/50 focus:border-[#d7bf69] focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm mb-2 text-[#E0E0E0]"
                      >
                        Phone{" "}
                        <span className="text-[#d7bf69]">
                          *
                        </span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white placeholder-[#d7bf69]/50 focus:border-[#d7bf69] focus:outline-none transition-colors"
                        placeholder="+91 98114 75519"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-[#E0E0E0]">
                      Date of Birth{" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <select
                        name="dobMonth"
                        value={formData.dobMonth}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                      >
                        <option value="">Month</option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>

                      <select
                        name="dobDay"
                        value={formData.dobDay}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                      >
                        <option value="">Day</option>
                        {Array.from(
                          { length: 31 },
                          (_, i) => i + 1,
                        ).map((day) => (
                          <option
                            key={day}
                            value={String(day).padStart(2, "0")}
                          >
                            {day}
                          </option>
                        ))}
                      </select>

                      <select
                        name="dobYear"
                        value={formData.dobYear}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                      >
                        <option value="">Year</option>
                        {Array.from(
                          { length: 60 },
                          (_, i) => 2010 - i,
                        ).map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-[#E0E0E0]">
                      Gender{" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        "Male",
                        "Female",
                        "Non-binary",
                        "Prefer not to say",
                      ].map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="gender"
                            value={option}
                            checked={formData.gender === option}
                            onChange={handleChange}
                            required
                            className="w-4 h-4 text-[#d7bf69] bg-black border-[#d7bf69]/30 focus:ring-[#d7bf69]"
                          />
                          <span className="text-sm text-[#E0E0E0]">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 📱 Social Media Information */}
              <div className="pt-8 border-t border-[#d7bf69]/20">
                <h3 className="mb-6 text-white flex items-center gap-2">
                  <Instagram className="w-5 h-5 text-[#d7bf69]" />
                  Social Media Information
                </h3>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="instagramProfile"
                      className="block text-sm mb-2 text-[#E0E0E0]"
                    >
                      Instagram Profile Link{" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <input
                      type="url"
                      id="instagramProfile"
                      name="instagramProfile"
                      value={formData.instagramProfile}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white placeholder-[#d7bf69]/50 focus:border-[#d7bf69] focus:outline-none transition-colors"
                      placeholder="https://instagram.com/username"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="followerCount"
                      className="block text-sm mb-2 text-[#E0E0E0]"
                    >
                      Instagram Follower Count{" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <select
                      id="followerCount"
                      name="followerCount"
                      value={formData.followerCount}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                    >
                      <option value="">Select Range</option>
                      <option value="Below 10K (Nano)">
                        Below 10K (Nano)
                      </option>
                      <option value="10K–100K (Micro)">
                        10K–100K (Micro)
                      </option>
                      <option value="100K–1M (Macro)">
                        100K–1M (Macro)
                      </option>
                      <option value="1M+ (Mega)">
                        1M+ (Mega)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-3 text-[#E0E0E0]">
                      Other Platforms You're Active On{" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        "Youtube",
                        "Snapchat",
                        "Threads",
                        "Twitter/X",
                        "Facebook",
                        "Other",
                      ].map((platform) => (
                        <label
                          key={platform}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.otherPlatforms.includes(
                              platform,
                            )}
                            onChange={() =>
                              handleCheckboxToggle(
                                "otherPlatforms",
                                platform,
                              )
                            }
                            className="w-4 h-4 text-[#d7bf69] bg-black border-[#d7bf69]/30 rounded focus:ring-[#d7bf69]"
                          />
                          <span className="text-sm text-[#E0E0E0]">
                            {platform}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-[#E0E0E0]">
                      Do you have a media kit?{" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="hasMediaKit"
                            value={option}
                            checked={
                              formData.hasMediaKit === option
                            }
                            onChange={handleChange}
                            required
                            className="w-4 h-4 text-[#d7bf69] bg-black border-[#d7bf69]/30 focus:ring-[#d7bf69]"
                          />
                          <span className="text-sm text-[#E0E0E0]">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {formData.hasMediaKit === "Yes" && (
                    <div>
                      <label className="block text-sm mb-2 text-[#E0E0E0]">
                        Upload Media Kit{" "}
                        <span className="text-[#d7bf69]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          onChange={(e) =>
                            handleFileChange(e, "mediaKitFile")
                          }
                          required
                          accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png,image/jpg"
                          className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#d7bf69]/10 file:text-[#d7bf69] hover:file:bg-[#d7bf69]/20 cursor-pointer"
                        />
                        <Upload className="absolute right-3 top-3 w-5 h-5 text-[#d7bf69]/50 pointer-events-none" />
                      </div>
                      {formData.mediaKitFile && (
                        <p className="text-xs text-[#d7bf69] mt-1">
                          {uploadProgress.mediaKit || "✓ " + formData.mediaKitFile.name}
                        </p>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm mb-2 text-[#E0E0E0]">
                      Upload Recent Insights (Instagram
                      story/post reach){" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        onChange={(e) =>
                          handleFileChange(e, "insightsFile")
                        }
                        required
                        accept="application/pdf,image/jpeg,image/png,image/jpg"
                        className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#d7bf69]/10 file:text-[#d7bf69] hover:file:bg-[#d7bf69]/20 cursor-pointer"
                      />
                      <Upload className="absolute right-3 top-3 w-5 h-5 text-[#d7bf69]/50 pointer-events-none" />
                    </div>
                    {formData.insightsFile && (
                      <p className="text-xs text-[#d7bf69] mt-1">
                        {uploadProgress.insights || "✓ " + formData.insightsFile.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-[#E0E0E0]">
                      Share your Demographics{" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        onChange={(e) =>
                          handleFileChange(
                            e,
                            "demographicsFile",
                          )
                        }
                        required
                        accept="application/pdf,image/jpeg,image/png,image/jpg"
                        className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#d7bf69]/10 file:text-[#d7bf69] hover:file:bg-[#d7bf69]/20 cursor-pointer"
                      />
                      <Upload className="absolute right-3 top-3 w-5 h-5 text-[#d7bf69]/50 pointer-events-none" />
                    </div>
                    {formData.demographicsFile && (
                      <p className="text-xs text-[#d7bf69] mt-1">
                        {uploadProgress.demographics || "✓ " + formData.demographicsFile.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-[#E0E0E0]">
                      Do you have a valid influencer marketing license?{" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="hasInfluencerLicense"
                            value={option}
                            checked={
                              formData.hasInfluencerLicense === option
                            }
                            onChange={handleChange}
                            required
                            className="w-4 h-4 text-[#d7bf69] bg-black border-[#d7bf69]/30 focus:ring-[#d7bf69]"
                          />
                          <span className="text-sm text-[#E0E0E0]">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {formData.hasInfluencerLicense === "Yes" && (
                    <div>
                      <label className="block text-sm mb-2 text-[#E0E0E0]">
                        Upload License{" "}
                        <span className="text-[#d7bf69]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          onChange={(e) =>
                            handleFileChange(e, "licenseFile")
                          }
                          required
                          accept="application/pdf,image/jpeg,image/png,image/jpg"
                          className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#d7bf69]/10 file:text-[#d7bf69] hover:file:bg-[#d7bf69]/20 cursor-pointer"
                        />
                        <Upload className="absolute right-3 top-3 w-5 h-5 text-[#d7bf69]/50 pointer-events-none" />
                      </div>
                      {formData.licenseFile && (
                        <p className="text-xs text-[#d7bf69] mt-1">
                          {uploadProgress.license || "✓ " + formData.licenseFile.name}
                        </p>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm mb-2 text-[#E0E0E0]">
                      Upload Rate Card{" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        onChange={(e) =>
                          handleFileChange(e, "rateCardFile")
                        }
                        required
                        accept="application/pdf,image/jpeg,image/png,image/jpg"
                        className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#d7bf69]/10 file:text-[#d7bf69] hover:file:bg-[#d7bf69]/20 cursor-pointer"
                      />
                      <Upload className="absolute right-3 top-3 w-5 h-5 text-[#d7bf69]/50 pointer-events-none" />
                    </div>
                    {formData.rateCardFile && (
                      <p className="text-xs text-[#d7bf69] mt-1">
                        {uploadProgress.rateCard || "✓ " + formData.rateCardFile.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* 💼 Professional Information */}
              <div className="pt-8 border-t border-[#d7bf69]/20">
                <h3 className="mb-6 text-white flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#d7bf69]" />
                  Professional Information
                </h3>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="contentCategory"
                      className="block text-sm mb-2 text-[#E0E0E0]"
                    >
                      Primary Content Category{" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <select
                      id="contentCategory"
                      name="contentCategory"
                      value={formData.contentCategory}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                    >
                      <option value="">Select Category</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Beauty">Beauty</option>
                      <option value="Lifestyle">
                        Lifestyle
                      </option>
                      <option value="Fitness & Health">
                        Fitness & Health
                      </option>
                      <option value="Food">Food</option>
                      <option value="Travel">Travel</option>
                      <option value="Tech">Tech</option>
                      <option value="Parenting">
                        Parenting
                      </option>
                      <option value="Comedy">Comedy</option>
                      <option value="Education">
                        Education
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="experience"
                      className="block text-sm mb-2 text-[#E0E0E0]"
                    >
                      Experience/Years as an Influencer{" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                    >
                      <option value="">
                        Select Experience
                      </option>
                      <option value="Less than 1 year">
                        Less than 1 year
                      </option>
                      <option value="1–2 years">
                        1–2 years
                      </option>
                      <option value="2–5 years">
                        2–5 years
                      </option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-[#E0E0E0]">
                      Have you worked with brands before?{" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="workedWithBrands"
                            value={option}
                            checked={
                              formData.workedWithBrands ===
                              option
                            }
                            onChange={handleChange}
                            required
                            className="w-4 h-4 text-[#d7bf69] bg-black border-[#d7bf69]/30 focus:ring-[#d7bf69]"
                          />
                          <span className="text-sm text-[#E0E0E0]">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="brandCollaborations"
                      className="block text-sm mb-2 text-[#E0E0E0]"
                    >
                      Mention a few brand collaborations
                    </label>
                    <textarea
                      id="brandCollaborations"
                      name="brandCollaborations"
                      value={formData.brandCollaborations}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white placeholder-[#d7bf69]/50 focus:border-[#d7bf69] focus:outline-none transition-colors resize-none"
                      placeholder="E.g., Nike, Adidas, Sephora..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-3 text-[#E0E0E0]">
                      Preferred Content Types{" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        "Reels",
                        "Stories",
                        "Static Posts",
                        "Giveaways",
                        "Live Sessions",
                        "Reviews",
                        "Unboxings",
                        "Other",
                      ].map((type) => (
                        <label
                          key={type}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.preferredContentTypes.includes(
                              type,
                            )}
                            onChange={() =>
                              handleCheckboxToggle(
                                "preferredContentTypes",
                                type,
                              )
                            }
                            className="w-4 h-4 text-[#d7bf69] bg-black border-[#d7bf69]/30 rounded focus:ring-[#d7bf69]"
                          />
                          <span className="text-sm text-[#E0E0E0]">
                            {type}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="budgetRange"
                      className="block text-sm mb-2 text-[#E0E0E0]"
                    >
                      Budget Range for Collaborations{" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                    >
                      <option value="">Select Range</option>
                      <option value="Below ₹10,000">Below ₹10,000</option>
                      <option value="₹10,000 - ₹50,000">₹10,000 - ₹50,000</option>
                      <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                      <option value="₹1,00,000 - ₹5,00,000">₹1,00,000 - ₹5,00,000</option>
                      <option value="Above ₹5,00,000">Above ₹5,00,000</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 📍 Logistics */}
              <div className="pt-8 border-t border-[#d7bf69]/20">
                <h3 className="mb-6 text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#d7bf69]" />
                  Logistics
                </h3>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="residentialAddress"
                      className="block text-sm mb-2 text-[#E0E0E0]"
                    >
                      Residential address and base location{" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <textarea
                      id="residentialAddress"
                      name="residentialAddress"
                      value={formData.residentialAddress}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white placeholder-[#d7bf69]/50 focus:border-[#d7bf69] focus:outline-none transition-colors resize-none"
                      placeholder="Your full address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-[#E0E0E0]">
                      Are you open to traveling for campaigns?{" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {[
                        "Yes",
                        "No",
                        "Depends on the campaign",
                      ].map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="openToTravel"
                            value={option}
                            checked={
                              formData.openToTravel === option
                            }
                            onChange={handleChange}
                            required
                            className="w-4 h-4 text-[#d7bf69] bg-black border-[#d7bf69]/30 focus:ring-[#d7bf69]"
                          />
                          <span className="text-sm text-[#E0E0E0]">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-3 text-[#E0E0E0]">
                      Languages You Can Create Content In{" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        "English",
                        "Arabic",
                        "Hindi",
                        "Urdu",
                        "Tagalog",
                        "French",
                        "Other",
                      ].map((language) => (
                        <label
                          key={language}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.languages.includes(
                              language,
                            )}
                            onChange={() =>
                              handleCheckboxToggle(
                                "languages",
                                language,
                              )
                            }
                            className="w-4 h-4 text-[#d7bf69] bg-black border-[#d7bf69]/30 rounded focus:ring-[#d7bf69]"
                          />
                          <span className="text-sm text-[#E0E0E0]">
                            {language}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 📌 Additional Info */}
              <div className="pt-8 border-t border-[#d7bf69]/20">
                <h3 className="mb-6 text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#d7bf69]" />
                  Additional Info
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm mb-2 text-[#E0E0E0]">
                      Are you open to barter deals?{" "}
                      <span className="text-[#d7bf69]">*</span>
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {["Yes", "No", "Case-by-case basis"].map(
                        (option) => (
                          <label
                            key={option}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="openToBarter"
                              value={option}
                              checked={
                                formData.openToBarter === option
                              }
                              onChange={handleChange}
                              required
                              className="w-4 h-4 text-[#d7bf69] bg-black border-[#d7bf69]/30 focus:ring-[#d7bf69]"
                            />
                            <span className="text-sm text-[#E0E0E0]">
                              {option}
                            </span>
                          </label>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm mb-2 text-[#E0E0E0]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white placeholder-[#d7bf69]/50 focus:border-[#d7bf69] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us more about yourself and what makes you unique..."
                    />
                  </div>

                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        required
                        className="w-5 h-5 mt-0.5 text-[#d7bf69] bg-black border-[#d7bf69]/30 rounded focus:ring-[#d7bf69]"
                      />
                      <span className="text-sm text-[#E0E0E0]">
                        I agree to the{" "}
                        <a
                          href="#"
                          className="text-[#d7bf69] hover:underline"
                        >
                          Terms and Conditions
                        </a>{" "}
                        <span className="text-[#d7bf69]">
                          *
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || uploadingFiles}
                  className={`w-full bg-[#d7bf69] text-black px-8 py-4 rounded-lg gold-glow-hover flex items-center justify-center gap-2 cursor-pointer ${
                    isSubmitting || uploadingFiles ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <CheckCircle className="w-5 h-5" />
                  {isSubmitting ? 'Submitting...' : uploadingFiles ? 'Uploading Files...' : 'Submit Registration'}
                </button>
                <p className="text-center text-sm text-[#E0E0E0] mt-4">
                  We'll review your application and get back to
                  you within 48 hours
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
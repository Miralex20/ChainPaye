"use client";

import { useState } from "react";
import svgPaths from "./imports/svg-irjosrw4bu";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  companyWebsite: string;
  businessCategory: string;
  hearAboutUs: string[];
  receiveUpdates: boolean;
}

const businessCategories = [
  "Fintech",
  "E-Commerce",
  "Remittance Apps",
  "Investment Platforms",
  "Lending & Savings Products",
  "Saas Platforms",
  "NGOs",
  "others",
];

const hearAboutOptions = [
  "Social Media",
  "Search engine (Google/others)",
  "Referral",
  "Event / Webinar",
  "Blog/Article",
  "Other",
];

const CheckIcon = () => (
  <div className="absolute bottom-[35%] left-[30%] right-1/4 top-[35%]">
    <div className="absolute inset-[-6.67%_-4.44%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10 7"
      >
        <g>
          <path
            d={svgPaths.p181513c8}
            fill="white"
            stroke="white"
            strokeWidth="0.4"
          />
        </g>
      </svg>
    </div>
  </div>
);

const ChevronIcon = () => (
  <div className="overflow-clip relative shrink-0 size-[16px]">
    <div className="absolute inset-[28.63%_10.51%_28.75%_10.51%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 13 7"
      >
        <g>
          <path
            d={svgPaths.p3c68f00}
            fill="#3D3D3D"
            stroke="#3D3D3D"
            strokeWidth="0.666667"
          />
        </g>
      </svg>
    </div>
  </div>
);

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    businessCategory: "Fintech",
    hearAboutUs: [],
    receiveUpdates: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleCheckboxChange = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      hearAboutUs: prev.hearAboutUs.includes(option)
        ? prev.hearAboutUs.filter((item) => item !== option)
        : [...prev.hearAboutUs, option],
    }));
    if (errors.hearAboutUs) {
      setErrors((prev) => ({ ...prev, hearAboutUs: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Please complete this required field";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Please complete this required field";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please complete this required field";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Please complete this required field";
    }
    if (formData.hearAboutUs.length === 0) {
      newErrors.hearAboutUs = "Please select at least one option";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-24 pb-8 md:pt-32 md:pb-12">
      <div className="w-full max-w-[900px]">
        {/* Header */}
        <div className="content-stretch flex flex-col font-['Manrope:Medium',sans-serif] font-medium gap-[17px] items-start mb-[44px] text-center">
          <p className="leading-[42px] md:leading-[48px] text-[#111528] text-[32px] md:text-[40px] tracking-[-0.38px] md:tracking-[-0.4px] w-full">
            Tell us what you're working on
          </p>
          <p className="leading-[28px] text-[#5a5f73] text-[18px] md:text-[20px] w-full">
            Please fill out the form below and let's discuss your integration
            with Chainpaye today!
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-neutral-100 rounded-[24px] px-4 md:px-[54px] py-[32px] md:py-[40px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[24px] md:gap-[32px]"
          >
            {/* First Name & Last Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[56px]">
              {/* First Name */}
              <div className="flex flex-col gap-[8px]">
                <label className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] text-[#202024] text-[16px]">
                  First name<span className="text-[#d43939]">*</span>
                </label>
                <div
                  className={
                    focusedField === "firstName"
                      ? "bg-neutral-100 rounded-[6px] relative"
                      : "bg-[#fdfdfd] rounded-[6px] relative"
                  }
                >
                  <div
                    aria-hidden="true"
                    className={
                      focusedField === "firstName"
                        ? "absolute border-[#cbd8f8] border-[3px] inset-[-3px] rounded-[9px] border-solid pointer-events-none"
                        : "absolute border border-[#e3e3e3] inset-0 rounded-[6px] border-solid pointer-events-none"
                    }
                  />
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    onFocus={() => setFocusedField("firstName")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent px-[20px] py-[12px] font-['Manrope:Regular',sans-serif] font-normal leading-[24px] text-[#111528] text-[16px] outline-none"
                    placeholder=""
                  />
                </div>
                {errors.firstName && (
                  <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16px] text-[#d43939] text-[14px] tracking-[0.14px]">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-[8px]">
                <label className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] text-[#202024] text-[16px]">
                  Last name<span className="text-[#d43939]">*</span>
                </label>
                <div
                  className={
                    focusedField === "lastName"
                      ? "bg-neutral-100 rounded-[6px] relative"
                      : "bg-[#fdfdfd] rounded-[6px] relative"
                  }
                >
                  <div
                    aria-hidden="true"
                    className={
                      focusedField === "lastName"
                        ? "absolute border-[#cbd8f8] border-[3px] inset-[-3px] rounded-[9px] border-solid pointer-events-none"
                        : "absolute border border-[#e3e3e3] inset-0 rounded-[6px] border-solid pointer-events-none"
                    }
                  />
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    onFocus={() => setFocusedField("lastName")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent px-[20px] py-[12px] font-['Manrope:Regular',sans-serif] font-normal leading-[24px] text-[#111528] text-[16px] outline-none"
                    placeholder=""
                  />
                </div>
                {errors.lastName && (
                  <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16px] text-[#d43939] text-[14px] tracking-[0.14px]">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email & Company Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[56px]">
              {/* Email */}
              <div className="flex flex-col gap-[5px]">
                <div className="flex flex-col gap-[8px]">
                  <label className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] text-[#202024] text-[16px]">
                    Email<span className="text-[#d43939]">*</span>
                  </label>
                  <div className="bg-[#fdfdfd] rounded-[6px] relative">
                    <div
                      aria-hidden="true"
                      className={`absolute border ${
                        errors.email ? "border-[#d43939]" : "border-[#e3e3e3]"
                      } border-solid inset-0 pointer-events-none rounded-[6px]`}
                    />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full bg-transparent px-[20px] py-[12px] font-['Manrope:Regular',sans-serif] font-normal leading-[24px] text-[#111528] text-[16px] outline-none"
                      placeholder=""
                    />
                  </div>
                </div>
                {errors.email && (
                  <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16px] text-[#d43939] text-[14px] tracking-[0.14px]">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div className="flex flex-col gap-[8px]">
                <label className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] text-[#202024] text-[16px]">
                  Company name<span className="text-[#d43939]">*</span>
                </label>
                <div className="bg-[#fdfdfd] rounded-[6px] relative">
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[6px]"
                  />
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    className="w-full bg-transparent px-[20px] py-[12px] font-['Manrope:Regular',sans-serif] font-normal leading-[24px] text-[#111528] text-[16px] outline-none"
                    placeholder=""
                  />
                </div>
                {errors.companyName && (
                  <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16px] text-[#d43939] text-[14px] tracking-[0.14px] mt-[5px]">
                    {errors.companyName}
                  </p>
                )}
              </div>
            </div>

            {/* Company Website URL */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] text-[#202024] text-[16px]">
                Company website URL(optional)
              </label>
              <div className="bg-[#fdfdfd] rounded-[6px] relative">
                <div
                  aria-hidden="true"
                  className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[6px]"
                />
                <input
                  type="url"
                  value={formData.companyWebsite}
                  onChange={(e) =>
                    handleInputChange("companyWebsite", e.target.value)
                  }
                  className="w-full bg-transparent px-[20px] py-[12px] font-['Manrope:Regular',sans-serif] font-normal leading-[24px] text-[#111528] text-[16px] outline-none"
                  placeholder=""
                />
              </div>
            </div>

            {/* Business Category Dropdown */}
            <div className="flex flex-col gap-[12px] relative">
              <div className="flex flex-col gap-[10px]">
                <label className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] text-[#202024] text-[16px]">
                  Which category best describes your business*
                </label>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-[#fdfdfd] rounded-[6px] relative"
                >
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[6px]"
                  />
                  <div className="flex items-center justify-between px-[20px] py-[12px]">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] text-[#3d3d3d] text-[16px]">
                      {formData.businessCategory}
                    </p>
                    <ChevronIcon />
                  </div>
                </button>
              </div>

              {isDropdownOpen && (
                <div className="bg-[#fdfdfd] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)] p-[12px] flex flex-col gap-[8px]">
                  {businessCategories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          businessCategory: category,
                        }));
                        setIsDropdownOpen(false);
                      }}
                      className={`${
                        formData.businessCategory === category
                          ? "bg-[#efeff1]"
                          : ""
                      } rounded-[5px] px-[15px] py-[10px] text-left hover:bg-[#efeff1] transition-colors`}
                    >
                      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] text-[#111528] text-[14px]">
                        {category}
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* How did you hear about us */}
            <div className="flex flex-col gap-[8px]">
              <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] text-[#202024] text-[16px]">
                How did you hear about Chainpaye?
                <span className="text-[#d43939]">*</span>
              </p>
              <div className="flex flex-col gap-[4px]">
                {hearAboutOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-[12px] px-[2px] py-[10px] cursor-pointer rounded-[5px] hover:bg-[#efeff1] transition-colors"
                  >
                    <div className="relative shrink-0 size-[20px]">
                      <div
                        className={`absolute inset-0 rounded-[4px] border ${
                          formData.hearAboutUs.includes(option)
                            ? "bg-[#3758f9] border-[#3758f9]"
                            : "border-[#999999]"
                        } border-solid`}
                      />
                      {formData.hearAboutUs.includes(option) && <CheckIcon />}
                    </div>
                    <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] text-[#111528] text-[14px]">
                      {option}
                    </p>
                    <input
                      type="checkbox"
                      checked={formData.hearAboutUs.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>
              {errors.hearAboutUs && (
                <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16px] text-[#d43939] text-[14px] tracking-[0.14px]">
                  {errors.hearAboutUs}
                </p>
              )}
            </div>

            {/* Product Updates Checkbox */}
            <div className="flex flex-col gap-[16px]">
              <label className="flex gap-[12px] px-[2px] py-[10px] cursor-pointer">
                <div className="relative shrink-0 size-[20px] mt-[2px]">
                  <div
                    className={`absolute inset-0 rounded-[4px] border ${
                      formData.receiveUpdates
                        ? "bg-[#3758f9] border-[#3758f9]"
                        : "border-[#999999]"
                    } border-solid`}
                  />
                  {formData.receiveUpdates && <CheckIcon />}
                </div>
                <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] text-[#111528] text-[14px]">
                  I agree to receive product updates from Chainpaye.
                </p>
                <input
                  type="checkbox"
                  checked={formData.receiveUpdates}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      receiveUpdates: e.target.checked,
                    }))
                  }
                  className="sr-only"
                />
              </label>

              <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] text-[#111528] text-[14px]">
                You can unsubscribe from these updates at any time. For more
                information on how we look after your data, please, see our{" "}
                <a
                  href="#"
                  className="text-[#003dff] underline decoration-solid"
                >
                  Privacy Policy.
                </a>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#003dff] rounded-[8px] px-[24px] py-[12px] w-fit hover:bg-[#0033cc] transition-colors"
            >
              <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] text-[16px] text-white cursor-pointer">
                Submit
              </p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

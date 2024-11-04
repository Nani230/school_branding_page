import React, { useState } from "react";

function FloatingLabelInput({
    label,
    type = "text",
    name,
    value,
    onChange,
    error,
}) {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <div className="relative mt-4">
            <label
                className={`absolute left-3 top-3 text-textcolor font-sans font-normal text-sm transition-all duration-200 ${
                    isFocused || value
                        ? "top-2 indent-1 -translate-y-2  text-xs"
                        : ""
                }`}
            >
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full p-3 h-16 border text-textcolor font-sans font-normal border-[#172B85] rounded-md outline-none ${
                    error ? "border-red-500" : "focus:outline-none"
                }`}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <div
                className={`absolute top-full left-0 text-sm text-red-500 mt-1 transition-opacity duration-300 ${
                    error ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                style={{ height: "1em" }}
            >
                {error}
            </div>
        </div>
    );
}

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const fields = [
        { label: "What is your name? *", name: "name" },
        { label: "What is your email? *", name: "email", type: "email" },
        { label: "What is your phone number?", name: "phone", type: "tel" },
        { label: "What is your Organization?", name: "organization" },
    ];

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format.";
        }
        // Additional validation logic as needed
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" }); // Clear error when input changes
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            console.log("User input data:", formData);
            // Handle successful form submission
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="max-w-6xl p-8 mx-auto mt-32 mb-20 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between mb-6">
                <h2 className="flex-1 text-4xl font-bold text-center text-blue-800">
                    Say Hello to Us
                </h2>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 gap-x-10 md:grid-cols-2">
                    {fields.map(({ label, name, type = "text" }) => (
                        <FloatingLabelInput
                            key={name}
                            label={label}
                            name={name}
                            type={type}
                            value={formData[name]}
                            onChange={handleChange}
                            error={errors[name]}
                        />
                    ))}
                </div>
                <div className="mt-4">
                    <textarea
                        name="message"
                        placeholder="Write your message here"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full h-32 p-3 border rounded-md outline-none text-textcolor font-sans font-normal border-[#172B85] focus:outline-none"
                    />
                </div>

                <div className="flex flex-wrap items-center justify-center w-full gap-3 space-x-2 sm:justify-between">
                    <div className="flex items-center gap-5 ">
                        <input
                            type="checkbox"
                            id="terms"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                            required
                        />
                        <label
                            htmlFor="terms"
                            className="flex flex-col text-sm font-normal sm:text-lg"
                        >
                            I have read and accept the Terms of{" "}
                            <span className="text-headingcolor">
                                Service & Privacy Policy *
                            </span>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-2 font-sans font-normal text-white transition duration-300 rounded-full bg-headingcolor"
                    >
                        SEND MESSAGE
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;

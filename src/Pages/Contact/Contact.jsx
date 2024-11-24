import React, { useEffect, useState, useRef } from "react";
import Homebanner from "@assets/Home.png";
import m_banner from "@assets/Home/m_banner.png";

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
                htmlFor={name}
                className={`absolute left-3 top-3 text-secondary font-sans font-normal text-sm transition-all duration-200 ${
                    isFocused || value
                        ? "top-2 indent-1 -translate-y-2 text-xs"
                        : ""
                }`}
            >
                {label}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full p-3 h-16 border text-secondary font-sans font-normal border-primary rounded-md outline-none ${
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
    const [visible, setVisible] = useState(false);
    const formRef = useRef(null);

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
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" }); // Clear error when input changes
        }
        setVisible(true); // Show the form when user starts typing
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

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target); // Stop observing after it becomes visible
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
        );

        if (formRef.current) {
            observer.observe(formRef.current);
        }

        return () => {
            if (formRef.current) {
                observer.unobserve(formRef.current);
            }
        };
    }, []);

    return (
        <div className="relative flex items-center px-2 lg:px-20 xl:px-56 justify-center w-full lg:h-[750px] responsive-section">
            <pre className="absolute w-full h-full font-mono text-lg whitespace-pre-wrap -top-4 lg:-top-5 xl:-top-0 -z-10">
                <img
                    src={Homebanner}
                    className="hidden object-cover object-bottom w-full h-full max-w-full lg:block"
                    alt=""
                />
                <img
                    src={m_banner}
                    className="object-cover object-top w-full h-full max-w-full lg:hidden"
                    alt=""
                />
            </pre>
            <div
                ref={formRef}
                className={`w-full p-8 mx-auto mb-20 bg-white rounded-lg shadow-lg transition-transform duration-1000 transform ${
                    visible
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-40 opacity-0"
                }`}
            >
                <div className="flex justify-between mb-6">
                    <h2 className="flex-1 text-2xl font-bold text-center text-blue-800 sm:text-4xl">
                        Say Hello to Us
                    </h2>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                            className="w-full h-32 p-3 font-sans font-normal border rounded-md outline-none text-secondary placeholder:text-secondary border-primary focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-wrap items-center justify-center w-full gap-3 space-x-2 sm:justify-between">
                        <div className="flex items-center gap-5">
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
                                <span className="text-primary">
                                    Service & Privacy Policy *
                                </span>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-2 font-sans font-normal text-white transition duration-300 rounded-full bg-primary"
                        >
                            SEND MESSAGE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

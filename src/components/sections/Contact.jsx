import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submissionStatus, setSubmissionStatus] = useState(null); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("message", formData.message);

        try {
            const response = await fetch("https://formspree.io/f/xgvogllj", {
                method: "POST",
                body: formDataToSend,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setSubmissionStatus("success"); 
                setFormData({ name: "", email: "", message: "" }); 
            } else {
                setSubmissionStatus("error"); 
            }
        } catch (error) {
            setSubmissionStatus("error"); 
        }
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#73000a] to-[#5a0008] bg-clip-text text-transparent text-center">
                        Get in touch
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#73000a] focus:bg-[#73000a]/5"
                                placeholder="Name..."
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#73000a] focus:bg-[#73000a]/5"
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                rows={10}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#73000a] focus:bg-[#73000a]/5"
                                placeholder="Type your message"
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#73000a] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(115, 0, 10, 0.4)]"
                        >
                            Send Message
                        </button>
                        {submissionStatus === "success" && (
                            <p className="mt-4 text-green-500 text-center">
                                Message sent successfully! 🎉
                            </p>
                        )}
                        {submissionStatus === "error" && (
                            <p className="mt-4 text-red-500 text-center">
                                Oops! Something went wrong. Please try again.
                            </p>
                        )}
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
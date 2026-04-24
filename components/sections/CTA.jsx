"use client";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!email.includes("@")) {
      setMessage("Enter valid email");
      return;
    }

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message);
    setEmail("");
  };

  return (
    <section id="contact" className="py-20 px-10 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold">
        Ready to Upskill Your Team?
      </h2>

      <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded-lg text-black w-64"
        />

        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-white text-blue-600 rounded-lg"
        >
          Submit
        </button>
      </div>

      {message && <p className="mt-4">{message}</p>}
    </section>
  );
}
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import WorkExperience from "./components/Work";
import Project from "./components/Project";
import { useState } from "react";
import Alert from "./components/Alert";

import emailjs from "@emailjs/browser";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [contactMe, setContactMe] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alertMessage, setAlertMessage] = useState("");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setContactMe({
      ...contactMe,
      [e.target.name]: e.target.value,
    });
  };

  const onContactMePress = async () => {
    try {
      const templateParams = {
        name: contactMe.name,
        email: contactMe.email,
        message: contactMe.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setIsSuccess(true);
      setShowAlert(true);
      setAlertMessage("Message sent successfully!");
      setContactMe({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setIsSuccess(false);
      setShowAlert(true);
      setAlertMessage("Failed to send message, please try again.");
    }
  };

  return (
    <div className="flex flex-col background-color text-white min-h-screen">
      <Navbar />
      <div className="flex flex-col p-4 sm:p-6">
        <section
          id="home"
          className="flex flex-col p-6 gap-4 min-h-screen justify-center"
        >
          <Home />
        </section>

        <section
          id="project"
          className="flex flex-col p-6 gap-6 min-h-screen justify-center"
        >
          <Project />
        </section>

        <section
          id="work"
          className="flex flex-col p-6 gap-6 min-h-screen justify-center"
        >
          <WorkExperience />
        </section>

        <section
          id="contact"
          className="flex flex-col p-6 gap-4 min-h-screen justify-center"
        >
          <Contact
            data={contactMe}
            onChange={handleInputChange}
            onSubmit={onContactMePress}
          />
        </section>
      </div>

      <Alert
        type={isSuccess ? "success" : "error"}
        title={isSuccess ? "Success!" : "Error!"}
        message={alertMessage}
        show={showAlert}
        onClose={() => setShowAlert(false)}
        position="top-right"
      />
    </div>
  );
}

export default App;

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { User, Mail, MessageSquare } from "lucide-react";
//import Filter from "bad-words";

export default function Contacto() {
  const form = useRef();
  /*const filter = new Filter();

  const message = form.current.message.value;
  const name = form.current.user_name.value;
  //const email = form.current.user_email.value;

  // Validación de groserías
  /*if (filter.isProfane(message) || filter.isProfane(name)) {
    alert("❌ Tu mensaje contiene palabras no permitidas. Por favor, corrígelo.");
    return;
  }*/
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_1jdk7km",
      "template_oyu49vl",
      form.current,
      "wVN6un2KD4q2wk6dC"
    ).then(
      () => { alert("✅ Mensaje enviado correctamente"); form.current.reset(); },
      (error) => { alert("❌ Error al enviar: " + error.text); }
    );
  };

  return (
    <section className="relative flex justify-center items-center py-16 min-h-screen">
      {/* Imagen de fondo con overlay */}
      <div
        className="absolute inset-0 bg-black/25"
        style={{
          backgroundImage: 'url("https://source.unsplash.com/1600x900/?chile,landscape")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Contenedor del formulario */}
      <div className="relative w-full max-w-4xl px-6">
        <div className="bg-white rounded-2xl shadow-2xl p-10">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">Contáctanos</h2>
          <p className="text-center text-gray-700 mb-10">
            ¿Tienes preguntas sobre tu próximo viaje a la Región del Maule? Escríbenos y te responderemos.
          </p>

          <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div className="flex flex-col">
              <label className="flex items-center gap-2 text-gray-800 font-medium mb-1"><User size={18} /> Nombre</label>
              <input type="text" name="user_name" placeholder="Escribe tu nombre" required className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>

            {/* Correo */}
            <div className="flex flex-col">
              <label className="flex items-center gap-2 text-gray-800 font-medium mb-1"><Mail size={18} /> Correo</label>
              <input type="email" name="user_email" placeholder="tu@email.com" required className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>

            {/* Mensaje */}
            <div className="flex flex-col md:col-span-2">
              <label className="flex items-center gap-2 text-gray-800 font-medium mb-1"><MessageSquare size={18} /> Mensaje</label>
              <textarea name="message" placeholder="Cuéntanos en qué podemos ayudarte..." required className="p-3 border border-gray-300 rounded-lg h-40 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>

            {/* Botón */}
            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition duration-300 shadow-lg">
                ✈️ Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

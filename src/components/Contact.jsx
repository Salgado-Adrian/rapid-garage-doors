export default function App() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          'your_service_id', // 🔁 Replace with your actual service ID
          'your_template_id', // 🔁 Replace with your template ID
          form.current,
          'your_public_key'   // 🔁 Replace with your public key
        )
        .then(
          () => {
            alert('Message sent successfully!');
            form.current.reset();
          },
          (error) => {
            console.error(error);
            alert('Failed to send. Try again later.');
          }
        );
    };
  
    return (
      <>
        {/* ...Navbar, Hero, Gallery, About sections... */}
  
        <section id="contact" className="py-20 px-4 bg-white text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="max-w-xl mx-auto text-gray-600 mb-8">
            Let us know what issue you're having with your garage door. We’ll get back to you as soon as possible.
          </p>
  
          <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4 text-left">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input type="text" name="from_name" required placeholder="John Doe" className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input type="email" name="from_email" required placeholder="you@example.com" className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Phone</label>
              <input type="tel" name="phone" required placeholder="(123) 456-7890" className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">What problem are you experiencing?</label>
              <textarea name="message" rows="4" required placeholder="My garage door won't close..." className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
            </div>
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded transition w-full">
              Submit Request
            </button>
          </form>
        </section>
      </>
    );
  }
  
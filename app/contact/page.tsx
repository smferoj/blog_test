
"use client"


const Contact = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="border rounded p-8 bg-white shadow-md hover:border-blue-500 hover:shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div>
          <label className="block mb-1 font-medium" htmlFor="name">Name</label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="email">Email</label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="message">Message</label>
          <textarea
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            id="message"
            name="message"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;


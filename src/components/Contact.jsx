export default function Contact() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Heading Section - Styled like Services section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Get in <span className="text-[#6BC0E8]">Touch</span></h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Reach out to our team for inquiries, feedback, or support. We're here to assist you with your questions and requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Contact Form */}
        <div>
          <h2 className="text-[#6BC0E8] text-3xl font-medium mb-6">Contact Form</h2>
          <p className="text-gray-600 mb-8">
            Have an enquiry or some feedback for us? Fill out the form below to contact our team.
          </p>

          <div className="contact-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-800 font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-gray-100 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-800 font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-gray-100 rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-100 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-800 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-gray-100 rounded-md"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="queries" className="block text-gray-800 font-medium mb-2">
                Queries
              </label>
              <textarea
                id="queries"
                placeholder="Enter your queries"
                rows={6}
                className="w-full px-4 py-3 bg-gray-100 rounded-md"
              ></textarea>
            </div>

            <button
              type="button"
              className="px-8 py-3 bg-[#6BC0E8] text-white font-medium uppercase rounded-md hover:bg-[#5aa8cc] transition-colors"
            >
              SUBMIT
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <h2 className="text-gray-800 text-2xl font-medium mb-6">Prefer another way to find us?</h2>

          <div className="flex items-start mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 mr-3 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <p className="text-gray-600">+977 98675635423</p>
          </div>

          <div className="flex items-start mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 mr-3 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <p className="text-gray-600">info@mbsoftech.com</p>
          </div>

          <div className="flex items-start mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 mr-3 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 12m0 0L9.172 7.757m4.242 4.243a4 4 0 11-5.657-5.657 4 4 0 015.657 5.657z"
              />
            </svg>
            <p className="text-gray-600">Sankhamul, Kathmandu</p>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-80 bg-gray-200 rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12918.115458747297!2d85.331862!3d27.681456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24124854634980bf%3A0xc1e903683f95e7b5!2sM%20And%20MB%20Soft%20Tech%20Pvt.%20Ltd.!5e1!3m2!1sen!2snp!4v1746299536474!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
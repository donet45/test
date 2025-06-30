import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    emergency: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Emergency Line',
      details: '(416) 555-1234',
      description: 'Available 24/7 for emergencies',
      link: 'tel:+14165551234',
      highlight: true
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@torontolocksmith.ca',
      description: 'Get a quote or ask questions',
      link: 'mailto:info@torontolocksmith.ca'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Greater Toronto Area',
      description: 'We serve all of Toronto & GTA'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: '24/7 Emergency Service',
      description: 'Regular hours: Mon-Fri 8AM-6PM'
    }
  ];

  const serviceAreas = [
    'Downtown Toronto', 'North York', 'Scarborough', 'Etobicoke',
    'York', 'East York', 'Mississauga', 'Markham',
    'Richmond Hill', 'Vaughan', 'Thornhill', 'Pickering',
    'Brampton', 'Oakville', 'Burlington', 'Milton'
  ];

  const faqs = [
    {
      question: 'How quickly can you respond to an emergency?',
      answer: 'We guarantee arrival within 20 minutes for emergency calls in the Toronto area.'
    },
    {
      question: 'Do you provide free estimates?',
      answer: 'Yes, we provide free estimates for all non-emergency services.'
    },
    {
      question: 'Are you available on weekends and holidays?',
      answer: 'Absolutely! Our emergency service is available 24/7, 365 days a year.'
    },
    {
      question: 'Do you accept insurance claims?',
      answer: 'Yes, we work with most insurance companies and can help with your claim.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Toronto's Premier Locksmith
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Need immediate help or want to schedule a service? We're here 24/7 to assist you with all your locksmith needs.
          </p>
          <a
            href="tel:+14165551234"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg text-xl font-semibold transition-colors duration-200 inline-flex items-center space-x-3"
          >
            <Phone className="h-6 w-6" />
            <span>Call (416) 555-1234</span>
          </a>
          <p className="text-blue-100 mt-4">
            Emergency? Call now for immediate assistance!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className={`bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 ${
                info.highlight ? 'border-2 border-red-200 bg-red-50' : ''
              }`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  info.highlight ? 'bg-red-600' : 'bg-blue-100'
                }`}>
                  <info.icon className={`h-8 w-8 ${info.highlight ? 'text-white' : 'text-blue-800'}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className={`text-lg font-bold mb-2 block hover:underline ${
                      info.highlight ? 'text-red-600' : 'text-blue-800'
                    }`}
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-lg font-bold text-gray-900 mb-2">
                    {info.details}
                  </p>
                )}
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Request Service or Get a Quote
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    We'll contact you within 15 minutes during business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="emergency-lockout">Emergency Lockout</option>
                      <option value="residential">Residential Service</option>
                      <option value="commercial">Commercial Service</option>
                      <option value="automotive">Automotive Service</option>
                      <option value="installation">Lock Installation</option>
                      <option value="repair">Lock Repair</option>
                      <option value="rekeying">Rekeying Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message / Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your locksmith needs..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="emergency"
                      name="emergency"
                      checked={formData.emergency}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500"
                    />
                    <label htmlFor="emergency" className="text-sm text-gray-700">
                      This is an emergency - please call me immediately
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Map & Service Areas */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Service Area
                </h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">Greater Toronto Area Coverage</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  We provide 24/7 locksmith services throughout the Greater Toronto Area. 
                  Our mobile units are strategically positioned for fastest response times.
                </p>
              </div>

              {/* Service Areas */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Areas We Serve
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="text-sm text-gray-700 py-1">
                      📍 {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start space-x-2">
                  <MessageCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-600 ml-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Emergency Locksmith Needed Right Now?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Don't wait! Our emergency response team is standing by 24/7 to help you immediately.
          </p>
          <a
            href="tel:+14165551234"
            className="bg-white hover:bg-gray-100 text-red-600 px-10 py-4 rounded-lg text-xl font-semibold transition-colors duration-200 inline-flex items-center space-x-3"
          >
            <Phone className="h-6 w-6" />
            <span>Call (416) 555-1234 NOW</span>
          </a>
          <p className="text-red-100 mt-4">
            Average response time: 15-20 minutes
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
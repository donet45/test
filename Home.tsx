import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, Shield, Star, Key, Car, Home as HomeIcon, Building2, CheckCircle, ArrowRight } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: 'Fast Response',
      description: '20 minutes or less response time'
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully certified and bonded technicians'
    },
    {
      icon: Star,
      title: 'Transparent Pricing',
      description: 'No hidden fees, upfront quotes'
    },
    {
      icon: CheckCircle,
      title: 'Top Rated',
      description: '5-star service across Toronto'
    }
  ];

  const services = [
    {
      icon: HomeIcon,
      title: 'Residential',
      description: 'Home lockouts, rekeying, deadbolts'
    },
    {
      icon: Building2,
      title: 'Commercial',
      description: 'Office security, master key systems'
    },
    {
      icon: Car,
      title: 'Automotive',
      description: 'Car lockouts, transponder keys'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Downtown Toronto',
      text: 'Locked out at midnight and they arrived in 15 minutes! Professional and reasonably priced.',
      rating: 5
    },
    {
      name: 'Mike R.',
      location: 'North York',
      text: 'Excellent service for our office building. They installed a new master key system perfectly.',
      rating: 5
    },
    {
      name: 'Jennifer L.',
      location: 'Scarborough',
      text: 'Lost my car keys and they made new ones on the spot. Highly recommend!',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            24/7 Emergency Locksmith in <span className="text-yellow-400">Toronto</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Locked out? Lost your keys? We'll be there in 20 minutes or less.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+14165551234"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center space-x-2 min-w-[200px] justify-center"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center space-x-2 min-w-[200px] justify-center"
            >
              <span>Request Service</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5" />
              <span>5-Star Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Key Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional locksmith services for every situation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <service.icon className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Toronto Locksmith?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of Toronto residents and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-900 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from real customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Emergency Lockout? We're Here to Help!
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Don't wait outside in the cold. Our mobile locksmiths are ready to assist you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14165551234"
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>(416) 555-1234</span>
            </a>
            <span className="text-white text-lg font-semibold flex items-center justify-center">
              Available 24/7 • Fast Response
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
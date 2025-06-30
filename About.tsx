import React from 'react';
import { Shield, Award, Clock, Users, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const promises = [
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'We guarantee arrival within 20 minutes for emergency calls, day or night.'
    },
    {
      icon: Shield,
      title: 'Honest Service',
      description: 'Transparent pricing with no hidden fees. You know the cost before we start.'
    },
    {
      icon: Award,
      title: 'Quality Work',
      description: 'Every job is backed by our satisfaction guarantee and warranty.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '24/7', label: 'Emergency Service' },
    { number: '20 Min', label: 'Average Response' }
  ];

  const certifications = [
    'Licensed by the Province of Ontario',
    'Fully Insured & Bonded',
    'Better Business Bureau A+ Rating',
    'Google Verified Business',
    'HomeStars Certified Pro'
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Toronto's Most Trusted Locksmith
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 15 years, we've been Toronto's go-to locksmith service, helping thousands of residents and businesses with their security needs.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2009, Toronto Locksmith began as a small family business with a simple mission: 
                  provide fast, reliable, and honest locksmith services to our community. What started with 
                  just one van and a passion for helping people has grown into Toronto's most trusted locksmith service.
                </p>
                <p>
                  We understand that being locked out or dealing with security issues can be stressful. 
                  That's why we've built our entire business around being there when you need us most - 
                  24 hours a day, 7 days a week, with the fastest response times in the city.
                </p>
                <p>
                  Our team of certified locksmiths brings decades of combined experience to every job. 
                  From simple lockouts to complex commercial security installations, we treat every 
                  customer with the same level of care and professionalism.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Promise to You
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We stand behind our work with guarantees that give you peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promises.map((promise, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <promise.icon className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {promise.title}
                </h3>
                <p className="text-gray-600">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Certified professionals dedicated to your security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Thompson</h3>
              <p className="text-blue-600 font-medium mb-3">Lead Technician</p>
              <p className="text-gray-600 text-sm">
                15+ years experience, specializing in commercial security systems and emergency lockouts.
              </p>
              <div className="flex justify-center mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Chen</h3>
              <p className="text-blue-600 font-medium mb-3">Residential Specialist</p>
              <p className="text-gray-600 text-sm">
                Expert in home security, lock installation, and key duplication with 10+ years experience.
              </p>
              <div className="flex justify-center mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">David Rodriguez</h3>
              <p className="text-blue-600 font-medium mb-3">Automotive Expert</p>
              <p className="text-gray-600 text-sm">
                Certified automotive locksmith specializing in transponder keys and vehicle security systems.
              </p>
              <div className="flex justify-center mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who trust us with their security needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14165551234"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Call (416) 555-1234
            </a>
            <a
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-800 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
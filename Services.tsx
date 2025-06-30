import React from 'react';
import { Clock, Home, Building2, Car, Key, Shield, Wrench, AlertTriangle } from 'lucide-react';

const Services = () => {
  const emergencyServices = [
    {
      icon: AlertTriangle,
      title: 'Emergency Lockout Service',
      description: 'Locked out of your home, office, or car? Our emergency team is available 24/7 to get you back inside quickly and safely.',
      features: ['24/7 availability', '20-minute response time', 'No damage guarantee', 'All lock types'],
      startingPrice: '$89'
    }
  ];

  const residentialServices = [
    {
      icon: Home,
      title: 'Residential Locksmith Services',
      description: 'Complete home security solutions from lock installation to emergency lockouts.',
      features: ['Lock installation & repair', 'Rekeying services', 'Deadbolt installation', 'Mailbox locks', 'Window locks', 'Security assessments'],
      startingPrice: '$75'
    },
    {
      icon: Key,
      title: 'Key Duplication & Rekeying',
      description: 'Professional key cutting and lock rekeying services for enhanced home security.',
      features: ['High-security keys', 'Standard key cutting', 'Lock rekeying', 'Master key systems', 'Restricted key systems'],
      startingPrice: '$25'
    }
  ];

  const commercialServices = [
    {
      icon: Building2,
      title: 'Commercial Security Systems',
      description: 'Comprehensive business security solutions including access control and master key systems.',
      features: ['Master key systems', 'Access control installation', 'Panic hardware', 'Security upgrades', 'Lock maintenance programs'],
      startingPrice: '$150'
    },
    {
      icon: Shield,
      title: 'Smart Lock Installation',
      description: 'Modern smart lock solutions for homes and businesses with professional installation.',
      features: ['Smart lock installation', 'Integration setup', 'Training & support', 'All major brands', 'Wireless connectivity'],
      startingPrice: '$200'
    }
  ];

  const automotiveServices = [
    {
      icon: Car,
      title: 'Automotive Locksmith',
      description: 'Complete car locksmith services including lockouts, key replacement, and transponder programming.',
      features: ['Car lockout service', 'Transponder key programming', 'Key fob replacement', 'Ignition repair', 'All vehicle makes'],
      startingPrice: '$95'
    }
  ];

  const ServiceCategory = ({ title, services, bgColor = 'bg-white' }) => (
    <div className={`${bgColor} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <service.icon className="h-8 w-8 text-blue-800" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      From {service.startingPrice}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:+14165551234"
                      className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 text-center"
                    >
                      Call Now
                    </a>
                    <a
                      href="/contact"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-semibold transition-colors duration-200 text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Locksmith Services in Toronto
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            From emergency lockouts to complete security installations, we provide reliable locksmith services 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14165551234"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Emergency Service: (416) 555-1234
            </a>
            <div className="flex items-center justify-center space-x-2 text-blue-100">
              <Clock className="h-5 w-5" />
              <span>Available 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <ServiceCategory 
        title="🚨 Emergency Services" 
        services={emergencyServices}
        bgColor="bg-red-50"
      />

      {/* Residential Services */}
      <ServiceCategory 
        title="🏠 Residential Services" 
        services={residentialServices}
        bgColor="bg-gray-50"
      />

      {/* Commercial Services */}
      <ServiceCategory 
        title="🏢 Commercial Services" 
        services={commercialServices}
      />

      {/* Automotive Services */}
      <ServiceCategory 
        title="🚗 Automotive Services" 
        services={automotiveServices}
        bgColor="bg-gray-50"
      />

      {/* Service Areas */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Service Areas Across Toronto
            </h2>
            <p className="text-xl text-blue-100">
              We serve all areas of Toronto and the GTA
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              'Downtown Toronto', 'North York', 'Scarborough', 'Etobicoke',
              'York', 'East York', 'Mississauga', 'Markham',
              'Richmond Hill', 'Vaughan', 'Thornhill', 'Pickering'
            ].map((area, index) => (
              <div key={index} className="bg-blue-700 p-4 rounded-lg">
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Response</h3>
              <p className="text-gray-600">
                Emergency calls answered immediately with 20-minute response time guarantee.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                All technicians are fully licensed, bonded, and insured for your protection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">
                All work comes with our satisfaction guarantee and comprehensive warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Locksmith Service Right Now?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait - our expert locksmiths are standing by to help you 24/7
          </p>
          <a
            href="tel:+14165551234"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-block"
          >
            Call (416) 555-1234 Now
          </a>
          <p className="text-gray-400 mt-4">
            Available 24/7 • Fast Response • Licensed & Insured
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
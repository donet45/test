import React from 'react';
import { Key, Lock, Car, Building2, Home, Shield, Wrench, Clock } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      category: 'residential',
      title: 'Deadbolt Installation',
      description: 'High-security deadbolt installation for residential home',
      image: 'https://images.pexels.com/photos/277574/pexels-photo-277574.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeAfter: false
    },
    {
      id: 2,
      category: 'commercial',
      title: 'Smart Lock System',
      description: 'Commercial smart lock installation for office building',
      image: 'https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeAfter: false
    },
    {
      id: 3,
      category: 'automotive',
      title: 'Car Key Cutting',
      description: 'Precision automotive key cutting and programming',
      image: 'https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeAfter: false
    },
    {
      id: 4,
      category: 'residential',
      title: 'Lock Rekeying Service',
      description: 'Professional lock rekeying for home security upgrade',
      image: 'https://images.pexels.com/photos/210702/pexels-photo-210702.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeAfter: true
    },
    {
      id: 5,
      category: 'commercial',
      title: 'Master Key System',
      description: 'Complete master key system installation for business',
      image: 'https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeAfter: false
    },
    {
      id: 6,
      category: 'emergency',
      title: 'Emergency Lockout',
      description: '24/7 emergency lockout service in action',
      image: 'https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeAfter: false
    },
    {
      id: 7,
      category: 'residential',
      title: 'Security Upgrade',
      description: 'Complete home security system upgrade',
      image: 'https://images.pexels.com/photos/280193/pexels-photo-280193.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeAfter: true
    },
    {
      id: 8,
      category: 'automotive',
      title: 'Transponder Programming',
      description: 'Advanced transponder key programming service',
      image: 'https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeAfter: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Work', icon: Shield },
    { id: 'residential', label: 'Residential', icon: Home },
    { id: 'commercial', label: 'Commercial', icon: Building2 },
    { id: 'automotive', label: 'Automotive', icon: Car },
    { id: 'emergency', label: 'Emergency', icon: Clock }
  ];

  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/shutterstock_651226186_1200x.webp)'
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/70"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Work Gallery
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            See the quality craftsmanship and professional results that have made us Toronto's trusted locksmith service
          </p>
          <div className="flex items-center justify-center space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <Wrench className="h-5 w-5" />
              <span>Professional Installation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-800 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.beforeAfter && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Before & After
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.category === 'residential' ? 'bg-blue-100 text-blue-800' :
                      item.category === 'commercial' ? 'bg-green-100 text-green-800' :
                      item.category === 'automotive' ? 'bg-purple-100 text-purple-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Before & After Transformations
            </h2>
            <p className="text-xl text-gray-600">
              See the difference professional locksmith service makes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Transformation 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/280193/pexels-photo-280193.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Before lock repair"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      BEFORE
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/277574/pexels-photo-277574.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="After lock repair"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      AFTER
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Damaged Lock Restoration
                </h3>
                <p className="text-gray-600">
                  Complete restoration of a damaged residential lock with modern high-security replacement.
                </p>
              </div>
            </div>

            {/* Transformation 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Before commercial upgrade"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      BEFORE
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="After commercial upgrade"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      AFTER
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Commercial Security Upgrade
                </h3>
                <p className="text-gray-600">
                  Upgraded outdated commercial locks to modern smart lock system with access control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials with Work */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from real customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Amazing work on our home security upgrade. The new smart locks work perfectly and the installation was flawless."
              </p>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Lisa K.</p>
                <p className="text-gray-600">Residential Customer</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Professional service for our office building. The master key system they installed is exactly what we needed."
              </p>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Mark T.</p>
                <p className="text-gray-600">Commercial Client</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Quick response for my car lockout and they made new keys on the spot. Very impressed with the mobile service."
              </p>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Jennifer R.</p>
                <p className="text-gray-600">Automotive Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Professional Locksmith Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our satisfied customers and experience the quality workmanship that sets us apart
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

export default Gallery;
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-indigo-50 to-white transform transition-all duration-500 ease-in-out overflow-x-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className={`w-full lg:w-1/2 mb-12 lg:mb-0 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <div>
              <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4 hover:bg-indigo-200 transform transition-all duration-300 hover:scale-105">
                New Learning Experience
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6 transition-opacity duration-700 ease-in opacity-100">
                Enhance Your <span className="text-indigo-600">Learning</span> Journey
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-xl transition-all duration-500 ease-in transform opacity-100">
                Discover a new way to learn with our interactive courses, expert instructors, and a community of passionate learners.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slideUp delay-300">
                <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-indigo-700 hover:to-indigo-800 active:scale-95 group">
                  <span className="relative inline-flex items-center group-hover:translate-x-1 transition-transform duration-200">
                    Get Started
                    <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </button>
                <button className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg border border-indigo-200 hover:bg-indigo-50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-indigo-300 active:scale-95 group">
                  <span className="relative inline-flex items-center group-hover:translate-x-1 transition-transform duration-200">
                    Learn More
                    <svg className="w-4 h-4 ml-2 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                </button>
              </div>

              <div className="mt-12">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">5,000+</span> students already enrolled
                </div>
              </div>
            </div>
          </div>

          <div className={`w-full lg:w-1/2 flex justify-center lg:justify-end transform transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className="relative">
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden z-10 transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl animate-float group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt="Students learning together"
                  className="w-full h-auto lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">Start Your Journey Today</h3>
                  <p className="text-sm opacity-90">Join thousands of students worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center animate-fadeIn delay-700">
          {[
            { count: '500+', label: 'Courses Available', color: 'from-blue-500 to-indigo-600' },
            { count: '50+', label: 'Expert Instructors', color: 'from-indigo-500 to-purple-600' },
            { count: '25k+', label: 'Happy Students', color: 'from-purple-500 to-pink-600' },
            { count: '100%', label: 'Satisfaction Rate', color: 'from-pink-500 to-red-600' },
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent transition-all duration-300 transform group-hover:scale-110 group-hover:translate-y-[-4px]`}>
                {stat.count}
              </div>
              <div className="text-gray-600 mt-2 transition-all duration-300 group-hover:text-gray-800">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

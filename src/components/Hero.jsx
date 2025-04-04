const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-indigo-50 to-white animate-fade-in">
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div>
              <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
                New Learning Experience
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
                Enhance Your <span className="text-indigo-600">Learning</span> Journey
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Discover a new way to learn with our interactive courses, expert instructors, and a community of passionate learners.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700">
                  Get Started
                </button>
                <button className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg border border-indigo-200 hover:border-indigo-300">
                  Learn More
                </button>
              </div>

              <div className="mt-12">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">5,000+</span> students already enrolled
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden z-10">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt="Students learning together"
                  className="w-full h-auto lg:h-[500px] object-cover"
                />



                
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">
          {[
            { count: '500+', label: 'Courses Available' },
            { count: '50+', label: 'Expert Instructors' },
            { count: '25k+', label: 'Happy Students' },
            { count: '100%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600">{stat.count}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10 text-indigo-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: 'Online Learning',
      description: 'Learn at your own pace with our comprehensive online courses covering a wide range of subjects.'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
      title: 'Expert Instructors',
      description: 'Learn from industry experts and experienced educators who are passionate about teaching.'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      title: 'Community Learning',
      description: 'Join a community of learners, share knowledge, and collaborate on projects with peers.'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
        </svg>
      ),
      title: 'Hands-On Projects',
      description: 'Apply what you learn through real-world projects and build a portfolio to showcase your skills.'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      title: 'Secure Learning',
      description: 'Your data and progress are always secure with our encrypted platform and privacy commitments.'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: 'Instant Feedback',
      description: 'Get immediate feedback on your assignments and quizzes to improve your understanding.'
    }
  ];

  

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Features that make learning <span className="text-indigo-600">enjoyable</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform is designed to make learning engaging, effective, and accessible for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <div className="mb-4 bg-indigo-50 w-16 h-16 rounded-lg flex items-center justify-center group transition-all duration-300 ease-in-out hover:bg-indigo-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-indigo-600">{feature.title}</h3>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-indigo-600 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-12">
              <div>
                <div className="text-indigo-100 text-sm font-semibold mb-2">
                  START LEARNING TODAY
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to transform your learning experience?
                </h3>
                <p className="text-indigo-100 mb-6">
                  Join thousands of students worldwide and start your learning journey with us. Get unlimited access to all our courses for one affordable subscription.
                </p>
                <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-indigo-50 transition-colors">
                  Get Started Free
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

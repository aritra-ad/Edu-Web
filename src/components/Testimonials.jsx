import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "The courses are exceptionally well-structured and comprehensive. I've learned more in a few weeks than I did in an entire semester at university.",
      name: "Sarah Mitchell",
      title: "Frontend Developer"
    },
    {
      content: "EduLearn has completely transformed my career path. The practical projects have given me the confidence to apply for jobs I never thought I'd be qualified for.",
      name: "Michael Rodriguez",
      title: "Data Scientist"
    },
    {
      content: "The community aspect of EduLearn sets it apart from other platforms. Being able to connect with fellow learners has been invaluable.",
      name: "Emily Chang",
      title: "UX Designer"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What our <span className="text-indigo-600">students say</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it — hear from our students who have transformed their careers through our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300">
              <blockquote className="text-gray-600 italic mb-4">
                "{testimonial.content}"
              </blockquote>
              <div className="font-bold text-gray-900">
                {testimonial.name}
              </div>
              <div className="text-indigo-600">
                {testimonial.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

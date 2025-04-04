import { useState } from 'react';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'web', name: 'Web Development' },
    { id: 'data', name: 'Data Science' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'business', name: 'Business' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Mastering Modern Web Development',
      category: 'web',
      rating: 4.9,
      reviews: 345,
      students: 12540,
      instructor: 'David Chen',
      price: 89.99,
      discountPrice: 49.99,
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80',
      level: 'Intermediate',
      duration: '26 hours'
    },
    {
      id: 2,
      title: 'Python for Data Science & Machine Learning',
      category: 'data',
      rating: 4.8,
      reviews: 512,
      students: 18345,
      instructor: 'Sarah Johnson',
      price: 99.99,
      discountPrice: 59.99,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      level: 'All Levels',
      duration: '38 hours'
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      category: 'design',
      rating: 4.7,
      reviews: 298,
      students: 8765,
      instructor: 'Emma Rodriguez',
      price: 79.99,
      discountPrice: 39.99,
      image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      level: 'Beginner',
      duration: '18 hours'
    },
    {
      id: 4,
      title: 'The Complete Digital Marketing Course',
      category: 'business',
      rating: 4.6,
      reviews: 425,
      students: 14230,
      instructor: 'Michael Thompson',
      price: 94.99,
      discountPrice: 54.99,
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      level: 'All Levels',
      duration: '32 hours'
    },
    {
      id: 5,
      title: 'React & Redux: Build Modern Web Applications',
      category: 'web',
      rating: 4.9,
      reviews: 378,
      students: 10890,
      instructor: 'Jason Miller',
      price: 84.99,
      discountPrice: 44.99,
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      level: 'Intermediate',
      duration: '24 hours'
    }
  ];

  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter(course => course.category === activeCategory);

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-indigo-600">Courses</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our comprehensive course catalog designed to help you achieve your learning goals.
          </p>
        </div>

        <div className="flex justify-center mb-12 space-x-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                  {course.level}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-gray-700">{course.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-4">By {course.instructor}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">
                      {course.students.toLocaleString()} students
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{course.duration}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-indigo-600">${course.discountPrice}</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">${course.price}</span>
                  </div>
                  <button className="px-4 py-2 bg-indigo-50 text-indigo-600 text-sm font-medium rounded-lg hover:bg-indigo-100 transition-colors">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;


import girl1 from '../assets/Media/Ellipse 10.png'
import boy1 from '../assets/Media/boy.png'
// Array of testimonials
const testimonials = [
    {
        quote: "The staff at HealthCare Clinic were incredibly supportive and attentive during my visit. I felt well cared for and the doctors were very knowledgeable and understanding.",
        name: "John Doe",
        position: "Software Engineer",
        image: `${girl1}`,
        rating: 5
    },
    {
        quote: "My experience at HealthCare Clinic was outstanding. The facilities are top-notch and the medical team was very professional. I would highly recommend this clinic to anyone.",
        name: "Jane Smith",
        position: "Teacher",
        image: `${boy1}`,
        rating: 4
    },
    {
        quote: "I had a wonderful experience at HealthCare Clinic. The nurses and doctors were extremely friendly and made me feel at ease. The treatment was effective and I felt better in no time.",
        name: "Alice Johnson",
        position: "Graphic Designer",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        rating: 5
    }
];

// Function to render stars based on rating
const renderStars = (rating) => {
    return (
        <div className="flex">
            {[...Array(5)].map((star, index) => {
                return (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.911c.969 0 1.371 1.24.588 1.81l-3.974 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.539 1.118l-3.974-2.883a1 1 0 00-1.175 0l-3.974 2.883c-.783.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.09 9.1c-.783-.57-.381-1.81.588-1.81h4.911a1 1 0 00.95-.69l1.518-4.674z"/>
                    </svg>
                );
            })}
        </div>
    );
};

const Testimonials = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <button className='btn btn-outline rounded-full'>Testimonials</button>
                <h1 className="text-2xl font-semibold  text-gray-800 capitalize lg:text-3xl dark:text-white">
                What they say <span className="text-blue-500">about</span> us
                </h1>

              

                <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-3 xl:mt-10 max-w-7xl">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6 bg-[#FFFFF5] rounded-lg dark:bg-gray-800 md:p-8">
                            <p className="leading-loose text-gray-500 dark:text-gray-300">
                                {testimonial.quote}
                            </p>
                            <div className="flex items-center mt-6">
                                <img className="object-cover rounded-full w-14 h-14" src={testimonial.image} alt={testimonial.name} />
                                <div className="mx-4">
                                    <h1 className="font-semibold text-blue-500">
                                        {testimonial.name}
                                        <span className="text-sm text-gray-500 dark:text-gray-300 ml-2">{testimonial.position}</span>
                                    </h1>
                                    {renderStars(testimonial.rating)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

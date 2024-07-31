/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { BsQuote } from "react-icons/bs";
const solutions = './solutions.png'
const TestimonialsSection = () => {
  const testimonials = [
    {
      image: solutions,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu in felis tristique, ac dignissim sapien gravida.",
      name: "John Doe",
    },
    {
      image: solutions,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu in felis tristique, ac dignissim sapien gravida.",
      name: "John Doe",
    },
    {
      image: solutions,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu in felis tristique, ac dignissim sapien gravida.",
      name: "John Doe",
    },
  ];

  return (
    <section className="w-screen  bg-red-200 mt-16 text-black min-h-[70vh] rounded-tl-[750px] p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center flex-col gap-4"
      >
        <h1 className="text-3xl font-semibold">What My Clients Says</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="w-44 h-[0.2rem] bg-primary mb-4 mt-4"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex items-center flex-wrap justify-center container gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex max-w-xs flex-col gap-4 items-center bg-white rounded-md p-4"
          >
            <BsQuote size={25} />
            <img
              src={testimonial.image}
              alt={`Client ${index + 1}`}
              className="w-36 h-36 rounded-full"
            />
            <p className="text-center mt-2 max-w-sm">
              {testimonial.text}
            </p>
            <div className="w-10 h-[0.2rem] bg-primary mt-4"></div>
            <p className="text-xl font-semibold mt-2">{testimonial.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;

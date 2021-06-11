import React from "react";
import { motion } from "framer-motion";

const Question = ({ faq, setToggleFaq, toggleFaq }) => {
  return (
    <div>
      <div className="answer">
        <h4>{faq.title}</h4>

        {faq.active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p>{faq.description}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              expedita facere quasi aliquam harum saepe fuga suscipit enim
              quisquam alias?
            </p>
          </motion.div>
        )}
      </div>
      <div className="faq-line"></div>
    </div>
  );
};

export default Question;

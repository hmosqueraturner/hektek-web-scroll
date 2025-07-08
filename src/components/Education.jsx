import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { qualifications } from "../constants";

const EducationkCard = ({
  index,
  qualification,
  name,
  country,
  year,
  image,
}) => (

  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='p-1 h-full rounded-3xl xs:w-[320px] blue-orange-gradient shadow-card'
    >

    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-hole-pattern bg-cover bg-no-repeat bg-center p-10 rounded-3xl xs:w-[320px] w-full'
    >
      <p className='text-white font-medium text-[22px]'>{qualification}</p>

      <div className='mt-1'>
        <p className='text-red-500 tracking-wider text-[16px]'>{name}</p>

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[14px]'>
              {country}
            </p>
            <p className='mt-1 text-white text-[12px]'>
              {year}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className='w-20 h-20 rounded-full object-cover'
          />
        </div>
      </div>
    </motion.div>
    </motion.div>

);

const Education = () => {
  return (
    <div className={`mt-12 bg-edu-pattern bg-cover bg-no-repeat bg-center rounded-[20px]`}>
      <div
        className={`${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Academic & Certifications</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {qualifications.map((qualification, index) => (
          <EducationkCard key={qualification.name} index={index} {...qualification} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "");

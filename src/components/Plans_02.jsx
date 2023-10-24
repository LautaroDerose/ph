import { useState } from "react";
import { motion } from "framer-motion";
import styles from '../styles';
import { staggerContainer } from '../utils/motion'
import { Card2, TitleText, TypingText } from "../components/";
import { plansCard } from '../constants'

const Plans2 = () => {
  const [active, setActive] = useState('plan-2')

  return (
    <section className={` xs:p-8  py-12`} id="explore" >
    {/* <section className={`${styles.paddings}`} id="explore" > */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`w-full flex flex-col`}
        // className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        {/* <TypingText title="| The World" textStyles="text-center" /> */}
        <TitleText title={<>Nuestros principales planes </>} textStyles="text-center"  /> 
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] ">
          {
            plansCard.map((card, index) => (
              <Card2 
                key={card.id}
                {...card}
                index={index}
                active={active}
                handleClick={setActive}
              />
            ))
          }
        </div>
      </motion.div>
    </section>
  )
}

export default Plans2;
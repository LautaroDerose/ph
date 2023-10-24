import { useState } from "react";
import { motion } from "framer-motion";
import styles from '../styles';
import { staggerContainer } from '../utils/motion'
import { Card, TitleText, TypingText } from "../components/";
import { plansCard } from '../constants'

const Explore = () => {
  const [active, setActive] = useState('plan-2')

  return (
    <section className={`${styles.paddings}`} id="explore" >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText title={<>Nuestros planes </>} textStyles="text-center" className='sm:text-lg md:text-xl' /> 
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {
            plansCard.map((world, index) => (
              <Card 
                key={world.id}
                {...world}
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

export default Explore;
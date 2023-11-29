import { useState } from "react";
import { motion } from "framer-motion";
import styles from '../styles';
import { staggerContainer } from '../utils/motion'
import { Card, TitleText, TypingText } from "../components/";
import { plansCard } from '../constants'

const Explore = () => {
  const [active, setActive] = useState('plan-3')

  return (
    <section className={`sm:p-12 xs:p-8 px-4 py-6 h-100vh`} id="explore" >
      {/* <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      > */}
      <div>

        <h1 className="flex justify-center mx-auto sm:text-lg md:text-4xl font-bold text-purple-600 ">Nuestros planes </h1>
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
      </div>
    </section>
  )
}

export default Explore;
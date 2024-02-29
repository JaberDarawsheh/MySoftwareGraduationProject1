import React from 'react'
import { motion } from "framer-motion";

function textAnimation() {
  return (
    <>
      <motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >خطوة بخطوة لتحقيق النجاح
        </motion.span>
    </motion.div>
    </>
  )
}

export default textAnimation

import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import useInView from '../hooks/useInView';

interface MotionDivProps {
    children: ReactNode;
}

const MotionDiv: React.FC<MotionDivProps> = ({ children }) => {

  return (
    <motion.div
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.2 }}
        >
      {children}
    </motion.div>
  );
};

export default MotionDiv;

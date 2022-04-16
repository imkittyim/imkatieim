import { motion } from 'framer-motion';

const transitionVariants = {
  initial: {
    pathLength: 0,
  },
  tap: {
    pathLength: 1,
    transition: {
      duration: 5,
    },
  },
  hover: {
    pathLength: 1,
    transition: {
      duration: 5,
    },
  },
};

const AnimatedPath = (props: any) => <motion.path variants={transitionVariants} {...props} />;

export default AnimatedPath;

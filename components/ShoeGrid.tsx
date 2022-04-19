import { createStyles, Grid } from '@mantine/core';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMemo } from 'react';
import { shoeOptions } from '../src/shoes/shoeOptions';

const variants = {
  initial: {
    pathLength: 0,
  },
  hover: {
    scale: 1.2,
    rotate: [0, -5, 5, -5, 0],
    transition: {
      rotate: {
        repeat: Infinity,
        duration: 2,
      },
    },
    pathLength: 1,
  },
};

const useStyles = createStyles((theme) => ({
  svg: {
    path: {
      stroke: theme.colorScheme === 'dark' ? theme.colors.pink[1] : theme.colors.dark[8],
      strokeWidth: '1px',
      fill: theme.colorScheme === 'dark' ? theme.colors.pink[1] : theme.colors.dark[8],
      fillOpacity: 0.3,
    },
  },
}));

export const Shoes = () => {
  const { classes } = useStyles();

  const sortedShoes = useMemo(() => {
    const toBeSorted = [...shoeOptions];
    toBeSorted.sort((a, b) => {
      return a.released > b.released ? 1 : -1
    })
    return toBeSorted;
  }, [])

  return (
    <Grid mx="10%" py={50} gutter={50}>
      {sortedShoes.map(({ id, shoeImage, released }) => (
        <Grid.Col
          id={id}
          xl={3}
          lg={4}
          md={6}
          sm={12}
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          <Link href={`/shoe/${id}`} passHref>
            <motion.div
              className={classes.svg}
              variants={variants}
              initial="initial"
              whileHover="hover"
              whileTap="hover"
              drag
              dragConstraints={{ top: -50, bottom: 50, right: 50, left: -50 }}
              dragSnapToOrigin
            >
              {shoeImage}
            </motion.div>
          </Link>
          <div>
            {released}
          </div>
        </Grid.Col>
      ))}
    </Grid>
  );
};

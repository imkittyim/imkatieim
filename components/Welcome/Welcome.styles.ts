import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
}));

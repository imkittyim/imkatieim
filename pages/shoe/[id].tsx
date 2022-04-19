import { Card, createStyles, Group, useMantineTheme, Text, Badge, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { shoeOptions } from '../../src/shoes/shoeOptions';

const useStyles = createStyles((theme, params: { color?: string }) => {
  const defaultColor = theme.colorScheme === 'dark' ? theme.colors.pink[1] : theme.colors.dark[8];
  return {
    shoe: {
      width: 500,
      cursor: 'pointer',
      path: {
        stroke: params.color || defaultColor,
        strokeWidth: '1px',
        fill: params.color || defaultColor,
        fillOpacity: 0.3,
      },
    },
  };
});

const variants = {
  tap: {
    scale: 1.2,
  },
};

export default function ShoePage() {
  const router = useRouter();
  const theme = useMantineTheme();
  const [color, setColor] = useState<string | undefined>(undefined);

  const { id } = router.query;
  const { classes } = useStyles({ color });

  const setRandomColor = useCallback(() => {
    const newColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${newColor}`);
  }, []);

  useEffect(() => {
    setColor(undefined);
  }, [theme.colorScheme]);

  const matchingShoe = shoeOptions.find((shoe) => shoe.id === id);
  if (!matchingShoe) {
    return <p>Shoe not found</p>;
  }

  const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Group spacing="xl" pt={40} px="10%" position="center">
      <motion.div
        variants={variants}
        initial="initial"
        whileTap="tap"
        whileHover="hover"
        className={classes.shoe}
        drag
        dragConstraints={{ left: -10, right: 10, top: -10, bottom: 300 }}
        onClick={setRandomColor}
      >
        {matchingShoe.shoeImage}
      </motion.div>
      <Box sx={{ minWidth: 200, maxWidth: 500 }}>
        <Card shadow="sm" p="lg" sx={{ minHeight: 200 }}>
          <Group>
            <Text sx={{fontSize: 40}} weight={700}>{matchingShoe.shoeName}</Text>
          </Group>

          <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
            <Text weight={500}>Release Date</Text>
            <Badge color="pink" variant="light">
              {matchingShoe.released}
            </Badge>
          </Group>

          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {matchingShoe.shoeDescription}
          </Text>
          <Text pt={10}>
            <a href={`https://www.google.com/search?q=${matchingShoe.shoeName}&sxsrf=APq-WBshGPq3t6KkYk90UjJxEdZ22i_KTQ:1650407165371&source=lnms&tbm=shop&sa=X&ved=2ahUKEwixic7mlaH3AhW_j3IEHZ_vAvIQ_AUoAXoECAIQAw&biw=969&bih=620&dpr=2.5`}>Buy me!</a>
          </Text>
        </Card>
      </Box>
    </Group>
  );
}

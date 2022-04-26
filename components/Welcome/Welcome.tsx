import { Title, Text, Box, Group, Card } from '@mantine/core';
import Jordan from '../icons/Jordan';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <Box>
      <Title className={classes.title} align="center" mt={50}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Nike's Most Iconic Shoes
      </Title>
      <Text className={classes.title} align="center" variant="gradient">
        Just Do It 
      </Text>
      <Group pt={100} position="center" spacing="xl">
        <Jordan />
        <div style={{ width: 600 }}>
          <Card
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.pink[2],
              color: theme.colorScheme === 'dark' ? theme.colors.pink[2] : theme.colors.dark[6],
            })}
          >
            This will be the intro text for the site. Talking about the years, how the site works, etc.
          </Card>
        </div>
      </Group>
    </Box>
  );
}

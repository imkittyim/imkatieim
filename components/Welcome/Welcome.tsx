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
            Welcome! What initially started out as Blue Ribbon Sports, Nike has evolved into one of the biggest shoe powerhouses in the world. This site features some of Nike's most iconic sneakers throughout history. 
            <br></br><br></br>
            Click into each of the shoes to learn more with some fun facts about them. Each of the shoes are interactable so feel free to click and drag them around the page. 
          </Card>
        </div>
      </Group>
    </Box>
  );
}

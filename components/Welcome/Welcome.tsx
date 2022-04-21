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
            The reason why I love Nike is very simple: I trust Nike. It is very difficult for an
            apparel or footwear company to build this kind of loyalty to its consumers. Nike is good
            at lots of things: manufacturing high quality and good-looking shoes; designing fashion
            or professional apparels; sponsoring lots of sports teams; and making tons of money. But
            where the company truly excels is its marking. There is no company doing branding like
            Nike. Nike dominates the sports gear industry because of their brilliant branding
            strategies. Nike has made a wonderful impression by its outstanding advertisements. Many
            established companies have rather timid advertising campaigns, preferring to rest on
            their laurels and history of success. Nike is not one of those companies. Instead, it’s
            constantly tinkering, innovating and pushing the envelope to create campaigns people
            will talk about. Nike has never been afraid to take chances with its ad campaigns. The
            company makes commercials you don’t forget. For example, Nike will focus on love,
            impossible, greatness, future and so on.
          </Card>
        </div>
      </Group>
    </Box>
  );
}

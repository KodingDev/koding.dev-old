import { Badge, Box, Spacer, Stack, Text, Wrap } from "@chakra-ui/react";
import React from "react";

interface Props {
  name: string;
  description: string;
  link?: string;
  tags: string[];
}

const tagColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
  "purple",
  "pink",
];

const Project = (props: Props) => (
  <Box
    borderRadius={4}
    borderWidth={1}
    as="a"
    href={props.link}
    target="_blank"
    rel="noreferrer"
  >
    <Stack p="5" h="100%">
      <Stack spacing="1" alignSelf="start">
        <Text textColor="blue.400">{props.name}</Text>
        <Text>{props.description}</Text>
      </Stack>
      <Spacer />
      <Wrap>
        {props.tags.map((tag, index) => (
          <Badge colorScheme={tagColors[index % tagColors.length]} key={tag}>
            {tag}
          </Badge>
        ))}
      </Wrap>
    </Stack>
  </Box>
);

export default Project;

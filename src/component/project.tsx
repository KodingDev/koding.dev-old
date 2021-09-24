import { Badge, Box, Link, Stack, Text, Wrap } from "@chakra-ui/react";
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
  <Box p="5" borderRadius={4} borderWidth={1}>
    <Stack gap={6}>
      <Text textColor="blue.400">
        <Link href={props.link ?? "#"} target="_blank">
          {props.name}
        </Link>
      </Text>
      <Text>{props.description}</Text>
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

import React, { useState } from "react";
import { Box, Heading, Text, Avatar, Input, Button, VStack, HStack, Divider, Textarea, Spacer, IconButton } from "@chakra-ui/react";
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim() !== "") {
      setPosts([...posts, { id: Date.now(), content: newPost }]);
      setNewPost("");
    }
  };

  return (
    <Box maxWidth="600px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" marginBottom={4}>
        LinkedIn Clone
      </Heading>

      <Box backgroundColor="white" borderRadius="md" padding={4} boxShadow="md">
        <HStack marginBottom={4}>
          <Avatar name="John Doe" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHx8fDE3MTEzMTQ5NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          <VStack align="start">
            <Heading as="h2" size="md">
              John Doe
            </Heading>
            <Text fontSize="sm" color="gray.500">
              Software Engineer
            </Text>
          </VStack>
        </HStack>
        <form onSubmit={handleSubmit}>
          <Textarea value={newPost} onChange={(e) => setNewPost(e.target.value)} placeholder="What's on your mind?" resize="none" marginBottom={2} />
          <Button colorScheme="blue" type="submit">
            Post
          </Button>
        </form>
      </Box>

      <VStack spacing={4} marginTop={4}>
        {posts.map((post) => (
          <Box key={post.id} backgroundColor="white" borderRadius="md" padding={4} boxShadow="md" width="100%">
            <Text>{post.content}</Text>
            <Divider marginY={2} />
            <HStack>
              <IconButton icon={<FaThumbsUp />} variant="ghost" aria-label="Like" />
              <IconButton icon={<FaComment />} variant="ghost" aria-label="Comment" />
              <IconButton icon={<FaShare />} variant="ghost" aria-label="Share" />
              <Spacer />
              <Text fontSize="sm" color="gray.500">
                {new Date(post.id).toLocaleString()}
              </Text>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;

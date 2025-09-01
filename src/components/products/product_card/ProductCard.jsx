import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Button,
  Divider,
  Text,
  ButtonGroup,
  Flex,
} from "@chakra-ui/react";

export const ProductCard = ({ img, model, brand, price }) => {
  return (
    <Flex justify={"center"} align={"center"} m={5}>
      <Card
        maxW="sm"
        w="300px" // Ancho fijo
        h="450px" // Alto fijo
        display="flex"
        flexDirection="column"
      >
        <CardBody flex="1" display="flex" flexDirection="column" p={4}>
          <Box
            h="250px" // Altura fija para todas las imágenes
            w="100%"
            mb={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
            borderRadius="lg"
          >
            <Image
              maxH={"100%"}
              maxW={"100%"}
              src={img}
              alt={model}
              borderRadius="lg"
              objectFit={"contain"}
            />
          </Box>
          <Stack spacing="3" flex="1" justify="space-between">
            <Heading size="md" noOfLines={2}>
              {brand} {model}
            </Heading>
            <Text color="blue.600" fontSize="2xl">
              USD {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Comprar
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Agregar al carrito
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Flex>
  );
};

export default ProductCard;

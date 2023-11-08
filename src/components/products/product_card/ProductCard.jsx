import { Box, Card, CardBody, CardFooter, Image, Stack,Heading,Button, Divider, Text, ButtonGroup, Flex } from '@chakra-ui/react'

export const ProductCard = ({img, model, brand, price,}) => {
  return (
    <Flex justify={'center'} align={'center'} m={5}>
    <Card maxW='sm'>
    <CardBody justifyContent={'center'} alignContent={'center'}>
      <Box
        h={'100%'}
        w={'100%'}>
        <Image
          h={'100%'}
          w={'100%'}
          src={img}
          alt={model}
          borderRadius='lg'
        />
      </Box>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{brand} {model}</Heading>
      <Text color='blue.600' fontSize='2xl'>
        USD {price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Comprar
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Agregar al carrito
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</Flex>
  )
}

export default ProductCard
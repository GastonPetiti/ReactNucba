import {Button} from '@chakra-ui/react'

export const CategoryCard = ({brand}) => {
  return (
        <Button
        w={'xs'}
        textAlign={'center'}
        bg={'orange.400'}
        fontSize={'md'}
        m={1}>
          {brand}
        </Button>
  )
}

export default CategoryCard
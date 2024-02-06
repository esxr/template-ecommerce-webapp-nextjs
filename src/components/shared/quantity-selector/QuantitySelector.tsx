import { Input } from '@chakra-ui/input';
import { Box, Button, Flex, FormControl, FormLabel, Text } from '@chakra-ui/react';
import { ShoppingCartIcon } from '@contentful/f36-icons';
import { useTranslation } from 'next-i18next';

export const QuantitySelector = () => {
  const { t } = useTranslation();

  return (
    <FormControl>
      <Text
        as={FormLabel}
        variant="small"
        fontWeight="600"
        letterSpacing="0.1rem"
        textTransform="uppercase">
        {t('product.quantity')}
      </Text>
      <Flex flexDirection="row" mt={2}>
        <Input width={16} min={0} textAlign="center" type="number" defaultValue="1" />
        <Button
          // snipcart data
          className="snipcart-add-item"
          data-item-id="starry-night"
          data-item-price="79.99"
          data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
          data-item-image="/assets/images/starry-night.jpg"
          data-item-name="The Starry Night"
          // end snipcart data
          ml={2}
          variant="primary"
          rightIcon={
            <Box as={ShoppingCartIcon} width="18px" height="18px" fill="white" variant="white" />
          }
          onClick={() => console.log('add to cart')}>
          {t('product.addToCart')}
        </Button>
      </Flex>
    </FormControl>
  );
};

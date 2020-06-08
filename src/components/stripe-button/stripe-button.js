import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    const PriceForStripe = price * 100;

    const onToken = token => {
        alert('Payment Successful!')
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description= {`Your Total is $${price}`}
            panelLabel='Pay Now'
            amount={PriceForStripe}
            stripeKey='pk_test_51GrgmKAIfinrAvv9ltJr4UepjjOLsCzrlULfE6vmfbiigAH5zuuSUEuiuO4r7N8ysUlRFHKBJNcMp8gY5k9UvqX500PXNiE8H6'
            token={onToken}
        />
    );
}

export default StripeButton;
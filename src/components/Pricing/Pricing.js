import React from 'react';
import { Button } from '../../globalStyles';
import { TiGroup } from 'react-icons/ti';
import { MdBusinessCenter, MdAttachMoney } from 'react-icons/md';

import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Offers & Promotions</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <TiGroup />
                </PricingCardIcon>
                <PricingCardPlan>Group Trip</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per room</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Triple room occupancy</PricingCardFeature>
                  <PricingCardFeature>Morning buffet</PricingCardFeature>
                  <PricingCardFeature>Jungle Safari</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <MdAttachMoney />
                </PricingCardIcon>
                <PricingCardPlan>Royal Service</PricingCardPlan>
                <PricingCardCost>$299.99</PricingCardCost>
                <PricingCardLength>per room</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Triple meal</PricingCardFeature>
                  <PricingCardFeature>Gym & Spa</PricingCardFeature>
                  <PricingCardFeature>Jungle Safari</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <MdBusinessCenter />
                </PricingCardIcon>
                <PricingCardPlan>Bussiness Trip</PricingCardPlan>
                <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>per room</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Conference Hall</PricingCardFeature>
                  <PricingCardFeature>Morning Buffet</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
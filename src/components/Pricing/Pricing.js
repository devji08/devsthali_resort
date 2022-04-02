import React from 'react';
import { Button } from '../../globalStyles';
import { TiGroup } from 'react-icons/ti';
import { MdBusinessCenter } from 'react-icons/md';
import { FaCrown } from 'react-icons/fa';

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
            <PricingCard to='/contact-us'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaCrown />
                </PricingCardIcon>
                <PricingCardPlan>Week-end Package</PricingCardPlan>
                <PricingCardCost>₹4500</PricingCardCost>
                <PricingCardLength>Per room</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Triple room occupancy</PricingCardFeature>
                  <PricingCardFeature>Morning buffet</PricingCardFeature>
                  <PricingCardFeature>Hi-Tea</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/contact-us'>
              <PricingCardInfo>
                <PricingCardIcon>
                <MdBusinessCenter />
                </PricingCardIcon>
                <PricingCardPlan>2N/3D Package</PricingCardPlan>
                <PricingCardCost>₹7000</PricingCardCost>
                <PricingCardLength>Per room</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Triple meal</PricingCardFeature>
                  <PricingCardFeature>Bon Fire</PricingCardFeature>
                  <PricingCardFeature>Games</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/contact-us'>
              <PricingCardInfo>
                <PricingCardIcon>
                <TiGroup />
                </PricingCardIcon>
                <PricingCardPlan>Family Package</PricingCardPlan>
                <PricingCardCost>₹3000</PricingCardCost>
                <PricingCardLength>Per room</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Triple Meal</PricingCardFeature>
                  <PricingCardFeature>Double occupancy</PricingCardFeature>
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
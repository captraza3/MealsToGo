import * as React from "react";
import star from "../../../../assets/star";
import { SvgXml } from "react-native-svg";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Icon,
  RestaurantCard,
  CardCover,
  Address,
  Info,
  Rating,
  SectionEnd,
  Section,
} from "./restaurant-info-card.styles";

export const RestaurantInfo = ({ restaurant = {} }) => {
  console.log("BBB");
  console.log(restaurant);
  const {
    name = "Restaurant Name",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2022/07/steak-tartare-and-beef-sashimi.jpg",
    ],
    address = "full address",
    isOpenNow = true,
    rating = 3,
    isCloseTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard>
      <CardCover key={name} source={{ uri: photos }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isCloseTemporarily && (
              <Text variant="error"> Close Temporarily </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address> {address} </Address>
      </Info>
    </RestaurantCard>
  );
};

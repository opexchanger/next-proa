export default function getCalculatedDiscount(travel) {
  travel.oldPrice = travel.price;

  if (travel.discount.format === 'absolute') {
    travel.price = travel.discount.absoluteValue;
    travel.valueOff = `-R$ ${travel.oldPrice - travel.price}`;
    return travel;
  }

  // por enquanto só tem outra opção que é o percentual
  travel.price = getValueOffPercentage(travel.oldPrice, travel.discount.percentageValue)
  travel.valueOff = `${travel.discount.percentageValue}%`;

  return travel;
}

function getValueOffPercentage(price, percentage) {
  const priceConverted = Number(price);
  const percentageValue = priceConverted * (Number(percentage) / 100);
  return Math.round(priceConverted - percentageValue);
}
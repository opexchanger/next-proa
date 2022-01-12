import { useEffect, useState } from 'react';
import { isFuture, isPast } from 'date-fns'

import Badge from "../../../components/Badge";
import DiscountTag from "../../../components/DiscountTag";

import styles from './travel-badges.module.scss';
import Timer from '../../../components/Timer';

export default function TravelBadges({ travel }) {
  const {
    departureDate,
    duration,
    hasAereo,
    hasChildFree,
    childFree,
    hasCortesy,
    cortesy,
    hasBlock,
    price,
    installments,
    hasDiscount,
    discount,
    oldPrice,
    valueOff
  } = travel;

  const [discountActive, setDiscountActive] = useState(hasDiscount);

  useEffect(() => {
    if (hasDiscount && discount.hasSchedule) {
      const discountExpirationDate = new Date(discount.schedule.endDate);
      const discountStartDate = discount.schedule.startDate ? new Date(discount.schedule.startDate) : null;

      if (isFuture(discountStartDate) || isPast(discountExpirationDate)) {
        setDiscountActive(false);
      }
    }
  }, [])

  return (
    <div className={styles.infos}>
      <Badge span={departureDate} text={<h4>{duration} dias</h4>} />
      {hasAereo && (
        <Badge
          icon
          span={<img src='/img/icons/plane.png' alt="Ícone avião" />}
          text={<p>Com aéreo</p>}
        />
      )}
      {hasChildFree && (
        <Badge
          icon
          span={<img src='/img/icons/child.png' alt="Ícone crianças" />}
          text={
            <p style={{ fontSize: '1.5rem' }}>
              {childFree.quantity} CHD FREE até {childFree.age} anos
            </p>
          }
        />
      )}
      {hasCortesy && (
        <Badge
          icon
          span={<img src='/img/icons/coconut.png' alt="Ícone Coqueiro de Praia" />}
          text={
            <>
              <h5>Cortesia</h5>
              <p style={{ fontSize: '1.5rem' }}>{cortesy}</p>
            </>
          }
        />
      )}
      {hasBlock && (
        <Badge
          icon
          span={<img src='/img/icons/lock.png' alt="Ícone cadeado" />}
          text={<h5>Bloqueio</h5>}
        />
      )}
      {discountActive ? (
        <div className={styles.price}>
          <h5>A partir de</h5>
          <h2 className={styles.priceRisked}>
            <span>R$</span>
            {oldPrice}
          </h2>
          <h2 className={styles.priceTag}>
            <span>R$</span>
            {price}
          </h2>
          <h5>
            Em até <span>{installments}x</span>
          </h5>
          <DiscountTag value={valueOff} format={discount.format} />
        </div>
      ) :
        <div className={styles.price}>
          <h5>A partir de</h5>
          <h2 className={styles.priceTag}>
            <span>R$</span>
            {price}
          </h2>
          <h5>
            Em até <span>{installments}x</span>
          </h5>
        </div>
      }

      {discountActive && discount.schedule?.hasCountdown && (
        <div className={styles.countdownWrapper}>
          <Timer countUntil={discount.schedule.endDate} format={['days', 'hours', 'minutes']} />
        </div>
      )}

    </div>
  )
}
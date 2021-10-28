import Badge from "../../../components/Badge";

import styles from './travel-badges.module.scss';

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
    installments
  } = travel;

  return (
    <div className={styles.infos}>
      <Badge span={departureDate} text={<h4>{duration} dias</h4>} />
      {hasAereo && (
        <Badge
          icon
          span={<img src='/img/icons/plane.png' />}
          text={<p>Com aéreo</p>}
        />
      )}
      {hasChildFree && (
        <Badge
          icon
          span={<img src='/img/icons/child.png' />}
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
          span={<img src='/img/icons/coconut.png' />}
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
          span={<img src='/img/icons/lock.png' />}
          text={<h5>Bloqueio</h5>}
        />
      )}
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
    </div>
  )
}
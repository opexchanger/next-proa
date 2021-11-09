import { urlFor } from "../../sanity/imageUrl";
import Section from '../Section';

import styles from './testimonials.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import { Button } from '../Buttons';

export default function Testimonials({ data }) {
  const { testimonials, testimonialsTitle } = data;

  return (
    <Section addClasses={[styles.testimonials]}>
      <div className={utilStyles.container}>
        <Section.Title>{testimonialsTitle}</Section.Title>
        <div className={styles.wrapper}>
          {testimonials.slice(0, 4).map(({ _key, name, photo, text }) => (
            <div key={_key} className={styles.card}>
              <div className={styles.card__image}>
                <img
                  src={urlFor(photo).width(200).height(200).url()}
                  alt="Foto do cliente da Proa"
                />
              </div>
              <div className={styles.card__content}>
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
        <Button type="cta" selfCenter>Agende agora</Button>
      </div>
    </Section>
  )
}

import BlockContent from '@sanity/block-content-to-react';

import Section from '../../components/Section';
import NewsletterForm from '../Form/NewsletterForm';

import styles from './newsl.module.scss';
import utilStyles from '../../styles/utils.module.scss';

export default function NewsletterSignIn({ data }) {
  const { newsletterTitle, newsletterText, newsletterConfig } = data;

  const { groupId, fields, messages } = newsletterConfig;

  return (
    <Section addClasses={[styles.newsletter]}>
      <div className={utilStyles.container}>
        <Section.Title left>{newsletterTitle}</Section.Title>
        <Section.Paragraph style={{ marginBottom: '4rem', textAlign: 'left', maxWidth: '800px' }}>
          <BlockContent blocks={newsletterText} />
        </Section.Paragraph>

        <NewsletterForm
          fields={fields}
          groupId={groupId}
          messages={messages}
        />
      </div>
    </Section>
  );
}

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';

export default function FAQPage(props) {
  return (
    <FAQScreen {...props} />
  );
}

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((response) => response.json())
    .then((result) => result.data);

  return {
    props: {
      faqCategories,
    },
  };
}

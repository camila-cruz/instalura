/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function FAQPage(props) {
  return (
    <FAQScreen {...props} />
  );
}

FAQPage.propTypes = FAQScreen.propTypes;

export default websitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'FAQ',
    },
  },
});

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

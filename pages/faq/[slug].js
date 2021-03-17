import React from 'react';
import FAQQuestionScreen from '../../src/components/screens/FAQQuestionScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function FAQInternalPage({ category, question }) {
  return <FAQQuestionScreen category={category} question={question} />;
}

FAQInternalPage.propTypes = FAQQuestionScreen.propTypes;

export default websitePageHOC(FAQInternalPage);

export async function getStaticProps({ params }) {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then(async (res) => {
      const resposta = await res.json();
      return resposta.data;
    });

  const dadosDaPagina = faqCategories.reduce((acumulador, faqCategory) => {
    const questionFound = faqCategory.questions.find((question) => question.slug === params.slug);

    if (questionFound) {
      return {
        ...acumulador,
        category: faqCategory,
        question: questionFound,
      };
    }

    return acumulador;
  }, {});

  return {
    props: {
      category: dadosDaPagina.category,
      question: dadosDaPagina.question,
      pageWrapperProps: {
        seoProps: {
          headTitle: dadosDaPagina.question.title,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then(async (res) => {
      const resposta = await res.json();
      return resposta.data;
    });

  const paths = faqCategories.reduce((accPaths, faqCategory) => {
    const questionPaths = faqCategory.questions.map((question) => {
      const questionSlug = question.slug;
      return { params: { slug: questionSlug } };
    });

    return [
      ...accPaths,
      ...questionPaths,
    ];
  }, []);

  return {
    paths,
    fallback: false,
  };
}

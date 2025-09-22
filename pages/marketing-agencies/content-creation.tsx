import React from 'react';
import { GetStaticProps } from 'next';
import { marketingAgenciesPageData } from '../../data/pages/marketingAgencies';
import { GenericPageHero, CTA, BenefitsGrid } from '../../components/PageBuilder';

const ContentCreationPage = ({ subcategory }: any) => {
  if (!subcategory) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <GenericPageHero title={subcategory.hero.title} subtitle={subcategory.hero.subtitle} />
      <div className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <BenefitsGrid {...subcategory.content} />
        </div>
      </div>
      <CTA />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const subcategory = marketingAgenciesPageData.subCategories.find(
    (sub) => sub.slug === 'content-creation'
  );
  return {
    props: {
      subcategory,
    },
  };
};

export default ContentCreationPage;

import React from 'react';
import { GetStaticProps } from 'next';
import { marketingAgenciesPageData } from '../../data/pages/marketingAgencies';
import { GenericPageHero, CTA, PageFeatureGrid } from '../../components/PageBuilder';

const SeoSemServicesPage = ({ subcategory }: any) => {
  if (!subcategory) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <GenericPageHero title={subcategory.hero.title} subtitle={subcategory.hero.subtitle} />
      <div className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <PageFeatureGrid {...subcategory.content} />
        </div>
      </div>
      <CTA />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const subcategory = marketingAgenciesPageData.subCategories.find(
    (sub) => sub.slug === 'seo-sem-services'
  );
  return {
    props: {
      subcategory,
    },
  };
};

export default SeoSemServicesPage;

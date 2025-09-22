import React from 'react';
import type { GetStaticProps, GetStaticPaths } from 'next';
import { GenericPageHero, CTA, ContentSection } from '../../components/PageBuilder';
import { blogPosts } from '../../data/pages/blog';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
}

interface BlogPostPageProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, relatedPosts }) => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center text-sm text-slate-500 dark:text-slate-400 mb-4">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
              {post.description}
            </p>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <Image 
              src={post.image} 
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <ContentSection
            title="Introduction"
            text="WhatsApp has evolved far beyond simple messaging. Today, forward-thinking businesses are leveraging WhatsForm to create sophisticated, interactive workflows that engage customers where they're most comfortable—inside their favorite messaging app."
          />

          <ContentSection
            title="Key Benefits"
            text="With WhatsForm, businesses experience higher engagement rates, reduced friction in customer interactions, and the ability to automate complex workflows while maintaining a personal touch. This transformation is reshaping how companies think about customer communication."
          />

          <ContentSection
            title="Implementation Strategy"
            text="Getting started is simpler than you might think. Our no-code approach means you can design powerful WhatsApp workflows using familiar tools like Excel sheets or our intuitive drag-and-drop builder. No developer required."
          />

          <ContentSection
            title="Real-World Results"
            text="Companies using WhatsForm report significant improvements in customer satisfaction, operational efficiency, and overall business metrics. The conversational nature of WhatsApp creates a more engaging experience that drives results."
          />
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <article key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={relatedPost.image} 
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
                      <span>{relatedPost.author}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white leading-tight">
                      {relatedPost.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 flex-grow text-sm leading-relaxed">
                    {relatedPost.description}
                  </p>
                  <Link href={relatedPost.slug} legacyBehavior>
                    <a className="mt-4 inline-flex items-center text-green-600 font-semibold hover:text-green-700 dark:hover:text-green-400 transition-colors">
                      Read More 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug.replace('/blog/', '') },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = `/blog/${params?.slug}`;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { notFound: true };
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug);
  const relatedPosts = otherPosts
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return {
    props: {
      post: {
        slug: post.slug,
        title: post.title,
        description: post.excerpt,
        image: post.image,
        author: post.author,
        date: post.date,
        readTime: post.readTime,
      },
      relatedPosts: relatedPosts.map(p => ({
        slug: p.slug,
        title: p.title,
        description: p.excerpt,
        image: p.image,
        author: p.author,
        date: p.date,
        readTime: p.readTime,
      })),
    },
  };
};

export default BlogPostPage;

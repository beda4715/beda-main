import { notFound } from 'next/navigation';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  try {
    const { slug } = await params;
    const post = await import(`@/content/${slug}.mdx`);

    return <post.default />;
  } catch {
    return notFound();
  }
}

export async function generateMetadata({ params }: PostPageProps) {
  try {
    const { slug } = await params;
    const post = await import(`@/content/${slug}.mdx`);

    return {
      title: post.metadata.title,
      description: post.metadata.description,
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

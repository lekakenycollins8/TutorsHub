import { Container, Typography, Box, Chip, Divider } from '@mui/material';
import { CalendarToday, AccessTime } from '@mui/icons-material';
import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface Props {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen py-16 bg-gray-50">
      <Container maxWidth="lg">
        <article className="bg-white rounded-lg shadow-lg p-8">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Chip 
                label={post.category}
                size="small"
                className="mb-4 bg-purple-100 text-purple-700"
              />
              <Typography variant="h1" className="text-4xl font-bold mb-4">
                {post.title}
              </Typography>
              <Box className="flex items-center gap-4 text-gray-600">
                <Box className="flex items-center gap-1">
                  <CalendarToday fontSize="small" />
                  <Typography variant="body2">{post.date}</Typography>
                </Box>
                <Box className="flex items-center gap-1">
                  <AccessTime fontSize="small" />
                  <Typography variant="body2">{post.readTime}</Typography>
                </Box>
              </Box>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="prose max-w-none">
              <Typography variant="body1" className="text-gray-800 leading-relaxed">
                {post.content}
              </Typography>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}
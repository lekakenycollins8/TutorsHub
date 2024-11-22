import { Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material';
import { AccessTime, CalendarToday } from '@mui/icons-material';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="no-underline">
      <Card className="h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <CardMedia
          component="img"
          height="200"
          image={post.image}
          alt={post.title}
          className="h-48 object-cover"
        />
        <CardContent className="p-6">
          <Box className="mb-4 flex justify-between items-center">
            <Chip 
              label={post.category}
              size="small"
              className="bg-purple-100 text-purple-700 font-medium"
            />
          </Box>
          <Typography
            variant="h5"
            component="h2"
            className="font-bold text-gray-800 mb-2 line-clamp-2"
          >
            {post.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="mb-4 line-clamp-2"
          >
            {post.description}
          </Typography>
          <Box className="flex items-center gap-4 text-gray-600 mt-auto">
            <Box className="flex items-center gap-1">
              <CalendarToday fontSize="small" />
              <Typography variant="caption">{post.date}</Typography>
            </Box>
            <Box className="flex items-center gap-1">
              <AccessTime fontSize="small" />
              <Typography variant="caption">{post.readTime}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
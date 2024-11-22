import { Grid } from '@mui/material';
import BlogCard from './BlogCard';
import { blogPosts } from '@/data/blog';

export default function BlogList() {
  return (
    <Grid container spacing={4}>
      {blogPosts.map((post) => (
        <Grid item xs={12} md={6} lg={4} key={post.id}>
          <BlogCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
}
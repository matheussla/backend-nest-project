import { PrismaClient } from '@prisma/client';

import { seedBlogPosts } from './blog-post.seed';
import { seedComments } from './comment.seed';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  try {
    console.info('Starting database seeding...');

    await prisma.comment.deleteMany();
    await prisma.blogPost.deleteMany();

    await seedBlogPosts(prisma);
    await seedComments(prisma);

    console.info('Database seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error('Fatal error during seeding:', error);
  process.exit(1);
});

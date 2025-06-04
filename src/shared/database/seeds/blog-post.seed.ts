import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

export async function seedBlogPosts(prisma: PrismaClient): Promise<void> {
  try {
    console.info('🌱 Starting blog post seeding...');

    const blogPosts = Array.from({ length: 50 }, () => ({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(3),
    }));

    for (const blogPostData of blogPosts) {
      await prisma.blogPost.create({
        data: blogPostData,
      });
    }

    console.info('✅ Blog post seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding blog posts:', error);
    throw error;
  }
}

export default seedBlogPosts;

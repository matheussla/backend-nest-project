import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

export async function seedComments(prisma: PrismaClient): Promise<void> {
  try {
    console.info('🌱 Starting comment seeding...');

    const blogPosts = await prisma.blogPost.findMany();

    for (const blogPost of blogPosts) {
      const commentCount = faker.number.int({ min: 2, max: 5 });

      const comments = Array.from({ length: commentCount }, () => ({
        content: faker.lorem.paragraph(),
        blogPostId: blogPost.id,
      }));

      for (const commentData of comments) {
        await prisma.comment.create({
          data: commentData,
        });
      }
    }

    console.info('✅ Comment seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding comments:', error);
    throw error;
  }
}

export default seedComments;

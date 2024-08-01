import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// async function main() {
//   // Create a new movie with cast members
//   const movie = await prisma.movie.create({
//     data: {
//       name: 'Inception',
//       created_at: new Date(),
//       cast: {
//         create: [
//           { name: 'Leonardo DiCaprio', description: 'Cobb' },
//           { name: 'Joseph Gordon-Levitt', description: 'Arthur' },
//         ],
//       },
//     },
//   });

//   console.log(movie);

//   // Fetch all movies with their cast members
//   const movies = await prisma.movie.findMany({
//     include: { cast: true },
//   });

//   console.log(movies);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
export default prisma
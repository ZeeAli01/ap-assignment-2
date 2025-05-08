import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'GET':
      try {
        const genre = await prisma.genres.findUnique({
          where: {
            id: id
          }
        });

        if (!genre) {
          return res.status(404).json({ success: false, message: 'Genre not found' });
        }

        const movies = await prisma.movies.findMany({
          where: {
            genre_id: id
          },
          include: {
            directors: true,
            genres: true,
          }
        });

        res.status(200).json({ 
          success: true, 
          data: { 
            genre: genre,
            movies: movies
          }
        });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;
      
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
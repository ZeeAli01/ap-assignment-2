import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'GET':
      try {
        const director = await prisma.directors.findUnique({
          where: {
            id: id
          },
          include: {
            movies: {
              include: {
                genres: true
              }
            }
          }
        });

        if (!director) {
          return res.status(404).json({ success: false, message: 'Director not found' });
        }

        res.status(200).json({ success: true, data: director });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;
      
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
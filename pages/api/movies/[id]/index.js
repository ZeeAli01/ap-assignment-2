import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      try {
        const movie = await prisma.movies.findUnique({
          where: {
            id: id,
          },
          include: {
            directors: true,
            genres: true,
          },
        });

        if (!movie) {
          return res
            .status(404)
            .json({ success: false, message: "Movie not found" });
        }

        res.status(200).json({ success: true, data: movie });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

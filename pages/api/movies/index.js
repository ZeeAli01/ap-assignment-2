import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  if (method === "GET") {
    try {
      const movies = await prisma.movies.findMany({
        include: {
          directors: true,
          genres: true,
        },
      });
      res.status(200).json({ success: true, data: movies });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}

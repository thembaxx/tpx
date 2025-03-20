import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUser(email: string) {
  try {
    const res = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return res;
  } catch (error) {
    console.debug(error);
    return null;
  }
}

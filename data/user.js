import { prisma } from "@/lib/prisma";
import { verifySession } from "@/lib/session";
import { cache } from "react";

export const getUser = cache(
  async () => {
    const session = await verifySession();

    const data = await prisma.user.findFirst({
      where: { id: session.userId },
      select: {
        id: true,
        name: true,
        email: true,
        imageUrl: true,
        isAdmin: true,
      },
    });

    return data;
  },
  {
    revalidate: 60 * 60 * 24,
  }
);

"use server";

import { prisma } from "@/lib/prisma";
import { cache } from "react";

export const getAllCategories = cache(async () => {
  return await prisma.category.findMany();
}, ["categories"]);

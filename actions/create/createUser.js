"use server";

import { registerFormSchema } from "@/lib/definitions";
import bcrypt from "@node-rs/bcrypt";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/session";

export const createUser = async (state, formData) => {
  // 1- Validation
  const validationResult = registerFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validationResult.data;
  // 2- Create User

  const hashedPassword = await bcrypt.hash(password, 10);

  const data = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  const user = data;

  // Create Session

  await createSession(user.id);
};

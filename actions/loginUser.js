"use server";

import { loginFormSchema } from "@/lib/definitions";
import bcrypt from "@node-rs/bcrypt";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/session";

export const loginUser = async (state, formData) => {
  // 1- Validation
  const validationResult = loginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validationResult.data;

  // 2. Fetch User by Email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return { errors: { email: ["E-Mail not found"] } };
  }

  // 3. Check Password
  const isPasswordValid = await bcrypt.verify(password, user.hashedPassword);

  if (!isPasswordValid) {
    return { errors: { password: ["Incorrect password"] } };
  }

  // 4. Create Session
  await createSession(user.id);

  return { success: true };
};

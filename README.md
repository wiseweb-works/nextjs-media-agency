# Next.js Media Agency Platform

A modern, fullstack web application built with **Next.js 15**, designed for media agencies to manage content, users, and interactions — all without a separate backend server. Using **Server Actions**, **Prisma**, and **Zod**, it provides a scalable and secure architecture with clean design and maintainable code.

## 🚀 Features

- **Fullstack Architecture with Server Actions** – No traditional backend needed
- **Prisma ORM** – Type-safe database interactions
- **Zod Validation** – Schema-based form and input validation
- **Authentication** – Passwords securely hashed with `@node-rs/bcrypt`
- **Headless UI + Heroicons** – Accessible and elegant UI components
- **Fully Typed** – Built with TypeScript and Zod for maximum safety
- **Next.js App Router** – Modern routing and server component architecture
- **Responsive Design** – Styled with Tailwind CSS 4

## 🧱 Tech Stack

| Layer      | Tools & Libraries                             |
| ---------- | --------------------------------------------- |
| Framework  | Next.js 15 (with App Router + Server Actions) |
| Styling    | Tailwind CSS 4, Headless UI, Heroicons        |
| Database   | PostgreSQL (via Prisma ORM)                   |
| Auth       | bcrypt, jose (JWT signing and encryption)     |
| Validation | Zod (beta v4)                                 |
| Language   | TypeScript                                    |

## 📸 Screenshots / Demo

### User Pages

|              Login Page               |              Register Page               |
| :-----------------------------------: | :--------------------------------------: |
| ![](./images/Login-Page.png?raw=true) | ![](./images/Register-Page.png?raw=true) |

|              Home Page              |              All Posts               |
| :---------------------------------: | :----------------------------------: |
| ![](./images/Homepage.png?raw=true) | ![](./images/All-Posts.png?raw=true) |

|               Singe Category               |              Nested Categories               |
| :----------------------------------------: | :------------------------------------------: |
| ![](./images/Single-Category.png?raw=true) | ![](./images/Nested-Categories.png?raw=true) |

### Admin Pages

|                Admin Dashboard                |              Create Post               |
| :-------------------------------------------: | :------------------------------------: |
| ![](./images/Dashboard-Homepage.png?raw=true) | ![](./images/Create-Post.png?raw=true) |

|              Latest Posts               |              Comment Management               |
| :-------------------------------------: | :-------------------------------------------: |
| ![](./images/Latest-Posts.png?raw=true) | ![](./images/Comment-Management.png?raw=true) |

## 🗂 Database Schema Overview

This application uses a relational database defined with **Prisma ORM**. Below is an overview of the data models and their relationships:

<details>
<summary>🧑‍💼 <code>User</code></summary>

- Stores user information.
- Relations:
  - One-to-many with <code>Post</code>
  - One-to-many with <code>Comment</code>

| Field          | Type    | Notes                          |
| -------------- | ------- | ------------------------------ |
| id             | String  | Primary key (CUID)             |
| name           | String  |                                |
| email          | String  | Unique                         |
| hashedPassword | String  |                                |
| imageUrl       | String? | Optional profile image         |
| isAdmin        | Boolean | Defaults to <code>false</code> |

</details>

<details>
<summary>📝 <code>Post</code></summary>

- Represents a blog/news article.
- Relations:
  - Belongs to one <code>User</code> (author)
  - Belongs to one <code>Category</code>
  - One-to-many with <code>Comment</code>

| Field      | Type     | Notes                               |
| ---------- | -------- | ----------------------------------- |
| id         | String   | Primary key (CUID)                  |
| title      | String   |                                     |
| slug       | String   | Unique                              |
| content    | String   |                                     |
| imageUrl   | String?  | Optional image                      |
| published  | Boolean  | Defaults to <code>false</code>      |
| authorId   | String   | Foreign key → <code>User</code>     |
| categoryId | String   | Foreign key → <code>Category</code> |
| createdAt  | DateTime | Default now(), indexed              |
| updatedAt  | DateTime | Auto-updated                        |

</details>

<details>
<summary>🗃 <code>Category</code></summary>

- Used to group posts under categories (e.g., News, Design).
- Relations:
  - One-to-many with <code>Post</code>

| Field | Type   | Notes       |
| ----- | ------ | ----------- |
| id    | String | Primary key |
| name  | String | Unique      |
| slug  | String | Unique      |

</details>

<details>
<summary>💬 <code>Comment</code></summary>

- Stores comments on posts.
- Relations:
  - Belongs to one <code>User</code>
  - Belongs to one <code>Post</code>

| Field     | Type     | Notes                           |
| --------- | -------- | ------------------------------- |
| id        | String   | Primary key (CUID)              |
| content   | String   |                                 |
| published | Boolean  | Defaults to <code>false</code>  |
| postId    | String   | Foreign key → <code>Post</code> |
| authorId  | String   | Foreign key → <code>User</code> |
| createdAt | DateTime | Default now()                   |

</details>

## 🖼 Visual Schema

![ERD-Diagram](./images/ERD-Diagram.png?raw=true)

## 📦 Installation

```bash
git clone https://github.com/wiseweb-works/nextjs-media-agency.git
cd nextjs-media-agency
pnpm install
```

## 🧪 Local Development

```bash
pnpm run dev
```

## 🔨 Build for Production

```bash
pnpm run build
pnpm start
```

## 🛠 Environment Variables

Create a `.env` file in the root directory with the following:

```
DATABASE_URL=""
SECRET=""
```

## 🧬 Prisma Setup

```bash
npx prisma generate
npx prisma migrate dev --name init
```

## 📚 What I Learned

- Leveraged **Next.js Server Actions** to simplify API architecture without an external server.
- Improved DX and maintainability using **Zod** for type-safe validation.
- Strengthened security with hashed passwords and JWT-based auth flow.
- Explored the power of Prisma as a modern ORM with migration support and type inference.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma ORM](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/)
- [Headless UI](https://headlessui.com/)
- [Heroicons](https://heroicons.com/)

## 📄 License

MIT © [Abdullah Koyuncu](https://github.com/wiseweb-works)

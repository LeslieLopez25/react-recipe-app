<h1>Recipe App :hamburger:</h1>

<p>This Recipe App is a fullstack project. It allows users to view, add, and manage their favorite recipes. It was built using React for the frontend, Node.js with Prisma for the backend using a Postgres database.</p>

<p>This project was built following the tutorial of 
Chris Blakely. Somethings have been changed from the original tutorial such as my project using Tembo to host my database from the one he uses and getting my fullstack project to be deployed as the tutorial doesn't cover how to deploy the project.</p>

<h2>Getting Started</h2>

<h3>Prerequisites:</h3>

- Node.js and npm installed on your machine.
- An account to host your database. I used [Tembo](https://tembo.io/).
- A [Spoonacular API key](https://spoonacular.com/food-api) for the recipe API.

**Setting up the Backend**:

- Create a folder for your backend and navigate to the backend directory:

```bash
cd backend
```

- Install the necessary packages:

  ```bash
  npm install
  ```

- **Spoonacular API**:

  - Add the api key to the API_KEY variable in the .env file.

- **Tembo Setup**:

  - Create a new database instance on Tembo.
  - Copy the connection string provided by Tembo.

- **Prisma Setup**:

  - Replace the `DATABASE_URL` in the `.env` file with your Tembo connection string.
  - Initialize Prisma and generate the Prisma client:
    ```bash
    npx prisma init
    npx prisma generate
    ```

- Start the backend server:
  ```bash
  npm start
  ```

**Setting up the Frontend**:

- Navigate to the frontend directory:

  ```bash
  cd frontend
  ```

- Install the necessary packages:

  ```bash
  npm install
  ```

- Start the frontend development server:
- ```bash
  npm run dev
  ```

### Link

- Live site: [Recipe App](https://flavor-beat.netlify.app/)

### Screenshots

<img src="./frontend/assets/homepage.png" width="400">
<img src="./frontend/assets/recipes.png" width="400">
<img src="./frontend/assets/favorites.png" width="400">

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

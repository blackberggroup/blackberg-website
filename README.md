# Blackberg Group Website 

This project is a redesign and update from the current company website

View dev: []()
View live: []()

## Project Structure

The project follows a standard structure with source files in the `src` directory and production-ready files in the `dist` directory.

- `src`: Contains all the source files
- `app`: Contains all Next.js files inlcuding components, APIs, and assets
- `pages`: Contains all pages, utilizng Next.js router

## Development Setup

To set up the project for development, you'll need Node.js and npm installed on your machine. Then follow these steps:

## Getting Started

First, install all dependencies:

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Deploy 

The project is setup to deploy on Vercel. For security purposes enviroment variables including Hygraph keys and endpoints will be setup through the Vercel website. 

CI/CD is utilized with GitHub actions. The website is built and deployed on every push to the main branch. 

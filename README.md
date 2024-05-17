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

## Hygraph

To load data from Hygraph you will need to setup a .env.local file in the root directory. This is not stored in the repository for security purposes. Once you create the file add these two keys and get the values by logging into your Hygraph project. 

```bash
NEXT_PUBLIC_HYGRAPH_ENDPOINT=""
HYGRAPH_TOKEN=""
```

## Deploy 

The project is setup to deploy on Vercel. The key/values in the .env.local file need to be added to the Vercel deployment configuration to work properly. 

CI/CD is utilized with GitHub actions. The website is built and deployed on every push to the main branch. 

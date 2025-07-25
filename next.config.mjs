// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   output: "export", // Option recommandée pour les builds sur Vercel
//   experimental: {
//     appDir: true // Assure-toi que cette option est activée si tu utilises le dossier "app/"
//   },
//   images: {
//     unoptimized: true // Nécessaire si tu utilises `next/image` avec un export statique
//   }
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  }
};

export default nextConfig;

import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        // Use Netlify’s “Git Gateway” authentication and target our default branch
        backend: {
          name: "git-gateway",
          branch: "latest",
        },
        // Configure where our media assets are stored & served from
        media_folder: "public/assets/blog",
        public_folder: "/assets/blog",
        locale: "pt",
        publish_mode: "editorial_workflow",
        // Configure the content collections
        collections: [
          {
            name: "posts",
            label: "Blog Posts",
            label_singular: "Blog Post",
            folder: "src/pages/posts",
            create: true,
            delete: true,
            fields: [
              {
                name: "title",
                widget: "string",
                label: "Post Title",
              },
              {
                name: "publishDate",
                widget: "datetime",
                format: "DD/MM/YYYY",
                date_format: "DD/MM/YYYY",
                time_format: false,
                label: "Publish Date",
              },
              {
                name: "author",
                widget: "hidden",
                label: "Author Name",
                required: false,
                default: "Diego Ayres",
              },
              {
                name: "authorURL",
                widget: "hidden",
                label: "Author URL",
                required: false,
                default: "https://diegoayres.com",
              },
              {
                name: "thumbnail",
                widget: "image",
                label: "Featured Image",
                choose_url: true,
                default: "public/assets/blog/header.png",
                multiple: false,
              },
              {
                name: "description",
                widget: "string",
                label: "Description",
                required: false,
              },
              {
                name: "body",
                widget: "markdown",
                label: "Post Body",
              },
              {
                name: "layout",
                widget: "select",
                default: "../../layouts/BlogPost.astro",
                options: [
                  {
                    label: "Blog Post",
                    value: "../../layouts/BlogPost.astro",
                  },
                ],
              },
            ],
          },
        ],
      },
      previewStyles: ["src/styles/blog.css"],
    }),
    tailwind(),
    sitemap(),
  ],
});

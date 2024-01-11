import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "4z99itob",
    dataset: "production",
    title: "My personal website",
    apiVersion: "2023-03-04",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas },
})

export default config;
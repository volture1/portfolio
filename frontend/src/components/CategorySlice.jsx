import { createSlice } from "@reduxjs/toolkit";
import ljudio from "../assets/ljudio.jpg"
import youarehere from "../assets/youarehere.jpg";
import glock17 from "../assets/glock17.png"
import househill from "../assets/househill.png"
import quake from "../assets/quake.jpg"
export const categorySlice = createSlice({
  name: "categorySliceTest",
  initialState: {
    category: [
      {
        category: "Applications",
        image:
          "https://www.lighthouselabs.ca/uploads/post/open_graph_image/459/Coding-vs-programming.jpg",
        route: "applications",
        projects: [
          {
            name: "Ljudio",
            description:
              "A music app that is using the youtube music API, created during education as a group project.",
            tools: "React, NodeJS & MongoDB",
            image: ljudio,
            link: "http://www.google.com/",
            linkText: "GITHUB",
          },
          {
            name: "Portfolio website",
            description:
              "This very website! Created with style to hold my projects.",
            tools: "React, Redux Toolkit & Material UI",
            image: youarehere,
            link: "http://youtube.com/",
            linkText: "GO TO HOMEPAGE",
          },
        ],
      },
      {
        category: "Games",
        image:
          "https://forum.substance3d.com/attachments/images/8e851fd1d40be023d60b2a6f3a6aeaf2.png",
        route: "games",
        projects: [],
      },
      {
        category: "Level design",
        image: "https://cdn.80.lv/api/upload/content/46/5d28c0bf0f271.jpg",
        route: "level-design",
        projects: [
          {
            name: "Arena_pillars",
            description: "A quake type map created for a PVP arena in unity. ",
            tools: "Unity, Blender",
            image: quake,
            link: "http://www.google.com/",
            linkText: "GITHUB",
          },
        ],
      },
      {
        category: "3D modelling",
        image: "https://wallpapercave.com/wp/wp9380795.png",
        route: "3d-modelling",
        projects: [
          {
            name: "Glock 17 low poly",
            description:
              "Low poly model of the weapon Glock 17. Created as a model to be used in a game",
            tools: "Blender, Photoshop",
            image: glock17,
            link: "http://www.google.com/",
            linkText: "DOWNLOAD MODEL",
          },
          {
            name: "Futuristic Boxhouse",
            description:
              "Full render of a futuristic boxhouse on a hill. Everything made from scratch.",
            tools: "Blender, Photoshop",
            image: househill,
            link: "http://www.google.com/",
            linkText: "DOWNLOAD MODEL",
          },
        ],
      },
    ],
  },
});

export const selectCategories = (state) => state.categorySlice;
export default categorySlice.reducer;
import { TechStackType } from "../types";

export default {
  stack: [
    { title: "UI Library", key: "uis" },
    { title: "State Management", key: "states" },
    { title: "Router", key: "routers" },
    { title: "Testing", key: "testings" },
    { title: "Build Tools", key: "buildTools" },
  ],
  uis: [
    {
      name: "Ant Design",
      logo: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      homepage: "https://ant-design.antgroup.com",
      description:
        "Help designers/developers building beautiful products more flexible and working with happiness.",
      tags: [],
      components: 30,
      github: {
        url: "https://github.com/ant-design/ant-design",
        stars: 89383,
      },
    },
  ],
  states: [
    {
      name: "React Redux",
      logo: "https://react-redux.js.org/img/redux.svg",
      homepage: "https://react-redux.js.org",
      description:
        "React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.",
      tags: [],
      github: {
        url: "https://github.com/reduxjs/react-redux",
        stars: 23162,
      },
      features: {
        ReducerBased: true,
      },
    },
    {
      name: "Valtio",
      logo: "",
      homepage: "https://valtio.pmnd.rs",
      description: "Valtio makes proxy-state simple for React and Vanilla.",
      tags: [],
      github: {
        url: "https://github.com/pmndrs/valtio",
        stars: 8156,
      },
      features: {
        MutableBased: true,
      },
    },
    {
      name: "Jotai",
      logo: "https://cdn.candycode.com/jotai/jotai-mascot.png",
      homepage: "https://jotai.org",
      description: "Primitive and flexible state management for React.",
      tags: [],
      github: {
        url: "https://github.com/pmndrs/jotai",
        stars: 16656,
      },
      features: {
        AtomBased: true,
      },
    },
    {
      name: "Recoil",
      logo: "https://recoiljs.org/zh-hans/img/logo.svg",
      homepage: "https://recoiljs.org",
      description: "A state management library for React.",
      tags: [],
      github: {
        url: "https://github.com/facebookexperimental/Recoil",
        stars: 19354,
      },
      features: {
        AtomBased: true,
      },
    },
    {
      name: "Zustand",
      logo: "",
      homepage: "https://zustand-demo.pmnd.rs",
      description:
        "A small, fast, and scalable bearbones state management solution. Zustand has a comfy API based on hooks. It isn't boilerplatey or opinionated, but has enough convention to be explicit and flux-like.",
      tags: [],
      github: {
        url: "https://github.com/pmndrs/zustand",
        stars: 40318,
      },
      features: {
        ReducerBased: true,
      },
    },
    {
      name: "Mobx",
      logo: "https://mobx.js.org/img/mobx.png",
      homepage: "https://mobx.js.org",
      description: "Simple, scalable state management.",
      tags: [],
      github: {
        url: "https://github.com/mobxjs/mobx",
        stars: 27047,
      },
      features: {
        MutableBased: true,
      },
    },
  ],
  routers: [
    {
      name: "React Router",
      logo: "",
      homepage: "https://reactrouter.com",
      description:
        "React Router is a lightweight, fully-featured routing library for the React JavaScript library.",
      tags: [],
      github: {
        url: "https://github.com/remix-run/react-router",
        stars: 51640,
      },
    },
  ],
  testings: [
    {
      name: "Jest",
      logo: "",
      homepage: "https://jestjs.io",
      description:
        "Jest is a delightful JavaScript Testing Framework with a focus on simplicity.",
      tags: [],
      github: {
        url: "https://github.com/jestjs/jest",
        stars: 43331,
      },
      features: {},
    },
  ],
  buildTools: [
    {
      name: "Vite",
      logo: "https://vitejs.dev/logo.svg",
      homepage: "https://vitejs.dev",
      description: "Next Generation Frontend Tooling.",
      tags: [],
      github: {
        url: "https://github.com/vitejs/vite",
        stars: 63471,
      },
      features: {
        
      },
    },
  ],
} as TechStackType;

import { Icons } from "icons";

export const langWithIcons = {
  Java: Icons.JavaIcon,
  JS: Icons.JavaScriptIcon,
  Golang: Icons.GolangIcon,
  Rust: Icons.RustIcon,
  Python: Icons.PythonIcon,
} as { [key: string]: (props: object) => JSX.Element };

export const languages = ["Java", "JS", "Golang", "Rust", "Python"] as const;

export const techStackWithIcons = {
  React: Icons.ReactIcon,
  Vue: Icons.VueIcon,
  Java: Icons.JavaIcon,
  Rust: Icons.RustIcon,
  BigData: Icons.BigDataIcon,
} as { [key: string]: (props: object) => JSX.Element };

// "Vue", "Java", "Rust",
export const techStacks = ["React", "BigData"];

export const techStackFeatures = {
  ReducerBased: {
    title: "Reducer-based",
    icon: "FeatherIcon",
    desc: "Requires dispatching actions to update a big centralised state, often called a “single source of truth”.",
  },
  AtomBased: {
    title: "Atom-based",
    icon: "FeatherIcon",
    desc: "Splits states into tiny pieces of data called atoms, which can be written to and read from using React hooks.",
  },
  MutableBased: {
    title: "Mutable-based",
    icon: "FeatherIcon",
    desc: "Leverages proxy to create mutable data sources which can be directly written to or reactively read from.",
  },
  Batch: {
    title: "Batch",
    icon: "Package2Icon",
    desc: "Supports batch data processing pipelines.",
  },
  Streaming: {
    title: "Streaming",
    icon: "WavesIcon",
    desc: "Supports streaming data processing pipelines.",
  },
  CrossLanguage: {
    title: "Cross-lang",
    icon: "CodeIcon",
    desc: "Supports cross-language data processing pipelines.",
  },
} as const;

export const groups = [
  "Frontend",
  "Backend",
  "DevOps",
  "Database",
  "BigData",
  "Tool",
] as const;

export const tags = [
  "React",
  "Vue",
  "Icons",
  "classnames",
  "Tool",
  "Icons",
  "Text Parser",
  "CSS",
  "Atomic CSS",
  "Syntax Highlighter",
  "Editor",
  "Build System",
  "Static Site",
  "Validation",
  "Graph",
  "Hooks",
  "Table",
  "List",
  "Id",
  "Time",
  "Package Manager",
  "Dev",
  "Redis",
  "MySQL",
  "Cache",
  "Cli",
  "System",
  "Errors",
  "Log",
  "Test",
  "Http",
  "Json",
  "Algorithms",
  "Network",
  "Thread",
  "Async",
  "Web",
  "Channel",
  "Visualization",
  "SQL",
  "Database",
  "ORM"
] as const;

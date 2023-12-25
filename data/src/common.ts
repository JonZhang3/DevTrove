import { Icons } from "icons";

export const langWithIcons = {
  Java: Icons.JavaIcon,
  JS: Icons.JavaScriptIcon,
  Golang: Icons.GolangIcon,
  Rust: Icons.RustIcon,
  Python: Icons.PythonIcon,
} as { [key: string]: (props: object) => JSX.Element };

export const languages = ["Java", "JS", "Golang", "Rust", "Python"] as const;

export const groups = [
  "Frontend",
  "Backend",
  "DevOps",
  "Database",
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
] as const;

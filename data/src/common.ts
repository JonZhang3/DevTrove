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

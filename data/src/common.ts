import * as LangIcons from "./icons/langs/index";

export const langWithIcons = {
  Java: LangIcons.JavaIcon,
  JS: LangIcons.JSIcon,
  Golang: LangIcons.GolangIcon,
  Rust: LangIcons.RustIcon,
  Python: LangIcons.PythonIcon,
} as { [key: string]: (props: object) => JSX.Element };

export const languages = Object.keys(langWithIcons);

export const groups = [
  "Frontend",
  "Backend",
  "DevOps",
  "Database",
  "Tool",
] as const;

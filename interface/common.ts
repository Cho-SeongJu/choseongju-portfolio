export type TStep = "intro" | "about" | "skill" | "experience" | "project";

export interface IMenu {
  readonly section: {
    readonly text: Uppercase<TStep>;
    readonly step: TStep;
    readonly onClick: () => void;
  }[];
  readonly link: {
    readonly text: "GITHUB" | "NOTION";
    readonly href: string;
  }[];
}

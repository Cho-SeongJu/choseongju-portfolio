import LinkIcon from "./icon/link_icon";

interface IHeaderProps {
  readonly step: number;
}

interface IMenu {
  readonly section: {
    readonly text: "INTRO" | "ABOUT" | "SKILL" | "EXPERIENCE" | "PROJECT";
    readonly step: number;
  }[];
  readonly link: {
    readonly text: "GITHUB" | "NOTION";
    readonly href: string;
  }[];
}

const MENU: IMenu = {
  section: [
    { text: "INTRO", step: 1 },
    { text: "ABOUT", step: 2 },
    { text: "SKILL", step: 3 },
    { text: "EXPERIENCE", step: 4 },
    { text: "PROJECT", step: 5 },
  ],
  link: [
    { text: "GITHUB", href: "" },
    { text: "NOTION", href: "" },
  ],
};

export default function Header({ step }: IHeaderProps) {
  return (
    <header className="sticky top-0">
      <div
        className={`items-center flex justify-evenly w-full h-[80px] mx-auto ${
          step === 1 ? "translate-y-[-80px]" : "translate-y-0"
        } bg-black-002 intro-animation`}
      >
        <div className="flex w-full max-w-[1520px]">
          <ul
            className={`${
              step === 1 ? "translate-y-[-100px]" : "translate-y-0"
            } intro-animation flex`}
          >
            {MENU.section.map((sectionMenu, index) => (
              <li
                key={sectionMenu.text}
                className={`text-white-005 text-[16px] cursor-pointer hover:text-white-003 hover:font-bold ${
                  index < 4 && "mr-[36px]"
                }`}
              >
                {sectionMenu.text}
              </li>
            ))}
          </ul>
          <div className="grow" />
          <ul
            className={`${
              step === 1 ? "translate-y-[-100px]" : "translate-y-0"
            } intro-animation flex`}
          >
            {MENU.link.map((linkMenu, index) => (
              <li
                key={linkMenu.text}
                className={`text-white-005 text-[16px] cursor-pointer flex items-center hover:text-white-003 hover:font-bold ${
                  index === 0 && "mr-[36px]"
                }`}
              >
                {linkMenu.text}
                <LinkIcon />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${
          step === 1 ? "w-full pb-[60px]" : "pb-0 w-[170px]"
        } absolute left-[50%] translate-x-[-50%] top-0 font-title mx-auto text-center text-white-001 intro-animation transition-all`}
      >
        <h1
          className={`${
            step === 1 ? "translate-y-full" : "mx-auto translate-y-[16px]"
          } intro-animation`}
        >
          <span
            className={`${
              step === 1 ? "text-[110px]" : "text-[14.54px]"
            } inline-block leading-[1.3] align-middle tracking-1 intro-animation`}
          >
            Front-End Developer
          </span>
          <span
            className={`${
              step === 1 ? "mt-[30px] text-[200px]" : "text-[22.37px]"
            } inline-block leading-[1.3] align-middle tracking-1 intro-animation`}
          >
            Cho Seong Ju
          </span>
        </h1>
      </div>
    </header>
  );
}

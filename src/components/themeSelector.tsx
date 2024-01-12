import { Theme, ThemeItem } from "../theme/types";

interface Props {
    themes: { [key:string]: Theme };
    selectedTheme: Theme;
    updateTheme: (theme: Theme) => void;
}

export function ThemeSelector({ themes, selectedTheme, updateTheme }: Props) {
    let themeList: ThemeItem[] = Object.values(themes).map(({ name, baseColor }) => {
        const modifiedTheme: ThemeItem = { name, style: { background: baseColor } };

        if (selectedTheme.name === name) {
            modifiedTheme.style.borderWidth = 2;
            modifiedTheme.style.borderColor = selectedTheme.colors.divider
        }

        return modifiedTheme;
    });

    const onThemeSelected = (name: string) => () =>  {
        updateTheme(themes[name]);
    }

    return (
        <div className="p-2 z-10 w-full absolute bottom-0">
            <div className="divider-top"></div>
            <div className="my-2 text-center font-bold sidebar-font">Themes</div>
            <div className="flex justify-center">
                {
                    themeList.map(({ name, style }) => (
                        <div
                            key={name}
                            className="rounded-full size-6 m-0.5 cursor-pointer"
                            style={style}
                            onClick={onThemeSelected(name)}
                        ></div>
                    ))
                }
            </div>
        </div>
    )
}
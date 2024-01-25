import { Switch, Typography } from "@material-tailwind/react";
import { Theme, ThemeItem, Themes } from "../theme/types";
import { ChangeEvent, useState } from "react";
import { getFromLocalStorage, setToLocalStorage } from "../utils/localStorage";

interface Props {
    themes: Themes;
    selectedTheme: Theme;
    updateTheme: (theme: Theme) => void;
}

export function ThemeSelector({ themes, selectedTheme, updateTheme }: Props) {
    const isGradientSelected = getFromLocalStorage('gradientSelected');
    const [gradientSelected, setGradientSelected] = useState(!!isGradientSelected);
    const selectedThemeList = gradientSelected ? themes.gradient : themes.plain;
    const themeList: ThemeItem[] = Object.values(selectedThemeList)
        .map(({ name, baseColor }) => {
            let modifiedTheme: ThemeItem = { name, style: { background: baseColor } };

            if (selectedTheme.name === name) {
                modifiedTheme.style.borderWidth = 2;
                modifiedTheme.style.borderColor = selectedTheme.colors.divider
            }

            return modifiedTheme;
        });

    const onThemeSelected = (name: string) => () =>  {
        updateTheme(selectedThemeList[name]);
        setToLocalStorage('gradientSelected', gradientSelected);
    }

    const toggleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const isSelected = event.target.checked;
        setGradientSelected(isSelected);
    }

    return (
        <div className="p-2 z-10 w-full absolute bottom-0">
            <div className="divider-top"></div>
            <div className="my-2">
                <Typography className="text-center sidebar-font">Themes</Typography>
                <div className="flex justify-center">
                    <Switch
                        defaultChecked={gradientSelected}
                        color="blue-gray"
                        crossOrigin=""
                        label={<Typography className="sidebar-font">Gradient</Typography>}
                        onChange={toggleChangeHandler}
                    />
                </div>
            </div>
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
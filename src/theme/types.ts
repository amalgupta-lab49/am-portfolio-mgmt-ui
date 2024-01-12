export interface Theme {
    name: string;
    baseColor: string;
    colors: any
}

export interface ThemeItem {
    name: string;
    style: {
        background: string;
        borderWidth?: number;
        borderColor?: string;
    }
}
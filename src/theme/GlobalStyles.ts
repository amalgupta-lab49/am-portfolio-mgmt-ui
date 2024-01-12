import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    .app-container {
        display: flex;
        width: 100%;
        overflow: hidden;
        background: ${({ theme }) => theme.colors.baseBackground};
    }

    .font-color {
        color: ${({ theme }) => theme.colors.font};
    }

    .divider-top {
        border-top-width: 2px;
        border-color: ${({ theme }) => theme.colors.divider};
    }

    .tab-header {
        background: ${({ theme }) => theme.colors.tab.header};
        li {
            font-weight: bold;
            color: ${({ theme }) => theme.colors.tab.font};
        }
        .selected{
            background: blue;
        }
    }

    .sidebar-font {
        color: ${({ theme }) => theme.colors.sidebar.font};
        :hover {
            background: ${({ theme }) => theme.colors.sidebar.backgroundHover};
            color: ${({ theme }) => theme.colors.sidebar.font};
        }
    }

    table {
        tbody tr:not(:last-child) {
            border-bottom-width: 2px;
            border-color: ${({ theme }) => theme.colors.divider};
        }
        th {
            background: ${({ theme }) => theme.colors.table.header};
            color: ${({ theme }) => theme.colors.table.headerFont};
            p { 
                font-weight: bold;
            }
        }
        td {
            color: ${({ theme }) => theme.colors.table.rowFont};
        }
    }
`
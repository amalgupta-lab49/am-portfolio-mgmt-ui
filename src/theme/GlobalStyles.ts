import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    .app-container {
        display: flex;
        width: 100%;
        overflow: hidden;
        background: ${({ theme }) => theme.colors.baseBackground};
    }

    .card-background {
        background: ${({ theme }) => theme.colors.cardBackground};
    }

    .font-color {
        color: ${({ theme }) => theme.colors.font};
    }

    .divider-top {
        border-top-width: 2px;
        border-color: ${({ theme }) => theme.colors.divider};
    }

    .tab-header {
        background: transparent;
        li {
            font-weight: bold;
            color: ${({ theme }) => theme.colors.tab.font};
        }
        .selected-tab {
            background: ${({ theme }) => theme.colors.tab.header};
        }
    }

    .sidebar-font {
        color: ${({ theme }) => theme.colors.sidebar.font};
    }
    nav.sidebar-font div:hover {
        background: ${({ theme }) => theme.colors.sidebar.backgroundHover};
        color: ${({ theme }) => theme.colors.sidebar.font};
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
                font-weight: bold !important;
            }
        }
        td {
            color: ${({ theme }) => theme.colors.table.rowFont};
        }
    }
`
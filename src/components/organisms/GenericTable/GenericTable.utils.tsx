import initialTheme from 'theme/initialTheme';
import { nodesTypes, COLUMN_VARIANTS, ColumnVariant } from './GenericTable.types';

export const tableTheme = (headersLen: number, isSelect: boolean) => ({
  Table: `
      --data-table-library_grid-template-columns: ${
        isSelect ? `2.875rem repeat(${headersLen}, minmax(0,3fr))` : `repeat(${headersLen},3fr)`
      };
      border-radius: 8px;
      min-width: 64.0625rem;
    `,
  HeaderRow: `
      color: ${initialTheme.palette.text};
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.4;
      letter-spacing: 0;
      background-color: ${initialTheme.palette.white};
      th:first-of-type > div {
        display: ${isSelect ? 'grid' : 'flex'};
        place-content: ${isSelect ? 'center' : 'flex-start'};
      }
      th:first-of-type > div > input[type="checkbox"] {
        appearance: none;
        background-color: ${initialTheme.palette.white};
        margin: 0;
        font: inherit;
        color: ${initialTheme.palette.sidebarTabs};
        width: 0.875rem;
        height: 0.875rem;
        border: 1.39px solid ${initialTheme.palette.sidebarTabs};
        border-radius: 3.33px;
        display: grid;
        place-content: center;
      }

      th:first-of-type > div > input[type="checkbox"]::before {
        content: "";
        width: 10px;
        height: 10px;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        transform-origin: bottom left;
        background-color: ${initialTheme.palette.white};
        clip-path: polygon(15% 60%, 15% 40%, 85% 40%, 85% 60%);
      }

      th:first-of-type > div > input[type="checkbox"]:checked::before {
        transform: scale(1);
      }

      th:first-of-type > div > input[type="checkbox"]:checked {
        background-color: ${initialTheme.palette.blueDark};
        border: 1.39px solid ${initialTheme.palette.blueDark};
      }
    `,
  Row: `
      color: ${initialTheme.palette.text};
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.4;
      letter-spacing: 1px;
    

      &:nth-of-type(odd) {
        background-color: ${initialTheme.palette.white};
      }

      &:nth-of-type(even) {
        background-color: ${initialTheme.palette.greyLight};
      }

      &:not(:last-of-type) > .td {
        border-bottom: solid 1px ${initialTheme.palette.sidebarTabs};
      }

      &:nth-of-type(1) > .td {
        border-top: solid 1px ${initialTheme.palette.sidebarTabs};
      }

      td:first-of-type > div {
        display: ${isSelect ? 'grid' : 'flex'};
        place-content: ${isSelect ? 'center' : 'flex-start'};
        
      }

      div {
        font-weight: 400;
      }
 
      td:first-of-type > div > input[type="checkbox"] {
        appearance: none;
        background-color: ${initialTheme.palette.white};
        margin: 0;
        font: inherit;
        color: ${initialTheme.palette.sidebarTabs};
        width: 0.875rem;
        height: 0.875rem;
        border: 1.39px solid ${initialTheme.palette.sidebarTabs};
        border-radius: 3.33px;
        display: grid;
        place-content: center;
      }

      td:first-of-type > div > input[type="checkbox"]::before {
        content: "";
        width: 10px;
        height: 10px;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        transform-origin: bottom left;
        background-color: ${initialTheme.palette.white};
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      }

      td:first-of-type > div > input[type="checkbox"]:checked::before {
        transform: scale(1);
      }

      td:first-of-type > div > input[type="checkbox"]:checked {
        background-color: ${initialTheme.palette.blueDark};
        border: 1.39px solid ${initialTheme.palette.blueDark};
      }
    `,
  Cell: `
      height: 4.875rem;
      display: flex;
      justify-content: flex-start;
     
    `,
  HeaderCell: `
      height: 3rem;
      display: flex;
      justify-content: flex-start;
    `,
});

type columnsType = {
  label: string | undefined;
  renderCell: (item: nodesTypes) => void;
  select?: boolean;
};

export const columnsRenderers = {
  building: (item: nodesTypes) => item.building,
  flat: (item: nodesTypes) => item.flat,
  status: (item: nodesTypes) => item.status,
  payment: (item: nodesTypes) => item.payment,
  deadline: (item: nodesTypes) =>
    item.deadline &&
    item.deadline.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }),
  flatsNumber: (item: nodesTypes) => `#${item.flatsNumber}`,
  floor: (item: nodesTypes) => item.floor,
  residents: (item: nodesTypes) =>
    item.residents &&
    item.residents.map((resident, index) => (
      <div key={resident} style={{ fontWeight: index === 0 ? 'bold' : 'normal' }}>
        {resident}
      </div>
    )),
  monthlyPayments: (item: nodesTypes) => item.monthlyPayments,
  lastMaintenance: (item: nodesTypes) =>
    item.lastMaintenance &&
    item.lastMaintenance.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }),
  payments: (item: nodesTypes) => item.payments,
  contactDetails: (item: nodesTypes) => item.contactDetails,
};

export const mapColumnHeaders = (nodes: nodesTypes, isSelect: boolean) => {
  const columns: columnsType[] = Object.keys(nodes)
    .filter((key) => key !== 'id')
    .map((key, index) =>
      index === 0 && isSelect
        ? {
            label: COLUMN_VARIANTS[key as ColumnVariant],
            renderCell: columnsRenderers[key as ColumnVariant],
            select: true,
          }
        : {
            label: COLUMN_VARIANTS[key as ColumnVariant],
            renderCell: columnsRenderers[key as ColumnVariant],
          },
    );

  return columns;
};

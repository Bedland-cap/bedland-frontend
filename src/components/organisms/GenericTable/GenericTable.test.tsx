import { renderWithProviders } from 'utils/test.utils';
import nodes from 'utils/mock/mockGenericTable';
import { mapColumnHeaders, tableTheme, columnsRenderers } from './GenericTable.utils';
import GenericTable from './GenericTable';

describe('Generic Table', () => {
  it('renders correctly with selects', () => {
    const snapshot = renderWithProviders(<GenericTable nodes={nodes} isSelect />, {});
    expect(snapshot).toMatchSnapshot();
  });
  it('renders correctly without selects', () => {
    const snapshot = renderWithProviders(<GenericTable nodes={nodes} isSelect={false} />, {});
    expect(snapshot).toMatchSnapshot();
  });

  it('mapColumnHeaders correctly creates mapped object if isSelect is true', () => {
    const columns = mapColumnHeaders(nodes[0], true);

    expect(columns[0]?.select).toBeTruthy();
    expect(columns.length).toEqual(4);
    expect(Object.keys(columns[0]).length).toEqual(3);
    expect(Object.keys(columns[1]).length).toEqual(2);
  });
  it('mapColumnHeaders correctly creates mapped object if isSelect is false', () => {
    const columns = mapColumnHeaders(nodes[0], false);

    expect(columns[0]?.select).toEqual(undefined);
    expect(columns.length).toEqual(4);
    expect(Object.keys(columns[0]).length).toEqual(2);
    expect(Object.keys(columns[1]).length).toEqual(2);
  });

  it('tableTheme correctly resolves', () => {
    expect(tableTheme(4, true).Table).toEqual(`
      --data-table-library_grid-template-columns: 2.875rem repeat(4, minmax(0,3fr));
      border-radius: 8px;
      min-width: 64.0625rem;
    `);
    expect(tableTheme(3, false).Table).toEqual(`
      --data-table-library_grid-template-columns: repeat(3,3fr);
      border-radius: 8px;
      min-width: 64.0625rem;
    `);
  });
  it('columnsRenderers resolves correctly', () => {
    expect(columnsRenderers.deadline(nodes[0])).toEqual('11/17/1995');
    expect(
      columnsRenderers.lastMaintenance({ lastMaintenance: new Date('11/17/1995'), id: 1 }),
    ).toEqual('11/17/1995');
  });
});

import {
    Data,
    TableNode
} from '@table-library/react-table-library';
import { CompactTable } from '@table-library/react-table-library/compact';
import { Column } from '@table-library/react-table-library/types/compact';
import {
    memo 
} from 'react';

export interface IProps<TData extends TableNode> {
    /**
     * Data to be displayed in the table.
     */
    data: Data<TData>;
    /**
     * Columns to be displayed in the table.
     */
    columns: Column<TData>[];
}

/**
 * Table component with generic data type.
 * @param props - Props for the Table component.
 * @returns Table component.
 */
const TableComponent = <TData extends TableNode>(props: IProps<TData>) => {
    const {
        data, columns, 
    } = props;

    return (
        <CompactTable
            data={data}
            columns={columns}
        />
    );
};

export const Table = memo(TableComponent) as typeof TableComponent;
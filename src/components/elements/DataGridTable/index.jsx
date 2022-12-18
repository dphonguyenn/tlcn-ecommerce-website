import DataTable from 'react-data-table-component';
import React, { useEffect, useState } from 'react';
import { classifyDataToTable } from '~/utils';
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data)}</pre>;
function DataGridTable({ data }) {
  const [_data, setData] = useState({ rows: [], columns: [] });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (data.length !== 0) {
      data.then(result => {
        setData(classifyDataToTable(result));
        setLoading(true);
      });
    }
  }, [data]);
  console.log(_data);
  return (
    <div>
      {loading === true && (
        <DataTable
          columns={_data.columns}
          data={_data.rows}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          pagination
          selectableRows
          dense
        />
      )}
    </div>
  );
}

export default DataGridTable;

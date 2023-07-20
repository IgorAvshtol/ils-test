import React, { useEffect, useState } from 'react';
import { Table as TableAntd } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ColumnsType } from 'antd/es/table';
import { requestListLoading, selectListRequests } from 'store/selectors';
import { getRoute, getRoutes } from 'store/sagas/actions';
import { generateId } from 'lib/generateId';

interface ColumnData {
  key: string;
  name: string;
  pointOne: string[];
  pointThree: string[];
  pointTwo: string[];
}

function Table() {
  const dispatch = useDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const loading = useSelector(requestListLoading);
  const requests = useSelector(selectListRequests);

  useEffect(() => {
    dispatch(getRoutes());
  }, []);

  const columns: ColumnsType<ColumnData> = [
    {
      title: 'Маршрут',
      dataIndex: 'name',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Точка 1 (lat, lng)',
      dataIndex: 'pointOne',
      render: (text, record) => (
        <>
          {
                record.pointOne.map((point) => <p key={generateId()}>{point}</p>)
              }
        </>
      ),
    },
    {
      title: 'Точка 2 (lat, lng)',
      dataIndex: 'pointTwo',
      render: (text, record) => (
        <>
          {
                record.pointTwo.map((point) => <p key={generateId()}>{point}</p>)
              }
        </>
      ),
    },
    {
      title: 'Точка 3 (lat, lng)',
      dataIndex: 'pointThree',
      render: (text, record) => (
        <>
          {
                record.pointThree.map((point) => <p key={generateId()}>{point}</p>)
              }
        </>
      ),
    },
  ];

  return (
    <TableAntd
      loading={loading}
      scroll={{ x: 'max-content' }}
      pagination={false}
      onRow={(record, index) => ({
        onClick: () => {
          dispatch(
            getRoute({
              start: record.pointOne,
              between: record.pointTwo,
              finish: record.pointThree,
            }),
          );
          setSelectedRowKeys([`${index}`]);
        },
      })}
      rowSelection={{ selectedRowKeys }}
      columns={columns}
      dataSource={requests}
    />
  );
}

export default Table;

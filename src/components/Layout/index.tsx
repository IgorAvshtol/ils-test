import React, { useRef } from 'react';
import { Layout as LayoutAntd } from 'antd';
import { Main } from 'pages/Main';
import CustomTable from '../Table';

const { Content, Sider } = LayoutAntd;

function LayoutMain() {
  const resizableRef = useRef(null);

  return (
    <LayoutAntd>
      <Content>
        <LayoutAntd className='site-layout-background'>
          <Sider
            ref={resizableRef}
            id='Resizable'
            className='site-layout-background'
            width='30%'
          >
            <CustomTable />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Main />
          </Content>
        </LayoutAntd>
      </Content>
    </LayoutAntd>
  );
}

export default LayoutMain;

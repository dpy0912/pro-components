import ProLayout, { SettingDrawer } from '@ant-design/pro-layout';
import React from 'react';
import { PageContainer } from '../components/PageContainer';
import defaultProps from './_defaultProps';

export default () => {
  return (
    <>
      <ProLayout {...defaultProps} layout="mix" splitMenus pure>
        children
      </ProLayout>
      <ProLayout {...defaultProps} layout="mix" splitMenus>
        children
      </ProLayout>
      <ProLayout
        {...defaultProps}
        breadcrumbRender={false}
        layout="mix"
        splitMenus
        headerRender={false}
        onMenuHeaderClick={() => {}}
        formatMessage={({ id }) => id}
        style={{
          height: '100vh',
        }}
      />
      <ProLayout
        {...defaultProps}
        layout="mix"
        menuExtraRender={() => 'dom'}
        menuHeaderRender={() => <div />}
        headerTheme="light"
        navTheme="light"
        splitMenus
        location={{
          pathname: '/welcome',
        }}
        style={{
          height: '100vh',
        }}
      />

      <ProLayout
        {...defaultProps}
        layout="top"
        collapsed
        contentWidth="Fixed"
        menuExtraRender={false}
        menuHeaderRender={false}
        headerTheme="light"
        navTheme="light"
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
        }}
        location={{
          pathname: '/welcome',
        }}
        rightContentRender={() => 'dom'}
        style={{
          height: '100vh',
        }}
      />
      <ProLayout
        {...defaultProps}
        layout="mix"
        menuHeaderRender={() => null}
        splitMenus
        fixSiderbar
        location={{
          pathname: '/welcome',
        }}
        contentWidth="Fixed"
        openKeys={false}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
        }}
        style={{
          height: '100vh',
        }}
      >
        xxxx
      </ProLayout>

      <ProLayout
        {...defaultProps}
        layout="mix"
        menuHeaderRender={() => null}
        location={{
          pathname: '/welcome',
        }}
        openKeys={false}
        actionsRender={() => [<a key="key">key</a>]}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
        }}
        style={{
          height: '100vh',
        }}
      >
        xxxx
      </ProLayout>
      <ProLayout
        {...defaultProps}
        layout="mix"
        menuHeaderRender={() => null}
        splitMenus={false}
        fixSiderbar
        location={{
          pathname: '/welcome',
        }}
        contentWidth="Fixed"
        openKeys={false}
        style={{
          height: '100vh',
        }}
      >
        <PageContainer>xxxx</PageContainer>
      </ProLayout>
      <SettingDrawer collapse />
    </>
  );
};
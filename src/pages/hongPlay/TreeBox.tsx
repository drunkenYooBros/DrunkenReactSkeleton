import Page from 'layout/page/Page'
import { openLoginModalSelector } from 'state'
import { CarryOutOutlined, DownOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Button, Switch, Tree } from 'antd'

function TreeBox(props: any) {
  const [showLine, setShowLine] = useState(true)
  const [showIcon, setShowIcon] = useState(false)
  const [showLeafIcon, setShowLeafIcon] = useState(true)
  const [checkedKeys, setCheckedKeys] = useState([''])

  const onSelect = (selectedKeys: any, info: any) => {
    console.log('selected', selectedKeys, info)
    setCheckedKeys(selectedKeys)
  }
  const selectNode = () => {
    // '0-0-0-0'
    console.log('selectNode --- checkedKeys', checkedKeys)
    setCheckedKeys(['0-0-0-0'])
  }
  const test = () => {
    // '0-0-0-0'
    console.log('test', checkedKeys)
  }
  const treeData = [
    {
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          children: [
            {
              title: 'leaf',
              key: '0-0-0-0',
            },
            {
              title: 'leaf',
              key: '0-0-0-1',
            },
            {
              title: 'leaf',
              key: '0-0-0-2',
            },
          ],
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          children: [
            {
              title: 'leaf',
              key: '0-0-1-0',
            },
          ],
        },
        {
          title: 'parent 1-2',
          key: '0-0-2',
          children: [
            {
              title: 'leaf',
              key: '0-0-2-0',
            },
            {
              title: 'leaf',
              key: '0-0-2-1',
            },
          ],
        },
      ],
    },
  ]

  return (
    <div>
      <div>
        <Button onClick={selectNode}>selectNode</Button>
        <Button onClick={test}>Test</Button>
      </div>
      <Tree
        showLine
        switcherIcon={<DownOutlined />}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        treeData={treeData}
        selectedKeys={checkedKeys}
        // checkedKeys={checkedKeys}
      />
    </div>
  )
}

export default TreeBox

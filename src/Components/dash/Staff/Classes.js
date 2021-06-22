import React,{useState} from 'react'
import { Drawer, Button, Radio, Space } from 'antd';

export default function Classes() {
  const [visible,setVisible]=useState(true)
  function close() {
    setVisible(false)
}
    return (
        <div>
         <Drawer
          title="Manage Classes"
          placement='top'
          closable={false}
          onClose={close}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        </div>
    )
}

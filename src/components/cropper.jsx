import { Breadcrumb, Button, Image, Modal, Space, Table } from 'antd';
import { useRef, useState } from 'react';


export const Cropper = () => {

    function handleOk(params) {

    }

    function handleCancel(params) {

    }

    return (
        <Modal title="Basic Modal" open={true} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}
import Modal from 'layout/modal/Modal'
import React, {useState, useEffect} from 'react'
import Rest, { RestRequestConfig } from 'service/Rest'

const widthModal = (component: any) => ({...props}): JSX.Element => {
	return <Modal {...props} />
}

export default widthModal
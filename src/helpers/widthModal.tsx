import Modal from 'layout/modal/modal'
import React, {useState, useEffect} from 'react'
import Rest, { RestRequestConfig } from 'service/Rest'

const widthModal = (component: any) => ({...props}): JSX.Element => {
	return <Modal {...props} />
}

export default widthModal
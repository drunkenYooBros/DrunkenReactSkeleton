import React, {useState, useEffect} from 'react'
import Rest, { RestRequestConfig } from 'service/Rest'

const withFetchData = (Component: any, url: string) => ({...props}): JSX.Element => {
	const [fetchData, setFetchData] = useState(null)
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const restParams: RestRequestConfig = {
			url
		}
		Rest.get(restParams).then((res: any) => {
			setFetchData(res)
			setLoading(false)
		})
	}, [])
	return (
		<Component 
			data={fetchData} 
			loading={loading}
			{...props}
		/>
	)
}

export default withFetchData
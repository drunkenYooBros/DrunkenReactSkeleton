import React, { Suspense, useEffect } from "react"
import "./App.css"
import "bulma/css/bulma.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { useSetRecoilState, useRecoilValueLoadable, selector } from "recoil"
import { mainMenuState } from "state"
import apiPortal from "api/apiPortal"
import Spinner from "layout/spinner/Spinner"

// const bootStrapDataState = selector({
//   key: 'bootStrapDataState',
//   get: async ({get}) => {
//     const response = apiPortal.getBootStrapData()
//     return response.menu
//   },
// });

export const bootStrapComponent = (Component: any) => (props: any) => {
  // const bootStrapDataValue = useRecoilValueLoadable(bootStrapDataState);

  const setMainMenuList = useSetRecoilState(mainMenuState)
  useEffect(() => {
    // console.log('bootStrapDataValue', bootStrapDataValue)

    apiPortal.getBootStrapData().then((data) => {
      setMainMenuList(data.menu)
    })
  }, [])
  return (
    <Suspense fallback={<Spinner />}>
      <Component {...props} />
    </Suspense>
  )
}

function App() {
  const Main = bootStrapComponent(React.lazy(() => import("layout/main/Main")))
  return (
    <>
      <Main />
    </>
  )
}

export default App

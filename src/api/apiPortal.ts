import Rest from 'service/Rest';

const getConfig = async (): Promise<any> => {
  return Rest.get('/config')
}

const getMenu = async (): Promise<any> => {
  return Rest.get('/menu')
}

const getBootStrapData = async (): Promise<any> => {
  const config = await Rest.get('/config')
  const menu = await Rest.get('/menu')
  return {
    config,
    menu
  }
}

export default {
  getConfig,
  getMenu,
  getBootStrapData,
}
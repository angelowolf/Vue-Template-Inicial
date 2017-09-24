export const apiDomain = process.env.API_URL
export const fakeUrl = process.env.FAKE_URL
export const getParametros = apiDomain + 'parametrosMunicipio/'
export const getPaises = apiDomain + 'pais/'
export const getProvincias = apiDomain + 'provincia/'
export const getDepartamentos = apiDomain + 'departamento/'
export const getLocalidades = apiDomain + 'localidad/'

export const getUsers = fakeUrl + 'users/'
export const loginUrlPasoUno = apiDomain + 'autorizar/login'
export const loginUrlPasoDos = apiDomain + 'autorizar/generarToken'

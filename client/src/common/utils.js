export function urlBuilder(urlConfig = {}){
    const port = urlConfig.port ? `:${urlConfig.port}` : '';
    return `${urlConfig.protocol}://${urlConfig.host}${port}/${urlConfig.version}`
}
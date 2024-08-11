export const isMicroApp = () => {
    console.log('is-micro', window.__MICRO_APP_ENVIRONMENT__)
    if (window.__MICRO_APP_ENVIRONMENT__) return true
    return false
}

export const getMicroAppData = () => {
    if (isMicroApp) return window.microApp.getData()
    return null
}
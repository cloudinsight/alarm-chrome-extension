export const JSON_URL = 'https://cloud.oneapm.com/alarm/strategy/alarmStrategies.json';
export const NEW_TAB_URL = 'https://cloud.oneapm.com/#/alarms/firing';
export const TIMER_NAME = 'update_badge_timer';
/**
 * 请求的时候带上 Chrome 插件的 ID
 * @type {{chrome_extension: *}}
 */
export const PARAMS = {
  chrome_extension: chrome.runtime.id
};

import $ from 'jquery';

import getActiveCount from './util/getActiveCount';

import {
  NEW_TAB_URL,
  JSON_URL,
  TIMER_NAME,
  PARAMS
} from './config';


/**
 * 更新 badge
 */
const updateBadge = () => {
  $.getJSON(JSON_URL, PARAMS)
    .then(({result}) => {
      const text = `${getActiveCount(result)}`
      chrome.browserAction.setBadgeText({text});
    })
    .catch(error => {
      chrome.browserAction.setBadgeText({text: 'ERR'})
    });
};

/**
 * 响应点击图标的事件
 */
chrome.browserAction.onClicked.addListener((...args) => {
  updateBadge();
  chrome.tabs.create({
    url: NEW_TAB_URL
  })
});


/**
 * 定时器
 */
chrome.alarms.clearAll();
chrome.alarms.create(TIMER_NAME, {
  periodInMinutes: 10
});
chrome.alarms.onAlarm.addListener(({name})=> {
  if (name === TIMER_NAME) {
    updateBadge();
  }
});

/**
 * 首次刷新
 */
updateBadge();

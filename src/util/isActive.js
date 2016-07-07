/**
 * 判断告警是否应该被计数
 *
 * @param status
 * @returns {boolean}
 */
const isActive = status => {
  return status === 'ALERT'
};

export default isActive;

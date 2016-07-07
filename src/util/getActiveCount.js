import isActive from './isActive';

/**
 * 从返回结果里计算 active 告警的个数
 * 
 * @param list
 * @returns {number}
 */
const getActiveCount = list => {
  let count = 0;
  list.forEach(item => {
    if (item.type === 'SIMPLE') {
      if (isActive(item.status)) {
        count++;
      }
    } else if (item.type === 'MULTI') {
      Object.keys(item.groups_status).forEach(k => {
        if (isActive(item.groups_status[k].status)) {
          count++;
        }
      })
    }
  });
  return count;
};

export default getActiveCount;

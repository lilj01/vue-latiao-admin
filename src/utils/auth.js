import {
  SysConst
} from '@/constant/sys-const'
import {
  Storage
} from '@/utils/storage'
/**
 * 获取时间戳
 */
export function getTimeStamp() {
  return Storage.getItem(SysConst.TIME_STAMP)
}
/**
 * 设置时间戳
 */
export function setTimeStamp() {
  Storage.setItem(SysConst.TIME_STAMP, Date.now())
}
/**
 * 是否超时
 */
export function isCheckTimeout() {
  // 当前时间戳
  var currentTime = Date.now()
  // 缓存时间戳
  var timeStamp = getTimeStamp()
  return currentTime - timeStamp > SysConst.TOKEN_TIMEOUT_VALUE
}

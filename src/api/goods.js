/**
 * Created by hongtu on 2017/11/2.
 */
import axios from 'axios'

export function getGoods () {
  const url = '/api/goods'
  return axios.get(url)
}

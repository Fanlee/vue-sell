/**
 * Created by hongtu on 2017/11/2.
 */
import axios from 'axios'

export function getSeller (id) {
  const url = '/api/seller?id=' + id
  return axios.get(url)
}

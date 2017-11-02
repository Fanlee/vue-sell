/**
 * Created by hongtu on 2017/11/2.
 */
import axios from 'axios'

export function getRatings () {
  const url = '/api/ratings'
  return axios.get(url)
}

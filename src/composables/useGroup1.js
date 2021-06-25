import { ref, onBeforeMount } from 'vue'
import getRandomImg from '../../api/api'
import SvgLoad from '../assets/load.svg'
import SvgError from '../assets/error.svg'

export default function () {
  const group1 = ref({ img: [SvgLoad, SvgLoad, SvgLoad] })
  const group1Load = ref(false)

  const getGroup1 = () => {
    group1.value.img = [SvgLoad, SvgLoad, SvgLoad]
    getRandomImg()
      .then((response) => group1.value.img.splice(0, 1, response))
      .catch((error) => {
        group1.value.img.splice(0, 1, SvgError)
        console.error(error)
      })
    getRandomImg()
      .then((response) => group1.value.img.splice(1, 1, response))
      .catch((error) => {
        group1.value.img.splice(1, 1, SvgError)
        console.error(error)
      })
    getRandomImg()
      .then((response) => group1.value.img.splice(2, 1, response))
      .catch((error) => {
        group1.value.img.splice(2, 1, SvgError)
        console.error(error)
      })
  }

  onBeforeMount(getGroup1)
  return {
    group1,
    group1Load,
    getGroup1,
  }
}

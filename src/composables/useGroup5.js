import { ref, onBeforeMount } from 'vue'
import getRandomImg from '../../api/api'
import SvgError from '../assets/error.svg?url&inline'

export default function () {
  const group5 = ref({ img: [] })
  const group5Load = ref(false)

  const getGroup5 = async () => {
    group5Load.value = true
    try {
      const img = await Promise.any([
        getRandomImg(),
        getRandomImg(),
        getRandomImg(),
      ])
      group5.value = { img: [img] }
    } catch (error) {
      group5.value = { img: [SvgError] }
    }
    group5Load.value = false
  }

  onBeforeMount(getGroup5)

  return {
    group5,
    group5Load,
    getGroup5,
  }
}

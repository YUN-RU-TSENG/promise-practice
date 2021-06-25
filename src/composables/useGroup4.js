import { ref, onBeforeMount } from 'vue'
import getRandomImg from '../../api/api'
import SvgError from '../assets/error.svg?url&inline'

export default function () {
  const group4 = ref({ img: [] })
  const group4Load = ref(false)

  const getGroup4 = async () => {
    group4Load.value = true
    try {
      const img = await Promise.race([
        getRandomImg(),
        getRandomImg(),
        getRandomImg(),
      ])
      group4.value = { img: [img] }
    } catch (error) {
      group4.value = { img: [SvgError] }
      console.error(error)
    }
    group4Load.value = false
  }

  onBeforeMount(getGroup4)

  return {
    group4,
    group4Load,
    getGroup4,
  }
}

import { ref, onBeforeMount } from 'vue'
import getRandomImg from '../../api/api'
import SvgError from '../assets/error.svg'

export default function () {
  const group2 = ref({ img: [] })
  const group2Load = ref(false)

  const getGroup2 = async () => {
    group2Load.value = true

    try {
      const img = await Promise.all([
        getRandomImg(),
        getRandomImg(),
        getRandomImg(),
      ])
      group2.value = { img }
    } catch (error) {
      group2.value = { img: [SvgError, SvgError, SvgError] }
    }

    group2Load.value = false
  }

  onBeforeMount(getGroup2)

  return {
    group2,
    group2Load,
    getGroup2,
  }
}

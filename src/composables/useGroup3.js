import { ref, onBeforeMount } from 'vue'
import getRandomImg from '../../api/api'
import SvgError from '../assets/error.svg?url&inline'

export default function () {
  const group3 = ref({ img: [] })
  const group3Load = ref(false)

  const getGroup3 = async () => {
    group3Load.value = true

    const data = await Promise.allSettled([
      getRandomImg(),
      getRandomImg(),
      getRandomImg(),
    ])

    group3.value.img = data.map((item) => {
      return item.status === 'fulfilled' ? item.value : SvgError
    })

    group3Load.value = false
  }

  onBeforeMount(getGroup3)

  return {
    group3,
    group3Load,
    getGroup3,
  }
}

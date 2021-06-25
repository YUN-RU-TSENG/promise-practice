import randomNum from '../src/composables/useRandom'

export default function getRandomImg() {
  const getImgs = [getImg1, getImg2, getImg3, getImgError]
  return getImgs[randomNum(getImgs.length)]()
}

function getImg1() {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          'https://img.freepik.com/free-photo/seal-beach-dune-island-near-helgoland_475641-192.jpg?size=338&ext=jpg'
        ),
      2000
    )
  })
}

function getImg2() {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          'https://image.freepik.com/free-photo/seal-beach-dune-island-near-helgoland_475641-138.jpg'
        ),
      4000
    )
  })
}

function getImg3() {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          'https://img.freepik.com/free-photo/seal-beach-dune-island-near-helgoland_475641-186.jpg?size=338&ext=jpg&ga=GA1.2.732244594.1613016764'
        ),
      3000
    )
  })
}

function getImgError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('請求被 reject'), 1000)
  })
}

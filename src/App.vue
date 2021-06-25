<template>
  <div class="wrapper">
    <!-- group1 -->
    <section class="promise">
      <button @click="getGroup1">請求 3 張圖片</button>
      <p>group1 將會請求三張圖片（隨機會請求失敗、成功），並各自呈現結果</p>
      <div class="img-contain row">
        <div v-for="(img, index) of group1.img" :key="index" class="col">
          <div v-if="img" class="img" :style="backgroundStyle(img)"></div>
          <div v-else class="img" :style="backgroundStyle(SvgLoad)"></div>
        </div>
      </div>
    </section>
    <!-- group2 -->
    <section class="promise">
      <button @click="getGroup2">請求 3 張圖片</button>
      <p>
        group2 將會請求三張圖片（隨機會請求失敗、成功），透過
        <code>Promise.all</code>
        等所有請求完後一併顯示結果。（一旦有錯誤則返回被 <code>reject</code> 的
        <code>promise</code>）
      </p>
      <div class="img-contain row">
        <template v-if="group2Load">
          <div v-for="n of 3" :key="n" class="col">
            <div class="img" :style="backgroundStyle(SvgLoad)"></div>
          </div>
        </template>
        <template v-else>
          <div v-for="(img, index) of group2.img" :key="index" class="col">
            <div class="img" :style="backgroundStyle(img)"></div>
          </div>
        </template>
      </div>
    </section>
    <!-- group3 -->
    <section class="promise">
      <button @click="getGroup3">請求 3 張圖片</button>
      <p>
        group3 將會請求三張圖片（隨機會請求失敗、成功），透過
        <code>Promise.allsettled</code> 等所有請求完後一併顯示結果
      </p>
      <div class="img-contain row">
        <template v-if="group3Load">
          <div v-for="n of 3" :key="n" class="col">
            <div class="img" :style="backgroundStyle(SvgLoad)"></div>
          </div>
        </template>
        <template v-else>
          <div v-for="(img, index) of group3.img" :key="index" class="col">
            <div class="img" :style="backgroundStyle(img)"></div>
          </div>
        </template>
      </div>
    </section>
    <!-- group4 -->
    <section class="promise">
      <button @click="getGroup4">請求最快結果</button>
      <p>
        group4 將會請求三張圖片（隨機會請求失敗、成功），透過
        <code>Promise.race</code> 顯示最快 <code>settled</code> 結果
      </p>
      <div class="img-contain row">
        <template v-if="group4Load">
          <div v-for="n of 3" :key="n" class="col">
            <div class="img" :style="backgroundStyle(SvgLoad)"></div>
          </div>
        </template>
        <template v-else>
          <div v-for="(img, index) of group4.img" :key="index" class="col">
            <div class="img" :style="backgroundStyle(img)"></div>
          </div>
        </template>
      </div>
    </section>
    <!-- group5 -->
    <section class="promise">
      <button @click="getGroup5">請求最快圖片</button>
      <p>
        group5 將會請求三張圖片（隨機會請求失敗、成功，透過
        <code>Promise.any</code> 顯示最快 <code>reslove</code> 結果
      </p>
      <div class="img-contain row">
        <template v-if="group5Load">
          <div v-for="n of 3" :key="n" class="col">
            <div
              class="img"
              :style="{
                background: 'center / cover no-repeat url(' + SvgLoad + ')',
              }"
            ></div>
          </div>
        </template>
        <template v-else>
          <div v-for="(img, index) of group5.img" :key="index" class="col">
            <div class="img" :style="backgroundStyle(img)"></div>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
  import useGroup1 from './composables/useGroup1'
  import useGroup2 from './composables/useGroup2'
  import useGroup3 from './composables/useGroup3'
  import useGroup4 from './composables/useGroup4'
  import useGroup5 from './composables/useGroup5'

  import SvgError from './assets/error.svg'
  import SvgLoad from './assets/load.svg'

  export default {
    setup() {
      const { group1, getGroup1 } = useGroup1()
      const { group2, group2Load, getGroup2 } = useGroup2()
      const { group3, group3Load, getGroup3 } = useGroup3()
      const { group4, group4Load, getGroup4 } = useGroup4()
      const { group5, group5Load, getGroup5 } = useGroup5()

      const backgroundStyle = (img) => ({
        background: `center / cover no-repeat url(${img})`,
      })

      return {
        group1,
        getGroup1,

        group2,
        group2Load,
        getGroup2,

        group3,
        group3Load,
        getGroup3,

        group4,
        group4Load,
        getGroup4,

        group5,
        group5Load,
        getGroup5,

        SvgError,
        SvgLoad,

        backgroundStyle,
      }
    },
  }
</script>

<style lang="scss">
  body {
    background-color: #333d4f;
  }
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>

<style lang="scss" scoped>
  .wrapper {
    width: 687px;
    margin: 0 auto;
    padding-top: 42px;
  }

  .row {
    display: flex;
    justify-content: space-around;
  }

  .col {
    flex: 0 1 32%;
    padding: 6px;
    background-color: #fff;
  }

  .promise {
    text-align: center;
    margin-bottom: 32px;

    button {
      padding: 12px 24px;
      margin-bottom: 19px;
      color: #f0f0f0;
      outline: none;
      border: 1px solid #f0f0f0;
      font: normal normal normal 12px/16px Helvetica Neue;
      background-color: transparent;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.3s ease-in-out;

      &:active,
      &:visited {
        outline: none;
      }
      &:hover {
        background-color: rgba(172, 171, 171, 0.274);
      }
    }

    p {
      margin-bottom: 19px;
      font: normal normal normal 12px/16px Helvetica Neue;
      color: #f0f0f0;
    }

    code {
      font: normal normal italic 12px/16px Helvetica Neue;
      color: #f86ed8;
    }

    .img-contain {
      font-size: 0;
    }

    .img {
      width: 100%;
      height: 130px;
    }
  }
</style>

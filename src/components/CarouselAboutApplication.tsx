import { Swiper, SwiperSlide } from 'swiper/vue'
import { Controller } from 'swiper/modules'
import { defineComponent, ref } from 'vue'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const androidSlides = [
      {
        id: 1,
        content: (
          <Slide
            images={['/src/assets/image/carousel/Android/1.png']}
            text="Ключевыми функциями приложения SLED являются создание 3D-модели следа обуви и
            анализ параметров следа обуви c помощью использования Искусственного интеллекта."
          />
        ),
      },
      {
        id: 2,
        content: (
          <Slide
            images={[
              '/src/assets/image/carousel/Android/2-1.png',
              '/src/assets/image/carousel/Android/2-2.png',
              '/src/assets/image/carousel/Android/2-3.png',
            ]}
            text="При использовании приложения, сотруднику правоохранительных органов необходимо произвести
            фотосъемку следа обуви c 5 разных ракурсов в количестве 5 изображений."
          />
        ),
      },
      {
        id: 3,
        content: (
          <Slide
            images={['/src/assets/image/carousel/Android/3.png']}
            text="Далее после загрузки 5 изображений выпадет окно на выбора одной
            из двух предложенных функций  приложения."
          />
        ),
      },
      {
        id: 4,
        content: (
          <Slide
            images={[
              '/src/assets/image/carousel/Android/4-1.png',
              '/src/assets/image/carousel/Android/4-2.png',
              '/src/assets/image/carousel/Android/4-3.png',
            ]}
            text='В случае выбора функции "3D-модель" на основании выбранных изображений будет создана 3D-модель,
            файл которой можно будет скачать на устройство для дальнейшего её использования
            (формат файла  OBJ, STL и PLY).'
          />
        ),
      },
      {
        id: 5,
        content: (
          <Slide
            images={[
              '/src/assets/image/carousel/Android/5-1.png',
              '/src/assets/image/carousel/Android/5-2.png',
              '/src/assets/image/carousel/Android/5-3.png',
            ]}
            text='В случае выбора функции "Искусственный интеллект" на основании выбранных изображений после их
            анализа будут выведены данные параметров следа обуви, которые можно сканировать или скачать файлом
            (формат файла TXT, DOC и PDF), и  ссылка обуви, с которой было обнаружено сходство с следом.'
          />
        ),
      },
      {
        id: 6,
        content: (
          <Slide
            images={['/src/assets/image/carousel/Android/6.png']}
            text="Все созданные  3D-модели и данные ИИ будут сохранятся в истории приложения для
            использования их по необходимости."
          />
        ),
      },
    ]

    const iOSSlides = [
      {
        id: 1,
        content: (
          <Slide
            images={['/src/assets/image/carousel/iOS/1.png']}
            text="Ключевыми функциями приложения SLED являются создание 3D-модели следа обуви и
            анализ параметров следа обуви c помощью использования Искусственного интеллекта."
          />
        ),
      },
      {
        id: 2,
        content: (
          <Slide
            images={[
              '/src/assets/image/carousel/iOS/2-1.png',
              '/src/assets/image/carousel/iOS/2-2.png',
              '/src/assets/image/carousel/iOS/2-3.png',
            ]}
            text="При использовании приложения, сотруднику правоохранительных органов необходимо произвести
            фотосъемку следа обуви c 5 разных ракурсов в количестве 5 изображений."
          />
        ),
      },
      {
        id: 3,
        content: (
          <Slide
            images={['/src/assets/image/carousel/iOS/3.png']}
            text="Далее после загрузки 5 изображений выпадет окно на выбора одной
            из двух предложенных функций  приложения."
          />
        ),
      },
      {
        id: 4,
        content: (
          <Slide
            images={[
              '/src/assets/image/carousel/iOS/4-1.png',
              '/src/assets/image/carousel/iOS/4-2.png',
              '/src/assets/image/carousel/iOS/4-3.png',
            ]}
            text='В случае выбора функции "3D-модель" на основании выбранных изображений будет создана 3D-модель,
            файл которой можно будет скачать на устройство для дальнейшего её использования
            (формат файла  OBJ, STL и PLY).'
          />
        ),
      },
      {
        id: 5,
        content: (
          <Slide
            images={[
              '/src/assets/image/carousel/iOS/5-1.png',
              '/src/assets/image/carousel/iOS/5-2.png',
              '/src/assets/image/carousel/iOS/5-3.png',
            ]}
            text='В случае выбора функции "Искусственный интеллект" на основании выбранных изображений после их
            анализа будут выведены данные параметров следа обуви, которые можно сканировать или скачать файлом
            (формат файла TXT, DOC и PDF), и  ссылка обуви, с которой было обнаружено сходство с следом.'
          />
        ),
      },
      {
        id: 6,
        content: (
          <Slide
            images={['/src/assets/image/carousel/iOS/6.png']}
            text="Все созданные  3D-модели и данные ИИ будут сохранятся в истории приложения для
            использования их по необходимости."
          />
        ),
      },
    ]

    const isAndroid = ref(true)

    const swiperInstance = ref<SwiperType | null>(null)

    const toggleOS = (isAndroidButton: boolean) => {
      if (isAndroidButton && !isAndroid.value) {
        swiperInstance.value?.slidePrev()
        isAndroid.value = !isAndroid.value
      } else if (!isAndroidButton && isAndroid.value) {
        swiperInstance.value?.slideNext()
        isAndroid.value = !isAndroid.value
      }
    }

    const handleSwiperInit = (swiper: SwiperType) => {
      swiperInstance.value = swiper
    }

    // Массив для хранения экземпляров горизонтальных свайперов
    const horizontalSwipers = ref<SwiperType[]>([])

    // Текущий индекс для синхронизации
    const currentHorizontalIndex = ref(0)

    // Функция для регистрации горизонтального свайпера
    const registerHorizontalSwiper = (swiper: SwiperType) => {
      horizontalSwipers.value.push(swiper)

      // Настроим контроллер для нового свайпера
      swiper.controller.control = horizontalSwipers.value.filter((s) => s !== swiper)
    }

    // Методы управления
    const goNextHorizontal = () => {
      horizontalSwipers.value[0]?.slideNext()
      horizontalSwipers.value[1]?.slideNext()
    }

    const goPrevHorizontal = () => {
      horizontalSwipers.value[0]?.slidePrev()
      horizontalSwipers.value[1]?.slidePrev()
    }

    const goToHorizontal = (index: number) => {
      horizontalSwipers.value[0]?.slideTo(index)
      horizontalSwipers.value[1]?.slideTo(index)
    }

    return () => (
      <div class="container h-screen flex flex-col relative">
        <div class="flex flex-row h-[90vh]">
          <div class="flex flex-col justify-center">
            <div
              class="w-11 h-11 flex justify-center items-center rounded-full top-[50%]"
              style="border: 1px solid #F1F1F1; box-shadow: 0px 1px 215px 0px #00000040;"
              onClick={goPrevHorizontal}
            >
              <svg width="39" height="24" viewBox="0 0 39 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.4852 1.39344C11.071 0.807655 12.0205 0.807655 12.6063 1.39344C13.1921 1.97923 13.1921 2.92875 12.6063 3.51454L5.62098 10.4999H38.9999V13.4999H5.62098L12.6063 20.4852C13.1921 21.071 13.1921 22.0205 12.6063 22.6063C12.0205 23.1921 11.071 23.1921 10.4852 22.6063L0.93934 13.0604C0.353553 12.4746 0.353553 11.5251 0.93934 10.9393L10.4852 1.39344Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div class="absolute bottom-20 z-[3] flex flex-row">
            {/* AndroidButton */}
            <div
              onClick={() => toggleOS(true)}
              class={
                (isAndroid.value ? 'bg-blue' : 'bg-white') +
                ' w-11 h-11 flex justify-center items-center rounded-[13px] cursor-pointer'
              }
            >
              <svg width="48" height="31" viewBox="0 0 48 31" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M47.2758 26.0686C46.7246 20.5328 43.9791 15.4546 40.0118 11.6492C39.2754 10.9426 39.0839 9.84647 39.6075 8.97173L42.7063 3.80627C43.3108 2.79745 42.9851 1.49065 41.9763 0.886207C40.9675 0.281762 39.6607 0.609524 39.0562 1.61622L36.2447 6.30067C35.6892 7.2265 34.5186 7.61172 33.546 7.14136C30.5322 5.6792 27.2333 4.84064 23.8535 4.84064C20.4737 4.84064 17.1748 5.6792 14.1611 7.14136C13.1906 7.61172 12.0178 7.2265 11.4623 6.30067L8.65082 1.61622C8.04637 0.611652 6.7417 0.281762 5.73074 0.888335C4.72404 1.49278 4.39627 2.79957 5.00285 3.8084L8.10171 8.97386C8.62528 9.8486 8.43373 10.9447 7.69732 11.6513C3.73011 15.4567 0.984553 20.5349 0.433314 26.0707C0.171528 28.6864 1.04415 30.3806 3.50025 30.3806H44.2068C46.6629 30.3806 47.5355 28.6864 47.2758 26.0686ZM14.276 23.9956C12.5137 23.9956 11.0835 22.5654 11.0835 20.8031C11.0835 19.0408 12.5137 17.6106 14.276 17.6106C16.0383 17.6106 17.4685 19.0408 17.4685 20.8031C17.4685 22.5654 16.0383 23.9956 14.276 23.9956ZM33.431 23.9956C31.6688 23.9956 30.2385 22.5654 30.2385 20.8031C30.2385 19.0408 31.6688 17.6106 33.431 17.6106C35.1933 17.6106 36.6235 19.0408 36.6235 20.8031C36.6235 22.5654 35.1933 23.9956 33.431 23.9956Z"
                  fill={isAndroid.value ? '#fff' : '#273777'}
                />
              </svg>
            </div>
            {/* iOSButton */}
            <div
              onClick={() => toggleOS(false)}
              class={
                (isAndroid.value ? 'bg-white' : 'bg-blue') +
                ' w-11 h-11 flex justify-center items-center rounded-[13px] cursor-pointer'
              }
            >
              <svg
                width="37"
                height="45"
                viewBox="0 0 37 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.2422 15.125C35.0471 15.2475 30.4021 17.8311 30.4021 23.5595C30.621 30.0924 36.2638 32.3835 36.3606 32.3835C36.2638 32.5059 35.5087 35.5045 33.2719 38.6477C31.4967 41.3553 29.5264 44.0852 26.5345 44.0852C23.6885 44.0852 22.6669 42.2807 19.3831 42.2807C15.8565 42.2807 14.8587 44.0852 12.1587 44.0852C9.16674 44.0852 7.0505 41.2091 5.17857 38.5269C2.74663 35.0164 0.679571 29.5073 0.606597 24.2177C0.557419 21.4147 1.09362 18.6594 2.45474 16.3191C4.37585 13.0518 7.80562 10.8339 11.5511 10.7607C14.4209 10.6637 16.9749 12.7354 18.7263 12.7354C20.4047 12.7354 23.5426 10.7607 27.0929 10.7607C28.6254 10.7623 32.7119 11.225 35.2422 15.125ZM18.4836 10.2011C17.9728 7.64134 19.3831 5.08158 20.6966 3.44875C22.375 1.47408 25.0259 0.133789 27.3118 0.133789C27.4578 2.69354 26.5329 5.20401 24.8799 7.0324C23.3966 9.00707 20.8426 10.4936 18.4836 10.2011Z"
                  fill={isAndroid.value ? '#273777' : '#fff'}
                />
              </svg>
            </div>
          </div>
          <Swiper direction="vertical" onSwiper={handleSwiperInit}>
            <SwiperSlide>
              <Swiper
                modules={[Controller]}
                spaceBetween={30}
                onSwiper={registerHorizontalSwiper}
                onSlideChange={(swiper) => (currentHorizontalIndex.value = swiper.activeIndex)}
              >
                {androidSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>{slide.content}</SwiperSlide>
                ))}
              </Swiper>
            </SwiperSlide>
            <SwiperSlide>
              <Swiper
                modules={[Controller]}
                spaceBetween={30}
                onSwiper={registerHorizontalSwiper}
                onSlideChange={(swiper) => (currentHorizontalIndex.value = swiper.activeIndex)}
              >
                {iOSSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>{slide.content}</SwiperSlide>
                ))}
              </Swiper>
            </SwiperSlide>
          </Swiper>
          <div class="flex flex-col justify-center">
            <div
              class="min-w-11 h-11 flex justify-center items-center rounded-full top-[50%] "
              style="border: 1px solid #F1F1F1; box-shadow: 0px 1px 215px 0px #00000040;"
              onClick={goNextHorizontal}
            >
              <svg width="39" height="24" viewBox="0 0 39 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M26.3936 1.38368C26.9793 0.797889 27.9289 0.797889 28.5146 1.38368L38.0605 10.9296C38.6463 11.5154 38.6463 12.4649 38.0605 13.0507L28.5146 22.5966C27.9289 23.1824 26.9793 23.1824 26.3936 22.5966C25.8078 22.0108 25.8078 21.0613 26.3936 20.4755L33.3789 13.4901H0L0 10.4901H33.3789L26.3936 3.50477C25.8078 2.91898 25.8078 1.96946 26.3936 1.38368Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Общая пагинация горизонтальных слайдеров */}
        <div class="custom-pagination mt-6">
          {androidSlides.map((_, index) => (
            <button
              class={{ active: index === currentHorizontalIndex.value }}
              onClick={() => goToHorizontal(index)}
            />
          ))}
        </div>
      </div>
    )
  },
})

const Slide = defineComponent({
  props: {
    text: String,
    images: Array<string>,
  },
  setup(props) {
    return () => (
      <div class="h-full flex flex-col">
        <div class="relative justify-center flex flex-row">
          <div
            class="absolute rounded-full h-95 w-95 top-10 z-[-1]"
            style="background: linear-gradient(180deg, #C8D3FF 0%, rgba(255, 255, 255, 0) 100%);"
          />
          {props.images?.map((image) => (
            <img class="h-90 object-cover" src={image}></img>
          ))}
        </div>
        <div class="px-10 pt-5 text-center">{props.text}</div>
      </div>
    )
  },
})

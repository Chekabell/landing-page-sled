import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { defineComponent } from 'vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slides = [
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

    return () => (
      <div class="h-screen flex flex-row">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>{slide.content}</SwiperSlide>
          ))}
        </Swiper>
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
      <div class="h-screen">
        <div class="relative justify-center flex flex-row">
          <div
            class="absolute rounded-full h-85 w-85 top-20 z-[1]"
            style="background: linear-gradient(0deg,rgba(255, 255, 255, 1) 0%, rgba(200, 211, 255, 1) 59%);"
          />
          {props.images?.map((image) => (
            <img class="h-100 object-cover z-[2]" src={image}></img>
          ))}
        </div>
        <div class="relative z-[2]">{props.text}</div>
      </div>
    )
  },
})

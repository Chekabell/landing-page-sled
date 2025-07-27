import { defineComponent, ref } from 'vue'
import Container from './Container'
import Sled from '@/assets/logo.svg'

export default defineComponent({
  setup() {
    const isMenuOpen = ref(false)

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    const closeMenu = () => {
      isMenuOpen.value = false
    }

    return () => (
      <>
        <header
          class="fixed top-0  z-10 w-full py-[1.667rem]  bg-white/70 dark:bg-black/50 backdrop-blur-[10px] overflow-hidden"
          style={{
            background:
              'radial-gradient(circle at right, white 0%, #C8D3FF 60%, rgba(124, 131, 159, 0.25) 100%)',
          }}
        >
          <Container>
            <div class="flex gap-[1.5rem] justify-between items-center">
              <div class="min-w-[112px] min-h-[28px]">
                <img src={Sled} alt="След" class="w-full h-full" />
              </div>
              <nav class="hidden lg:flex items-center">
                <ul class="flex items-center gap-[2rem] text-[clamp(14px,2vw,1rem)]">
                  <li>
                    <a href="#goal">Цель</a>
                  </li>
                  <li>
                    <a href="#problems">Проблемы</a>
                  </li>
                  <li>
                    <a href="#audiens">Аудитория</a>
                  </li>
                  <li>
                    <a href="#about">О приложении</a>
                  </li>
                  <li>
                    <a href="#advantages">Достижения</a>
                  </li>
                  <li>
                    <a href="#contacts">Контакты</a>
                  </li>
                </ul>
              </nav>
            </div>
          </Container>
        </header>
        <button
          class={[
            'lg:hidden fixed flex flex-col items-center justify-center burger-btn z-50 top-[13px] translate-y-[50%] right-[1.5rem] ',
            isMenuOpen.value ? 'open' : 'close',
          ]}
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/* Затемнение фона */}
        {isMenuOpen.value && (
          <div
            class="fixed inset-0 bg-black/60 z-20 transition-opacity duration-300"
            onClick={closeMenu}
          />
        )}

        {/* Сайдбар */}
        <div
          class={[
            'fixed top-0 right-0 z-20 h-full w-[350px] max-w-sm bg-white  shadow-lg transition-transform duration-300 transform',
            isMenuOpen.value ? 'translate-x-0' : 'translate-x-full',
          ]}
        >
          <div class="flex flex-col p-6 pt-24 gap-4 text-[clamp(14px,4vw,1rem)] font-medium">
            <a href="#goal" onClick={closeMenu}>
              Цель
            </a>
            <a href="#problems" onClick={closeMenu}>
              Проблемы
            </a>
            <a href="#audiens" onClick={closeMenu}>
              Аудитория
            </a>
            <a href="#about" onClick={closeMenu}>
              О приложении
            </a>
            <a href="#advantages" onClick={closeMenu}>
              Достижения
            </a>
            <a href="#contacts" onClick={closeMenu}>
              Контакты
            </a>
          </div>
        </div>
      </>
    )
  },
})

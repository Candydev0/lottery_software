// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-flip'
import { EffectFlip, Autoplay } from 'swiper/modules'
import { ReactNode } from 'react'

export default function App({ images }: { images: ReactNode[] }) {
	return (
		<>
			<Swiper
				effect={'flip'}
				autoplay={{
					delay: 100,
					disableOnInteraction: false,
				}}
				modules={[EffectFlip, Autoplay]}
				className="mySwiper"
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>{image}</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

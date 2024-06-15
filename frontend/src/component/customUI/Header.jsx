import { useState } from 'react';
import { Carousel } from 'flowbite-react';

function HeaderCarousel({ media, headerText, descriptionText }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<div className='flex flex-col items-center'>
			<div className='w-full h-64 md:h-96'>
				<Carousel
					className='rounded-lg overflow-hidden'
					showIndicators={false}
					showStatus={false}
					selectedItem={currentIndex}
					onChange={setCurrentIndex}
				>
					{media.map((item, index) =>
						item.isVideo ? (
							<video key={index} controls>
								<source src={item.url} type='video/mp4' />
								Your browser does not support the video tag.
							</video>
						) : (
							<img key={index} src={item.url} alt={`Slide ${index}`} />
						)
					)}
				</Carousel>
			</div>
			<div className='mt-4 text-center'>
				<h1 className='text-3xl font-bold'>{headerText}</h1>
				<p className='text-gray-600 mt-2'>{descriptionText}</p>
			</div>
		</div>
	);
}

export default HeaderCarousel;

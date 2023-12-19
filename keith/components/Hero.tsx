import Image from 'next/image';
// Assuming you have these images in your public directory
import pizzaBackground from '/public/images/frame1.webp';
import leftSideImage from '/public/images/herof.webp';

const Hero = () => {
    return (
        <div id="Hero" className="relative bg-yellow-400 flex flex-col md:flex-row items-center justify-end min-h-screen">
            
            {/* Background Image - Optimized with lazy loading */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={pizzaBackground}
                    alt="Pizza"
                    layout="fill"
                    objectFit="cover"
                    quality={75} // Adjust quality for performance
                    loading="lazy" // Ensure lazy loading is enabled
                />
            </div>

            {/* Left Side Image - Optimized with lazy loading */}
            <div className="absolute left-0 top-0 z-10 w-full md:w-1/2 h-full">
                <Image
                    src={leftSideImage}
                    alt="Left Side Image"
                    layout="fill"
                    objectFit="contain"
                    quality={75} // Adjust quality for performance
                    loading="lazy" // Ensure lazy loading is enabled
                />
            </div>

            {/* Text Content */}
            <div className="relative z-20 w-full max-w-full px-4 md:max-w-lg md:p-8">
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900">
                        <span className="block xl:inline">Taste Italy Here! Served Hot, Fresh, and Fast</span><br />
                    </h1>
                    <p className="text-base sm:text-2xl text-blue-700">
                        <strong>Enjoy 50% Off On Your First Order</strong>
                    </p>
                    <p className="text-base sm:text-xs text-blue-700">
                        <strong>*OFFER VALID TILL CHRISTMAS</strong>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Hero;


import Image from 'next/image';
import pizzaBackground from "/Users/dineshchalla/Desktop/keith/group-project/keith/public/images/frame1.jpg";
import leftSideImage from "/Users/dineshchalla/Desktop/keith/group-project/keith/public/images/herof.png";

const Hero = () => {
    return (
        <div id="Hero" className="relative bg-yellow-400 flex flex-col md:flex-row items-center justify-end min-h-screen">
            
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={pizzaBackground}
                    alt="Pizza"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>

            {/* Left Side Image */}
            <div className="absolute left-0 top-0 z-10 w-full md:w-1/2 h-full">
                <Image
                    src={leftSideImage}
                    alt="Left Side Image"
                    layout="fill"
                    objectFit="contain"
                />
            </div>

            {/* Text Content */}
            <div className="relative z-20 w-full max-w-full px-4 md:max-w-lg md:p-8">
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900">
                        <span className="block xl:inline">Gourmet Pies: Served Hot, Fresh, and Fast</span><br />
                       
                    </h1>
                    <p className="text-base sm:text-2xl text-blue-700">
                    Exclusive Offer: Enjoy 50% Off ON Your First Order
                   
                    </p>
                   
                </div>
            </div>

        </div>
    );
};

export default Hero;
import LeftText from '../components/home/LeftText'
import RightText from '../components/home/RightText'
import Bottom from '../components/home/Bottom'

const HeroSection = () => {

    return (
        <div className='h-fit w-full flex flex-col px-2 md:px-8 lg:px-8 xl:px-4 pt-20 lg:pt-[8vh] xl:pt-[15vh] relative hero-section md:pb-8 xl:pb-12'>

            <div className='flex flex-col xl:flex-row w-full justify-evenly h-fit lg:gap-8 md:gap-5'>

                <LeftText />
                <RightText />
            </div>
            <Bottom />
        </div>

    )
}

export default HeroSection

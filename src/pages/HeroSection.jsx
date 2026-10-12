import LeftText from '../components/home/LeftText'
import RightText from '../components/home/RightText'
import Bottom from '../components/home/Bottom'

const HeroSection = () => {

    return (
        <div className='min-h-[100vh] w-full flex flex-col px-2 md:px-4 pt-20 md:pt-[15vh] relative hero-section'>

            <div className='flex flex-col md:flex-row w-full justify-evenly h-fit'>

                <LeftText />
                <RightText />
            </div>
            <Bottom />
        </div>

    )
}

export default HeroSection

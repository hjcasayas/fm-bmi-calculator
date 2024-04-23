import Image from 'next/image'
import logo from '@/assets/images/logo.svg';

export const HeroComponent = () => {
  return <header className="flex flex-col bg-transparent">
    <div className='mb-6'>
      <Image className='mx-auto' src={logo} width={40} height={40} alt='Logo' />
    </div>
    <h1 className='font-semibold text-5xl leading-[1.1] tracking-tighter text-center mb-6 text-gunmetal'>Body Mass
      Index Calculator</h1>
    <p className='text-center text-base text-dark-electric-blue'>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
  </header>;
}

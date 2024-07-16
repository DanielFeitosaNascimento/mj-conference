import Image from 'next/image'
import { ModeToggle } from './button-theme'
import Logo from './logo'

export const Header = () => {
  return (
    <div className='w-full bg-background'>
      <div className="absolute top-4 left-4">
        <Logo />
      </div>
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
    </div>
  )
}
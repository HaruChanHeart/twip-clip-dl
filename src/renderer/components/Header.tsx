import { Button, Image } from "@nextui-org/react"
import icon from '../../../assets/logo.svg';

export function Header() {
    return (
        <header className='w-full flex flex-col gap-1 items-center justify-center py-20'>
            <Image
                isBlurred
                radius='none'
                src={icon}
                width={'100%'}
                alt='THE FINALS LOGO'
                className='my-2'
            />
            <p className='text-xl dark:text-zinc-400'>Unofficial Clip Downloader</p>
        </header>
    )
}
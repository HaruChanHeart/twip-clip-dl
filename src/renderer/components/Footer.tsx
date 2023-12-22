import { Link } from "@nextui-org/react"

export function Footer() {
    return (
        <footer className='w-full flex flex-col gap-1 items-center justify-center py-20'>
            <span>&copy; {new Date().getFullYear()} HaruChanHeart</span>
            <p className='text-justify text-sm dark:text-zinc-600 mb-3'>This project is not affiliated with or endorsed by EJN Crop. TWIP&reg; is a registered trademark of EJN Crop.</p>
            <Link href='https://github.com/HaruChanHeart' color='foreground' size='lg'>
                <i className='fa-brands fa-github' />
            </Link>
        </footer>
    )
}
import Link from 'next/link'

interface ButtonLinkParams {
  label: string
  href: string
}

const ButtonLink = ({ label = '', href = '#' }: ButtonLinkParams): JSX.Element => {
  return (
        <Link
            href={href}
            className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
            {label}
        </Link>
  )
}

export default ButtonLink

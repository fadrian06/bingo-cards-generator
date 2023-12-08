import './page.css'

interface Props {
  readonly children: React.JSX.Element[]
}

export default function Page({ children }: Props) {
  return <div className='page'>{children}</div>
}

import { NextPage } from 'next'
import { useRouter } from 'next/router'

const CarPage: NextPage = () => {
    const { asPath, pathname, push, replace, query } = useRouter()

    console.log("AS PATH", asPath)
    console.log("PATHNAME", pathname)
    console.log("QUERY", query)

    return (
        <div>
            <button onClick={() => push('/')}>go home</button>
            <button onClick={() => replace('/')}>go home</button>
        </div>
    )
}

export default CarPage

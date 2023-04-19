import { FC } from "react"
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { ICarData } from "@/interfaces/car.interface"
import Layout from "@/components/layout/Layout"
import styles from './Home.module.scss'
import CarItem from "@/components/ui/car/CarItem"

const inter = Inter({ subsets: ['latin'] });

const Home: FC<ICarData> = ({ cars }) => {
    return (
        <Layout title="Home" description="We love our customers, we like to sale cars">
            <h1>Hello htmllessons.ru</h1>

            {cars.length ? cars.map(car => <CarItem key={car.id} car={car} />) : <div>Cars not found!</div>}
        </Layout>
    )
}

export default Home

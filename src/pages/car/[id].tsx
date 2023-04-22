import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { ICarData, ICarDataSingle } from "@/interfaces/car.interface";
import { CarService } from "@/services/car.service";
import CarDetail from "@/components/screens/car-detail/CarDetail";
import { ICar } from "@/interfaces/car.interface";

const CarDetailPage: NextPage<ICarDataSingle> = ({ car }) => {
    return <CarDetail car={car} />
}

interface Params extends ParsedUrlQuery {
    id: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const cars = await CarService.getAll()

    return {
        paths: cars.map(car => ({
            params: {
                id: car.id.toString()
            }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<ICarDataSingle> = async ({
    params,
}) => {
  const car = await CarService.getById(String(params?.id))

  return {
    props: { car },
    revalidate: 60
  }
}

export default CarDetailPage;

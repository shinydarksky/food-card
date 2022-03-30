import CategoryFood from "../components/categoryProduct"
import { useRouter } from "next/router";
import Layout from "../layout"
import { getPageHome, getFoodFromArea } from "./api/food";

export async function getStaticProps(context) {
	try {
		// Fetch data from external API
		const homeResponse = await getFoodFromArea()
		if (!homeResponse) {
			context.res.statusCode = 404;
			return {
				notFound: true,
			}
		}
		return {
			props: { listFood: homeResponse },
			revalidate: 60,
		}

	} catch (e) {
		return {
			notFound: true,
		}
	}
}


export default function Home({ listFood }) {

	const router = useRouter()

	function handleSearch(e) {
		e.preventDefault()
		router.push({
			pathname: '/tim-kiem',
			query: { keyword: e.target.search.value }
		})
	}

	return (
		<Layout>
			<div className="wrap-home">
				<div className="banner"
					style={{
						backgroundImage: `url("/assets/images/home-banner.jpg")`
					}}
				>
					<div className="content">
						<div className="title">
							<h1>Đặt món ăn tại</h1>
							<h2>LTSHIP</h2>

						</div>
						<div className="search-input">
							<form onSubmit={handleSearch}>
								<button className="icon-search">
									<i type="button" className="fas fa-search "></i>
								</button>
								<input
									name="search"
									placeholder="Tìm quán ăn, trà sữa yêu thích để đặt LTSHIP giao ngay"
									type="text"
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="food-category">
				<CategoryFood
					title="Món ăn hot"
					subtitle="Khám phá những món ăn được yêu thích nhất"
					listFood={listFood}
				/>
			</div>
			<div className="food-category">
				<CategoryFood
					title="Món ăn mới cập nhật"
					subtitle="Cập nhật những món ăn mới cập nhật gần đây"
					listFood={listFood}
				/>
			</div>
			<div className="food-category">
				<CategoryFood
					title="Món ăn được đặt nhiều nhất"
					subtitle="Bộ sưu tập món ăn được đặt nhiều nhất"
					listFood={listFood}
				/>
			</div>
		</Layout>
	)
}

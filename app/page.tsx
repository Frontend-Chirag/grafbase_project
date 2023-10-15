import Categories from "@/components/Categories"
import LoadMore from "@/components/LoadMore"
import Posts from "@/components/Posts"


const Home = () => {
  return (
    <section className="flex-start flex-col paddings mb-10 ">
      <Categories/>
      <Posts/>
      <LoadMore/>    
    </section>
  )
}

export default Home
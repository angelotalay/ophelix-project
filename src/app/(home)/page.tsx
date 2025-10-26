import Hero from "@/components/home/Hero"
import {LANDING_PAGE_QUERY} from "@/sanity/lib/queries"
import {sanityFetch} from "@/sanity/lib/live";


export default async function Home() {
    const {data: page} = await sanityFetch({query: LANDING_PAGE_QUERY})
    return (
        <main className="light">
            {
                page &&
                <Hero page={page}/>
            }
        </main>
    );
}

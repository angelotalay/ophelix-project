import Image from "next/image";
import {urlFor} from "@/sanity/lib/sanityImageUrl"
import {Page} from "@/sanity/types"

export default function Hero({page}: { page: Page }) {

    return (
        <div>
            {
                page.mainImage &&
                <Image width={1920} height={1080} src={urlFor(page.mainImage).width(1920).height(1080).url()}
                       alt="Landing page image"/>

            }
        </div>
    )
};


import Image from "next/image";
import {urlFor} from "@/sanity/lib/sanityImageUrl"
import {PAGE_QUERYResult} from "@/sanity/types";

// type PageBuilderProps = {
//     content: NonNullable<PAGE_QUERYResult>["content"];
// };
//
//
// function PageBuilderComponent({content}: PageBuilderProps) {
//     if (!Array.isArray(content)) {
//         return null;
//     }
//     return (
//         <div>
//             {content.map((block) => {
//                 switch (block._type) {
//                     case "hero":
//                         return <Image alt={"The hero image of a watch"}
//                                       src={urlFor(block.mainImage).width(800).height(600).url()}
//                                       width={680}
//                                       height={600}
//                         />
//                 }
//             })}
//         </div>
//     )
// }

// This will change into a more dynamic component
export default function Hero({page}: { page: PAGE_QUERYResult }) {
    if (!page?.mainImage) return null;

    return (
        <section className="relative w-full h-[100dvh]">
            <Image
                alt="The hero image of a watch"
                src={urlFor(page.mainImage).url()}
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />
        </section>
    );
}

